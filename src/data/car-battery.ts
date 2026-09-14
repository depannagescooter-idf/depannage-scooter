import type { Faq } from "./types";

export const carBatteryPage = {
  slug: "batterie-voiture",
  path: "/depannage-sur-place/batterie-voiture/",
  metaTitle: "Dépannage batterie voiture à domicile — Paris & IDF 24h/24",
  metaDescription:
    "Batterie de voiture à plat ? Démarrage sur place ou remplacement à domicile en Île-de-France, 24h/24. Devis ferme avant déplacement. Appelez le 07 72 12 53 11.",
  h1: "Dépannage et remplacement de batterie voiture à domicile, Paris et Île-de-France",
  shortAnswer:
    "Votre voiture ne démarre plus : batterie à plat, démarreur qui claque ou tableau de bord éteint. DépannageScooter intervient sur place 24h/24 en Île-de-France — rue, parking ou devant chez vous. Démarrage au booster ou remplacement de batterie après test. Devis ferme confirmé par téléphone avant départ.",
  highlights: [
    "Intervention 24h/24, 7j/7, week-ends et jours fériés",
    "Devis ferme avant déplacement",
    "Paiement CB ou espèces sur place",
    "Test batterie et alternateur sur place",
  ],
  signs: [
    {
      title: "Le démarreur tourne au ralenti puis s'arrête",
      detail: "La batterie n'a plus assez de courant pour lancer le moteur.",
    },
    {
      title: "Claquement répété au contact, moteur immobile",
      detail: "Le relais du démarreur s'enclenche mais la tension s'effondre.",
    },
    {
      title: "Tableau de bord éteint, condamnation centralisée morte",
      detail: "Décharge profonde de la batterie 12 V.",
    },
    {
      title: "Voyant batterie allumé en roulant",
      detail:
        "Le problème vient souvent de l'alternateur, pas de la batterie. Un remplacement seul ne suffirait pas : diagnostic sur place.",
    },
    {
      title: "Démarre après charge puis retombe à plat",
      detail: "Batterie en fin de vie, ou consommateur actif moteur coupé.",
    },
  ],
  decision: {
    boost: {
      title: "Démarrage au booster",
      detail:
        "Batterie déchargée mais saine : veilleuses oubliées, trajet trop court, immobilisation prolongée, grand froid. Nous relançons avec un booster professionnel, sans pinces sur un autre véhicule. Roulez ensuite au moins 20 minutes pour que l'alternateur recharge.",
    },
    replacement: {
      title: "Remplacement",
      detail:
        "La batterie ne tient plus la charge : tension qui s'effondre au test, batterie de plus de 4 à 5 ans, décharges profondes répétées. Un booster ne ferait que repousser la panne. Remplacement sur place — batterie fournie selon stock ou pose d'une batterie que vous avez achetée.",
    },
  },
  replacementSteps: [
    "Test de la batterie et de la charge de l'alternateur",
    "Dépose de l'ancienne batterie, nettoyage des cosses",
    "Pose et serrage de la batterie neuve",
    "Vérification du démarrage et de la tension de charge",
    "Reprise et recyclage de l'ancienne batterie (selon disponibilité)",
  ],
  batteryTypes:
    "Toutes les voitures ne prennent pas la même batterie. Sur un véhicule start-stop, une batterie classique au plomb s'use en quelques mois : il faut une EFB ou une AGM selon le constructeur. Sur de nombreux modèles récents, la batterie neuve doit être déclarée au calculateur (BSI, BMS) pour que le système de charge adapte son cycle. Indiquez marque, modèle et année lors de l'appel.",
  durationMinutes: "30 à 45",
  topZones: [
    { slug: "paris-11e", name: "Paris 11e" },
    { slug: "paris-15e", name: "Paris 15e" },
    { slug: "paris-20e", name: "Paris 20e" },
    { slug: "boulogne-billancourt", name: "Boulogne-Billancourt" },
    { slug: "nanterre", name: "Nanterre" },
    { slug: "montreuil", name: "Montreuil" },
    { slug: "vincennes", name: "Vincennes" },
    { slug: "issy-les-moulineaux", name: "Issy-les-Moulineaux" },
    { slug: "neuilly-sur-seine", name: "Neuilly-sur-Seine" },
    { slug: "creteil", name: "Créteil" },
    { slug: "levallois-perret", name: "Levallois-Perret" },
    { slug: "saint-denis", name: "Saint-Denis" },
  ],
  vehicles: [
    "Citadines et berlines",
    "SUV et crossovers",
    "Utilitaires légers jusqu'à 3,5 t",
    "Véhicules start-stop (EFB / AGM)",
  ],
  faqs: [
    {
      question: "Intervenez-vous en parking souterrain ?",
      answer:
        "Oui, sous réserve d'accès (badge, hauteur sous plafond, rampe). Précisez le niveau et la hauteur lors de l'appel. Un supplément pénibilité peut s'appliquer selon la complexité d'accès.",
    },
    {
      question: "Faut-il que je fournisse la batterie ?",
      answer:
        "Nous pouvons fournir la batterie sur place selon disponibilité stock, ou poser une batterie que vous avez déjà achetée (main-d'œuvre uniquement). Indiquez marque, modèle et année lors de l'appel.",
    },
    {
      question: "Ma voiture est en start-stop, pouvez-vous intervenir ?",
      answer:
        "Oui. Ces véhicules demandent une batterie EFB ou AGM et, sur de nombreux modèles, une déclaration au calculateur. Communiquez marque, modèle et année : nous confirmons la faisabilité avant déplacement.",
    },
    {
      question: "Et si le problème vient de l'alternateur et pas de la batterie ?",
      answer:
        "Nous le détectons au test sur place. Un remplacement de batterie ne réglerait pas le problème : nous vous orientons vers un garage partenaire. Nous ne remorquons pas les voitures.",
    },
    {
      question: "Mon assurance peut-elle prendre en charge le dépannage ?",
      answer:
        "De nombreux contrats auto incluent une assistance 0 km. Consultez votre attestation ou appelez l'assistance de votre assureur avant de payer. Nous fournissons une facture détaillée pour votre dossier.",
    },
    {
      question: "Quels véhicules prenez-vous en charge ?",
      answer:
        "Citadines, berlines, SUV et utilitaires légers jusqu'à 3,5 t. Hors gabarit ou véhicules électriques (pack traction) : contactez-nous pour orienter la prise en charge.",
    },
  ] satisfies Faq[],
} as const;
