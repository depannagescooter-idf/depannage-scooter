import Image from "next/image";
import { PAIR_SIZES } from "@/components/InterventionFigure";
import { photoPcxDejanteApres, photoPcxDejanteAvant } from "@/data/intervention-photos";

const photos = [
  {
    photo: photoPcxDejanteAvant,
    caption: "Avant : le pneu était sorti de sa jante.",
  },
  {
    photo: photoPcxDejanteApres,
    caption: "Après : le pneu est remis en place sur la jante.",
  },
] as const;

/** Remise en place d'un pneu déjanté. Les plaques blanchies restent telles quelles. */
export function PneuDejanteSection() {
  return (
    <section className="mt-10" aria-labelledby="pneu-dejante-title">
      <h2 id="pneu-dejante-title" className="section-title">
        Pneu déjanté : remise en place sur la jante
      </h2>
      <p className="mt-2 text-beton">
        Un pneu déjanté, c&apos;est un pneu sorti de la jante : le talon n&apos;est plus dans son
        logement. Cela arrive souvent après un roulage à basse pression, un choc contre un
        trottoir ou un nid-de-poule, ou une perte d&apos;air brutale.
      </p>
      <p className="mt-2 text-beton">
        Sur place, le talon est lubrifié à l&apos;eau savonneuse, puis le pneu est regonflé pour
        remettre un pneu sur sa jante. La pression et l&apos;étanchéité sont contrôlées, ainsi que
        l&apos;état du pneu et de la jante.
      </p>
      <p className="mt-2 text-beton">
        Le remorquage vers un atelier s&apos;impose si le talon est abîmé, si la jante est voilée
        ou fissurée, ou si le pneu est déchiré.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {photos.map(({ photo, caption }) => (
          <figure key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes={PAIR_SIZES}
              loading="lazy"
              className="h-auto w-full rounded-sm border border-border object-cover"
            />
            <figcaption className="mt-2 text-sm text-beton">{caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
