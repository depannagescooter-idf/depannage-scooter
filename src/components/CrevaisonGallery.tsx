import Image from "next/image";
import { crevaisonGallery } from "@/data/crevaison-gallery";

export function CrevaisonGallery() {
  return (
    <section aria-labelledby="crevaison-gallery-title">
      <h2 id="crevaison-gallery-title" className="section-title">
        Réparation de crevaison sur place
      </h2>
      <p className="mt-2 text-sm text-beton">
        Mèche, test d&apos;étanchéité et regonflage — intervention directement sur le lieu de
        panne, sans remorquage si le pneu est réparable.
      </p>
      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:gap-4">
        {crevaisonGallery.map((photo) => (
          <li key={photo.src} className="overflow-hidden rounded-sm border border-border">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 640px) 100vw, 33vw"
              className="h-auto w-full object-cover"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
