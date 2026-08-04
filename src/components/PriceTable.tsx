import { formatPrice, pricing } from "@/data/pricing";

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
                  Distance
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
        <TableCard title="Dépannage sur place — forfait + km" id="price-dsp">
          <table className="w-full min-w-[320px] text-sm">
            <thead>
              <tr className="border-b border-border-soft text-left text-xs uppercase tracking-wide text-beton">
                <th scope="col" className="px-5 py-3 font-medium">
                  Prestation
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Forfait
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  / km
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(pricing.dsp).map(([, tier], i) => (
                <tr
                  key={tier.label}
                  className={i % 2 === 0 ? "bg-surface" : "bg-surface-muted/40"}
                >
                  <td className="px-5 py-3.5 text-asphalte">{tier.label}</td>
                  <td className="px-5 py-3.5 font-data font-semibold tabular-nums text-asphalte">
                    {formatPrice(tier.baseFee)}
                  </td>
                  <td className="px-5 py-3.5 font-data tabular-nums text-beton">
                    {tier.perKm !== null ? `${tier.perKm.toLocaleString("fr-FR")} €` : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableCard>
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
