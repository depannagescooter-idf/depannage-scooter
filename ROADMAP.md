# ROADMAP — Implémentation

> Exécuter les phases **dans l'ordre**. Une phase n'est close que si tous ses
> critères d'acceptation sont vérifiés. Ne pas anticiper sur une phase suivante.
> Après chaque phase : `npm run build` doit passer sans erreur ni warning TypeScript.

---

## Phase 0 — Socle

**Prompt Cursor**
> Lis PROJECT_SPEC.md. Initialise le projet Next.js 15 App Router + TypeScript strict + Tailwind v4 selon le §3. Crée les tokens de design du §8.2 dans le CSS global via @theme. Configure next/font pour Archivo, Public Sans et JetBrains Mono. Ne crée aucune page pour l'instant.

- [ ] `create-next-app` — App Router, TypeScript, Tailwind, ESLint, alias `@/*`
- [ ] `tsconfig.json` : `strict: true`, `noUncheckedIndexedAccess: true`
- [ ] Tokens `@theme` conformes au §8.2
- [ ] `next/font` configuré, 2 graisses max par famille
- [ ] `src/data/company.ts` — source unique de vérité entité (nom, tél, email, SIREN, zones, horaires)
- [ ] `src/data/pricing.ts` — constantes tarifaires avec placeholders commentés
- [ ] `src/data/types.ts` — tous les types du §5
- [ ] `.env.example` documenté

**Acceptation :** build vert, aucun `any`, tokens utilisables en classes Tailwind.

---

## Phase 1 — Design system

**Prompt Cursor**
> Construis les primitives UI selon §8. Pas de librairie externe. Le bandeau d'intervention est l'élément signature : soigne-le en priorité. Tous les chiffres en font-data avec tabular-nums.

- [ ] `<Button>` — variantes `signal` (appel), `outline`, `ghost` ; cible ≥ 48px
- [ ] `<CallButton>` — Client Component, `tel:`, tracking d'origine
- [ ] `<WhatsAppButton>` — message pré-rempli
- [ ] `<InterventionBar>` — **bandeau signature**, fixe en bas, statut + délai + appel
- [ ] `<Header>` — logo, numéro toujours visible, nav réduite (5 entrées max)
- [ ] `<Footer>` — NAP complet, liens zones majeures, légal
- [ ] `<Breadcrumb>` — visuel + JSON-LD `BreadcrumbList`
- [ ] `<PriceTable>` — `<table>` sémantique, données depuis `pricing.ts`
- [ ] `<FaqAccordion>` — `<details>/<summary>` natif, contenu présent dans le DOM même fermé
- [ ] `<ShortAnswer>` — bloc réponse directe 40–60 mots (§7a)
- [ ] `<HazardRule>` — séparateur bandes diagonales, max 2 par page
- [ ] `<JsonLd>` — helper typé

**Acceptation :** page `/design-system` (noindex, supprimée avant prod) affichant toutes les primitives. Contraste AA vérifié. Navigation clavier complète.

---

## Phase 2 — Données

**Prompt Cursor**
> Peuple src/data/ selon §2 et §5. Pour chaque service : shortAnswer de 40–60 mots, 5 à 8 FAQ, symptômes réels, étapes d'intervention. Pour chaque zone : intro unique de 150 mots minimum mentionnant des axes et lieux réels. Interdiction absolue de générer les intros de zone par template à variables — si tu n'as pas de matière propre, marque la zone `draft: true` et exclus-la du build.

- [ ] `src/data/services.ts` — 10 services complets
- [ ] `src/data/zones.ts` — 20 arrondissements de Paris + 25 communes de petite couronne
- [ ] `src/data/faqs.ts` — 25 questions transverses
- [ ] `src/data/reviews.ts` — structure d'avis (à remplir avec des avis réels uniquement)
- [ ] `content/guides/*.mdx` — 5 articles
- [ ] Script `npm run validate:data` — vérifie unicité des slugs, longueur des metaTitle/metaDescription, présence des shortAnswer, absence d'intros de zone dupliquées (similarité > 80 % = échec)

**Acceptation :** `validate:data` passe. Aucun texte de zone n'est un clone d'un autre.

---

## Phase 3 — Pages

**Prompt Cursor**
> Génère toutes les routes du §4 en SSG via generateStaticParams. Chaque page appelle generateMetadata. Le maillage interne du §6.4 est obligatoire. Aucun `use client` sur une page ou un layout.

- [ ] `/` — hero avec promesse + délai + appel, services, zones, tarifs, avis, FAQ
- [ ] `/depannage-sur-place/` + 5 pages service
- [ ] `/remorquage/` + 5 pages service
- [ ] `/tarifs/` — grille complète, DSP et remorquage, mentions et majorations
- [ ] `/zones-intervention/` + pages zone (groupées par département sur le hub)
- [ ] `/guides/` + articles MDX
- [ ] `/faq/`, `/avis/`, `/a-propos/`, `/contact/`
- [ ] Pages légales
- [ ] `not-found.tsx` utile : numéro + liens vers les services

**Acceptation :** chaque page a un H1 unique, un canonical, un fil d'Ariane. Aucun lien orphelin. `curl` d'une page zone renvoie tout le texte dans le HTML.

---

## Phase 4 — SEO technique

**Prompt Cursor**
> Implémente le §6 en entier. Le robots.txt doit explicitement autoriser les crawlers IA listés au §6.3 — ne les bloque pas.

- [ ] `app/sitemap.ts` généré depuis les données
- [ ] `app/robots.ts` avec autorisation explicite des crawlers IA
- [ ] JSON-LD sur chaque type de page selon le tableau §6.2
- [ ] `opengraph-image.tsx` dynamique (nom du service ou de la zone en display)
- [ ] `manifest.webmanifest`, favicons complets
- [ ] Redirections 301 : trailing slash cohérent, www → apex (ou l'inverse), http → https
- [ ] `NEXT_PUBLIC_ENV !== "production"` → `noindex` global

**Acceptation :** validation Google Rich Results Test sans erreur sur 5 types de pages. Sitemap complet et sans 404.

---

## Phase 5 — Visibilité IA

**Prompt Cursor**
> Implémente le §7. Génère public/llms.txt au build depuis src/data/ pour garantir la cohérence avec le site. Vérifie que chaque page service et zone commence par un bloc réponse directe et que les H2 sont formulés en questions.

- [ ] Script de build générant `public/llms.txt` depuis `src/data/`
- [ ] `<ShortAnswer>` présent en tête de chaque page service, zone et de `/tarifs/`
- [ ] H2 reformulés en questions naturelles sur toutes les pages de contenu
- [ ] Toutes les données tarifaires en `<table>` sémantique
- [ ] Audit de cohérence d'entité : nom, téléphone et description identiques entre metadata, JSON-LD et `llms.txt`
- [ ] `npm run check:nojs` — rend chaque page sans JS et vérifie la présence du texte clé

**Acceptation :** `llms.txt` accessible et à jour. Aucune divergence d'entité. Contenu intégral lisible sans JavaScript.

---

## Phase 6 — Conversion et mesure

**Prompt Cursor**
> Implémente le §9. Le formulaire fait 3 champs. Le tracking doit distinguer l'origine de chaque appel.

- [ ] Route API du formulaire : validation Zod, honeypot, rate limit IP, envoi email + webhook
- [ ] Tracking d'appel : événement GA4 par clic `tel:`, avec position dans la page
- [ ] Vercel Analytics + Speed Insights
- [ ] Consentement cookies minimal et conforme (GA4 en mode consenti)
- [ ] Géolocalisation optionnelle non bloquante
- [ ] Page de confirmation `noindex`

**Acceptation :** un appel depuis le bandeau, le header et le hero génèrent trois événements distincts.

---

## Phase 7 — Recette

- [ ] Lighthouse mobile conforme au §10 sur accueil, page service, page zone
- [ ] Test réel sur mobile en 4G bridée
- [ ] Navigation clavier complète, lecteur d'écran sur le parcours d'appel
- [ ] Vérification Search Console : indexation, données structurées, ergonomie mobile
- [ ] Recherche de duplicate content interne
- [ ] `README.md` finalisé
- [ ] Suppression de `/design-system`

---

## Hors périmètre du repo

À traiter en parallèle, hors Cursor, mais indispensables au résultat :
Google Business Profile en zone de service, collecte d'avis par SMS post-intervention,
citations dans les annuaires (PagesJaunes, Bing Places, Apple Business Connect, Mappy),
netlinking partenaires (concessions, garages, assureurs, loueurs, flottes de livreurs),
Google Ads sur les requêtes d'urgence pendant la montée en puissance du SEO.
