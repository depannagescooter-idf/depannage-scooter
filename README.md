# Site dépannage & remorquage 2-roues — Île-de-France

Application Next.js 15 · TypeScript strict · Tailwind v4 · SSG · [depannagescooter.com](https://www.depannagescooter.com)

## Documentation projet

| Fichier | Contenu |
|---------|---------|
| `PROJECT_SPEC.md` | Spécification maîtresse |
| `ROADMAP.md` | 8 phases d'implémentation |
| `SEO_INITIATIVES.md` | 30 initiatives SEO autonomes |
| `RECETTE.md` | Checklist Phase 7 (Lighthouse, GSC, mobile) |
| `.cursor/rules/` | Règles Cursor (projet, SEO, design) |

## Installation

```bash
npm install
cp .env.example .env.local
npm run dev                  # http://localhost:3000
npm run build
```

## Scripts qualité

```bash
npm run validate:data        # Intégrité données (meta, FAQ, zones)
npm run check:nojs           # Conformité SSG (pas de use client page/layout)
npm run check:duplicates     # Détection titres/descriptions dupliqués
npm run generate:llms        # Régénère public/llms.txt
```

## Où modifier quoi

| Fichier | Contenu |
|---------|---------|
| `src/data/company.ts` | Identité, téléphone, email, zones |
| `src/data/pricing.ts` | **Seule source** des tarifs |
| `src/data/services.ts` | 10 pages service |
| `src/data/zones.ts` | 45 pages zone |
| `src/data/reviews.ts` | Avis clients (`verified: true` pour publication) |
| `public/images/` | Photos réelles |

## Avancement

- [x] Phases 0–5 : site complet (~83 pages SSG)
- [x] Phase 6 : formulaire API, GA4, analytics, cookies
- [x] Phase 7 (code) : recette scripts, a11y, perf, `/design-system` supprimé
- [ ] Phase 7 (manuel) : Lighthouse PSI, test mobile 4G, indexation GSC

## Déploiement Vercel

1. Repo : `depannagescooter-idf/depannage-scooter`
2. Variables **Production** :

| Variable | Valeur |
|----------|--------|
| `NEXT_PUBLIC_ENV` | `production` |
| `NEXT_PUBLIC_SITE_URL` | `https://www.depannagescooter.com` |
| `CONTACT_EMAIL` | `scooterdepannage@gmail.com` |
| `CONTACT_RATE_LIMIT_SECRET` | *(chaîne aléatoire)* |
| `SMTP_*` | *(Gmail app password — formulaire)* |
| `NEXT_PUBLIC_GA_ID` | *(optionnel)* |

3. Région : **cdg1** (`vercel.json`)
4. Domaine : `www.depannagescooter.com` (+ redirect apex automatique)

Chaque `git push` sur `main` redéploie.

## GitHub (compte DépannageScooter)

```bash
git remote -v
# origin  git@github-scooter:depannagescooter-idf/depannage-scooter.git
git push origin main
```

## Points de vigilance

- **Pages zone** : contenu unique validé par `validate:data` (similarité Jaccard)
- **Bandeau d'intervention** : élément clé de conversion (fixe en bas)
- **SEO local** : GBP + avis + annuaires = indispensable hors repo
