import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CallButton } from "@/components/CallButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PriceTable } from "@/components/PriceTable";
import { ShortAnswer } from "@/components/ShortAnswer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Department } from "@/data/departments";
import { getDepartmentZones } from "@/data/departments";
import { depannageServices, remorquageServices } from "@/data/services";
import {
  departmentDelayStats,
  departmentDelayText,
  departmentFaqs,
  departmentParagraphs,
  departmentTravelKey,
} from "@/lib/department-hub";
import { faqPageSchema } from "@/lib/schema";

export function DepartmentHubContent({ department }: { department: Department }) {
  const zones = getDepartmentZones(department.slug);
  const stats = departmentDelayStats(zones);
  const paragraphs = departmentParagraphs(department, stats);
  const faqs = departmentFaqs(department);

  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Zones", href: "/zones-intervention/" },
            { label: department.name },
          ]}
        />
        <h1 className="mt-6 font-display text-3xl font-extrabold text-asphalte sm:text-4xl">
          Dépannage scooter et moto {department.where} ({department.code})
        </h1>
        <div className="mt-4 max-w-2xl">
          <ShortAnswer>{department.intro}</ShortAnswer>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <CallButton origin="inline" />
          <WhatsAppButton origin="inline" />
        </div>

        <div data-hub-copy>
          <section className="mt-10 max-w-3xl">
            <h2 className="section-title">Délai moyen</h2>
            <p className="mt-4 leading-relaxed text-asphalte">{departmentDelayText(stats)}</p>
          </section>

          <section className="mt-10">
            <h2 className="section-title">Tarifs</h2>
            <div className="mt-4">
              <PriceTable travelZones={[departmentTravelKey(department.code)]} />
            </div>
          </section>

          <section className="mt-10 max-w-3xl space-y-4 leading-relaxed text-asphalte">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="mt-10 max-w-3xl">
            <h2 className="section-title">Questions fréquentes</h2>
            <div className="mt-4">
              <FaqAccordion items={faqs} id={`faq-${department.slug}`} />
            </div>
          </section>
        </div>

        <section className="mt-10" data-link-list>
          <h2 className="section-title">Communes couvertes</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {zones.map((z) => (
              <li key={z.slug}>
                <Link
                  href={`/zones-intervention/${z.slug}/`}
                  className="card block px-4 py-3 text-sm font-medium text-asphalte hover:shadow-card"
                >
                  {z.name}
                  <span className="mt-0.5 block font-data text-xs tabular-nums text-beton">
                    {z.etaMinutes[0]}–{z.etaMinutes[1]} min
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10" data-link-list>
          <h2 className="section-title">Nos prestations {department.where}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {[...depannageServices, ...remorquageServices].map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.category === "depannage" ? "depannage-sur-place" : "remorquage"}/${s.slug}/`}
                  className="text-sm font-medium text-gyro hover:underline"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
