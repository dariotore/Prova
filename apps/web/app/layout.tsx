import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: "Torino 360°", template: "%s | Torino 360°" },
  description: "Il portale ufficiale della Città di Torino. Turismo, servizi, mobilità, eventi e molto altro.",
  keywords: ["Torino", "Comune di Torino", "turismo", "servizi comunali", "eventi Torino"],
  authors: [{ name: "Comune di Torino" }],
  creator: "Comune di Torino",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://torino360.comune.torino.it",
    siteName: "Torino 360°",
    title: "Torino 360°",
    description: "Il portale ufficiale della Città di Torino.",
  },
  twitter: { card: "summary_large_image", title: "Torino 360°", description: "Il portale ufficiale della Città di Torino." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-[#F5F5F0] font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
