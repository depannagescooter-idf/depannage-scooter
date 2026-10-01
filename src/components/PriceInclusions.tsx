import Link from "next/link";

export interface PriceInclusionsProps {
  /** Le sanglage concerne le transport des deux-roues, pas une intervention voiture. */
  includeStrapping?: boolean;
}

export function PriceInclusions({ includeStrapping = true }: PriceInclusionsProps) {
  const parts = ["déplacement inclus"];
  if (includeStrapping) parts.push("sanglage et calage adaptés aux deux-roues");
  parts.push("assurance responsabilité civile professionnelle");

  return (
    <div
      data-price-inclusions
      className="space-y-2 rounded-sm border border-border-soft bg-surface-muted/40 px-5 py-4 text-sm leading-relaxed text-asphalte"
    >
      <p>Inclus dans ce tarif : {parts.join(", ")}.</p>
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
