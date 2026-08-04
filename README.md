# Site dépannage & remorquage 2-roues — Île-de-France

Application Next.js 15 · TypeScript strict · Tailwind v4 · SSG.

## Documentation projet

```
PROJECT_SPEC.md              Spécification maîtresse — produit, technique, SEO, design
ROADMAP.md                   8 phases d'implémentation, avec prompts et critères d'acceptation
CONTENT_MAP.md               Inventaire éditorial de toutes les pages
.cursor/rules/
  ├── 00-projet.mdc          Contexte, stack, règles de code
  ├── 10-seo-geo.mdc         SEO et visibilité IA
  └── 20-design-ux.mdc       Direction artistique, UX, performance
```

## Installation

```bash
npm install
cp .env.example .env.local   # puis remplir les valeurs
npm run dev                  # http://localhost:3000
npm run build                # vérification production
```

## Où modifier quoi

| Fichier | Contenu |
|---|---|
| `src/data/company.ts` | Nom, téléphone, email, SIREN, zones |
| `src/data/pricing.ts` | Tous les tarifs (seule source des prix) |
| `src/data/services.ts` | Pages service (Phase 2) |
| `src/data/zones.ts` | Pages zone (Phase 2) |
| `public/images/` | Photos réelles (hero, plateau, équipe…) |

## Avancement roadmap

- [x] **Phase 0 — Socle** : Next.js, tokens design, données de base, build vert
- [x] **Phase 1 — Design system** : composants UI, bandeau d'intervention, `/design-system`
- [ ] Phase 2 — Données
- [ ] Phase 3 — Pages
- [ ] Phase 4 — SEO technique
- [ ] Phase 5 — Visibilité IA
- [ ] Phase 6 — Conversion et mesure
- [ ] Phase 7 — Recette

Pour enchaîner : *« Exécute la Phase 1 de ROADMAP.md »*

## À remplir avant de commencer

- [ ] Nom commercial, numéro de téléphone, WhatsApp, email, SIREN, forme juridique
- [ ] Montants : forfait DSP, barème d'indemnité kilométrique, forfait Paris intra-muros, tarifs 0–15 km / 15–30 km / +30 km, majorations nuit et week-end
- [ ] Point de départ de référence pour le calcul des distances
- [ ] Délais d'intervention réels par département (ne pas inventer, ils engagent)
- [ ] Photos du matériel, des plateaux, de l'équipe, d'une intervention de nuit
- [ ] Liste réelle des communes couvertes
- [ ] Nom de domaine

## Points de vigilance

**Les pages zone sont le principal risque du projet.** 45 pages générées à partir d'un
même gabarit textuel sont une pénalité assurée. La spec impose un contrôle de similarité
automatique en phase 2 : le laisser actif.

**Le bandeau d'intervention est l'élément qui fait la conversion.** S'il est mal exécuté ou
s'il disparaît au scroll, tout le reste perd sa valeur.

**Le référencement local se joue hors du repo.** Google Business Profile, les avis et le
netlinking pèsent plus lourd que le site lui-même sur ce métier. Le site est nécessaire,
il n'est pas suffisant.
