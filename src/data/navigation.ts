/** Navigation principale — source unique header / mobile. */
export const mainNavItems = [
  { href: "/depannage-sur-place/", label: "Dépannage" },
  { href: "/depannage-moto/", label: "Dépannage moto" },
  { href: "/remorquage/", label: "Remorquage" },
  { href: "/tarifs/", label: "Tarifs" },
  { href: "/zones-intervention/", label: "Zones" },
] as const;

/** Liens secondaires — footer et pages hubs. */
export const secondaryNavItems = [
  { href: "/depannage-voiture/", label: "Dépannage voiture" },
  { href: "/faq/", label: "FAQ" },
  { href: "/guides/", label: "Guides" },
  { href: "/contact/", label: "Contact" },
  { href: "/avis/", label: "Avis" },
] as const;
