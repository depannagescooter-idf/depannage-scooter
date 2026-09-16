/** 10 villes majeures pour pages prestation × ville (pas les 127 communes). */
export const majorCitySlugs = [
  "boulogne-billancourt",
  "nanterre",
  "montreuil",
  "vincennes",
  "neuilly-sur-seine",
  "creteil",
  "versailles",
  "evry-courcouronnes",
  "argenteuil",
  "cergy",
] as const;

export type MajorCitySlug = (typeof majorCitySlugs)[number];
