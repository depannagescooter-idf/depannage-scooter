# Recette Phase 7 — DépannageScooter

Checklist de validation avant mise en production définitive.

## Résultats Lighthouse (baseline mobile — juillet 2026)

Mesure locale sur https://www.depannagescooter.com/ :

| Catégorie | Score | Cible |
|-----------|-------|-------|
| Performance | 91 | ≥ 95 |
| Accessibilité | 89 | ≥ 95 |
| SEO | 66* | 100 |
| LCP | 2,5 s | < 2,0 s |
| CLS | 0,005 | < 0,05 |

\* **SEO 66** : vérifier `NEXT_PUBLIC_ENV=production` sur Vercel. Sans cette variable, le site reste en `noindex` → pénalité Lighthouse SEO majeure.

Après correction Vercel + redéploiement, retester sur [PageSpeed Insights](https://pagespeed.web.dev/).

Tester sur **PageSpeed Insights** (mobile, 4G) :

| Page | URL |
|------|-----|
| Accueil | https://www.depannagescooter.com/ |
| Service | https://www.depannagescooter.com/depannage-sur-place/crevaison/ |
| Zone | https://www.depannagescooter.com/zones-intervention/paris-11e/ |

| Métrique | Seuil |
|----------|-------|
| LCP | < 2,0 s |
| INP | < 200 ms |
| CLS | < 0,05 |
| Performance | ≥ 95 |
| SEO | 100 |
| Accessibilité | ≥ 95 |

## Commandes CI locales

```bash
npm run validate:data      # Métadonnées services/zones
npm run check:nojs         # Pas de use client sur pages/layouts
npm run check:duplicates   # Titres/descriptions uniques
npm run build              # Build production + llms.txt
```

## Google Search Console

- [x] Propriété vérifiée
- [x] Sitemap soumis (`/sitemap.xml`)
- [ ] Pages indexées (surveiller 7–14 jours)
- [ ] Données structurées sans erreur (Améliorations)
- [ ] Ergonomie mobile OK
- [ ] Core Web Vitals (Expérience)

## Test mobile réel (4G)

1. Ouvrir https://www.depannagescooter.com/ sur smartphone
2. Sans scroll : numéro visible + bouton Appeler cliquable
3. Bandeau fixe en bas : tap sur Appeler → compose le numéro
4. Formulaire contact : soumission → page merci
5. Navigation : accueil → zone → service → tarifs en ≤ 3 taps

## Accessibilité clavier

- [ ] Tab depuis le haut → lien « Aller au contenu principal » visible au focus
- [ ] Tab jusqu'au bandeau → Appeler activable avec Entrée
- [ ] FAQ : accordéons ouvrables au clavier
- [ ] Contraste bandeau asphalte / texte blanc lisible

## Données client à finaliser

| Champ | Fichier |
|-------|---------|
| Raison sociale, SIREN, adresse | `src/data/company.ts` |
| SMTP Gmail (formulaire) | Variables Vercel |
| Avis vérifiés | `src/data/reviews.ts` |
| Photos réelles | `public/images/` |

## Hors repo (SEO local)

- Google Business Profile (zone de service IDF)
- Collecte avis post-intervention (SMS)
- Annuaires : PagesJaunes, Bing Places, Apple Business Connect
