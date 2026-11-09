# Rapports de vérification — depannagescooter.com

Mesurés sur le HTML servi en production (`https://www.depannagescooter.com`), après déploiement. Les entités HTML ont été décodées avant les recherches. GitHub `main` au moment du dernier contrôle des pages : `9dc36c1`. Le contrôle des hubs client est `1ec93b6`. Le contrôle du pneu déjanté est `cc0f71f`. L'échange des deux photos de pneu est `365e1ea`.

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

---

## Quatre photos d'intervention

Déployé (`b3e7f36`). Contrôlé sur le HTML servi après le déploiement Vercel. Chemins relatifs `/images/interventions/`. Le domaine et les URL absolues n'ont pas été modifiés.

Dix emplacements, dix conformes. Chaque photo a l'alt exact, `loading="lazy"` et un `sizes` qui contient `vw`.

| Page | Photo |
|---|---|
| /depannage-moto/ | BMW GS, 11,7 V |
| /depannage-sur-place/demarrage-booster/ | BMW GS, 11,7 V |
| /zones-intervention/paris-3e/ | BMW GS, 11,7 V |
| /depannage-sur-place/batterie/ | scooter, 14,5 V |
| /zones-intervention/paris-2e/ | scooter, 14,5 V |
| /depannage-sur-place/crevaison/ | crevaison de nuit, dans la galerie |
| /zones-intervention/paris-1er/ | crevaison de nuit |
| /depannage-sur-place/crevaison/ | pneu usé, hors galerie |
| /remorquage/remorquage-scooter/ | pneu usé |
| /zones-intervention/paris-19e/ | pneu usé |

Les quatre fichiers et les quatre URL `/_next/image/` citées en `src` répondent **200**.

Galerie crevaison : 4 images, classe `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`. La photo du pneu usé n'est pas dans cette liste. Elle est dans la section « Quand faut-il un remorquage plutôt ? », avant la galerie. La phrase « mèche est impossible » reste dans l'étape « Pose d'une mèche ».

Le `src` de repli écrit par Next.js est `w=3840` dès qu'un attribut `sizes` est présent : c'est le plus grand candidat du `srcset`, comme sur la galerie de remorquage déjà en ligne. Le `sizes` n'est pas une valeur fixe en pixels. La largeur réellement téléchargée par le navigateur via `srcset` n'a pas été mesurée.

Textes client, exacts, avec la photo, avant la fiche : Paris 1er, Paris 2e, Paris 3e, Paris 19e.

Jaccard sur `clientContent` non vide, seuil 0,8 inchangé. Six paires, aucune au-dessus de 0,8. `validate:data` passe.

| Paire | Similarité |
|---|---|
| Paris 1er / Paris 2e | 0,029 |
| Paris 1er / Paris 3e | 0,054 |
| Paris 1er / Paris 19e | 0,125 |
| Paris 2e / Paris 3e | 0,261 |
| Paris 2e / Paris 19e | 0,129 |
| Paris 3e / Paris 19e | 0,056 |

Phrases : **179 contrôles, 179 conformes.** Non conformes : aucune.

---

## Mentions tarifaires et périmètre des 142 zones

Déployé (`ea3683c`), fast-forward de `7947b93`. Vercel : déploiement terminé. Contrôle sur le HTML servi, en-tête `Cache-Control: no-cache`.

Le title et le H1 de l'accueil restent « Dépannage scooter, moto et voiture 24h/24 en Île-de-France ». Le title et le H1 de `/zones-intervention/` n'ont pas été modifiés. L'introduction de cette page disait déjà « Paris (20 arrondissements) et en petite couronne (92, 93, 94) : 142 communes. La grande couronne n'est plus desservie. » Elle n'a pas été réécrite.

La légende de la galerie remorquage dit « Sangles », pour que le mot « sanglage » ne reste que dans la note du tableau de remorquage. Les textes alternatifs « sanglée » n'ont pas changé.

**1 675 contrôles, 1 675 conformes.** Non conformes : aucune.

| Contrôle | Nombre | Conformes |
|---|---|---|
| « déplacement inclus » après un tableau qui ne contient pas le déplacement (330 tableaux) | 330 | 330 |
| Phrase de distance et de trajet d'approche après chaque tableau de remorquage | 154 | 154 |
| « sanglage » hors note de remorquage | 161 | 161 |
| Forfait 50 € : main-d'œuvre couverte, déplacement en plus, pas de sanglage | 11 | 11 |
| Frais de déplacement : aucun bloc d'inclusion | 11 | 11 |
| Grille en total : « Déplacement inclus dans le total. » | 3 | 3 |
| Pneu voiture : « Le pneu neuf est facturé en plus. » | 1 | 1 |
| Quatre mentions communes, une fois chacune | 644 | 644 |
| « 142 zones en Île-de-France » | 179 | 179 |
| Phrase terminée par un article, une préposition ou une conjonction | 179 | 179 |
| Accueil : « 142 zones : Paris et petite couronne (92, 93, 94) » | 1 | 1 |
| Introduction `/zones-intervention/` | 1 | 1 |

161 pages portent un tableau tarifaire, pas 160 : `/depannage-voiture/pneu/` a une grille. Répartition : 142 zones, 4 hubs, accueil, `/tarifs/`, `/remorquage/`, 5 dépannages, 5 remorquages, batterie voiture, pneu voiture.

Les mentions ont été comptées dans le HTML visible, balises `script` retirées, entités décodées. Le fichier brut en contient deux : la seconde est le payload React, pas un second bloc affiché. `data-price-conditions` et le lien `/faq/#assistance-0-km` sont visibles une fois sur chaque page tarifaire.

Phrases du sitemap : balises remplacées par des espaces, y compris le contenu des scripts. 179 URL, 179 conformes.

Exemples servis, texte visible, balises retirées.

Accueil : remorquage 79 €, 89 €, 99 €, 120 €, sur devis au-delà de 20 km. « Tarif calculé sur la distance entre le lieu de la panne et la destination. Le trajet du dépanneur jusqu'à votre véhicule n'est pas facturé. Sanglage et calage adaptés aux deux-roues, assurance responsabilité civile professionnelle. » Forfait 50 €. « Le forfait couvre la main-d'œuvre. Le déplacement s'ajoute selon la zone. » Frais de déplacement : Paris + 20 €, total 70 € ; petite couronne + 30 €, total 80 €. Rien sous ce tableau, puis une seule fois le devis ferme, l'accord du client, le paiement par carte ou espèces, et l'encart assurance.

`/tarifs/` : batterie 70 € / 80 € (booster) et 90 € / 100 € (remplacement), « déplacement inclus » dans les cellules, puis « Déplacement inclus dans le total. » Majorations sans inclusion. Remorquage avec la phrase de distance et le sanglage. Forfait 50 € avec la phrase de main-d'œuvre. Frais de déplacement sans inclusion. Majorations deux-roues sans inclusion. Mentions communes une fois, après le dernier tableau.

Paris 1er : la fiche dit dans la cellule « 70 € TTC déplacement inclus ». Le tableau de remorquage est suivi de la phrase de distance, du sanglage, puis des mentions communes une fois.

---

## Quatre photos d'intervention — MP3, Tracer, Silence, Aprilia

Déployé (`22b63fe`), fast-forward de `c3c2a9f` vers GitHub `main`. Vercel : déploiement terminé. Contrôle le 1er novembre 2026, sur le HTML servi, en-tête `Cache-Control: no-cache`. Le domaine, les URL absolues et les redirections n'ont pas été modifiés. Les chemins d'images restent relatifs.

**109 contrôles, 109 conformes.** Non conformes : aucune.

### Ce qui a été fait

Quatre fichiers JPEG ont été ajoutés tels quels, sans réencodage.

| Fichier | Taille | Poids | Ce que montre le fichier |
|---|---|---|---|
| `public/images/interventions/reparation-crevaison-piaggio-mp3-paris-16e.jpg` | 1200×1600 | 288 989 octets | Pneu large, petite réparation dans la bande de roulement, gonfleur posé au sol sur un revêtement mouillé |
| `public/images/interventions/demarrage-booster-yamaha-tracer-700-paris-12e.jpg` | 1200×1600 | 241 265 octets | Batterie sous la selle, pince rouge et câbles branchés, mallette d'outils au sol |
| `public/images/interventions/reparation-crevaison-scooter-electrique-silence-paris-3e.jpg` | 1200×1600 | 346 186 octets | Pneu plus étroit, mèche visible, roue au-dessus d'un marquage blanc |
| `public/images/remorquage/remorquage-scooter-aprilia-sr-motard-ile-de-france.jpg` | 600×600 | 76 298 octets | Scooter sanglé dans un camion, selle rouge et noire, « SR MOTARD » lisible sur le flanc |

Les noms de véhicules viennent des noms de fichiers et des textes demandés. Sur les trois premières photos, le modèle n'est pas écrit dans l'image. Seule la photo de remorquage porte un libellé lisible, « SR MOTARD ». Les deux photos de pneu ont été distinguées par la scène : l'une avec le gonfleur, l'autre avec la mèche seule au-dessus du marquage. Cette affectation était fausse. Le contenu des deux fichiers a été échangé ensuite (`365e1ea`). Le tableau ci-dessus décrit l'état du premier déploiement, avant cet échange.

`pose-meche-pneu-honda-x-adv.jpg` a été retiré de la galerie crevaison seulement. Le fichier reste dans le dépôt (768×1024, 132 399 octets) et dans le guide `/guides/crevaison-scooter-reparer-ou-remorquer/`.

La galerie crevaison compte 5 photos, dans cet ordre : X-ADV mèche sur place, X-ADV gonflage, crevaison de nuit du 1er, MP3, Silence.

La galerie remorquage compte 10 photos. L'Aprilia est la dixième, ajoutée à la fin de la liste partagée par `/remorquage/` et ses 5 pages de service.

Une page de zone peut maintenant porter plusieurs interventions. Chaque intervention a sa photo, puis sa phrase, avant la fiche. Le `clientContent` comparé par `validate:data` est la suite de ces phrases, séparées par une ligne vide. Les phrases de Paris 1er, Paris 2e, Paris 19e et la première phrase de Paris 3e n'ont pas été réécrites.

Le Tracer est placé après la BMW GS sur `/depannage-moto/`. Sur `/depannage-sur-place/demarrage-booster/`, la BMW GS et le Tracer sont côte à côte à partir de 640 px, empilés en dessous.

Les deux galeries calculent le nombre de colonnes selon le nombre de photos. Maximum : 2 en mobile, 3 en tablette, 4 en ordinateur. Si un nombre de colonnes laisserait une seule photo sur la dernière ligne, on descend d'un cran. Si aucun nombre à partir de 2 ne convient, les photos s'empilent en une colonne.

### Ce qui a été constaté en production

Les 13 emplacements ont l'alt exact, `loading="lazy"`, un `src` relatif, et un `sizes` qui contient un jeton `vw`. Chaque URL `/_next/image/` répond 200. Les quatre fichiers neufs et `pose-meche-pneu-honda-x-adv.jpg` répondent aussi 200.

| Photo | Pages |
|---|---|
| MP3 | `/depannage-sur-place/crevaison/`, `/zones-intervention/paris-16e/` |
| Tracer | `/depannage-moto/`, `/depannage-sur-place/demarrage-booster/`, `/zones-intervention/paris-12e/` |
| Silence | `/depannage-sur-place/crevaison/`, `/zones-intervention/paris-3e/` |
| Aprilia | `/remorquage/`, `/remorquage/remorquage-scooter/`, `/remorquage/remorquage-moto/`, `/remorquage/remorquage-moto-accidentee/`, `/remorquage/remorquage-3-roues/`, `/remorquage/transfert-garage-concession/` |

Le `src` de repli écrit par Next.js est `w=3840` dès qu'un attribut `sizes` est présent. C'est le plus grand candidat du `srcset`. Le `sizes` n'est pas une valeur fixe en pixels. La largeur réellement téléchargée par le navigateur n'a pas été mesurée.

Galerie crevaison servie : `data-gallery-count="5"`, `data-gallery-cols="1-3-3"`. Le fichier de pose de mèche du X-ADV n'y figure pas. Il est dans le guide, avec son alt : « Pose d'une mèche dans le pneu arrière crevé d'un Honda X-ADV, kit de réparation et compresseur posés à côté de la roue ».

Galerie remorquage servie, sur les 6 pages : `data-gallery-count="10"`, `data-gallery-cols="2-2-4"`, Aprilia dans la liste.

La mise en page a été lue dans le HTML et dans la feuille CSS servie (`min-width: 640px` et `min-width: 1024px`). Elle n'a pas été mesurée par une capture d'écran.

- Crevaison, mobile (moins de 640 px) : 1 colonne, 5 lignes pleine largeur. Deux colonnes finiraient par une photo seule.
- Crevaison, tablette (640–1023 px) : 3 colonnes, ligne de 3 puis ligne de 2.
- Crevaison, ordinateur (à partir de 1024 px) : 3 colonnes, ligne de 3 puis ligne de 2.
- Remorquage, mobile : 2 colonnes, 5 lignes de 2.
- Remorquage, tablette : 2 colonnes. Trois colonnes finiraient par une photo seule.
- Remorquage, ordinateur : 4 colonnes, lignes de 4, 4, puis 2.

Textes client servis, photo puis phrase, avant la fiche.

- Paris 16e : « Pneu arrière d'un Piaggio MP3 réparé sur place dans le 16e arrondissement, par pose d'une mèche. »
- Paris 12e : « Démarrage au booster d'une moto Yamaha Tracer 700 dans le 12e arrondissement. »
- Paris 3e, première phrase inchangée : « Démarrage au booster d'une moto BMW GS dans le 3e arrondissement, batterie mesurée à 11,7 volts. »
- Paris 3e, seconde phrase : « Crevaison réparée sur place sur un scooter électrique Silence dans le 3e arrondissement, par pose d'une mèche. »

Paris 1er, Paris 2e et Paris 19e ont aussi été relus. Leurs phrases sont celles d'avant ce déploiement.

Jaccard sur les six `clientContent` non vides. Seuil 0,8 inchangé. Quinze paires, toutes en dessous. Paire la plus proche : Paris 3e / Paris 16e, score **0,2647** (9 mots communs sur 34).

Phrases du sitemap : 179 URL, balises remplacées par des espaces, y compris le contenu des scripts, coupures sur `.` `!` `?`. Aucune phrase ne se termine par un article, une préposition ou une conjonction, formes sans accent comprises. Le mot « a » n'est compté que si le mot d'origine est « a » ou « à ».

| Contrôle | Nombre | Conformes |
|---|---|---|
| Alt exact | 13 | 13 |
| Image `/_next/image/` en 200, `src` relatif | 13 | 13 |
| `sizes` avec un jeton `vw` | 13 | 13 |
| `loading="lazy"` | 13 | 13 |
| Fichiers sources en 200, y compris la pose de mèche du X-ADV | 5 | 5 |
| Galerie crevaison : 5 images, sans cette pose de mèche | 3 | 3 |
| Pose de mèche toujours dans le guide | 1 | 1 |
| Galerie remorquage : 10 images et Aprilia, sur 6 pages | 12 | 12 |
| Dernière ligne sans image seule | 2 | 2 |
| CSS de la galerie servi | 1 | 1 |
| Tracer après la BMW, et à côté d'elle sur la page booster | 2 | 2 |
| Texte client avant la fiche | 6 | 6 |
| Phrases exactes de Paris 1er, 2e, 12e, 16e et 19e | 5 | 5 |
| Paris 3e : première phrase inchangée, seconde ajoutée, photos dans cet ordre | 3 | 3 |
| Jaccard ≤ 0,8 | 15 | 15 |
| Sitemap : 179 URL | 1 | 1 |
| Phrase du sitemap terminée par un mot outil | 1 | 1 |

---

## Titres des photos, et échange des deux pneus

Le client indique que chacune des quatre photos envoyées avait un titre.

### Ce qui est arrivé

Les quatre images jointes portaient toutes le même nom de fichier : `image.jpg`. Elles ont été enregistrées sous des identifiants sans rapport avec ces titres : `dddcdfcc-f493-487f-8627-7762226dd855.jpg`, `6dbf1585-6b43-4277-a741-47a2ae734cc8.jpg`, `5f22b313-90bd-4c16-9985-aaa6017e114c.jpg`, `fb55db93-b7a6-49ee-a4fc-d4ec59d212b0.jpg`.

Les noms prévus pour le site figuraient dans le texte du message, à côté de la liste, et non sur le fichier :

- `reparation-crevaison-piaggio-mp3-paris-16e.jpg`
- `demarrage-booster-yamaha-tracer-700-paris-12e.jpg`
- `reparation-crevaison-scooter-electrique-silence-paris-3e.jpg`
- `remorquage-scooter-aprilia-sr-motard-ile-de-france.jpg`

À l'intérieur des JPEG reçus : pas d'EXIF, pas de titre IPTC, pas de `dc:title`. Une mention C2PA dit que le fichier a été fourni par Claude et qu'il a pu être modifié. L'image parente y est citée par un identifiant, pas par un titre.

Les copies mises sur le site sont ces mêmes octets, sans réencodage. Aucun titre n'a été retiré de ces fichiers : il n'y en avait pas. Les titres d'origine, qu'ils aient été le nom du fichier sur l'appareil ou une métadonnée, n'étaient pas dans ce qui a été livré. Ils n'ont donc pas pu servir à savoir quelle image allait avec quel nom.

### Conséquence

L'association s'est faite en regardant les photos. Elle était fausse pour les deux pneus. La roue avec le gonfleur a d'abord été enregistrée sous le nom du MP3. La roue avec la mèche et le marquage blanc, sans gonfleur, a d'abord été enregistrée sous le nom du Silence.

### Correction

Déployé (`365e1ea`), fast-forward de `48b63b9`. Vercel terminé le 1er novembre 2026 à 16:25, heure de Paris. Seul le contenu des deux fichiers a été échangé. Les noms, les textes alternatifs, les emplacements et les phrases des pages de zones n'ont pas changé.

Les JPEG servis et les images `/_next/image/` demandées par les pages (AVIF, cache `MISS`) ont été téléchargés et regardés.

- `reparation-crevaison-piaggio-mp3-paris-16e.jpg`, 346 186 octets : une roue, une mèche, un marquage blanc au sol. Pas de gonfleur. C'est la photo de `/zones-intervention/paris-16e/` et celle de la galerie crevaison.
- `reparation-crevaison-scooter-electrique-silence-paris-3e.jpg`, 288 989 octets : une roue, une mèche, un gonfleur posé au sol avec son tuyau. C'est la seconde photo de `/zones-intervention/paris-3e/`, après la BMW GS et avant la fiche, et la même image dans la galerie crevaison.

Ces quatre contrôles visuels sont conformes.

Règle retenue : si un fichier joint arrive sans titre exploitable, ou s'il faut deviner quelle image correspond à quel nom, demander avant de l'intégrer.

---

## Pneu déjanté — remise en place sur la jante

Déployé (`cc0f71f`), fast-forward de `cf363ba`. Vercel terminé le 9 novembre 2026 à 01:26, heure de Paris. Contrôle sur le HTML servi, en-tête `Cache-Control: no-cache`. Le domaine, les URL absolues et les redirections n'ont pas été modifiés. Les chemins d'images restent relatifs. Les plaques blanchies n'ont pas été retouchées.

**63 contrôles, 63 conformes.** Non conformes : aucune.

### Identification des photos

Les pièces jointes sont arrivées sous le nom `image.jpg`. Elles ont été reconnues par les dimensions, puis confirmées à l'œil, avant d'être copiées sans réencodage.

| Fichier | Taille lue | Ce que montre le fichier |
|---|---|---|
| `pneu-dejante-honda-pcx-avant.jpg` | 1200×1600 | Pneu, carter et ressort secs, logo « PCX » en haut, aucune trace d'eau |
| `pneu-dejante-honda-pcx-apres-remise-en-place.jpg` | 1386×1600 | Pneu, carter et ressort mouillés, bulles d'eau savonneuse sur le pneu |

### Ce qui a été fait

Section ajoutée sur `/depannage-sur-place/crevaison/`, après « Comment se déroule l'intervention ? » et avant « Combien ça coûte ? ». Titre : « Pneu déjanté : remise en place sur la jante ».

Le texte dit ce qu'est un pneu déjanté (talon sorti de la jante, souvent après un roulage à basse pression, un choc contre un trottoir ou un nid-de-poule, ou une perte d'air brutale), ce qui est fait sur place (lubrification du talon à l'eau savonneuse, regonflage pour remettre le pneu sur la jante, contrôle de la pression, de l'étanchéité, du pneu et de la jante) et quand il faut remorquer (talon abîmé, jante voilée ou fissurée, pneu déchiré). Aucun tarif propre à cette prestation.

Les deux photos sont côte à côte à partir de 640 px, empilées en dessous. Légendes : « Avant : le pneu était sorti de sa jante. » et « Après : le pneu est remis en place sur la jante. » Elles ne sont pas dans la galerie crevaison.

La question « Pouvez-vous remettre en place un pneu déjanté ? » est dans les FAQ de la page crevaison et de `/faq/`, donc aussi dans les données structurées FAQ des deux pages. Réponse : « Oui, sur place, si le pneu et la jante ne sont pas abîmés ; sinon, remorquage vers un atelier. »

`/zones-intervention/paris-5e/` affiche la photo d'après, puis la phrase exacte, avant la fiche : « Pneu arrière d'un Honda PCX déjanté, remis en place sur sa jante sur place dans le 5e arrondissement. »

Le premier déploiement (`cf363ba`) avait pour légende le seul mot « Après. ». Cette phrase se terminait par la préposition « après ». La légende a été allongée avant le contrôle final.

### Ce qui a été constaté en production

Les JPEG servis et les images `/_next/image/` demandées par les pages ont été téléchargés et regardés.

- Avant, 1200×1600, 239 642 octets. Scooter Honda PCX, logo « PCX » en haut. Pneu, carter et ressort secs. Pas de trace d'eau. Le talon sorti de la jante ne se voit pas. C'est la photo « Avant » de la page crevaison.
- Après, 1386×1600, 314 280 octets. Même angle. Pneu, carter et ressort mouillés, bulles d'eau savonneuse sur le pneu. C'est la photo « Après » de la page crevaison et la photo de Paris 5e.

Sous 640 px les deux photos sont empilées. À partir de 640 px elles sont côte à côte. Cette mise en page est lue dans la classe servie `grid gap-4 sm:grid-cols-2`. Elle n'a pas été mesurée par une capture d'écran.

Les trois expressions sont dans la section : « pneu déjanté », « pneu sorti de la jante », « remettre un pneu sur sa jante ».

Chaque emplacement a l'alt exact, `loading="lazy"`, un `src` relatif et un `sizes` qui contient un jeton `vw`. Les URL d'image répondent 200. Le `src` de repli de Next.js reste `w=3840` dès qu'un `sizes` est présent. La largeur réellement téléchargée par le navigateur n'a pas été mesurée.

Galerie crevaison : 5 images. Les deux photos du PCX n'y figurent pas.

La question et la réponse sont visibles sur la page crevaison et sur `/faq/`, et présentes dans le JSON-LD `FAQPage` des deux pages.

La section nouvelle et la réponse FAQ ne contiennent aucun montant.

Jaccard sur les sept `clientContent` non vides. Seuil 0,8 inchangé. Vingt et une paires, toutes en dessous. Paire la plus proche : Paris 5e / Paris 16e, score **0,28**.

Phrases du sitemap : 179 URL, balises remplacées par des espaces, y compris le contenu des scripts, coupures sur `.` `!` `?`. Aucune phrase ne se termine par un article, une préposition ou une conjonction, formes sans accent comprises. Le mot « a » n'est compté que si le mot d'origine est « a » ou « à ».

| Contrôle | Nombre | Conformes |
|---|---|---|
| H2 présent, après le déroulé et avant le tarif | 2 | 2 |
| Les trois expressions | 3 | 3 |
| Légendes Avant et Après, grille côte à côte | 3 | 3 |
| Section et réponse FAQ sans nouveau montant | 2 | 2 |
| Alt exact, `sizes` avec `vw`, chargement différé, image en 200 | 12 | 12 |
| Galerie crevaison à 5 images, sans les photos du PCX | 2 | 2 |
| Question et réponse visibles, et dans les deux JSON-LD FAQ | 4 | 4 |
| Paris 5e : photo d'après, phrase exacte, avant la fiche | 3 | 3 |
| Fichiers JPEG servis en 200 | 2 | 2 |
| `clientContent` exact sur les 7 zones qui en ont un | 7 | 7 |
| Jaccard ≤ 0,8 | 21 | 21 |
| Sitemap : 179 URL, phrases sans mot outil en fin | 2 | 2 |

---

## Hubs — texte pour un client en panne

Déployé (`1ec93b6`), fast-forward de `dd743be`. Vercel terminé le 9 novembre 2026 à 01:46, heure de Paris. Contrôle sur le HTML servi, en-tête `Cache-Control: no-cache`. Le domaine, les URL absolues, les redirections, les titres, les H1, les metas et les tarifs n'ont pas été modifiés.

**196 contrôles, 196 conformes.** Non conformes : aucune.

### Couverture, vérifiée avant d'écrire « partout »

Les communes officielles viennent de geo.api.gouv.fr, comparées aux pages déjà publiées.

| Département | Pages publiées | Communes officielles | Manquante |
|---|---|---|---|
| Paris | 20 arrondissements, du 1er au 20e | 20 arrondissements | aucune |
| Hauts-de-Seine | 36 | 36 | aucune |
| Seine-Saint-Denis | 39 | 39 | aucune |
| Val-de-Marne | 47 | 47 | aucune |

En Seine-Saint-Denis, la commune officielle Saint-Ouen-sur-Seine est la page déjà publiée sous le nom Saint-Ouen. Aucune commune n'a été ajoutée.

### Ce qui a été réécrit

Les quatre hubs sont produits par le même texte, avec le lieu et les moyennes de chacun. Ces moyennes sont celles déjà calculées sur les délais enregistrés des pages de zone, arrondies : Paris 25 à 40, Hauts-de-Seine 34 à 50, Seine-Saint-Denis 32 à 48, Val-de-Marne 32 à 47. Aucun délai n'a été inventé.

Le paragraphe qui expliquait l'origine des données de chaque page a été retiré. Les fiches de commune n'ont pas été modifiées.

Le décompte de mots du hub, hors listes de liens, reste au-dessus du plancher de 400 : Paris 478, Hauts-de-Seine 484, Seine-Saint-Denis 484, Val-de-Marne 490. Le plancher n'a pas été abaissé.

### Phrases servies

Paris, `/zones-intervention/paris/` :

« En journée, comptez en général 25 à 40 minutes à Paris. Le délai exact vous est confirmé par téléphone avant le départ, selon l'endroit où vous êtes. »

« Non. C'est un délai moyen en journée ; celui de votre intervention vous est confirmé au téléphone. »

« Intervenez-vous partout à Paris ? » — « Oui, dans les vingt arrondissements. »

Hauts-de-Seine, `/zones-intervention/hauts-de-seine/` :

« En journée, comptez en général 34 à 50 minutes en Hauts-de-Seine. Le délai exact vous est confirmé par téléphone avant le départ, selon l'endroit où vous êtes. »

Même réponse sur le délai. « Intervenez-vous partout en Hauts-de-Seine ? » — « Oui, dans toutes les communes du département. »

Seine-Saint-Denis, `/zones-intervention/seine-saint-denis/` :

« En journée, comptez en général 32 à 48 minutes en Seine-Saint-Denis. Le délai exact vous est confirmé par téléphone avant le départ, selon l'endroit où vous êtes. »

Même réponse sur le délai. « Intervenez-vous partout en Seine-Saint-Denis ? » — « Oui, dans toutes les communes du département. »

Val-de-Marne, `/zones-intervention/val-de-marne/` :

« En journée, comptez en général 32 à 47 minutes dans le Val-de-Marne. Le délai exact vous est confirmé par téléphone avant le départ, selon l'endroit où vous êtes. »

Même réponse sur le délai. « Intervenez-vous partout dans le Val-de-Marne ? » — « Oui, dans toutes les communes du département. »

### Ce qui a été constaté en production

Sur les quatre hubs, le texte visible hors en-tête, navigation, pied de page et scripts ne contient aucun des mots entiers « page », « pages », « bloc », « blocs », « fourchette », « fourchettes ». « Selle bloquée » n'est pas compté : ce n'est pas le mot « bloc ».

Les phrases du sitemap : 179 URL, balises remplacées par des espaces, y compris le contenu des scripts, coupures sur `.` `!` `?`. Aucune phrase ne se termine par un article, une préposition ou une conjonction, formes sans accent comprises. Le mot « a » n'est compté que si le mot d'origine est « a » ou « à ».

| Contrôle | Nombre | Conformes |
|---|---|---|
| Mots page, bloc, fourchette absents du texte visible | 4 | 4 |
| Phrase de délai servie telle qu'écrite | 4 | 4 |
| Réponse FAQ du délai servie telle qu'écrite | 4 | 4 |
| Question et réponse de couverture servies | 4 | 4 |
| Sitemap : 179 URL | 1 | 1 |
| Chaque URL du sitemap, phrase sans mot outil en fin | 179 | 179 |

---

## Hauts-de-Seine et trois-roues

Déployé (`9dc36c1`), fast-forward de `26f5763`. Vercel terminé le 9 novembre 2026 à 02:19, heure de Paris. Contrôle sur le HTML servi, en-tête `Cache-Control: no-cache`. « en Seine-Saint-Denis » et « dans le Val-de-Marne » n'ont pas été modifiés.

**363 contrôles, 363 conformes.** Non conformes : aucune.

« du Hauts-de-Seine » était déjà absent des 179 pages avant la correction. Il l'est encore.

| Contrôle | Nombre | Conformes |
|---|---|---|
| Le plan du site compte 179 adresses | 1 | 1 |
| Ni « en Hauts-de-Seine » ni « du Hauts-de-Seine », description pour les moteurs comprise | 179 | 179 |
| Réponse « Quels véhicules prenez-vous en charge ? » servie telle qu'écrite | 4 | 4 |
| Aucune phrase ne finit par un article, une préposition ou une conjonction | 179 | 179 |

Phrases lues sur le HTML, après retrait des commentaires laissés entre les mots :

- Titre : « Dépannage scooter et moto dans les Hauts-de-Seine (92) ».
- Description : « Dépannage et remorquage de scooters et motos dans les Hauts-de-Seine, 24h/24. Devis ferme par téléphone avant le déplacement, tarif du jour affiché. »
- Délai : « En journée, comptez en général 34 à 50 minutes dans les Hauts-de-Seine. »
- Intertitre : « Nos prestations dans les Hauts-de-Seine ».
- Lien depuis Neuilly-sur-Seine : « dépannage scooter dans les Hauts-de-Seine (92) ».
- Véhicules, les quatre hubs : « Les scooters, les trois-roues et les motos [lieu]. Le devis téléphonique confirme que l'intervention est possible avant le départ. Le matériel et le plateau sont prévus pour les scooters, les trois-roues et les motos. »

---

## État du site au 9 novembre 2026

Version en ligne : `9dc36c1`, mise en ligne le 9 novembre 2026 à 02:19, heure de Paris. Le plan des pages compte 179 adresses.

| Type | Nombre |
|---|---|
| Accueil | 1 |
| Services (dépannage sur place, moto, voiture, remorquage, avec leurs pages d'entrée) | 16 |
| Arrondissements et communes | 142 |
| Pages de département | 4 |
| Liste des zones | 1 |
| Guides, page d'entrée comprise | 10 |
| Tarifs, questions, à propos, contact, avis | 5 |

Les mentions légales, les conditions de vente, la confidentialité et la page de remerciement ne sont pas dans cette liste. Soixante pages « un service dans une ville » existent aussi et sont écartées de la liste. Elles n'ont pas été rouvertes une par une aujourd'hui.

### Depuis septembre

- Mi-septembre : le site est en place, avec les textes légaux, la batterie voiture, le logo et la première structure de pages.
- 22 septembre : textes qui se contredisaient, page d'avis, retrait des pages ville du plan, réglages techniques.
- 30 septembre : une réécriture des zones a été annulée, les pages se ressemblaient trop.
- 1er octobre : fiches chiffrées, distance cachée quand plusieurs zones partagent la même mairie, grande couronne retirée, 75 communes ajoutées (142 zones), quatre pages de département, dépannage mis devant le remorquage, précisions de prix, crevaison par mèche, grille du pneu voiture.
- 2 octobre : titre de l'accueil, délais des 75 communes, logo, bouton d'appel.
- 10 octobre : quatre photos d'intervention.
- 11 octobre : mentions sous les tableaux de prix.
- 1er novembre : quatre autres photos, puis échange des deux photos de pneu qui avaient été inversées.
- 9 novembre : remise en place d'un pneu déjanté, texte des départements réécrit pour un client en panne, puis « dans les Hauts-de-Seine » et les trois-roues.

### Interventions publiées

Sept récits nomment l'arrondissement.

- Scooter, crevaison de nuit : Paris 1er. Page du 1er et galerie de la page crevaison.
- Scooter, démarrage au booster : Paris 2e. Page du 2e et page batterie.
- BMW GS, démarrage au booster : Paris 3e. Page du 3e, page dépannage moto, page démarrage.
- Scooter électrique Silence, crevaison par mèche : Paris 3e. Page du 3e et galerie crevaison.
- Honda PCX, pneu déjanté remis sur la jante : Paris 5e. Page du 5e (photo d'après) et section de la page crevaison (avant et après).
- Yamaha Tracer 700, démarrage au booster : Paris 12e. Page du 12e, page dépannage moto, page démarrage.
- Piaggio MP3, crevaison par mèche : Paris 16e. Page du 16e et galerie crevaison.
- Scooter au pneu usé, réparation refusée, remorquage : Paris 19e. Page du 19e, page crevaison, page remorquage scooter.

La galerie crevaison montre aussi un Honda X-ADV, sans commune écrite. Le guide crevaison reprend ces photos, plus une troisième du même véhicule.

La galerie remorquage, sur la page remorquage et les cinq pages de remorquage, montre un scooter blanc, une Kawasaki Ninja, une Honda Goldwing, une Suzuki GSX-R, un Piaggio MP3 500, un maxi-scooter, une Royal Enfield Classic, une Royal Enfield Himalayan, une Harley-Davidson Sportster et un Aprilia SR Motard. Seule la Ninja est située, « en Île-de-France ». Les autres textes ne donnent pas de commune.

### Ressemblance des pages de zones

En moyenne, deux pages de zone partagent 74,3 % de leurs mots (0,743). Sept paires sur 10 011 dépassent 90 % : Bois-Colombes et La Garenne-Colombes, Les Lilas et Le Pré-Saint-Gervais, Chevilly-Larue et Rungis, Noiseau et Ormesson-sur-Marne, Coubron et Montfermeil, Garches et Vaucresson, Noiseau et La Queue-en-Brie. Avant cette correction, le compte était 0,742 et six paires. Sept pages portent un récit propre. La plus proche de ces paires, Paris 5e et Paris 16e, partage 28 % des mots. Le seuil de 80 % sur ces récits n'est pas franchi.

### Points ouverts

1. Ces sept paires se ressemblent assez pour pouvoir être prises pour des copies. Elles n'ont pas été réécrites.
2. Hors de la question sur les véhicules, les pages de département parlent encore de « scooter ou moto » et de « deux-roues ». Les introductions de commune aussi. L'accueil et la question corrigée, eux, citent les trois-roues.
3. Aucun avis rédigé n'est affiché. La page annonce 4,7 sur 5 et 168 avis Google. Cette note n'a pas été revérifiée sur Google aujourd'hui. Dix avis devaient être ajoutés ; ils ne le sont pas.
4. La page À propos dit qu'une assurance est souscrite, sans le nom de l'assureur.
5. La page de Saint-Ouen ne porte pas le nom officiel Saint-Ouen-sur-Seine.
6. La plupart des photos de remorquage ne disent pas où le véhicule a été pris en charge.
7. L'image de partage des pages de département ne reçoit pas le nom du département. L'image elle-même n'a pas été ouverte aujourd'hui.

### Vérifié, et non vérifié

Vérifié sur les pages servies : les deux formulations interdites, les quatre réponses véhicules, les fins de phrases, et les phrases citées plus haut. Vercel a confirmé la mise en ligne.

Non vérifié : l'affichage dans un navigateur, les fichiers image de cette mise en ligne, la note Google, la fréquentation du site, le bon fonctionnement d'un appel, et chaque page écartée du plan.

### Anomalies laissées en l'état

Les phrases des hubs et des communes qui oublient les trois-roues. Le nom Saint-Ouen. L'assureur absent. Les lieux manquants sur les photos de remorquage. La photo « avant » du Honda PCX, vue le matin du 9 novembre, ne montre pas clairement le pneu sorti de la jante. « du Hauts-de-Seine » n'existait pas : il n'y avait rien à remplacer.
