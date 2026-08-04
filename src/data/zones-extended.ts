import { assignNearestNeighbours, seedToZone } from "@/lib/zone-builder";
import { seeds77 } from "./zones-seeds-77";
import { seeds78 } from "./zones-seeds-78";
import { seeds91 } from "./zones-seeds-91";
import { seeds95 } from "./zones-seeds-95";
import { seedsPetiteCouronneExtra } from "./zones-seeds-extra";
import type { Zone } from "./types";

const allSeeds = [
  ...seeds77,
  ...seeds78,
  ...seeds91,
  ...seeds95,
  ...seedsPetiteCouronneExtra,
];

/** Zones générées depuis les seeds — voisins calculés après fusion avec le noyau. */
export function buildExtendedZones(coreZones: Zone[]): Zone[] {
  const extended = allSeeds.map(seedToZone);
  const combined = [...coreZones, ...extended];
  return assignNearestNeighbours(extended, combined);
}

export const extendedZoneCount = allSeeds.length;
