import { formatPrice, getDspTotal, pricing } from "@/data/pricing";
import type { TravelZoneKey, Zone } from "@/data/types";

export function getTravelZoneForZone(zone: Zone): TravelZoneKey {
  if (zone.departement === "75") return "PARIS";
  if (["92", "93", "94"].includes(zone.departement)) return "PETITE_COURONNE";
  return "GRANDE_COURONNE";
}

export function getZoneFaqs(zone: Zone) {
  const dspTotal = getDspTotal(getTravelZoneForZone(zone));
  const base = [
    {
      question: `Quel délai pour un dépannage scooter ou moto à ${zone.name} ?`,
      answer: `En journée, comptez ${zone.etaMinutes[0]} à ${zone.etaMinutes[1]} minutes selon le trafic et le point exact de panne. Le délai vous est confirmé par téléphone avant le départ du dépanneur.`,
    },
    {
      question: `Combien coûte un dépannage sur place à ${zone.name} ?`,
      answer: `Le forfait prestation est de ${formatPrice(pricing.dsp.baseFee)} + déplacement selon zone, soit ${formatPrice(dspTotal)} TTC en tarif jour pour ${zone.name}. Majorations nuit, week-end et jours fériés selon la grille tarifaire.`,
    },
    {
      question: `Intervenez-vous la nuit et le week-end à ${zone.name} ?`,
      answer: `Oui, ${zone.name} est couvert 24h/24 et 7j/7. Les majorations applicables vous sont annoncées par téléphone avant toute intervention.`,
    },
  ];
  if (zone.faq?.length) {
    return [...base, ...zone.faq];
  }
  if (zone.landmarks[0]) {
    base.push({
      question: `Intervenez-vous près de ${zone.landmarks[0]} à ${zone.name} ?`,
      answer: `Oui. Nous intervenons sur l'ensemble de ${zone.name}, y compris autour de ${zone.landmarks.slice(0, 2).join(" et ")}. Indiquez le point exact lors de l'appel pour un délai précis.`,
    });
  }
  return base;
}
