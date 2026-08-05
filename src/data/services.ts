import type { Service, ServiceCategory } from "./types";

const servicesData: Service[] = [
  {
    slug: "crevaison",
    category: "depannage",
    name: "Réparation de crevaison",
    h1: "Dépannage crevaison scooter et moto en Île-de-France",
    metaTitle: "Crevaison scooter moto IDF",
    metaDescription:
      "Crevaison sur route en Île-de-France ? Réparation sur place de pneu scooter ou moto, déplacement rapide 24h/24. Intervention en 25 à 40 minutes selon zone.",
    shortAnswer:
      "DépannageScooter répare les crevaisons de scooters et motos directement sur le lieu de panne en Île-de-France. Le technicien localise la perforation, retire la roue si nécessaire, installe une rustine ou remplace le pneu selon l'état du gonflage, puis contrôle la pression avant remise en route. Disponible 24h/24 et 7j/7.",
    intro:
      "Une crevaison immobilise votre deux-roues au pire moment : bord de route, parking souterrain, voie de bus. Notre équipe se déplace avec le matériel de réparation adapté aux pneus scooter et moto — outillage pour démontage de roue, rustines, compresseur portable et pneus de secours courants. L'objectif est de vous remettre en route sur place lorsque la carcasse n'est pas endommagée. Si le pneu ou la jante est trop abîmé, le remorquage vers un garage partenaire reste possible.",
    symptoms: [
      "Pneu complètement à plat ou perte de pression rapide",
      "Claquement ou bruit de roulement irrégulier avant l'immobilisation",
      "Véhicule qui tire d'un côté ou devient difficile à tenir en ligne",
      "Visibilité d'un clou, vis ou débris incrusté dans la bande de roulement",
      "Valve dévissée, cassée ou qui fuit à la base",
    ],
    interventionSteps: [
      {
        title: "Diagnostic sur place",
        detail:
          "Le technicien inspecte le pneu, repère la zone de perforation et vérifie l'état de la jante et de la carcasse avant toute réparation.",
      },
      {
        title: "Démontage de la roue",
        detail:
          "Sur la majorité des scooters et petites cylindrées, la roue arrière ou avant est démontée pour accéder au pneu et travailler en sécurité.",
      },
      {
        title: "Réparation ou remplacement",
        detail:
          "Crevaison réparable : pose d'une rustine ou d'un champignon selon la taille de la perforation. Pneu irrécupérable : montage d'un pneu neuf si disponible pour votre référence.",
      },
      {
        title: "Gonflage et contrôle",
        detail:
          "Gonflage à la pression constructeur, contrôle d'étanchéité, remontage de la roue et essai statique avant votre départ.",
      },
    ],
    duration: "30 à 60 minutes sur place",
    vehicles: [
      "Scooters 50 cm³ à 125 cm³",
      "Scooters maxi-scooter",
      "Motos légères et moyennes cylindrées",
      "Cyclomoteurs et quadricycles légers L6e",
    ],
    faqs: [
      {
        question: "Réparez-vous la crevaison sans remorquer le véhicule ?",
        answer:
          "Oui, dans la majorité des cas. Si la carcasse du pneu n'est pas déchirée et que la jante n'est pas voilée, la réparation se fait sur place. Un remorquage n'est proposé que si le pneu est irrécupérable ou si la roue ne peut pas être démontée sur site.",
      },
      {
        question: "Faut-il fournir un pneu de rechange ?",
        answer:
          "Non. Le technicien emporte du matériel de réparation et une sélection de pneus courants. Si votre référence n'est pas en stock, une réparation provisoire peut permettre un trajet court vers un garage, ou un remorquage est organisé.",
      },
      {
        question: "Intervenez-vous sur autoroute ou voie rapide ?",
        answer:
          "Oui, en respectant les consignes de sécurité : gilet haute visibilité, stationnement hors du flux, balisage si nécessaire. Restez derrière la glissière de sécurité et appelez-nous en précisant votre position kilométrique.",
      },
      {
        question: "Une rustine est-elle fiable pour repartir ?",
        answer:
          "Une rustine correctement posée sur une perforation petite et centrale permet de repartir immédiatement. Pour une perforation sur le flanc ou une déchirure, le pneu doit être remplacé : nous vous l'indiquons avant toute intervention.",
      },
      {
        question: "Gonflez-vous aussi un pneu crevé lentement sans objet visible ?",
        answer:
          "Oui. Une perte lente peut venir d'une valve, d'un joint de jante ou d'une micro-fissure. Nous gonflons, contrôlons l'étanchéité et réparons si la cause est accessible sur place.",
      },
      {
        question: "Quel délai pour une crevaison à Paris ou en petite couronne ?",
        answer:
          "Comptez en moyenne 25 à 40 minutes entre votre appel et l'arrivée du technicien, selon le trafic et la zone exacte. Le délai précis vous est annoncé au téléphone.",
      },
    ],
    relatedServices: ["batterie", "demarrage-booster", "remorquage-scooter"],
    priceKey: "DSP_CREVAISON",
  },
  {
    slug: "batterie",
    category: "depannage",
    name: "Remplacement de batterie",
    h1: "Dépannage batterie scooter et moto en Île-de-France",
    metaTitle: "Batterie scooter moto IDF",
    metaDescription:
      "Batterie à plat sur votre scooter ou moto en IDF ? Test, remplacement sur place et remise en route 24h/24. Compatible scooters, motos et maxi-scooters.",
    shortAnswer:
      "DépannageScooter intervient en Île-de-France lorsque la batterie de votre scooter ou moto est à plat ou ne retient plus la charge. Le technicien teste l'état de la batterie et du circuit de charge, remplace la batterie si nécessaire avec une référence adaptée à votre véhicule, puis vérifie le démarrage avant de vous laisser repartir.",
    intro:
      "Une batterie faible ou déchargée est l'une des pannes les plus fréquentes sur les deux-roues, surtout après une immobilisation prolongée, des trajets courts répétés ou une fin de vie de l'accumulateur. Les symptômes vont du simple clignotement du tableau de bord à l'absence totale de réponse au démarrage. Nous nous déplaçons avec des batteries compatibles aux références courantes de scooters et motos. Le technicien contrôle aussi les cosses, le fusible principal et la tension de charge avant de conclure au remplacement.",
    symptoms: [
      "Aucun voyant au contact ou tableau de bord éteint",
      "Démarreur qui cliquote sans lancer le moteur",
      "Démarrage aléatoire, surtout par temps froid",
      "Phares faibles ou clignotants qui peinent au ralenti",
      "Batterie de plus de trois ans ou véhicule immobilisé plusieurs semaines",
    ],
    interventionSteps: [
      {
        title: "Test de la batterie",
        detail:
          "Mesure de la tension au repos et sous charge, contrôle des cosses et du câblage entre la batterie et le boîtier de fusibles.",
      },
      {
        title: "Vérification du circuit de charge",
        detail:
          "Si le véhicule démarre avec booster, contrôle rapide de la charge alternateur ou du régulateur pour exclure une cause amont.",
      },
      {
        title: "Remplacement de la batterie",
        detail:
          "Pose d'une batterie neuve adaptée à votre modèle, nettoyage des cosses, serrage et protection des bornes si nécessaire.",
      },
      {
        title: "Remise en route et contrôle",
        detail:
          "Démarrage du moteur, vérification des voyants, test du démarreur et confirmation que la charge se maintient au ralenti.",
      },
    ],
    duration: "20 à 45 minutes sur place",
    vehicles: [
      "Scooters 50 cm³ à 125 cm³",
      "Maxi-scooters",
      "Motos légères et routières",
      "Scooters électriques (batterie 12 V accessoires uniquement)",
    ],
    faqs: [
      {
        question: "Pouvez-vous dépanner sans remplacer la batterie ?",
        answer:
          "Oui. Si la batterie est simplement déchargée et encore saine, un booster ou une charge rapide peut suffire. Le technicien teste d'abord l'état réel de l'accumulateur avant de proposer un remplacement.",
      },
      {
        question: "Apportez-vous la batterie adaptée à mon modèle ?",
        answer:
          "Nous stockons les références courantes de scooters et motos. Communiquez marque, cylindrée et année lors de l'appel. Si la référence exacte n'est pas disponible, une solution provisoire ou un remorquage est envisagé.",
      },
      {
        question: "Intervenez-vous dans un parking souterrain ?",
        answer:
          "Oui. Précisez la hauteur du parking et l'accès au véhicule. Le technicien emporte un matériel compact adapté aux espaces confinés.",
      },
      {
        question: "La batterie est-elle garantie ?",
        answer:
          "Les batteries neuves posées bénéficient de la garantie constructeur indiquée sur la facture. Conservez votre justificatif d'intervention pour toute demande ultérieure.",
      },
      {
        question: "Mon scooter électrique ne démarre plus : est-ce la batterie ?",
        answer:
          "Sur un scooter électrique, l'absence de démarrage peut venir du pack traction ou du BMS, pas seulement de la batterie 12 V. Nous testons le circuit basse tension ; au-delà, un remorquage vers un spécialiste est recommandé.",
      },
      {
        question: "Combien de temps dure le remplacement sur place ?",
        answer:
          "Comptez 20 à 45 minutes selon l'accessibilité de la batterie et le modèle. Certains maxi-scooters demandent un démontage de carénage plus long.",
      },
      {
        question: "Puis-je rouler immédiatement après le remplacement ?",
        answer:
          "Oui. Après contrôle du démarrage et de la charge, vous pouvez repartir. Pour les motos, laissez tourner le moteur quelques minutes pour stabiliser la tension.",
      },
    ],
    relatedServices: ["demarrage-booster", "crevaison", "remorquage-scooter"],
    priceKey: "DSP_BATTERIE",
  },
  {
    slug: "demarrage-booster",
    category: "depannage",
    name: "Démarrage et booster",
    h1: "Démarrage booster scooter et moto en Île-de-France",
    metaTitle: "Démarrage booster moto IDF",
    metaDescription:
      "Scooter ou moto qui ne démarre plus en IDF ? Démarrage au booster sur place, diagnostic rapide batterie ou carburant. Intervention 24h/24, 7j/7.",
    shortAnswer:
      "DépannageScooter effectue le démarrage de secours de scooters et motos en panne de batterie ou en difficulté au lancement en Île-de-France. Le technicien utilise un booster professionnel ou une batterie auxiliaire, tente la mise en route, puis identifie si la cause est une batterie déchargée, un problème de carburant ou un démarreur défaillant.",
    intro:
      "Le véhicule ne répond plus au démarrage électrique : c'est la situation la plus urgente quand vous devez bouger rapidement. Avant de conclure à une panne mécanique lourde, un booster professionnel permet souvent de relancer le moteur en quelques minutes. Notre intervention couvre les pannes de batterie, les carburateurs gorgés sur les anciens modèles, et les blocages de démarreur simples. Si le booster ne suffit pas, nous orientons vers un remplacement de batterie ou un remorquage.",
    symptoms: [
      "Le démarreur tourne sans que le moteur ne prenne",
      "Aucun bruit au moment de actionner le démarrage",
      "Le moteur a calé et refuse de redémarrer après un arrêt",
      "Odeur d'essence forte après plusieurs tentatives de démarrage",
      "Véhicule immobilisé depuis plusieurs jours ou semaines",
    ],
    interventionSteps: [
      {
        title: "Contrôle visuel rapide",
        detail:
          "Vérification du niveau de carburant, des cosses batterie, du coupe-circuit et de l'absence de fuite visible avant la tentative de démarrage.",
      },
      {
        title: "Démarrage au booster",
        detail:
          "Alimentation auxiliaire via booster professionnel ou câbles adaptés, en respectant la polarité et la procédure propre à votre modèle.",
      },
      {
        title: "Diagnostic de la cause",
        detail:
          "Si le moteur repart, test de la charge et de la tenue au ralenti. Sinon, recherche d'une cause carburant, allumage ou mécanique nécessitant une autre prestation.",
      },
      {
        title: "Remise en route ou orientation",
        detail:
          "Vous repartez si la panne est résolue. Sinon, proposition de remplacement batterie, livraison de carburant ou remorquage selon le diagnostic.",
      },
    ],
    duration: "15 à 30 minutes sur place",
    vehicles: [
      "Scooters 50 cm³ à 125 cm³",
      "Maxi-scooters",
      "Motos carburation et injection",
      "Cyclomoteurs thermiques",
    ],
    faqs: [
      {
        question: "Le booster suffit-il dans tous les cas ?",
        answer:
          "Non. Il résout les pannes de batterie déchargée et certaines situations de démarrage à froid. Un problème de pompe à essence, d'allumage ou de compression nécessite une autre intervention ou un remorquage.",
      },
      {
        question: "Mon véhicule est en carburateur : intervenez-vous ?",
        answer:
          "Oui. Sur les modèles à carburateur, un excès d'essence après plusieurs tentatives peut noyer le moteur. Le technicien applique la procédure adaptée avant un nouveau essai de démarrage.",
      },
      {
        question: "Le démarrage au booster abîme-t-il la batterie ?",
        answer:
          "Un booster professionnel correctement utilisé ne endommage pas le circuit électrique. Si la batterie est en fin de vie, le moteur peut s'éteindre à nouveau rapidement : le remplacement reste la solution durable.",
      },
      {
        question: "Pouvez-vous démarrer une moto sur boîte en pente ?",
        answer:
          "Le démarrage aux boosters est privilégié. Le démarrage à la poussée n'est pas proposé pour des raisons de sécurité, surtout en circulation ou sur chaussée mouillée.",
      },
      {
        question: "Intervenez-vous la nuit ou le week-end ?",
        answer:
          "Oui, 24h/24 et 7j/7 en Île-de-France. Les majorations horaires éventuelles vous sont annoncées avant l'envoi du technicien.",
      },
      {
        question: "Que faire en attendant le technicien ?",
        answer:
          "Coupez le contact, activez le frein de stationnement et restez visible si vous êtes sur la chaussée. Ne forcez pas le démarreur en boucle : cela use le pinion et vide la batterie.",
      },
    ],
    relatedServices: ["batterie", "panne-essence", "remorquage-moto"],
    priceKey: "DSP_DEMARRAGE",
  },
  {
    slug: "panne-essence",
    category: "depannage",
    name: "Panne d'essence",
    h1: "Panne d'essence scooter et moto en Île-de-France",
    metaTitle: "Panne essence scooter moto IDF",
    metaDescription:
      "Réservoir vide ou panne d'essence en IDF ? Livraison de carburant sur place pour scooter et moto, remise en route rapide. Disponible 24h/24.",
    shortAnswer:
      "DépannageScooter livre du carburant sur le lieu de panne lorsque votre scooter ou moto est immobilisé pour réservoir vide en Île-de-France. Le technicien apporte le volume nécessaire au redémarrage, contrôle l'absence de fuite au système d'alimentation et vérifie que le moteur repart correctement avant votre départ.",
    intro:
      "La jauge qui sous-estime le niveau, le trajet plus long que prévu, l'oubli au dernier ravitaillement : la panne sèche arrive souvent sans prévenir. Rouler jusqu'à la dernière goutte peut aussi aspirer des impuretés et bloquer le filtre. Nous livrons du carburant adapté à votre moteur — essence SP95 ou SP98 selon les recommandations constructeur — en quantité suffisante pour atteindre la station-service la plus proche ou terminer votre trajet si la réserve le permet.",
    symptoms: [
      "Moteur qui cale et ne redémarre plus",
      "Jauge sur réserve ou témoin essence allumé depuis plusieurs kilomètres",
      "Pompe à essence la plus proche hors de portée à pied",
      "Odeur d'essence sans fuite visible mais moteur qui peine",
      "Véhicule arrêté après un long trajet sans ravitaillement",
    ],
    interventionSteps: [
      {
        title: "Confirmation de la panne sèche",
        detail:
          "Vérification du niveau de réservoir, du témoin essence et de l'absence de fuite apparente avant la livraison de carburant.",
      },
      {
        title: "Livraison de carburant",
        detail:
          "Apport du volume adapté dans un contenant homologué, versement propre dans le réservoir sans renverser sur carénage ou échappement.",
      },
      {
        title: "Purge si nécessaire",
        detail:
          "Sur certains modèles carburation ou après une panne sèche prolongée, une purge du circuit peut être requise avant le redémarrage.",
      },
      {
        title: "Démarrage et contrôle",
        detail:
          "Remise en route du moteur, contrôle du ralenti et vérification qu'aucune fuite n'apparaît au niveau du bouchon ou du raccord de durite.",
      },
    ],
    duration: "20 à 40 minutes sur place",
    vehicles: [
      "Scooters essence 50 cm³ à 125 cm³",
      "Maxi-scooters thermiques",
      "Motos essence toutes cylindrées",
      "Cyclomoteurs thermiques",
    ],
    faqs: [
      {
        question: "Quelle quantité de carburant livrez-vous ?",
        answer:
          "Le volume suffit à alimenter le moteur et à rejoindre une station proche, généralement entre 1 et 3 litres selon le modèle et la distance à parcourir. Le détail vous est confirmé au téléphone.",
      },
      {
        question: "Livrez-vous du SP95-E10 ou du SP98 ?",
        answer:
          "Nous adaptons le carburant aux préconisations de votre constructeur. Indiquez le modèle lors de l'appel si vous avez une contrainte spécifique, notamment sur les motos anciennes.",
      },
      {
        question: "Intervenez-vous si le réservoir n'est pas vide mais le moteur ne démarre pas ?",
        answer:
          "Oui, mais la cause peut être ailleurs : pompe à essence, filtre colmaté, bougie. Le technicien vérifie le niveau réel et oriente vers un démarrage booster ou un remorquage si la panne n'est pas une panne sèche.",
      },
      {
        question: "Puis-je rester sur l'autoroute pendant l'intervention ?",
        answer:
          "Non. Sur autoroute, garez-vous sur la bande d'arrêt d'urgence, balisez si nécessaire et placez-vous derrière la glissière. Le technicien intervient depuis la voie d'urgence en respectant la réglementation.",
      },
      {
        question: "Le carburant livré est-il facturé séparément ?",
        answer:
          "Le carburant est inclus dans la prestation de dépannage. Le détail apparaît sur votre facture avec le forfait de déplacement.",
      },
      {
        question: "Que faire si j'ai roulé jusqu'à la panne sèche complète ?",
        answer:
          "Ne tentez pas de redémarrer en boucle : la pompe à essence peut chauffer à sec. Attendez le technicien. Après la livraison, laissez le moteur tourner quelques instants avant de repartir.",
      },
      {
        question: "Intervenez-vous sur les véhicules diesel ?",
        answer:
          "Non. Notre prestation couvre les scooters et motos essence. Les deux-roues diesel sont rares et nécessitent un autre type d'approvisionnement.",
      },
    ],
    relatedServices: ["demarrage-booster", "batterie", "remorquage-scooter"],
    priceKey: "DSP_ESSENCE",
  },
  {
    slug: "ouverture-de-selle",
    category: "depannage",
    name: "Ouverture de selle bloquée",
    h1: "Ouverture de selle bloquée scooter et moto en IDF",
    metaTitle: "Selle bloquée scooter moto IDF",
    metaDescription:
      "Selle ou trappe bloquée sur votre scooter ou moto en IDF ? Ouverture sans casse, accès au réservoir et au coffre. Technicien sur place 24h/24.",
    shortAnswer:
      "DépannageScooter ouvre les selles et trappes de coffre bloquées sur scooters et motos en Île-de-France. Le technicien diagnostique si le blocage vient de la serrure, du câble, de la clé ou du contacteur, puis ouvre le compartiment avec des outils adaptés pour limiter les dommages sur le carénage.",
    intro:
      "La clé tourne dans le vide, le levier ne déclenche rien, le contacteur fonctionne mais la trappe reste fermée : un blocage de selle vous empêche d'accéder au réservoir, au casque ou à la batterie. Forcer mécaniquement risque de casser le carénage ou la serrure. Nous intervenons avec des outils de serrurerie deux-roues et des techniques d'ouverture non destructives dans la mesure du possible. Une fois ouvert, le technicien inspecte le câble, le ressort et le verrou pour vous indiquer la réparation durable à prévoir.",
    symptoms: [
      "Clé qui tourne sans actionner le mécanisme de déverrouillage",
      "Levier de selle sans résistance ou bloqué en position basse",
      "Contacteur qui claque mais trappe toujours verrouillée",
      "Câble de selle visible, rompu ou déboîté côté charnière",
      "Impossibilité d'accéder au réservoir ou à la batterie",
    ],
    interventionSteps: [
      {
        title: "Identification du type de verrouillage",
        detail:
          "Repérage du système : clé directe, contacteur, commande au guidon ou verrou centralisé selon le modèle.",
      },
      {
        title: "Ouverture contrôlée",
        detail:
          "Utilisation d'outils adaptés pour débloquer la trappe ou la selle en minimisant les marques sur le carénage et la serrure.",
      },
      {
        title: "Inspection du mécanisme",
        detail:
          "Contrôle du câble, du ressort de rappel, du barillet et des points de fixation pour identifier l'origine du blocage.",
      },
      {
        title: "Conseil de réparation",
        detail:
          "Remise en fonctionnement provisoire si possible, ou orientation vers un remplacement de câble, de serrure ou de contacteur en garage.",
      },
    ],
    duration: "20 à 50 minutes sur place",
    vehicles: [
      "Scooters avec trappe sous la selle",
      "Maxi-scooters à coffre intégré",
      "Motos avec réservoir sous la selle",
      "Modèles avec verrouillage centralisé",
    ],
    faqs: [
      {
        question: "L'ouverture endommage-t-elle le carénage ?",
        answer:
          "Nous privilégions les méthodes non destructives. Sur certains modèles très bloqués, une retouche esthétique mineure ou le remplacement d'un clip peut être nécessaire : vous êtes informé avant d'aller plus loin.",
      },
      {
        question: "Ma clé est cassée dans la serrure : intervenez-vous ?",
        answer:
          "Oui. Le technicien extrait le morceau de clé si accessible, puis ouvre la selle et évalue l'état du barillet pour un éventuel remplacement.",
      },
      {
        question: "Le contacteur fonctionne mais la trappe reste fermée : pourquoi ?",
        answer:
          "Le câble est souvent rompu, détendu ou décroché au niveau de la charnière. L'ouverture permet d'accéder au mécanisme et de confirmer le diagnostic.",
      },
      {
        question: "Pouvez-vous remplacer le câble sur place ?",
        answer:
          "Sur les modèles courants où la pièce est disponible, oui. Sinon, l'ouverture vous permet de rouler ou de remorquer vers un garage pour la réparation définitive.",
      },
      {
        question: "Intervenez-vous si j'ai perdu ma clé ?",
        answer:
          "Oui, sous réserve de prouver que le véhicule vous appartient. Préparez carte grise ou justificatif lors de l'intervention. L'ouverture sans clé nécessite des techniques spécifiques selon le modèle.",
      },
      {
        question: "Le blocage empêche de faire le plein : combien de temps pour intervenir ?",
        answer:
          "Le délai moyen en Île-de-France est de 25 à 40 minutes. Précisez votre localisation exacte et le modèle du véhicule pour accélérer la prise en charge.",
      },
    ],
    relatedServices: ["panne-essence", "batterie", "remorquage-scooter"],
    priceKey: "DSP_SELLE",
  },
  {
    slug: "remorquage-scooter",
    category: "remorquage",
    name: "Remorquage de scooter",
    h1: "Remorquage de scooter en Île-de-France",
    metaTitle: "Remorquage scooter IDF",
    metaDescription:
      "Remorquage de scooter en panne en Île-de-France : chargement sécurisé, transport vers garage ou domicile. Disponible 24h/24, plateau adapté 2-roues.",
    shortAnswer:
      "DépannageScooter remorque les scooters en panne en Île-de-France vers l'adresse de votre choix : garage, concessionnaire ou domicile. Le véhicule est chargé sur un plateau ou une remorque moto avec des sangles adaptées, le contact est coupé et le guidon est sécurisé avant le transport.",
    intro:
      "Certaines pannes ne se réparent pas sur place : moteur grippé, transmission cassée, carénage bloquant la roue ou panne électrique complexe. Le remorquage de scooter demande un plateau bas et des points d'ancrage adaptés aux châssis légers. Nous transportons les scooters 50 à 125 cm³, maxi-scooters et modèles électriques vers le garage de votre choix en Île-de-France. Le chargement se fait sans roulage forcé du véhicule en panne pour préserver la mécanique.",
    symptoms: [
      "Panne mécanique ne permettant pas un dépannage sur place",
      "Roue avant ou arrière bloquée ou absente",
      "Accident léger sans blessé nécessitant un transport",
      "Scooter électrique en défaut moteur ou batterie traction",
      "Immobilisation prolongée sans possibilité de réparation locale",
    ],
    interventionSteps: [
      {
        title: "Évaluation sur site",
        detail:
          "Contrôle de l'état du scooter, de la faisabilité du chargement et de l'accessibilité pour le plateau selon votre emplacement.",
      },
      {
        title: "Sécurisation du véhicule",
        detail:
          "Coupe-circuit activé, guidon calé, lestage des sangles sur le châssis sans serrer sur la carrosserie fragile.",
      },
      {
        title: "Chargement sur plateau",
        detail:
          "Montée au treuil ou en poussant sur rampe selon le poids, calage des roues et fixation à quatre points minimum.",
      },
      {
        title: "Transport et déchargement",
        detail:
          "Accompagnement jusqu'à l'adresse convenue, déchargement sécurisé et remise du véhicule au destinataire ou au garagiste.",
      },
    ],
    duration: "45 à 90 minutes selon distance",
    vehicles: [
      "Scooters 50 cm³ à 125 cm³",
      "Maxi-scooters",
      "Scooters électriques",
      "Cyclomoteurs et quadricycles légers",
    ],
    faqs: [
      {
        question: "Où pouvez-vous emmener mon scooter ?",
        answer:
          "À l'adresse de votre choix en Île-de-France : garage réparateur, concessionnaire, domicile ou parking sécurisé. Confirmez que le destinataire peut recevoir le véhicule au moment de l'arrivée.",
      },
      {
        question: "Le remorquage abîme-t-il le scooter ?",
        answer:
          "Le chargement sur plateau avec sangles adaptées évite le roulage en panne et les points de fixation au guidon seuls. Les carénages fragiles sont protégés autant que possible.",
      },
      {
        question: "Puis-je monter dans le camion avec mon scooter ?",
        answer:
          "Non. Pour des raisons d'assurance et de sécurité, seul le technicien transporte le véhicule. Organisez votre propre trajet vers le garage.",
      },
      {
        question: "Intervenez-vous depuis un parking souterrain ?",
        answer:
          "Oui si la hauteur et la manœuvre le permettent. Signalez la hauteur du parking et l'accès lors de l'appel pour envoyer un véhicule adapté.",
      },
      {
        question: "Combien de temps pour un remorquage intra-muros ?",
        answer:
          "Le délai comprend l'acheminement du plateau, le chargement et le trajet. Comptez 45 à 90 minutes au total selon le trafic et la destination exacte.",
      },
      {
        question: "Faut-être présent au déchargement ?",
        answer:
          "Idéalement oui, ou une personne mandatée. À défaut, un garage partenaire peut réceptionner le véhicule si vous avez obtenu son accord préalable.",
      },
      {
        question: "Remorquez-vous deux scooters en même temps ?",
        answer:
          "Un seul véhicule par intervention sauf arrangement spécifique avec un plateau multi-place. Contactez-nous si vous avez plusieurs deux-roues à transporter.",
      },
    ],
    relatedServices: ["remorquage-moto", "crevaison", "transfert-garage-concession"],
    priceKey: "KM_0_5",
  },
  {
    slug: "remorquage-moto",
    category: "remorquage",
    name: "Remorquage de moto",
    h1: "Remorquage de moto en Île-de-France",
    metaTitle: "Remorquage moto IDF",
    metaDescription:
      "Remorquage de moto en panne en Île-de-France : plateau sécurisé, transport vers garage ou concession. Toutes cylindrées, service disponible 24h/24.",
    shortAnswer:
      "DépannageScooter remorque les motos en panne ou accidentées légères en Île-de-France vers un garage, une concession ou votre domicile. Le chargement s'effectue sur plateau avec calage des roues et sangles sur le cadre, sans trainer la moto sur le mécanisme en cas de blocage moteur ou boîte.",
    intro:
      "Une moto en panne ne se laisse pas toujours pousser sur plusieurs kilomètres sans aggraver la casse — surtout si la transmission ou la lubrification est en cause. Nous disposons de plateaux et sangles prévus pour les motos routières, sportives et trail, de 125 cm³ aux grosses cylindrées. Le transport respecte l'horizontalité du véhicule et évite la pression sur les leviers et rétroviseurs. Indiquez le modèle et la nature de la panne lors de l'appel pour envoyer le matériel adapté.",
    symptoms: [
      "Panne mécanique ou électrique non réparable sur place",
      "Chaîne rompue ou calée dans le carter",
      "Fuite d'huile moteur importante rendant le roulage dangereux",
      "Boîte de vitesses bloquée ou neutre impossible à trouver",
      "Batterie et démarrage défaillants après tentative de dépannage",
    ],
    interventionSteps: [
      {
        title: "Diagnostic de faisabilité",
        detail:
          "Vérification du poids, de la garde au sol et des points d'ancrage disponibles. Repérage des fuites ou pièces mobiles à protéger.",
      },
      {
        title: "Préparation au chargement",
        detail:
          "Retrait du casque intégré au guidon si nécessaire, béquille latérale ou centrale verrouillée, direction calée avec sangle souple.",
      },
      {
        title: "Chargement sur plateau",
        detail:
          "Rampe ou treuil selon le poids, calage des roues dans cales, fixation sur le cadre ou les moyeux — jamais uniquement sur le guidon.",
      },
      {
        title: "Livraison au destinataire",
        detail:
          "Transport vers l'adresse convenue, déchargement contrôlé et remise au garagiste ou au client avec état des lieux verbal.",
      },
    ],
    duration: "50 à 100 minutes selon distance",
    vehicles: [
      "Motos 125 cm³ et plus",
      "Motos routières et sportives",
      "Trail et enduro routier",
      "Custom et roadster",
    ],
    faqs: [
      {
        question: "Remorquez-vous les grosses cylindrées et motos lourdes ?",
        answer:
          "Oui, avec un plateau renforcé et un treuil adapté. Précisez le modèle exact et le poids approximatif lors de l'appel pour confirmer le véhicule d'intervention.",
      },
      {
        question: "La moto peut-elle être remorquée moteur en marche ?",
        answer:
          "Non. Le transport se fait moteur coupé, sur plateau. Rouler la moto en panne avec la roue arrière tractée endommage souvent la boîte ou la courroie.",
      },
      {
        question: "Dois-je vider le réservoir avant le transport ?",
        answer:
          "Non pour un transport standard intra-IDF. En cas de fuite active, le technicien évalue les précautions à prendre et peut demander un transfert prioritaire vers le garage.",
      },
      {
        question: "Pouvez-vous transporter une moto sans carte grise sur place ?",
        answer:
          "Vous dez prouver la propriété ou l'autorisation de déplacer le véhicule. La carte grise ou un mandat du propriétaire est demandé lors de l'intervention.",
      },
      {
        question: "Intervenez-vous sur autoroute pour une moto en panne ?",
        answer:
          "Oui, en coordination avec les services autoroutiers si nécessaire. Restez en sécurité derrière la glissière et communiquez votre position kilométrique exacte.",
      },
      {
        question: "Le remorquage inclut-il le retour au domicile ?",
        answer:
          "Le forfait couvre un trajet vers une destination en Île-de-France. Un retour ultérieur après réparation n'est pas inclus ; il fait l'objet d'une nouvelle prestation si besoin.",
      },
    ],
    relatedServices: ["remorquage-moto-accidentee", "remorquage-scooter", "transfert-garage-concession"],
    priceKey: "KM_0_5",
  },
  {
    slug: "remorquage-moto-accidentee",
    category: "remorquage",
    name: "Remorquage moto accidentée",
    h1: "Remorquage de moto accidentée en Île-de-France",
    metaTitle: "Moto accidentée remorquage IDF",
    metaDescription:
      "Moto accidentée en IDF ? Enlèvement sécurisé sur plateau, véhicule endommagé ou non roulant. Transport vers garage, expert ou fourrière 24h/24.",
    shortAnswer:
      "DépannageScooter prend en charge le remorquage de motos accidentées en Île-de-France lorsque le véhicule est non roulant ou dangereux à conduire. Le chargement tient compte des dommages visibles — fourche tordue, carénage arraché, fuite — pour immobiliser la moto sans aggraver la casse avant transport vers garage, expert ou lieu de stockage.",
    intro:
      "Après une chute ou une collision, la moto peut être déformée, bloquée ou présenter des fuides. La priorité est de la sortir de la voie publique sans la traîner ni la soulever brutalement. Nous utilisons des plateaux bas et des sangles réparties sur le cadre restant sain. Signalez les dommages visibles, la présence de fluides au sol et les consignes des forces de l'ordre ou de l'assureur. En cas de sinistre, le point de dépôt peut être imposé par votre compagnie d'assurance ou un expert.",
    symptoms: [
      "Moto au sol après chute ou collision",
      "Fourche avant ou bras oscillant visiblement endommagé",
      "Guidon bloqué ou roue avant ne tournant plus librement",
      "Fuites d'huile, d'essence ou de liquide de refroidissement",
      "Consigne de dépôt par assurance, expert ou forces de l'ordre",
    ],
    interventionSteps: [
      {
        title: "Sécurisation de la zone",
        detail:
          "Balisage si nécessaire, coupure du contact, repérage des fluides et des pièces mobiles avant toute manipulation.",
      },
      {
        title: "Évaluation des dommages",
        detail:
          "Identification des points d'ancrage encore solides et des zones à ne pas solliciter — cadre fissuré, jante voilée, carénage arraché.",
      },
      {
        title: "Chargement adapté",
        detail:
          "Levage progressif au treuil ou bascule contrôlée sur rampe, calage renforcé pour éviter tout mouvement en cours de route.",
      },
      {
        title: "Transport vers le point de dépôt",
        detail:
          "Accompagnement vers garage agréé, expert, domicile ou fourrière selon vos instructions ou celles de l'assureur.",
      },
    ],
    duration: "60 à 120 minutes selon accès et distance",
    vehicles: [
      "Motos routières accidentées",
      "Scooters et maxi-scooters après chute",
      "Motos non roulantes post-accident",
      "Deux-roues avec dommages structurels apparents",
    ],
    faqs: [
      {
        question: "Intervenez-vous juste après un accident de la route ?",
        answer:
          "Oui, une fois les secours médicaux contactés si nécessaire et la zone sécurisée. Ne déplacez pas une moto avec un cadre douteux : attendez le technicien.",
      },
      {
        question: "Dois-je appeler mon assurance avant le remorquage ?",
        answer:
          "Recommandé. Certaines polices imposent un garage agréé ou remboursent le remorquage sous conditions. Nous pouvons adapter la destination si votre assureur a donné une consigne.",
      },
      {
        question: "Un supplément s'applique-t-il pour une moto accidentée ?",
        answer:
          "Un véhicule très endommagé, renversé ou difficile d'accès peut entraîner un supplément de pénibilité annoncé avant l'envoi du plateau.",
      },
      {
        question: "Pouvez-vous récupérer une moto à la fourrière ?",
        answer:
          "Non. Cette prestation couvre l'enlèvement depuis un lieu de panne ou d'accident vers un garage. La sortie de fourrière relève des démarches administratives du propriétaire.",
      },
      {
        question: "Que faire des effets personnels sur la moto ?",
        answer:
          "Récupérez casque, papiers et objets de valeur avant le chargement si vous êtes sur place. Le technicien peut vous aider à vider le top case si accessible.",
      },
      {
        question: "Transportez-vous une moto avec huile ou essence qui fuit ?",
        answer:
          "Oui avec précautions : absorption des fluides au sol si possible, chargement rapide vers le garage pour limiter les risques. Signalez toute fuite active lors de l'appel.",
      },
      {
        question: "Fournissez-vous un rapport pour l'assurance ?",
        answer:
          "Une facture et un compte rendu verbal des conditions de prise en charge sont remis. Pour un rapport d'expertise, l'expert mandaté intervient séparément.",
      },
    ],
    relatedServices: ["remorquage-moto", "remorquage-3-roues", "transfert-garage-concession"],
    priceKey: "KM_0_5",
  },
  {
    slug: "remorquage-3-roues",
    category: "remorquage",
    name: "Remorquage 3 roues",
    h1: "Remorquage scooter et moto 3 roues en Île-de-France",
    metaTitle: "Remorquage 3 roues IDF",
    metaDescription:
      "Remorquage de scooters et motos 3 roues en IDF : Piaggio MP3, Can-Am, Yamaha Tricity. Plateau adapté, calage renforcé. Service disponible 24h/24.",
    shortAnswer:
      "DépannageScooter remorque les scooters et motos à trois roues en Île-de-France — Piaggio MP3, Peugeot Metropolis, Yamaha Tricity ou Can-Am Spyder. Le chargement utilise un plateau renforcé et un calage spécifique pour les véhicules à inclinaison ou à châssis large, sans forcer le mécanisme de bascule.",
    intro:
      "Les trois-roues ne se remorquent pas comme un deux-roues classique : largeur du châssis, système d'inclinaison bloqué, poids supérieur et points d'ancrage différents. Nous disposons de plateaux adaptés aux scooters 3 roues inclinables et aux motos trois roues type Can-Am. Lors de l'appel, précisez le modèle exact et si le système de verrouillage d'inclinaison est fonctionnel. Un MP3 avec inclinaison bloquée se charge différemment d'un Spyder à châssis fixe.",
    symptoms: [
      "Scooter 3 roues en panne mécanique ou électrique",
      "Système d'inclinaison bloqué ou voyant défaut allumé",
      "Pneu avant unique crevé sans roue de secours",
      "Accident ou chute rendant le véhicule instable",
      "Impossibilité de déplacer un 3 roues lourd manuellement",
    ],
    interventionSteps: [
      {
        title: "Identification du type de 3 roues",
        detail:
          "Distinction entre modèle inclinable, châssis fixe et largeur hors tout pour choisir le plateau et la rampe adaptés.",
      },
      {
        title: "Verrouillage de l'inclinaison",
        detail:
          "Sur les MP3 et similaires, activation du mode transport ou calage du mécanisme selon la procédure constructeur.",
      },
      {
        title: "Chargement renforcé",
        detail:
          "Montée progressive sur rampe large, calage des trois roues ou du châssis, sangles sur points prévus par le constructeur quand ils existent.",
      },
      {
        title: "Transport sécurisé",
        detail:
          "Conduite adaptée au centre de gravité plus haut, livraison au garage spécialisé ou à l'adresse convenue.",
      },
    ],
    duration: "60 à 110 minutes selon modèle et distance",
    vehicles: [
      "Piaggio MP3 et dérivés",
      "Peugeot Metropolis",
      "Yamaha Tricity",
      "Can-Am Spyder et Ryker",
    ],
    faqs: [
      {
        question: "Remorquez-vous tous les modèles de 3 roues ?",
        answer:
          "Oui pour les scooters inclinables courants et les motos trois roues type Can-Am. Confirmez marque et modèle à l'appel pour vérifier la compatibilité plateau.",
      },
      {
        question: "Faut-il bloquer l'inclinaison avant le chargement ?",
        answer:
          "Oui sur les MP3 et équivalents. Utilisez le verrou de transport du constructeur si opérationnel. Le technicien complète le calage si le système est en défaut.",
      },
      {
        question: "Un 3 roues tient-il sur un plateau standard ?",
        answer:
          "La largeur impose parfois un plateau élargi ou une rampe spécifique. Nous adaptons le véhicule d'intervention selon les dimensions communiquées.",
      },
      {
        question: "Le remorquage d'un Can-Am Spyder est-il différent ?",
        answer:
          "Oui. Le Spyder ne s'incline pas : le chargement se fait comme un véhicule à châssis fixe, avec attention au poids et à la largeur des roues avant jumelées.",
      },
      {
        question: "Intervenez-vous si un 3 roues est tombé sur le flanc ?",
        answer:
          "Oui. Le redressement se fait avec prudence pour ne pas solliciter le mécanisme d'inclinaison. Un supplément pénibilité peut s'appliquer selon la situation.",
      },
      {
        question: "Vers quel type de garage transportez-vous un 3 roues ?",
        answer:
          "Vers un garage de votre choix ou un spécialiste connaissant le modèle. Les 3 roues inclinables demandent parfois un diagnostique électronique spécifique.",
      },
    ],
    relatedServices: ["remorquage-scooter", "remorquage-moto", "remorquage-moto-accidentee"],
    priceKey: "KM_10_15",
  },
  {
    slug: "transfert-garage-concession",
    category: "remorquage",
    name: "Transfert garage et concession",
    h1: "Transfert de deux-roues vers garage ou concession en IDF",
    metaTitle: "Transfert garage moto IDF",
    metaDescription:
      "Transfert planifié de scooter ou moto vers garage, concession ou expert en Île-de-France. Remorquage sur rendez-vous, véhicule roulant ou non.",
    shortAnswer:
      "DépannageScooter organise le transfert de scooters et motos vers un garage réparateur, une concession ou un expert en Île-de-France, sur rendez-vous ou en urgence. Le service couvre les véhicules roulants sans immatriculation temporaire utilisable, les épaves légères et les livraisons après achat ou réparation chez un tiers.",
    intro:
      "Le transfert vers un garage ou une concession ne répond pas toujours à une panne immédiate : reprise après achat d'occasion, envoi chez un carrossier, déplacement vers un expert d'assurance ou simple changement de lieu de stockage. Nous planifions l'intervention à l'avance quand c'est possible, avec créneau horaire coordonné entre vous et le destinataire. Le véhicule peut être roulant ou non ; précisez l'état mécanique pour adapter le chargement. Les longues distances intra-IDF sont calculées selon le trajet réel.",
    symptoms: [
      "Achat ou vente nécessitant un transport vers un garage",
      "Véhicule immobilisé chez un tiers sans possibilité de récupération en roulant",
      "Transfert vers un expert ou un carrossier agréé",
      "Déménagement du lieu de stockage du deux-roues",
      "Véhicule réparé prêt à être livré au domicile du client",
    ],
    interventionSteps: [
      {
        title: "Prise de rendez-vous",
        detail:
          "Coordination de l'horaire de prise en charge et de la disponibilité du garage ou de la concession destinataire.",
      },
      {
        title: "État des lieux au départ",
        detail:
          "Contrôle visuel du véhicule, kilométrage et dommages existants signalés avant le chargement.",
      },
      {
        title: "Chargement et transport",
        detail:
          "Remorquage sur plateau selon l'état du véhicule, trajet direct vers l'adresse convenue en Île-de-France.",
      },
      {
        title: "Remise au destinataire",
        detail:
          "Déchargement, remise des clés et confirmation de réception avec le garage, le concessionnaire ou le client final.",
      },
    ],
    duration: "Variable selon distance et créneau convenu",
    vehicles: [
      "Scooters roulants ou non",
      "Motos toutes cylindrées",
      "Maxi-scooters et 3 roues sur demande",
      "Deux-roues sans contrôle technique récent",
    ],
    faqs: [
      {
        question: "Peut-on planifier un transfert à l'avance ?",
        answer:
          "Oui. C'est même recommandé pour coordonner la disponibilité du garage. Communiquez adresse de départ, destination et créneau souhaité lors de la réservation.",
      },
      {
        question: "Transportez-vous un véhicule qui roule encore ?",
        answer:
          "Oui. Même un véhicule roulant peut être remorqué pour éviter un trajet sans assurance spécifique ou sans contrôle technique valide.",
      },
      {
        question: "Le garage doit-il être ouvert à l'arrivée ?",
        answer:
          "Oui, ou une personne doit pouvoir réceptionner le véhicule. Nous confirmons l'horaire avec le destinataire si vous nous transmettez ses coordonnées.",
      },
      {
        question: "Intervenez-vous pour une livraison après achat en concession ?",
        answer:
          "Oui. La concession prépare le véhicule, nous le récupérons et le livrons à votre domicile ou au garage de montage si vous installez des accessoires.",
      },
      {
        question: "Le transfert fonctionne-t-il entre deux adresses hors panne ?",
        answer:
          "Oui. Cette prestation couvre tout déplacement planifié de deux-roues en Île-de-France, pas seulement les situations d'urgence.",
      },
      {
        question: "Comment est calculée la distance pour un transfert inter-départements ?",
        answer:
          "Selon le trajet réel entre le point de prise en charge et la destination, avec une grille par tranche kilométrique. Le montant vous est communiqué avant validation.",
      },
      {
        question: "Pouvez-vous transporter plusieurs véhicules pour un garage ?",
        answer:
          "Contactez-nous pour un volume récurrent. Des interventions multiples peuvent être organisées avec des créneaux dédiés.",
      },
    ],
    relatedServices: ["remorquage-moto", "remorquage-scooter", "remorquage-moto-accidentee"],
    priceKey: "KM_15_20",
  },
];

export const services: Service[] = servicesData;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((service) => service.category === category);
}

export const depannageServices: Service[] = services.filter(
  (service) => service.category === "depannage",
);

export const remorquageServices: Service[] = services.filter(
  (service) => service.category === "remorquage",
);
