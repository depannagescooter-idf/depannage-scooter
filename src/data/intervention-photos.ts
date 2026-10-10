/** Photos d'interventions réelles. Chemins relatifs, alts fournis par le client. */
export interface InterventionPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const photoBmwGsParis3e: InterventionPhoto = {
  src: "/images/interventions/demarrage-booster-moto-bmw-gs-paris-3e.jpg",
  alt: "Démarrage au booster d'une moto BMW GS à Paris 3e, booster NOCO branché sur la batterie qui affiche 11,7 volts",
  width: 1200,
  height: 1600,
};

export const photoScooterParis2e: InterventionPhoto = {
  src: "/images/interventions/demarrage-booster-batterie-scooter-paris-2e.jpg",
  alt: "Booster NOCO branché sous la selle d'un scooter à Paris 2e, affichant 14,5 volts",
  width: 1200,
  height: 1600,
};

export const photoCrevaisonParis1er: InterventionPhoto = {
  src: "/images/interventions/reparation-crevaison-scooter-nuit-paris-1er.jpg",
  alt: "Réparation de crevaison d'un scooter de nuit sur les pavés de Paris 1er, test d'étanchéité à l'eau savonneuse et regonflage",
  width: 1200,
  height: 1600,
};

export const photoPneuUseParis19e: InterventionPhoto = {
  src: "/images/interventions/pneu-scooter-use-refus-reparation-paris-19e.jpg",
  alt: "Pneu de scooter usé jusqu'à la carcasse à Paris 19e : réparation refusée, remorquage vers un atelier pour le remplacement du pneu",
  width: 1200,
  height: 1600,
};

/** Photo affichée en tête de la page de zone, avec le texte client, avant la fiche. */
export const zoneInterventionPhotos: Record<string, InterventionPhoto> = {
  "paris-1er": photoCrevaisonParis1er,
  "paris-2e": photoScooterParis2e,
  "paris-3e": photoBmwGsParis3e,
  "paris-19e": photoPneuUseParis19e,
};
