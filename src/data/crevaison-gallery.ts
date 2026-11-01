import {
  photoCrevaisonParis1er,
  photoMp3Paris16e,
  photoSilenceParis3e,
} from "@/data/intervention-photos";

/** Photos réelles de réparation de crevaison sur place. */
export interface CrevaisonPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const crevaisonGallery: CrevaisonPhoto[] = [
  {
    src: "/images/crevaison/reparation-crevaison-honda-x-adv-meche-sur-place.jpg",
    alt: "Pneu arrière d'un maxi-scooter Honda X-ADV réparé par mèche sur place, test d'étanchéité à l'eau savonneuse et gonfleur électrique en main",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/crevaison/reparation-crevaison-honda-x-adv-gonflage-pression.jpg",
    alt: "Réparation de crevaison d'un Honda X-ADV sur place : kit de mèches ouvert et regonflage du pneu avec contrôle de la pression",
    width: 1200,
    height: 1600,
  },
  photoCrevaisonParis1er,
  photoMp3Paris16e,
  photoSilenceParis3e,
];
