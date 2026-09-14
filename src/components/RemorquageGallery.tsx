import Image from "next/image";
import { remorquageGallery } from "@/data/remorquage-gallery";

export function RemorquageGallery() {
  return (
    <section aria-labelledby="remorquage-gallery-title">
      <h2 id="remorquage-gallery-title" className="section-title">
        Remorquage sécurisé sur plateau
      </h2>
      <p className="mt-2 text-sm text-beton">
        Sanglage, bloque-roue et rails de fixation — scooters, motos et trois-roues pris en charge
        en Île-de-France.
      </p>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
        {remorquageGallery.map((photo) => (
          <li key={photo.src} className="overflow-hidden rounded-sm border border-border">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 640px) 50vw, 33vw"
              className="h-auto w-full object-cover"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
