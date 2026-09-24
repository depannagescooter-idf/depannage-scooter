import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const CACHE_PATH = join(process.cwd(), "reports", "geo-verify-cache.json");

export type CacheEntry = { valid: boolean; score?: number };

export function loadVerifyCache(): Record<string, CacheEntry> {
  if (!existsSync(CACHE_PATH)) return {};
  return JSON.parse(readFileSync(CACHE_PATH, "utf8")) as Record<string, CacheEntry>;
}

export function saveVerifyCache(cache: Record<string, CacheEntry>): void {
  mkdirSync(join(process.cwd(), "reports"), { recursive: true });
  writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

export function cacheKey(insee: string, type: string, element: string): string {
  return `${insee}|${type}|${element.toLowerCase()}`;
}

export async function fetchWithRetry(
  url: string,
  retries = 4,
): Promise<Response> {
  let lastErr: unknown;
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return res;
      if (res.status === 400 || res.status === 404) return res;
      lastErr = new Error(`HTTP ${res.status}`);
    } catch (e) {
      lastErr = e;
    }
    await new Promise((r) => setTimeout(r, 500 * (i + 1)));
  }
  throw lastErr;
}
