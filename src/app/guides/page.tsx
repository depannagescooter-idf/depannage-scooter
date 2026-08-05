import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { ShortAnswer } from "@/components/ShortAnswer";
import { guides } from "@/data/guides";
import { createPageMetadata } from "@/lib/metadata";
import { itemListSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Guides dépannage scooter et moto",
  description:
    "Guides pratiques : scooter qui ne démarre plus, crevaison, batterie, tarifs remorquage, après une chute. Conseils DépannageScooter.",
  path: "/guides/",
  useRouteOg: true,
});

export default function GuidesIndexPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          webPageSchema({
            name: "Guides dépannage scooter et moto",
            description: "Conseils pratiques pour deux-roués en panne en Île-de-France.",
            path: "/guides/",
          }),
          itemListSchema({
            name: "Guides pratiques",
            items: guides.map((g) => ({
              name: g.title,
              url: `/guides/${g.slug}/`,
            })),
          }),
        ]}
      />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Guides" }]} />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte">Guides pratiques</h1>
        <div className="mt-4 max-w-2xl">
          <ShortAnswer>
            Nos guides expliquent quoi faire en cas de panne scooter ou moto : diagnostic,
            réparation sur place ou remorquage, et ordre de grandeur des tarifs en Île-de-France.
          </ShortAnswer>
        </div>
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
        <p className="mt-8 text-sm text-beton">
          Besoin d&apos;une intervention ?{" "}
          <Link href="/contact/" className="text-gyro hover:underline">
            Contactez-nous
          </Link>{" "}
          ou consultez nos{" "}
          <Link href="/depannage-sur-place/" className="text-gyro hover:underline">
            services de dépannage
          </Link>
          .
        </p>
      </main>
    </PageShell>
  );
}
