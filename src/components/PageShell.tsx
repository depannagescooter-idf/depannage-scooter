/** Enveloppe sémantique principale — header/footer sont dans le layout racine. */
export function PageShell({ children }: { children: React.ReactNode }) {
  return <main id="main-content">{children}</main>;
}
