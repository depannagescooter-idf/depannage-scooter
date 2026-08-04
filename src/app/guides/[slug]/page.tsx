import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { JsonLd } from "@/components/JsonLd";
import { ShortAnswer } from "@/components/ShortAnswer";
import { guides, getGuideBySlug } from "@/data/guides";
import { guideRelatedLinks } from "@/lib/guide-links";
import { createPageMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return createPageMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}/`,
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = guideRelatedLinks[slug] ?? [];

  return (
    <PageShell>
      <JsonLd
        data={articleSchema({
          title: guide.title,
          description: guide.shortAnswer,
          path: `/guides/${guide.slug}/`,
          publishedAt: guide.publishedAt,
          authorName: guide.author.name,
          authorRole: guide.author.role,
        })}
      />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Guides", href: "/guides/" },
            { label: guide.title },
          ]}
        />
        <article className="mt-6">
          <h1 className="font-display text-3xl font-extrabold text-asphalte">{guide.title}</h1>
          <div className="mt-4">
            <ShortAnswer>{guide.shortAnswer}</ShortAnswer>
          </div>
          <p className="mt-6 text-sm text-beton">
            Par {guide.author.name}, {guide.author.role} — {guide.author.experienceYears} ans
            d&apos;expérience
          </p>
          <p className="mt-6 leading-relaxed text-beton">{guide.intro}</p>
          {guide.sections.map((section) => (
            <section key={section.question} className="mt-10">
              <h2 className="section-title">{section.question}</h2>
              <p className="mt-3 leading-relaxed text-beton">{section.answer}</p>
            </section>
          ))}
          {related.length > 0 && (
            <section className="mt-10">
              <h2 className="section-title">Pages utiles</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {related.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-full border border-border px-3 py-1.5 text-sm font-medium text-asphalte hover:border-signal hover:text-signal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <div className="card mt-12 px-6 py-8 text-center">
            <p className="font-display font-semibold text-asphalte">Besoin d&apos;une intervention ?</p>
            <div className="mt-4 flex justify-center">
              <CallButton origin="inline" />
            </div>
          </div>
        </article>
        <Link href="/guides/" className="mt-8 inline-block text-sm text-gyro hover:underline">
          ← Tous les guides
        </Link>
      </main>
    </PageShell>
  );
}
