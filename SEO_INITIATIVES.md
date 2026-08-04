# 30 initiatives SEO — DépannageScooter

> Toutes les initiatives ci-dessous sont **autonomes** (code, contenu, technique).  
> Seule exception : **Google Search Console** (création manuelle par le propriétaire du domaine).

Légende : ✅ implémenté dans le code | 🔄 automatique au déploiement | ⏳ activable quand données réelles disponibles

---

## 1. Titres HTML sans duplication de marque ✅
Suppression du suffixe `| DépannageScooter` dans les `metaTitle` services — le template layout l'ajoute une seule fois. Validation CI via `npm run validate:data`.

## 2. JSON-LD BreadcrumbList unique ✅
Centralisation dans le composant `Breadcrumb` — plus de double injection schema sur les pages internes.

## 3. LocalBusiness + GeoCoordinates sur pages zone ✅
Schema `zoneLocalBusinessSchema()` avec lat/lng de chaque zone pour le SEO local géolocalisé.

## 4. LocalBusiness enrichi (NAP, horaires, geo) ✅
Schema `localBusinessSchema()` avec adresse, horaires 24/7, geo et zone desservie sur accueil, contact et à propos.

## 5. Prix structurés dans Offer / OfferCatalog ✅
Montants réels depuis `pricing.ts` injectés dans `serviceSchema()` et `offerCatalogSchema()` (remorquage + DSP).

## 6. Organization avec hasOfferCatalog ✅
L'organisation référence le catalogue d'offres complet pour les rich results Google.

## 7. Bingbot autorisé dans robots.txt ✅
Conformité spec + indexation Bing/Microsoft Copilot.

## 8. Maillage interne footer étendu ✅
Ajout guides, avis, contact, liens contextuels (Paris 11e, crevaison, remorquage scooter).

## 9. Section guides sur l'accueil ✅
4 guides en avant + lien vers le hub — pages plus atteignables en ≤ 3 clics.

## 10. Lien tarifs explicite sur pages zone ✅
Lien « Grille complète » après le tableau de prix embarqué.

## 11. Cross-links guides → services/zones/tarifs ✅
Mapping `guide-links.ts` — liens contextuels en bas de chaque article.

## 12. llms.txt enrichi pour crawlers IA ✅
Noms de services lisibles, URLs absolues, contact complet — regénéré à chaque build.

## 13. Open Graph image explicite sur toutes les pages ✅
`createPageMetadata()` injecte l'image OG 1200×630 sur chaque page.

## 14. Twitter Card avec image ✅
`summary_large_image` + image OG sur toutes les pages metadata.

## 15. Favicon + Apple Touch Icon dynamiques ✅
`app/icon.tsx` et `app/apple-icon.tsx` — identité visuelle dans les SERP et onglets.

## 16. ShortAnswer (GEO) sur pages clés ✅
FAQ, contact, à propos, avis, hub guides — blocs réponse directe sous le H1.

## 17. Page À propos enrichie (~500 mots) ✅
Contenu local SEO avec liens internes vers services, tarifs et zones.

## 18. Page avis en noindex tant que vide ✅
Pas d'indexation de contenu placeholder — retirée du sitemap automatiquement.

## 19. Article schema complet sur guides ✅
url, mainEntityOfPage, publisher, image, datePublished, dateModified, author.

## 20. ItemList schema sur hubs ✅
Hubs dépannage, remorquage, zones et guides — listes structurées pour Google.

## 21. WebPage schema sur pages piliers ✅
Hubs, avis, à propos — entité page claire pour les moteurs.

## 22. Canonical + hreflang fr-FR ✅
Chaque page a un canonical absolu et `alternates.languages.fr-FR`.

## 23. Sitemap avec priorités affinées ✅
Accueil 1.0, tarifs 0.95, hubs 0.9, services 0.85, zones 0.8, guides 0.7.

## 24. 404 sans canonical fictif ✅
Page not-found en noindex sans URL `/404/` canonique erronée.

## 25. Hubs avec liens croisés tarifs/zones ✅
Dépannage et remorquage pointent vers tarifs et zones d'intervention.

## 26. Validation CI anti-régression SEO ✅
`validate-data.ts` bloque les metaTitle avec marque dupliquée.

## 27. Manifest PWA avec icônes ✅
Référence icon + apple-icon pour l'installabilité mobile.

## 28. Tracking tel: footer pour conversion SEO ✅
Attributs `data-track-event` sur le numéro footer — mesure des clics par origine.

## 29. Contact avec LocalBusiness JSON-LD ✅
Page contact = entité locale claire pour Google (NAP + téléphone).

## 30. Google Search Console ⏳ MANUEL
**Seule action non-autonome.** À faire par le propriétaire :
1. [search.google.com/search-console](https://search.google.com/search-console)
2. Ajouter la propriété `https://depannagescooter.com`
3. Vérifier via DNS TXT OVH ou fichier HTML
4. Soumettre `https://depannagescooter.com/sitemap.xml`
5. Surveiller : indexation, Core Web Vitals, données structurées, ergonomie mobile

---

## Initiatives futures (données réelles requises)

| Initiative | Déclencheur |
|---|---|
| AggregateRating sur accueil | Avis `verified: true` dans `reviews.ts` |
| Adresse complète dans schema | Remplir `company.ts` (rue, SIREN) |
| Photos réelles + alt text | Images dans `public/images/` |
| Google Business Profile `sameAs` | URL fiche Google dans `company.ts` |
| Pages zones 77/78/91/95 | Extension géographique si couverture réelle |

---

## Commandes de vérification

```bash
npm run validate:data   # Intégrité contenu SEO
npm run generate:llms   # llms.txt à jour
npm run build           # Build + sitemap + robots
```

Après déploiement : tester avec [Rich Results Test](https://search.google.com/test/rich-results) sur accueil, une page service et une page zone.
