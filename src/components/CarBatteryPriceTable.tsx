import {
  formatPrice,
  getCarBatteryBoostTotal,
  getCarBatteryReplacementTotal,
  pricing,
} from "@/data/pricing";
import type { TravelZoneKey } from "@/data/types";

const ZONE_COLUMNS: { key: TravelZoneKey; label: string }[] = [
  { key: "PARIS", label: "Paris" },
  { key: "PETITE_COURONNE", label: "Petite couronne" },
  { key: "GRANDE_COURONNE", label: "Grande couronne" },
];

export interface CarBatteryPriceTableProps {
  showSurcharges?: boolean;
}

export function CarBatteryPriceTable({ showSurcharges = true }: CarBatteryPriceTableProps) {
  const { carBattery, surcharges, difficultySurcharge } = pricing;

  const serviceRows = [
    {
      label: "Démarrage sur place (booster), déplacement inclus",
      totals: ZONE_COLUMNS.map((z) => getCarBatteryBoostTotal(z.key)),
    },
    {
      label: "Remplacement de batterie, main-d'œuvre, déplacement inclus (hors batterie)",
      totals: ZONE_COLUMNS.map((z) => getCarBatteryReplacementTotal(z.key)),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[320px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-asphalte bg-surface-muted">
                <th scope="col" className="px-4 py-3 font-display font-semibold text-asphalte">
                  Prestation
                </th>
                {ZONE_COLUMNS.map((z) => (
                  <th
                    key={z.key}
                    scope="col"
                    className="px-4 py-3 font-display font-semibold text-asphalte"
                  >
                    {z.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {serviceRows.map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <td className="px-4 py-3 text-beton">{row.label}</td>
                  {row.totals.map((total, i) => (
                    <td
                      key={ZONE_COLUMNS[i]!.key}
                      className="px-4 py-3 font-data tabular-nums text-asphalte"
                    >
                      {formatPrice(total)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-b border-border bg-surface-muted/40">
                <td className="px-4 py-3 text-beton">
                  Batterie voiture (standard, EFB, AGM start-stop)
                </td>
                <td colSpan={3} className="px-4 py-3 font-data tabular-nums text-asphalte">
                  à partir de {formatPrice(carBattery.batteryFrom)} selon modèle
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="border-t border-border-soft px-4 py-3 text-xs text-beton">
          Petite couronne : +{formatPrice(carBattery.travelFees.PETITE_COURONNE - carBattery.travelFees.PARIS)} vs Paris ·
          Grande couronne : +{formatPrice(carBattery.travelFees.GRANDE_COURONNE - carBattery.travelFees.PARIS)} vs Paris
        </p>
      </div>

      {showSurcharges && (
        <>
          <div className="card overflow-hidden">
            <div className="border-b border-border-soft bg-surface-muted/60 px-5 py-3.5">
              <h3 className="font-display text-sm font-semibold text-asphalte">
                Majorations batterie voiture
              </h3>
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
                        +{surcharge.percent} %
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-sm text-beton">
            Supplément pénibilité (+{formatPrice(difficultySurcharge.amount)}) : parking souterrain,
            accès difficile, véhicule accidenté.
          </p>
        </>
      )}
    </div>
  );
}
