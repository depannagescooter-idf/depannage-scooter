import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { CallButton } from "@/components/CallButton";
import { depannageServices, remorquageServices } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Page introuvable",
  description: "Page introuvable.",
  path: "/404/",
  index: false,
});

export default function NotFound() {
  return (
    <PageShell>
      <main className="mx-auto max-w-lg px-4 py-16 text-center sm:px-6">
        <p className="font-data text-6xl font-bold tabular-nums text-signal">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-asphalte">Page introuvable</h1>
        <p className="mt-2 text-beton">En panne ? Nous sommes disponibles 24h/24.</p>
        <div className="mt-6 flex justify-center">
          <CallButton origin="inline" />
        </div>
        <section className="mt-10 text-left">
          <h2 className="font-display text-sm font-semibold text-asphalte">Dépannage</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {depannageServices.slice(0, 3).map((s) => (
              <li key={s.slug}>
                <Link href={`/depannage-sur-place/${s.slug}/`} className="text-gyro hover:underline">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-4 font-display text-sm font-semibold text-asphalte">Remorquage</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {remorquageServices.slice(0, 3).map((s) => (
              <li key={s.slug}>
                <Link href={`/remorquage/${s.slug}/`} className="text-gyro hover:underline">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/" className="mt-6 inline-block text-sm font-medium text-signal hover:underline">
            Retour à l&apos;accueil
          </Link>
        </section>
      </main>
    </PageShell>
  );
}
