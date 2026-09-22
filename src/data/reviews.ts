import type { Review } from "./types";

/**
 * Avis clients affichés sur /avis/ — alimenté manuellement (verified: true uniquement).
 * Format : prénom, date ISO, note 1–5, texte, source « Avis Google ».
 */
export const reviews: Review[] = [
  // TODO: ajouter les 10 avis Google fournis (verified: true)
];

export function getVerifiedReviews(): Review[] {
  return reviews.filter((r) => r.verified);
}
