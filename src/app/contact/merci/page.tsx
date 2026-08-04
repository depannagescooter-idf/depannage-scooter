import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { CallButton } from "@/components/CallButton";
import { company } from "@/data/company";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Demande enregistrée",
    description: "Votre demande de rappel a bien été transmise à DépannageScooter.",
    path: "/contact/merci/",
  }),
  robots: { index: false, follow: false },
};

export default function ContactMerciPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-lg px-4 py-16 text-center sm:px-6">
        <h1 className="font-display text-3xl font-extrabold text-asphalte">Demande enregistrée</h1>
        <p className="mt-4 text-beton">
          Nous vous rappelons rapidement pour confirmer le délai et le tarif. En urgence, appelez
          directement le{" "}
          <a href={`tel:${company.phone}`} className="font-data text-signal">
            {company.phoneDisplay}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CallButton origin="inline" />
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-asphalte shadow-soft"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
    </PageShell>
  );
}
