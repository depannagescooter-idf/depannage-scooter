import Image from "next/image";
import type { InterventionPhoto } from "@/data/intervention-photos";

/**
 * Photo seule, colonne de 42rem (max-w-2xl) dans une page en max-w-6xl.
 * sizes en vw : une valeur fixe en pixels seuls fait choisir w=3840 à Next.js.
 * Mobile : 100vw moins le padding de la page (1rem de chaque côté).
 * À partir de sm : padding 1,5rem. Au-delà de 720px la colonne est plafonnée à 42rem.
 */
const LEAD_SIZES = "(max-width: 640px) calc(100vw - 2rem), (max-width: 720px) calc(100vw - 3rem), 42rem";

export function InterventionFigure({
  photo,
  className = "",
}: {
  photo: InterventionPhoto;
  className?: string;
}) {
  return (
    <figure className={`max-w-2xl ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={LEAD_SIZES}
        loading="lazy"
        className="h-auto w-full rounded-sm border border-border object-cover"
      />
    </figure>
  );
}
