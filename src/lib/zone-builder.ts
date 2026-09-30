import type { Zone } from "@/data/types";

const PARIS_LAT = 48.8566;
const PARIS_LNG = 2.3522;

export interface ZoneSeed {
  slug: string;
  name: string;
  departement: string;
  postalCodes: string[];
  lat: number;
  lng: number;
}

function distanceKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const r = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return r * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function etaFromDistance(lat: number, lng: number): [number, number] {
  const km = distanceKm(PARIS_LAT, PARIS_LNG, lat, lng);
  if (km < 8) return [25, 40];
  if (km < 14) return [28, 44];
  if (km < 22) return [32, 50];
  if (km < 30) return [36, 55];
  if (km < 40) return [42, 62];
  if (km < 50) return [48, 70];
  return [55, 80];
}

export function seedToZone(seed: ZoneSeed): Zone {
  return {
    slug: seed.slug,
    name: seed.name,
    kind: "commune",
    departement: seed.departement,
    postalCodes: seed.postalCodes,
    lat: seed.lat,
    lng: seed.lng,
    etaMinutes: etaFromDistance(seed.lat, seed.lng),
    neighbours: [],
  };
}

export function assignNearestNeighbours(
  targetZones: Zone[],
  allZones: Zone[],
  count = 5,
): Zone[] {
  return targetZones.map((zone) => {
    if (zone.neighbours.length > 0) return zone;

    const nearest = allZones
      .filter((z) => z.slug !== zone.slug)
      .map((z) => ({
        slug: z.slug,
        dist: distanceKm(zone.lat, zone.lng, z.lat, z.lng),
      }))
      .sort((a, b) => a.dist - b.dist)
      .slice(0, count)
      .map((x) => x.slug);

    return { ...zone, neighbours: nearest };
  });
}
