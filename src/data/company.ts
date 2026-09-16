import type { Company } from "./types";

/**
 * Source unique de vérité — identité de l'entreprise.
 */
export const company: Company = {
  name: "DépannageScooter",
  legalName: "DEPANNAGE SCOOTER",
  legalForm: "SAS",
  siren: "951940964",
  phone: "+33772125311",
  phoneDisplay: "07 72 12 53 11",
  whatsapp: "33772125311",
  email: "contact@depannagescooter.com",
  address: {
    street: "4 boulevard de la Bastille",
    city: "Paris",
    postalCode: "75012",
    addressRegion: "Île-de-France",
    country: "FR",
  },
  geo: {
    latitude: 48.8506,
    longitude: 2.3688,
  },
  openingHours: "24h/24, 7j/7",
  paymentAccepted: "Carte bancaire, Espèces",
  currenciesAccepted: "EUR",
  sameAs: [
    "https://www.google.com/maps/search/?api=1&query=D%C3%A9pannageScooter&query=33772125311",
  ],
  description:
    "DépannageScooter — dépannage et remorquage scooters, motos et batterie voiture en Île-de-France, disponible 24h/24 et 7j/7.",
  url: "https://www.depannagescooter.com",
  logoPath: "/images/logo-carre-orange.png",
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
  googleReviews: {
    rating: 4.7,
    reviewCount: 168,
    profileUrl:
      "https://www.google.com/maps/search/?api=1&query=D%C3%A9pannageScooter&query=33772125311",
  },
};
