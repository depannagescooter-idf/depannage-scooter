import { PriceInclusions } from "@/components/PriceInclusions";
import {
  formatPrice,
  getCarTireOnSiteTotal,
  offeredTravelZones,
  pricing,
} from "@/data/pricing";

const SERVICES = [
  "Réparation par mèche, roue en place",
  "Montage de la roue de secours du client",
] as const;

export function CarTirePriceTable() {
  const { surcharges, difficultySurcharge, dsp, travelFees } = pricing;

  return (
    <div className="space-y-4">
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[320px] border-collapse text-left text-sm">
            <caption className="border-b border-border-soft bg-surface-muted/60 px-4 py-3.5 text-left font-display text-sm font-semibold text-asphalte">
              Forfait main-d&apos;œuvre {formatPrice(dsp.baseFee)} + déplacement
            </caption>
            <thead>
              <tr className="border-b-2 border-asphalte bg-surface-muted">
                <th scope="col" className="px-4 py-3 font-display font-semibold text-asphalte">
                  Prestation
                </th>
                {offeredTravelZones.map((zone) => (
                  <th
                    key={zone}
                    scope="col"
                    className="px-4 py-3 font-display font-semibold text-asphalte"
                  >
                    {travelFees[zone].label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SERVICES.map((label) => (
                <tr key={label} className="border-b border-border">
                  <td className="px-4 py-3 text-beton">{label}</td>
                  {offeredTravelZones.map((zone) => (
                    <td
                      key={zone}
                      className="px-4 py-3 font-data font-semibold tabular-nums text-asphalte"
                    >
                      {formatPrice(getCarTireOnSiteTotal(zone))} TTC
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-b border-border bg-surface-muted/40">
                <td className="px-4 py-3 text-beton">Remplacement du pneu</td>
                <td
                  colSpan={offeredTravelZones.length}
                  className="px-4 py-3 font-data tabular-nums text-asphalte"
                >
                  Sur devis, pneu en sus
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="border-t border-border-soft px-4 py-3 text-sm leading-relaxed text-asphalte">
          Ce total couvre la main-d&apos;œuvre et le déplacement. Le pneu neuf est facturé en plus.
        </p>
      </div>
      <PriceInclusions includeStrapping={false} />

      <div className="card overflow-hidden">
        <div className="border-b border-border-soft bg-surface-muted/60 px-5 py-3.5">
          <h3 className="font-display text-sm font-semibold text-asphalte">Majorations</h3>
        </div>
        <div className="overflow-x-auto">
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
              {Object.values(surcharges).map((surcharge, i) => (
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
        </div>
      </div>
      <PriceInclusions includeStrapping={false} />
      <p className="text-sm text-beton">
        Supplément pénibilité (+{formatPrice(difficultySurcharge.amount)}) :{" "}
        {difficultySurcharge.label}.
      </p>
    </div>
  );
}
