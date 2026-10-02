# Rapports de vérification — depannagescooter.com

Mesurés sur le HTML servi en production (`https://www.depannagescooter.com`), après déploiement. Les entités HTML ont été décodées avant les recherches. GitHub `main` au moment du dernier contrôle : `333a6fc`.

Le domaine, les URL absolues et les redirections n’ont pas été modifiés.

---

## Préalable — liens vers les pages supprimées

**0 lien corrigé.** Aucun lien interne du code (hors redirections et liste des slugs retirés) ni des 103 pages alors au sitemap ne pointait vers les 4 départements de grande couronne ou les 60 communes retirées.

---

## Bloc 2 — périmètre indexé

Déployé (`bf1dcd0`). `validate:data` : PASS. Le seuil Jaccard reste 0,8, mesuré sur le seul `clientContent` non vide. Aucune paire en échec.

L’API officielle des communes, au 1er octobre 2026, compte **122** communes en petite couronne (36 + 39 + 47), pas 123. Les 47 pages déjà en ligne correspondaient à des codes INSEE existants. **75 pages créées.** Total : **142 pages de zones** (20 arrondissements + 122 communes).

| Contrôle | Résultat |
|---|---|
| Pages de zones | 142 |
| Indexées (`index, follow`) | 142 / 142 |
| URL au sitemap au moment du bloc | 178 |
| `clientContent` | vide |
| Voies BAN des 75 nouvelles | ligne absente |
| Délai des 75 nouvelles | 25 à 40 min, délai annoncé de l’entreprise |

Cinq fiches tirées au hasard :

- **L'Haÿ-les-Roses** — 11,7 km, environ 21 min, délai 28 à 44 min, 80 € TTC, 31 188 habitants, 3,9 km², 8 006 hab./km², limitrophes Antony, Bourg-la-Reine, Cachan, Chevilly-Larue, Fresnes, Villejuif, voie Avenue de la République.
- **Vanves** — 7,8 km, environ 19 min, délai 25 à 40 min, 80 € TTC, 28 622 habitants, 1,6 km², 18 406 hab./km², limitrophes Clamart, Issy-les-Moulineaux, Malakoff, Paris 15e. Pas de voie BAN.
- **Gagny** — 16,7 km, environ 23 min, délai 25 à 40 min, 80 € TTC, 42 313 habitants, 7,0 km², 6 075 hab./km², limitrophes Chelles, Clichy-sous-Bois, Gournay-sur-Marne, Le Raincy, Montfermeil, Neuilly-sur-Marne, Villemomble. Chelles est en texte, sans lien.
- **Santeny** — 26,5 km, environ 31 min, délai 25 à 40 min, 80 € TTC, 3 913 habitants, 10,0 km², 390 hab./km², limitrophes La Queue-en-Brie, Lésigny, Mandres-les-Roses, Marolles-en-Brie, Servon, Sucy-en-Brie, Villecresnes. Lésigny et Servon sont en texte, sans lien.
- **Les Pavillons-sous-Bois** — 16,0 km, environ 22 min, délai 25 à 40 min, 80 € TTC, 25 804 habitants, 2,9 km², 8 831 hab./km², limitrophes Aulnay-sous-Bois, Bondy, Le Raincy, Livry-Gargan, Villemomble.

Phrases : **178 contrôles, 178 conformes.** Non conformes : aucune.

---

## Bloc 3 — les 4 hubs

Déployé (`f787ba0`). **0 occurrence de « en Paris »** sur les 178 URL d’alors, et encore 0 sur les 179 URL après les blocs suivants.

| Hub | Meta | Caractères | Mots au déploiement | Mots après le bloc 5 |
|---|---|---|---|---|
| Paris | Dépannage et remorquage de scooters et motos à Paris, 24h/24, dans les vingt arrondissements. Devis ferme par téléphone avant le déplacement. | 141 | 691 | 928 |
| Hauts-de-Seine | Dépannage et remorquage de scooters et motos en Hauts-de-Seine, 24h/24. Devis ferme par téléphone avant le déplacement, tarif du jour affiché. | 142 | 691 | 928 |
| Seine-Saint-Denis | Dépannage et remorquage de scooters et motos en Seine-Saint-Denis, 24h/24. Devis ferme par téléphone avant le déplacement, tarif du jour affiché. | 145 | 691 | 928 |
| Val-de-Marne | Dépannage et remorquage de scooters et motos dans le Val-de-Marne, 24h/24. Devis ferme par téléphone avant le déplacement, tarif du jour affiché. | 145 | 696 | 933 |

Les H1 sont « à Paris (75) », « en Hauts-de-Seine (92) », « en Seine-Saint-Denis (93) », « dans le Val-de-Marne (94) ». Noms propres de lieux introduits dans le texte des hubs : **liste vide**. La hausse de mots vient du bloc 5, ajouté sous les tableaux.

Phrases : **178 contrôles, 178 conformes.** Non conformes : aucune.

---

## Bloc 4 — rééquilibrage de l’offre

Déployé (`1fc5492`). Sitemap passé à **179** URL.

- Accueil : le bloc « Quels dépannages sur place » précède « Quand faut-il un remorquage ». Sur `/depannage-sur-place/`, les cartes de dépannage précèdent le lien « Voir le remorquage ».
- Title : « Dépannage scooter et moto 24h/24, remorquage ensuite ».
- H1 : « Dépannage scooter et moto 24h/24 en Île-de-France, remorquage si la panne ne se répare pas sur place ».
- `/depannage-voiture/pneu/` : **200**. 812 mots au déploiement, **864** après les mentions du bloc 5 (avant la grille tarifaire du pneu).
- `/depannage-voiture/` : **188 mots**.
- « seule la batterie est prise en charge » : **0** occurrence, y compris sans accent.
- WhatsApp des trois pages voiture : « Bonjour, je suis en panne avec ma voiture en Île-de-France. Pouvez-vous m'aider ? » La page batterie porte ce lien deux fois.

Occurrences de « trois-roues » au déploiement :

| Page | Nombre |
|---|---|
| / | 2 |
| /tarifs/ | 1 |
| /remorquage/ | 2 |
| /depannage-sur-place/ | 1 |
| /faq/ | 1 |
| /a-propos/ | 1 |
| /depannage-sur-place/crevaison/ | 2 |
| /depannage-sur-place/batterie/ | 1 |
| /remorquage/remorquage-scooter/ | 1 |
| /remorquage/remorquage-3-roues/ | 3 |
| /remorquage/remorquage-moto-accidentee/ | 1 |
| /remorquage/remorquage-moto/ | 1 |
| /remorquage/transfert-garage-concession/ | 1 |

Le pneu voiture n’avait pas encore de montant dans la grille à ce stade. La page donnait un devis ferme au téléphone, sans euro inventé. La grille a été ajoutée ensuite (voir le rapport suivant).

Phrases : **179 contrôles, 179 conformes.** Non conformes : aucune.

---

## Bloc 5 — valeur perçue des tarifs

Déployé (`33bf1a8`). Sous chaque tableau : déplacement inclus, assurance responsabilité civile professionnelle, devis ferme confirmé par téléphone avant tout déplacement, aucune intervention sans accord du client, paiement par carte ou espèces sur place, et l’encart « Votre assurance peut prendre en charge » vers `/faq/#assistance-0-km`. L’ancre est présente sur la FAQ.

**160 pages** portent un tableau tarifaire, **186 tableaux**. **182 tableaux** ont aussi « sanglage et calage adaptés aux deux-roues ».

Les **4 tableaux batterie voiture** n’annoncent pas le sanglage, qui ne concerne pas cette intervention : 2 sur `/tarifs/`, 2 sur `/depannage-voiture/batterie/`. `/depannage-voiture/pneu/` n’avait pas encore de tableau ; la section tarif reprenait les cinq autres mentions et l’encart.

Répartition des 160 pages : 142 zones (1 tableau), 4 hubs (4), accueil (3), `/tarifs/` (6), `/remorquage/` (2), 5 pages dépannage (2), 5 pages remorquage (1), batterie voiture (2).

Phrases : **179 contrôles, 179 conformes.** Non conformes : aucune.

---

## Bloc 6 — page crevaison et technique

Déployé (`ba9942d`, puis `4cf7b08` pour le résumé `llms.txt`).

Le déroulé servi sur `/depannage-sur-place/crevaison/` est : localisation de la perforation, pose d’une mèche roue en place, test à l’eau savonneuse, regonflage et contrôle de la pression. Le démontage et le remplacement du pneu sont limités au flanc, à la déchirure et à la jante voilée. Le guide crevaison dit la même chose.

« rustine » et « champignon » : **0 occurrence** sur les 179 URL du sitemap, formes sans accent comprises.

`sizes` est présent sur chaque image de galerie :

- crevaison : 3/3, `(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc((100vw - 4.5rem) / 3), (max-width: 1152px) calc((100vw - 5rem) / 3), 22rem`
- remorquage, 6 pages (hub + 5 services) : 9/9 chacune, largeur mobile en deux colonnes puis la même largeur de colonne

Les 3 photos du guide crevaison avaient déjà un `sizes` : `(max-width: 640px) 100vw, 33vw`. Elles n’ont pas été modifiées.

Phrases : **179 contrôles, 179 conformes.** Non conformes : aucune.

---

## Grille du pneu voiture

Déployée (`1c080b2`) sur `/depannage-voiture/pneu/`.

Les montants viennent de la grille déjà en ligne : forfait main-d'œuvre 50 € plus le déplacement. Paris 70 € TTC, petite couronne 80 € TTC. Aucun tarif de grande couronne.

| Prestation | Paris | Petite couronne (92, 93, 94) |
|---|---|---|
| Réparation par mèche, roue en place | 70 € TTC | 80 € TTC |
| Montage de la roue de secours du client | 70 € TTC | 80 € TTC |
| Remplacement du pneu | Sur devis, pneu en sus | Sur devis, pneu en sus |

Le texte au-dessus et sous le tableau dit que ce total couvre la main-d'œuvre et le déplacement, et que le pneu neuf est facturé en plus.

Les majorations sont celles du reste du site : nuit +30 %, samedi +30 %, dimanche +50 %, jour férié +50 %. Le supplément pénibilité est de 30 €.

Sous les deux tableaux (prestations, puis majorations) : déplacement inclus, assurance responsabilité civile professionnelle, devis ferme confirmé par téléphone avant tout déplacement, aucune intervention sans accord du client, paiement par carte ou espèces sur place, et l'encart « Votre assurance peut prendre en charge » vers la FAQ assistance 0 km. Le sanglage n'y figure pas.

Phrases du sitemap : **179 contrôles, 179 conformes.** Non conformes : aucune.

---

## Titre, délais, duplication, logo et bouton d'appel

Déployé (`333a6fc`). Contrôlé sur le HTML servi après le déploiement Vercel.

### Titre et H1 de l'accueil

| Champ | Texte servi | Longueur |
|---|---|---|
| `<title>` | Dépannage scooter, moto et voiture 24h/24 en Île-de-France | 58 |
| `og:title` | Dépannage scooter, moto et voiture 24h/24 en Île-de-France | 58 |
| `twitter:title` | Dépannage scooter, moto et voiture 24h/24 en Île-de-France | 58 |
| H1 | Dépannage scooter, moto et voiture 24h/24 en Île-de-France | 58 |

Meta description servie : « Dépannage scooter, moto et voiture en Île-de-France, 24h/24. Intervention en 25–40 min. Devis ferme au 07 72 12 53 11 avant départ. » Elle contient « voiture ».

Le H2 « Quand faut-il un remorquage scooter ou moto ? » est toujours présent.

### Délais des 75 nouvelles pages

Le délai annoncé est le temps de trajet OSRM déjà enregistré dans la fiche, plus 10 minutes de préparation, arrondi au multiple de 5 le plus proche. La fourchette fait 15 minutes. Cette marge de 10 minutes reprend l'écart médian de 8 minutes observé sur les 67 pages d'origine. Ces 67 pages gardent leur délai.

Les 10 délais les plus longs, lus sur le HTML servi, classés par fourchette puis par distance :

| Commune | Délai annoncé | Distance |
|---|---|---|
| Périgny | 45 à 60 min | 27,2 km |
| Mandres-les-Roses | 45 à 60 min | 26,0 km |
| Vaucresson | 45 à 60 min | 20,6 km |
| Chaville | 45 à 60 min | 17,7 km |
| Marnes-la-Coquette | 45 à 60 min | 17,0 km |
| Garches | 45 à 60 min | 16,6 km |
| Ville-d'Avray | 45 à 60 min | 16,2 km |
| Santeny | 40 à 55 min | 26,5 km |
| Marolles-en-Brie | 40 à 55 min | 25,3 km |
| Tremblay-en-France | 40 à 55 min | 24,0 km |

Santeny affiche 40 à 55 min pour 26,5 km. L'Haÿ-les-Roses reste à 28 à 44 min. Paris 1er reste à 22 à 35 min.

Sept communes proches restent à 25 à 40 min, trajet de 13 à 17 min : Gentilly (4,8 km), Le Kremlin-Bicêtre, Les Lilas, Maisons-Alfort, Joinville-le-Pont, Le Pré-Saint-Gervais, Romainville. Gentilly et Les Lilas ont été relus en production.

### Surveillance de la duplication

Le contrôle qui fait échouer le build est inchangé : Jaccard supérieur à 0,8 sur `clientContent` non vide. Ce champ est vide sur les 142 pages. `validate:data` passe.

Second contrôle, informatif, affiché par le build déployé :

`Surveillance duplication : ressemblance moyenne 0,745, 6 paires au-dessus de 0,9 sur 10011 (seuil informatif, le build n'échoue pas).`

Texte comparé : H1, réponse courte, contenu client, fiche, listes de prestations, FAQ et limitrophes. Hors en-tête, pied de page et grille tarifaire.

Les 6 paires : Bois-Colombes / La Garenne-Colombes (0,915), Les Lilas / Le Pré-Saint-Gervais (0,912), Chevilly-Larue / Rungis (0,911), Noiseau / Ormesson-sur-Marne (0,910), Coubron / Montfermeil (0,905), Noiseau / La Queue-en-Brie (0,901).

### Logo et bouton d'appel

`sizes="64px"` faisait choisir `w=3840` à Next.js, une taille fixe sans `vw` ne limitant pas la largeur. Le logo est déclaré en 64×64, sans `sizes`. Sur l'accueil servi, le `src` est `w=128`, avec un `srcset` en `w=64` (1x) et `w=128` (2x). Aucune image du logo n'est demandée en `w=3840`. Header et pied de page sont dans ce cas.

Les boutons d'appel qui portent les deux libellés ont, balises retirées, le texte « 07 72 12 53 11 · Appeler ». Le point médian est dans le HTML et masqué à l'écran. Le lien du pied de page qui n'affiche que le numéro reste « 07 72 12 53 11 ».

### Phrases

179 URL du sitemap, 179 conformes. Aucune phrase ne se termine par un article, une préposition ou une conjonction, formes sans accent comprises. Les balises ont été remplacées par des espaces. Non conformes : aucune.
