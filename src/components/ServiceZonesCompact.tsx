import Link from "next/link";
import { departments } from "@/data/departments";
import { getZonesByDepartement } from "@/data/zones";

/** Villes à plus fort volume par département (hors Paris arrondissements). */
const TOP_CITIES_BY_DEPT: Record<string, string[]> = {
  "92": ["boulogne-billancourt", "nanterre", "neuilly-sur-seine", "issy-les-moulineaux", "courbevoie", "levallois-perret"],
  "93": ["montreuil", "saint-denis", "aubervilliers", "pantin", "bobigny", "drancy"],
  "94": ["creteil", "vincennes", "vitry-sur-seine", "ivry-sur-seine", "alfortville", "charenton-le-port"],
  "77": ["meaux", "melun", "chelles", "pontault-combault", "fontainebleau", "savigny-le-temple"],
  "78": ["versailles", "saint-germain-en-laye", "poissy", "sartrouville", "mantes-la-jolie", "conflans-sainte-honorine"],
  "91": ["evry-courcouronnes", "massy", "palaiseau", "corbeil-essonnes", "savigny-sur-orge", "viry-chatillon"],
  "95": ["argenteuil", "cergy", "pontoise", "sarcelles", "garges-les-gonesse", "franconville"],
};

export function ServiceZonesCompact() {
  const parisZones = getZonesByDepartement("75");

  return (
    <div className="mt-4 space-y-6">
      <section>
        <h3 className="font-display text-lg font-bold text-asphalte">Paris</h3>
        <details className="mt-3 card overflow-hidden">
          <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-asphalte hover:bg-surface-muted [&::-webkit-details-marker]:hidden">
            20 arrondissements — cliquer pour afficher
          </summary>
          <ul className="grid gap-2 border-t border-border-soft p-4 sm:grid-cols-2 md:grid-cols-3">
            {parisZones.map((z) => (
              <li key={z.slug}>
                <Link
                  href={`/zones-intervention/${z.slug}/`}
                  className="block text-sm font-medium text-gyro hover:underline"
                >
                  {z.name}
                </Link>
              </li>
            ))}
          </ul>
        </details>
        <Link
          href="/zones-intervention/paris/"
          className="mt-2 inline-block text-sm font-medium text-gyro hover:underline"
        >
          Page dépannage scooter Paris →
        </Link>
      </section>

      {departments
        .filter((d) => d.code !== "75")
        .map((dept) => {
          const topSlugs = TOP_CITIES_BY_DEPT[dept.code] ?? [];
          const allZones = getZonesByDepartement(dept.code);
          const topZones = topSlugs
            .map((slug) => allZones.find((z) => z.slug === slug))
            .filter((z): z is NonNullable<typeof z> => Boolean(z));

          return (
            <section key={dept.slug}>
              <h3 className="font-display text-lg font-bold text-asphalte">
                {dept.name} ({dept.code})
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                {topZones.map((z) => (
                  <li key={z.slug}>
                    <Link
                      href={`/zones-intervention/${z.slug}/`}
                      className="card block px-4 py-3 text-sm font-medium text-asphalte hover:shadow-card"
                    >
                      {z.name}
                      <span className="mt-0.5 block font-data text-xs tabular-nums text-beton">
                        {z.etaMinutes[0]}–{z.etaMinutes[1]} min
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={`/zones-intervention/${dept.slug}/`}
                className="mt-2 inline-block text-sm font-medium text-gyro hover:underline"
              >
                Toutes les communes {dept.name} →
              </Link>
            </section>
          );
        })}
    </div>
  );
}
