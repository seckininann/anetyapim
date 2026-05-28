import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { WhatsAppProvider } from "@/context/WhatsAppContext";

export const metadata: Metadata = {
  title: "PixelCraft Agency — Dijital Tasarım & Geliştirme",
  description:
    "Profesyonel web tasarım, e-ticaret, SEO ve dijital pazarlama hizmetleri. 150+ başarılı proje, 7+ yıl deneyim.",
  keywords:
    "web tasarım, web geliştirme, seo, e-ticaret, dijital pazarlama, mobil uygulama",
  openGraph: {
    title: "PixelCraft Agency",
    description: "Markanızı dijital zirveye taşıyoruz.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <LanguageProvider>
          <WhatsAppProvider>{children}</WhatsAppProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
