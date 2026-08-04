import type { Company } from "./types";

/**
 * Source unique de vérité — identité de l'entreprise.
 */
export const company: Company = {
  name: "DépannageScooter",
  legalName: "TODO-RAISON-SOCIALE",
  legalForm: "TODO-FORME-JURIDIQUE",
  siren: "TODO-SIREN",
  phone: "+33772125311",
  phoneDisplay: "07 72 12 53 11",
  whatsapp: "33772125311",
  email: "scooterdepannage@gmail.com",
  address: {
    street: "TODO-adresse",
    city: "Paris",
    postalCode: "75000",
    country: "FR",
  },
  openingHours: "24h/24, 7j/7",
  description:
    "DépannageScooter — dépannage et remorquage de scooters et motos en Île-de-France, disponible 24h/24 et 7j/7.",
  url: "https://www.depannagescooter.com",
  logoPath: "/images/logo.svg",
  serviceAreas: [
    "Paris",
    "Hauts-de-Seine (92)",
    "Seine-Saint-Denis (93)",
    "Val-de-Marne (94)",
    "Seine-et-Marne (77)",
    "Yvelines (78)",
    "Essonne (91)",
    "Val-d'Oise (95)",
  ],
  defaultEtaMinutes: [25, 40],
};
