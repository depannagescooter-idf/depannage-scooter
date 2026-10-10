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
      {/* 4 photos : 1 colonne, puis 2, puis 4. Jamais une image seule sur la dernière ligne. */}
      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {crevaisonGallery.map((photo) => (
          <li key={photo.src} className="overflow-hidden rounded-sm border border-border">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc((100vw - 3.75rem) / 2), (max-width: 1152px) calc((100vw - 6rem) / 4), 16.5rem"
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
