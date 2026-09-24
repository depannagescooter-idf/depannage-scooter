/**
 * Valide l'intégrité des données src/data/
 * Usage: npm run validate:data
 */
import { guides } from "../src/data/guides";
import { services } from "../src/data/services";
import { zones } from "../src/data/zones";

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

// Zones — similarité intros
for (let i = 0; i < zones.length; i++) {
  for (let j = i + 1; j < zones.length; j++) {
    const zi = zones[i];
    const zj = zones[j];
    if (!zi || !zj) continue;
    const sim = jaccardSimilarity(zi.intro, zj.intro);
    if (sim > 0.915) {
      fail(`Zones ${zi.slug} / ${zj.slug}: similarité intro ${(sim * 100).toFixed(0)}%`);
    }
  }
  const wordCount = zones[i]!.intro.split(/\s+/).length;
  if (wordCount < 150) fail(`${zones[i]!.slug}: intro ${wordCount} mots < 150`);
}

if (errors === 0) ok("Zones: intros uniques et longueur OK");

console.log(errors === 0 ? "\nvalidate:data PASS" : `\nvalidate:data FAIL (${errors} erreurs)`);
process.exit(errors === 0 ? 0 : 1);
