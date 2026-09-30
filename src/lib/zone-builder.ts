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
  profile: string;
  axes: [string, string, string, string];
  landmarks: [string, string, string, string];
  commonInterventions: [string, string, string, string];
  trafficNote: string;
  parkingNote: string;
  accessNote: string;
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

const DEPT_LABELS: Record<string, string> = {
  "77": "Seine-et-Marne",
  "78": "Yvelines",
  "91": "Essonne",
  "95": "Val-d'Oise",
  "92": "Hauts-de-Seine",
  "93": "Seine-Saint-Denis",
  "94": "Val-de-Marne",
};

/** Intro unique par commune — contenu local issu des seeds, pas de template global identique. */
export function buildZoneIntro(seed: ZoneSeed): string {
  const dept = DEPT_LABELS[seed.departement] ?? seed.departement;
  const [a1, a2, a3, a4] = seed.axes;
  const [l1, l2, l3, l4] = seed.landmarks;
  const [i1, i2, i3, i4] = seed.commonInterventions;

  return [
    `${seed.name}, commune du ${dept}, se distingue comme ${seed.profile}.`,
    `Les scooters et motos circulent sur ${a1}, ${a2} et ${a3}, avec des arrêts répétés près de ${l1} et ${l2} où le stationnement est surveillé en journée.`,
    seed.trafficNote,
    `Nos dépanneurs interviennent régulièrement pour ${i1.toLowerCase()}, ${i2.toLowerCase()} et ${i3.toLowerCase()} autour de ${l3}.`,
    seed.parkingNote,
    `${seed.accessNote} Les remorquages depuis ${seed.name} empruntent ${a4} ou les bretelles autoroutières les plus proches pour rejoindre un garage en sécurité.`,
    `Le secteur ${l4} concentre aussi des demandes de ${i4.toLowerCase()} lors des pics de livraison ou des événements locaux.`,
    `Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre ${seed.name} et votre point de panne exact.`,
  ].join(" ");
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
    intro: buildZoneIntro(seed),
    axes: [...seed.axes],
    landmarks: [...seed.landmarks],
    commonInterventions: [...seed.commonInterventions],
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
