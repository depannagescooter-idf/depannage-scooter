/**
 * Valide l'intégrité des données src/data/
 * Usage: npm run validate:data
 */
import { guides } from "../src/data/guides";
import { services } from "../src/data/services";
import type { Zone } from "../src/data/types";
import { zones } from "../src/data/zones";
import { missingRequiredFacts, zoneFactSheetText } from "../src/lib/zone-fact-sheet";

/** Seules ces zones publient une fiche. La grande couronne n'en a pas : elle sort du site ensuite. */
const FACT_SHEET_DEPTS = new Set(["75", "92", "93", "94"]);

function requiresFactSheet(zone: Zone): boolean {
  return FACT_SHEET_DEPTS.has(zone.departement);
}

function jaccardSimilarity(a: string, b: string): number {
  const wordsA = new Set(a.toLowerCase().split(/\s+/));
  const wordsB = new Set(b.toLowerCase().split(/\s+/));
  const intersection = [...wordsA].filter((w) => wordsB.has(w)).length;
  const union = new Set([...wordsA, ...wordsB]).size;
  return union === 0 ? 0 : intersection / union;
}

let errors = 0;

function fail(msg: string) {
  console.error(`✗ ${msg}`);
  errors++;
}

function ok(msg: string) {
  console.log(`✓ ${msg}`);
}

// Slugs uniques
const allSlugs = [
  ...services.map((s) => s.slug),
  ...zones.map((z) => z.slug),
  ...guides.map((g) => g.slug),
];
const dupes = allSlugs.filter((s, i) => allSlugs.indexOf(s) !== i);
if (dupes.length) fail(`Slugs dupliqués: ${dupes.join(", ")}`);
else ok("Slugs uniques");

// Services
for (const s of services) {
  if (s.metaTitle.length > 60) fail(`${s.slug}: metaTitle ${s.metaTitle.length} > 60`);
  if (s.metaTitle.includes("DépannageScooter")) {
    fail(`${s.slug}: metaTitle ne doit pas inclure la marque (template layout)`);
  }
  if (s.metaDescription.length < 140 || s.metaDescription.length > 158) {
    fail(`${s.slug}: metaDescription ${s.metaDescription.length} hors 140-158`);
  }
  const words = s.shortAnswer.split(/\s+/).length;
  if (words < 40 || words > 65) fail(`${s.slug}: shortAnswer ${words} mots`);
  if (s.faqs.length < 5) fail(`${s.slug}: moins de 5 FAQ`);
}

if (errors === 0) ok("Services: metadata et FAQ OK");

// Zones — similarité du seul champ libre du client (clientContent).
// Les fiches de données (distance, délai, tarif, population, limitrophes, voies, prestations) ont la même
// structure par construction : les comparer mesurerait le gabarit, pas le contenu propre à la zone.
// Une zone dont le champ libre est vide n'est pas comparée.
for (let i = 0; i < zones.length; i++) {
  for (let j = i + 1; j < zones.length; j++) {
    const zi = zones[i];
    const zj = zones[j];
    if (!zi?.clientContent || !zj?.clientContent) continue;
    const sim = jaccardSimilarity(zi.clientContent, zj.clientContent);
    // Seuil fixe à 0,8 : ne jamais le relever pour faire passer un build.
    if (sim > 0.8) {
      fail(`Zones ${zi.slug} / ${zj.slug}: similarité du texte client ${(sim * 100).toFixed(0)}%`);
    }
  }
  // Minimum abaissé de 150 à 50 mots, texte client et fiche de données confondus : une fiche factuelle
  // honnête fait 60 à 90 mots, et les 150 mots n'étaient atteints qu'avec du texte de remplissage.
  const zone = zones[i]!;
  // Le contrôle porte sur chaque zone qui doit publier une fiche. Il n'est pas élargi aux 60 zones
  // de grande couronne, qui n'ont pas de fiche, et son seuil n'est pas abaissé.
  if (!requiresFactSheet(zone)) continue;
  const wordCount = `${zone.clientContent ?? ""} ${zoneFactSheetText(zone)}`.split(/\s+/).filter(Boolean).length;
  if (wordCount < 50) fail(`${zone.slug}: fiche ${wordCount} mots < 50`);
  // Une fiche contient au minimum la distance, le délai annoncé et le tarif ; sinon la validation échoue.
  const missing = missingRequiredFacts(zone);
  if (missing.length) fail(`${zone.slug}: fiche sans ${missing.join(", ")}`);
}

if (errors === 0) ok("Zones: textes clients distincts, fiches d'au moins 50 mots avec distance, délai et tarif");

console.log(errors === 0 ? "\nvalidate:data PASS" : `\nvalidate:data FAIL (${errors} erreurs)`);
process.exit(errors === 0 ? 0 : 1);
