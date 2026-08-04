import { CreditCard, Clock, ShieldCheck, Star } from "lucide-react";
import { company } from "@/data/company";

const items = [
  {
    icon: Clock,
    label: "24h/24 · 7j/7",
    detail: company.openingHours,
  },
  {
    icon: CreditCard,
    label: "Paiement CB sur place",
    detail: "Espèces acceptées",
  },
  {
    icon: ShieldCheck,
    label: "Devis ferme avant départ",
    detail: "Aucune surprise à l'arrivée",
  },
  {
    icon: Star,
    label: "Assurance RC professionnelle",
    detail: "Véhicule protégé au remorquage",
  },
] as const;

export function ReassuranceStrip() {
  return (
    <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Icon, label, detail }) => (
        <li
          key={label}
          className="flex items-start gap-3 rounded-sm border border-border-soft bg-surface/80 px-4 py-3"
        >
          <Icon className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-asphalte">{label}</p>
            <p className="text-xs text-beton">{detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
