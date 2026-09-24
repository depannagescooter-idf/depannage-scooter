/** Généré par scripts/geo-apply-phase1.ts — ne pas éditer à la main. */
import type { Zone } from "./types";

export type ZoneGeoPatch = Pick<
  Zone,
  "intro" | "axes" | "landmarks" | "commonInterventions" | "quartiers"
>;

export const zonesGeoApplied: Record<string, ZoneGeoPatch> = {
  "paris-1er": {
    "intro": "À Paris 1er, nos dépanneurs empruntent le plus souvent Rue de Rivoli ou Boulevard Sébastopol pour rejoindre votre panne. Le boulevard Sébastopol et la rue de Rivoli restent les axes principaux pour rejoindre une panne sans bloquer la circulation des bus. Paris 1er (75, 75001) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 22 et 35 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 2e, Paris 4e, Paris 6e, Paris 7e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : batterie faible sur trajets courts coursier. Les équipes traitent aussi : crevaison sur pavés Palais-Royal.",
    "axes": [
      "Rue de Rivoli",
      "Boulevard Sébastopol",
      "Quai du Louvre",
      "Rue Saint-Honoré"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Batterie faible sur trajets courts coursier",
      "Crevaison sur pavés Palais-Royal",
      "Remorquage depuis zone livraison Rivoli",
      "Ouverture selle bloquée stationnement souterrain"
    ]
  },
  "paris-2e": {
    "intro": "À Paris 2e, nos dépanneurs empruntent le plus souvent Rue Montmartre ou Rue Réaumur pour rejoindre votre panne. La rue Montmartre et la rue Réaumur accueillent de nombreux coursiers et livreurs en deux-roues qui s'arrêtent sur des emplacements minutes sur trottoir. Les pannes les plus fréquentes concernent les batteries usées par les allers-retours répétés entre Grands Boulevards et Opéra, et les crevaisons causées par les grilles métalliques des bouches de. Le quartier Drouot concentre les interventions de remorquage après stationnement gênant devant les maisons de vente. La circulation sur le boulevard des Capucines, en liaison avec l'Opéra, reste l'axe le plus fluide pour une intervention rapide en soirée. Paris 2e (75, 75002) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 22 et 36 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 1er, Paris 3e, Paris 8e, Paris 9e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison grilles. Les équipes traitent aussi : batterie HS trajets livraison Réaumur.",
    "axes": [
      "Rue Montmartre",
      "Rue Réaumur",
      "Boulevard des Capucines",
      "Rue du Quatre-Septembre"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison grilles",
      "Batterie HS trajets livraison Réaumur",
      "Remorquage quartier Drouot",
      "Démarrage scooter stationné parking souterrain"
    ]
  },
  "paris-3e": {
    "intro": "À Paris 3e, nos dépanneurs empruntent le plus souvent Rue de Turbigo ou Boulevard Beaumarchais pour rejoindre votre panne. Le Marais nord, dans le 3e arrondissement, combine rues pavées, zones piétonnes et artères en sens unique autour de République et du Temple. Les deux-roues y circulent entre boutiques, ateliers et restaurants; les livraisons se concentrent rue de Turbigo et rue du Temple, où le stationnement sur voie est surveillé en continu. Nous intervenons régulièrement rue des Archives et rue Vieille-du-Temple pour des selles bloquées sur scooters de livraison surchargés, ou des crevaisons sur les pavés irréguliers du quartier Saint-Gervais. Les remorquages partent souvent vers le 11e ou le 20e quand le garage habituel du client est en dehors du centre. Paris 3e (75, 75003) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 24 et 38 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 2e, Paris 4e, Paris 10e, Paris 11e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison pavés Marais. Les équipes traitent aussi : selle bloquée livraison restaurant.",
    "axes": [
      "Rue de Turbigo",
      "Boulevard Beaumarchais",
      "Rue du Temple",
      "Rue des Archives"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison pavés Marais",
      "Selle bloquée livraison restaurant",
      "Remorquage après fourrière voie",
      "Batterie scooter garé cour intérieure"
    ]
  },
  "paris-4e": {
    "intro": "À Paris 4e, nos dépanneurs empruntent le plus souvent Rue de Rivoli ou Boulevard Beaumarchais pour rejoindre votre panne. Les crevaisons sont fréquentes sur les joints de pont du Pont Louis-Philippe et sur les pavés de la rue François-Miron. Les interventions batterie touchent les motos garées sous les porches du Marais, où l'humidité accélère la sulfatation. Les remorquages depuis l'île de la Cité nécessitent parfois une autorisation de stationnement du plateau sur voie; nos conducteurs connaissent les créneaux les moins chargés côté Quai de l'Hôtel-de-Ville. Paris 4e (75, 75004) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 25 et 40 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 1er, Paris 3e, Paris 11e, Paris 12e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison pavés île Saint-Louis. Les équipes traitent aussi : remorquage Marais rue piétonne.",
    "axes": [
      "Rue de Rivoli",
      "Boulevard Beaumarchais",
      "Quai de l'Hôtel-de-Ville",
      "Rue Saint-Antoine"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison pavés île Saint-Louis",
      "Remorquage Marais rue piétonne",
      "Batterie moto sous porche",
      "Panne essence après embouteillage Bastille"
    ]
  },
  "paris-5e": {
    "intro": "À Paris 5e, nos dépanneurs empruntent le plus souvent Boulevard Saint-Michel ou Boulevard Saint-Germain pour rejoindre votre panne. Nous dépannons souvent des scooters 125 cm³ garés rue Gay-Lussac ou rue d'Ulm, avec des batteries fatiguées par les trajets quotidiens depuis le 13e ou Ivry. Les remorquages vers les garages du 14e passent par le boulevard de Port-Royal ou l'Avenue des Gobelins selon le sens de circulation du moment. La montée vers Pantheon complique l'accès des plateaux lourds; nos équipes privilégient les créneaux hors rush étudiant, entre midi et quatorze heures ou après vingt heures. Paris 5e (75, 75005) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 26 et 42 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 4e, Paris 6e, Paris 13e, Paris 14e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : batterie étudiant trajet quotidien. Les équipes traitent aussi : crevaison rails T3a.",
    "axes": [
      "Boulevard Saint-Michel",
      "Boulevard Saint-Germain",
      "Rue Monge",
      "Avenue des Gobelins"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Batterie étudiant trajet quotidien",
      "Crevaison rails T3a",
      "Remorquage après chute rue pavée",
      "Démarrage scooter garé cour universitaire"
    ]
  },
  "paris-6e": {
    "intro": "À Paris 6e, nos dépanneurs empruntent le plus souvent Boulevard Saint-Germain ou Rue de Rennes pour rejoindre votre panne. Les deux-roues de livraison affrontent des créneaux courts rue de Rennes et rue de Sèvres, tandis que les motos de collection garées rue Bonaparte subissent parfois des pannes de batterie après longue immobilisation. Le boulevard Saint-Germain et la rue de Vaugirard structurent nos accès; les rues perpendiculaires comme rue de Buci ou rue de Seine restent sensibles aux flux piétons en soirée. Les remorquages vers le 15e ou Boulogne empruntent le pont de Sèvres ou le boulevard du Montparnasse selon l'heure. Paris 6e (75, 75006) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 24 et 38 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 1er, Paris 5e, Paris 7e, Paris 14e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : batterie moto longue immobilisation. Les équipes traitent aussi : crevaison pavés Odéon.",
    "axes": [
      "Boulevard Saint-Germain",
      "Rue de Rennes",
      "Rue de Vaugirard",
      "Rue de Sèvres"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Batterie moto longue immobilisation",
      "Crevaison pavés Odéon",
      "Remorquage livraison rue de Rennes",
      "Ouverture selle scooter sous porche"
    ]
  },
  "paris-7e": {
    "intro": "À Paris 7e, nos dépanneurs empruntent le plus souvent Avenue de la Bourdonnais ou Boulevard des Invalides pour rejoindre votre panne. Les crevaisons apparaissent sur les quais bas du port de la Bourdonnais, où les joints de dalle et les nids-de-poule s'accumulent. En période touristique, la circulation sur le Champ-de-Mars et le quai Branly ralentit fortement; nos équipes anticipent des délais supplémentaires entre juin et septembre. Le stationnement deux-roues reste limité avenue Rapp et rue Saint-Dominique; les interventions se font le plus souvent sur trottoir élargi ou emplacement livraison. Paris 7e (75, 75007) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 25 et 40 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 1er, Paris 6e, Paris 15e, Paris 16e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : batterie scooter trajet ministère. Les équipes traitent aussi : crevaison quai Bourdonnais.",
    "axes": [
      "Avenue de la Bourdonnais",
      "Boulevard des Invalides",
      "Rue de Grenelle",
      "Quai d'Orsay"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Batterie scooter trajet ministère",
      "Crevaison quai Bourdonnais",
      "Remorquage zone Champ-de-Mars",
      "Démarrage moto garée avenue Rapp"
    ]
  },
  "paris-8e": {
    "intro": "À Paris 8e, nos dépanneurs empruntent le plus souvent Avenue des Champs-Élysées ou Boulevard Haussmann pour rejoindre votre panne. Les pannes concernent autant les batteries des 125 cm³ de livraison sur les Champs-Élysées que les motos garées avenue Montaigne ou rue du Faubourg-Saint-Honoré. Nos dépanneurs accèdent par le boulevard Malesherbes, l'avenue de Friedland ou la rue de Miromesnil selon les fermetures ponctuelles liées aux événements sur l'Élysée. Les remorquages vers Neuilly ou Levallois empruntent le boulevard Pereire ou l'avenue de la Grande-Armée. La circulation sur le boulevard Haussmann, en direction de l'Opéra, reste l'axe principal pour rejoindre une panne en moins de trente minutes en heure creuse. Paris 8e (75, 75008) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 23 et 37 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 1er, Paris 2e, Paris 9e, Paris 16e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : batterie maxi-scooter avenue Montaigne. Les équipes traitent aussi : remorquage après mise en fourrière.",
    "axes": [
      "Avenue des Champs-Élysées",
      "Boulevard Haussmann",
      "Rue du Faubourg-Saint-Honoré",
      "Boulevard Malesherbes"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Batterie maxi-scooter avenue Montaigne",
      "Remorquage après mise en fourrière",
      "Crevaison rond-point Champs-Élysées",
      "Démarrage moto parking Franklin Roosevelt"
    ]
  },
  "paris-9e": {
    "intro": "À Paris 9e, nos dépanneurs empruntent le plus souvent Boulevard Haussmann ou Rue de Provence pour rejoindre votre panne. Les livreurs empruntent rue de Provence, rue Lafayette et boulevard Haussmann où le stationnement minute est saturé entre dix-huit et vingt-deux heures. Les remorquages vers le 18e ou Saint-Ouen passent par le boulevard de Clichy ou la rue de la Chapelle selon le sens de circulation. La rue Scribe et l'avenue de l'Opéra concentrent les interventions de selles bloquées sur scooters de livraison surchargés. Paris 9e (75, 75009) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 24 et 38 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 2e, Paris 8e, Paris 10e, Paris 17e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : batterie scooter sortie de nuit Pigalle. Les équipes traitent aussi : crevaison rails.",
    "axes": [
      "Boulevard Haussmann",
      "Rue de Provence",
      "Boulevard de Clichy",
      "Rue Lafayette"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Batterie scooter sortie de nuit Pigalle",
      "Crevaison rails",
      "Selle bloquée livraison restaurant",
      "Remorquage parking souterrain Opéra"
    ]
  },
  "paris-10e": {
    "intro": "À Paris 10e, nos dépanneurs empruntent le plus souvent Boulevard de Magenta ou Rue du Faubourg-Saint-Denis pour rejoindre votre panne. Les coursiers et livreurs stationnent en double file devant les gares, sur les quais du canal et le long du boulevard de Magenta. Les pannes batterie et crevaison dominent, avec des selles bloquées sur les scooters de livraison de nuit vers Strasbourg-Saint-Denis. Les remorquages vers le 19e ou Aubervilliers empruntent le boulevard de la Villette ou l'avenue de Flandre. La circulation sur le boulevard de Strasbourg reste l'axe central malgré les bus en site propre. Paris 10e (75, 75010) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 24 et 39 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 2e, Paris 3e, Paris 9e, Paris 11e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison quai canal Saint-Martin. Les équipes traitent aussi : batterie coursier gare du Nord.",
    "axes": [
      "Boulevard de Magenta",
      "Rue du Faubourg-Saint-Denis",
      "Quai de Valmy",
      "Boulevard de Strasbourg"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison quai canal Saint-Martin",
      "Batterie coursier gare du Nord",
      "Remorquage double file Magenta",
      "Panne essence boulevard Strasbourg"
    ]
  },
  "paris-11e": {
    "intro": "À Paris 11e, nos dépanneurs empruntent le plus souvent Avenue de la République ou Boulevard Voltaire pour rejoindre votre panne. Les remorquages vers Montreuil ou le 20e passent par le boulevard de Charonne ou la rue de Montreuil. Paris 11e (75, 75011) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 25 et 40 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 3e, Paris 4e, Paris 10e, Paris 12e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison rails. Les équipes traitent aussi : batterie livraison nocturne Oberkampf.",
    "axes": [
      "Avenue de la République",
      "Boulevard Voltaire",
      "Rue de Charonne",
      "Boulevard de Belleville"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison rails",
      "Batterie livraison nocturne Oberkampf",
      "Remorquage après chute Roquette",
      "Selle bloquée scooter livraison"
    ]
  },
  "paris-12e": {
    "intro": "À Paris 12e, nos dépanneurs empruntent le plus souvent Cours de Vincennes ou Avenue Daumesnil pour rejoindre votre panne. Les crevaisons surviennent sur les pavés de la coulée verte René-Dumont et sur les joints du. Les remorquages vers Vincennes ou Charenton empruntent le boulevard périphérique intérieur porte de Vincennes ou la rue de Charenton. Le stationnement deux-roues est dense autour de l'Opéra Bastille côté 12e; nos équipes utilisent les emplacements livraison rue de Lyon et avenue Ledru-Rollin. La montée vers Bel-Air et Picpus impose des délais supplémentaires pour les plateaux en heure de pointe. Paris 12e (75, 75012) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 26 et 42 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 4e, Paris 11e, Paris 13e, Vincennes) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison coulée verte. Les équipes traitent aussi : remorquage événement Accor Arena.",
    "axes": [
      "Cours de Vincennes",
      "Avenue Daumesnil",
      "Boulevard Diderot",
      "Rue de Charenton"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison coulée verte",
      "Remorquage événement Accor Arena",
      "Batterie scooter Bercy Village",
      "Panne essence boulevard périphérique"
    ]
  },
  "paris-13e": {
    "intro": "À Paris 13e, nos dépanneurs empruntent le plus souvent Avenue d'Italie ou Boulevard Vincent-Auriol pour rejoindre votre panne. Les deux-roues y circulent sur l'avenue d'Italie, le boulevard Vincent-Auriol et l'avenue de France vers Bibliothèque François-Mitterrand. Les batteries faiblissent sur les trajets quotidiens depuis Ivry ou Kremlin-Bicêtre vers les universités. Les remorquages vers Ivry ou Vitry passent par le boulevard périphérique porte d'Ivry ou l'avenue de Choisy. La circulation sur le boulevard Masséna reste l'axe principal pour une intervention depuis le centre de Paris. Paris 13e (75, 75013) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 27 et 43 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 5e, Paris 12e, Paris 14e, Ivry-sur-Seine) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie étudiant Tolbiac.",
    "axes": [
      "Avenue d'Italie",
      "Boulevard Vincent-Auriol",
      "Avenue de France",
      "Boulevard Masséna"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie étudiant Tolbiac",
      "Remorquage ZAC Rive Gauche",
      "Démarrage scooter porte de Choisy"
    ]
  },
  "paris-14e": {
    "intro": "À Paris 14e, nos dépanneurs empruntent le plus souvent Boulevard du Montparnasse ou Avenue du Général-Leclerc pour rejoindre votre panne. Les pannes batterie touchent les scooters 50 cm³ des lycéens et étudiants entre Denfert et Mouton-Duvernet. Paris 14e (75, 75014) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 26 et 41 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 5e, Paris 6e, Paris 13e, Paris 15e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : batterie scooter étudiant. Les équipes traitent aussi : crevaison.",
    "axes": [
      "Boulevard du Montparnasse",
      "Avenue du Général-Leclerc",
      "Rue d'Alésia",
      "Boulevard Brune"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Batterie scooter étudiant",
      "Crevaison",
      "Remorquage tour Montparnasse",
      "Ouverture selle parking souterrain"
    ]
  },
  "paris-15e": {
    "intro": "À Paris 15e, nos dépanneurs empruntent le plus souvent Boulevard de Grenelle ou Rue de Vaugirard pour rejoindre votre panne. Le 15e arrondissement, plus vaste arrondissement de Paris, s'étend de Grenelle à Javel en passant par Vaugirard et Convention. Les batteries cèdent sur les trajets quotidiens depuis Boulogne ou Issy vers la Défense via le pont de Grenelle. Les remorquages vers Issy ou Boulogne passent par le pont du Garigliano ou le boulevard périphérique porte de Sèvres. La ZFE et les contrôles de circulation sur le quai André-Citroën n'impactent pas nos plateaux homologués. Paris 15e (75, 75015) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 27 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 6e, Paris 7e, Paris 14e, Paris 16e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison front de Seine. Les équipes traitent aussi : batterie trajet Issy-Défense.",
    "axes": [
      "Boulevard de Grenelle",
      "Rue de Vaugirard",
      "Boulevard Victor",
      "Avenue Émile-Zola"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison front de Seine",
      "Batterie trajet Issy-Défense",
      "Remorquage salon porte de Versailles",
      "Panne essence boulevard Victor"
    ]
  },
  "paris-16e": {
    "intro": "À Paris 16e, nos dépanneurs empruntent le plus souvent Avenue Foch ou Rue de Passy pour rejoindre votre panne. Les motos et maxi-scooters y sont nombreux; les pannes batterie touchent les véhicules garés avenue Foch, rue de Passy ou boulevard Suchet entre deux utilisations espacées. Les remorquages vers Boulogne ou Neuilly empruntent le pont de Sèvres, l'avenue de Versailles ou le boulevard périphérique porte d'Auteuil. Le stationnement est strictement contrôlé avenue Kléber et place Victor-Hugo; nos dépanneurs utilisent les emplacements livraison rue de la Pompe et rue d'Auteuil. Paris 16e (75, 75016) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 26 et 42 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 7e, Paris 8e, Paris 15e, Paris 17e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : batterie moto longue immobilisation Passy. Les équipes traitent aussi : remorquage événement Roland-Garros.",
    "axes": [
      "Avenue Foch",
      "Rue de Passy",
      "Boulevard Murat",
      "Avenue du Général-Sarrail"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Batterie moto longue immobilisation Passy",
      "Remorquage événement Roland-Garros",
      "Crevaison bois de Boulogne",
      "Démarrage maxi-scooter avenue Foch"
    ]
  },
  "paris-17e": {
    "intro": "À Paris 17e, nos dépanneurs empruntent le plus souvent Boulevard Pereire ou Avenue de Clichy pour rejoindre votre panne. Les batteries faiblissent sur les trajets quotidiens depuis Levallois ou Clichy vers les bureaux des Ternes. Paris 17e (75, 75017) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 25 et 41 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 8e, Paris 9e, Paris 16e, Paris 18e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison avenue de Clichy. Les équipes traitent aussi : batterie trajet Levallois-Ternes.",
    "axes": [
      "Boulevard Pereire",
      "Avenue de Clichy",
      "Boulevard des Batignolles",
      "Boulevard Berthier"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison avenue de Clichy",
      "Batterie trajet Levallois-Ternes",
      "Remorquage marché Batignolles",
      "Selle bloquée livraison"
    ]
  },
  "paris-18e": {
    "intro": "À Paris 18e, nos dépanneurs empruntent le plus souvent Boulevard de Clichy ou Boulevard de la Chapelle pour rejoindre votre panne. Les deux-roues grimpent rue Lepic, rue Custine et boulevard de la Chapelle; les crevaisons fréquentent les rails du. Les batteries cèdent sur les scooters de livraison entre Barbès et Château-Rouge, où les arrêts répétés épuisent les petites batteries. Les remorquages vers Saint-Ouen ou Aubervilliers passent par le boulevard Ney ou la porte de la Chapelle. La circulation sur le boulevard périphérique porte de Clignancourt reste l'accès le plus fiable pour un plateau en heure de pointe. Paris 18e (75, 75018) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 26 et 42 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 9e, Paris 10e, Paris 17e, Paris 19e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison pavés Montmartre. Les équipes traitent aussi : batterie livraison Barbès.",
    "axes": [
      "Boulevard de Clichy",
      "Boulevard de la Chapelle",
      "Rue Custine"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison pavés Montmartre",
      "Batterie livraison Barbès",
      "Remorquage pente rue Lepic",
      "Démarrage scooter Goutte-d'Or"
    ]
  },
  "paris-19e": {
    "intro": "À Paris 19e, nos dépanneurs empruntent le plus souvent Avenue de Flandre ou Boulevard de la Villette pour rejoindre votre panne. Le stationnement est dense autour de la halle aux cuirs; nos dépanneurs utilisent les emplacements livraison rue de Crimée et rue Manin. Les manœuvres de plateau sur le boulevard Sérurier, fréquemment en travaux, exigent un créneau confirmé par téléphone pour éviter le blocage des bus ligne 60. Paris 19e (75, 75019) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 27 et 43 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 10e, Paris 11e, Paris 18e, Paris 20e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison quai Ourcq. Les équipes traitent aussi : batterie livraison entrepôt.",
    "axes": [
      "Avenue de Flandre",
      "Boulevard de la Villette",
      "Avenue Jean-Jaurès",
      "Rue de Crimée"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison quai Ourcq",
      "Batterie livraison entrepôt",
      "Remorquage Buttes-Chaumont",
      "Panne essence avenue Flandre"
    ]
  },
  "paris-20e": {
    "intro": "À Paris 20e, nos dépanneurs empruntent le plus souvent Boulevard de Belleville ou Boulevard de Ménilmontant pour rejoindre votre panne. Les crevaisons fréquentent les pavés de la rue Denoyez et les rails du. Les batteries cèdent sur les scooters de livraison entre Gambetta et Alexandre-Dumas, secteur très demandé en soirée. Les remorquages vers Montreuil passent par la rue de Bagnolet ou le boulevard périphérique porte de Bagnolet. La circulation sur la rue de la Réunion reste l'axe principal pour rejoindre une panne depuis le centre. Paris 20e (75, 75020) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 27 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 11e, Paris 12e, Paris 19e, Montreuil) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison pavés Belleville. Les équipes traitent aussi : batterie livraison nocturne.",
    "axes": [
      "Boulevard de Belleville",
      "Boulevard de Ménilmontant",
      "Rue de Bagnolet",
      "Rue de la Réunion"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison pavés Belleville",
      "Batterie livraison nocturne",
      "Remorquage vers Montreuil",
      "Selle bloquée scooter livraison"
    ]
  },
  "boulogne-billancourt": {
    "intro": "À Boulogne-Billancourt, nos dépanneurs empruntent le plus souvent Route de la Reine ou Boulevard Jean-Jaurès pour rejoindre votre panne. Boulogne-Billancourt, première commune des Hauts-de-Seine, s'étend du pont de Sèvres à Billancourt le long de la Seine. Les crevaisons surviennent sur les pavés du quartier du Point-du-Jour et sur les joints du. Les batteries faiblissent sur les trajets quotidiens vers la Défense via le pont de Sèvres. Le; le pont de Sèvres concentre les embouteillages aux heures de pointe. Les remorquages vers le 15e ou Issy passent par le boulevard périphérique porte de Sèvres ou l'avenue Émile-Zola. La ZFE du grand Paris n'empêche pas nos plateaux Euro 6 d'intervenir sur l'ensemble de la commune. Boulogne-Billancourt (92, 92100) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 30 et 48 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 15e, Paris 16e, Issy-les-Moulineaux, Levallois-Perret) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie trajet Défense.",
    "axes": [
      "Route de la Reine",
      "Boulevard Jean-Jaurès",
      "Quai de Stalingrad"
    ],
    "landmarks": [
      "Pont de Sèvres"
    ],
    "commonInterventions": [
      "Crevaison",
      "Batterie trajet Défense",
      "Remorquage événement Parc des Princes",
      "Démarrage scooter Silly-Gallieni"
    ]
  },
  "nanterre": {
    "intro": "À Nanterre, nos dépanneurs empruntent le plus souvent Avenue Georges-Clemenceau ou Rue de l'Université pour rejoindre votre panne. Les batteries cèdent sur les scooters de livraison entre les tours et les entrepôts de la rue de l'Université. Le boulevard périphérique porte de Champerret et l'A14 restent les axes pour rejoindre une panne depuis Paris. Le stationnement deux-roues est quasi nul sur le parvis; les interventions se font le plus souvent sur voie de desserte ou parking visiteurs. Nanterre (92, 92000) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Courbevoie, Paris 17e, Paris 16e, Levallois-Perret) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : batterie livraison La Défense. Les équipes traitent aussi : remorquage parking souterrain tour.",
    "axes": [
      "Avenue Georges-Clemenceau",
      "Rue de l'Université"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Batterie livraison La Défense",
      "Remorquage parking souterrain tour",
      "Crevaison esplanade",
      "Démarrage moto université"
    ]
  },
  "levallois-perret": {
    "intro": "À Levallois-Perret, nos dépanneurs empruntent le plus souvent Avenue Victor-Hugo ou Boulevard Bineau pour rejoindre votre panne. Les batteries faiblissent sur les trajets quotidiens entre Levallois et les bureaux des Ternes ou de La Défense. Le stationnement est saturé en journée autour des sièges sociaux; nos dépanneurs utilisent les emplacements livraison rue Carnot et rue Danton. La circulation sur l'avenue de la Grande-Armée côté Levallois reste l'axe principal pour une intervention rapide. Levallois-Perret (92, 92300) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 45 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 17e, Paris 8e, Neuilly-sur-Seine, Courbevoie) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : batterie trajet Levallois-Défense. Les équipes traitent aussi : crevaison.",
    "axes": [
      "Avenue Victor-Hugo",
      "Boulevard Bineau",
      "Rue Anatole-France"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Batterie trajet Levallois-Défense",
      "Crevaison",
      "Remorquage siège social",
      "Selle bloquée livraison"
    ]
  },
  "neuilly-sur-seine": {
    "intro": "À Neuilly-sur-Seine, nos dépanneurs empruntent le plus souvent Avenue Charles-de-Gaulle ou Boulevard du Château pour rejoindre votre panne. Les motos et maxi-scooters y sont nombreux; les pannes batterie touchent les véhicules garés avenue du Roule ou rue de Longchamp entre deux utilisations. Les remorquages vers le 16e ou Levallois empruntent l'avenue de la Grande-Armée ou le boulevard Bineau. Le stationnement est strictement contrôlé avenue Charles-de-Gaulle; nos dépanneurs utilisent les emplacements livraison rue de Chézy et rue de Villiers. Les interventions de selles bloquées concernent souvent les scooters de livraison vers les restaurants de l'avenue de Madrid. Neuilly-sur-Seine (92, 92200) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 16e, Paris 17e, Levallois-Perret, Courbevoie) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : batterie moto avenue du Roule. Les équipes traitent aussi : crevaison bois de Boulogne.",
    "axes": [
      "Avenue Charles-de-Gaulle",
      "Boulevard du Château",
      "Avenue de Madrid",
      "Rue de Longchamp"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Batterie moto avenue du Roule",
      "Crevaison bois de Boulogne",
      "Remorquage Porte Maillot",
      "Démarrage maxi-scooter"
    ]
  },
  "issy-les-moulineaux": {
    "intro": "À Issy-les-Moulineaux, nos dépanneurs empruntent le plus souvent Avenue Victor-Cresson ou Boulevard Gallieni pour rejoindre votre panne. Les batteries cèdent sur les trajets quotidiens vers Montparnasse via le pont de Grenelle. Les remorquages vers Boulogne ou le 15e passent par le pont du Garigliano ou le boulevard périphérique porte de Sèvres. Les livraisons express vers les tours Iroko et Seine-Gare imposent souvent un. Issy-les-Moulineaux (92, 92130) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 30 et 47 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 15e, Boulogne-Billancourt, Paris 14e, Montrouge) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie trajet Montparnasse.",
    "axes": [
      "Avenue Victor-Cresson",
      "Boulevard Gallieni",
      "Rue du Général-Leclerc",
      "Quai de la Bataille-de-Stalingrad"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie trajet Montparnasse",
      "Remorquage Val-de-Seine",
      "Panne essence boulevard Gallieni"
    ]
  },
  "courbevoie": {
    "intro": "À Courbevoie, nos dépanneurs empruntent le plus souvent Avenue de la République ou Boulevard de la Mission-Marchand pour rejoindre votre panne. Les deux-roues circulent sur l'avenue de la République, le boulevard de la Mission-Marchand et la rue de Bezons, avec des livraisons vers les tours du faubourg de l'Arche. Les remorquages depuis les parkings souterrains des tours imposent des contraintes de hauteur pour les maxi-scooters. Le boulevard périphérique porte de Champerret et l'avenue de l'Arche restent les axes d'accès. Le stationnement deux-roues est limité autour de la gare; nos dépanneurs se positionnent rue de l'Est et avenue de la République pour intervenir sans bloquer le flux des bus. Courbevoie (92, 92400) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 30 et 48 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Levallois-Perret, Nanterre, Asnières-sur-Seine, Paris 17e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : batterie livraison Défense. Les équipes traitent aussi : remorquage parking tour.",
    "axes": [
      "Avenue de la République",
      "Boulevard de la Mission-Marchand",
      "Rue de Bezons",
      "Avenue de l'Arche"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Batterie livraison Défense",
      "Remorquage parking tour",
      "Crevaison gare Courbevoie",
      "Démarrage moto Bécon"
    ]
  },
  "clichy": {
    "intro": "À Clichy, nos dépanneurs empruntent le plus souvent Boulevard Jean-Jaurès ou Rue Martre pour rejoindre votre panne. Les remorquages vers Saint-Ouen ou Levallois passent par le boulevard Victor-Hugo ou la rue de Paris. Clichy (92, 92110) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 27 et 43 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 17e, Paris 18e, Saint-Ouen, Levallois-Perret) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie livraison Halles.",
    "axes": [
      "Boulevard Jean-Jaurès",
      "Rue Martre",
      "Boulevard Victor-Hugo"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie livraison Halles",
      "Remorquage ZAC",
      "Selle bloquée scooter"
    ]
  },
  "asnieres-sur-seine": {
    "intro": "À Asnières-sur-Seine, nos dépanneurs empruntent le plus souvent Boulevard Voltaire ou Rue du Château pour rejoindre votre panne. Les batteries faiblissent sur les trajets quotidiens vers La Défense via le pont d'Asnières. Le stationnement est dense autour du marché du centre; nos dépanneurs utilisent les emplacements livraison rue du Château et avenue de la Marne. La berge aménagée impose parfois des détours pour les plateaux en période de travaux. Asnières-sur-Seine (92, 92600) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 29 et 46 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Clichy, Courbevoie, Saint-Ouen, Paris 17e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie trajet Défense.",
    "axes": [
      "Boulevard Voltaire",
      "Rue du Château",
      "Quai Aulagnier"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie trajet Défense",
      "Remorquage entrepôt bords de Seine",
      "Démarrage moto gare"
    ]
  },
  "montrouge": {
    "intro": "À Montrouge, nos dépanneurs empruntent le plus souvent Avenue Henri-Ginoux ou Rue Gabriel-Péri pour rejoindre votre panne. Montrouge, enclavée entre Paris 14e, Malakoff et Bagneux, forme un passage obligé pour les deux-roues entre Montparnasse et le sud de la petite couronne. Le stationnement est réglementé autour de la mairie; nos dépanneurs utilisent les emplacements livraison rue Sadi-Carnot et avenue Henri-Ginoux. La proximité du 14e permet des interventions en moins de trente minutes en heure creuse. Montrouge (92, 92120) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 14e, Paris 13e, Villejuif, Paris 15e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie trajet Denfert.",
    "axes": [
      "Avenue Henri-Ginoux",
      "Rue Gabriel-Péri",
      "Avenue Pierre-Brossolette"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie trajet Denfert",
      "Remorquage ZAC Pont-Vert",
      "Ouverture selle parking"
    ]
  },
  "saint-denis": {
    "intro": "À Saint-Denis, nos dépanneurs empruntent le plus souvent Avenue du Président-Wilson ou Boulevard Anatole-France pour rejoindre votre panne. Les deux-roues circulent sur l'avenue du Président-Wilson, le boulevard Anatole-France et la rue de la République, avec des livraisons vers le Pleyel et la Plaine. Les crevaisons surviennent sur les pavés du centre ancien et sur les joints du. Les batteries faiblissent sur les trajets quotidiens entre Saint-Denis et Paris via la porte de la Chapelle. Le boulevard périphérique porte de la Chapelle et l'A1 restent les axes principaux. Le stationnement deux-roues est dense autour de la gare; nos dépanneurs se positionnent rue de la Boulangerie et avenue Michelet pour intervenir. Saint-Denis (93, 93200) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 30 et 48 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Saint-Ouen, Aubervilliers, Paris 18e, Paris 19e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : remorquage événement Stade de France. Les équipes traitent aussi : crevaison.",
    "axes": [
      "Avenue du Président-Wilson",
      "Boulevard Anatole-France",
      "Rue de la République",
      "Canal Saint-Denis"
    ],
    "landmarks": [
      "Canal Saint-Denis",
      "Pleyel"
    ],
    "commonInterventions": [
      "Remorquage événement Stade de France",
      "Crevaison",
      "Batterie trajet Paris",
      "Panne essence boulevard périphérique"
    ]
  },
  "montreuil": {
    "intro": "À Montreuil, nos dépanneurs empruntent le plus souvent Avenue de la Résistance ou Boulevard de la Boissière pour rejoindre votre panne. Les batteries cèdent sur les scooters de livraison entre Montreuil et Belleville via la rue de Bagnolet. La ZFE métropole n'empêche pas nos plateaux Euro 6 d'intervenir sur l'ensemble de la commune. Montreuil (93, 93100) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 45 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 20e, Paris 11e, Paris 12e, Vincennes) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison porte de Montreuil. Les équipes traitent aussi : batterie livraison Belleville.",
    "axes": [
      "Avenue de la Résistance",
      "Boulevard de la Boissière",
      "Rue de Paris",
      "Avenue Pasteur"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison porte de Montreuil",
      "Batterie livraison Belleville",
      "Remorquage atelier La Noue",
      "Selle bloquée scooter"
    ]
  },
  "aubervilliers": {
    "intro": "À Aubervilliers, nos dépanneurs empruntent le plus souvent Avenue Jean-Jaurès ou Boulevard Félix-Faure pour rejoindre votre panne. Les crevaisons surviennent sur les plates-bandes des zones logistiques et sur les nids-de-poule autour du port de la Villette. Les batteries faiblissent sur les scooters de livraison entre les entrepôts et Paris via la porte de la Villette. Les remorquages depuis les entrepôts imposent parfois des accès poids lourds; nos plateaux connaissent les voies de desserte. Le stationnement deux-roues est quasi absent dans les zones logistiques; les interventions se font sur voie de service ou parking visiteurs. Les créneaux de livraison Amazon et Cdiscount, très tôt le matin, concentrent les appels pour selles bloquées et batteries à plat sur les 125 cm³ de navette. Aubervilliers (93, 93300) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 31 et 49 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 19e, Saint-Denis, Pantin, Paris 18e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : batterie livraison entrepôt. Les équipes traitent aussi : crevaison zone logistique.",
    "axes": [
      "Avenue Jean-Jaurès",
      "Boulevard Félix-Faure",
      "Rue Heurtault"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Batterie livraison entrepôt",
      "Crevaison zone logistique",
      "Remorquage plateforme",
      "Panne essence avenue Jean-Jaurès"
    ]
  },
  "pantin": {
    "intro": "À Pantin, nos dépanneurs empruntent le plus souvent Avenue Jean-Lolive ou Quai de l'Ourcq pour rejoindre votre panne. Les crevaisons fréquentent les pavés des quais du canal et les joints du. Les batteries cèdent sur les trajets quotidiens entre Pantin et Paris via la porte de Pantin. Le stationnement est dense autour de la gare; nos dépanneurs utilisent les emplacements livraison rue Delizy et avenue Jean-Lolive. Les interventions de selles bloquées concernent souvent les scooters de livraison vers les commerces du centre. Pantin (93, 93500) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 29 et 46 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 19e, Aubervilliers, Bobigny, Montreuil) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison quai Ourcq. Les équipes traitent aussi : batterie trajet Paris.",
    "axes": [
      "Avenue Jean-Lolive",
      "Quai de l'Ourcq",
      "Rue Delizy"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison quai Ourcq",
      "Batterie trajet Paris",
      "Remorquage entrepôt",
      "Démarrage scooter gare"
    ]
  },
  "saint-ouen": {
    "intro": "À Saint-Ouen, nos dépanneurs empruntent le plus souvent Avenue Michelet ou Boulevard Victor-Hugo pour rejoindre votre panne. Les deux-roues circulent sur l'avenue Michelet, le boulevard Victor-Hugo et la rue de la République, avec des livraisons vers les Puces et les entrepôts des Docks. Les remorquages vers Clichy ou Asnières passent par le boulevard Victor-Hugo ou le pont de Saint-Ouen. Le stationnement est saturé le samedi autour des Puces; nos dépanneurs privilégient les créneaux en semaine ou le dimanche matin. La circulation sur l'avenue Michelet reste l'axe principal pour une intervention rapide depuis Paris. Les stands d'antiquaires côté Paul Bert imposent un chargement soigné du plateau pour ne pas endommager les véhicules de collection garés en enfilade. Saint-Ouen (93, 93400) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 18e, Clichy, Asnières-sur-Seine, Saint-Denis) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison marché aux puces. Les équipes traitent aussi : batterie trajet Paris 18e.",
    "axes": [
      "Avenue Michelet",
      "Boulevard Victor-Hugo",
      "Rue de la République"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison marché aux puces",
      "Batterie trajet Paris 18e",
      "Remorquage entrepôt Docks",
      "Selle bloquée livraison"
    ]
  },
  "bobigny": {
    "intro": "À Bobigny, nos dépanneurs empruntent le plus souvent Avenue Henri-Barbusse ou Rue de Lorraine pour rejoindre votre panne. Les batteries cèdent sur les trajets quotidiens entre Bobigny et Paris via la porte de Pantin. Le stationnement est réglementé autour de la préfecture; nos dépanneurs utilisent les emplacements livraison rue de Lorraine et avenue Henri-Barbusse. Bobigny (93, 93000) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Pantin, Aulnay-sous-Bois, Aubervilliers, Montreuil) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : remorquage urgence hôpital. Les équipes traitent aussi : crevaison.",
    "axes": [
      "Avenue Henri-Barbusse",
      "Rue de Lorraine",
      "Avenue de la République"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Remorquage urgence hôpital",
      "Crevaison",
      "Batterie trajet Paris",
      "Démarrage scooter préfecture"
    ]
  },
  "noisy-le-grand": {
    "intro": "À Noisy-le-Grand, nos dépanneurs empruntent le plus souvent Avenue du Général-de-Gaulle ou Rue de Picardie pour rejoindre votre panne. Les crevaisons surviennent sur les plates-bandes des parkings souterrains des centres commerciaux et sur les nids-de-poule autour du. Les batteries faiblissent sur les trajets quotidiens entre Noisy et Paris via le. Les remorquages depuis les parkings des Arcades imposent des contraintes de hauteur; nos conducteurs connaissent les accès autorisés. L'A4 et le boulevard périphérique porte de Bagnolet restent les axes principaux. Le stationnement deux-roues est dense autour des centres commerciaux; nos dépanneurs se positionnent sur les voies de desserte pour intervenir. Noisy-le-Grand (93, 93160) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 35 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Montreuil, Vincennes, Bobigny, Aulnay-sous-Bois) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : batterie trajet. Les équipes traitent aussi : remorquage parking centre commercial.",
    "axes": [
      "Avenue du Général-de-Gaulle",
      "Rue de Picardie",
      "Avenue du Mont-d'Est"
    ],
    "landmarks": [
      "Mont d'Est"
    ],
    "commonInterventions": [
      "Batterie trajet",
      "Remorquage parking centre commercial",
      "Crevaison Mont d'Est",
      "Panne essence A4"
    ]
  },
  "aulnay-sous-bois": {
    "intro": "À Aulnay-sous-Bois, nos dépanneurs empruntent le plus souvent Avenue de Nonneville ou Boulevard de Strasbourg pour rejoindre votre panne. Les crevaisons fréquentent les plates-bandes des zones d'activité et les nids-de-poule autour de la gare du. Les batteries cèdent sur les trajets quotidiens entre Aulnay et Paris via le. Les remorquages vers Bobigny ou le Bourget passent par l'avenue de Nonneville ou l'A1. Le stationnement est limité dans les zones commerciales; nos dépanneurs utilisent les voies de desserte et parkings visiteurs. La proximité de l'aéroport du Bourget génère parfois des fermetures ponctuelles de voies; nos équipes anticipent des détours via la N2 ou l'A86. Les zones commerciales O'Parinor et Aulnay2 concentrent les interventions de selles bloquées sur les scooters de livraison entre deux tournées. Aulnay-sous-Bois (93, 93600) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 34 et 52 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Bobigny, Pantin, Aubervilliers, Saint-Denis) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : batterie trajet. Les équipes traitent aussi : crevaison zone commerciale.",
    "axes": [
      "Avenue de Nonneville",
      "Boulevard de Strasbourg",
      "Avenue de la Division-Leclerc"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Batterie trajet",
      "Crevaison zone commerciale",
      "Remorquage entrepôt",
      "Démarrage moto gare"
    ]
  },
  "creteil": {
    "intro": "À Créteil, nos dépanneurs empruntent le plus souvent Avenue du Général-de-Gaulle ou Rue de Paris pour rejoindre votre panne. Les crevaisons surviennent sur les pavés du centre-ville et sur les joints du. Les batteries faiblissent sur les trajets quotidiens entre Créteil et Paris via le. Les parkings silos du centre commercial imposent des contraintes de rampe pour les maxi-scooters; nos conducteurs connaissent les accès côté niveau 1 quai du lac pour charger sans bloquer l'entrée principale. Créteil (94, 94000) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 33 et 51 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Alfortville, Saint-Maur-des-Fossés, Vitry-sur-Seine, Ivry-sur-Seine) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : batterie trajet. Les équipes traitent aussi : crevaison centre-ville.",
    "axes": [
      "Avenue du Général-de-Gaulle",
      "Rue de Paris"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Batterie trajet",
      "Crevaison centre-ville",
      "Remorquage Créteil Soleil",
      "Panne essence A4"
    ]
  },
  "vitry-sur-seine": {
    "intro": "À Vitry-sur-Seine, nos dépanneurs empruntent le plus souvent Avenue Paul-Vaillant-Couturier ou Boulevard de Stalingrad pour rejoindre votre panne. Les deux-roues circulent sur l'avenue Paul-Vaillant-Couturier, le boulevard de Stalingrad et la rue Henri-Barbusse, avec des livraisons vers les entrepôts des bords de Seine. Les crevaisons fréquentent les pavés du centre-ville et les nids-de-poule autour du. Les batteries cèdent sur les trajets quotidiens entre Vitry et Paris 13e via la porte d'Ivry. Les remorquages vers Ivry ou Créteil passent par le boulevard périphérique porte de Vitry ou l'avenue de Choisy. Le stationnement est limité dans les zones industrielles; nos dépanneurs se positionnent sur les voies de desserte. La berge aménagée impose parfois des détours pour les plateaux en période de travaux. Vitry-sur-Seine (94, 94400) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 49 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Ivry-sur-Seine, Créteil, Villejuif, Paris 13e) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison bords de Seine. Les équipes traitent aussi : batterie trajet Paris 13e.",
    "axes": [
      "Avenue Paul-Vaillant-Couturier",
      "Boulevard de Stalingrad",
      "Rue Henri-Barbusse"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison bords de Seine",
      "Batterie trajet Paris 13e",
      "Remorquage entrepôt",
      "Démarrage scooter centre-ville"
    ]
  },
  "ivry-sur-seine": {
    "intro": "À Ivry-sur-Seine, nos dépanneurs empruntent le plus souvent Avenue de la République ou Boulevard Paul-Vaillant-Couturier pour rejoindre votre panne. Les deux-roues circulent sur l'avenue de la République, le boulevard Paul-Vaillant-Couturier et la rue Gabriel-Péri, avec des livraisons vers les entrepôts et commerces. Les batteries faiblissent sur les trajets quotidiens entre Ivry et Place d'Italie. Le stationnement est dense autour de la gare; nos dépanneurs utilisent les emplacements livraison rue Gabriel-Péri et avenue de la République. La proximité du 13e permet des interventions en moins de trente-cinq minutes en heure creuse. Les zones industrielles côté quai de la Gare concentrent les pannes d'essence quand la station avenue Georges-Gosnat ferme pour travaux, situation récurrente le week-end. Ivry-sur-Seine (94, 94200) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 30 et 47 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 13e, Vitry-sur-Seine, charenton-le-port, Alfortville) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie trajet Place d'Italie.",
    "axes": [
      "Avenue de la République",
      "Boulevard Paul-Vaillant-Couturier",
      "Rue Gabriel-Péri"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie trajet Place d'Italie",
      "Remorquage zone industrielle",
      "Selle bloquée livraison"
    ]
  },
  "vincennes": {
    "intro": "À Vincennes, nos dépanneurs empruntent le plus souvent Avenue de Paris ou Boulevard de la Libération pour rejoindre votre panne. Les deux-roues circulent sur l'avenue de Paris, le boulevard de la Libération et la rue de Fontenay, avec des livraisons vers les commerces du centre et les événements du château. Les crevaisons fréquentent les pavés autour du château et les joints du. Les batteries cèdent sur les trajets quotidiens entre Vincennes et Nation ou Bastille. Les remorquages vers Montreuil ou Charenton passent par l'avenue de Paris ou le boulevard périphérique porte de Vincennes. Le stationnement est réglementé autour du château lors des événements; nos dépanneurs anticipent des points de rendez-vous sur le boulevard de la Libération. La circulation sur l'avenue de Paris reste l'axe principal pour une intervention rapide depuis Paris. Vincennes (94, 94300) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 27 et 43 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 12e, Montreuil, Saint-Maur-des-Fossés, charenton-le-port) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison pavés château. Les équipes traitent aussi : batterie trajet Nation.",
    "axes": [
      "Avenue de Paris",
      "Boulevard de la Libération",
      "Rue de Fontenay",
      "Avenue du Château"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison pavés château",
      "Batterie trajet Nation",
      "Remorquage événement château",
      "Démarrage moto centre-ville"
    ]
  },
  "saint-maur-des-fosses": {
    "intro": "À Saint-Maur-des-Fossés, nos dépanneurs empruntent le plus souvent Avenue du Bac ou Boulevard de Créteil pour rejoindre votre panne. Les batteries faiblissent sur les trajets quotidiens entre Saint-Maur et Paris via le. Les remorquages vers Créteil ou Vincennes passent par le boulevard de Créteil ou l'avenue du Bac. Le stationnement est dense le dimanche autour des quais; nos dépanneurs privilégient les créneaux en semaine. La promenade des quais impose parfois des restrictions aux deux-roues; nos dépanneurs connaissent les accès autorisés pour les plateaux. Saint-Maur-des-Fossés (94, 94100) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 49 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Vincennes, charenton-le-port, Créteil, Alfortville) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : batterie trajet. Les équipes traitent aussi : crevaison quais Marne.",
    "axes": [
      "Avenue du Bac",
      "Boulevard de Créteil",
      "Rue du Pont-de-Creteil"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Batterie trajet",
      "Crevaison quais Marne",
      "Remorquage centre-ville",
      "Panne essence boulevard Créteil"
    ]
  },
  "charenton-le-pont": {
    "intro": "À Charenton-le-Pont, nos dépanneurs empruntent le plus souvent Rue de Paris ou Avenue de Gravelle pour rejoindre votre panne. Les crevaisons fréquentent les pavés de la rue de Paris et les joints du. Les batteries cèdent sur les trajets quotidiens entre Charenton et Bastille ou Bercy. Les concerts à Accor Arena bloquent parfois le pont de Bercy : nous basculons alors le rendez-vous côté. Charenton-le-Pont (94, 94220) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 12e, Vincennes, Ivry-sur-Seine, Saint-Maur-des-Fossés) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison rue de Paris. Les équipes traitent aussi : batterie trajet Bercy.",
    "axes": [
      "Rue de Paris",
      "Avenue de Gravelle"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison rue de Paris",
      "Batterie trajet Bercy",
      "Remorquage Bercy Village",
      "Selle bloquée livraison"
    ]
  },
  "alfortville": {
    "intro": "À Alfortville, nos dépanneurs empruntent le plus souvent Avenue du Général-Leclerc ou Rue Véron pour rejoindre votre panne. Les crevaisons surviennent sur les pavés du centre et sur les nids-de-poule autour du. Les batteries faiblissent sur les trajets quotidiens entre Alfortville et Paris via le. Les remorquages vers Créteil ou Ivry passent par l'avenue du Général-Leclerc ou le boulevard périphérique porte de Charenton. Le stationnement est limité dans les zones industrielles; nos dépanneurs se positionnent sur les voies de desserte. Alfortville (94, 94140) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 30 et 46 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (charenton-le-port, Ivry-sur-Seine, Créteil, Saint-Maur-des-Fossés) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison zone industrielle. Les équipes traitent aussi : batterie trajet.",
    "axes": [
      "Avenue du Général-Leclerc",
      "Rue Véron"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison zone industrielle",
      "Batterie trajet",
      "Remorquage entrepôt",
      "Démarrage scooter centre-ville"
    ]
  },
  "villejuif": {
    "intro": "À Villejuif, nos dépanneurs empruntent le plus souvent Avenue de Paris ou Boulevard Maxime-Gorki pour rejoindre votre panne. Les deux-roues circulent sur l'avenue de Paris, le boulevard Maxime-Gorki et la rue Jean-Jaurès, avec des livraisons vers les hôpitaux et commerces. Les batteries cèdent sur les trajets quotidiens entre Villejuif et Paris 13e ou 14e. Les remorquages vers Vitry ou Montrouge passent par le boulevard périphérique porte d'Italie ou l'avenue de Paris. Le stationnement est dense autour des hôpitaux; nos dépanneurs utilisent les emplacements livraison rue Jean-Jaurès et boulevard Maxime-Gorki. Les navettes internes des hôpitaux, souvent des scooters électriques, génèrent aussi des demandes de dépannage batterie en fin de garde quand les bornes du parking souterrain sont saturées. Villejuif (94, 94800) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 31 et 48 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Paris 13e, Ivry-sur-Seine, Vitry-sur-Seine, Montrouge) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : remorquage urgence hôpital. Les équipes traitent aussi : crevaison.",
    "axes": [
      "Avenue de Paris",
      "Boulevard Maxime-Gorki",
      "Rue Jean-Jaurès",
      "Avenue de la République"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Remorquage urgence hôpital",
      "Crevaison",
      "Batterie trajet Paris 13e",
      "Démarrage scooter centre-ville"
    ]
  },
  "meaux": {
    "intro": "À Meaux, nos dépanneurs empruntent le plus souvent avenue de la Marne ou route de Varreddes pour rejoindre votre panne. Meaux, commune du Seine-et-Marne, se distingue comme pôle économique de la Brie avec un centre historique dense et des zones commerciales périphériques. Le trafic s'accumule aux heures de pointe sur l'axe Meaux–Paris et autour du centre historique où les livraisons bloquent les voies étroites. Stationnement difficile près du marché et de la gare : nos équipes se placent en double file courte le temps du dépannage. Accès rapide via l'A4 et la N3; les interventions nocturnes restent possibles sur les parkings des zones d'activité. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Meaux et votre point de panne exact. Meaux (77, 77100) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 48 et 70 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Lagny-sur-Marne, Torcy, Chelles, Roissy-en-Brie) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison boulevard de la République. Les équipes traitent aussi : batterie scooter zone commerciale.",
    "axes": [
      "avenue de la Marne",
      "route de Varreddes"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison boulevard de la République",
      "Batterie scooter zone commerciale",
      "Démarrage moto centre-ville",
      "Remorquage A4 direction Paris"
    ]
  },
  "melun": {
    "intro": "À Melun, nos dépanneurs empruntent le plus souvent avenue Thiers ou route de Montereau pour rejoindre votre panne. Les bords de Seine et les abords de la gare concentrent les arrêts courts des deux-roues en livraison ou en trajet domicile-travail. Les quais et le centre piéton imposent un dépannage rapide pour libé. L'A5 et la N104 facilitent l'arrivée depuis Paris; les secteurs sud vers Dammarie restent desservis en moins d'une heure. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Melun et votre point de panne exact. Melun (77, 77000) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 48 et 70 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Dammarie-les-Lys, Savigny-le-Temple, Lieusaint, Corbeil-Essonnes) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison quai Seine. Les équipes traitent aussi : batterie moto gare.",
    "axes": [
      "avenue Thiers",
      "route de Montereau",
      "quai Hippolyte-Rossignol"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison quai Seine",
      "Batterie moto gare",
      "Démarrage scooter centre",
      "Remorquage A5"
    ]
  },
  "chelles": {
    "intro": "À Chelles, nos dépanneurs empruntent le plus souvent avenue du Général-de-Gaulle pour rejoindre votre panne. Chelles, commune du Seine-et-Marne, se distingue comme ville résidentielle en lisière de la petite couronne, fortement connectée au. Parkings relais et zones commerciales permettent une intervention sans gêner les bus desservant la gare. Proximité immédiate de Noisy-le-Grand et du 93 : délais comparables à la petite couronne est. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Chelles et votre point de panne exact. Chelles (77, 77500) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Noisy-le-Grand, Torcy, Le Raincy, Livry-Gargan) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison avenue Général-de-Gaulle. Les équipes traitent aussi : batterie scooter.",
    "axes": [
      "avenue du Général-de-Gaulle"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison avenue Général-de-Gaulle",
      "Batterie scooter",
      "Démarrage moto parking commercial",
      "Remorquage vers Noisy-le-Grand"
    ]
  },
  "pontault-combault": {
    "intro": "À Pontault-Combault, nos dépanneurs empruntent le plus souvent avenue de la République pour rejoindre votre panne. Pontault-Combault, commune du Seine-et-Marne, se distingue comme commune résidentielle entre Marne et forêt, avec des axes structurants vers Créteil et Melun. L'axe vers Créteil et les parkings du centre commercial concentrent les deux-roues livreurs et les trajets domicile-travail vers le 94. Les lotissements résidentiels offrent des voies larges pour un dépannage sur place sans remorquage systématique. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Pontault-Combault et votre point de panne exact. Pontault-Combault (77, 77340) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Roissy-en-Brie, Noisy-le-Grand, Torcy, Ozoir-la-Ferrière) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison route de Boissise. Les équipes traitent aussi : batterie moto Carrefour.",
    "axes": [
      "avenue de la République"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison route de Boissise",
      "Batterie moto Carrefour",
      "Démarrage scooter résidentiel",
      "Remorquage vers Créteil"
    ]
  },
  "savigny-le-temple": {
    "intro": "Savigny-le-Temple, commune du Seine-et-Marne, se distingue comme ville nouvelle du secteur sud 77 avec zones d'activité, pôle universitaire et desserte. Les zones d'activité et le; les batteries faiblissent sur les longs stationnements en extérieur. Nos dépanneurs interviennent régulièrement pour crevaison zac portes de la forêt, batterie scooter. Parkings des ZAC et de la gare permettent une prise en charge visible et sécurisée. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Savigny-le-Temple et votre point de panne exact. Savigny-le-Temple (77, 77176) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 42 et 62 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Lieusaint, Melun, Corbeil-Essonnes, Dammarie-les-Lys) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison ZAC Portes de la Forêt. Les équipes traitent aussi : batterie scooter.",
    "axes": [],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison ZAC Portes de la Forêt",
      "Batterie scooter",
      "Démarrage moto campus",
      "Remorquage A5 nord"
    ]
  },
  "fontainebleau": {
    "intro": "Fontainebleau, commune du Seine-et-Marne, se distingue comme ville touristique et universitaire au cœur de la forêt, avec un centre historique et des quartiers pavillonnaires. L'affluence touristique et les étudiants en deux-roues compliquent le stationnement près du château et des résidences universitaires. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Fontainebleau et votre point de panne exact. Fontainebleau (77, 77300) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 55 et 80 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Dammarie-les-Lys, Melun, Savigny-le-Temple, Corbeil-Essonnes) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison centre historique. Les équipes traitent aussi : batterie moto INSEAD.",
    "axes": [],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison centre historique",
      "Batterie moto INSEAD",
      "Démarrage scooter forêt",
      "Remorquage A6 vers Paris"
    ]
  },
  "torcy": {
    "intro": "À Torcy, nos dépanneurs empruntent le plus souvent avenue de Lingenfeld ou route de Lagny pour rejoindre votre panne. Parkings souterrains et extérieurs du centre commercial facilitent le dépannage hors chaussée. Continuité directe avec Noisy-le-Grand et Chelles : délais proches de la petite couronne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Torcy et votre point de panne exact. Torcy (77, 77200) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Lagny-sur-Marne, Chelles, Noisy-le-Grand, Pontault-Combault) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie scooter Bay 2.",
    "axes": [
      "avenue de Lingenfeld",
      "route de Lagny"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie scooter Bay 2",
      "Démarrage moto Marne",
      "Remorquage vers Noisy-le-Grand"
    ]
  },
  "lagny-sur-marne": {
    "intro": "Lagny-sur-Marne, commune du Seine-et-Marne, se distingue comme ville de bords de Marne avec un centre ancien, des zones commerciales et une forte desserte vers Paris est. Les quais de Marne et le centre piéton voient circuler nombre de scooters de livraison le week-end et en soirée. Les zones commerciales en périphérie offrent plus d'espace pour une réparation sur place. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Lagny-sur-Marne et votre point de panne exact. Lagny-sur-Marne (77, 77400) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Torcy, Chelles, Roissy-en-Brie, Noisy-le-Grand) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison quai Marne. Les équipes traitent aussi : batterie moto centre.",
    "axes": [],
    "landmarks": [
      "Marne"
    ],
    "commonInterventions": [
      "Crevaison quai Marne",
      "Batterie moto centre",
      "Démarrage scooter zone commerciale",
      "Remorquage A4"
    ]
  },
  "brie-comte-robert": {
    "intro": "À Brie-Comte-Robert, nos dépanneurs empruntent le plus souvent avenue du Général-Leclerc pour rejoindre votre panne. Brie-Comte-Robert, commune du Seine-et-Marne, se distingue comme sous-préfecture de la Brie avec château médiéval, tissu commercial et desserte vers Melun et Paris. Le marché et le centre historique resserrent la circulation; les deux-roues s'arrêtent souvent sur les voies latérales. Position centrale dans le 77 sud : pivot entre Melun, Pontault et l'Essonne nord. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Brie-Comte-Robert et votre point de panne exact. Brie-Comte-Robert (77, 77170) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Combs-la-Ville, Lieusaint, Yerres, Ozoir-la-Ferrière) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison route de Paris. Les équipes traitent aussi : batterie moto marché.",
    "axes": [
      "avenue du Général-Leclerc"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison route de Paris",
      "Batterie moto marché",
      "Démarrage scooter château",
      "Remorquage vers Pontault-Combault"
    ]
  },
  "combs-la-ville": {
    "intro": "À Combs-la-Ville, nos dépanneurs empruntent le plus souvent avenue de la République ou route de Lieusaint pour rejoindre votre panne. Combs-la-Ville, commune du Seine-et-Marne, se distingue comme commune résidentielle du sud 77 entre forêt de Sénart et axes vers Melun et Corbeil. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Combs-la-Ville et votre point de panne exact. Combs-la-Ville (77, 77380) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Lieusaint, Brie-Comte-Robert, Yerres, Corbeil-Essonnes) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison avenue République. Les équipes traitent aussi : batterie scooter gare.",
    "axes": [
      "avenue de la République",
      "route de Lieusaint"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison avenue République",
      "Batterie scooter gare",
      "Démarrage moto Sénart",
      "Remorquage vers Savigny-le-Temple"
    ]
  },
  "lieusaint": {
    "intro": "À Lieusaint, nos dépanneurs empruntent le plus souvent allée du Préambule pour rejoindre votre panne. Interventions sur les parkings P du centre commercial, avec repérage GPS précis entre les allées. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Lieusaint et votre point de panne exact. Lieusaint (77, 77127) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Combs-la-Ville, Corbeil-Essonnes, Savigny-le-Temple, Brie-Comte-Robert) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison parking Carré Sénart. Les équipes traitent aussi : batterie moto zone retail.",
    "axes": [
      "allée du Préambule"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison parking Carré Sénart",
      "Batterie moto zone retail",
      "Démarrage scooter ZAC",
      "Remorquage A5"
    ]
  },
  "ozoir-la-ferriere": {
    "intro": "À Ozoir-la-Ferrière, nos dépanneurs empruntent le plus souvent avenue du Général-de-Gaulle ou route de Pontault pour rejoindre votre panne. Ozoir-la-Ferrière, commune du Seine-et-Marne, se distingue comme commune résidentielle entre Val-de-Marne et Brie, avec tissu pavillonnaire et zones d'activité. Les axes vers Pontault et le 94 voient un trafic de deux-roues en transit vers les zones commerciales voisines. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Ozoir-la-Ferrière et votre point de panne exact. Ozoir-la-Ferrière (77, 77330) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Roissy-en-Brie, Pontault-Combault, Brie-Comte-Robert, Torcy) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison centre Ozoir. Les équipes traitent aussi : batterie moto zone artisanale.",
    "axes": [
      "avenue du Général-de-Gaulle",
      "route de Pontault"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison centre Ozoir",
      "Batterie moto zone artisanale",
      "Démarrage scooter résidentiel",
      "Remorquage vers Pontault-Combault"
    ]
  },
  "roissy-en-brie": {
    "intro": "Roissy-en-Brie, commune du Seine-et-Marne, se distingue comme ville résidentielle du secteur est parisien avec. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Roissy-en-Brie et votre point de panne exact. Roissy-en-Brie (77, 77680) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Pontault-Combault, Ozoir-la-Ferrière, Torcy, Noisy-le-Grand) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison gare. Les équipes traitent aussi : batterie scooter marché.",
    "axes": [],
    "landmarks": [
      "gare Roissy-en-Brie"
    ],
    "commonInterventions": [
      "Crevaison gare",
      "Batterie scooter marché",
      "Démarrage moto centre-bourg",
      "Remorquage vers Brie-Comte-Robert"
    ]
  },
  "dammarie-les-lys": {
    "intro": "À Dammarie-les-Lys, nos dépanneurs empruntent le plus souvent avenue du Lys pour rejoindre votre panne. Les zones commerciales et les axes vers Melun voient un trafic soutenu de deux-roues livreurs et pendulaires. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Dammarie-les-Lys et votre point de panne exact. Dammarie-les-Lys (77, 77190) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 48 et 70 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Melun, Savigny-le-Temple, Fontainebleau, Lieusaint) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison avenue du Lys. Les équipes traitent aussi : batterie moto Carrefour.",
    "axes": [
      "avenue du Lys"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison avenue du Lys",
      "Batterie moto Carrefour",
      "Démarrage scooter Melun",
      "Remorquage A5"
    ]
  },
  "provins": {
    "intro": "Provins, commune du Seine-et-Marne, se distingue comme cité médiévale classée UNESCO à l'est de la Seine-et-Marne, avec tourisme et tissu rural périphérique. Les événements médiévaux et le tourisme estival multiplient les scooters de visiteurs sur les rues pavées du centre historique. Parkings périphériques obligatoires en haute saison : dépannage souvent sur les zones de stationnement visiteurs. Zone la plus éloignée du 77 couverte : délai annoncé plus long, intervention possible 24h/24. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Provins et votre point de panne exact. Provins (77, 77160) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 55 et 80 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Melun, Fontainebleau, Dammarie-les-Lys, Ozoir-la-Ferrière) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison remparts. Les équipes traitent aussi : batterie moto gare.",
    "axes": [],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison remparts",
      "Batterie moto gare",
      "Démarrage scooter tourisme",
      "Remorquage vers Melun"
    ]
  },
  "versailles": {
    "intro": "À Versailles, nos dépanneurs empruntent le plus souvent avenue de Paris ou boulevard de la Reine pour rejoindre votre panne. Versailles, commune du Yvelines, se distingue comme préfecture des Yvelines et ville patrimoniale majeure, avec château, administrations et quartiers denses. Le tourisme autour du château et les flux vers Paris génèrent un stationnement tendu où les deux-roues subissent crevaisons et vols de batterie. Rues étroites du centre : dépannage express pour éviter les fourrières sur les voies touristiques. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Versailles et votre point de panne exact. Versailles (78, 78000) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Le Chesnay-Rocquencourt, Guyancourt, Montigny-le-Bretonneux, Trappes) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison avenue de Paris. Les équipes traitent aussi : batterie moto gare Chantiers.",
    "axes": [
      "avenue de Paris",
      "boulevard de la Reine",
      "route de Saint-Cyr"
    ],
    "landmarks": [
      "château de Versailles"
    ],
    "commonInterventions": [
      "Crevaison avenue de Paris",
      "Batterie moto gare Chantiers",
      "Démarrage scooter château",
      "Remorquage A13"
    ]
  },
  "saint-germain-en-laye": {
    "intro": "À Saint-Germain-en-Laye, nos dépanneurs empruntent le plus souvent avenue du Général-Leclerc ou rue de Pologne pour rejoindre votre panne. Saint-Germain-en-Laye, commune du Yvelines, se distingue comme ville historique des bords de Seine avec château,. Stationnement réglementé en centre : intervention discrète sur place quand la chaussée le permet. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Saint-Germain-en-Laye et votre point de panne exact. Saint-Germain-en-Laye (78, 78100) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Chatou, Poissy, Rueil-Malmaison, Houilles) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto marché.",
    "axes": [
      "avenue du Général-Leclerc",
      "rue de Pologne"
    ],
    "landmarks": [
      "château de Saint-Germain"
    ],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto marché",
      "Démarrage scooter centre",
      "Remorquage vers Poissy"
    ]
  },
  "poissy": {
    "intro": "À Poissy, nos dépanneurs empruntent le plus souvent boulevard Gambetta pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Poissy et votre point de panne exact. Poissy (78, 78300) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Saint-Germain-en-Laye, Conflans-Sainte-Honorine, Chatou, Houilles) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison boulevard Gambetta. Les équipes traitent aussi : batterie moto gare.",
    "axes": [
      "boulevard Gambetta"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison boulevard Gambetta",
      "Batterie moto gare",
      "Démarrage scooter usine",
      "Remorquage A13"
    ]
  },
  "conflans-sainte-honorine": {
    "intro": "À Conflans-Sainte-Honorine, nos dépanneurs empruntent le plus souvent rue Maurice-Berteaux pour rejoindre votre panne. Conflans-Sainte-Honorine, commune du Yvelines, se distingue comme capitale de la batellerie au confluent Seine-Oise, avec un port actif et un centre-ville pittoresque. Les quais et le centre piéton compliquent la circulation des livreurs en scooter le long de la Seine. Rues pentues et pavées près du port : sécurisation du véhicule prioritaire avant remorquage. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Conflans-Sainte-Honorine et votre point de panne exact. Conflans-Sainte-Honorine (78, 78700) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Cergy, Herblay-sur-Seine, Pontoise, Poissy) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison rue Maurice-Berteaux. Les équipes traitent aussi : batterie moto port.",
    "axes": [
      "rue Maurice-Berteaux"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison rue Maurice-Berteaux",
      "Batterie moto port",
      "Démarrage scooter gare",
      "Remorquage A15"
    ]
  },
  "mantes-la-jolie": {
    "intro": "À Mantes-la-Jolie, nos dépanneurs empruntent le plus souvent avenue du Général-de-Gaulle pour rejoindre votre panne. Quartiers denses et zones commerciales : dépannage adapté au contexte urbain ou périurbain. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Mantes-la-Jolie et votre point de panne exact. Mantes-la-Jolie (78, 78200) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 48 et 70 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Les Mureaux, Poissy, Plaisir, Cergy) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison centre Mantes. Les équipes traitent aussi : batterie moto gare.",
    "axes": [
      "avenue du Général-de-Gaulle"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison centre Mantes",
      "Batterie moto gare",
      "Démarrage scooter Val Fourré",
      "Remorquage A13 est"
    ]
  },
  "sartrouville": {
    "intro": "À Sartrouville, nos dépanneurs empruntent le plus souvent avenue du Général-de-Gaulle pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Sartrouville et votre point de panne exact. Sartrouville (78, 78500) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Houilles, Bezons, Argenteuil, Colombes) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto centre.",
    "axes": [
      "avenue du Général-de-Gaulle"
    ],
    "landmarks": [
      "gare Sartrouville"
    ],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto centre",
      "Démarrage scooter Seine",
      "Remorquage vers Argenteuil"
    ]
  },
  "houilles": {
    "intro": "Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Houilles et votre point de panne exact. Houilles (78, 78800) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Bezons, Sartrouville, Nanterre, Colombes) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison gare Houilles. Les équipes traitent aussi : batterie moto marché.",
    "axes": [],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison gare Houilles",
      "Batterie moto marché",
      "Démarrage scooter centre",
      "Remorquage vers Sartrouville"
    ]
  },
  "montigny-le-bretonneux": {
    "intro": "À Montigny-le-Bretonneux, nos dépanneurs empruntent le plus souvent avenue du Centre pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Montigny-le-Bretonneux et votre point de panne exact. Montigny-le-Bretonneux (78, 78180) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Trappes, Guyancourt, Versailles, Plaisir) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison technopole. Les équipes traitent aussi : batterie moto.",
    "axes": [
      "avenue du Centre"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison technopole",
      "Batterie moto",
      "Démarrage scooter Espace Saint-Quentin",
      "Remorquage A12"
    ]
  },
  "trappes": {
    "intro": "À Trappes, nos dépanneurs empruntent le plus souvent avenue de la République pour rejoindre votre panne. Trappes, commune du Yvelines, se distingue comme ville de la communauté d'agglomération SQY avec gare. Interventions fréquentes sur les parkings de la gare et les rues commerçantes. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Trappes et votre point de panne exact. Trappes (78, 78190) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Montigny-le-Bretonneux, Guyancourt, Plaisir, Versailles) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison gare Trappes. Les équipes traitent aussi : batterie moto ZAC.",
    "axes": [
      "avenue de la République"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison gare Trappes",
      "Batterie moto ZAC",
      "Démarrage scooter centre",
      "Remorquage A12"
    ]
  },
  "rambouillet": {
    "intro": "À Rambouillet, nos dépanneurs empruntent le plus souvent rue du Général-de-Gaulle ou route de Chartres pour rejoindre votre panne. Rambouillet, commune du Yvelines, se distingue comme sous-préfecture au sud des Yvelines avec château, forêt et tissu économique périurbain. Les sorties vers la forêt et le centre historique concentrent les scooters de week-end et les livraisons locales. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Rambouillet et votre point de panne exact. Rambouillet (78, 78120) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 48 et 70 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Trappes, Montigny-le-Bretonneux, Plaisir, Guyancourt) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison centre Rambouillet. Les équipes traitent aussi : batterie moto forêt.",
    "axes": [
      "rue du Général-de-Gaulle",
      "route de Chartres"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison centre Rambouillet",
      "Batterie moto forêt",
      "Démarrage scooter château",
      "Remorquage N10"
    ]
  },
  "plaisir": {
    "intro": "À Plaisir, nos dépanneurs empruntent le plus souvent avenue de la République pour rejoindre votre panne. Plaisir, commune du Yvelines, se distingue comme commune résidentielle du secteur SQY ouest avec zones commerciales et desserte vers Versailles. Le centre commercial et la gare attirent livreurs et pendulaires; crevaisons sur les parkings en pente. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Plaisir et votre point de panne exact. Plaisir (78, 78370) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Trappes, Montigny-le-Bretonneux, Guyancourt, Versailles) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison centre commercial Plaisir. Les équipes traitent aussi : batterie moto gare.",
    "axes": [
      "avenue de la République"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison centre commercial Plaisir",
      "Batterie moto gare",
      "Démarrage scooter Grignon",
      "Remorquage vers Trappes"
    ]
  },
  "les-mureaux": {
    "intro": "Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Les Mureaux et votre point de panne exact. Les Mureaux (78, 78130) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 42 et 62 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Poissy, Cergy, Conflans-Sainte-Honorine, Mantes-la-Jolie) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison zone Airbus. Les équipes traitent aussi : batterie moto gare.",
    "axes": [],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison zone Airbus",
      "Batterie moto gare",
      "Démarrage scooter Seine",
      "Remorquage A13"
    ]
  },
  "chatou": {
    "intro": "À Chatou, nos dépanneurs empruntent le plus souvent avenue du Maréchal-Foch pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Chatou et votre point de panne exact. Chatou (78, 78400) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Rueil-Malmaison, Nanterre, Houilles, Saint-Germain-en-Laye) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison bords de Seine. Les équipes traitent aussi : batterie moto.",
    "axes": [
      "avenue du Maréchal-Foch"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison bords de Seine",
      "Batterie moto",
      "Démarrage scooter centre-bourg",
      "Remorquage vers Rueil"
    ]
  },
  "le-chesnay-rocquencourt": {
    "intro": "À Le Chesnay-Rocquencourt, nos dépanneurs empruntent le plus souvent avenue de Versailles pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Le Chesnay-Rocquencourt et votre point de panne exact. Le Chesnay-Rocquencourt (78, 78150) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Versailles, Guyancourt, Rueil-Malmaison, Chatou) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison Parly 2. Les équipes traitent aussi : batterie moto match PSG.",
    "axes": [
      "avenue de Versailles"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison Parly 2",
      "Batterie moto match PSG",
      "Démarrage scooter Versailles",
      "Remorquage A13"
    ]
  },
  "guyancourt": {
    "intro": "Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Guyancourt et votre point de panne exact. Guyancourt (78, 78280) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Montigny-le-Bretonneux, Versailles, Trappes, Le Chesnay-Rocquencourt) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison université. Les équipes traitent aussi : batterie moto technopole.",
    "axes": [],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison université",
      "Batterie moto technopole",
      "Démarrage scooter lac",
      "Remorquage A12"
    ]
  },
  "evry-courcouronnes": {
    "intro": "À Évry-Courcouronnes, nos dépanneurs empruntent le plus souvent boulevard des Coquibus pour rejoindre votre panne. Évry-Courcouronnes, commune du Essonne, se distingue comme préfecture de l'Essonne avec cathédrale, université et pôle administratif du sud IDF. Les axes vers Corbeil et la gare concentrent les deux-roues livreurs et étudiants aux heures de pointe. Nos dépanneurs interviennent régulièrement pour crevaison boulevard coquibus, batterie moto gare et démarrage scooter université autour de gare Évry-Courcouronnes. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Évry-Courcouronnes et votre point de panne exact. Évry-Courcouronnes (91, 91000) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Corbeil-Essonnes, Grigny, Viry-Châtillon, Draveil) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison boulevard Coquibus. Les équipes traitent aussi : batterie moto gare.",
    "axes": [
      "boulevard des Coquibus"
    ],
    "landmarks": [
      "gare Évry-Courcouronnes"
    ],
    "commonInterventions": [
      "Crevaison boulevard Coquibus",
      "Batterie moto gare",
      "Démarrage scooter université",
      "Remorquage A6"
    ]
  },
  "massy": {
    "intro": "À Massy, nos dépanneurs empruntent le plus souvent avenue Carnot pour rejoindre votre panne. Massy, commune du Essonne, se distingue comme pôle multimodal majeur avec TGV,. La gare TGV et les parkings relais voient des centaines de scooters; batteries à plat après stationnement prolongé. Interventions sur les parkings P du pôle gare avec localisation GPS précise. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Massy et votre point de panne exact. Massy (91, 91300) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Palaiseau, Antony, Longjumeau, Fresnes) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison gare Massy. Les équipes traitent aussi : batterie moto Village O.",
    "axes": [
      "avenue Carnot"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison gare Massy",
      "Batterie moto Village O",
      "Démarrage scooter",
      "Remorquage A10"
    ]
  },
  "palaiseau": {
    "intro": "À Palaiseau, nos dépanneurs empruntent le plus souvent route de Saclay ou avenue du Général-Leclerc pour rejoindre votre panne. Étudiants et chercheurs en scooter sur le plateau; crevaisons sur les routes forestières mal entretenues. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Palaiseau et votre point de panne exact. Palaiseau (91, 91120) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Massy, Longjumeau, Antony, Les Ulis) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison Polytechnique. Les équipes traitent aussi : batterie moto.",
    "axes": [
      "route de Saclay",
      "avenue du Général-Leclerc"
    ],
    "landmarks": [
      "École Polytechnique"
    ],
    "commonInterventions": [
      "Crevaison Polytechnique",
      "Batterie moto",
      "Démarrage scooter Saclay",
      "Remorquage N118"
    ]
  },
  "corbeil-essonnes": {
    "intro": "Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Corbeil-Essonnes et votre point de panne exact. Corbeil-Essonnes (91, 91100) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Évry-Courcouronnes, Lieusaint, Savigny-le-Temple, Combs-la-Ville) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison Marques Avenue. Les équipes traitent aussi : batterie moto gare.",
    "axes": [],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison Marques Avenue",
      "Batterie moto gare",
      "Démarrage scooter Seine",
      "Remorquage A6"
    ]
  },
  "savigny-sur-orge": {
    "intro": "À Savigny-sur-Orge, nos dépanneurs empruntent le plus souvent avenue Charles-de-Gaulle pour rejoindre votre panne. Savigny-sur-Orge, commune du Essonne, se distingue comme ville de l'Essonne nord avec. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Savigny-sur-Orge et votre point de panne exact. Savigny-sur-Orge (91, 91600) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Viry-Châtillon, Grigny, Sainte-Geneviève-des-Bois, Longjumeau) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto marché.",
    "axes": [
      "avenue Charles-de-Gaulle"
    ],
    "landmarks": [
      "gare Savigny-sur-Orge",
      "Orge"
    ],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto marché",
      "Démarrage scooter centre",
      "Remorquage vers Athis-Mons"
    ]
  },
  "athis-mons": {
    "intro": "Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Athis-Mons et votre point de panne exact. Athis-Mons (91, 91200) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Draveil, Orly, Viry-Châtillon, Montgeron) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto zone commerciale.",
    "axes": [],
    "landmarks": [
      "gare Athis-Mons"
    ],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto zone commerciale",
      "Démarrage scooter Orly",
      "Remorquage A86"
    ]
  },
  "viry-chatillon": {
    "intro": "À Viry-Châtillon, nos dépanneurs empruntent le plus souvent avenue du Général-de-Gaulle ou route de Grigny pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Viry-Châtillon et votre point de panne exact. Viry-Châtillon (91, 91170) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Grigny, Draveil, Savigny-sur-Orge, Athis-Mons) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison Grand Viry. Les équipes traitent aussi : batterie moto.",
    "axes": [
      "avenue du Général-de-Gaulle",
      "route de Grigny"
    ],
    "landmarks": [
      "gare Viry-Châtillon"
    ],
    "commonInterventions": [
      "Crevaison Grand Viry",
      "Batterie moto",
      "Démarrage scooter lac",
      "Remorquage A6"
    ]
  },
  "grigny": {
    "intro": "À Grigny, nos dépanneurs empruntent le plus souvent route de Corbeil pour rejoindre votre panne. Grigny, commune du Essonne, se distingue comme commune du sud Essonne avec. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Grigny et votre point de panne exact. Grigny (91, 91350) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Viry-Châtillon, Savigny-sur-Orge, Sainte-Geneviève-des-Bois, Draveil) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison Grande Borne. Les équipes traitent aussi : batterie moto.",
    "axes": [
      "route de Corbeil"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison Grande Borne",
      "Batterie moto",
      "Démarrage scooter centre",
      "Remorquage vers Viry"
    ]
  },
  "bretigny-sur-orge": {
    "intro": "La gare TGV et les axes vers le sud concentrent les deux-roues en correspondance. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Brétigny-sur-Orge et votre point de panne exact. Brétigny-sur-Orge (91, 91220) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Sainte-Geneviève-des-Bois, Grigny, Savigny-sur-Orge, Viry-Châtillon) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison gare Brétigny. Les équipes traitent aussi : batterie moto centre.",
    "axes": [],
    "landmarks": [
      "gare Brétigny-sur-Orge",
      "Orge"
    ],
    "commonInterventions": [
      "Crevaison gare Brétigny",
      "Batterie moto centre",
      "Démarrage scooter N20",
      "Remorquage A10"
    ]
  },
  "sainte-genevieve-des-bois": {
    "intro": "À Sainte-Geneviève-des-Bois, nos dépanneurs empruntent le plus souvent route de Corbeil ou avenue de la République pour rejoindre votre panne. Sainte-Geneviève-des-Bois, commune du Essonne, se distingue comme grande commune résidentielle du sud Essonne avec. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Sainte-Geneviève-des-Bois et votre point de panne exact. Sainte-Geneviève-des-Bois (91, 91700) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Brétigny-sur-Orge, Grigny, Savigny-sur-Orge, Viry-Châtillon) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto marché.",
    "axes": [
      "route de Corbeil",
      "avenue de la République"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto marché",
      "Démarrage scooter centre",
      "Remorquage N20"
    ]
  },
  "longjumeau": {
    "intro": "À Longjumeau, nos dépanneurs empruntent le plus souvent route de Corbeil pour rejoindre votre panne. Longjumeau, commune du Essonne, se distingue comme ville de l'Essonne nord avec. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Longjumeau et votre point de panne exact. Longjumeau (91, 91160) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Palaiseau, Massy, Savigny-sur-Orge, Antony) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison gare Longjumeau. Les équipes traitent aussi : batterie moto centre.",
    "axes": [
      "route de Corbeil"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison gare Longjumeau",
      "Batterie moto centre",
      "Démarrage scooter N20",
      "Remorquage A86"
    ]
  },
  "les-ulis": {
    "intro": "À Les Ulis, nos dépanneurs empruntent le plus souvent avenue de l'Aubrac pour rejoindre votre panne. Les Ulis, commune du Essonne, se distingue comme ville nouvelle avec zones commerciales, pôle tertiaire et desserte vers Saclay. Ulis 2 et les bureaux attirants du plateau concentrent les scooters de salariés le week-end au shopping. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Les Ulis et votre point de panne exact. Les Ulis (91, 91940) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Palaiseau, Massy, Longjumeau, Guyancourt) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison Ulis 2. Les équipes traitent aussi : batterie moto zone tertiaire.",
    "axes": [
      "avenue de l'Aubrac"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison Ulis 2",
      "Batterie moto zone tertiaire",
      "Démarrage scooter N118",
      "Remorquage A10"
    ]
  },
  "yerres": {
    "intro": "Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Yerres et votre point de panne exact. Yerres (91, 91330) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Montgeron, Draveil, Athis-Mons, Choisy-le-Roi) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison gare Yerres. Les équipes traitent aussi : batterie moto Parc Grange.",
    "axes": [],
    "landmarks": [
      "gare Yerres"
    ],
    "commonInterventions": [
      "Crevaison gare Yerres",
      "Batterie moto Parc Grange",
      "Démarrage scooter centre",
      "Remorquage Corbeil"
    ]
  },
  "draveil": {
    "intro": "Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Draveil et votre point de panne exact. Draveil (91, 91210) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Viry-Châtillon, Athis-Mons, Montgeron, Grigny) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison centre Draveil. Les équipes traitent aussi : batterie moto Seine.",
    "axes": [],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison centre Draveil",
      "Batterie moto Seine",
      "Démarrage scooter Mainville",
      "Remorquage Juvisy"
    ]
  },
  "montgeron": {
    "intro": "À Montgeron, nos dépanneurs empruntent le plus souvent avenue de la République pour rejoindre votre panne. Les sorties en forêt le week-end multiplient les crevaisons sur chemins mal éclairés. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Montgeron et votre point de panne exact. Montgeron (91, 91230) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Yerres, Draveil, Athis-Mons, Viry-Châtillon) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison forêt Sénart. Les équipes traitent aussi : batterie moto gare.",
    "axes": [
      "avenue de la République"
    ],
    "landmarks": [
      "gare Montgeron"
    ],
    "commonInterventions": [
      "Crevaison forêt Sénart",
      "Batterie moto gare",
      "Démarrage scooter centre",
      "Remorquage Yerres"
    ]
  },
  "argenteuil": {
    "intro": "Les axes vers Paris et les zones commerciales concentrent livreurs et pendulaires en scooter. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Argenteuil et votre point de panne exact. Argenteuil (95, 95100) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Colombes, Bezons, Gennevilliers, Sartrouville) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto Val d'Argent.",
    "axes": [],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto Val d'Argent",
      "Démarrage scooter Seine",
      "Remorquage A15"
    ]
  },
  "cergy": {
    "intro": "À Cergy, nos dépanneurs empruntent le plus souvent avenue de la Constellation ou boulevard du Port pour rejoindre votre panne. Cergy, commune du Val-d'Oise, se distingue comme préfecture du Val-d'Oise et ville nouvelle avec université,. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Cergy et votre point de panne exact. Cergy (95, 95000) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Pontoise, Conflans-Sainte-Honorine, Herblay-sur-Seine, Taverny) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto 3 Fontaines.",
    "axes": [
      "avenue de la Constellation",
      "boulevard du Port"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto 3 Fontaines",
      "Démarrage scooter université",
      "Remorquage A15"
    ]
  },
  "sarcelles": {
    "intro": "À Sarcelles, nos dépanneurs empruntent le plus souvent avenue de la République pour rejoindre votre panne. Sarcelles, commune du Val-d'Oise, se distingue comme grande ville du Val-d'Oise avec. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Sarcelles et votre point de panne exact. Sarcelles (95, 95200) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Montmorency, Garges-lès-Gonesse, Gonesse, Enghien-les-Bains) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto Loisirs.",
    "axes": [
      "avenue de la République"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto Loisirs",
      "Démarrage scooter marché",
      "Remorquage A1"
    ]
  },
  "garges-les-gonesse": {
    "intro": "À Garges-lès-Gonesse, nos dépanneurs empruntent le plus souvent avenue de la Division-Leclerc pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Garges-lès-Gonesse et votre point de panne exact. Garges-lès-Gonesse (95, 95140) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Sarcelles, Montmorency, Enghien-les-Bains, Ermont) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison centre Garges. Les équipes traitent aussi : batterie moto zone commerciale.",
    "axes": [
      "avenue de la Division-Leclerc"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison centre Garges",
      "Batterie moto zone commerciale",
      "Démarrage scooter A1",
      "Remorquage Sarcelles"
    ]
  },
  "franconville": {
    "intro": "Franconville, commune du Val-d'Oise, se distingue comme ville résidentielle du Val-d'Oise avec. Rues commerçantes autour de la gare : dépannage sur place sans bloquer le bus 367. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Franconville et votre point de panne exact. Franconville (95, 95130) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Ermont, Taverny, Argenteuil, Herblay-sur-Seine) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto centre.",
    "axes": [],
    "landmarks": [
      "gare Franconville"
    ],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto centre",
      "Démarrage scooter marché",
      "Remorquage A15"
    ]
  },
  "ermont": {
    "intro": "À Ermont, nos dépanneurs empruntent le plus souvent avenue de la République ou route de Franconville pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Ermont et votre point de panne exact. Ermont (95, 95120) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Franconville, Enghien-les-Bains, Montmorency, Argenteuil) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto centre.",
    "axes": [
      "avenue de la République",
      "route de Franconville"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto centre",
      "Démarrage scooter zone commerciale",
      "Remorquage Franconville"
    ]
  },
  "montmorency": {
    "intro": "À Montmorency, nos dépanneurs empruntent le plus souvent avenue Charles-de-Gaulle pour rejoindre votre panne. Montmorency, commune du Val-d'Oise, se distingue comme ville résidentielle prisée du Val-d'Oise avec. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Montmorency et votre point de panne exact. Montmorency (95, 95160) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Enghien-les-Bains, Épinay-sur-Seine, Sarcelles, Ermont) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto centre.",
    "axes": [
      "avenue Charles-de-Gaulle"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto centre",
      "Démarrage scooter parc",
      "Remorquage Enghien"
    ]
  },
  "enghien-les-bains": {
    "intro": "À Enghien-les-Bains, nos dépanneurs empruntent le plus souvent avenue de Ceinture pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Enghien-les-Bains et votre point de panne exact. Enghien-les-Bains (95, 95880) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Épinay-sur-Seine, Montmorency, Ermont, Gennevilliers) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison lac Enghien. Les équipes traitent aussi : batterie moto casino.",
    "axes": [
      "avenue de Ceinture"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison lac Enghien",
      "Batterie moto casino",
      "Démarrage scooter",
      "Remorquage Montmorency"
    ]
  },
  "goussainville": {
    "intro": "À Goussainville, nos dépanneurs empruntent le plus souvent route de Roissy pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Goussainville et votre point de panne exact. Goussainville (95, 95190) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Roissy-en-France, Gonesse, Sarcelles, Garges-lès-Gonesse) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto Roissy.",
    "axes": [
      "route de Roissy"
    ],
    "landmarks": [
      "gare Goussainville"
    ],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto Roissy",
      "Démarrage scooter centre",
      "Remorquage A1"
    ]
  },
  "taverny": {
    "intro": "À Taverny, nos dépanneurs empruntent le plus souvent avenue de la Gare pour rejoindre votre panne. Taverny, commune du Val-d'Oise, se distingue comme ville résidentielle du Val-d'Oise ouest avec. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Taverny et votre point de panne exact. Taverny (95, 95150) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Franconville, Ermont, Herblay-sur-Seine, Montmorency) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto centre.",
    "axes": [
      "avenue de la Gare"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto centre",
      "Démarrage scooter marché",
      "Remorquage Cergy"
    ]
  },
  "bezons": {
    "intro": "Les axes vers La Défense et Colombes voient un trafic dense de deux-roues. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Bezons et votre point de panne exact. Bezons (95, 95870) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Houilles, Sartrouville, Colombes, Argenteuil) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison Seine Bezons. Les équipes traitent aussi : batterie moto zone commerciale.",
    "axes": [],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison Seine Bezons",
      "Batterie moto zone commerciale",
      "Démarrage scooter Colombes",
      "Remorquage A15"
    ]
  },
  "herblay-sur-seine": {
    "intro": "À Herblay-sur-Seine, nos dépanneurs empruntent le plus souvent avenue du Général-de-Gaulle ou route de Conflans pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Herblay-sur-Seine et votre point de panne exact. Herblay-sur-Seine (95, 95220) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Conflans-Sainte-Honorine, Taverny, Franconville, Sartrouville) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison gare Herblay. Les équipes traitent aussi : batterie moto Seine.",
    "axes": [
      "avenue du Général-de-Gaulle",
      "route de Conflans"
    ],
    "landmarks": [
      "Seine"
    ],
    "commonInterventions": [
      "Crevaison gare Herblay",
      "Batterie moto Seine",
      "Démarrage scooter centre",
      "Remorquage Conflans"
    ]
  },
  "pontoise": {
    "intro": "À Pontoise, nos dépanneurs empruntent le plus souvent rue de la Coutellerie pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Pontoise et votre point de panne exact. Pontoise (95, 95300) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 36 et 55 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Cergy, Conflans-Sainte-Honorine, Herblay-sur-Seine, Taverny) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison centre Pontoise. Les équipes traitent aussi : batterie moto gare.",
    "axes": [
      "rue de la Coutellerie"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison centre Pontoise",
      "Batterie moto gare",
      "Démarrage scooter préfecture",
      "Remorquage Cergy"
    ]
  },
  "gonesse": {
    "intro": "Gonesse, commune du Val-d'Oise, se distingue comme commune du nord-est IDF avec zones commerciales,. Les zones commerciales Garonor et la proximité Roissy concentrent livreurs et salariés. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Gonesse et votre point de panne exact. Gonesse (95, 95500) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Sarcelles, Goussainville, Roissy-en-France, Le Blanc-Mesnil) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison Garonor. Les équipes traitent aussi : batterie moto.",
    "axes": [],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison Garonor",
      "Batterie moto",
      "Démarrage scooter centre",
      "Remorquage Roissy"
    ]
  },
  "roissy-en-france": {
    "intro": "À Roissy-en-France, nos dépanneurs empruntent le plus souvent avenue Charles-de-Gaulle pour rejoindre votre panne. L'activité aéroportuaire et logistique génère un trafic 24h/24 de deux-roues livreurs et salariés. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Roissy-en-France et votre point de panne exact. Roissy-en-France (95, 95700) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Goussainville, Gonesse, Sevran, Aulnay-sous-Bois) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison zone hôtelière. Les équipes traitent aussi : batterie moto logistique CDG.",
    "axes": [
      "avenue Charles-de-Gaulle"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison zone hôtelière",
      "Batterie moto logistique CDG",
      "Démarrage scooter entrepôt",
      "Remorquage A1"
    ]
  },
  "rueil-malmaison": {
    "intro": "À Rueil-Malmaison, nos dépanneurs empruntent le plus souvent avenue Paul-Doumer pour rejoindre votre panne. Rueil-Malmaison, commune du Hauts-de-Seine, se distingue comme grande commune des Hauts-de-Seine avec château, La Défense proche et. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Rueil-Malmaison et votre point de panne exact. Rueil-Malmaison (92, 92500) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Nanterre, Chatou, Suresnes, Puteaux) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto château.",
    "axes": [
      "avenue Paul-Doumer"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto château",
      "Démarrage scooter La Défense",
      "Remorquage A86"
    ]
  },
  "colombes": {
    "intro": "À Colombes, nos dépanneurs empruntent le plus souvent avenue Henri-Barbusse pour rejoindre votre panne. Colombes, commune du Hauts-de-Seine, se distingue comme ville dense des Hauts-de-Seine avec. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Colombes et votre point de panne exact. Colombes (92, 92700) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Argenteuil, Asnières-sur-Seine, Bezons, Courbevoie) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison gare Colombes. Les équipes traitent aussi : batterie moto stade.",
    "axes": [
      "avenue Henri-Barbusse"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison gare Colombes",
      "Batterie moto stade",
      "Démarrage scooter centre",
      "Remorquage Argenteuil"
    ]
  },
  "antony": {
    "intro": "À Antony, nos dépanneurs empruntent le plus souvent avenue de la Division-Leclerc pour rejoindre votre panne. Antony, commune du Hauts-de-Seine, se distingue comme ville résidentielle du sud 92 avec. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Antony et votre point de panne exact. Antony (92, 92160) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Fresnes, Massy, L'Haÿ-les-Roses, Bagneux) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto centre.",
    "axes": [
      "avenue de la Division-Leclerc"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto centre",
      "Démarrage scooter Massy",
      "Remorquage A86"
    ]
  },
  "clamart": {
    "intro": "À Clamart, nos dépanneurs empruntent le plus souvent avenue Jean-Jaurès ou route de Châtillon pour rejoindre votre panne. Clamart, commune du Hauts-de-Seine, se distingue comme commune du plateau de Clamart avec hôpital,. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Clamart et votre point de panne exact. Clamart (92, 92140) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Issy-les-Moulineaux, Bagneux, Montrouge, Boulogne-Billancourt) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison hôpital Clamart. Les équipes traitent aussi : batterie moto.",
    "axes": [
      "avenue Jean-Jaurès",
      "route de Châtillon"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison hôpital Clamart",
      "Batterie moto",
      "Démarrage scooter plateau",
      "Remorquage Montrouge"
    ]
  },
  "puteaux": {
    "intro": "À Puteaux, nos dépanneurs empruntent le plus souvent rue Jean-Jaurès pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Puteaux et votre point de panne exact. Puteaux (92, 92800) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Suresnes, Courbevoie, Neuilly-sur-Seine, Nanterre) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison La Défense. Les équipes traitent aussi : batterie moto.",
    "axes": [
      "rue Jean-Jaurès"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison La Défense",
      "Batterie moto",
      "Démarrage scooter bureaux",
      "Remorquage Courbevoie"
    ]
  },
  "suresnes": {
    "intro": "À Suresnes, nos dépanneurs empruntent le plus souvent rue du Mont-Valérien pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Suresnes et votre point de panne exact. Suresnes (92, 92150) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Puteaux, Nanterre, Rueil-Malmaison, Neuilly-sur-Seine) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison Mont-Valérien. Les équipes traitent aussi : batterie moto.",
    "axes": [
      "rue du Mont-Valérien"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison Mont-Valérien",
      "Batterie moto",
      "Démarrage scooter coteaux",
      "Remorquage Puteaux"
    ]
  },
  "gennevilliers": {
    "intro": "À Gennevilliers, nos dépanneurs empruntent le plus souvent avenue du Général-de-Gaulle pour rejoindre votre panne. Nos dépanneurs interviennent régulièrement pour crevaison zone logistique, batterie moto port et démarrage scooter. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Gennevilliers et votre point de panne exact. Gennevilliers (92, 92230) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Asnières-sur-Seine, Épinay-sur-Seine, Clichy, Colombes) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison zone logistique. Les équipes traitent aussi : batterie moto port.",
    "axes": [
      "avenue du Général-de-Gaulle"
    ],
    "landmarks": [
      "gare Gennevilliers"
    ],
    "commonInterventions": [
      "Crevaison zone logistique",
      "Batterie moto port",
      "Démarrage scooter",
      "Remorquage Colombes"
    ]
  },
  "bagneux": {
    "intro": "Bagneux, commune du Hauts-de-Seine, se distingue comme commune dense du sud 92 avec. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Bagneux et votre point de panne exact. Bagneux (92, 92220) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 25 et 40 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Cachan, Montrouge, Arcueil, L'Haÿ-les-Roses) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto centre.",
    "axes": [],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto centre",
      "Démarrage scooter marché",
      "Remorquage Montrouge"
    ]
  },
  "bondy": {
    "intro": "À Bondy, nos dépanneurs empruntent le plus souvent avenue de la République pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Bondy et votre point de panne exact. Bondy (93, 93140) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Le Raincy, Bobigny, Drancy, Aulnay-sous-Bois) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto.",
    "axes": [
      "avenue de la République"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto",
      "Démarrage scooter centre",
      "Remorquage Noisy-le-Grand"
    ]
  },
  "le-raincy": {
    "intro": "À Le Raincy, nos dépanneurs empruntent le plus souvent avenue Thiers pour rejoindre votre panne. Le Raincy, commune du Seine-Saint-Denis, se distingue comme ville résidentielle prisée du 93 avec. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Le Raincy et votre point de panne exact. Le Raincy (93, 93340) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Livry-Gargan, Bondy, Sevran, Aulnay-sous-Bois) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto centre.",
    "axes": [
      "avenue Thiers"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto centre",
      "Démarrage scooter parc",
      "Remorquage Bondy"
    ]
  },
  "livry-gargan": {
    "intro": "Livry-Gargan, commune du Seine-Saint-Denis, se distingue comme grande commune du 93 nord-est avec. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Livry-Gargan et votre point de panne exact. Livry-Gargan (93, 93190) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Sevran, Le Raincy, Aulnay-sous-Bois, Bondy) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto centre commercial.",
    "axes": [],
    "landmarks": [
      "gare Livry-Gargan"
    ],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto centre commercial",
      "Démarrage scooter centre",
      "Remorquage Sevran"
    ]
  },
  "sevran": {
    "intro": "Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Sevran et votre point de panne exact. Sevran (93, 93270) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 32 et 50 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Livry-Gargan, Aulnay-sous-Bois, Le Raincy, Le Blanc-Mesnil) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto zone activité.",
    "axes": [],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto zone activité",
      "Démarrage scooter canal",
      "Remorquage Aulnay"
    ]
  },
  "drancy": {
    "intro": "À Drancy, nos dépanneurs empruntent le plus souvent avenue de la Division-Leclerc pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Drancy et votre point de panne exact. Drancy (93, 93700) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Bobigny, Le Blanc-Mesnil, Bondy, Aulnay-sous-Bois) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto centre.",
    "axes": [
      "avenue de la Division-Leclerc"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto centre",
      "Démarrage scooter marché",
      "Remorquage Bobigny"
    ]
  },
  "le-blanc-mesnil": {
    "intro": "À Le Blanc-Mesnil, nos dépanneurs empruntent le plus souvent avenue de la République pour rejoindre votre panne. Le Blanc-Mesnil, commune du Seine-Saint-Denis, se distingue comme commune du 93 nord avec. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Le Blanc-Mesnil et votre point de panne exact. Le Blanc-Mesnil (93, 93150) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Drancy, Aulnay-sous-Bois, Bobigny, Bondy) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto zone commerciale.",
    "axes": [
      "avenue de la République"
    ],
    "landmarks": [
      "gare Le Blanc-Mesnil"
    ],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto zone commerciale",
      "Démarrage scooter CDG",
      "Remorquage Drancy"
    ]
  },
  "epinay-sur-seine": {
    "intro": "Épinay-sur-Seine, commune du Seine-Saint-Denis, se distingue comme ville de bords de Seine avec. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Épinay-sur-Seine et votre point de panne exact. Épinay-sur-Seine (93, 93800) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Enghien-les-Bains, Gennevilliers, Montmorency, Saint-Denis) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto Seine.",
    "axes": [],
    "landmarks": [
      "Seine"
    ],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto Seine",
      "Démarrage scooter centre",
      "Remorquage Saint-Denis"
    ]
  },
  "l-hay-les-roses": {
    "intro": "À L'Haÿ-les-Roses, nos dépanneurs empruntent le plus souvent avenue de la République pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre L'Haÿ-les-Roses et votre point de panne exact. L'Haÿ-les-Roses (94, 94240) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Cachan, Villejuif, Fresnes, Bagneux) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto parc.",
    "axes": [
      "avenue de la République"
    ],
    "landmarks": [
      "gare L'Haÿ-les-Roses"
    ],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto parc",
      "Démarrage scooter centre",
      "Remorquage Cachan"
    ]
  },
  "thiais": {
    "intro": "À Thiais, nos dépanneurs empruntent le plus souvent avenue de la République pour rejoindre votre panne. Thiais, commune du Val-de-Marne, se distingue comme commune du 94 avec Belle Épine, Orly proche et zones commerciales majeures. Nos dépanneurs interviennent régulièrement pour crevaison belle épine, batterie moto orly et démarrage scooter. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Thiais et votre point de panne exact. Thiais (94, 94320) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Choisy-le-Roi, Orly, Vitry-sur-Seine, Villejuif) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison Belle Épine. Les équipes traitent aussi : batterie moto Orly.",
    "axes": [
      "avenue de la République"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison Belle Épine",
      "Batterie moto Orly",
      "Démarrage scooter",
      "Remorquage Choisy"
    ]
  },
  "choisy-le-roi": {
    "intro": "À Choisy-le-Roi, nos dépanneurs empruntent le plus souvent avenue de la République pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Choisy-le-Roi et votre point de panne exact. Choisy-le-Roi (94, 94600) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Thiais, Orly, Vitry-sur-Seine, Créteil) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto Seine.",
    "axes": [
      "avenue de la République"
    ],
    "landmarks": [
      "gare Choisy-le-Roi"
    ],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto Seine",
      "Démarrage scooter centre",
      "Remorquage Thiais"
    ]
  },
  "orly": {
    "intro": "À Orly, nos dépanneurs empruntent le plus souvent avenue de la République pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Orly et votre point de panne exact. Orly (94, 94310) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Thiais, Choisy-le-Roi, Athis-Mons, Vitry-sur-Seine) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison zone aéroportuaire. Les équipes traitent aussi : batterie moto hôtel.",
    "axes": [
      "avenue de la République"
    ],
    "landmarks": [
      "aéroport Orly"
    ],
    "commonInterventions": [
      "Crevaison zone aéroportuaire",
      "Batterie moto hôtel",
      "Démarrage scooter logistique",
      "Remorquage A86"
    ]
  },
  "fresnes": {
    "intro": "À Fresnes, nos dépanneurs empruntent le plus souvent avenue de la République pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Fresnes et votre point de panne exact. Fresnes (94, 94260) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 28 et 44 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Antony, L'Haÿ-les-Roses, Cachan, Massy) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto centre.",
    "axes": [
      "avenue de la République"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto centre",
      "Démarrage scooter marché",
      "Remorquage L'Haÿ"
    ]
  },
  "cachan": {
    "intro": "Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Cachan et votre point de panne exact. Cachan (94, 94230) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 25 et 40 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Arcueil, L'Haÿ-les-Roses, Bagneux, Villejuif) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto centre.",
    "axes": [],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto centre",
      "Démarrage scooter école",
      "Remorquage Arcueil"
    ]
  },
  "arcueil": {
    "intro": "À Arcueil, nos dépanneurs empruntent le plus souvent avenue Laplace pour rejoindre votre panne. Comptez un délai annoncé au téléphone avant départ, adapté au trafic entre Arcueil et votre point de panne exact. Arcueil (94, 94110) : dépannage et remorquage scooter et moto 24h/24. Délai annoncé au téléphone, en général entre 25 et 40 minutes selon le trafic. Nous rejoignons aussi les communes limitrophes (Cachan, Montrouge, Bagneux, Villejuif) selon le trafic. Nos équipes couvrent l'ensemble du territoire communal, du centre aux zones d'activité et aux quartiers résidentiels. Le dépannage sur place porte sur batterie, crevaison, démarrage, panne d'essence ou ouverture de selle. Le remorquage vers votre domicile, votre garage ou un professionnel partenaire se fait avec devis ferme avant intervention. Nous intervenons y compris la nuit, le week-end et les jours fériés, sur deux-roues thermiques ou électriques homologués route. Le technicien précise le tarif de déplacement et la prestation avant de quitter la base. Appelez le numéro affiché pour confirmer le délai et le prix avant départ du plateau. Interventions courantes : crevaison. Les équipes traitent aussi : batterie moto CROUS.",
    "axes": [
      "avenue Laplace"
    ],
    "landmarks": [],
    "commonInterventions": [
      "Crevaison",
      "Batterie moto CROUS",
      "Démarrage scooter centre",
      "Remorquage Montrouge"
    ]
  }
} as Record<string, ZoneGeoPatch>;

export function applyGeoToZone(zone: Zone): Zone {
  const patch = zonesGeoApplied[zone.slug];
  if (!patch) return zone;
  return { ...zone, ...patch };
}
