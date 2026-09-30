import Link from "next/link";
import type { Zone } from "@/data/types";
import { buildZoneFactCaption, buildZoneFactRows, buildZoneFactSources } from "@/lib/zone-fact-sheet";

export function ZoneFactSheet({ zone }: { zone: Zone }) {
  const rows = buildZoneFactRows(zone);

  return (
    <section className="card mt-8 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[280px] text-sm">
          <caption className="border-b border-border-soft bg-surface-muted/60 px-5 py-3.5 text-left font-display text-sm font-semibold text-asphalte">
            {buildZoneFactCaption(zone)}
          </caption>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.label} className={i % 2 === 0 ? "bg-surface" : "bg-surface-muted/40"}>
                <th scope="row" className="w-1/3 px-5 py-3 text-left align-top font-medium text-asphalte">
                  {row.label}
                </th>
                <td className={`px-5 py-3 align-top text-beton ${row.numeric ? "font-data tabular-nums" : ""}`}>
                  {row.links
                    ? row.links.map((link, j) => (
                        <span key={link.label}>
                          {j > 0 && ", "}
                          {link.href ? (
                            <Link href={link.href} className="font-medium text-gyro hover:underline">
                              {link.label}
                            </Link>
                          ) : (
                            link.label
                          )}
                        </span>
                      ))
                    : row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-border-soft px-5 py-3 text-xs text-beton">{buildZoneFactSources(zone)}</p>
    </section>
  );
}
