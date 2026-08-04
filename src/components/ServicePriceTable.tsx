import { formatPrice, pricing } from "@/data/pricing";

export interface ServicePriceTableProps {
  priceKey: string;
}

export function ServicePriceTable({ priceKey }: ServicePriceTableProps) {
  const dsp = priceKey in pricing.dsp ? pricing.dsp[priceKey as keyof typeof pricing.dsp] : null;
  const towing =
    priceKey in pricing.towing ? pricing.towing[priceKey as keyof typeof pricing.towing] : null;

  if (dsp) {
    return (
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-soft bg-surface-muted/60 text-left text-xs uppercase tracking-wide text-beton">
              <th scope="col" className="px-5 py-3 font-medium">
                Prestation
              </th>
              <th scope="col" className="px-5 py-3 font-medium">
                Forfait TTC
              </th>
              <th scope="col" className="px-5 py-3 font-medium">
                Indemnité km
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-surface">
              <td className="px-5 py-3.5 text-asphalte">{dsp.label}</td>
              <td className="px-5 py-3.5 font-data font-semibold tabular-nums text-signal">
                {formatPrice(dsp.baseFee)}
              </td>
              <td className="px-5 py-3.5 font-data tabular-nums text-beton">
                {dsp.perKm} €/km
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (towing) {
    return (
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-soft bg-surface-muted/60 text-left text-xs uppercase tracking-wide text-beton">
              <th scope="col" className="px-5 py-3 font-medium">
                Palier
              </th>
              <th scope="col" className="px-5 py-3 font-medium">
                Tarif jour TTC
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-surface">
              <td className="px-5 py-3.5 text-asphalte">{towing.label}</td>
              <td className="px-5 py-3.5 font-data font-semibold tabular-nums text-signal">
                {formatPrice(towing.amount)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}
