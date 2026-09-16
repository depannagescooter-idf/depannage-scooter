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
import { businessAggregateRatingSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Avis clients dépannage scooter Île-de-France",
  description:
    "Avis clients DépannageScooter : dépannage, remorquage scooter moto et batterie voiture en Île-de-France. Note Google 4,7/5 sur 168 avis.",
  path: "/avis/",
});

export default function AvisPage() {
  const verified = getVerifiedReviews();

  return (
    <PageShell>
      <JsonLd
        data={[
          webPageSchema({
            name: "Avis clients DépannageScooter",
            description:
              "Avis clients sur le dépannage, remorquage deux-roues et batterie voiture en Île-de-France.",
            path: "/avis/",
          }),
          businessAggregateRatingSchema(),
        ]}
      />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Avis" }]} />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte">Avis de nos clients</h1>
        <div className="mt-4">
          <ShortAnswer>
            DépannageScooter est noté 4,7/5 sur Google pour le dépannage et remorquage scooter, moto
            et batterie voiture en Île-de-France. Consultez les avis Google ci-dessous ou laissez
            le vôtre après une intervention.
          </ShortAnswer>
        </div>
        <GoogleReviewsSummary />
        {verified.length > 0 && (
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
