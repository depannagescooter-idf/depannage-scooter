import { remorquageGallery } from "@/data/remorquage-gallery";
import { PhotoGallery } from "@/components/PhotoGallery";

export function RemorquageGallery() {
  return (
    <section aria-labelledby="remorquage-gallery-title">
      <h2 id="remorquage-gallery-title" className="section-title">
        Remorquage sécurisé sur plateau
      </h2>
      <p className="mt-2 text-sm text-beton">
        Sangles, bloque-roue et rails de fixation — scooters, motos et trois-roues pris en charge
        en Île-de-France.
      </p>
      <PhotoGallery photos={remorquageGallery} />
    </section>
  );
}
