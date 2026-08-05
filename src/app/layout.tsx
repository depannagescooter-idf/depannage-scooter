import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { DeferredClientShell } from "@/components/DeferredClientShell";
import { SiteChrome } from "@/components/SiteChrome";
import { company } from "@/data/company";
import { isProduction } from "@/lib/metadata";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const isProductionEnv = isProduction();

export const metadata: Metadata = {
  title: {
    default: `${company.name} — dépannage scooter & moto 24h/24`,
    template: `%s | ${company.name}`,
  },
  description:
    "Dépannage et remorquage de scooters et motos en Île-de-France, 24h/24 et 7j/7. Appelez le 07 72 12 53 11.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? company.url),
  robots: isProductionEnv ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={jakarta.variable}
    >
      <body className="has-intervention-bar">
        {children}
        <SiteChrome />
        <DeferredClientShell />
      </body>
    </html>
  );
}
