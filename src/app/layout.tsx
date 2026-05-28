import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { WhatsAppProvider } from "@/context/WhatsAppContext";

export const metadata: Metadata = {
  title: "AnetYapım — Elite Digital Engineering Studio",
  description:
    "Fintech sistemleri, AI entegrasyonları, IoT platformları, blockchain altyapıları. Her dijital sistemi inşa ediyoruz. 250+ proje, 10+ yıl deneyim.",
  keywords:
    "web geliştirme, fintech, blockchain, AI entegrasyonu, IoT, SaaS platform, kurumsal yazılım, web3",
  openGraph: {
    title: "AnetYapım — Elite Digital Engineering",
    description: "Dijital imkansız diye bir şey yok.",
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
