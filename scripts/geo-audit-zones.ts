/**
 * Phase 1 — audit géographique des zones (API officielles).
 * Usage: npx tsx scripts/geo-audit-zones.ts
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { rawZones as zones } from "../src/data/zones";
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
  type GeoVerdict,
} from "./lib/geo-verify";

const OUT_DIR = join(process.cwd(), "reports");

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const verdicts: GeoVerdict[] = [];
  const inseeCache = new Map<string, string>();
  const verifyCache = loadVerifyCache();

  console.log(`Audit de ${zones.length} zones…`);

  for (const zone of zones) {
    let insee = inseeCache.get(zone.slug);
    if (!insee) {
      insee = await fetchInseeCode(zone);
      inseeCache.set(zone.slug, insee);
      await throttle();
    }

    const elements = collectElements(zone);
    for (const el of elements) {
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
      const { valid, score } = result;
      verdicts.push({
        zoneSlug: zone.slug,
        commune: zone.name,
        insee,
        element: el.value,
        type: el.type,
        source: el.source,
        verdict: valid ? "validé" : "signalé",
        score,
        action: valid ? "conserver" : "supprimer",
      });
      process.stdout.write(valid ? "." : "x");
    }
  }

  console.log("\n");

  const toRemove = verdicts.filter((v) => v.action === "supprimer");
  const byCommune = new Map<string, number>();
  for (const v of toRemove) {
    byCommune.set(v.commune, (byCommune.get(v.commune) ?? 0) + 1);
  }
  const top10 = [...byCommune.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const jsonPath = join(OUT_DIR, "geo-audit-phase1.json");
  writeFileSync(jsonPath, JSON.stringify({ verdicts, summary: {
    totalChecked: verdicts.length,
    totalRemove: toRemove.length,
    top10: top10.map(([commune, count]) => ({ commune, count })),
  } }, null, 2));

  const mdLines = [
    "# Rapport d'analyse — Phase 1 géographie",
    "",
    "| commune | élément cité | type | verdict | action |",
    "|---|---|---|---|---|",
    ...verdicts.map(
      (v) =>
        `| ${v.commune} | ${v.element.replace(/\|/g, "\\|")} | ${v.type} | ${v.verdict} | ${v.action} |`,
    ),
    "",
    "## Synthèse",
    "",
    `- Total contrôlé : **${verdicts.length}**`,
    `- Total à supprimer : **${toRemove.length}**`,
    "",
    "### 10 communes les plus touchées",
    "",
    ...top10.map(([c, n]) => `- ${c} : ${n}`),
  ];
  writeFileSync(join(OUT_DIR, "geo-audit-phase1.md"), mdLines.join("\n"));

  console.log(`✓ ${jsonPath}`);
  console.log(`Contrôlé: ${verdicts.length}, supprimer: ${toRemove.length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
