import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { InterventionBar } from "@/components/InterventionBar";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

const isProduction = process.env.NEXT_PUBLIC_ENV === "production";

export const metadata: Metadata = {
  title: "DépannageScooter — dépannage scooter & moto 24h/24",
  description:
    "Dépannage et remorquage de scooters et motos en Île-de-France, 24h/24 et 7j/7. Appelez le 07 72 12 53 11.",
  robots: isProduction ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${jakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="has-intervention-bar">
        {children}
        <InterventionBar />
      </body>
    </html>
  );
}
