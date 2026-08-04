/**
 * Vérifie qu'aucune page ou layout n'utilise "use client" (spec PROJECT_SPEC §3).
 */
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const ROOT = join(process.cwd(), "src", "app");
let errors = 0;

function walk(dir: string) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full);
    } else if (entry === "page.tsx" || entry === "layout.tsx") {
      const content = readFileSync(full, "utf-8");
      if (content.includes('"use client"') || content.includes("'use client'")) {
        console.error(`✗ use client interdit : ${full}`);
        errors++;
      }
    }
  }
}

walk(ROOT);
if (errors === 0) {
  console.log("✓ check:nojs PASS — aucun use client sur page/layout");
}
process.exit(errors === 0 ? 0 : 1);
