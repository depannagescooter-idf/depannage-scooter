/** Photos réelles de réparation de crevaison Honda X-ADV sur place. */
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
  {
    src: "/images/crevaison/pose-meche-pneu-honda-x-adv.jpg",
    alt: "Pose d'une mèche dans le pneu arrière crevé d'un Honda X-ADV, kit de réparation et compresseur posés à côté de la roue",
    width: 1200,
    height: 1600,
  },
];
