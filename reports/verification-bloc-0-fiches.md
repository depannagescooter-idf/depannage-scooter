# Vérification production — bloc 0, fiches factuelles

1er octobre 2026. Production : commit `ca84c7e` sur GitHub `main`, servi par https://www.depannagescooter.com.

## Résultat

Les 167 URL du sitemap répondent 200. Les 67 zones de Paris et de la petite couronne affichent une fiche calculée, avec la distance jusqu'à la mairie. Les 60 zones de grande couronne n'ont ni distance, ni population, ni limitrophes calculés.

## Contrôles sur le HTML servi

| Contrôle | Résultat |
|---|---|
| URL du sitemap en 200 | 167 / 167 |
| Fiches avec distance, Paris et petite couronne | 67 / 67 |
| Grande couronne avec une distance ou une population calculée | 0 / 60 |
| Ligne « Prestations » dans la fiche | 0 |
| Section « Combien de temps pour arriver » | 0 |
| Bloc « Villes voisines » | 0 |
| Phrases tronquées | 0 |
| Mentions de métro, RER ou Transilien sur les pages de zone | 0 |
| Coordonnées JSON-LD de la base | 48,846723 et 2,367233 |
| Anciennes coordonnées 48,8506 / 2,3688 | absentes de l'accueil |

Les trois fiches déjà validées sont inchangées : Paris 11e (2,3 km, 6 min, 70 €, 138 170 hab.), Nanterre (14,6 km, 31 min, 80 €, 97 783 hab.), Alfortville (8,3 km, 14 min, 80 €, 45 531 hab.).

## Ce qui a été retenu

- Fiches calculées seulement pour les 67 zones. Le script refuse une zone du 77, 78, 91 ou 95.
- `validate:data` exige distance, délai et tarif, et au moins 50 mots, pour ces 67 zones. Le plus court fait 131 mots (Sevran), le plus long 182. Le seuil Jaccard reste à 0,8, sur `clientContent` seulement.
- Quatre limitrophes qui n'étaient qu'un coin commun ont été retirés : Paris 11e vu depuis le 19e, Paris 10e vu depuis le 20e, Vitry-sur-Seine vu depuis L'Haÿ-les-Roses, Paray-Vieille-Poste vu depuis Thiais. Les listes de Paris 11e, Nanterre et Alfortville n'ont pas changé.
- Paris 1er, 2e, 3e et 4e ont la même distance (3,6 km, 10 min) : geo.api.gouv.fr leur donne la même mairie, celle du secteur Paris Centre. Paris 10e tombe sur le même chiffre arrondi, depuis une autre mairie.
- Les pages de grande couronne affichent encore le délai, le tarif 90 € et les voies déjà vérifiées. Elles n'ont pas de fiche calculée. Elles restent en ligne jusqu'au bloc 1.
