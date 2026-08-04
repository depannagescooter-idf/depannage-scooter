# PROJECT_SPEC — Site dépannage & remorquage 2-roues Île-de-France

> Document maître. Cursor doit le lire en entier avant toute génération de code.
> Toute décision non couverte ici doit être posée en question, pas improvisée.

---

## 1. Contexte

Site vitrine + génération d'appels pour une entreprise de **dépannage et remorquage de scooters et motos en Île-de-France**, disponible 24h/24 et 7j/7.

**Utilisateur type :** en panne, sur mobile, dans la rue, stressé, en 4G moyenne, veut appeler quelqu'un en moins de 10 secondes. Il ne lit pas, il scanne.

**Objectif business unique :** générer des appels téléphoniques et des contacts WhatsApp qualifiés.
Tout élément qui n'y contribue pas directement est hors périmètre.

**Objectifs secondaires, par ordre de priorité :**
1. Se positionner dans le pack local Google sur l'Île-de-France
2. Être cité par les moteurs génératifs (ChatGPT, Perplexity, Gemini, AI Overviews)
3. Ranker en organique sur les requêtes service × zone et service × symptôme

---

## 2. Prestations à modéliser

### 2.1 Dépannage sur place (DSP)

Intervention sur le lieu de la panne, sans enlèvement du véhicule.

| Slug | Libellé |
|---|---|
| `crevaison` | Réparation de crevaison sur place |
| `batterie` | Remplacement de batterie |
| `demarrage-booster` | Démarrage / booster |
| `panne-essence` | Livraison de carburant |
| `ouverture-de-selle` | Ouverture de selle bloquée |

**Tarification DSP :** forfait fixe + indemnité kilométrique variable selon le lieu d'intervention.

### 2.2 Remorquage

Enlèvement et transport du véhicule sur plateau.

| Slug | Libellé |
|---|---|
| `remorquage-scooter` | Remorquage de scooter |
| `remorquage-moto` | Remorquage de moto |
| `remorquage-moto-accidentee` | Remorquage après accident ou chute |
| `remorquage-3-roues` | Remorquage de 3-roues |
| `transfert-garage-concession` | Transfert vers garage ou concession |

**Tarification remorquage :** grille par distance.

| Palier | Clé |
|---|---|
| Paris intra-muros | `PARIS_INTRA_MUROS` (forfait) |
| 0 – 15 km | `KM_0_15` |
| 15 – 30 km | `KM_15_30` |
| Plus de 30 km | `KM_30_PLUS` |

> **Les montants ne figurent PAS dans ce document.** Ils sont centralisés dans un seul
> fichier de configuration (`src/data/pricing.ts`) avec des valeurs placeholder
> à remplacer par le client. Aucun prix ne doit être écrit en dur dans un composant,
> un texte ou un JSON-LD : tout est lu depuis ce fichier.

---

## 3. Stack imposée

| Domaine | Choix | Raison |
|---|---|---|
| Framework | **Next.js 15+, App Router** | SSG/ISR, metadata API, sitemap natif |
| Langage | **TypeScript strict** | `strict: true`, pas de `any` |
| Styles | **Tailwind CSS v4** | tokens via `@theme`, pas de CSS-in-JS |
| Contenu services/zones/tarifs | **Fichiers TS typés** dans `src/data/` | typage, génération statique, pas de CMS au lancement |
| Contenu blog | **MDX** via `@next/mdx` ou Content Collections | édition simple |
| Rendu | **SSG intégral** (`generateStaticParams`) | performance, coût, robustesse |
| Icônes | `lucide-react` | léger |
| Analytics | Vercel Analytics + GA4 + suivi d'appel | mesure du seul KPI qui compte |
| Déploiement | Vercel, région `cdg1` (Paris) | latence |

**Interdits stricts :**
- Aucune librairie UI générique (shadcn/ui, MUI, Chakra, Bootstrap, DaisyUI). Le design est sur mesure.
- Aucune librairie d'animation lourde (framer-motion, GSAP). CSS et Web Animations API uniquement.
- Aucun carrousel, aucune vidéo en autoplay, aucun chatbot tiers.
- Aucune image de banque d'images. Placeholders explicites `TODO-PHOTO-REELLE` en attendant les visuels client.
- Aucun `use client` sur une page ou un layout. Les Client Components sont des feuilles isolées (bouton d'appel, estimateur, accordéon FAQ).

---

## 4. Arborescence des routes

```
/                                       Accueil
/depannage-sur-place/                   Hub DSP
/depannage-sur-place/[service]/         5 pages service
/remorquage/                            Hub remorquage
/remorquage/[service]/                  5 pages service
/tarifs/                                Page tarifs (page stratégique)
/zones-intervention/                    Hub zones
/zones-intervention/[zone]/             ~45 pages zone
/guides/                                Index blog
/guides/[slug]/                         Articles MDX
/faq/                                   FAQ globale
/avis/                                  Avis clients
/a-propos/                              Entreprise, équipe, matériel
/contact/                               Contact
/mentions-legales/  /cgv/  /confidentialite/
```

**Fichiers spéciaux à la racine du domaine :**
`/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/manifest.webmanifest`, `/opengraph-image`

---

## 5. Modèle de données

Créer `src/data/types.ts` puis les jeux de données. Types minimaux :

```ts
export type ServiceCategory = "depannage" | "remorquage";

export interface Service {
  slug: string;
  category: ServiceCategory;
  name: string;                 // "Remplacement de batterie"
  h1: string;
  metaTitle: string;            // ≤ 60 caractères
  metaDescription: string;      // 140–158 caractères
  /** Réponse directe de 40–60 mots placée juste sous le H1. Cible extraction LLM. */
  shortAnswer: string;
  intro: string;
  symptoms: string[];           // "Le démarreur ne tourne pas"
  interventionSteps: { title: string; detail: string }[];
  duration: string;             // "20 à 30 minutes"
  vehicles: string[];           // "Scooter 50 à 125", "Maxi-scooter", "Moto"
  faqs: Faq[];                  // 5 à 8 minimum
  relatedServices: string[];    // slugs
  priceKey: string;             // clé vers pricing.ts, jamais un montant
}

export interface Zone {
  slug: string;                 // "paris-11e" | "boulogne-billancourt"
  name: string;                 // "Paris 11e"
  kind: "arrondissement" | "commune";
  departement: string;          // "75" | "92" | "93" | "94" | "77" | "78" | "91" | "95"
  postalCodes: string[];
  lat: number;
  lng: number;
  etaMinutes: [number, number]; // fourchette réelle, ex [20, 35]
  /** Contenu OBLIGATOIREMENT unique. Pas de template à variables. */
  intro: string;                // 150 mots minimum, spécifique à la zone
  axes: string[];               // "Boulevard Voltaire", "A86 sortie 12"
  landmarks: string[];          // parkings, gares, points de livraison
  commonInterventions: string[];
  neighbours: string[];         // slugs, pour le maillage interne
}

export interface Faq {
  question: string;             // formulée telle qu'un humain la poserait
  answer: string;               // 40–70 mots, factuel, autoportant
}
```

**Règle anti-duplicate content :** aucune page zone ne doit être générée à partir d'un
template textuel où seul le nom change. Si le contenu unique d'une zone n'existe pas
dans les données, la page **n'est pas générée** (filtrer dans `generateStaticParams`).

---

## 6. Exigences SEO

### 6.1 Metadata

- `generateMetadata` sur **toutes** les routes dynamiques.
- `title` unique, ≤ 60 caractères, mot-clé en tête.
- `description` unique, 140–158 caractères, avec bénéfice + zone + appel à l'action.
- `alternates.canonical` absolu sur chaque page.
- `openGraph` + `twitter` complets, image OG générée dynamiquement via `opengraph-image.tsx`.
- `robots: { index: true, follow: true }` sauf pages légales et pages de remerciement.

### 6.2 JSON-LD

Composant `<JsonLd>` réutilisable, injecté via `<script type="application/ld+json">`.

| Page | Schémas |
|---|---|
| Toutes | `Organization`, `BreadcrumbList`, `WebSite` |
| Accueil | `AutoRepair` (avec `areaServed`, `openingHoursSpecification` 24/7, `hasOfferCatalog`, `aggregateRating`) |
| Page service | `Service` + `Offer` + `FAQPage` |
| Page zone | `AutoRepair` avec `areaServed` restreint + `GeoCoordinates` |
| Tarifs | `OfferCatalog` avec `PriceSpecification` par palier |
| Article | `Article` + `Person` (auteur) |
| FAQ | `FAQPage` |

Les valeurs viennent de `src/data/`, jamais écrites en dur.

### 6.3 Fichiers techniques

- `app/sitemap.ts` : génération dynamique depuis les données, `lastModified`, priorités hiérarchisées.
- `app/robots.ts` : **autoriser explicitement** `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-User`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`, `Bingbot`, `CCBot`. Bloquer uniquement `/api/`, `/_next/`.
- `public/llms.txt` : voir §7.

### 6.4 Maillage interne

- Fil d'Ariane visible et balisé sur toutes les pages internes.
- Chaque page service pointe vers 3 services liés + la page tarifs + 3 zones majeures.
- Chaque page zone pointe vers ses zones voisines (`neighbours`) + les 5 services DSP + les 5 services remorquage.
- Le hub `/zones-intervention/` liste les 45 zones groupées par département.
- Aucun lien orphelin : toute page atteignable en ≤ 3 clics depuis l'accueil.

### 6.5 Anti-patterns interdits

- Pas de pages zone générées en masse sans contenu propre.
- Pas de texte caché, pas de bourrage de mots-clés en pied de page.
- Pas de contenu identique entre `/depannage-sur-place/batterie/` et une page zone.
- Pas de `noindex` oublié en production (vérifier `NEXT_PUBLIC_ENV`).

---

## 7. Exigences visibilité IA (GEO / AEO)

C'est un objectif prioritaire du projet, à traiter au même niveau que le SEO classique.

**a) Bloc réponse directe.** Chaque page service, zone et FAQ commence par une réponse
autoportante de 40 à 60 mots, en texte brut, juste sous le H1, avant toute mise en forme
complexe. Elle doit répondre à la question sans contexte préalable et rester vraie hors du site.

**b) Structure question → réponse.** Les H2 sont formulés comme des questions naturelles
(« Combien coûte un remorquage de moto à Paris ? »), suivis immédiatement d'un paragraphe
de réponse factuelle. Le développement vient après.

**c) Tableaux HTML natifs.** Toutes les données tarifaires, délais, zones couvertes sont en
`<table>` sémantique. **Jamais** en image, jamais en `<div>` stylé, jamais en PDF.

**d) `public/llms.txt`.** Fichier markdown à la racine, structure :

```
# {Nom entreprise}
> Dépannage et remorquage de scooters et motos en Île-de-France, 24h/24 et 7j/7.

## Services
- Dépannage sur place : crevaison, batterie, démarrage, panne d'essence, ouverture de selle
- Remorquage : scooter, moto, moto accidentée, 3-roues, transfert garage

## Tarifs
[tableau markdown généré depuis pricing.ts]

## Zones desservies
[liste générée depuis zones.ts]

## Contact
Téléphone : … — Disponible 24h/24 7j/7

## Pages clés
- [Tarifs](/tarifs/) : grille complète
- ...
```

Générer ce fichier au build depuis les mêmes sources que le site, pour éviter la dérive.

**e) Cohérence d'entité.** Nom, téléphone, zones et description des services strictement
identiques entre le site, le JSON-LD, le `llms.txt`, et les métadonnées. Centraliser dans
`src/data/company.ts` et n'écrire ces valeurs nulle part ailleurs.

**f) Rendu sans JavaScript.** La totalité du contenu textuel, des tarifs et des FAQ doit
être présente dans le HTML source. Test de validation : `curl` la page, le contenu doit
être lisible. Les crawlers IA n'exécutent pas de JS.

---

## 8. Design

### 8.1 Direction

**Thèse :** le site d'un service de secours, pas d'une agence. Le vocabulaire visuel vient
du terrain — plateau de remorquage, marquage routier, gilet haute visibilité, console de
dispatch. Lisible de nuit, sous la pluie, à bout de bras.

### 8.2 Tokens

```css
@theme {
  /* Palette */
  --color-asphalte:  #16181D;  /* fond des blocs d'urgence, header */
  --color-marquage:  #F7F7F5;  /* fond principal, texte sur asphalte */
  --color-signal:    #FF5A1F;  /* CTA, uniquement pour l'action d'appel */
  --color-gyro:      #1B4DFF;  /* liens, accents secondaires, rare */
  --color-beton:     #8A8F98;  /* texte secondaire, bordures */
  --color-alerte:    #FFC300;  /* bandes de danger, statut disponible */

  /* Typographie */
  --font-display: "Archivo", "Archivo Expanded", system-ui, sans-serif;  /* 700/800, large */
  --font-body:    "Public Sans", system-ui, sans-serif;
  --font-data:    "JetBrains Mono", ui-monospace, monospace;             /* chiffres */
}
```

**Règle typographique structurante :** toute donnée chiffrée — prix, kilométrage, délai
d'intervention, numéro de téléphone, horaire — est rendue en `--font-data`, en
`tabular-nums`. Le site doit se lire comme un afficheur de dispatch, pas comme une
plaquette commerciale. C'est la signature du projet.

**Élément signature :** le **bandeau d'intervention** — barre fixe en bas d'écran,
fond asphalte, contenant : un point de statut clignotant + « Équipes disponibles », le
délai estimé sur la zone détectée en mono, et le bouton d'appel en signal orange. Présent
sur 100 % des pages, sur mobile comme desktop. C'est l'élément par lequel le site est
reconnaissable et le premier levier de conversion.

**Séparateurs :** bandes diagonales de danger (asphalte / alerte, 45°, 8px) en filet de
4px au-dessus des sections critiques. **Maximum deux emplois par page.** Partout ailleurs,
filets 1px en béton.

**Angles :** `border-radius: 2px` maximum. L'univers est industriel, pas applicatif.

### 8.3 Contraintes

- Mobile-first strict. La maquette desktop est une adaptation, jamais l'inverse.
- Contraste AA minimum, AAA sur le bandeau d'intervention.
- Cible tactile ≥ 48×48 px.
- Focus clavier visible et contrasté sur tous les éléments interactifs.
- `prefers-reduced-motion` respecté : le point de statut cesse de clignoter.
- Animation limitée à : le point de statut, les transitions de survol (150ms), l'ouverture des accordéons FAQ. Rien d'autre.

---

## 9. Conversion

**Au-dessus de la ligne de flottaison, sur mobile, sans scroll :**
promesse + délai chiffré + numéro cliquable + bouton WhatsApp. Rien d'autre.

- `tel:` et `https://wa.me/...` sur tous les CTA, avec `data-` d'origine pour le tracking.
- Formulaire de rappel : **3 champs** — téléphone, localisation, type de panne. Pas de captcha visible (honeypot + rate limit côté serveur). Envoi par email + webhook.
- Bloc réassurance visible sans scroll : note Google, nombre d'avis, « 24h/24 7j/7 », « paiement CB sur place », logo assurance.
- Géolocalisation **optionnelle et non bloquante** : si l'utilisateur accepte, préremplir la zone détectée et afficher le délai correspondant. Si refus, aucun impact.
- Un seul objectif par page. Pas de newsletter, pas de pop-up, pas d'exit intent.

---

## 10. Performance — critères de recette

Mesuré sur mobile, throttling 4G, PageSpeed Insights, **sur la page d'accueil et une page zone** :

| Métrique | Seuil |
|---|---|
| LCP | < 2,0 s |
| INP | < 200 ms |
| CLS | < 0,05 |
| Score Performance | ≥ 95 |
| Score SEO | 100 |
| Score Accessibilité | ≥ 95 |
| JS transféré (accueil) | < 90 ko gzip |
| Poids total accueil | < 500 ko |

- Images : `next/image`, AVIF + WebP, `priority` uniquement sur le visuel du hero.
- Polices : `next/font`, `display: swap`, sous-ensemble latin, 2 graisses maximum par famille.
- Aucun script tiers bloquant. Analytics en `afterInteractive`.

---

## 11. Livrables attendus

1. Application Next.js complète, buildable, déployable.
2. Jeux de données peuplés : 10 services complets, 45 zones, 25 FAQ, 5 articles de démonstration.
3. `src/data/pricing.ts` et `src/data/company.ts` documentés et commentés, prêts à être remplis par le client.
4. `README.md` : installation, où modifier les tarifs, comment ajouter une zone, comment ajouter un article.
5. Rapport Lighthouse joint, conforme au §10.
