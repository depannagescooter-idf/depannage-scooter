import Link from "next/link";

/** Lien d'évitement — visible uniquement à la navigation clavier (Tab). */
export function SkipLink() {
  return (
    <Link href="#main-content" className="skip-link">
      Aller au contenu principal
    </Link>
  );
}
