/** Villes majeures pour les pages prestation × ville, dans la zone encore desservie. */
export const majorCitySlugs = [
  "boulogne-billancourt",
  "nanterre",
  "montreuil",
  "vincennes",
  "neuilly-sur-seine",
  "creteil",
] as const;

export type MajorCitySlug = (typeof majorCitySlugs)[number];
