import { company } from "@/data/company";
import { formatPrice, getDspTotal } from "@/data/pricing";
import type { Zone } from "@/data/types";
import { zoneFacts } from "@/data/zone-facts";
import { getTravelZoneForZone } from "@/lib/zone-faqs";

const decimal = new Intl.NumberFormat("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

/** Réponse directe sous le H1 : uniquement des données calculées ou lues dans la grille tarifaire. */
export function buildZoneShortAnswer(zone: Zone): string {
  const route = zoneFacts[zone.slug]?.route;
  const mairie = zone.kind === "arrondissement" ? "la mairie d'arrondissement" : "la mairie";
  const distance = route
    ? ` Depuis notre base, ${mairie} est à ${decimal.format(route.distanceKm)} km par la route, environ ${route.durationMin} min sans circulation.`
    : "";
  const price = formatPrice(getDspTotal(getTravelZoneForZone(zone)));

  return `${company.name} intervient à ${zone.name} 24h/24.${distance} Dépannage sur place ${price} TTC en journée, déplacement inclus ; délai annoncé ${zone.etaMinutes[0]}–${zone.etaMinutes[1]} min. Devis ferme au ${company.phoneDisplay}.`;
}
