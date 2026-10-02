import { assignNearestNeighbours, etaFromOsrmDuration, seedToZone } from "@/lib/zone-builder";
import { seeds77 } from "./zones-seeds-77";
import { seeds78 } from "./zones-seeds-78";
import { seeds91 } from "./zones-seeds-91";
import { seeds95 } from "./zones-seeds-95";
import { seedsPetiteCouronneExtra } from "./zones-seeds-extra";
import { seedsPetiteCouronneManquantes } from "./zones-seeds-manquantes";
import { zoneFacts } from "./zone-facts";
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
 * Ces 75 communes annoncent un délai calculé sur leur trajet OSRM déjà enregistré,
 * plus une marge de préparation, en fourchette de 15 minutes.
 * Les autres seeds gardent la fourchette issue de la distance à vol d'oiseau.
 */
const osrmEtaSlugs = new Set(seedsPetiteCouronneManquantes.map((s) => s.slug));

/** Zones générées depuis les seeds — voisins calculés après fusion avec le noyau. */
export function buildExtendedZones(coreZones: Zone[]): Zone[] {
  const extended = allSeeds.map((seed) => {
    const zone = seedToZone(seed);
    if (!osrmEtaSlugs.has(seed.slug)) return zone;
    const durationMin = zoneFacts[seed.slug]?.route?.durationMin;
    if (durationMin == null) {
      throw new Error(`Délai de ${seed.slug} : trajet OSRM absent, aucun délai par défaut.`);
    }
    return { ...zone, etaMinutes: etaFromOsrmDuration(durationMin) };
  });
  const combined = [...coreZones, ...extended];
  return assignNearestNeighbours(extended, combined);
}

export const extendedZoneCount = allSeeds.length;
