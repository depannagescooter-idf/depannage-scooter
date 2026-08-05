import {
  formatPrice,
  getDspTotal,
  getStartingPrice,
  pricing,
} from "@/data/pricing";
import type { TravelZoneKey } from "@/data/types";

export interface ServicePriceTableProps {
  priceKey: string;
}

export function ServicePriceTable({ priceKey }: ServicePriceTableProps) {
  const dspService =
    priceKey in pricing.dsp.services
      ? pricing.dsp.services[priceKey as keyof typeof pricing.dsp.services]
      : null;
  const isTowing = priceKey in pricing.towing;

  if (dspService) {
    return (
      <div className="space-y-4">
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
              </tr>
            </thead>
            <tbody>
              <tr className="bg-surface">
                <td className="px-5 py-3.5 text-asphalte">{dspService.label}</td>
                <td className="px-5 py-3.5 font-data font-semibold tabular-nums text-signal">
                  {formatPrice(pricing.dsp.baseFee)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-soft bg-surface-muted/60 text-left text-xs uppercase tracking-wide text-beton">
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
        </div>
      </div>
    );
  }

  if (isTowing) {
    const starting = getStartingPrice(priceKey);
    return (
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-soft bg-surface-muted/60 text-left text-xs uppercase tracking-wide text-beton">
              <th scope="col" className="px-5 py-3 font-medium">
                Distance (panne → destination)
              </th>
              <th scope="col" className="px-5 py-3 font-medium">
                Tarif jour TTC
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(pricing.towing).map(([key, tier], i) => (
              <tr
                key={key}
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
        {starting !== null && (
          <p className="border-t border-border-soft px-5 py-3 text-xs text-beton">
            À partir de {formatPrice(starting)} pour les trajets les plus courts.
          </p>
        )}
      </div>
    );
  }

  return null;
}
