import {
  formatPrice,
  getDspTotal,
  pricing,
} from "@/data/pricing";
import type { TravelZoneKey } from "@/data/types";

export interface PriceTableProps {
  showDsp?: boolean;
  showTowing?: boolean;
  showSurcharges?: boolean;
}

function TableCard({
  title,
  id,
  children,
}: {
  title: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="card overflow-hidden">
      <div className="border-b border-border-soft bg-surface-muted/60 px-5 py-3.5">
        <h3 id={id} className="font-display text-sm font-semibold text-asphalte">
          {title}
        </h3>
      </div>
      <div className="overflow-x-auto">{children}</div>
    </section>
  );
}

export function PriceTable({
  showDsp = true,
  showTowing = true,
  showSurcharges = true,
}: PriceTableProps) {
  return (
    <div className="space-y-4">
      {showTowing && (
        <TableCard title="Remorquage — tarifs jour TTC" id="price-towing">
          <table className="w-full min-w-[280px] text-sm">
            <thead>
              <tr className="border-b border-border-soft text-left text-xs uppercase tracking-wide text-beton">
                <th scope="col" className="px-5 py-3 font-medium">
                  Distance (panne → destination)
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Tarif
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.values(pricing.towing).map((tier, i) => (
                <tr
                  key={tier.label}
                  className={i % 2 === 0 ? "bg-surface" : "bg-surface-muted/40"}
                >
                  <td className="px-5 py-3.5 text-asphalte">{tier.label}</td>
                  <td className="px-5 py-3.5 font-data font-semibold tabular-nums text-signal">
                    {formatPrice(tier.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableCard>
      )}

      {showDsp && (
        <>
          <TableCard title="Dépannage sur place — forfait prestation" id="price-dsp-base">
            <table className="w-full min-w-[280px] text-sm">
              <tbody>
                <tr className="bg-surface">
                  <td className="px-5 py-3.5 text-asphalte">
                    Toutes prestations (crevaison, batterie, booster, essence, selle)
                  </td>
                  <td className="px-5 py-3.5 font-data font-semibold tabular-nums text-signal">
                    {formatPrice(pricing.dsp.baseFee)}
                  </td>
                </tr>
              </tbody>
            </table>
          </TableCard>

          <TableCard title="Dépannage — frais de déplacement TTC" id="price-dsp-travel">
            <table className="w-full min-w-[320px] text-sm">
              <thead>
                <tr className="border-b border-border-soft text-left text-xs uppercase tracking-wide text-beton">
                  <th scope="col" className="px-5 py-3 font-medium">
                    Zone
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium">
                    Déplacement
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium">
                    Total TTC
                  </th>
                </tr>
              </thead>
              <tbody>
                {(Object.entries(pricing.travelFees) as [TravelZoneKey, (typeof pricing.travelFees)[TravelZoneKey]][]).map(
                  ([zone, tier], i) => (
                    <tr
                      key={zone}
                      className={i % 2 === 0 ? "bg-surface" : "bg-surface-muted/40"}
                    >
                      <td className="px-5 py-3.5 text-asphalte">{tier.label}</td>
                      <td className="px-5 py-3.5 font-data tabular-nums text-beton">
                        +{formatPrice(tier.amount)}
                      </td>
                      <td className="px-5 py-3.5 font-data font-semibold tabular-nums text-signal">
                        {formatPrice(getDspTotal(zone))}
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </TableCard>
        </>
      )}

      {showSurcharges && (
        <TableCard title="Majorations" id="price-surcharges">
          <table className="w-full min-w-[280px] text-sm">
            <thead>
              <tr className="border-b border-border-soft text-left text-xs uppercase tracking-wide text-beton">
                <th scope="col" className="px-5 py-3 font-medium">
                  Cas
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Majoration
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.values(pricing.surcharges).map((surcharge, i) => (
                <tr
                  key={surcharge.label}
                  className={i % 2 === 0 ? "bg-surface" : "bg-surface-muted/40"}
                >
                  <td className="px-5 py-3.5 text-asphalte">{surcharge.label}</td>
                  <td className="px-5 py-3.5 font-data font-semibold tabular-nums text-asphalte">
                    {surcharge.percent !== null ? `+${surcharge.percent} %` : "Sur devis"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableCard>
      )}
    </div>
  );
}
