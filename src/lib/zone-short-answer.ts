import type { Zone } from "@/data/types";
import { company } from "@/data/company";

/** ShortAnswer GEO unique par zone — dérivé des données locales, pas d'un template fixe. */
export function buildZoneShortAnswer(zone: Zone): string {
  const landmark = zone.landmarks[0] ?? zone.name;
  const intervention = zone.commonInterventions[0] ?? "dépannage sur place";
  const axis = zone.axes[0] ?? "Île-de-France";

  return `${company.name} intervient à ${zone.name} près de ${landmark} (${axis}). ${intervention.charAt(0).toUpperCase()}${intervention.slice(1)} et remorquage scooter moto, ${zone.etaMinutes[0]}–${zone.etaMinutes[1]} min, 24h/24. Devis ferme au ${company.phoneDisplay}.`;
}
