/**
 * Nombre de colonnes qui ne laisse pas une image seule sur la dernière ligne.
 * On part du maximum demandé et on descend jusqu'à 2. Si chaque candidat
 * laisserait un reste de 1, une seule colonne (pile pleine largeur).
 */
export function galleryColumns(count: number, maxColumns: number): number {
  const start = Math.min(maxColumns, Math.max(count, 1));
  for (let columns = start; columns >= 2; columns -= 1) {
    if (count % columns !== 1) return columns;
  }
  return 1;
}

/** Mobile ≤2, tablette ≤3, ordinateur ≤4. */
export function galleryColumnPlan(count: number): {
  mobile: number;
  tablet: number;
  desktop: number;
} {
  return {
    mobile: galleryColumns(count, 2),
    tablet: galleryColumns(count, 3),
    desktop: galleryColumns(count, 4),
  };
}

/** sizes avec un jeton vw vu par Next.js (espace avant vw, pas seulement un calc). */
export function gallerySizes(plan: { mobile: number; tablet: number; desktop: number }): string {
  const vw = (columns: number): string => {
    if (columns <= 1) return "100vw";
    if (columns === 2) return "50vw";
    if (columns === 3) return "33vw";
    return "25vw";
  };
  return `(max-width: 639px) ${vw(plan.mobile)}, (max-width: 1023px) ${vw(plan.tablet)}, ${vw(plan.desktop)}`;
}
