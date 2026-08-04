/** Liens internes contextuels depuis les guides vers services et pages clés. */
export const guideRelatedLinks: Record<string, { href: string; label: string }[]> = {
  "scooter-ne-demarre-plus": [
    { href: "/depannage-sur-place/batterie/", label: "Dépannage batterie" },
    { href: "/depannage-sur-place/demarrage-booster/", label: "Démarrage booster" },
    { href: "/tarifs/", label: "Tarifs dépannage" },
  ],
  "prix-remorquage-moto-idf": [
    { href: "/remorquage/remorquage-moto/", label: "Remorquage moto" },
    { href: "/remorquage/remorquage-scooter/", label: "Remorquage scooter" },
    { href: "/tarifs/", label: "Grille tarifaire" },
  ],
  "batterie-scooter-duree-vie": [
    { href: "/depannage-sur-place/batterie/", label: "Remplacement batterie sur place" },
    { href: "/zones-intervention/", label: "Zones d'intervention" },
  ],
  "crevaison-scooter-reparer-ou-remorquer": [
    { href: "/depannage-sur-place/crevaison/", label: "Réparation crevaison" },
    { href: "/remorquage/remorquage-scooter/", label: "Remorquage scooter" },
  ],
  "apres-chute-moto-demarches": [
    { href: "/remorquage/remorquage-moto-accidentee/", label: "Moto accidentée" },
    { href: "/remorquage/remorquage-moto/", label: "Remorquage moto" },
    { href: "/contact/", label: "Nous contacter" },
  ],
};
