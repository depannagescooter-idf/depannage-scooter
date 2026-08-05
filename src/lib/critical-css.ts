/** CSS critique above-the-fold — peinture immédiate avant le fichier Tailwind (36 Ko). */
export const criticalCss = `
:root{--color-asphalte:#1c1917;--color-marquage:#fafaf9;--color-signal:#c2410c;--color-signal-dark:#9a3412;--color-gyro:#0369a1;--color-beton:#57534e;--color-surface:#fff;--color-surface-muted:#f5f5f4;--color-border-soft:#f0f0ee}
*,*::before,*::after{box-sizing:border-box}
body{margin:0;min-height:100dvh;background:#fafaf9;color:#1c1917;font-family:system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased}
.has-intervention-bar{padding-bottom:6.5rem}
.glass-header{background:rgb(255 255 255/.82);backdrop-filter:blur(12px) saturate(180%);-webkit-backdrop-filter:blur(12px) saturate(180%)}
.font-display{font-family:var(--font-jakarta,system-ui,sans-serif)}
.font-data{font-variant-numeric:tabular-nums;font-feature-settings:"tnum"}
.btn-primary{background:linear-gradient(135deg,#c2410c 0%,#9a3412 100%);box-shadow:0 2px 12px rgb(249 115 22/.35);color:#fff;text-decoration:none}
.text-asphalte{color:#1c1917}.text-signal{color:#c2410c}.text-beton{color:#57534e}.text-white{color:#fff}
.bg-asphalte{background-color:#1c1917}.bg-surface-muted{background-color:#f5f5f4}
.border-border-soft{border-color:#f0f0ee}
.card{background:#fff;border:1px solid #f0f0ee;border-radius:1rem;box-shadow:0 1px 3px rgb(28 25 23/.06),0 8px 24px rgb(28 25 23/.06)}
`.replace(/\s+/g, " ").trim();
