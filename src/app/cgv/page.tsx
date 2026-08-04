import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Conditions générales de vente",
  description: "CGV DépannageScooter.",
  path: "/cgv/",
  index: false,
});

export default function CgvPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "CGV" }]} />
        <h1 className="mt-6 font-display text-2xl font-bold text-asphalte">Conditions générales de vente</h1>
        <div className="mt-6 space-y-4 text-sm text-beton">
          <p>Devis ferme communiqué par téléphone avant intervention. Paiement sur place à la fin de la prestation.</p>
          <p>Majorations nuit, week-end et jours fériés selon grille tarifaire en vigueur.</p>
          <p>Document complet à finaliser avec le client (raison sociale et SIREN).</p>
        </div>
      </main>
    </PageShell>
  );
}
