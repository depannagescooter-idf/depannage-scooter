import { company } from "@/data/company";

/** Bloc NAP (Name, Address, Phone) — source unique pour footer et mentions. */
export function getCompanyStreetLine(): string {
  const { address } = company;
  return `${address.street}, ${address.postalCode} ${address.city}`;
}

export function getCompanySiren(): string {
  return company.siren;
}
