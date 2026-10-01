import { getZonesByDepartement } from "./zones";

export interface Department {
  slug: string;
  code: string;
  name: string;
  /** « à Paris », « en Hauts-de-Seine », « en Seine-Saint-Denis », « dans le Val-de-Marne ». */
  where: string;
  intro: string;
  /** Meta description complète, 140 à 155 caractères, sans troncature. */
  metaDescription: string;
}

export const departments: Department[] = [
  {
    slug: "paris",
    code: "75",
    name: "Paris",
    where: "à Paris",
    intro:
      "Dépannage et remorquage de scooters et motos à Paris, 24h/24, avec un devis ferme confirmé par téléphone avant le déplacement.",
    metaDescription:
      "Dépannage et remorquage de scooters et motos à Paris, 24h/24, dans les vingt arrondissements. Devis ferme par téléphone avant le déplacement.",
  },
  {
    slug: "hauts-de-seine",
    code: "92",
    name: "Hauts-de-Seine",
    where: "en Hauts-de-Seine",
    intro:
      "Dépannage et remorquage de scooters et motos en Hauts-de-Seine, 24h/24, avec un devis ferme confirmé par téléphone avant le déplacement.",
    metaDescription:
      "Dépannage et remorquage de scooters et motos en Hauts-de-Seine, 24h/24. Devis ferme par téléphone avant le déplacement, tarif du jour affiché.",
  },
  {
    slug: "seine-saint-denis",
    code: "93",
    name: "Seine-Saint-Denis",
    where: "en Seine-Saint-Denis",
    intro:
      "Dépannage et remorquage de scooters et motos en Seine-Saint-Denis, 24h/24, avec un devis ferme confirmé par téléphone avant le déplacement.",
    metaDescription:
      "Dépannage et remorquage de scooters et motos en Seine-Saint-Denis, 24h/24. Devis ferme par téléphone avant le déplacement, tarif du jour affiché.",
  },
  {
    slug: "val-de-marne",
    code: "94",
    name: "Val-de-Marne",
    where: "dans le Val-de-Marne",
    intro:
      "Dépannage et remorquage de scooters et motos dans le Val-de-Marne, 24h/24, avec un devis ferme confirmé par téléphone avant le déplacement.",
    metaDescription:
      "Dépannage et remorquage de scooters et motos dans le Val-de-Marne, 24h/24. Devis ferme par téléphone avant le déplacement, tarif du jour affiché.",
  },
];

export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.find((d) => d.slug === slug);
}

export function getDepartmentZones(slug: string) {
  const dept = getDepartmentBySlug(slug);
  if (!dept) return [];
  return getZonesByDepartement(dept.code);
}

export function getDepartmentSlugByCode(code: string): string | undefined {
  return departments.find((d) => d.code === code)?.slug;
}
