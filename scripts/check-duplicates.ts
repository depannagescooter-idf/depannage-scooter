/**
 * Détecte les titres/meta descriptions dupliqués entre pages statiques et données.
 */
import { guides } from "../src/data/guides";
import { services } from "../src/data/services";
import { zones } from "../src/data/zones";

const titles = new Map<string, string[]>();
const descriptions = new Map<string, string[]>();

function track(map: Map<string, string[]>, value: string, source: string) {
  const key = value.trim().toLowerCase();
  const list = map.get(key) ?? [];
  list.push(source);
  map.set(key, list);
}

for (const s of services) {
  track(titles, s.metaTitle, `service:${s.slug}`);
  track(descriptions, s.metaDescription, `service:${s.slug}`);
}

for (const z of zones) {
  const title = `Dépannage scooter ${z.name} – 24h/24`;
  track(titles, title, `zone:${z.slug}`);
}

for (const g of guides) {
  track(titles, g.metaTitle, `guide:${g.slug}`);
  track(descriptions, g.metaDescription, `guide:${g.slug}`);
}

let errors = 0;

for (const [title, sources] of titles) {
  if (sources.length > 1) {
    console.error(`✗ Titre dupliqué (${sources.length}x): "${title}" → ${sources.join(", ")}`);
    errors++;
  }
}

for (const [desc, sources] of descriptions) {
  if (sources.length > 1) {
    console.error(`✗ Description dupliquée (${sources.length}x) → ${sources.join(", ")}`);
    errors++;
  }
}

if (errors === 0) {
  console.log("✓ check:duplicates PASS — titres et descriptions uniques");
}
process.exit(errors === 0 ? 0 : 1);
