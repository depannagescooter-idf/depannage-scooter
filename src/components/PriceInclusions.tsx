import Link from "next/link";

/**
 * Mention propre au tableau qui précède.
 * travel et majorations n'ont pas de mention : rien n'y est vrai de façon utile.
 */
export type PriceTableKind = "towing" | "dsp" | "total" | "total-tire";

const box =
  "space-y-2 rounded-sm border border-border-soft bg-surface-muted/40 px-5 py-4 text-sm leading-relaxed text-asphalte";

export function TablePriceNote({ kind }: { kind: PriceTableKind }) {
  if (kind === "towing") {
    return (
      <div data-price-note="towing" className={box}>
        <p>
          Tarif calculé sur la distance entre le lieu de la panne et la destination. Le trajet du
          dépanneur jusqu&apos;à votre véhicule n&apos;est pas facturé.
        </p>
        <p>Sanglage et calage adaptés aux deux-roues, assurance responsabilité civile professionnelle.</p>
      </div>
    );
  }

  if (kind === "dsp") {
    return (
      <div data-price-note="dsp" className={box}>
        <p>Le forfait couvre la main-d&apos;œuvre. Le déplacement s&apos;ajoute selon la zone.</p>
      </div>
    );
  }

  return (
    <div data-price-note={kind} className={box}>
      <p>
        Déplacement inclus dans le total.
        {kind === "total-tire" ? " Le pneu neuf est facturé en plus." : ""}
      </p>
    </div>
  );
}

/** Mentions communes à la page, une seule fois, après le dernier tableau. */
export function PriceConditions() {
  return (
    <div data-price-conditions className={box}>
      <p>Devis ferme confirmé par téléphone avant tout déplacement.</p>
      <p>Aucune intervention sans accord du client.</p>
      <p>Paiement par carte ou espèces sur place.</p>
      <p className="border-t border-border-soft pt-3">
        <span className="font-display font-semibold">Votre assurance peut prendre en charge</span> cette
        intervention. Le détail est dans la{" "}
        <Link href="/faq/#assistance-0-km" className="font-medium text-gyro hover:underline">
          question sur l&apos;assistance 0 km
        </Link>
        .
      </p>
    </div>
  );
}
