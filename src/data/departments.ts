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
  {
    slug: "seine-et-marne",
    code: "77",
    name: "Seine-et-Marne",
    intro:
      "Dépannage scooter et moto en Seine-et-Marne (77) : Meaux, Melun, Chelles, Fontainebleau et grande couronne est. Devis ferme au téléphone.",
  },
  {
    slug: "yvelines",
    code: "78",
    name: "Yvelines",
    intro:
      "Intervention dans les Yvelines (78) : Versailles, Saint-Germain, Poissy, Mantes et communes de l'ouest parisien. Remorquage plateau 24h/24.",
  },
  {
    slug: "essonne",
    code: "91",
    name: "Essonne",
    intro:
      "Dépannage et remorquage en Essonne (91) : Évry, Massy, Palaiseau, Corbeil et sud de l'Île-de-France. Délai annoncé selon la commune.",
  },
  {
    slug: "val-doise",
    code: "95",
    name: "Val-d'Oise",
    intro:
      "Service 24h/24 dans le Val-d'Oise (95) : Argenteuil, Cergy, Pontoise, Roissy et nord de l'Île-de-France. Scooters, motos et trois-roues.",
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
