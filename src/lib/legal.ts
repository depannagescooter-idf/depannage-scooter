import { company } from "@/data/company";

/** Dernière mise à jour des pages légales (ISO). */
export const LEGAL_LAST_UPDATED = "2026-08-05";

/** Médiateur de la consommation (CM2C — standard e-commerce / services). */
export const consumerMediator = {
  name: "CM2C — Centre de la médiation de la consommation de conciliateurs de justice",
  url: "https://www.cm2c.net",
  contactUrl: "https://www.cm2c.net",
} as const;

export function getLegalName(): string {
  return company.legalName !== "TODO-RAISON-SOCIALE" ? company.legalName : company.name;
}

export function getLegalForm(): string | null {
  return company.legalForm !== "TODO-FORME-JURIDIQUE" ? company.legalForm : null;
}

export function getSirenDisplay(): string {
  return company.siren !== "TODO-SIREN" ? company.siren : "En cours d'immatriculation";
}

export function getStreetAddress(): string {
  const { address } = company;
  if (address.street !== "TODO-adresse") {
    return `${address.street}, ${address.postalCode} ${address.city}`;
  }
  return `${address.postalCode} ${address.city} (adresse du siège en cours de finalisation)`;
}
