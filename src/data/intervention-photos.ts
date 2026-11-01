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

export const photoMp3Paris16e: InterventionPhoto = {
  src: "/images/interventions/reparation-crevaison-piaggio-mp3-paris-16e.jpg",
  alt: "Pneu arrière d'un Piaggio MP3 réparé par mèche sur place à Paris 16e",
  width: 1200,
  height: 1600,
};

export const photoTracerParis12e: InterventionPhoto = {
  src: "/images/interventions/demarrage-booster-yamaha-tracer-700-paris-12e.jpg",
  alt: "Démarrage au booster d'une moto Yamaha Tracer 700 à Paris 12e, pinces branchées sur la batterie sous la selle",
  width: 1200,
  height: 1600,
};

export const photoSilenceParis3e: InterventionPhoto = {
  src: "/images/interventions/reparation-crevaison-scooter-electrique-silence-paris-3e.jpg",
  alt: "Crevaison d'un scooter électrique Silence réparée par mèche sur place à Paris 3e",
  width: 1200,
  height: 1600,
};

export const photoApriliaSrMotard: InterventionPhoto = {
  src: "/images/remorquage/remorquage-scooter-aprilia-sr-motard-ile-de-france.jpg",
  alt: "Scooter Aprilia SR Motard sanglé dans le camion plateau de DépannageScooter",
  width: 600,
  height: 600,
};

/** Une intervention réelle : photo puis phrase, avant la fiche de la zone. */
export interface ZoneIntervention {
  photo: InterventionPhoto;
  text: string;
}

/**
 * Plusieurs interventions peuvent se suivre sur la même page.
 * Le texte de chaque entrée est la source du clientContent comparé par validate:data.
 */
export const zoneInterventions: Record<string, readonly ZoneIntervention[]> = {
  "paris-1er": [
    {
      photo: photoCrevaisonParis1er,
      text: "Crevaison réparée de nuit sur un scooter, sur les pavés du 1er arrondissement : pose d'une mèche, test d'étanchéité à l'eau savonneuse et regonflage.",
    },
  ],
  "paris-2e": [
    {
      photo: photoScooterParis2e,
      text: "Démarrage au booster d'un scooter dans le 2e arrondissement ; le booster affiche 14,5 volts.",
    },
  ],
  "paris-3e": [
    {
      photo: photoBmwGsParis3e,
      text: "Démarrage au booster d'une moto BMW GS dans le 3e arrondissement, batterie mesurée à 11,7 volts.",
    },
    {
      photo: photoSilenceParis3e,
      text: "Crevaison réparée sur place sur un scooter électrique Silence dans le 3e arrondissement, par pose d'une mèche.",
    },
  ],
  "paris-12e": [
    {
      photo: photoTracerParis12e,
      text: "Démarrage au booster d'une moto Yamaha Tracer 700 dans le 12e arrondissement.",
    },
  ],
  "paris-16e": [
    {
      photo: photoMp3Paris16e,
      text: "Pneu arrière d'un Piaggio MP3 réparé sur place dans le 16e arrondissement, par pose d'une mèche.",
    },
  ],
  "paris-19e": [
    {
      photo: photoPneuUseParis19e,
      text: "Pneu de scooter usé jusqu'à la carcasse dans le 19e arrondissement : réparation refusée, scooter remorqué vers un atelier pour le remplacement du pneu.",
    },
  ],
};

/** Texte client d'une zone, phrases dans l'ordre des interventions. */
export function clientTextForZone(slug: string): string | undefined {
  const items = zoneInterventions[slug];
  if (!items?.length) return undefined;
  return items.map((item) => item.text).join("\n\n");
}
