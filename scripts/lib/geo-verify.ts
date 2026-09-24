import type { Zone } from "../../src/data/types";

export type GeoElementType = "voie" | "quartier" | "lieu-dit";

export interface GeoElement {
  value: string;
  type: GeoElementType;
  source: "axes" | "landmarks" | "quartiers" | "intro";
}

export interface GeoVerdict {
  zoneSlug: string;
  commune: string;
  insee: string;
  element: string;
  type: GeoElementType;
  source: string;
  verdict: "validé" | "signalé";
  score?: number;
  action: "conserver" | "supprimer";
}

const VOIE_PREFIX =
  /(?:\b(?:rue|avenue|boulevard|place|esplanade|quai|allée|impasse|passage|square|cours|route|voie|pont|parvis)\s+(?:de\s+(?:la|l'|les)\s+|d'|du|des)?[\p{L}0-9''\-\s]{2,60})/giu;

const QUARTIER_IN_INTRO =
  /\b(?:quartier|secteur)\s+(?:de\s+(?:la|l'|les)\s+|d'|du|des)?[\p{L}''\-\s]{2,50}/giu;

export function parisArrondissementInsee(name: string): string | null {
  const m = name.match(/^Paris\s+(\d+)(?:er|e)$/i);
  if (!m) return null;
  const n = Number(m[1]);
  if (n < 1 || n > 20) return null;
  return `751${String(n).padStart(2, "0")}`;
}

export function extractIntroVoies(intro: string): string[] {
  const found = intro.match(VOIE_PREFIX) ?? [];
  return [...new Set(found.map((s) => s.trim()))];
}

export function extractIntroQuartiers(intro: string): string[] {
  const found = intro.match(QUARTIER_IN_INTRO) ?? [];
  return [...new Set(found.map((s) => s.trim()))];
}

export function collectElements(zone: Zone): GeoElement[] {
  const items: GeoElement[] = [];
  for (const v of zone.axes) {
    items.push({ value: v.trim(), type: "voie", source: "axes" });
  }
  for (const l of zone.landmarks) {
    items.push({ value: l.trim(), type: "quartier", source: "landmarks" });
  }
  for (const q of zone.quartiers ?? []) {
    items.push({ value: q.trim(), type: "quartier", source: "quartiers" });
  }
  /* Les voies/quartiers cités uniquement dans l'intro sont nettoyés via retrait des éléments signalés des champs structurés. */
  const seen = new Set<string>();
  return items.filter((it) => {
    const key = `${it.type}:${it.value.toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export async function fetchInseeCode(zone: Zone): Promise<string> {
  const paris = parisArrondissementInsee(zone.name);
  if (paris) return paris;

  const nom = encodeURIComponent(zone.name);
  const url = `https://geo.api.gouv.fr/communes?nom=${nom}&codeRegion=11&fields=code,nom,codeDepartement&boost=population`;
  const { fetchWithRetry } = await import("./geo-cache");
  const res = await fetchWithRetry(url);
  if (!res.ok) throw new Error(`geo.api commune ${zone.name}: ${res.status}`);
  const data = (await res.json()) as { code: string; nom: string; codeDepartement: string }[];
  const match = data.find((c) => c.codeDepartement === zone.departement);
  if (!match) {
    throw new Error(`INSEE introuvable pour ${zone.name} (${zone.departement})`);
  }
  return match.code;
}

export interface AdresseSearchHit {
  score: number;
  citycode?: string;
}

export async function searchBan(
  q: string,
  citycode: string,
  type: "street" | "locality" | "municipality",
): Promise<AdresseSearchHit | null> {
  const params = new URLSearchParams({
    q,
    citycode,
    type,
    limit: "1",
  });
  const url = `https://api-adresse.data.gouv.fr/search/?${params}`;
  const { fetchWithRetry } = await import("./geo-cache");
  let res: Response;
  try {
    res = await fetchWithRetry(url);
  } catch {
    return null;
  }
  if (!res.ok) return null;
  const json = (await res.json()) as {
    features?: { properties?: { score?: number; citycode?: string } }[];
  };
  const feat = json.features?.[0]?.properties;
  if (!feat?.score) return null;
  return { score: feat.score, citycode: feat.citycode };
}

export async function verifyElement(
  element: string,
  type: GeoElementType,
  insee: string,
): Promise<{ valid: boolean; score?: number }> {
  if (type === "voie") {
    const hit = await searchBan(element, insee, "street");
    if (hit && hit.citycode === insee && hit.score > 0.6) {
      return { valid: true, score: hit.score };
    }
    return { valid: false, score: hit?.score };
  }
  const loc = await searchBan(element, insee, "locality");
  if (loc && loc.citycode === insee && loc.score > 0.6) {
    return { valid: true, score: loc.score };
  }
  const mun = await searchBan(element, insee, "municipality");
  if (mun && mun.citycode === insee && mun.score > 0.6) {
    return { valid: true, score: mun.score };
  }
  return { valid: false, score: loc?.score ?? mun?.score };
}

/** Pause entre requêtes BAN (50/s max). */
export function throttle(ms = 25): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}
