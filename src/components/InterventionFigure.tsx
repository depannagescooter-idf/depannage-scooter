import Image from "next/image";
import type { InterventionPhoto } from "@/data/intervention-photos";

/**
 * Photo d'intervention. Le jeton vw est séparé par un espace : un vw seulement
 * dans calc() n'est pas vu par Next.js, qui retombe alors sur toutes les largeurs.
 * Au-delà de 720px la colonne seule est plafonnée à 42rem.
 */
const LEAD_SIZES = "(max-width: 640px) 100vw, (max-width: 720px) 100vw, 42rem";

/** Deux photos côte à côte à partir de sm, empilées en dessous. */
export const PAIR_SIZES = "(max-width: 639px) 100vw, 50vw";

export function InterventionFigure({
  photo,
  className = "",
  sizes = LEAD_SIZES,
  constrain = true,
}: {
  photo: InterventionPhoto;
  className?: string;
  sizes?: string;
  constrain?: boolean;
}) {
  return (
    <figure className={constrain ? `max-w-2xl ${className}` : className}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        loading="lazy"
        className="h-auto w-full rounded-sm border border-border object-cover"
      />
    </figure>
  );
}
