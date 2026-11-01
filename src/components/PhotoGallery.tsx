import Image from "next/image";
import type { CSSProperties } from "react";
import { galleryColumnPlan, gallerySizes } from "@/lib/gallery-columns";

export interface GalleryPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Grille dont le nombre de colonnes dépend du nombre de photos.
 * Aucune dernière ligne à une seule image, sur mobile, tablette et ordinateur.
 */
export function PhotoGallery({ photos }: { photos: readonly GalleryPhoto[] }) {
  const count = photos.length;
  const plan = galleryColumnPlan(count);
  const style = {
    "--cols-mobile": String(plan.mobile),
    "--cols-tablet": String(plan.tablet),
    "--cols-desktop": String(plan.desktop),
  } as CSSProperties;

  return (
    <ul
      className="photo-gallery mt-6"
      data-gallery-count={count}
      data-gallery-cols={`${plan.mobile}-${plan.tablet}-${plan.desktop}`}
      style={style}
    >
      {photos.map((photo) => (
        <li key={photo.src} className="overflow-hidden rounded-sm border border-border">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes={gallerySizes(plan)}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
