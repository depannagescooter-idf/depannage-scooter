/**
 * Phase 1 — applique le rapport d'audit aux zones (génère src/data/zones-geo-applied.ts).
 * Usage: npx tsx scripts/geo-apply-phase1.ts
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { rawZones as zones } from "../src/data/zones";
import type { Zone } from "../src/data/types";
import {
  cacheKey,
  loadVerifyCache,
  saveVerifyCache,
  type CacheEntry,
} from "./lib/geo-cache";
import {
  collectElements,
  fetchInseeCode,
  throttle,
  verifyElement,
} from "./lib/geo-verify";
import {
  cleanupProse,
  filterArrayItems,
  rewriteIntroAfterRemovals,
  stripTransport,
} from "./lib/geo-text-apply";

type ZonePatch = Pick<
  Zone,
  "intro" | "axes" | "landmarks" | "commonInterventions" | "quartiers"
>;

async function buildRemoveSets(): Promise<Map<string, Set<string>>> {
  const bySlug = new Map<string, Set<string>>();
  const inseeCache = new Map<string, string>();
  const verifyCache = loadVerifyCache();

  for (const zone of zones) {
    let insee = inseeCache.get(zone.slug);
    if (!insee) {
      insee = await fetchInseeCode(zone);
      inseeCache.set(zone.slug, insee);
      await throttle();
    }
    const remove = new Set<string>();
    for (const el of collectElements(zone)) {
      const key = cacheKey(insee, el.type, el.value);
      let result: CacheEntry;
      if (verifyCache[key]) {
        result = verifyCache[key];
      } else {
        await throttle(40);
        const { valid, score } = await verifyElement(el.value, el.type, insee);
        result = { valid, score };
        verifyCache[key] = result;
        saveVerifyCache(verifyCache);
      }
      if (!result.valid) remove.add(el.value);
    }
    bySlug.set(zone.slug, remove);
    process.stdout.write(remove.size ? "x" : ".");
  }
  console.log("\n");
  return bySlug;
}

function applyZone(
  zone: Zone,
  remove: Set<string>,
  slugToName: Map<string, string>,
): ZonePatch {
  const neighbourLabel = zone.neighbours
    .slice(0, 4)
    .map((s) => slugToName.get(s) ?? s)
    .join(", ");
  const axes = filterArrayItems(zone.axes, remove);
  const landmarks = filterArrayItems(zone.landmarks, remove);
  const commonInterventions = filterArrayItems(zone.commonInterventions, remove).map(
    (s) => cleanupProse(stripTransport(s)),
  );
  const quartiers = zone.quartiers
    ? filterArrayItems(zone.quartiers, remove)
    : undefined;

  let intro = rewriteIntroAfterRemovals(
    zone.intro,
    [...remove],
    zone.name,
    zone.departement,
    zone.etaMinutes,
    neighbourLabel,
    zone.postalCodes[0] ?? "",
  );

  const validAxes = axes.slice(0, 2);
  if (validAxes.length > 0 && !intro.includes(validAxes[0]!)) {
    const lead = `À ${zone.name}, nos dépanneurs empruntent le plus souvent ${validAxes.join(" ou ")} pour rejoindre votre panne.`;
    intro = cleanupProse(`${lead} ${intro}`);
  }

  const topIntervention = commonInterventions[0];
  if (topIntervention) {
    intro = cleanupProse(
      `${intro} Interventions courantes : ${topIntervention.charAt(0).toLowerCase()}${topIntervention.slice(1)}.`,
    );
  }
  const secondIntervention = commonInterventions[1];
  if (secondIntervention) {
    intro = cleanupProse(
      `${intro} Les équipes traitent aussi : ${secondIntervention.charAt(0).toLowerCase()}${secondIntervention.slice(1)}.`,
    );
  }

  return {
    intro: cleanupProse(intro),
    axes,
    landmarks,
    commonInterventions,
    ...(quartiers?.length ? { quartiers } : {}),
  };
}

function serializeTs(patches: Record<string, ZonePatch>): string {
  return `/** Généré par scripts/geo-apply-phase1.ts — ne pas éditer à la main. */
import type { Zone } from "./types";

export type ZoneGeoPatch = Pick<
  Zone,
  "intro" | "axes" | "landmarks" | "commonInterventions" | "quartiers"
>;

export const zonesGeoApplied: Record<string, ZoneGeoPatch> = ${JSON.stringify(patches, null, 2)} as Record<string, ZoneGeoPatch>;

export function applyGeoToZone(zone: Zone): Zone {
  const patch = zonesGeoApplied[zone.slug];
  if (!patch) return zone;
  return { ...zone, ...patch };
}
`;
}

async function main() {
  const removeSets = await buildRemoveSets();
  const slugToName = new Map(zones.map((z) => [z.slug, z.name]));
  const patches: Record<string, ZonePatch> = {};
  for (const zone of zones) {
    const remove = removeSets.get(zone.slug) ?? new Set();
    patches[zone.slug] = applyZone(zone, remove, slugToName);
  }

  const outPath = join(process.cwd(), "src", "data", "zones-geo-applied.ts");
  writeFileSync(outPath, serializeTs(patches), "utf8");
  console.log(`✓ ${outPath} (${Object.keys(patches).length} zones)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
