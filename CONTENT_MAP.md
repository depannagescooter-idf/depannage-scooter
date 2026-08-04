# CONTENT_MAP — Inventaire éditorial

> Source de vérité pour le peuplement de `src/data/`.
> `{M}` = nom de la marque, à remplacer partout par la valeur de `company.ts`.
> Les `title` doivent rester ≤ 60 caractères après substitution — vérifier au build.

---

## 1. Pages transverses

| URL | H1 | Title | Cible principale |
|---|---|---|---|
| `/` | Dépannage et remorquage scooter & moto en Île-de-France | Dépannage scooter & moto Île-de-France 24/7 – {M} | dépannage scooter paris |
| `/tarifs/` | Tarifs de dépannage et de remorquage 2-roues | Tarifs dépannage & remorquage moto Île-de-France | prix remorquage moto paris |
| `/zones-intervention/` | Nos zones d'intervention en Île-de-France | Zones d'intervention – dépannage moto Île-de-France | dépannage moto île-de-france |
| `/faq/` | Questions fréquentes | FAQ dépannage et remorquage scooter et moto | — |
| `/avis/` | Avis de nos clients | Avis clients – dépannage moto {M} | avis dépannage moto paris |
| `/a-propos/` | Qui sommes-nous | À propos – {M}, dépanneur 2-roues en IDF | — |
| `/contact/` | Nous contacter | Contact – dépannage scooter et moto 24h/24 | — |

---

## 2. Dépannage sur place

### Hub `/depannage-sur-place/`

- **H1 :** Dépannage de scooter et moto sur place en Île-de-France
- **Title :** Dépannage scooter et moto sur place – Île-de-France
- **Réponse directe :** ce qu'est un dépannage sur place, les 5 pannes traitées, la tarification (forfait + indemnité kilométrique), le délai moyen, la disponibilité 24/7.
- Liste les 5 services avec leur symptôme déclencheur, un tableau de comparaison durée / cas où le remorquage devient nécessaire.

### Pages service

| Slug | H1 | Title | Cibles |
|---|---|---|---|
| `crevaison` | Réparation de crevaison scooter et moto sur place | Crevaison scooter : réparation sur place en IDF | crevaison scooter paris · réparation pneu scooter à domicile |
| `batterie` | Remplacement de batterie de scooter et moto à domicile | Batterie scooter : remplacement sur place 24/7 | batterie scooter à domicile · changer batterie moto paris |
| `demarrage-booster` | Démarrage et booster de scooter et moto | Scooter qui ne démarre pas : dépannage sur place | scooter ne démarre plus · booster moto paris |
| `panne-essence` | Panne d'essence : livraison de carburant sur place | Panne d'essence scooter et moto : dépannage IDF | panne essence scooter · livraison essence moto |
| `ouverture-de-selle` | Ouverture de selle bloquée sur scooter et moto | Selle de scooter bloquée : ouverture sur place | ouverture selle scooter · selle bloquée tmax |

**Trame obligatoire de chaque page service :**

1. H1
2. Bloc réponse directe — 40 à 60 mots
3. Bouton d'appel
4. `H2 — Quels sont les symptômes ?` → liste des signes concrets
5. `H2 — Comment se déroule l'intervention ?` → étapes numérotées, durée
6. `H2 — Combien ça coûte ?` → tableau, renvoi vers `/tarifs/`
7. `H2 — Sur quels véhicules ?` → scooters 50–125, maxi-scooters, motos, 3-roues
8. `H2 — Quand faut-il un remorquage plutôt ?` → lien vers la page remorquage correspondante
9. `H2 — Où intervenez-vous ?` → 3 zones majeures + lien vers le hub zones
10. FAQ — 5 à 8 questions
11. Services liés

---

## 3. Remorquage

### Hub `/remorquage/`

- **H1 :** Remorquage de scooter et moto en Île-de-France
- **Title :** Remorquage moto et scooter Île-de-France 24h/24
- **Réponse directe :** véhicules pris en charge, principe de la grille tarifaire (forfait Paris intra-muros, puis paliers 0–15 km, 15–30 km, plus de 30 km), délai moyen, destinations possibles.
- Tableau complet de la grille + carte des zones.

### Pages service

| Slug | H1 | Title | Cibles |
|---|---|---|---|
| `remorquage-scooter` | Remorquage de scooter en Île-de-France | Remorquage scooter Paris et Île-de-France 24/7 | remorquage scooter paris |
| `remorquage-moto` | Remorquage de moto en Île-de-France | Remorquage moto Paris et Île-de-France 24h/24 | remorquage moto paris · dépanneuse moto |
| `remorquage-moto-accidentee` | Remorquage de moto après accident ou chute | Remorquage moto accidentée : intervention 24/7 | remorquage moto accidentée · enlèvement moto accident |
| `remorquage-3-roues` | Remorquage de 3-roues et maxi-scooters | Remorquage 3-roues et maxi-scooter en IDF | remorquage 3 roues · remorquage tmax |
| `transfert-garage-concession` | Transfert de moto vers un garage ou une concession | Transfert moto vers garage ou concession en IDF | transport moto garage · convoyage moto paris |

**Trame :** identique aux pages DSP, avec en plus un `H2 — Où emmenons-nous votre véhicule ?`
(garage, concession, domicile, fourrière, expert d'assurance) et un `H2 — Prise en charge par l'assurance`.

---

## 4. Pages zone

**Paris (20)** — `paris-1er` … `paris-20e`

**Hauts-de-Seine (92)** — Boulogne-Billancourt · Nanterre · Levallois-Perret · Neuilly-sur-Seine · Issy-les-Moulineaux · Courbevoie · Clichy · Asnières-sur-Seine · Montrouge

**Seine-Saint-Denis (93)** — Saint-Denis · Montreuil · Aubervilliers · Pantin · Saint-Ouen · Bobigny · Noisy-le-Grand · Aulnay-sous-Bois

**Val-de-Marne (94)** — Créteil · Vitry-sur-Seine · Ivry-sur-Seine · Vincennes · Saint-Maur-des-Fossés · Charenton-le-Pont · Alfortville · Villejuif

**Template de structure — contenu obligatoirement unique par zone :**

| Élément | Exigence |
|---|---|
| H1 | `Dépannage et remorquage scooter et moto à {zone}` |
| Title | `Dépannage scooter {zone} – remorquage moto 24h/24` |
| Réponse directe | 40–60 mots : services, délai réel sur la zone, disponibilité, tarif de référence |
| Intro | **150 mots minimum, spécifiques** : axes desservis, points noirs, contraintes de circulation, parkings, types d'interventions les plus fréquents sur la zone |
| `H2 — Combien de temps pour arriver à {zone} ?` | fourchette réelle, pas une valeur globale recopiée |
| `H2 — Quels dépannages sur place ?` | 5 services + liens |
| `H2 — Quel tarif de remorquage depuis {zone} ?` | tableau + palier applicable |
| `H2 — Interventions récentes` | 2–3 cas réels : panne, lieu, délai |
| Avis | 2–3 avis clients de la zone |
| Zones voisines | maillage vers 4 à 6 zones limitrophes |

> **Contrôle qualité automatique :** le script `validate:data` compare les intros deux à deux.
> Similarité > 80 % → build en échec. Une zone sans matière propre reste `draft: true`
> et n'est pas publiée. Mieux vaut 25 bonnes pages zone que 45 pages clonées.

---

## 5. Guides

Trois objectifs : longue traîne, autorité E-E-A-T, citation par les IA.

| Slug | Titre | Cible |
|---|---|---|
| `scooter-ne-demarre-plus` | Mon scooter ne démarre plus : 6 causes et quoi faire | scooter ne démarre pas |
| `prix-remorquage-moto-idf` | Combien coûte un remorquage de moto en Île-de-France ? | prix remorquage moto — **forte valeur GEO** |
| `batterie-scooter-duree-vie` | Batterie de scooter : durée de vie, symptômes, remplacement | batterie scooter hs |
| `crevaison-scooter-reparer-ou-remorquer` | Crevaison en scooter : réparer sur place ou remorquer ? | crevaison scooter que faire |
| `apres-chute-moto-demarches` | Après une chute à moto : constat, remorquage, assurance | que faire après accident moto |

**Format imposé :** réponse directe en tête, H2 en questions, tableaux pour les données
chiffrées, conclusion avec appel à l'action, auteur identifié avec sa qualification
(mécanicien, années d'expérience) et `Person` en JSON-LD.

---

## 6. Règles de rédaction

- Registre : direct, factuel, sans superlatif. On informe quelqu'un qui est en panne, on ne vend pas.
- Bannir : « n'hésitez pas », « leader », « à votre écoute », « satisfaction garantie », « notre équipe de professionnels qualifiés ».
- Chaque affirmation chiffrée doit être vraie et vérifiable. Un délai annoncé engage.
- Ne jamais réutiliser un paragraphe d'une page à l'autre.
- Les prix ne sont jamais écrits dans le texte : toujours injectés depuis `pricing.ts`.
