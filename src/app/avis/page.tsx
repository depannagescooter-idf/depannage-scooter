import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { getVerifiedReviews } from "@/data/reviews";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Avis clients – DépannageScooter",
  description:
    "Avis clients sur le dépannage et remorquage scooter et moto DépannageScooter en Île-de-France.",
  path: "/avis/",
});

export default function AvisPage() {
  const verified = getVerifiedReviews();

  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Avis" }]} />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte">Avis de nos clients</h1>
        {verified.length === 0 ? (
          <p className="mt-6 text-beton">
            Les avis vérifiés seront publiés ici prochainement. En attendant, contactez-nous ou
            laissez un avis sur Google après votre intervention.
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
      </main>
    </PageShell>
  );
}
