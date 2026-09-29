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

const STREET_NAME_HINT =
  /\b(rue|avenue|boulevard|place|impasse|allée|quai|chemin)\b/i;

export function isStreetLabel(element: string): boolean {
  return STREET_NAME_HINT.test(element);
}

export function parisArrondissementInsee(name: string): string | null {
  const m = name.match(/^Paris\s+(\d+)(?:er|e)$/i);
  if (!m) return null;
  const n = Number(m[1]);
  if (n < 1 || n > 20) return null;
  return `751${String(n).padStart(2, "0")}`;
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

export async function neighborInseeCodes(
  zone: Zone,
  slugToZone: Map<string, Zone>,
  inseeCache: Map<string, string>,
): Promise<string[]> {
  const codes: string[] = [];
  for (const ns of zone.neighbours.slice(0, 8)) {
    const nz = slugToZone.get(ns);
    if (!nz) continue;
    if (!inseeCache.has(ns)) {
      inseeCache.set(ns, await fetchInseeCode(nz));
      await throttle(15);
    }
    codes.push(inseeCache.get(ns)!);
  }
  return codes;
}

export interface AdresseSearchHit {
  score: number;
  citycode?: string;
}

export async function searchBan(
  q: string,
  citycode: string,
  type?: "street" | "locality" | "municipality",
): Promise<AdresseSearchHit | null> {
  const params = new URLSearchParams({ q, citycode, limit: "1" });
  if (type) params.set("type", type);
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
  _type: GeoElementType,
  insee: string,
  neighborInsees: string[] = [],
): Promise<{ valid: boolean; score?: number }> {
  const allowed = new Set([insee, ...neighborInsees]);

  if (isStreetLabel(element)) {
    const hit = await searchBan(element, insee, "street");
    if (hit && hit.citycode === insee && hit.score > 0.6) {
      return { valid: true, score: hit.score };
    }
    return { valid: false, score: hit?.score };
  }

  let best: number | undefined;
  for (const citycode of allowed) {
    const hit = await searchBan(element, citycode);
    if (hit && hit.citycode && allowed.has(hit.citycode) && hit.score > 0.6) {
      return { valid: true, score: hit.score };
    }
    if (hit?.score && (best === undefined || hit.score > best)) {
      best = hit.score;
    }
    await throttle(20);
  }
  return { valid: false, score: best };
}

export function throttle(ms = 25): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}
