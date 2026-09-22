import type { Review } from "@/data/types";

function formatReviewDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function CustomerReviewsList({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) {
    return null;
  }

  return (
    <ul className="mt-8 space-y-4">
      {reviews.map((review) => (
        <li key={review.id} className="card px-5 py-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-display font-semibold text-asphalte">{review.author}</p>
            <p className="text-xs text-beton">
              <span className="font-data tabular-nums">{review.rating}/5</span>
              {" · "}
              <time dateTime={review.date} className="font-data tabular-nums">
                {formatReviewDate(review.date)}
              </time>
              {" · "}
              {review.source}
            </p>
          </div>
          <p className="mt-2 text-beton">{review.text}</p>
        </li>
      ))}
    </ul>
  );
}
