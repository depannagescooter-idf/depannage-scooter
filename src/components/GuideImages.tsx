import Image from "next/image";

export interface GuideImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function GuideImages({ images }: { images: GuideImage[] }) {
  return (
    <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {images.map((photo) => (
        <li key={photo.src} className="overflow-hidden rounded-sm border border-border">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 640px) 100vw, 33vw"
            loading="lazy"
            className="h-auto w-full object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
