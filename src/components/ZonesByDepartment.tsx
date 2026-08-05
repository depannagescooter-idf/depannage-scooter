import Link from "next/link";
import { getZonesByDepartement } from "@/data/zones";

const deptLabels: Record<string, string> = {
  "75": "Paris",
  "77": "Seine-et-Marne",
  "78": "Yvelines",
  "91": "Essonne",
  "92": "Hauts-de-Seine",
  "93": "Seine-Saint-Denis",
  "94": "Val-de-Marne",
  "95": "Val-d'Oise",
};

const departements = ["75", "92", "93", "94", "77", "78", "91", "95"] as const;

export function ZonesByDepartment() {
  return (
    <>
      {departements.map((dep) => {
        const zones = getZonesByDepartement(dep);
        if (zones.length === 0) return null;
        return (
          <section key={dep} className="mt-8">
            <h3 className="font-display text-lg font-bold text-asphalte">{deptLabels[dep] ?? dep}</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {zones.map((z) => (
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
          </section>
        );
      })}
    </>
  );
}
