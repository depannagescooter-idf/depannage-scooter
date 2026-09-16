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
    author: { name: "Équipe DépannageScooter", role: "Dépannage deux-roues Île-de-France", experienceYears: 8 },
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
    author: { name: "Équipe DépannageScooter", role: "Dépannage deux-roues Île-de-France", experienceYears: 8 },
    publishedAt: "2026-03-05",
  },
  {
    slug: "batterie-scooter-duree-vie",
    title: "Batterie de scooter : durée de vie, symptômes, remplacement",
    metaTitle: "Batterie scooter : durée de vie et remplacement",
    metaDescription:
      "Durée de vie d'une batterie de scooter, signes de faiblesse et remplacement sur place en Île-de-France. Conseils entretien et quand appeler un dépanneur.",
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
    author: { name: "Équipe DépannageScooter", role: "Dépannage deux-roues Île-de-France", experienceYears: 8 },
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
    author: { name: "Équipe DépannageScooter", role: "Dépannage deux-roues Île-de-France", experienceYears: 8 },
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
    author: { name: "Équipe DépannageScooter", role: "Dépannage deux-roues Île-de-France", experienceYears: 8 },
    publishedAt: "2026-03-15",
  },
  {
    slug: "demarreur-tourne-pas-scooter",
    title: "Scooter : le démarreur ne tourne pas — que vérifier ?",
    metaTitle: "Scooter démarreur ne tourne pas : diagnostic",
    metaDescription:
      "Le démarreur de votre scooter ne tourne pas du tout ? Causes (batterie, kill switch, fusible) et quand appeler un dépanneur en Île-de-France.",
    shortAnswer:
      "Si le démarreur ne tourne pas, vérifiez le kill switch, la batterie et le fusible principal. Un clic sec sans rotation indique souvent une batterie à plat ou un mauvais contact. Ne forcez pas : un booster ou un remplacement batterie sur place peut suffire.",
    intro:
      "Aucun bruit au démarrage, ou seulement un clic : la panne est électrique dans la majorité des cas. Voici comment trier les causes avant d'appeler un dépanneur.",
    sections: [
      {
        question: "Le kill switch ou la béquille bloquent-ils le contact ?",
        answer:
          "Vérifiez l'interrupteur d'arrêt d'urgence et la béquille latérale. Sur de nombreux scooters, le contact est coupé sans message visible au tableau de bord.",
      },
      {
        question: "Comment tester une batterie faible ?",
        answer:
          "Tableau de bord faible, clignotants lents ou démarreur qui clique une fois : la batterie est probablement à plat. Un booster professionnel ou un remplacement sur place règle le problème dans la plupart des cas.",
      },
      {
        question: "Quand suspecter le démarreur ou le fusible ?",
        answer:
          "Batterie chargée mais aucun bruit : fusible principal ou relais de démarreur. Ne répétez pas les tentatives — vous risquez de griller le relais. Un dépanneur teste sur place.",
      },
    ],
    author: { name: "Équipe DépannageScooter", role: "Dépannage deux-roues Île-de-France", experienceYears: 8 },
    publishedAt: "2026-04-01",
  },
  {
    slug: "demarreur-tourne-scooter-ne-demarre-pas",
    title: "Scooter : le démarreur tourne mais le moteur ne prend pas",
    metaTitle: "Scooter démarreur tourne sans prise : causes",
    metaDescription:
      "Le démarreur tourne mais le scooter ne démarre pas ? Essence, bougie, injection : diagnostic et dépannage en Île-de-France.",
    shortAnswer:
      "Le démarreur qui tourne sans que le moteur ne prenne indique souvent une panne d'allumage, d'essence ou d'injection. Vérifiez le niveau de carburant et évitez les démarrages répétés qui noient le moteur.",
    intro:
      "Le moteur crache ou tourne sans démarrer : la batterie n'est pas en cause. Il faut identifier si le problème vient du carburant, de la bougie ou de l'injection.",
    sections: [
      {
        question: "Une panne d'essence est-elle probable ?",
        answer:
          "Réservoir vide, robinet fermé ou essence stale (immobilisation prolongée) : le moteur tourne à vide. Sur 2 temps, vérifiez aussi le mélange huile/essence.",
      },
      {
        question: "Bougie ou injection : que suspecter ?",
        answer:
          "Bougie encrassée ou bougie de préchauffage défaillante sur diesel-like 125. Sur injection, un voyant moteur peut clignoter. Ne forcez pas plus de trois tentatives consécutives.",
      },
      {
        question: "Faut-il remorquer ?",
        answer:
          "Si le moteur ne prend pas après vérifications simples, un remorquage vers un garage évite d'aggraver la panne. En Île-de-France, un plateau sécurise le véhicule.",
      },
    ],
    author: { name: "Équipe DépannageScooter", role: "Dépannage deux-roues Île-de-France", experienceYears: 8 },
    publishedAt: "2026-04-02",
  },
  {
    slug: "assurance-remorquage-moto-rembourse",
    title: "L'assurance rembourse-t-elle le remorquage moto ?",
    metaTitle: "Assurance remorquage moto : assistance 0 km",
    metaDescription:
      "Le remorquage moto est-il pris en charge par l'assurance ? Assistance 0 km, franchise, facture détaillée — guide pratique.",
    shortAnswer:
      "De nombreux contrats moto et auto incluent une assistance 0 km (dépannage sur place ou remorquage). Consultez votre attestation, appelez l'assistance de l'assureur, puis conservez la facture détaillée pour remboursement.",
    intro:
      "Après une panne ou un accident, la question du remboursement arrive vite. Voici comment vérifier votre garantie et constituer le dossier.",
    sections: [
      {
        question: "L'assistance 0 km couvre-t-elle le remorquage moto ?",
        answer:
          "Oui sur de nombreux contrats moto et sur certains contrats auto. La garantie précise souvent une distance maximale et les types d'intervention (sur place, remorquage vers garage agréé).",
      },
      {
        question: "Faut-il payer d'abord sur place ?",
        answer:
          "Souvent oui, puis remboursement sur facture. DépannageScooter fournit une facture détaillée avec kilométrage, prestation et montant TTC pour votre dossier.",
      },
      {
        question: "La franchise s'applique-t-elle au remorquage ?",
        answer:
          "Selon le contrat, une franchise peut s'appliquer ou l'assistance est intégrale. Vérifiez les plafonds annuels avant de refuser une intervention.",
      },
    ],
    author: { name: "Équipe DépannageScooter", role: "Dépannage deux-roues Île-de-France", experienceYears: 8 },
    publishedAt: "2026-04-03",
  },
  {
    slug: "batterie-moto-hiver-redemarrer",
    title: "Batterie moto à plat en hiver : prévenir et redémarrer",
    metaTitle: "Batterie moto hiver : prévention et dépannage",
    metaDescription:
      "Batterie moto qui lâche en hiver ? Causes du froid, entretien, booster et remplacement en Île-de-France.",
    shortAnswer:
      "Le froid réduit la capacité des batteries plomb et AGM. Un scooter ou une moto peu utilisés en hiver démarrent mal ou plus du tout. Un booster ou un remplacement sur place suffit souvent ; un chargeur maintien prévient la panne.",
    intro:
      "Les baisses de température accentuent la décharge des batteries deux-roues. Voici comment réagir et limiter la récidive.",
    sections: [
      {
        question: "Pourquoi la batterie lâche-t-elle en hiver ?",
        answer:
          "Le froid augmente la viscosité interne de la batterie et réduit son courant disponible. Les trajets courts n'rechargent pas suffisamment l'alternateur.",
      },
      {
        question: "Booster ou remplacement ?",
        answer:
          "Un booster permet parfois de repartir si la batterie est jeune. Au-delà de 3–4 ans ou si la batterie ne tient plus la charge, le remplacement est plus fiable.",
      },
      {
        question: "Comment prévenir la panne ?",
        answer:
          "Chargeur maintien connecté en hiver, trajet long une fois par semaine, ou déconnexion de la borne si immobilisation prolongée. Évitez les démarrages répétés à froid.",
      },
    ],
    author: { name: "Équipe DépannageScooter", role: "Dépannage deux-roues Île-de-France", experienceYears: 8 },
    publishedAt: "2026-04-04",
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
