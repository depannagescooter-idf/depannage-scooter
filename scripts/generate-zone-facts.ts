/**
 * Génère src/data/zone-facts.ts : données calculées des fiches de zone, uniquement depuis des services publics.
 * - Base Adresse Nationale (api-adresse.data.gouv.fr) : coordonnées de la base (company.address).
 * - geo.api.gouv.fr : code INSEE, population, surface, mairie, contours (limitrophes calculés sur les contours).
 * - OSRM (router.project-osrm.org) : distance et durée routières de la base à la mairie, sans circulation.
 * Requêtes séquentielles, 3 essais chacune. Une donnée non obtenue vaut null et n'est pas affichée.
 * Si la base ne peut pas être géocodée, rien n'est écrit.
 * Usage : npm run facts:zones -- paris-11e nanterre
 *         npm run facts:zones            (les 67 zones de Paris et de la petite couronne)
 * Les zones de grande couronne (77, 78, 91, 95) sont refusées : elles n'ont pas de fiche.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { company } from "../src/data/company";
import { zoneFacts as previousFacts, type ZoneFacts } from "../src/data/zone-facts";
import { zones } from "../src/data/zones";

const OUT_PATH = join(process.cwd(), "src", "data", "zone-facts.ts");
const USER_AGENT = "depannagescooter.com (fiches de zones)";
const TOLERANCE_M = 25;
const MIN_SHARED_VERTICES = 2;
const IDF_DEPARTMENTS = ["77", "78", "91", "92", "93", "94", "95"];
const FACT_SHEET_DEPTS = new Set(["75", "92", "93", "94"]);

const warnings: string[] = [];
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function getJson<T>(url: string, pauseMs = 150, timeoutMs = 20_000): Promise<T | null> {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": USER_AGENT }, signal: AbortSignal.timeout(timeoutMs) });
      if (res.ok) {
        const json = (await res.json()) as T;
        await sleep(pauseMs);
        return json;
      }
      if (res.status < 500 && res.status !== 429) break;
    } catch {
      // réseau ou délai dépassé : nouvel essai
    }
    await sleep(1000 * attempt);
  }
  warnings.push(`sans réponse : ${url}`);
  return null;
}

const nameKey = (s: string) =>
  s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/[’'`-]/g, " ").replace(/\s+/g, " ").trim();

interface GeoCommune {
  nom: string;
  code: string;
  population?: number;
  surface?: number;
  mairie?: { coordinates: [number, number] };
}

async function inseeCode(slug: string, name: string, dept: string, postalCode: string | undefined): Promise<string | null> {
  const paris = /^paris-(\d+)/.exec(slug);
  if (paris) return `751${paris[1]!.padStart(2, "0")}`;
  const byPostal = postalCode
    ? ((await getJson<GeoCommune[]>(`https://geo.api.gouv.fr/communes?codePostal=${postalCode}&fields=nom,code`)) ?? [])
    : [];
  const hit = byPostal.find((c) => nameKey(c.nom) === nameKey(name));
  if (hit) return hit.code;
  const only = byPostal.length === 1 ? byPostal[0] : undefined;
  if (only && nameKey(only.nom).startsWith(nameKey(name))) return only.code;
  const byName =
    (await getJson<GeoCommune[]>(
      `https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(name)}&codeDepartement=${dept}&fields=nom,code`,
    )) ?? [];
  return byName.find((c) => nameKey(c.nom) === nameKey(name))?.code ?? null;
}

type Ring = [number, number][];
interface Shape {
  code: string;
  nom: string;
  rings: Ring[];
  bbox: [number, number, number, number];
}

/** Projection locale en mètres, suffisante pour mesurer des écarts de quelques dizaines de mètres. */
const toMeters = ([lng, lat]: [number, number]): [number, number] => [lng * 111_320 * Math.cos((48.85 * Math.PI) / 180), lat * 110_574];

function toShape(feature: { properties: { code: string; nom: string }; geometry: { type: string; coordinates: unknown } }): Shape {
  const polygons = (feature.geometry.type === "Polygon" ? [feature.geometry.coordinates] : feature.geometry.coordinates) as [
    number,
    number,
  ][][][];
  const rings = polygons.flat().map((ring) => ring.map(toMeters));
  const xs = rings.flat().map((p) => p[0]);
  const ys = rings.flat().map((p) => p[1]);
  return { code: feature.properties.code, nom: feature.properties.nom, rings, bbox: [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)] };
}

function segmentDistance(p: [number, number], a: [number, number], b: [number, number]): number {
  const [dx, dy] = [b[0] - a[0], b[1] - a[1]];
  const t = dx || dy ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy))) : 0;
  return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy));
}

/**
 * Vrai si au moins deux sommets de `a` sont sur la limite de `b` (à 25 m près).
 * Un simple coin commun ne compte pas : la relation retenue est le ET des deux sens.
 */
function sharesVertices(a: Shape, b: Shape): boolean {
  const [ax0, ay0, ax1, ay1] = a.bbox;
  const [bx0, by0, bx1, by1] = b.bbox;
  if (ax0 > bx1 + TOLERANCE_M || bx0 > ax1 + TOLERANCE_M || ay0 > by1 + TOLERANCE_M || by0 > ay1 + TOLERANCE_M) return false;
  let shared = 0;
  for (const p of a.rings.flat()) {
    if (p[0] < bx0 - TOLERANCE_M || p[0] > bx1 + TOLERANCE_M || p[1] < by0 - TOLERANCE_M || p[1] > by1 + TOLERANCE_M) continue;
    const near = b.rings.some((ring) => ring.some((q, i) => i > 0 && segmentDistance(p, ring[i - 1]!, q) <= TOLERANCE_M));
    if (near && ++shared >= MIN_SHARED_VERTICES) return true;
  }
  return false;
}

interface FeatureCollection {
  features: { properties: { code: string; nom: string }; geometry: { type: string; coordinates: unknown } }[];
}

async function loadShapes(): Promise<Shape[] | null> {
  const urls = [
    "https://geo.api.gouv.fr/communes?type=arrondissement-municipal&codeDepartement=75&fields=nom,code,contour&format=geojson&geometry=contour",
    ...IDF_DEPARTMENTS.map((d) => `https://geo.api.gouv.fr/departements/${d}/communes?fields=nom,code,contour&format=geojson&geometry=contour`),
  ];
  const shapes: Shape[] = [];
  for (const url of urls) {
    const fc = await getJson<FeatureCollection>(url, 150, 60_000);
    if (!fc) return null;
    shapes.push(...fc.features.filter((f) => f.geometry).map(toShape));
  }
  return shapes;
}

interface OsrmRoute {
  code: string;
  routes: { distance: number; duration: number }[];
}

async function main() {
  const args = process.argv.slice(2);
  if (args.some((a) => a.startsWith("--"))) {
    throw new Error("ce script ne calcule que des fiches complètes : aucune option n'est acceptée");
  }
  const requested = args;
  const unknown = requested.filter((s) => !zones.some((z) => z.slug === s));
  if (unknown.length) throw new Error(`zones inconnues : ${unknown.join(", ")}`);
  const outside = requested.filter((s) => {
    const zone = zones.find((z) => z.slug === s);
    return zone && !FACT_SHEET_DEPTS.has(zone.departement);
  });
  if (outside.length) {
    throw new Error(`grande couronne, fiche non calculée : ${outside.join(", ")}`);
  }
  const targets = requested.length
    ? zones.filter((z) => requested.includes(z.slug))
    : zones.filter((z) => FACT_SHEET_DEPTS.has(z.departement));
  const computedOn = new Date().toISOString().slice(0, 10);

  const address = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`;
  const geocode = await getJson<{ features: { geometry: { coordinates: [number, number] }; properties: { type: string; score: number } }[] }>(
    `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(address)}&limit=1`,
  );
  const baseHit = geocode?.features[0];
  if (!baseHit || baseHit.properties.type !== "housenumber" || baseHit.properties.score < 0.8) {
    throw new Error(`base non géocodée par la BAN (${address}) : aucun fichier écrit`);
  }
  const [baseLng, baseLat] = baseHit.geometry.coordinates;

  const insee: Record<string, string> = {};
  for (const z of targets) {
    const code = await inseeCode(z.slug, z.name, z.departement, z.postalCodes[0]);
    if (code) insee[z.slug] = code;
    else warnings.push(`code INSEE introuvable : ${z.slug}`);
  }
  const slugByCode = new Map(Object.entries(insee).map(([slug, code]) => [code, slug]));

  const shapes = await loadShapes();
  if (!shapes) warnings.push("contours incomplets : limitrophes non calculés");

  const facts: Record<string, ZoneFacts> = {};
  for (const [slug, value] of Object.entries(previousFacts)) {
    const zone = zones.find((z) => z.slug === slug);
    if (zone && FACT_SHEET_DEPTS.has(zone.departement)) facts[slug] = value;
  }
  for (const z of targets) {
    const code = insee[z.slug];
    if (!code) continue;
    const type = z.kind === "arrondissement" ? "&type=arrondissement-municipal" : "";
    const commune = await getJson<GeoCommune>(`https://geo.api.gouv.fr/communes/${code}?fields=nom,code,population,surface,mairie${type}`);

    const own = shapes?.find((s) => s.code === code);
    const limitrophes =
      shapes && own
        ? shapes
            .filter((s) => s.code !== code && sharesVertices(own, s) && sharesVertices(s, own))
            .map((s) => ({ code: s.code, nom: s.nom }))
            .sort((a, b) => a.nom.localeCompare(b.nom, "fr", { numeric: true }))
        : null;

    let route: ZoneFacts["route"] = null;
    const mairie = commune?.mairie?.coordinates;
    if (mairie) {
      const osrm = await getJson<OsrmRoute>(
        `https://router.project-osrm.org/route/v1/driving/${baseLng},${baseLat};${mairie[0]},${mairie[1]}?overview=false`,
        1100,
      );
      const best = osrm?.code === "Ok" ? osrm.routes[0] : undefined;
      if (best) route = { distanceKm: Math.round(best.distance / 100) / 10, durationMin: Math.round(best.duration / 60) };
      else warnings.push(`itinéraire non calculé : ${z.slug}`);
    }

    facts[z.slug] = {
      officialName: commune?.nom ?? z.name,
      population: commune?.population ?? null,
      surfaceHa: commune?.surface ?? null,
      limitrophes,
      route,
      computedOn,
    };
    console.log(`  ${z.slug} : ${JSON.stringify(facts[z.slug])}`);
  }

  const ordered = Object.fromEntries(zones.filter((z) => facts[z.slug]).map((z) => [z.slug, facts[z.slug]]));
  writeFileSync(
    OUT_PATH,
    `/** Généré par scripts/generate-zone-facts.ts — ne pas éditer à la main. */

export interface ZoneFacts {
  /** Nom officiel (geo.api.gouv.fr). */
  officialName: string;
  /** Population INSEE (geo.api.gouv.fr). */
  population: number | null;
  /** Surface en hectares (geo.api.gouv.fr). */
  surfaceHa: number | null;
  /** Communes ou arrondissements limitrophes, calculés sur les contours officiels (geo.api.gouv.fr). */
  limitrophes: { code: string; nom: string }[] | null;
  /** Itinéraire routier OSRM depuis la base jusqu'à la mairie, sans circulation. */
  route: { distanceKm: number; durationMin: number } | null;
  /** Date du calcul, AAAA-MM-JJ. */
  computedOn: string;
}

export const zoneFactsBase: { address: string; lat: number; lng: number } | null = ${JSON.stringify({ address, lat: baseLat, lng: baseLng })};

/** Code INSEE de chaque zone (arrondissement municipal pour Paris). */
export const zoneInsee: Record<string, string> = ${JSON.stringify(insee, null, 2)};

export const zoneFacts: Record<string, ZoneFacts> = ${JSON.stringify(ordered, null, 2)};
`,
  );
  console.log(`✓ ${targets.length} zone(s) calculée(s), ${Object.keys(ordered).length} au total dans zone-facts.ts`);
  console.log(`  zones liées par code INSEE : ${slugByCode.size}`);
  for (const w of warnings) console.log(`  ⚠ ${w}`);
}

main().catch((e: unknown) => {
  console.error(e);
  process.exit(1);
});
