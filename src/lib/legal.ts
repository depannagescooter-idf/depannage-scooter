import { company } from "@/data/company";
import { getCompanySiren, getCompanyStreetLine } from "@/lib/company-nap";

/** Dernière mise à jour des pages légales (ISO). */
export const LEGAL_LAST_UPDATED = "2026-08-05";

/** Médiateur de la consommation (CM2C — standard e-commerce / services). */
export const consumerMediator = {
  name: "CM2C — Centre de la médiation de la consommation de conciliateurs de justice",
  url: "https://www.cm2c.net",
  contactUrl: "https://www.cm2c.net",
} as const;

export function getLegalName(): string {
  return company.legalName;
}

export function getLegalForm(): string | null {
  return company.legalForm;
}

export function getSirenDisplay(): string {
  return getCompanySiren();
}

export function getStreetAddress(): string {
  return getCompanyStreetLine();
}
