import Link from "next/link";
import { Star } from "lucide-react";
import { company } from "@/data/company";

export function GoogleReviewsSummary() {
  const { googleReviews } = company;
  const ratingLabel = googleReviews.rating.toLocaleString("fr-FR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <div className="card mt-6 px-6 py-8 text-center">
      <div className="flex items-center justify-center gap-1 text-signal" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-6 fill-current" />
        ))}
      </div>
      <p className="mt-4 font-display text-lg font-semibold text-asphalte">
        <span className="font-data tabular-nums">{ratingLabel}/5</span> sur Google
      </p>
      <p className="mt-1 text-sm text-beton">
        <span className="font-data tabular-nums">{googleReviews.reviewCount}</span> avis clients
      </p>
      <Link
        href={googleReviews.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm font-medium text-gyro hover:underline"
      >
        Voir les avis sur Google →
      </Link>
    </div>
  );
}
