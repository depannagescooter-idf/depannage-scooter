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
  /** Zone non publiée tant que le contenu unique n'est pas prêt. */
  draft?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
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
    country: string;
  };
  openingHours: string;
  description: string;
  url: string;
  logoPath: string;
  serviceAreas: string[];
  /** Délai moyen par défaut affiché avant géolocalisation [min, max] en minutes */
  defaultEtaMinutes: [number, number];
}

export type DspPriceKey =
  | "DSP_CREVAISON"
  | "DSP_BATTERIE"
  | "DSP_DEMARRAGE"
  | "DSP_ESSENCE"
  | "DSP_SELLE";

export type TowPriceKey =
  | "PARIS_INTRA_MUROS"
  | "KM_0_15"
  | "KM_15_30"
  | "KM_30_PLUS";

export interface PricingConfig {
  currency: string;
  dsp: Record<DspPriceKey, { label: string; baseFee: number | null; perKm: number | null }>;
  towing: Record<TowPriceKey, { label: string; amount: number | null }>;
  surcharges: {
    night: { label: string; percent: number | null };
    weekend: { label: string; percent: number | null };
    holiday: { label: string; percent: number | null };
  };
  /** Point de départ pour le calcul des distances (à remplir par le client) */
  referencePoint: {
    label: string;
    lat: number | null;
    lng: number | null;
  };
}
