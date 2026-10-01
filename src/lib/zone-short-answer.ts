import { company } from "@/data/company";
import type { Zone } from "@/data/types";
import { zoneFacts } from "@/data/zone-facts";

const decimal = new Intl.NumberFormat("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

/**
 * Réponse directe sous le H1, construite sur des données calculées.
 * Le délai et le tarif n'y figurent pas : ils n'apparaissent qu'une fois, dans la fiche de la zone.
 */
export function buildZoneShortAnswer(zone: Zone): string {
  const route = zoneFacts[zone.slug]?.route;
  const mairie = zone.kind === "arrondissement" ? "la mairie d'arrondissement" : "la mairie";
  const distance = route
    ? ` Depuis notre base du ${company.address.street}, ${mairie} est à ${decimal.format(route.distanceKm)} km par la route, environ ${route.durationMin} min sans circulation.`
    : "";

  return `${company.name} intervient à ${zone.name} 24h/24 et 7j/7, pour le dépannage sur place et le remorquage de scooters et de motos.${distance} Devis ferme au ${company.phoneDisplay}.`;
}
