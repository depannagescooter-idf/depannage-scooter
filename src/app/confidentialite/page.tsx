import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { company } from "@/data/company";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Politique de confidentialité",
  description: "Politique de confidentialité DépannageScooter.",
  path: "/confidentialite/",
  index: false,
});

export default function ConfidentialitePage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Confidentialité" }]} />
        <h1 className="mt-6 font-display text-2xl font-bold text-asphalte">Politique de confidentialité</h1>
        <div className="mt-6 space-y-4 text-sm text-beton">
          <p>Les données collectées via le formulaire de contact (téléphone, localisation, type de panne) servent uniquement à organiser l&apos;intervention.</p>
          <p>Contact RGPD : {company.email}</p>
        </div>
      </main>
    </PageShell>
  );
}
