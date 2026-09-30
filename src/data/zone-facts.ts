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
  "meaux": "77284",
  "melun": "77288",
  "chelles": "77108",
  "pontault-combault": "77373",
  "savigny-le-temple": "77445",
  "fontainebleau": "77186",
  "torcy": "77468",
  "lagny-sur-marne": "77243",
  "brie-comte-robert": "77053",
  "combs-la-ville": "77122",
  "lieusaint": "77251",
  "ozoir-la-ferriere": "77350",
  "roissy-en-brie": "77390",
  "dammarie-les-lys": "77152",
  "provins": "77379",
  "versailles": "78646",
  "saint-germain-en-laye": "78551",
  "poissy": "78498",
  "conflans-sainte-honorine": "78172",
  "mantes-la-jolie": "78361",
  "sartrouville": "78586",
  "houilles": "78311",
  "montigny-le-bretonneux": "78423",
  "trappes": "78621",
  "rambouillet": "78517",
  "plaisir": "78490",
  "les-mureaux": "78440",
  "chatou": "78146",
  "le-chesnay-rocquencourt": "78158",
  "guyancourt": "78297",
  "evry-courcouronnes": "91228",
  "massy": "91377",
  "palaiseau": "91477",
  "corbeil-essonnes": "91174",
  "savigny-sur-orge": "91589",
  "athis-mons": "91027",
  "viry-chatillon": "91687",
  "grigny": "91286",
  "bretigny-sur-orge": "91103",
  "sainte-genevieve-des-bois": "91549",
  "longjumeau": "91345",
  "les-ulis": "91692",
  "yerres": "91691",
  "draveil": "91201",
  "montgeron": "91421",
  "argenteuil": "95018",
  "cergy": "95127",
  "sarcelles": "95585",
  "garges-les-gonesse": "95268",
  "franconville": "95252",
  "ermont": "95219",
  "montmorency": "95428",
  "enghien-les-bains": "95210",
  "goussainville": "95280",
  "taverny": "95607",
  "bezons": "95063",
  "herblay-sur-seine": "95306",
  "pontoise": "95500",
  "gonesse": "95277",
  "roissy-en-france": "95527",
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
    "computedOn": "2026-09-30"
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
    "computedOn": "2026-09-30"
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
    "computedOn": "2026-09-30"
  }
};
