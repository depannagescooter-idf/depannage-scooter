export type ServiceCategory = "depannage" | "remorquage";

export interface Faq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  category: ServiceCategory;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Réponse directe de 40–60 mots placée juste sous le H1. Cible extraction LLM. */
  shortAnswer: string;
  intro: string;
  symptoms: string[];
  interventionSteps: { title: string; detail: string }[];
  duration: string;
  vehicles: string[];
  faqs: Faq[];
  relatedServices: string[];
  priceKey: string;
}

export interface Zone {
  slug: string;
  name: string;
  kind: "arrondissement" | "commune";
  departement: string;
  postalCodes: string[];
  lat: number;
  lng: number;
  etaMinutes: [number, number];
  /** Contenu OBLIGATOIREMENT unique. Pas de template à variables. */
  intro: string;
  axes: string[];
  landmarks: string[];
  commonInterventions: string[];
  neighbours: string[];
  /** FAQ propres à la commune (complète les FAQ génériques). */
  faq?: Faq[];
  quartiers?: string[];
  garagesPartenaires?: string[];
  /** Zone non publiée tant que le contenu unique n'est pas prêt. */
  draft?: boolean;
}

export interface Review {
  id: string;
  /** Prénom ou initiale affichée */
  author: string;
  rating: number;
  text: string;
  date: string;
  source: "Avis Google";
  zoneSlug?: string;
  /** true = avis réel vérifié, false = placeholder en attente */
  verified: boolean;
}

export interface GuideAuthor {
  name: string;
  role: string;
  experienceYears: number;
}

export interface Company {
  name: string;
  legalName: string;
  legalForm: string;
  siren: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    addressRegion: string;
    country: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string;
  description: string;
  url: string;
  logoPath: string;
  serviceAreas: string[];
  paymentAccepted: string;
  currenciesAccepted: string;
  /** Profils publics (Google Business Profile, etc.) */
  sameAs: string[];
  /** Délai moyen par défaut affiché avant géolocalisation [min, max] en minutes */
  defaultEtaMinutes: [number, number];
  googleReviews: {
    rating: number;
    reviewCount: number;
    profileUrl: string;
  };
}

export type DspPriceKey =
  | "DSP_CREVAISON"
  | "DSP_BATTERIE"
  | "DSP_DEMARRAGE"
  | "DSP_ESSENCE"
  | "DSP_SELLE";

export type TravelZoneKey = "PARIS" | "PETITE_COURONNE" | "GRANDE_COURONNE";

export type TowPriceKey =
  | "KM_0_5"
  | "KM_5_10"
  | "KM_10_15"
  | "KM_15_20"
  | "KM_20_PLUS";

export interface PricingConfig {
  currency: string;
  dsp: {
    baseFee: number;
    services: Record<DspPriceKey, { label: string }>;
  };
  travelFees: Record<TravelZoneKey, { label: string; amount: number }>;
  towing: Record<TowPriceKey, { label: string; amount: number | null }>;
  surcharges: {
    night: { label: string; percent: number | null };
    weekendSaturday: { label: string; percent: number | null };
    weekendSunday: { label: string; percent: number | null };
    holiday: { label: string; percent: number | null };
  };
  /** Point de départ pour le calcul des distances (à remplir par le client) */
  referencePoint: {
    label: string;
    lat: number | null;
    lng: number | null;
  };
  difficultySurcharge: {
    label: string;
    amount: number;
  };
  /** Tarifs batterie voiture — distincts du 2-roues. */
  carBattery: {
    boost: number;
    replacementLabor: number;
    batteryFrom: number;
    travelFees: Record<TravelZoneKey, number>;
  };
}
