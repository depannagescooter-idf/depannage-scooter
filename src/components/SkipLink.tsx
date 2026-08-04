import Link from "next/link";

/** Lien d'évitement clavier — affiché au focus, invisible sinon. */
export function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-asphalte focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
    >
      Aller au contenu principal
    </Link>
  );
}
