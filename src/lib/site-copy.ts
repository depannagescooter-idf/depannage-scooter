import { publishedZones } from "@/data/zones";

export function getZoneCountLabel(): string {
  return `${publishedZones.length} communes`;
}
