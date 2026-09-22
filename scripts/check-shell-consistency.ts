/**
 * Vérifie que le shell global (header + footer) est identique sur toutes les pages HTML
 * générées par le build SSG. Bloque le CI si plusieurs générations coexistent.
 */
import { createHash } from "crypto";
import { existsSync, readFileSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

const APP_DIR = join(process.cwd(), ".next", "server", "app");

/** Pages témoin — couvrent accueil, FAQ, tarifs, silo moto et zones dynamiques. */
const WITNESS_PAGES = [
  "index.html",
  "faq.html",
  "tarifs.html",
  "depannage-moto.html",
  join("zones-intervention", "nanterre.html"),
  join("zones-intervention", "paris-11e.html"),
] as const;

const REQUIRED_MARKERS = [
  "contact@depannagescooter.com",
  "4 boulevard de la Bastille",
  "75012 Paris",
  "951940964",
  "logo-carre-orange.png",
  "Dépannage moto",
] as const;

const FORBIDDEN_MARKERS = [
  "scooterdepannage@gmail.com",
  "/images/logo.png",
  "75000 Paris",
  "depannage-sur-place/batterie-voiture",
] as const;

function extractShell(html: string): string {
  const headerMatch = html.match(/<header[\s\S]*?<\/header>/i);
  const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/i);
  if (!headerMatch || !footerMatch) {
    return "";
  }
  return `${headerMatch[0]}\n${footerMatch[0]}`;
}

function hashShell(shell: string): string {
  return createHash("sha256").update(shell).digest("hex").slice(0, 16);
}

function collectHtmlFiles(dir: string, acc: string[] = []): string[] {
  if (!existsSync(dir)) {
    return acc;
  }
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      collectHtmlFiles(full, acc);
    } else if (entry.endsWith(".html") && entry !== "_not-found.html") {
      acc.push(full);
    }
  }
  return acc;
}

let errors = 0;

function fail(message: string): void {
  console.error(`✗ ${message}`);
  errors++;
}

if (!existsSync(APP_DIR)) {
  console.error("✗ check:shell — lancez npm run build avant ce contrôle.");
  process.exit(1);
}

const shellHashes = new Map<string, string[]>();

let scannedPages = 0;

for (const file of collectHtmlFiles(APP_DIR)) {
  const html = readFileSync(file, "utf-8");
  const shell = extractShell(html);
  if (!shell) {
    // Pages de redirection (ex. ancienne URL batterie-voiture) : pas de shell statique.
    continue;
  }

  scannedPages++;

  for (const marker of REQUIRED_MARKERS) {
    if (!shell.includes(marker)) {
      fail(`${relative(APP_DIR, file)} — marqueur absent : ${marker}`);
    }
  }

  for (const marker of FORBIDDEN_MARKERS) {
    if (shell.includes(marker)) {
      fail(`${relative(APP_DIR, file)} — marqueur interdit : ${marker}`);
    }
  }

  const hash = hashShell(shell);
  const rel = relative(APP_DIR, file);
  const list = shellHashes.get(hash) ?? [];
  list.push(rel);
  shellHashes.set(hash, list);
}

if (shellHashes.size > 1) {
  fail(
    `${shellHashes.size} variantes de header/footer détectées dans le même build (attendu : 1).`,
  );
  for (const [hash, files] of shellHashes) {
    console.error(`  · ${hash} → ${files.slice(0, 5).join(", ")}${files.length > 5 ? "…" : ""}`);
  }
}

for (const witness of WITNESS_PAGES) {
  const path = join(APP_DIR, witness);
  if (!existsSync(path)) {
    fail(`page témoin absente du build : ${witness}`);
  }
}

if (scannedPages === 0) {
  fail("aucune page avec header/footer trouvée dans .next/server/app");
}

if (errors === 0) {
  console.log(
    `✓ check:shell PASS — shell identique sur ${scannedPages} pages (${shellHashes.size} variante).`,
  );
}

process.exit(errors === 0 ? 0 : 1);
