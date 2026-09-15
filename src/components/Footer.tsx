import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { Logo } from "@/components/Logo";
import { company } from "@/data/company";
import { getCompanySiren, getCompanyStreetLine } from "@/lib/company-nap";

const majorZones = [
  { slug: "paris-11e", name: "Paris 11e" },
  { slug: "paris-20e", name: "Paris 20e" },
  { slug: "boulogne-billancourt", name: "Boulogne-Billancourt" },
  { slug: "montreuil", name: "Montreuil" },
  { slug: "nanterre", name: "Nanterre" },
  { slug: "vincennes", name: "Vincennes" },
] as const;

const legalLinks = [
  { href: "/mentions-legales/", label: "Mentions légales" },
  { href: "/cgv/", label: "CGV" },
  { href: "/confidentialite/", label: "Confidentialité" },
] as const;

export function Footer() {
  const streetLine = getCompanyStreetLine();
  const siren = getCompanySiren();

  return (
    <footer className="mt-16 bg-asphalte text-marquage">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-10 flex flex-col gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <Logo variant="light" />
          <CallButton origin="footer" />
        </div>

        <div className="grid gap-10 md:grid-cols-4">
          <section aria-labelledby="footer-nap">
            <h2 id="footer-nap" className="font-display text-sm font-semibold text-white">
              Contact
            </h2>
            <address className="mt-4 space-y-2 not-italic text-sm text-stone-400">
              <p className="font-medium text-stone-200">{company.name}</p>
              <p>
                <a
                  href={`tel:${company.phone}`}
                  data-track-origin="footer"
                  data-track-event="call_click"
                  className="font-data tabular-nums transition-colors hover:text-signal"
                >
                  {company.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-signal">
                  {company.email}
                </a>
              </p>
              <p>{streetLine}</p>
              <p className="font-data tabular-nums text-stone-400">SIREN {siren}</p>
              <p className="font-data tabular-nums text-alerte">{company.openingHours}</p>
            </address>
          </section>

          <section aria-labelledby="footer-zones">
            <h2 id="footer-zones" className="font-display text-sm font-semibold text-white">
              Zones principales
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {majorZones.map((zone) => (
                <li key={zone.slug}>
                  <Link
                    href={`/zones-intervention/${zone.slug}/`}
                    className="text-stone-400 transition-colors hover:text-white"
                  >
                    {zone.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/zones-intervention/"
              className="mt-4 inline-block text-sm font-medium text-orange-400 hover:underline"
            >
              Toutes les zones →
            </Link>
          </section>

          <section aria-labelledby="footer-services">
            <h2 id="footer-services" className="font-display text-sm font-semibold text-white">
              Services
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { href: "/depannage-sur-place/", label: "Dépannage sur place" },
                { href: "/depannage-sur-place/batterie-voiture/", label: "Batterie voiture" },
                { href: "/depannage-sur-place/batterie/", label: "Batterie scooter et moto" },
                { href: "/remorquage/", label: "Remorquage" },
                { href: "/tarifs/", label: "Tarifs" },
                { href: "/faq/", label: "FAQ" },
                { href: "/guides/", label: "Guides pratiques" },
                { href: "/a-propos/", label: "À propos" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-stone-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-info">
            <h2 id="footer-info" className="font-display text-sm font-semibold text-white">
              Informations
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { href: "/contact/", label: "Contact" },
                { href: "/avis/", label: "Avis clients" },
                { href: "/zones-intervention/paris-11e/", label: "Dépannage Paris 11e" },
                { href: "/depannage-sur-place/crevaison/", label: "Crevaison scooter" },
                { href: "/remorquage/remorquage-scooter/", label: "Remorquage scooter" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-stone-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-stone-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {company.name} · SIREN {siren}
          </p>
          <ul className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-stone-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
