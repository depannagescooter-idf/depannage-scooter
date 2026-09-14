import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { GoogleReviewsSummary } from "@/components/GoogleReviewsSummary";
import { ShortAnswer } from "@/components/ShortAnswer";
import { getVerifiedReviews } from "@/data/reviews";
import { createPageMetadata } from "@/lib/metadata";
import { webPageSchema } from "@/lib/schema";

const hasReviews = getVerifiedReviews().length > 0;

export const metadata: Metadata = createPageMetadata({
  title: "Avis clients dépannage scooter IDF",
  description:
    "Avis clients sur le dépannage et remorquage scooter et moto DépannageScooter en Île-de-France.",
  path: "/avis/",
  index: hasReviews,
});

export default function AvisPage() {
  const verified = getVerifiedReviews();

  return (
    <PageShell>
      <JsonLd
        data={webPageSchema({
          name: "Avis clients DépannageScooter",
          description: "Avis vérifiés sur le dépannage et remorquage deux-roues en Île-de-France.",
          path: "/avis/",
        })}
      />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Avis" }]} />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte">Avis de nos clients</h1>
        <div className="mt-4">
          <ShortAnswer>
            Les avis publiés ici proviennent de clients ayant utilisé notre service de dépannage ou
            remorquage scooter et moto en Île-de-France. Chaque témoignage est vérifié avant
            publication.
          </ShortAnswer>
        </div>
        <GoogleReviewsSummary />
        {verified.length === 0 ? (
          <p className="mt-6 text-beton">
            Les témoignages détaillés seront publiés ici au fil des interventions. Consultez nos
            avis Google ci-dessus ou contactez-nous après votre dépannage.
          </p>
        ) : (
          <ul className="mt-8 space-y-4">
            {verified.map((r) => (
              <li key={r.id} className="card px-5 py-4">
                <p className="font-display font-semibold text-asphalte">{r.author}</p>
                <p className="mt-2 text-beton">{r.text}</p>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-10">
          <CallButton origin="inline" />
        </div>
        <p className="mt-6 text-sm text-beton">
          <Link href="/contact/" className="text-gyro hover:underline">
            Contactez-nous
          </Link>{" "}
          ou consultez nos{" "}
          <Link href="/tarifs/" className="text-gyro hover:underline">
            tarifs
          </Link>
          .
        </p>
      </main>
    </PageShell>
  );
}
