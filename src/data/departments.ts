import { getZonesByDepartement } from "./zones";

export interface Department {
  slug: string;
  code: string;
  name: string;
  intro: string;
}

export const departments: Department[] = [
  {
    slug: "paris",
    code: "75",
    name: "Paris",
    intro:
      "Dépannage et remorquage scooter et moto dans les 20 arrondissements de Paris, 24h/24. Crevaison, batterie, panne sèche ou remorquage plateau — délai confirmé avant départ.",
  },
  {
    slug: "hauts-de-seine",
    code: "92",
    name: "Hauts-de-Seine",
    intro:
      "Intervention 24h/24 dans les Hauts-de-Seine (92) : Boulogne, Nanterre, Neuilly, Issy, Courbevoie et l'ensemble du département. Dépannage sur place et remorquage moto.",
  },
  {
    slug: "seine-saint-denis",
    code: "93",
    name: "Seine-Saint-Denis",
    intro:
      "Dépannage scooter et moto en Seine-Saint-Denis (93) : Montreuil, Saint-Denis, Aubervilliers, Pantin et communes voisines. Disponible 24h/24, 7j/7.",
  },
  {
    slug: "val-de-marne",
    code: "94",
    name: "Val-de-Marne",
    intro:
      "Remorquage et dépannage deux-roues dans le Val-de-Marne (94) : Créteil, Vincennes, Vitry, Ivry et toutes les communes du département.",
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
