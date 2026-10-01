/** Généré par scripts/generate-zone-facts.ts — ne pas éditer à la main. */

export interface ZoneFacts {
  /** Nom officiel (geo.api.gouv.fr). */
  officialName: string;
  /** Population INSEE (geo.api.gouv.fr). */
  population: number | null;
  /** Surface en hectares (geo.api.gouv.fr). */
  surfaceHa: number | null;
  /** Communes ou arrondissements limitrophes, calculés sur les contours officiels (geo.api.gouv.fr). */
  limitrophes: { code: string; nom: string }[] | null;
  /** Itinéraire routier OSRM depuis la base jusqu'à la mairie, sans circulation. */
  route: { distanceKm: number; durationMin: number } | null;
  /** Point de la mairie (geo.api.gouv.fr). Identique pour les zones qui partagent un bâtiment. */
  mairie: { lng: number; lat: number } | null;
  /** Date du calcul, AAAA-MM-JJ. */
  computedOn: string;
}

export const zoneFactsBase: { address: string; lat: number; lng: number } | null = {"address":"4 boulevard de la Bastille, 75012 Paris","lat":48.846723,"lng":2.367233};

/** Code INSEE de chaque zone (arrondissement municipal pour Paris). */
export const zoneInsee: Record<string, string> = {
  "paris-1er": "75101",
  "paris-2e": "75102",
  "paris-3e": "75103",
  "paris-4e": "75104",
  "paris-5e": "75105",
  "paris-6e": "75106",
  "paris-7e": "75107",
  "paris-8e": "75108",
  "paris-9e": "75109",
  "paris-10e": "75110",
  "paris-11e": "75111",
  "paris-12e": "75112",
  "paris-13e": "75113",
  "paris-14e": "75114",
  "paris-15e": "75115",
  "paris-16e": "75116",
  "paris-17e": "75117",
  "paris-18e": "75118",
  "paris-19e": "75119",
  "paris-20e": "75120",
  "boulogne-billancourt": "92012",
  "nanterre": "92050",
  "levallois-perret": "92044",
  "neuilly-sur-seine": "92051",
  "issy-les-moulineaux": "92040",
  "courbevoie": "92026",
  "clichy": "92024",
  "asnieres-sur-seine": "92004",
  "montrouge": "92049",
  "saint-denis": "93066",
  "montreuil": "93048",
  "aubervilliers": "93001",
  "pantin": "93055",
  "saint-ouen": "93070",
  "bobigny": "93008",
  "noisy-le-grand": "93051",
  "aulnay-sous-bois": "93005",
  "creteil": "94028",
  "vitry-sur-seine": "94081",
  "ivry-sur-seine": "94041",
  "vincennes": "94080",
  "saint-maur-des-fosses": "94068",
  "charenton-le-pont": "94018",
  "alfortville": "94002",
  "villejuif": "94076",
  "rueil-malmaison": "92063",
  "colombes": "92025",
  "antony": "92002",
  "clamart": "92023",
  "puteaux": "92062",
  "suresnes": "92073",
  "gennevilliers": "92036",
  "bagneux": "92007",
  "bondy": "93010",
  "le-raincy": "93062",
  "livry-gargan": "93046",
  "sevran": "93071",
  "drancy": "93029",
  "le-blanc-mesnil": "93007",
  "epinay-sur-seine": "93031",
  "l-hay-les-roses": "94038",
  "thiais": "94073",
  "choisy-le-roi": "94022",
  "orly": "94054",
  "fresnes": "94034",
  "cachan": "94016",
  "arcueil": "94003"
};

export const zoneFacts: Record<string, ZoneFacts> = {
  "paris-1er": {
    "officialName": "Paris 1er Arrondissement",
    "population": 15114,
    "surfaceHa": 182.73,
    "limitrophes": [
      {
        "code": "75102",
        "nom": "Paris 2e Arrondissement"
      },
      {
        "code": "75103",
        "nom": "Paris 3e Arrondissement"
      },
      {
        "code": "75104",
        "nom": "Paris 4e Arrondissement"
      },
      {
        "code": "75106",
        "nom": "Paris 6e Arrondissement"
      },
      {
        "code": "75107",
        "nom": "Paris 7e Arrondissement"
      },
      {
        "code": "75108",
        "nom": "Paris 8e Arrondissement"
      },
      {
        "code": "75109",
        "nom": "Paris 9e Arrondissement"
      }
    ],
    "route": {
      "distanceKm": 3.6,
      "durationMin": 10
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3618,
      "lat": 48.8639
    }
  },
  "paris-2e": {
    "officialName": "Paris 2e Arrondissement",
    "population": 19847,
    "surfaceHa": 99.16,
    "limitrophes": [
      {
        "code": "75101",
        "nom": "Paris 1er Arrondissement"
      },
      {
        "code": "75103",
        "nom": "Paris 3e Arrondissement"
      },
      {
        "code": "75109",
        "nom": "Paris 9e Arrondissement"
      },
      {
        "code": "75110",
        "nom": "Paris 10e Arrondissement"
      }
    ],
    "route": {
      "distanceKm": 3.6,
      "durationMin": 10
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3618,
      "lat": 48.8639
    }
  },
  "paris-3e": {
    "officialName": "Paris 3e Arrondissement",
    "population": 32179,
    "surfaceHa": 116.95,
    "limitrophes": [
      {
        "code": "75101",
        "nom": "Paris 1er Arrondissement"
      },
      {
        "code": "75102",
        "nom": "Paris 2e Arrondissement"
      },
      {
        "code": "75104",
        "nom": "Paris 4e Arrondissement"
      },
      {
        "code": "75110",
        "nom": "Paris 10e Arrondissement"
      },
      {
        "code": "75111",
        "nom": "Paris 11e Arrondissement"
      }
    ],
    "route": {
      "distanceKm": 3.6,
      "durationMin": 10
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3617,
      "lat": 48.8639
    }
  },
  "paris-4e": {
    "officialName": "Paris 4e Arrondissement",
    "population": 27332,
    "surfaceHa": 159.51,
    "limitrophes": [
      {
        "code": "75101",
        "nom": "Paris 1er Arrondissement"
      },
      {
        "code": "75103",
        "nom": "Paris 3e Arrondissement"
      },
      {
        "code": "75105",
        "nom": "Paris 5e Arrondissement"
      },
      {
        "code": "75111",
        "nom": "Paris 11e Arrondissement"
      },
      {
        "code": "75112",
        "nom": "Paris 12e Arrondissement"
      }
    ],
    "route": {
      "distanceKm": 3.6,
      "durationMin": 10
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3618,
      "lat": 48.8639
    }
  },
  "paris-5e": {
    "officialName": "Paris 5e Arrondissement",
    "population": 55252,
    "surfaceHa": 254.14,
    "limitrophes": [
      {
        "code": "75104",
        "nom": "Paris 4e Arrondissement"
      },
      {
        "code": "75106",
        "nom": "Paris 6e Arrondissement"
      },
      {
        "code": "75112",
        "nom": "Paris 12e Arrondissement"
      },
      {
        "code": "75113",
        "nom": "Paris 13e Arrondissement"
      },
      {
        "code": "75114",
        "nom": "Paris 14e Arrondissement"
      }
    ],
    "route": {
      "distanceKm": 2.8,
      "durationMin": 8
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3444,
      "lat": 48.846
    }
  },
  "paris-6e": {
    "officialName": "Paris 6e Arrondissement",
    "population": 40389,
    "surfaceHa": 215.09,
    "limitrophes": [
      {
        "code": "75101",
        "nom": "Paris 1er Arrondissement"
      },
      {
        "code": "75105",
        "nom": "Paris 5e Arrondissement"
      },
      {
        "code": "75107",
        "nom": "Paris 7e Arrondissement"
      },
      {
        "code": "75114",
        "nom": "Paris 14e Arrondissement"
      },
      {
        "code": "75115",
        "nom": "Paris 15e Arrondissement"
      }
    ],
    "route": {
      "distanceKm": 3.7,
      "durationMin": 10
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3323,
      "lat": 48.8506
    }
  },
  "paris-7e": {
    "officialName": "Paris 7e Arrondissement",
    "population": 48015,
    "surfaceHa": 408.5,
    "limitrophes": [
      {
        "code": "75101",
        "nom": "Paris 1er Arrondissement"
      },
      {
        "code": "75106",
        "nom": "Paris 6e Arrondissement"
      },
      {
        "code": "75108",
        "nom": "Paris 8e Arrondissement"
      },
      {
        "code": "75115",
        "nom": "Paris 15e Arrondissement"
      },
      {
        "code": "75116",
        "nom": "Paris 16e Arrondissement"
      }
    ],
    "route": {
      "distanceKm": 4.8,
      "durationMin": 13
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3204,
      "lat": 48.8573
    }
  },
  "paris-8e": {
    "officialName": "Paris 8e Arrondissement",
    "population": 35317,
    "surfaceHa": 387.8,
    "limitrophes": [
      {
        "code": "75101",
        "nom": "Paris 1er Arrondissement"
      },
      {
        "code": "75107",
        "nom": "Paris 7e Arrondissement"
      },
      {
        "code": "75109",
        "nom": "Paris 9e Arrondissement"
      },
      {
        "code": "75116",
        "nom": "Paris 16e Arrondissement"
      },
      {
        "code": "75117",
        "nom": "Paris 17e Arrondissement"
      }
    ],
    "route": {
      "distanceKm": 6.1,
      "durationMin": 16
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3176,
      "lat": 48.8775
    }
  },
  "paris-9e": {
    "officialName": "Paris 9e Arrondissement",
    "population": 57271,
    "surfaceHa": 217.78,
    "limitrophes": [
      {
        "code": "75101",
        "nom": "Paris 1er Arrondissement"
      },
      {
        "code": "75102",
        "nom": "Paris 2e Arrondissement"
      },
      {
        "code": "75108",
        "nom": "Paris 8e Arrondissement"
      },
      {
        "code": "75110",
        "nom": "Paris 10e Arrondissement"
      },
      {
        "code": "75117",
        "nom": "Paris 17e Arrondissement"
      },
      {
        "code": "75118",
        "nom": "Paris 18e Arrondissement"
      }
    ],
    "route": {
      "distanceKm": 4.5,
      "durationMin": 13
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3414,
      "lat": 48.8724
    }
  },
  "paris-10e": {
    "officialName": "Paris 10e Arrondissement",
    "population": 83873,
    "surfaceHa": 288.8,
    "limitrophes": [
      {
        "code": "75102",
        "nom": "Paris 2e Arrondissement"
      },
      {
        "code": "75103",
        "nom": "Paris 3e Arrondissement"
      },
      {
        "code": "75109",
        "nom": "Paris 9e Arrondissement"
      },
      {
        "code": "75111",
        "nom": "Paris 11e Arrondissement"
      },
      {
        "code": "75118",
        "nom": "Paris 18e Arrondissement"
      },
      {
        "code": "75119",
        "nom": "Paris 19e Arrondissement"
      }
    ],
    "route": {
      "distanceKm": 3.6,
      "durationMin": 10
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3577,
      "lat": 48.8718
    }
  },
  "paris-11e": {
    "officialName": "Paris 11e Arrondissement",
    "population": 138170,
    "surfaceHa": 364.82,
    "limitrophes": [
      {
        "code": "75103",
        "nom": "Paris 3e Arrondissement"
      },
      {
        "code": "75104",
        "nom": "Paris 4e Arrondissement"
      },
      {
        "code": "75110",
        "nom": "Paris 10e Arrondissement"
      },
      {
        "code": "75112",
        "nom": "Paris 12e Arrondissement"
      },
      {
        "code": "75120",
        "nom": "Paris 20e Arrondissement"
      }
    ],
    "route": {
      "distanceKm": 2.3,
      "durationMin": 6
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3793,
      "lat": 48.8587
    }
  },
  "paris-12e": {
    "officialName": "Paris 12e Arrondissement",
    "population": 138024,
    "surfaceHa": 1637.05,
    "limitrophes": [
      {
        "code": "94018",
        "nom": "Charenton-le-Pont"
      },
      {
        "code": "94033",
        "nom": "Fontenay-sous-Bois"
      },
      {
        "code": "94042",
        "nom": "Joinville-le-Pont"
      },
      {
        "code": "94052",
        "nom": "Nogent-sur-Marne"
      },
      {
        "code": "75104",
        "nom": "Paris 4e Arrondissement"
      },
      {
        "code": "75105",
        "nom": "Paris 5e Arrondissement"
      },
      {
        "code": "75111",
        "nom": "Paris 11e Arrondissement"
      },
      {
        "code": "75113",
        "nom": "Paris 13e Arrondissement"
      },
      {
        "code": "75120",
        "nom": "Paris 20e Arrondissement"
      },
      {
        "code": "94067",
        "nom": "Saint-Mandé"
      },
      {
        "code": "94069",
        "nom": "Saint-Maurice"
      },
      {
        "code": "94080",
        "nom": "Vincennes"
      }
    ],
    "route": {
      "distanceKm": 2,
      "durationMin": 5
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3882,
      "lat": 48.8408
    }
  },
  "paris-13e": {
    "officialName": "Paris 13e Arrondissement",
    "population": 181271,
    "surfaceHa": 713.37,
    "limitrophes": [
      {
        "code": "94037",
        "nom": "Gentilly"
      },
      {
        "code": "94041",
        "nom": "Ivry-sur-Seine"
      },
      {
        "code": "94043",
        "nom": "Le Kremlin-Bicêtre"
      },
      {
        "code": "75105",
        "nom": "Paris 5e Arrondissement"
      },
      {
        "code": "75112",
        "nom": "Paris 12e Arrondissement"
      },
      {
        "code": "75114",
        "nom": "Paris 14e Arrondissement"
      }
    ],
    "route": {
      "distanceKm": 2.3,
      "durationMin": 7
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3555,
      "lat": 48.8326
    }
  },
  "paris-14e": {
    "officialName": "Paris 14e Arrondissement",
    "population": 136455,
    "surfaceHa": 560.97,
    "limitrophes": [
      {
        "code": "94037",
        "nom": "Gentilly"
      },
      {
        "code": "92046",
        "nom": "Malakoff"
      },
      {
        "code": "92049",
        "nom": "Montrouge"
      },
      {
        "code": "75105",
        "nom": "Paris 5e Arrondissement"
      },
      {
        "code": "75106",
        "nom": "Paris 6e Arrondissement"
      },
      {
        "code": "75113",
        "nom": "Paris 13e Arrondissement"
      },
      {
        "code": "75115",
        "nom": "Paris 15e Arrondissement"
      }
    ],
    "route": {
      "distanceKm": 4.2,
      "durationMin": 12
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3269,
      "lat": 48.8331
    }
  },
  "paris-15e": {
    "officialName": "Paris 15e Arrondissement",
    "population": 229713,
    "surfaceHa": 846.64,
    "limitrophes": [
      {
        "code": "92040",
        "nom": "Issy-les-Moulineaux"
      },
      {
        "code": "75106",
        "nom": "Paris 6e Arrondissement"
      },
      {
        "code": "75107",
        "nom": "Paris 7e Arrondissement"
      },
      {
        "code": "75114",
        "nom": "Paris 14e Arrondissement"
      },
      {
        "code": "75116",
        "nom": "Paris 16e Arrondissement"
      },
      {
        "code": "92075",
        "nom": "Vanves"
      }
    ],
    "route": {
      "distanceKm": 6.4,
      "durationMin": 17
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3003,
      "lat": 48.8414
    }
  },
  "paris-16e": {
    "officialName": "Paris 16e Arrondissement",
    "population": 159386,
    "surfaceHa": 1639.85,
    "limitrophes": [
      {
        "code": "92012",
        "nom": "Boulogne-Billancourt"
      },
      {
        "code": "92051",
        "nom": "Neuilly-sur-Seine"
      },
      {
        "code": "75107",
        "nom": "Paris 7e Arrondissement"
      },
      {
        "code": "75108",
        "nom": "Paris 8e Arrondissement"
      },
      {
        "code": "75115",
        "nom": "Paris 15e Arrondissement"
      },
      {
        "code": "75117",
        "nom": "Paris 17e Arrondissement"
      },
      {
        "code": "92062",
        "nom": "Puteaux"
      },
      {
        "code": "92064",
        "nom": "Saint-Cloud"
      },
      {
        "code": "92073",
        "nom": "Suresnes"
      }
    ],
    "route": {
      "distanceKm": 8.3,
      "durationMin": 21
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.2765,
      "lat": 48.8637
    }
  },
  "paris-17e": {
    "officialName": "Paris 17e Arrondissement",
    "population": 159212,
    "surfaceHa": 566.11,
    "limitrophes": [
      {
        "code": "92024",
        "nom": "Clichy"
      },
      {
        "code": "92044",
        "nom": "Levallois-Perret"
      },
      {
        "code": "92051",
        "nom": "Neuilly-sur-Seine"
      },
      {
        "code": "75108",
        "nom": "Paris 8e Arrondissement"
      },
      {
        "code": "75109",
        "nom": "Paris 9e Arrondissement"
      },
      {
        "code": "75116",
        "nom": "Paris 16e Arrondissement"
      },
      {
        "code": "75118",
        "nom": "Paris 18e Arrondissement"
      },
      {
        "code": "93070",
        "nom": "Saint-Ouen-sur-Seine"
      }
    ],
    "route": {
      "distanceKm": 6.7,
      "durationMin": 19
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3221,
      "lat": 48.8846
    }
  },
  "paris-18e": {
    "officialName": "Paris 18e Arrondissement",
    "population": 183127,
    "surfaceHa": 599.13,
    "limitrophes": [
      {
        "code": "93001",
        "nom": "Aubervilliers"
      },
      {
        "code": "75109",
        "nom": "Paris 9e Arrondissement"
      },
      {
        "code": "75110",
        "nom": "Paris 10e Arrondissement"
      },
      {
        "code": "75117",
        "nom": "Paris 17e Arrondissement"
      },
      {
        "code": "75119",
        "nom": "Paris 19e Arrondissement"
      },
      {
        "code": "93066",
        "nom": "Saint-Denis"
      },
      {
        "code": "93070",
        "nom": "Saint-Ouen-sur-Seine"
      }
    ],
    "route": {
      "distanceKm": 5.9,
      "durationMin": 17
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3444,
      "lat": 48.8921
    }
  },
  "paris-19e": {
    "officialName": "Paris 19e Arrondissement",
    "population": 178691,
    "surfaceHa": 677.99,
    "limitrophes": [
      {
        "code": "93001",
        "nom": "Aubervilliers"
      },
      {
        "code": "93061",
        "nom": "Le Pré-Saint-Gervais"
      },
      {
        "code": "93045",
        "nom": "Les Lilas"
      },
      {
        "code": "93055",
        "nom": "Pantin"
      },
      {
        "code": "75110",
        "nom": "Paris 10e Arrondissement"
      },
      {
        "code": "75118",
        "nom": "Paris 18e Arrondissement"
      },
      {
        "code": "75120",
        "nom": "Paris 20e Arrondissement"
      }
    ],
    "route": {
      "distanceKm": 5.3,
      "durationMin": 14
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3819,
      "lat": 48.8829
    }
  },
  "paris-20e": {
    "officialName": "Paris 20e Arrondissement",
    "population": 185140,
    "surfaceHa": 599.65,
    "limitrophes": [
      {
        "code": "93006",
        "nom": "Bagnolet"
      },
      {
        "code": "93061",
        "nom": "Le Pré-Saint-Gervais"
      },
      {
        "code": "93045",
        "nom": "Les Lilas"
      },
      {
        "code": "93048",
        "nom": "Montreuil"
      },
      {
        "code": "75111",
        "nom": "Paris 11e Arrondissement"
      },
      {
        "code": "75112",
        "nom": "Paris 12e Arrondissement"
      },
      {
        "code": "75119",
        "nom": "Paris 19e Arrondissement"
      },
      {
        "code": "94067",
        "nom": "Saint-Mandé"
      }
    ],
    "route": {
      "distanceKm": 4.6,
      "durationMin": 13
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3994,
      "lat": 48.8652
    }
  },
  "boulogne-billancourt": {
    "officialName": "Boulogne-Billancourt",
    "population": 119019,
    "surfaceHa": 615.22,
    "limitrophes": [
      {
        "code": "92040",
        "nom": "Issy-les-Moulineaux"
      },
      {
        "code": "92048",
        "nom": "Meudon"
      },
      {
        "code": "75116",
        "nom": "Paris 16e Arrondissement"
      },
      {
        "code": "92064",
        "nom": "Saint-Cloud"
      },
      {
        "code": "92072",
        "nom": "Sèvres"
      }
    ],
    "route": {
      "distanceKm": 11.9,
      "durationMin": 26
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.2405,
      "lat": 48.836
    }
  },
  "nanterre": {
    "officialName": "Nanterre",
    "population": 97783,
    "surfaceHa": 1222.48,
    "limitrophes": [
      {
        "code": "95063",
        "nom": "Bezons"
      },
      {
        "code": "78124",
        "nom": "Carrières-sur-Seine"
      },
      {
        "code": "78146",
        "nom": "Chatou"
      },
      {
        "code": "92025",
        "nom": "Colombes"
      },
      {
        "code": "92026",
        "nom": "Courbevoie"
      },
      {
        "code": "92035",
        "nom": "La Garenne-Colombes"
      },
      {
        "code": "92062",
        "nom": "Puteaux"
      },
      {
        "code": "92063",
        "nom": "Rueil-Malmaison"
      },
      {
        "code": "92073",
        "nom": "Suresnes"
      }
    ],
    "route": {
      "distanceKm": 14.6,
      "durationMin": 31
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.2072,
      "lat": 48.892
    }
  },
  "levallois-perret": {
    "officialName": "Levallois-Perret",
    "population": 68092,
    "surfaceHa": 241.57,
    "limitrophes": [
      {
        "code": "92004",
        "nom": "Asnières-sur-Seine"
      },
      {
        "code": "92024",
        "nom": "Clichy"
      },
      {
        "code": "92026",
        "nom": "Courbevoie"
      },
      {
        "code": "92051",
        "nom": "Neuilly-sur-Seine"
      },
      {
        "code": "75117",
        "nom": "Paris 17e Arrondissement"
      }
    ],
    "route": {
      "distanceKm": 9.4,
      "durationMin": 23
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.2877,
      "lat": 48.8928
    }
  },
  "neuilly-sur-seine": {
    "officialName": "Neuilly-sur-Seine",
    "population": 59538,
    "surfaceHa": 371.71,
    "limitrophes": [
      {
        "code": "92026",
        "nom": "Courbevoie"
      },
      {
        "code": "92044",
        "nom": "Levallois-Perret"
      },
      {
        "code": "75116",
        "nom": "Paris 16e Arrondissement"
      },
      {
        "code": "75117",
        "nom": "Paris 17e Arrondissement"
      },
      {
        "code": "92062",
        "nom": "Puteaux"
      }
    ],
    "route": {
      "distanceKm": 9.5,
      "durationMin": 23
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.2697,
      "lat": 48.8848
    }
  },
  "issy-les-moulineaux": {
    "officialName": "Issy-les-Moulineaux",
    "population": 67669,
    "surfaceHa": 424.49,
    "limitrophes": [
      {
        "code": "92012",
        "nom": "Boulogne-Billancourt"
      },
      {
        "code": "92023",
        "nom": "Clamart"
      },
      {
        "code": "92048",
        "nom": "Meudon"
      },
      {
        "code": "75115",
        "nom": "Paris 15e Arrondissement"
      },
      {
        "code": "92075",
        "nom": "Vanves"
      }
    ],
    "route": {
      "distanceKm": 9.3,
      "durationMin": 22
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.2738,
      "lat": 48.8245
    }
  },
  "courbevoie": {
    "officialName": "Courbevoie",
    "population": 82902,
    "surfaceHa": 416.04,
    "limitrophes": [
      {
        "code": "92004",
        "nom": "Asnières-sur-Seine"
      },
      {
        "code": "92009",
        "nom": "Bois-Colombes"
      },
      {
        "code": "92035",
        "nom": "La Garenne-Colombes"
      },
      {
        "code": "92044",
        "nom": "Levallois-Perret"
      },
      {
        "code": "92050",
        "nom": "Nanterre"
      },
      {
        "code": "92051",
        "nom": "Neuilly-sur-Seine"
      },
      {
        "code": "92062",
        "nom": "Puteaux"
      }
    ],
    "route": {
      "distanceKm": 11.9,
      "durationMin": 26
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.2555,
      "lat": 48.8954
    }
  },
  "clichy": {
    "officialName": "Clichy",
    "population": 64410,
    "surfaceHa": 307.94,
    "limitrophes": [
      {
        "code": "92004",
        "nom": "Asnières-sur-Seine"
      },
      {
        "code": "92044",
        "nom": "Levallois-Perret"
      },
      {
        "code": "75117",
        "nom": "Paris 17e Arrondissement"
      },
      {
        "code": "93070",
        "nom": "Saint-Ouen-sur-Seine"
      }
    ],
    "route": {
      "distanceKm": 9.9,
      "durationMin": 23
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3049,
      "lat": 48.9028
    }
  },
  "asnieres-sur-seine": {
    "officialName": "Asnières-sur-Seine",
    "population": 93941,
    "surfaceHa": 482.12,
    "limitrophes": [
      {
        "code": "92009",
        "nom": "Bois-Colombes"
      },
      {
        "code": "92024",
        "nom": "Clichy"
      },
      {
        "code": "92025",
        "nom": "Colombes"
      },
      {
        "code": "92026",
        "nom": "Courbevoie"
      },
      {
        "code": "92036",
        "nom": "Gennevilliers"
      },
      {
        "code": "93039",
        "nom": "L'Île-Saint-Denis"
      },
      {
        "code": "92044",
        "nom": "Levallois-Perret"
      },
      {
        "code": "93070",
        "nom": "Saint-Ouen-sur-Seine"
      }
    ],
    "route": {
      "distanceKm": 10.8,
      "durationMin": 25
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.2889,
      "lat": 48.9107
    }
  },
  "montrouge": {
    "officialName": "Montrouge",
    "population": 46324,
    "surfaceHa": 207.06,
    "limitrophes": [
      {
        "code": "94003",
        "nom": "Arcueil"
      },
      {
        "code": "92007",
        "nom": "Bagneux"
      },
      {
        "code": "92020",
        "nom": "Châtillon"
      },
      {
        "code": "94037",
        "nom": "Gentilly"
      },
      {
        "code": "92046",
        "nom": "Malakoff"
      },
      {
        "code": "75114",
        "nom": "Paris 14e Arrondissement"
      }
    ],
    "route": {
      "distanceKm": 6.3,
      "durationMin": 16
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3205,
      "lat": 48.8188
    }
  },
  "saint-denis": {
    "officialName": "Saint-Denis",
    "population": 149077,
    "surfaceHa": 1577.25,
    "limitrophes": [
      {
        "code": "93001",
        "nom": "Aubervilliers"
      },
      {
        "code": "93031",
        "nom": "Épinay-sur-Seine"
      },
      {
        "code": "93039",
        "nom": "L'Île-Saint-Denis"
      },
      {
        "code": "93027",
        "nom": "La Courneuve"
      },
      {
        "code": "95427",
        "nom": "Montmagny"
      },
      {
        "code": "75118",
        "nom": "Paris 18e Arrondissement"
      },
      {
        "code": "93070",
        "nom": "Saint-Ouen-sur-Seine"
      },
      {
        "code": "95585",
        "nom": "Sarcelles"
      },
      {
        "code": "93072",
        "nom": "Stains"
      },
      {
        "code": "93079",
        "nom": "Villetaneuse"
      }
    ],
    "route": {
      "distanceKm": 11.1,
      "durationMin": 26
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3584,
      "lat": 48.9362
    }
  },
  "montreuil": {
    "officialName": "Montreuil",
    "population": 111934,
    "surfaceHa": 890.68,
    "limitrophes": [
      {
        "code": "93006",
        "nom": "Bagnolet"
      },
      {
        "code": "94033",
        "nom": "Fontenay-sous-Bois"
      },
      {
        "code": "93053",
        "nom": "Noisy-le-Sec"
      },
      {
        "code": "75120",
        "nom": "Paris 20e Arrondissement"
      },
      {
        "code": "93063",
        "nom": "Romainville"
      },
      {
        "code": "93064",
        "nom": "Rosny-sous-Bois"
      },
      {
        "code": "94067",
        "nom": "Saint-Mandé"
      },
      {
        "code": "94080",
        "nom": "Vincennes"
      }
    ],
    "route": {
      "distanceKm": 8.6,
      "durationMin": 16
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.441,
      "lat": 48.8624
    }
  },
  "aubervilliers": {
    "officialName": "Aubervilliers",
    "population": 88365,
    "surfaceHa": 576.7,
    "limitrophes": [
      {
        "code": "93027",
        "nom": "La Courneuve"
      },
      {
        "code": "93055",
        "nom": "Pantin"
      },
      {
        "code": "75118",
        "nom": "Paris 18e Arrondissement"
      },
      {
        "code": "75119",
        "nom": "Paris 19e Arrondissement"
      },
      {
        "code": "93066",
        "nom": "Saint-Denis"
      }
    ],
    "route": {
      "distanceKm": 9.2,
      "durationMin": 22
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3818,
      "lat": 48.9146
    }
  },
  "pantin": {
    "officialName": "Pantin",
    "population": 61929,
    "surfaceHa": 500.44,
    "limitrophes": [
      {
        "code": "93001",
        "nom": "Aubervilliers"
      },
      {
        "code": "93008",
        "nom": "Bobigny"
      },
      {
        "code": "93027",
        "nom": "La Courneuve"
      },
      {
        "code": "93061",
        "nom": "Le Pré-Saint-Gervais"
      },
      {
        "code": "93045",
        "nom": "Les Lilas"
      },
      {
        "code": "75119",
        "nom": "Paris 19e Arrondissement"
      },
      {
        "code": "93063",
        "nom": "Romainville"
      }
    ],
    "route": {
      "distanceKm": 11,
      "durationMin": 20
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.4012,
      "lat": 48.8969
    }
  },
  "saint-ouen": {
    "officialName": "Saint-Ouen-sur-Seine",
    "population": 53615,
    "surfaceHa": 430.25,
    "limitrophes": [
      {
        "code": "92004",
        "nom": "Asnières-sur-Seine"
      },
      {
        "code": "92024",
        "nom": "Clichy"
      },
      {
        "code": "93039",
        "nom": "L'Île-Saint-Denis"
      },
      {
        "code": "75117",
        "nom": "Paris 17e Arrondissement"
      },
      {
        "code": "75118",
        "nom": "Paris 18e Arrondissement"
      },
      {
        "code": "93066",
        "nom": "Saint-Denis"
      }
    ],
    "route": {
      "distanceKm": 8.2,
      "durationMin": 21
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3344,
      "lat": 48.9117
    }
  },
  "bobigny": {
    "officialName": "Bobigny",
    "population": 56927,
    "surfaceHa": 677.82,
    "limitrophes": [
      {
        "code": "93010",
        "nom": "Bondy"
      },
      {
        "code": "93029",
        "nom": "Drancy"
      },
      {
        "code": "93027",
        "nom": "La Courneuve"
      },
      {
        "code": "93053",
        "nom": "Noisy-le-Sec"
      },
      {
        "code": "93055",
        "nom": "Pantin"
      },
      {
        "code": "93063",
        "nom": "Romainville"
      }
    ],
    "route": {
      "distanceKm": 12.5,
      "durationMin": 22
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.4451,
      "lat": 48.9061
    }
  },
  "noisy-le-grand": {
    "officialName": "Noisy-le-Grand",
    "population": 72978,
    "surfaceHa": 1312.94,
    "limitrophes": [
      {
        "code": "94015",
        "nom": "Bry-sur-Marne"
      },
      {
        "code": "77083",
        "nom": "Champs-sur-Marne"
      },
      {
        "code": "77169",
        "nom": "Émerainville"
      },
      {
        "code": "93033",
        "nom": "Gournay-sur-Marne"
      },
      {
        "code": "94059",
        "nom": "Le Plessis-Trévise"
      },
      {
        "code": "93049",
        "nom": "Neuilly-Plaisance"
      },
      {
        "code": "93050",
        "nom": "Neuilly-sur-Marne"
      },
      {
        "code": "77373",
        "nom": "Pontault-Combault"
      },
      {
        "code": "94079",
        "nom": "Villiers-sur-Marne"
      }
    ],
    "route": {
      "distanceKm": 19,
      "durationMin": 22
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.5524,
      "lat": 48.8496
    }
  },
  "aulnay-sous-bois": {
    "officialName": "Aulnay-sous-Bois",
    "population": 87599,
    "surfaceHa": 1615.42,
    "limitrophes": [
      {
        "code": "93010",
        "nom": "Bondy"
      },
      {
        "code": "95277",
        "nom": "Gonesse"
      },
      {
        "code": "93007",
        "nom": "Le Blanc-Mesnil"
      },
      {
        "code": "93057",
        "nom": "Les Pavillons-sous-Bois"
      },
      {
        "code": "93046",
        "nom": "Livry-Gargan"
      },
      {
        "code": "93071",
        "nom": "Sevran"
      },
      {
        "code": "93078",
        "nom": "Villepinte"
      }
    ],
    "route": {
      "distanceKm": 17.7,
      "durationMin": 24
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.5001,
      "lat": 48.9342
    }
  },
  "creteil": {
    "officialName": "Créteil",
    "population": 93397,
    "surfaceHa": 1141.93,
    "limitrophes": [
      {
        "code": "94002",
        "nom": "Alfortville"
      },
      {
        "code": "94011",
        "nom": "Bonneuil-sur-Marne"
      },
      {
        "code": "94022",
        "nom": "Choisy-le-Roi"
      },
      {
        "code": "94044",
        "nom": "Limeil-Brévannes"
      },
      {
        "code": "94046",
        "nom": "Maisons-Alfort"
      },
      {
        "code": "94068",
        "nom": "Saint-Maur-des-Fossés"
      },
      {
        "code": "94074",
        "nom": "Valenton"
      }
    ],
    "route": {
      "distanceKm": 13.8,
      "durationMin": 17
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.4531,
      "lat": 48.7778
    }
  },
  "vitry-sur-seine": {
    "officialName": "Vitry-sur-Seine",
    "population": 93963,
    "surfaceHa": 1165.9,
    "limitrophes": [
      {
        "code": "94002",
        "nom": "Alfortville"
      },
      {
        "code": "94021",
        "nom": "Chevilly-Larue"
      },
      {
        "code": "94022",
        "nom": "Choisy-le-Roi"
      },
      {
        "code": "94041",
        "nom": "Ivry-sur-Seine"
      },
      {
        "code": "94073",
        "nom": "Thiais"
      },
      {
        "code": "94076",
        "nom": "Villejuif"
      }
    ],
    "route": {
      "distanceKm": 9.6,
      "durationMin": 15
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3885,
      "lat": 48.7886
    }
  },
  "ivry-sur-seine": {
    "officialName": "Ivry-sur-Seine",
    "population": 65064,
    "surfaceHa": 611.46,
    "limitrophes": [
      {
        "code": "94002",
        "nom": "Alfortville"
      },
      {
        "code": "94018",
        "nom": "Charenton-le-Pont"
      },
      {
        "code": "94043",
        "nom": "Le Kremlin-Bicêtre"
      },
      {
        "code": "75113",
        "nom": "Paris 13e Arrondissement"
      },
      {
        "code": "94076",
        "nom": "Villejuif"
      },
      {
        "code": "94081",
        "nom": "Vitry-sur-Seine"
      }
    ],
    "route": {
      "distanceKm": 6.5,
      "durationMin": 12
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3875,
      "lat": 48.812
    }
  },
  "vincennes": {
    "officialName": "Vincennes",
    "population": 48193,
    "surfaceHa": 190.34,
    "limitrophes": [
      {
        "code": "94033",
        "nom": "Fontenay-sous-Bois"
      },
      {
        "code": "93048",
        "nom": "Montreuil"
      },
      {
        "code": "75112",
        "nom": "Paris 12e Arrondissement"
      },
      {
        "code": "94067",
        "nom": "Saint-Mandé"
      }
    ],
    "route": {
      "distanceKm": 5.9,
      "durationMin": 12
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.4397,
      "lat": 48.8477
    }
  },
  "saint-maur-des-fosses": {
    "officialName": "Saint-Maur-des-Fossés",
    "population": 76572,
    "surfaceHa": 1125.56,
    "limitrophes": [
      {
        "code": "94011",
        "nom": "Bonneuil-sur-Marne"
      },
      {
        "code": "94017",
        "nom": "Champigny-sur-Marne"
      },
      {
        "code": "94019",
        "nom": "Chennevières-sur-Marne"
      },
      {
        "code": "94028",
        "nom": "Créteil"
      },
      {
        "code": "94042",
        "nom": "Joinville-le-Pont"
      },
      {
        "code": "94046",
        "nom": "Maisons-Alfort"
      },
      {
        "code": "94071",
        "nom": "Sucy-en-Brie"
      }
    ],
    "route": {
      "distanceKm": 11.8,
      "durationMin": 19
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.4853,
      "lat": 48.8029
    }
  },
  "charenton-le-pont": {
    "officialName": "Charenton-le-Pont",
    "population": 28830,
    "surfaceHa": 184.99,
    "limitrophes": [
      {
        "code": "94002",
        "nom": "Alfortville"
      },
      {
        "code": "94041",
        "nom": "Ivry-sur-Seine"
      },
      {
        "code": "94046",
        "nom": "Maisons-Alfort"
      },
      {
        "code": "75112",
        "nom": "Paris 12e Arrondissement"
      },
      {
        "code": "94069",
        "nom": "Saint-Maurice"
      }
    ],
    "route": {
      "distanceKm": 6.3,
      "durationMin": 14
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.4161,
      "lat": 48.8197
    }
  },
  "alfortville": {
    "officialName": "Alfortville",
    "population": 45531,
    "surfaceHa": 367.17,
    "limitrophes": [
      {
        "code": "94018",
        "nom": "Charenton-le-Pont"
      },
      {
        "code": "94022",
        "nom": "Choisy-le-Roi"
      },
      {
        "code": "94028",
        "nom": "Créteil"
      },
      {
        "code": "94041",
        "nom": "Ivry-sur-Seine"
      },
      {
        "code": "94046",
        "nom": "Maisons-Alfort"
      },
      {
        "code": "94081",
        "nom": "Vitry-sur-Seine"
      }
    ],
    "route": {
      "distanceKm": 8.3,
      "durationMin": 14
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.4203,
      "lat": 48.8054
    }
  },
  "villejuif": {
    "officialName": "Villejuif",
    "population": 60183,
    "surfaceHa": 527.95,
    "limitrophes": [
      {
        "code": "94003",
        "nom": "Arcueil"
      },
      {
        "code": "94016",
        "nom": "Cachan"
      },
      {
        "code": "94041",
        "nom": "Ivry-sur-Seine"
      },
      {
        "code": "94038",
        "nom": "L'Haÿ-les-Roses"
      },
      {
        "code": "94043",
        "nom": "Le Kremlin-Bicêtre"
      },
      {
        "code": "94081",
        "nom": "Vitry-sur-Seine"
      }
    ],
    "route": {
      "distanceKm": 9.3,
      "durationMin": 17
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3631,
      "lat": 48.7919
    }
  },
  "rueil-malmaison": {
    "officialName": "Rueil-Malmaison",
    "population": 82874,
    "surfaceHa": 1452.83,
    "limitrophes": [
      {
        "code": "78092",
        "nom": "Bougival"
      },
      {
        "code": "78146",
        "nom": "Chatou"
      },
      {
        "code": "78190",
        "nom": "Croissy-sur-Seine"
      },
      {
        "code": "92033",
        "nom": "Garches"
      },
      {
        "code": "78126",
        "nom": "La Celle-Saint-Cloud"
      },
      {
        "code": "92050",
        "nom": "Nanterre"
      },
      {
        "code": "92064",
        "nom": "Saint-Cloud"
      },
      {
        "code": "92073",
        "nom": "Suresnes"
      },
      {
        "code": "92076",
        "nom": "Vaucresson"
      }
    ],
    "route": {
      "distanceKm": 16.5,
      "durationMin": 33
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.1806,
      "lat": 48.8779
    }
  },
  "colombes": {
    "officialName": "Colombes",
    "population": 91053,
    "surfaceHa": 777.84,
    "limitrophes": [
      {
        "code": "95018",
        "nom": "Argenteuil"
      },
      {
        "code": "92004",
        "nom": "Asnières-sur-Seine"
      },
      {
        "code": "95063",
        "nom": "Bezons"
      },
      {
        "code": "92009",
        "nom": "Bois-Colombes"
      },
      {
        "code": "92036",
        "nom": "Gennevilliers"
      },
      {
        "code": "92035",
        "nom": "La Garenne-Colombes"
      },
      {
        "code": "92050",
        "nom": "Nanterre"
      }
    ],
    "route": {
      "distanceKm": 15.1,
      "durationMin": 32
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.2544,
      "lat": 48.9225
    }
  },
  "antony": {
    "officialName": "Antony",
    "population": 64263,
    "surfaceHa": 956.17,
    "limitrophes": [
      {
        "code": "92014",
        "nom": "Bourg-la-Reine"
      },
      {
        "code": "92019",
        "nom": "Châtenay-Malabry"
      },
      {
        "code": "94034",
        "nom": "Fresnes"
      },
      {
        "code": "94038",
        "nom": "L'Haÿ-les-Roses"
      },
      {
        "code": "91377",
        "nom": "Massy"
      },
      {
        "code": "92071",
        "nom": "Sceaux"
      },
      {
        "code": "91645",
        "nom": "Verrières-le-Buisson"
      },
      {
        "code": "91689",
        "nom": "Wissous"
      }
    ],
    "route": {
      "distanceKm": 19.4,
      "durationMin": 28
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.2956,
      "lat": 48.7537
    }
  },
  "clamart": {
    "officialName": "Clamart",
    "population": 58576,
    "surfaceHa": 875.91,
    "limitrophes": [
      {
        "code": "91064",
        "nom": "Bièvres"
      },
      {
        "code": "92019",
        "nom": "Châtenay-Malabry"
      },
      {
        "code": "92020",
        "nom": "Châtillon"
      },
      {
        "code": "92032",
        "nom": "Fontenay-aux-Roses"
      },
      {
        "code": "92040",
        "nom": "Issy-les-Moulineaux"
      },
      {
        "code": "92060",
        "nom": "Le Plessis-Robinson"
      },
      {
        "code": "92046",
        "nom": "Malakoff"
      },
      {
        "code": "92048",
        "nom": "Meudon"
      },
      {
        "code": "92075",
        "nom": "Vanves"
      },
      {
        "code": "78640",
        "nom": "Vélizy-Villacoublay"
      }
    ],
    "route": {
      "distanceKm": 11,
      "durationMin": 26
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.2628,
      "lat": 48.8007
    }
  },
  "puteaux": {
    "officialName": "Puteaux",
    "population": 44002,
    "surfaceHa": 318.99,
    "limitrophes": [
      {
        "code": "92026",
        "nom": "Courbevoie"
      },
      {
        "code": "92050",
        "nom": "Nanterre"
      },
      {
        "code": "92051",
        "nom": "Neuilly-sur-Seine"
      },
      {
        "code": "75116",
        "nom": "Paris 16e Arrondissement"
      },
      {
        "code": "92073",
        "nom": "Suresnes"
      }
    ],
    "route": {
      "distanceKm": 13,
      "durationMin": 29
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.2381,
      "lat": 48.884
    }
  },
  "suresnes": {
    "officialName": "Suresnes",
    "population": 48956,
    "surfaceHa": 379.65,
    "limitrophes": [
      {
        "code": "92050",
        "nom": "Nanterre"
      },
      {
        "code": "75116",
        "nom": "Paris 16e Arrondissement"
      },
      {
        "code": "92062",
        "nom": "Puteaux"
      },
      {
        "code": "92063",
        "nom": "Rueil-Malmaison"
      },
      {
        "code": "92064",
        "nom": "Saint-Cloud"
      }
    ],
    "route": {
      "distanceKm": 13.2,
      "durationMin": 29
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.2251,
      "lat": 48.8711
    }
  },
  "gennevilliers": {
    "officialName": "Gennevilliers",
    "population": 50979,
    "surfaceHa": 1162.71,
    "limitrophes": [
      {
        "code": "95018",
        "nom": "Argenteuil"
      },
      {
        "code": "92004",
        "nom": "Asnières-sur-Seine"
      },
      {
        "code": "92025",
        "nom": "Colombes"
      },
      {
        "code": "93039",
        "nom": "L'Île-Saint-Denis"
      },
      {
        "code": "92078",
        "nom": "Villeneuve-la-Garenne"
      }
    ],
    "route": {
      "distanceKm": 12.8,
      "durationMin": 28
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.2933,
      "lat": 48.9255
    }
  },
  "bagneux": {
    "officialName": "Bagneux",
    "population": 44572,
    "surfaceHa": 418.4,
    "limitrophes": [
      {
        "code": "94003",
        "nom": "Arcueil"
      },
      {
        "code": "92014",
        "nom": "Bourg-la-Reine"
      },
      {
        "code": "94016",
        "nom": "Cachan"
      },
      {
        "code": "92020",
        "nom": "Châtillon"
      },
      {
        "code": "92032",
        "nom": "Fontenay-aux-Roses"
      },
      {
        "code": "92049",
        "nom": "Montrouge"
      },
      {
        "code": "92071",
        "nom": "Sceaux"
      }
    ],
    "route": {
      "distanceKm": 9.2,
      "durationMin": 23
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.304,
      "lat": 48.7994
    }
  },
  "bondy": {
    "officialName": "Bondy",
    "population": 50595,
    "surfaceHa": 546.28,
    "limitrophes": [
      {
        "code": "93005",
        "nom": "Aulnay-sous-Bois"
      },
      {
        "code": "93008",
        "nom": "Bobigny"
      },
      {
        "code": "93029",
        "nom": "Drancy"
      },
      {
        "code": "93007",
        "nom": "Le Blanc-Mesnil"
      },
      {
        "code": "93057",
        "nom": "Les Pavillons-sous-Bois"
      },
      {
        "code": "93053",
        "nom": "Noisy-le-Sec"
      },
      {
        "code": "93064",
        "nom": "Rosny-sous-Bois"
      },
      {
        "code": "93077",
        "nom": "Villemomble"
      }
    ],
    "route": {
      "distanceKm": 14.3,
      "durationMin": 20
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.4813,
      "lat": 48.9018
    }
  },
  "le-raincy": {
    "officialName": "Le Raincy",
    "population": 14735,
    "surfaceHa": 222.73,
    "limitrophes": [
      {
        "code": "93014",
        "nom": "Clichy-sous-Bois"
      },
      {
        "code": "93032",
        "nom": "Gagny"
      },
      {
        "code": "93057",
        "nom": "Les Pavillons-sous-Bois"
      },
      {
        "code": "93046",
        "nom": "Livry-Gargan"
      },
      {
        "code": "93077",
        "nom": "Villemomble"
      }
    ],
    "route": {
      "distanceKm": 15.9,
      "durationMin": 23
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.5161,
      "lat": 48.8985
    }
  },
  "livry-gargan": {
    "officialName": "Livry-Gargan",
    "population": 47228,
    "surfaceHa": 736.74,
    "limitrophes": [
      {
        "code": "93005",
        "nom": "Aulnay-sous-Bois"
      },
      {
        "code": "93014",
        "nom": "Clichy-sous-Bois"
      },
      {
        "code": "93015",
        "nom": "Coubron"
      },
      {
        "code": "93062",
        "nom": "Le Raincy"
      },
      {
        "code": "93057",
        "nom": "Les Pavillons-sous-Bois"
      },
      {
        "code": "93071",
        "nom": "Sevran"
      },
      {
        "code": "93074",
        "nom": "Vaujours"
      }
    ],
    "route": {
      "distanceKm": 18.5,
      "durationMin": 25
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.5365,
      "lat": 48.9191
    }
  },
  "sevran": {
    "officialName": "Sevran",
    "population": 52535,
    "surfaceHa": 725.61,
    "limitrophes": [
      {
        "code": "93005",
        "nom": "Aulnay-sous-Bois"
      },
      {
        "code": "93046",
        "nom": "Livry-Gargan"
      },
      {
        "code": "93074",
        "nom": "Vaujours"
      },
      {
        "code": "93078",
        "nom": "Villepinte"
      }
    ],
    "route": {
      "distanceKm": 19.8,
      "durationMin": 28
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.5258,
      "lat": 48.9395
    }
  },
  "drancy": {
    "officialName": "Drancy",
    "population": 72390,
    "surfaceHa": 776.13,
    "limitrophes": [
      {
        "code": "93008",
        "nom": "Bobigny"
      },
      {
        "code": "93010",
        "nom": "Bondy"
      },
      {
        "code": "93027",
        "nom": "La Courneuve"
      },
      {
        "code": "93007",
        "nom": "Le Blanc-Mesnil"
      },
      {
        "code": "93013",
        "nom": "Le Bourget"
      }
    ],
    "route": {
      "distanceKm": 16.3,
      "durationMin": 23
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.445,
      "lat": 48.9233
    }
  },
  "le-blanc-mesnil": {
    "officialName": "Le Blanc-Mesnil",
    "population": 62376,
    "surfaceHa": 807.79,
    "limitrophes": [
      {
        "code": "93005",
        "nom": "Aulnay-sous-Bois"
      },
      {
        "code": "93010",
        "nom": "Bondy"
      },
      {
        "code": "95088",
        "nom": "Bonneuil-en-France"
      },
      {
        "code": "93029",
        "nom": "Drancy"
      },
      {
        "code": "93030",
        "nom": "Dugny"
      },
      {
        "code": "95277",
        "nom": "Gonesse"
      },
      {
        "code": "93013",
        "nom": "Le Bourget"
      }
    ],
    "route": {
      "distanceKm": 18.3,
      "durationMin": 24
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.4637,
      "lat": 48.9388
    }
  },
  "epinay-sur-seine": {
    "officialName": "Épinay-sur-Seine",
    "population": 52833,
    "surfaceHa": 457.59,
    "limitrophes": [
      {
        "code": "95018",
        "nom": "Argenteuil"
      },
      {
        "code": "95197",
        "nom": "Deuil-la-Barre"
      },
      {
        "code": "95210",
        "nom": "Enghien-les-Bains"
      },
      {
        "code": "93039",
        "nom": "L'Île-Saint-Denis"
      },
      {
        "code": "95427",
        "nom": "Montmagny"
      },
      {
        "code": "93066",
        "nom": "Saint-Denis"
      },
      {
        "code": "95555",
        "nom": "Saint-Gratien"
      },
      {
        "code": "93079",
        "nom": "Villetaneuse"
      }
    ],
    "route": {
      "distanceKm": 15.3,
      "durationMin": 31
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3134,
      "lat": 48.9515
    }
  },
  "l-hay-les-roses": {
    "officialName": "L'Haÿ-les-Roses",
    "population": 31188,
    "surfaceHa": 389.56,
    "limitrophes": [
      {
        "code": "92002",
        "nom": "Antony"
      },
      {
        "code": "92014",
        "nom": "Bourg-la-Reine"
      },
      {
        "code": "94016",
        "nom": "Cachan"
      },
      {
        "code": "94021",
        "nom": "Chevilly-Larue"
      },
      {
        "code": "94034",
        "nom": "Fresnes"
      },
      {
        "code": "94076",
        "nom": "Villejuif"
      }
    ],
    "route": {
      "distanceKm": 11.7,
      "durationMin": 21
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3374,
      "lat": 48.7792
    }
  },
  "thiais": {
    "officialName": "Thiais",
    "population": 32918,
    "surfaceHa": 642.45,
    "limitrophes": [
      {
        "code": "94021",
        "nom": "Chevilly-Larue"
      },
      {
        "code": "94022",
        "nom": "Choisy-le-Roi"
      },
      {
        "code": "94054",
        "nom": "Orly"
      },
      {
        "code": "94065",
        "nom": "Rungis"
      },
      {
        "code": "94081",
        "nom": "Vitry-sur-Seine"
      }
    ],
    "route": {
      "distanceKm": 12.6,
      "durationMin": 19
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.391,
      "lat": 48.7642
    }
  },
  "choisy-le-roi": {
    "officialName": "Choisy-le-Roi",
    "population": 45946,
    "surfaceHa": 542.14,
    "limitrophes": [
      {
        "code": "94002",
        "nom": "Alfortville"
      },
      {
        "code": "94028",
        "nom": "Créteil"
      },
      {
        "code": "94054",
        "nom": "Orly"
      },
      {
        "code": "94073",
        "nom": "Thiais"
      },
      {
        "code": "94074",
        "nom": "Valenton"
      },
      {
        "code": "94078",
        "nom": "Villeneuve-Saint-Georges"
      },
      {
        "code": "94081",
        "nom": "Vitry-sur-Seine"
      }
    ],
    "route": {
      "distanceKm": 13.1,
      "durationMin": 20
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.4095,
      "lat": 48.7624
    }
  },
  "orly": {
    "officialName": "Orly",
    "population": 24658,
    "surfaceHa": 669.04,
    "limitrophes": [
      {
        "code": "94022",
        "nom": "Choisy-le-Roi"
      },
      {
        "code": "91479",
        "nom": "Paray-Vieille-Poste"
      },
      {
        "code": "94073",
        "nom": "Thiais"
      },
      {
        "code": "94077",
        "nom": "Villeneuve-le-Roi"
      },
      {
        "code": "94078",
        "nom": "Villeneuve-Saint-Georges"
      }
    ],
    "route": {
      "distanceKm": 15.4,
      "durationMin": 23
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.4006,
      "lat": 48.7431
    }
  },
  "fresnes": {
    "officialName": "Fresnes",
    "population": 29528,
    "surfaceHa": 355.15,
    "limitrophes": [
      {
        "code": "92002",
        "nom": "Antony"
      },
      {
        "code": "94021",
        "nom": "Chevilly-Larue"
      },
      {
        "code": "94038",
        "nom": "L'Haÿ-les-Roses"
      },
      {
        "code": "94065",
        "nom": "Rungis"
      },
      {
        "code": "91689",
        "nom": "Wissous"
      }
    ],
    "route": {
      "distanceKm": 16.6,
      "durationMin": 23
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.322,
      "lat": 48.7551
    }
  },
  "cachan": {
    "officialName": "Cachan",
    "population": 31103,
    "surfaceHa": 278.72,
    "limitrophes": [
      {
        "code": "94003",
        "nom": "Arcueil"
      },
      {
        "code": "92007",
        "nom": "Bagneux"
      },
      {
        "code": "92014",
        "nom": "Bourg-la-Reine"
      },
      {
        "code": "94038",
        "nom": "L'Haÿ-les-Roses"
      },
      {
        "code": "94076",
        "nom": "Villejuif"
      }
    ],
    "route": {
      "distanceKm": 10.2,
      "durationMin": 20
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3341,
      "lat": 48.7946
    }
  },
  "arcueil": {
    "officialName": "Arcueil",
    "population": 22200,
    "surfaceHa": 233.47,
    "limitrophes": [
      {
        "code": "92007",
        "nom": "Bagneux"
      },
      {
        "code": "94016",
        "nom": "Cachan"
      },
      {
        "code": "94037",
        "nom": "Gentilly"
      },
      {
        "code": "94043",
        "nom": "Le Kremlin-Bicêtre"
      },
      {
        "code": "92049",
        "nom": "Montrouge"
      },
      {
        "code": "94076",
        "nom": "Villejuif"
      }
    ],
    "route": {
      "distanceKm": 8.8,
      "durationMin": 17
    },
    "computedOn": "2026-10-01",
    "mairie": {
      "lng": 2.3369,
      "lat": 48.806
    }
  }
};
