import { crevaisonGallery } from "@/data/crevaison-gallery";
import { PhotoGallery } from "@/components/PhotoGallery";

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
      <PhotoGallery photos={crevaisonGallery} />
    </section>
  );
}
