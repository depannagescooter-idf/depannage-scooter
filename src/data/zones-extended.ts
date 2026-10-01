import { assignNearestNeighbours, seedToZone } from "@/lib/zone-builder";
import { company } from "./company";
import { seeds77 } from "./zones-seeds-77";
import { seeds78 } from "./zones-seeds-78";
import { seeds91 } from "./zones-seeds-91";
import { seeds95 } from "./zones-seeds-95";
import { seedsPetiteCouronneExtra } from "./zones-seeds-extra";
import { seedsPetiteCouronneManquantes } from "./zones-seeds-manquantes";
import type { Zone } from "./types";

const allSeeds = [
  ...seeds77,
  ...seeds78,
  ...seeds91,
  ...seeds95,
  ...seedsPetiteCouronneExtra,
  ...seedsPetiteCouronneManquantes,
];

/**
 * Ces communes n'ont pas de délai mesuré commune par commune.
 * On reprend le délai annoncé par défaut de l'entreprise, sans calculer de fourchette.
 */
const defaultEtaSlugs = new Set(seedsPetiteCouronneManquantes.map((s) => s.slug));

/** Zones générées depuis les seeds — voisins calculés après fusion avec le noyau. */
export function buildExtendedZones(coreZones: Zone[]): Zone[] {
  const extended = allSeeds.map((seed) => {
    const zone = seedToZone(seed);
    if (!defaultEtaSlugs.has(seed.slug)) return zone;
    return { ...zone, etaMinutes: company.defaultEtaMinutes };
  });
  const combined = [...coreZones, ...extended];
  return assignNearestNeighbours(extended, combined);
}

export const extendedZoneCount = allSeeds.length;
