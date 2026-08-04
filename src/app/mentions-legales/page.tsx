import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { company } from "@/data/company";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site DépannageScooter.",
  path: "/mentions-legales/",
  index: false,
});

export default function MentionsLegalesPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]} />
        <h1 className="mt-6 font-display text-2xl font-bold text-asphalte">Mentions légales</h1>
        <div className="mt-6 space-y-4 text-sm text-beton">
          <p><strong className="text-asphalte">Éditeur :</strong> {company.name}</p>
          <p><strong className="text-asphalte">Email :</strong> {company.email}</p>
          <p><strong className="text-asphalte">Téléphone :</strong> {company.phoneDisplay}</p>
          <p><strong className="text-asphalte">SIREN :</strong> {company.siren !== "TODO-SIREN" ? company.siren : "En cours d'immatriculation"}</p>
          <p><strong className="text-asphalte">Hébergeur :</strong> Vercel Inc.</p>
        </div>
      </main>
    </PageShell>
  );
}
