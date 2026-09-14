import type { PricingConfig, TravelZoneKey } from "./types";

/**
 * Tarification centralisée — seule source des montants affichés sur le site.
 * Aucun prix ne doit être écrit ailleurs (composants, textes, JSON-LD).
 *
 * Dépannage sur place : 50 € TTC + déplacement selon zone.
 * Remorquage : paliers kilométriques (0–20 km), au-delà sur devis.
 */
export const pricing: PricingConfig = {
  currency: "EUR",
  dsp: {
    baseFee: 50,
    services: {
      DSP_CREVAISON: { label: "Réparation de crevaison sur place" },
      DSP_BATTERIE: { label: "Remplacement de batterie" },
      DSP_DEMARRAGE: { label: "Démarrage / booster" },
      DSP_ESSENCE: { label: "Livraison de carburant" },
      DSP_SELLE: { label: "Ouverture de selle bloquée" },
    },
  },
  travelFees: {
    PARIS: {
      label: "Paris",
      amount: 20,
    },
    PETITE_COURONNE: {
      label: "Petite couronne (92, 93, 94)",
      amount: 30,
    },
    GRANDE_COURONNE: {
      label: "Grande couronne (77, 78, 91, 95)",
      amount: 40,
    },
  },
  towing: {
    KM_0_5: {
      label: "0 – 5 km",
      amount: 79,
    },
    KM_5_10: {
      label: "5 – 10 km",
      amount: 89,
    },
    KM_10_15: {
      label: "10 – 15 km",
      amount: 99,
    },
    KM_15_20: {
      label: "15 – 20 km",
      amount: 120,
    },
    KM_20_PLUS: {
      label: "Plus de 20 km",
      amount: null,
    },
  },
  surcharges: {
    night: {
      label: "Majoration nuit (20h – 8h)",
      percent: 30,
    },
    weekendSaturday: {
      label: "Majoration samedi",
      percent: 30,
    },
    weekendSunday: {
      label: "Majoration dimanche",
      percent: 50,
    },
    holiday: {
      label: "Majoration jour férié",
      percent: 50,
    },
  },
  referencePoint: {
    label: "Paris — base interventions Île-de-France",
    lat: 48.8566,
    lng: 2.3522,
  },
  difficultySurcharge: {
    label: "Supplément pénibilité (sous-sol, selle Neiman, accidenté)",
    amount: 30,
  },
  /** TODO-TARIF : renseigner les montants voiture avant campagne Ads. */
  carBattery: {
    boost: null,
    replacementLabor: null,
    batteryFrom: null,
  },
};

/** Total dépannage sur place = forfait prestation + déplacement zone. */
export function getDspTotal(zone: TravelZoneKey): number {
  return pricing.dsp.baseFee + pricing.travelFees[zone].amount;
}

/** Fourchette dépannage (Paris min → grande couronne max). */
export function getDspPriceRangeLabel(): string {
  const totals = Object.keys(pricing.travelFees).map((z) =>
    getDspTotal(z as TravelZoneKey),
  );
  return `${formatPrice(Math.min(...totals))} à ${formatPrice(Math.max(...totals))}`;
}

/** Fourchette tarifaire remorquage (0–5 km min → 15–20 km max). */
export function getTowingPriceRangeLabel(): string {
  const amounts = Object.values(pricing.towing)
    .map((t) => t.amount)
    .filter((a): a is number => a !== null);
  if (amounts.length === 0) return "Sur devis";
  const min = Math.min(...amounts);
  const max = Math.max(...amounts);
  return `${formatPrice(min)} à ${formatPrice(max)}`;
}

/** Formate un montant ou affiche un placeholder si non renseigné. */
export function formatPrice(amount: number | null, currency = pricing.currency): string {
  if (amount === null) return "Sur devis";
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/** @deprecated Utiliser getDspTotal(zone) — conservé pour compatibilité interne. */
export function calculateDspPrice(_priceKey: string, zone: TravelZoneKey = "PARIS"): number {
  return getDspTotal(zone);
}

/** Applique une majoration en pourcentage. */
export function applySurcharge(amount: number, percent: number): number {
  return Math.round(amount * (1 + percent / 100));
}

/** Prix de départ affiché pour une prestation (DSP Paris ou 1er palier remorquage). */
export function getStartingPrice(priceKey: string): number | null {
  if (priceKey in pricing.dsp.services) {
    return getDspTotal("PARIS");
  }
  if (priceKey in pricing.towing) {
    return pricing.towing[priceKey as keyof typeof pricing.towing].amount;
  }
  return null;
}
