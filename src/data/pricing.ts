import type { PricingConfig } from "./types";

/**
 * Tarification centralisée — seule source des montants affichés sur le site.
 * Aucun prix ne doit être écrit ailleurs (composants, textes, JSON-LD).
 *
 * Benchmark marché IDF (2026) — dépanneurs spécialisés 2-roues :
 * ┌─────────────────────┬──────────┬──────────┬──────────┬──────────┐
 * │ Prestation          │ Depango  │ BHH      │ 2-Roues  │ R-Moto   │
 * ├─────────────────────┼──────────┼──────────┼──────────┼──────────┤
 * │ Paris intra-muros   │ 79 €     │ 89 €     │ 65 €     │ 70 €     │
 * │ 0 – 15 km           │ 89 €     │ 98 €     │ 55 €     │ 80 €     │
 * │ 15 – 30 km          │ 109 €    │ 130 €    │ 100 €    │ 100 €    │
 * │ 30 – 50 km          │ 129 €    │ 165 €    │ 150 €    │ 130 €    │
 * │ Booster / batterie  │ dès 65 € │ —        │ 65 €     │ 70 €     │
 * │ Indemnité km (DSP)  │ 0,90 €   │ —        │ —        │ —        │
 * │ Majoration nuit     │ +30 %    │ +40 €    │ ×1,85    │ +43 %    │
 * │ Majoration week-end │ +25–50 % │ +25 %    │ —        │ —        │
 * └─────────────────────┴──────────┴──────────┴──────────┴──────────┘
 *
 * Positionnement DépannageScooter : médiane du marché — compétitif sans
 * être le moins cher. Tarifs jour TTC, hors suppléments pénibilité
 * (sous-sol, Neiman bloqué, accidenté : +30 €, aligné Depango/BHH).
 */
export const pricing: PricingConfig = {
  currency: "EUR",
  dsp: {
    DSP_CREVAISON: {
      label: "Réparation de crevaison sur place",
      baseFee: 75,
      perKm: 0.9,
    },
    DSP_BATTERIE: {
      label: "Remplacement de batterie",
      baseFee: 85,
      perKm: 0.9,
    },
    DSP_DEMARRAGE: {
      label: "Démarrage / booster",
      baseFee: 65,
      perKm: 0.9,
    },
    DSP_ESSENCE: {
      label: "Livraison de carburant",
      baseFee: 75,
      perKm: 0.9,
    },
    DSP_SELLE: {
      label: "Ouverture de selle bloquée",
      baseFee: 75,
      perKm: 0.9,
    },
  },
  towing: {
    PARIS_INTRA_MUROS: {
      label: "Paris intra-muros",
      amount: 85,
    },
    KM_0_15: {
      label: "0 – 15 km",
      amount: 95,
    },
    KM_15_30: {
      label: "15 – 30 km",
      amount: 125,
    },
    KM_30_PLUS: {
      label: "Plus de 30 km",
      amount: 155,
    },
  },
  surcharges: {
    night: {
      label: "Majoration nuit (20h – 8h)",
      percent: 30,
    },
    weekend: {
      label: "Majoration week-end (sam. +30 %, dim. +50 %)",
      percent: 30,
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
};

/** Formate un montant ou affiche un placeholder si non renseigné. */
export function formatPrice(amount: number | null, currency = pricing.currency): string {
  if (amount === null) return "Sur devis";
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Calcule le tarif DSP : forfait + indemnité kilométrique. */
export function calculateDspPrice(priceKey: keyof typeof pricing.dsp, km: number): number {
  const tier = pricing.dsp[priceKey];
  const base = tier.baseFee ?? 0;
  const perKm = tier.perKm ?? 0;
  return base + perKm * km;
}

/** Applique une majoration en pourcentage. */
export function applySurcharge(amount: number, percent: number): number {
  return Math.round(amount * (1 + percent / 100));
}
