import type { Review } from "./types";

/**
 * Avis clients — n'afficher que verified: true en production.
 * Remplacer les placeholders par de vrais avis collectés post-intervention.
 */
export const reviews: Review[] = [
  {
    id: "placeholder-1",
    author: "Client vérifié",
    rating: 5,
    text: "Emplacement réservé pour un avis client réel.",
    date: "2026-01-01",
    zoneSlug: "paris-11e",
    verified: false,
  },
];

export function getVerifiedReviews(): Review[] {
  return reviews.filter((r) => r.verified);
}
