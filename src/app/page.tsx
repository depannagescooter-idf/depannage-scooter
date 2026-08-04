import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/data/company";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70dvh] flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-center rounded-full bg-alerte/10 px-3 py-1 text-xs font-semibold text-alerte">
          ● Équipes disponibles
        </span>
        <h1 className="mt-4 max-w-lg font-display text-4xl font-extrabold tracking-tight text-asphalte">
          {company.name}
        </h1>
        <p className="mt-3 max-w-md text-beton">
          Dépannage et remorquage scooter & moto en Île-de-France, 24h/24.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <CallButton origin="hero" />
          <WhatsAppButton origin="hero" />
        </div>
        <p className="mt-8 text-sm text-beton">
          <Link href="/design-system/" className="font-medium text-signal hover:underline">
            Voir le design system →
          </Link>
        </p>
      </main>
    </>
  );
}
