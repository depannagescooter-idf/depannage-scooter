/**
 * Vérifie que le sitemap généré couvre les routes statiques attendues
 * et qu'aucune URL technique n'y figure.
 */
import sitemap from "../src/app/sitemap";
import { depannageServices, remorquageServices } from "../src/data/services";
import { getPublishedZoneSlugs } from "../src/data/zones";
import { guides } from "../src/data/guides";

const FORBIDDEN_PATTERNS = ["/api/", "/_next/", "opengraph-image", "?"];

const REQUIRED_PATHS = [
  "/",
  "/tarifs/",
  "/faq/",
  "/contact/",
  "/avis/",
  "/zones-intervention/",
  "/depannage-sur-place/",
  "/remorquage/",
];

function normalize(url: string): string {
  const path = new URL(url).pathname;
  return path.endsWith("/") ? path : `${path}/`;
}

const entries = sitemap();
const urls = entries.map((e) => normalize(e.url));

let errors = 0;

for (const path of REQUIRED_PATHS) {
  if (!urls.includes(path)) {
    console.error(`✗ Manquant dans le sitemap : ${path}`);
    errors++;
  }
}

const isServiceCityPath = (path: string) =>
  /^\/depannage-sur-place\/[^/]+\/[^/]+\/$/.test(path) ||
  /^\/remorquage\/[^/]+\/[^/]+\/$/.test(path);

for (const url of urls) {
  if (FORBIDDEN_PATTERNS.some((p) => url.includes(p))) {
    console.error(`✗ URL interdite dans le sitemap : ${url}`);
    errors++;
  }
  if (isServiceCityPath(url)) {
    console.error(`✗ Page prestation×ville (noindex) dans le sitemap : ${url}`);
    errors++;
  }
}

const expectedMin =
  REQUIRED_PATHS.length +
  depannageServices.length +
  remorquageServices.length +
  getPublishedZoneSlugs().length +
  guides.length;

if (urls.length < expectedMin) {
  console.error(`✗ Sitemap trop court : ${urls.length} URLs (attendu ≥ ${expectedMin})`);
  errors++;
}

if (errors === 0) {
  console.log(`✓ check:sitemap PASS — ${urls.length} URLs, routes clés présentes`);
  process.exit(0);
}

process.exit(1);
