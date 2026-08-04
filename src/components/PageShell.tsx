import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink />
      <Header />
      <div id="main-content">{children}</div>
      <Footer />
    </>
  );
}
