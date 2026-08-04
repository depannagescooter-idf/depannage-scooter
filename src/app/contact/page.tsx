import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/data/company";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact – dépannage scooter 24h/24",
  description:
    "Contactez DépannageScooter pour un dépannage ou remorquage scooter moto en IDF. Téléphone, WhatsApp ou formulaire de rappel.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Contact" }]} />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte">Nous contacter</h1>
        <p className="mt-4 max-w-xl text-beton">
          En panne ? Le plus rapide reste l&apos;appel. Nous confirmons délai et tarif avant
          intervention.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <CallButton origin="inline" />
          <WhatsAppButton origin="inline" />
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <address className="card space-y-3 px-5 py-6 not-italic text-beton">
            <p className="font-display font-bold text-asphalte">{company.name}</p>
            <p>
              <a
                href={`tel:${company.phone}`}
                data-track-origin="inline"
                data-track-event="call_click"
                className="font-data text-lg text-signal"
              >
                {company.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${company.email}`} className="hover:text-signal">
                {company.email}
              </a>
            </p>
            <p className="font-data tabular-nums">{company.openingHours}</p>
          </address>
        </div>
      </main>
    </PageShell>
  );
}
