import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Torino 360° — Portale della Città",
  description: "Il portale ufficiale di Torino: turismo, mobilità, eventi, servizi comunali e molto altro.",
  keywords: ["Torino", "turismo", "mobilità", "eventi", "servizi", "comune"],
  authors: [{ name: "Comune di Torino" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-[#F5F5F0] font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
