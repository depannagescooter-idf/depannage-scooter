import { company } from "@/data/company";
import type { Department } from "@/data/departments";
import { formatPrice, getDspTotal, pricing } from "@/data/pricing";
import type { Faq, TravelZoneKey, Zone } from "@/data/types";

export function departmentTravelKey(code: string): TravelZoneKey {
  return code === "75" ? "PARIS" : "PETITE_COURONNE";
}

export interface DelayStats {
  count: number;
  low: number;
  high: number;
  avgMin: number;
  avgMax: number;
}

/** Moyenne des fourchettes déjà enregistrées. Aucun délai n'est inventé. */
export function departmentDelayStats(zones: Zone[]): DelayStats {
  if (!zones.length) throw new Error("département sans page");
  const sum = (pick: 0 | 1) => zones.reduce((total, zone) => total + zone.etaMinutes[pick], 0);
  return {
    count: zones.length,
    low: Math.min(...zones.map((zone) => zone.etaMinutes[0])),
    high: Math.max(...zones.map((zone) => zone.etaMinutes[1])),
    avgMin: Math.round(sum(0) / zones.length),
    avgMax: Math.round(sum(1) / zones.length),
  };
}

function money(amount: number | null): string {
  if (amount === null) throw new Error("montant tarifaire absent");
  return formatPrice(amount);
}

export function departmentDelayText(stats: DelayStats): string {
  return `Sur les ${stats.count} pages, les délais annoncés vont de ${stats.low} à ${stats.high} minutes. La moyenne des bornes basses est ${stats.avgMin} minutes, et la moyenne des bornes hautes est ${stats.avgMax} minutes. Cette moyenne décrit les pages déjà publiées. Elle ne remplace pas le délai de la course, confirmé par téléphone avant le départ, quand le lieu de panne est connu.`;
}

export function departmentParagraphs(department: Department, stats: DelayStats): string[] {
  const travel = departmentTravelKey(department.code);
  const total = money(getDspTotal(travel));
  const base = money(pricing.dsp.baseFee);
  const travelFee = money(pricing.travelFees[travel].amount);
  const towMin = money(pricing.towing.KM_0_5.amount);
  const towMax = money(pricing.towing.KM_15_20.amount);
  const night = pricing.surcharges.night.percent;
  const saturday = pricing.surcharges.weekendSaturday.percent;
  const sunday = pricing.surcharges.weekendSunday.percent;
  const holiday = pricing.surcharges.holiday.percent;
  const where = department.where;
  const pages =
    department.code === "75"
      ? `Les ${stats.count} arrondissements ont chacun une page.`
      : `Les ${stats.count} communes ont chacune une page.`;

  return [
    `Le dépannage sur place ${where} couvre la crevaison, la batterie à plat, le démarrage au booster, la livraison de carburant et l'ouverture d'une selle bloquée. Le technicien se déplace avec le matériel et intervient sur le scooter ou la moto. Si la réparation n'est pas possible sur place, le remorquage sur plateau emmène le deux-roues à l'adresse d'arrivée choisie. Le prix du plateau dépend de la distance entre le lieu de panne et cette adresse. Personne ne part tant que le devis n'a pas été confirmé par téléphone.`,
    `${pages} Chacune indique la distance routière jusqu'à la mairie, le délai annoncé, le tarif du jour et la population. La distance et la population viennent de données publiques. Le tarif vient de la grille. Le délai inscrit sur une page est celui enregistré pour cette page. La moyenne du bloc précédent est la moyenne de ces fourchettes, rien d'autre. Le délai utile reste celui que l'opérateur confirme au téléphone.`,
    `Un dépannage sur place ${where} est facturé ${total} TTC en journée : ${base} pour la prestation et ${travelFee} pour le déplacement. Le remorquage de jour va de ${towMin} à ${towMax} jusqu'à 20 kilomètres, puis sur devis au-delà. La nuit, de 20 h à 8 h, la majoration est de ${night} %. Le samedi, elle est de ${saturday} %. Le dimanche, elle est de ${sunday} %. Un jour férié, elle est de ${holiday} %. Ces taux sont ceux de la grille. Le paiement se fait sur place, par carte bancaire ou en espèces.`,
  ];
}

export function departmentFaqs(department: Department): Faq[] {
  const night = pricing.surcharges.night.percent;
  const saturday = pricing.surcharges.weekendSaturday.percent;
  const sunday = pricing.surcharges.weekendSunday.percent;
  const holiday = pricing.surcharges.holiday.percent;
  const where = department.where;

  return [
    {
      question: "Quels véhicules prenez-vous en charge ?",
      answer: `Les scooters et les motos ${where}. Le devis téléphonique confirme que l'intervention est possible avant le départ. Le matériel et le plateau sont prévus pour ces deux-roues.`,
    },
    {
      question: "Intervenez-vous la nuit et le week-end ?",
      answer: `Oui, ${company.openingHours}. La majoration de nuit est de ${night} %, celle du samedi de ${saturday} %, celle du dimanche de ${sunday} % et celle d'un jour férié de ${holiday} %. Les horaires de ces majorations sont dans le tableau.`,
    },
    {
      question: "Le montant peut-il changer une fois sur place ?",
      answer:
        "Le devis confirmé par téléphone est ferme. Il ne change que si vous demandez une autre prestation ou une autre adresse d'arrivée, et seulement avec votre accord. Il n'y a pas d'intervention sans cet accord.",
    },
    {
      question: "Le délai moyen est-il garanti ?",
      answer:
        "Non. C'est la moyenne des fourchettes annoncées sur les pages de ce département. Le délai de votre course est celui confirmé au téléphone, selon la position du véhicule au moment de l'appel.",
    },
    {
      question: "Que faut-il indiquer au téléphone ?",
      answer:
        "L'adresse de la panne, le type de deux-roues, ce qui ne fonctionne plus et, pour un remorquage, l'adresse d'arrivée. Ces éléments permettent de confirmer le devis avant le déplacement.",
    },
    {
      question: "Une adresse hors des pages listées est-elle couverte ?",
      answer:
        "Non. Le déplacement au tarif de cette page vaut pour les pages listées plus bas. Une adresse absente de cette liste n'est pas desservie.",
    },
  ];
}

/** Texte du hub hors listes de liens, pour le décompte de mots. */
export function departmentHubWordCount(department: Department, zones: Zone[]): number {
  const stats = departmentDelayStats(zones);
  const text = [
    department.intro,
    departmentDelayText(stats),
    ...departmentParagraphs(department, stats),
    ...departmentFaqs(department).flatMap((faq) => [faq.question, faq.answer]),
    "Délai moyen",
    "Tarifs",
    "Remorquage tarifs jour TTC",
    "Dépannage sur place forfait prestation",
    "Dépannage frais de déplacement TTC",
    "Majorations",
    pricing.travelFees[departmentTravelKey(department.code)].label,
    ...Object.values(pricing.towing).map((tier) => tier.label),
    ...Object.values(pricing.surcharges).map((item) => item.label),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}
