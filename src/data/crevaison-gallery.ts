/** Photos réelles de réparation de crevaison moto sur place. */
export interface CrevaisonPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const crevaisonGallery: CrevaisonPhoto[] = [
  {
    src: "/images/crevaison/reparation-crevaison-moto-meche-sur-place.jpg",
    alt: "Pneu arrière de moto réparé par mèche sur place, test d'étanchéité à l'eau savonneuse et gonfleur électrique en main",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/crevaison/reparation-crevaison-moto-gonflage-controle-pression.jpg",
    alt: "Réparation de crevaison moto sur place : kit de mèches ouvert et regonflage du pneu avec contrôle de la pression",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/crevaison/pose-meche-reparation-pneu-moto.jpg",
    alt: "Pose d'une mèche dans un pneu arrière de moto crevé, kit de réparation et compresseur posés à côté de la roue",
    width: 1200,
    height: 1600,
  },
];
