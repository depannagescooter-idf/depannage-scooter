import type { GuideAuthor } from "./types";

export interface GuideSection {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  shortAnswer: string;
  intro: string;
  sections: GuideSection[];
  author: GuideAuthor;
  publishedAt: string;
}

export const guides: Guide[] = [
  {
    slug: "scooter-ne-demarre-plus",
    title: "Mon scooter ne démarre plus : 6 causes et quoi faire",
    metaTitle: "Scooter ne démarre plus : causes et solutions",
    metaDescription:
      "Scooter qui ne démarre plus ? 6 causes fréquentes, vérifications immédiates et quand appeler un dépanneur en Île-de-France. Guide pratique 2026.",
    shortAnswer:
      "Un scooter qui ne démarre plus vient souvent de la batterie, d'un contact coupé, d'une bougie ou d'un carburant inadapté. Vérifiez le kill switch et le niveau d'essence avant d'appeler. Si le démarreur ne tourne pas, un dépannage sur place ou un remorquage est nécessaire.",
    intro:
      "Vous tournez la clé ou appuyez sur le bouton de démarrage : rien. Pas de bruit, ou seulement un clic. Avant de paniquer, voici les causes les plus fréquentes sur scooter 50 à 125 en milieu urbain, et la marche à suivre selon les symptômes.",
    sections: [
      {
        question: "La batterie est-elle la cause la plus fréquente ?",
        answer:
          "Oui, surtout après une immobilisation ou en hiver. Symptômes : tableau éteint, démarreur faible ou absent. Un test de tension et un booster peuvent suffire. Au-delà de trois ans, le remplacement est souvent la solution durable.",
      },
      {
        question: "Le kill switch ou le side stand peuvent-ils bloquer le démarrage ?",
        answer:
          "Oui. Vérifiez que l'interrupteur d'arrêt d'urgence est en position marche et que le béquille latérale est relevée sur les modèles équipés. Ces sécurités coupent le contact sans message d'erreur explicite.",
      },
      {
        question: "Quand suspecter une panne d'allumage ou de carburant ?",
        answer:
          "Le démarreur tourne mais le moteur ne prend pas : bougie encrassée, essence stale ou mélange 2 temps incorrect. Sur injection, un voyant moteur peut clignoter. Ne forcez pas le démarrage répété : vous risquez d'inonder le moteur.",
      },
      {
        question: "Faut-il tenter un démarrage aux pushées ?",
        answer:
          "Uniquement si vous maîtrisez la manœuvre et que le scoot est léger. Sur maxi-scooter ou en côte, c'est dangereux. Mieux vaut un booster ou un dépannage professionnel.",
      },
      {
        question: "Quand appeler un dépanneur ?",
        answer:
          "Si le démarreur ne répond pas après vérification batterie et kill switch, ou si vous entendez un grincement anormal. En Île-de-France, un dépanneur peut tester sur place et remorquer si nécessaire.",
      },
    ],
    author: { name: "Équipe DépannageScooter", role: "Dépannage deux-roues IDF", experienceYears: 8 },
    publishedAt: "2026-03-01",
  },
  {
    slug: "prix-remorquage-moto-idf",
    title: "Combien coûte un remorquage de moto en Île-de-France ?",
    metaTitle: "Prix remorquage moto Île-de-France 2026",
    metaDescription:
      "Tarifs remorquage moto et scooter en IDF : paliers kilométriques, dépannage 50 € + déplacement. Majorations nuit et week-end. Grille transparente.",
    shortAnswer:
      "En Île-de-France, le remorquage est facturé par paliers de distance (0–5 km, 5–10 km, 10–15 km, 15–20 km, puis sur devis). Le dépannage sur place coûte 50 € + un forfait de déplacement selon la zone. Consultez la page tarifs pour la grille à jour.",
    intro:
      "Le prix d'un remorquage dépend de la distance entre le lieu de panne et la destination, de l'horaire et de la difficulté d'accès. Voici comment lire la grille et éviter les mauvaises surprises.",
    sections: [
      {
        question: "Comment est calculé le dépannage sur place ?",
        answer:
          "Toutes les prestations (crevaison, batterie, booster, essence, selle) sont facturées 50 € TTC, auxquels s'ajoute un forfait de déplacement : 20 € à Paris, 30 € en petite couronne (92, 93, 94) et 40 € en grande couronne (77, 78, 91, 95).",
      },
      {
        question: "Quels paliers pour le remorquage ?",
        answer:
          "Le tarif dépend de la distance totale panne → destination : 0–5 km, 5–10 km, 10–15 km, 15–20 km, puis sur devis au-delà de 20 km. La distance retenue est celle du trajet réel.",
      },
      {
        question: "Quelles majorations prévoir ?",
        answer:
          "Nuit (20h–8h), week-end et jours fériés : +30 à +50 % selon les prestataires. Sous-sol, Neiman bloqué ou moto accidentée : supplément fixe fréquent.",
      },
      {
        question: "L'assurance prend-elle en charge le remorquage ?",
        answer:
          "Beaucoup de contrats moto incluent une assistance. Vérifiez le numéro sur votre attestation avant de payer. Sinon, conservez la facture pour un éventuel remboursement partiel.",
      },
    ],
    author: { name: "Équipe DépannageScooter", role: "Dépannage deux-roues IDF", experienceYears: 8 },
    publishedAt: "2026-03-05",
  },
  {
    slug: "batterie-scooter-duree-vie",
    title: "Batterie de scooter : durée de vie, symptômes, remplacement",
    metaTitle: "Batterie scooter : durée de vie et remplacement",
    metaDescription:
      "Durée de vie d'une batterie de scooter, signes de faiblesse et remplacement sur place en IDF. Conseils entretien et quand appeler un dépanneur.",
    shortAnswer:
      "Une batterie de scooter dure en moyenne 2 à 4 ans selon l'usage. Signes de fin de vie : démarrage lent, feux faibles, batterie qui se décharge en quelques jours d'immobilisation. Un test sur place confirme si booster ou remplacement est nécessaire.",
    intro:
      "La batterie est la première cause de panne sur scooter urbain. Comprendre son usure évite de rester bloqué devant chez soi ou au travail.",
    sections: [
      {
        question: "Quels signes indiquent une batterie faible ?",
        answer:
          "Démarreur qui peine, clignotants plus lents à l'arrêt, tableau qui s'éteint, besoin de booster régulier. Un multimètre à 12,6 V moteur coupé indique une charge correcte ; en dessous de 12 V, la batterie est souvent HS.",
      },
      {
        question: "L'immobilisation tue-t-elle la batterie ?",
        answer:
          "Oui. Plusieurs semaines sans rouler, surtout en hiver, sulfatent les plaques. Un maintien de charge ou un tour de roue hebdomadaire prolonge la durée de vie.",
      },
      {
        question: "Booster ou remplacement ?",
        answer:
          "Un booster suffit si la batterie est jeune et juste déchargée. Si elle a plus de trois ans ou gonfle, le remplacement est préférable. Nous installons la référence adaptée sur place.",
      },
    ],
    author: { name: "Équipe DépannageScooter", role: "Dépannage deux-roues IDF", experienceYears: 8 },
    publishedAt: "2026-03-10",
  },
  {
    slug: "crevaison-scooter-reparer-ou-remorquer",
    title: "Crevaison en scooter : réparer sur place ou remorquer ?",
    metaTitle: "Crevaison scooter : réparer ou remorquer ?",
    metaDescription:
      "Crevaison scooter en route : réparation sur place ou remorquage ? Critères de décision, sécurité et tarification en Île-de-France.",
    shortAnswer:
      "Une crevaison réparable sur place concerne les pneus tubeless avec objet retirable et talon intact. Roue à rayons, pneu déchiré ou sans kit : remorquage vers un professionnel. Ne roulez jamais sur un pneu à plat.",
    intro:
      "Clac, direction qui tire, roue molle. La crevaison est la panne la plus fréquente en ville. Voici comment trancher entre réparation rapide et remorquage.",
    sections: [
      {
        question: "Quand réparer sur place ?",
        answer:
          "Pneu tubeless, perforation centrale par clou ou vis, pas de déchirure latérale. Nous gonflons, réparons à froid ou chaud selon la norme, et testons l'étanchéité.",
      },
      {
        question: "Quand remorquer ?",
        answer:
          "Jante voilée, pneu HS, deux crevaisons, ou scooter sans roue de secours utilisable. Le garage posera un pneu neuf ou une chambre à air.",
      },
      {
        question: "Comment sécuriser le lieu de panne ?",
        answer:
          "Feux de détresse, gilet si disponible, scooter sur le trottoir si possible. Sur chaussée, restez visible et éloigné du trafic en attendant le dépanneur.",
      },
    ],
    author: { name: "Équipe DépannageScooter", role: "Dépannage deux-roues IDF", experienceYears: 8 },
    publishedAt: "2026-03-12",
  },
  {
    slug: "apres-chute-moto-demarches",
    title: "Après une chute à moto : constat, remorquage, assurance",
    metaTitle: "Après une chute moto : démarches et remorquage",
    metaDescription:
      "Que faire après une chute à moto ? Sécurité, constat, photos, remorquage et déclaration assurance. Guide pratique en Île-de-France.",
    shortAnswer:
      "Après une chute, priorité à la sécurité et aux blessures. Ne déplacez pas la moto si les forces de l'ordre interviennent. Photographiez les dégâts, notez les témoins, puis organisez le remorquage vers un lieu sécurisé avant la déclaration assurance.",
    intro:
      "Une chute ou un accrochage laisse souvent la moto inroulable. Les démarches dans l'heure qui suit conditionnent l'indemnisation et la réparation.",
    sections: [
      {
        question: "Quelle est la priorité immédiate ?",
        answer:
          "Votre santé et celle des autres. Appelez le 15 ou le 112 si besoin. Balisez la zone, coupez le contact, éloignez-vous du trafic si la moto est sur la chaussée.",
      },
      {
        question: "Faut-il remorquer immédiatement ?",
        answer:
          "Si la moto gêne la circulation ou risque un second impact, les autorités peuvent imposer l'enlèvement. Sinon, attendez leur accord. Nous remorquons vers domicile, garage ou expert selon votre assurance.",
      },
      {
        question: "Quels documents pour l'assurance ?",
        answer:
          "Photos des dégâts, constat amiable ou procès-verbal police, facture de remorquage, certificat médical si blessure. Déclarez sous 5 jours ouvrés en général.",
      },
    ],
    author: { name: "Équipe DépannageScooter", role: "Dépannage deux-roues IDF", experienceYears: 8 },
    publishedAt: "2026-03-15",
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
