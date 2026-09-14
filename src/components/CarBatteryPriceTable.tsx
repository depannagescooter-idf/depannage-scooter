import { formatPrice, pricing } from "@/data/pricing";

export function CarBatteryPriceTable() {
  const { carBattery, travelFees, surcharges } = pricing;
  const holidayLabel = `${surcharges.weekendSunday.percent} % (dimanche et jours fériés)`;

  const rows: { label: string; value: string }[] = [
    { label: "Démarrage sur place (booster)", value: formatPrice(carBattery.boost) },
    { label: "Remplacement de batterie, main-d'œuvre", value: formatPrice(carBattery.replacementLabor) },
    {
      label: "Batterie voiture",
      value: carBattery.batteryFrom !== null ? `à partir de ${formatPrice(carBattery.batteryFrom)}` : "Sur devis",
    },
    { label: "Déplacement Paris", value: formatPrice(travelFees.PARIS.amount) },
    {
      label: "Déplacement petite couronne (92, 93, 94)",
      value: formatPrice(travelFees.PETITE_COURONNE.amount),
    },
    {
      label: "Déplacement grande couronne (77, 78, 91, 95)",
      value: formatPrice(travelFees.GRANDE_COURONNE.amount),
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
      <p className="mt-3 text-sm text-beton">
        TODO-TARIF : complétez les montants voiture dans{" "}
        <code className="font-data text-xs">src/data/pricing.ts</code>. Le tarif exact vous est
        confirmé par téléphone avant tout déplacement.
      </p>
    </div>
  );
}
