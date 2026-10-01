import type { Faq } from "./types";

export const carTirePage = {
  path: "/depannage-voiture/pneu/",
  metaTitle: "Pneu crevé voiture : réparation sur place 24h/24",
  metaDescription:
    "Pneu crevé ou roue à plat en voiture : mèche ou changement de pneu sur place, puis contrôle de pression. Devis ferme avant le déplacement, 24h/24.",
  h1: "Pneu crevé, roue à plat ou pneu à plat : dépannage voiture sur place",
  intro:
    "Un pneu crevé immobilise la voiture au bord de la rue, dans un parking ou devant chez vous. DépannageScooter intervient sur place : réparation quand la perforation le permet, ou changement de roue et montage sur place. Le devis est confirmé par téléphone avant le déplacement. Il n'y a pas de remorquage automobile.",
  symptomsTitle: "Pneu crevé, roue à plat, pneu à plat : quels signes ?",
  symptoms: [
    "Le pneu est visiblement à plat, ou la voiture tire d'un côté.",
    "Un claquement ou un bruit de roulement est apparu juste avant l'arrêt.",
    "Un clou, une vis ou un débris est planté dans la bande de roulement.",
    "La pression tombe en quelques minutes : roue à plat, pas une simple perte lente.",
    "La jante a cogné un trottoir et le pneu s'est déchiré sur le flanc.",
  ],
  stepsTitle: "Comment se déroule l'intervention ?",
  steps: [
    {
      title: "Localisation de la perforation",
      detail:
        "Le technicien cherche le trou : bande de roulement, épaule ou flanc. Un objet encore planté indique souvent une perforation réparable. Une déchirure du flanc ou une jante voilée oriente vers un changement de roue, pas vers une mèche.",
    },
    {
      title: "Mèche, ou changement de roue",
      detail:
        "Si la perforation est petite et dans la bande de roulement, une mèche est posée par l'extérieur, roue en place, quand l'accès le permet. Si la mèche est impossible, le technicien démonte la roue et monte le pneu de secours, ou un pneu que vous avez déjà, sur place. Le changement de pneu complet n'est fait que dans ce second cas.",
    },
    {
      title: "Contrôle de la pression",
      detail:
        "Après la mèche ou le montage, le pneu est regonflé et la pression est contrôlée. Un passage à l'eau savonneuse vérifie qu'il ne reste pas de fuite avant de vous laisser repartir.",
    },
  ],
  paragraphs: [
    "La demande la plus fréquente est un pneu crevé en ville, sans roue de secours accessible ou sans cric adapté. Le changement de roue sur place évite de laisser la voiture. Quand la roue de secours est absente ou elle-même à plat, la mèche est la première solution si la perforation s'y prête. Un pneu à plat depuis longtemps, roulé ainsi, abîme souvent le flanc : la mèche ne suffit plus, et le changement de pneu devient nécessaire.",
    "Le déroulé tient en trois temps, toujours les mêmes. D'abord la localisation de la perforation, pour ne pas poser une mèche sur un flanc. Ensuite la réparation : mèche sans démontage quand c'est possible, sinon changement de roue et montage sur place. Enfin le contrôle de la pression, pour repartir avec un pneu qui tient. Rien de tout cela n'est un remorquage : la voiture reste où elle est.",
    "Appelez avant de rouler sur la jante. Donnez la marque, le modèle, et si une roue de secours ou une galette est dans le coffre. Dites aussi si le pneu est crevé à l'avant ou à l'arrière, et si vous voyez un objet. Ces précisions permettent de confirmer le devis et le matériel à emporter. Le déplacement ne part qu'après votre accord.",
  ],
  priceTitle: "Tarif",
  priceText:
    "Il n'y a pas de forfait pneu voiture publié dans la grille : le montant dépend de l'opération, mèche ou changement de roue, et du déplacement. Le devis est ferme, confirmé par téléphone avant tout déplacement. Aucune intervention ne commence sans votre accord. Le paiement se fait sur place, par carte bancaire ou en espèces. Les majorations de nuit, de week-end et de jour férié, lorsqu'elles s'appliquent, sont annoncées dans le même appel.",
  faqs: [
    {
      question: "Réparez-vous un pneu crevé sans démonter la roue ?",
      answer:
        "Oui, quand la perforation est dans la bande de roulement et que la mèche peut être posée par l'extérieur. Le démontage et le changement de roue concernent les cas où la mèche est impossible.",
    },
    {
      question: "Que se passe-t-il si le flanc est déchiré ?",
      answer:
        "Une mèche ne tient pas sur un flanc. Le technicien propose un changement de roue : montage de votre roue de secours, ou d'un pneu déjà en votre possession. Sans roue de rechange utilisable, la voiture ne peut pas être remorquée par nos soins : il faut organiser un autre moyen.",
    },
    {
      question: "Le changement de pneu est-il fait sur place ?",
      answer:
        "Le montage sur place est prévu : dépose de la roue, pose de la roue de secours ou du pneu fourni, puis contrôle de la pression. Nous ne vendons pas un stock de pneus voiture de toutes les références.",
    },
    {
      question: "Une roue à plat et un pneu à plat, est-ce la même intervention ?",
      answer:
        "Oui. Roue à plat, pneu à plat et pneu crevé décrivent la même panne. Le geste dépend de l'endroit de la perforation, pas du mot employé au téléphone.",
    },
    {
      question: "Remorquez-vous la voiture ?",
      answer:
        "Non. Le dépannage voiture couvre la batterie et le pneu, sur place. Pas de remorquage automobile.",
    },
  ] satisfies Faq[],
};

export function carTireWordCount(): number {
  const page = carTirePage;
  const text = [
    page.h1,
    page.intro,
    page.symptomsTitle,
    ...page.symptoms,
    page.stepsTitle,
    ...page.steps.flatMap((step) => [step.title, step.detail]),
    ...page.paragraphs,
    page.priceTitle,
    page.priceText,
    ...page.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}
