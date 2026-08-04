import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { guides } from "@/data/guides";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Guides dépannage scooter et moto",
  description:
    "Guides pratiques : scooter qui ne démarre plus, crevaison, batterie, tarifs remorquage, après une chute. Conseils DépannageScooter.",
  path: "/guides/",
});

export default function GuidesIndexPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Guides" },
        ])}
      />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Guides" }]} />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte">Guides pratiques</h1>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {guides.map((g) => (
            <li key={g.slug}>
              <Link href={`/guides/${g.slug}/`} className="card block px-5 py-4 hover:shadow-card">
                <h2 className="font-display font-semibold text-asphalte">{g.title}</h2>
                <p className="mt-2 text-sm text-beton line-clamp-2">{g.shortAnswer}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </PageShell>
  );
}
