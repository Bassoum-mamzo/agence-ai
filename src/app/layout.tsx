import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mamoudou Bassoum — Développeur IA & Automatisation",
  description: "Portfolio de Mamoudou Bassoum, développeur IA & automatisation basé à Dakar/Kaolack. Chatbots WhatsApp, CRM automatisés, intégrations IA pour PME africaines.",
  keywords: ["développeur IA", "automatisation", "chatbot WhatsApp", "n8n", "Make", "Claude API", "Dakar", "Sénégal"],
  openGraph: {
    title: "Mamoudou Bassoum — Développeur IA & Automatisation",
    description: "Je connecte l'intelligence artificielle aux besoins réels des PME africaines.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
