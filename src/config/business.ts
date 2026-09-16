/**
 * Point d'entrée NAP / identité — alias vers la source unique `src/data/company.ts`.
 * Consommer ce module pour footer, JSON-LD, contact et mentions légales.
 */
export { company as business } from "@/data/company";
export { company } from "@/data/company";
export { getCompanySiren, getCompanyStreetLine } from "@/lib/company-nap";
