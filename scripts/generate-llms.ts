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

const lines: string[] = [
  `# ${company.name}`,
  `> ${company.description}`,
  "",
  "## Services",
  "- Dépannage sur place : " + depannageServices.map((s) => s.slug).join(", "),
  "- Remorquage : " + remorquageServices.map((s) => s.slug).join(", "),
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
  "",
  "## Pages clés",
  "- /tarifs/ : grille complète",
  "- /depannage-sur-place/ : dépannage sur place",
  "- /remorquage/ : remorquage",
  "- /zones-intervention/ : zones",
  "- /faq/ : questions fréquentes",
  "",
);

const out = join(process.cwd(), "public", "llms.txt");
writeFileSync(out, lines.join("\n"), "utf-8");
console.log(`✓ llms.txt généré → ${out}`);
