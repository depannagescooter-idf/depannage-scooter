/**
 * Génère public/llms.txt depuis src/data/ — format llms.txt spec (llmstxt.org).
 * Usage: npm run generate:llms
 *
 * Structure : H1 → blockquote → prose → sections H2 avec liens [titre](url): description
 */
import { writeFileSync } from "fs";
import { join } from "path";
import { company } from "../src/data/company";
import { guides } from "../src/data/guides";
import { depannageServices, remorquageServices } from "../src/data/services";
import {
  formatPrice,
  getTowingPriceRangeLabel,
  pricing,
} from "../src/data/pricing";
import { publishedZones } from "../src/data/zones";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? company.url).replace(/\/$/, "");

function abs(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}

function llmsLink(path: string, title: string, description: string): string {
  const desc = description.length > 120 ? `${description.slice(0, 117)}…` : description;
  return `- [${title}](${abs(path)}): ${desc}`;
}

const travelSummary = [
  `Paris ${formatPrice(pricing.travelFees.PARIS.amount)}`,
  `petite couronne ${formatPrice(pricing.travelFees.PETITE_COURONNE.amount)}`,
  `grande couronne ${formatPrice(pricing.travelFees.GRANDE_COURONNE.amount)}`,
].join(", ");

const lines: string[] = [
  `# ${company.name}`,
  `> ${company.description}`,
  "",
  `${company.name} intervient en Île-de-France (${publishedZones.length} communes). Contact : ${company.phoneDisplay}, ${company.openingHours}, ${company.email}.`,
  "",
  `Tarifs jour TTC : dépannage sur place ${formatPrice(pricing.dsp.baseFee)} + déplacement (${travelSummary}) ; remorquage ${getTowingPriceRangeLabel()}, au-delà de 20 km sur devis.`,
  "",
  "## Pages principales",
  llmsLink("/", "Accueil", "Dépannage et remorquage scooter et moto 24h/24 en Île-de-France."),
  llmsLink("/tarifs/", "Tarifs", "Grille complète dépannage et remorquage, majorations et mentions."),
  llmsLink("/zones-intervention/", "Zones d'intervention", `${publishedZones.length} communes : Paris, 77, 78, 91, 92, 93, 94, 95.`),
  llmsLink("/faq/", "FAQ", "Tarifs, délais, zones, assurance et types de véhicules pris en charge."),
  llmsLink("/contact/", "Contact", "Demande de rappel et coordonnées pour une intervention urgente."),
  "",
  "## Dépannage sur place",
  llmsLink("/depannage-sur-place/", "Hub dépannage", "Vue d'ensemble des interventions sur place sans remorquage."),
  ...depannageServices.map((s) =>
    llmsLink(`/depannage-sur-place/${s.slug}/`, s.name, s.shortAnswer),
  ),
  "",
  "## Remorquage",
  llmsLink("/remorquage/", "Hub remorquage", "Transport de deux-roues vers garage, domicile ou concession."),
  ...remorquageServices.map((s) =>
    llmsLink(`/remorquage/${s.slug}/`, s.name, s.shortAnswer),
  ),
  "",
  "## Optional",
  llmsLink("/guides/", "Guides pratiques", "Conseils crevaison, batterie, prix remorquage et panne sèche."),
  ...guides.map((g) => llmsLink(`/guides/${g.slug}/`, g.title, g.shortAnswer)),
  llmsLink("/a-propos/", "À propos", "Identité, méthode et zone d'intervention de l'équipe."),
  llmsLink("/avis/", "Avis clients", "Retours d'expérience sur les interventions en Île-de-France."),
  llmsLink("/mentions-legales/", "Mentions légales", "Informations légales de l'éditeur du site."),
  llmsLink("/confidentialite/", "Confidentialité", "Politique de traitement des données personnelles."),
  llmsLink(
    `/zones-intervention/${publishedZones[0]?.slug ?? "paris-1er"}/`,
    `Exemple zone — ${publishedZones[0]?.name ?? "Paris 1er"}`,
    "Page locale avec délai, tarifs et interventions fréquentes dans la commune.",
  ),
  "",
];

const content = lines.join("\n");
const out = join(process.cwd(), "public", "llms.txt");
writeFileSync(out, content, "utf-8");

const sizeKb = (Buffer.byteLength(content, "utf-8") / 1024).toFixed(1);
console.log(`✓ llms.txt généré → ${out} (${sizeKb} KB)`);
