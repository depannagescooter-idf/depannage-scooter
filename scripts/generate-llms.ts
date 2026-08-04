/**
 * Génère public/llms.txt depuis src/data/
 * Usage: npm run generate:llms
 */
import { writeFileSync } from "fs";
import { join } from "path";
import { company } from "../src/data/company";
import { depannageServices, remorquageServices } from "../src/data/services";
import { formatPrice, pricing } from "../src/data/pricing";
import { publishedZones } from "../src/data/zones";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? company.url).replace(/\/$/, "");

const lines: string[] = [
  `# ${company.name}`,
  `> ${company.description}`,
  "",
  "## Services",
  "- Dépannage sur place : " + depannageServices.map((s) => s.name).join(", "),
  "- Remorquage : " + remorquageServices.map((s) => s.name).join(", "),
  "",
  "## Tarifs",
  "",
  "| Prestation | Tarif |",
  "|---|---|",
];

for (const tier of Object.values(pricing.towing)) {
  lines.push(`| Remorquage ${tier.label} | ${formatPrice(tier.amount)} |`);
}
for (const tier of Object.values(pricing.dsp)) {
  lines.push(`| ${tier.label} | ${formatPrice(tier.baseFee)} + ${tier.perKm} €/km |`);
}

lines.push(
  "",
  "## Zones desservies",
  publishedZones.map((z) => `- ${z.name}`).join("\n"),
  "",
  "## Contact",
  `Téléphone : ${company.phoneDisplay} — ${company.openingHours}`,
  `Email : ${company.email}`,
  `Site : ${siteUrl}`,
  "",
  "## Pages clés",
  `- ${siteUrl}/tarifs/ : grille complète`,
  `- ${siteUrl}/depannage-sur-place/ : dépannage sur place`,
  `- ${siteUrl}/remorquage/ : remorquage`,
  `- ${siteUrl}/zones-intervention/ : ${publishedZones.length} zones IDF`,
  `- ${siteUrl}/faq/ : questions fréquentes`,
  `- ${siteUrl}/guides/ : guides pratiques`,
  `- ${siteUrl}/contact/ : demande de rappel`,
  "",
);

const out = join(process.cwd(), "public", "llms.txt");
writeFileSync(out, lines.join("\n"), "utf-8");
console.log(`✓ llms.txt généré → ${out}`);
