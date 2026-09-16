import { company } from "@/data/company";
import { formatPrice, getDspTotal, pricing } from "@/data/pricing";
import type { Zone } from "@/data/types";
import { getTravelZoneForZone } from "@/lib/zone-faqs";

export function getZonePageTitle(zone: Zone): string {
  const deptSuffix = zone.departement === "75" ? "" : ` (${zone.departement})`;
  const title = `Dépannage & remorquage scooter moto ${zone.name}${deptSuffix} – 24h/24`;
  return title.length <= 60 ? title : `Dépannage scooter moto ${zone.name} – 24h/24`;
}

export function getZonePageDescription(zone: Zone): string {
  const dspTotal = getDspTotal(getTravelZoneForZone(zone));
  const towingMin = formatPrice(pricing.towing.KM_0_5.amount);
  const desc = `Dépannage scooter et moto à ${zone.name} en ${zone.etaMinutes[0]}–${zone.etaMinutes[1]} min, 24h/24. Dès ${formatPrice(dspTotal)}, remorquage dès ${towingMin}. Devis ferme : ${company.phoneDisplay}.`;
  return desc.slice(0, 158);
}

export function getDepartmentPageTitle(name: string, code: string): string {
  const title = `Dépannage scooter moto ${name} (${code}) – 24h/24`;
  return title.length <= 60 ? title : `Dépannage ${name} (${code}) – 24h/24`;
}
