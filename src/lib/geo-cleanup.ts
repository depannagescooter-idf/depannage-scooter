/** Suppression des mentions de transport (phase 1.4). */
export const TRANSPORT_PATTERNS: RegExp[] = [
  /\b(?:métro|metro)\s[^.;]{0,120}/giu,
  /\bRER\s*[A-E]\b[^.;]{0,120}/giu,
  /\bRER\b[^.;]{0,120}/giu,
  /\btramway\b[^.;]{0,120}/giu,
  /\btram\b[^.;]{0,120}/giu,
  /\bTransilien\b[^.;]{0,120}/giu,
  /\bligne\s+T\d+\b[^.;]{0,120}/giu,
  /\barrêt\s[^.;]{0,120}/giu,
  /\brails\s+(?:de\s+)?(?:tramway|tram)\b[^.;]{0,120}/giu,
  /\bbouches\s+de\s+métro\b[^.;]{0,120}/giu,
];

export function stripTransport(text: string): string {
  let out = text;
  for (const re of TRANSPORT_PATTERNS) {
    out = out.replace(re, "");
  }
  out = out.replace(/\b(?:métro|metro)(?!\s*pole)\b/giu, "");
  out = out.replace(/\b(?:RER|tramway|Transilien)\b/giu, "");
  return out;
}

export function cleanupProse(text: string): string {
  let out = stripTransport(text);
  out = out.replace(/\s{2,}/g, " ");
  out = out.replace(/\s+([,.;])/g, "$1");
  out = out.replace(/([.;])\s*([.;])+/g, "$1");
  out = out.replace(/\s+\./g, ".");
  out = out.replace(/\(\s*\)/g, "");
  out = out.replace(/,\s*,/g, ",");
  out = out.replace(/\bet\s+\./gi, ".");
  return out.trim();
}
