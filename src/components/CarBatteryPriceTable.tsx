import { formatPrice, getCarBatteryBoostTotal, getCarBatteryReplacementTotal, pricing } from "@/data/pricing";

export function CarBatteryPriceTable() {
  const { carBattery, surcharges } = pricing;
  const holidayLabel = `${surcharges.weekendSunday.percent} % (dimanche et jours fériés)`;
  const boostParis = getCarBatteryBoostTotal("PARIS");
  const replacementParis = getCarBatteryReplacementTotal("PARIS");

  const rows: { label: string; value: string }[] = [
    {
      label: "Démarrage sur place (booster)",
      value: `${formatPrice(carBattery.boost)} (forfait, hors déplacement)`,
    },
    {
      label: "Remplacement de batterie, main-d'œuvre",
      value: `${formatPrice(carBattery.replacementLabor)} (forfait, hors déplacement)`,
    },
    {
      label: "Batterie voiture",
      value: `à partir de ${formatPrice(carBattery.batteryFrom)} selon modèle (standard, EFB, AGM)`,
    },
    {
      label: "Déplacement Paris",
      value: formatPrice(carBattery.travelFees.PARIS),
    },
    {
      label: "Déplacement petite couronne (92, 93, 94)",
      value: formatPrice(carBattery.travelFees.PETITE_COURONNE),
    },
    {
      label: "Déplacement grande couronne (77, 78, 91, 95)",
      value: formatPrice(carBattery.travelFees.GRANDE_COURONNE),
    },
    {
      label: "Total Paris — démarrage booster",
      value: formatPrice(boostParis),
    },
    {
      label: "Total Paris — remplacement (main-d'œuvre, hors batterie)",
      value: formatPrice(replacementParis),
    },
    { label: "Majoration nuit, dimanche et jours fériés", value: holidayLabel },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[320px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b-2 border-asphalte bg-surface-muted">
            <th scope="col" className="px-4 py-3 font-display font-semibold text-asphalte">
              Prestation
            </th>
            <th scope="col" className="px-4 py-3 font-display font-semibold text-asphalte">
              Tarif TTC
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border">
              <td className="px-4 py-3 text-beton">{row.label}</td>
              <td className="px-4 py-3 font-data tabular-nums text-asphalte">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
