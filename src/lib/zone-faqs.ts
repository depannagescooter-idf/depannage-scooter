import type { TravelZoneKey, Zone } from "@/data/types";

export function getTravelZoneForZone(zone: Zone): TravelZoneKey {
  if (zone.departement === "75") return "PARIS";
  if (["92", "93", "94"].includes(zone.departement)) return "PETITE_COURONNE";
  return "GRANDE_COURONNE";
}

/** Le délai et le tarif de la zone ne figurent que dans sa fiche : aucune question ne les répète. */
export function getZoneFaqs(zone: Zone) {
  const base = [
    {
      question: `Intervenez-vous la nuit et le week-end à ${zone.name} ?`,
      answer: `Oui, ${zone.name} est couvert 24h/24 et 7j/7. Les majorations applicables vous sont annoncées par téléphone avant toute intervention.`,
    },
  ];
  if (zone.faq?.length) {
    return [...base, ...zone.faq];
  }
  return base;
}
