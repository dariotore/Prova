"use client";

import Link from "next/link";
import { useState } from "react";
import { MODULE_ROUTES, SUPPORTED_LANGUAGES } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", href: MODULE_ROUTES.home },
  { label: "Turismo", href: MODULE_ROUTES.turismo },
  { label: "Mobilità", href: MODULE_ROUTES.mobilita },
  { label: "Eventi", href: MODULE_ROUTES.eventi },
  { label: "Servizi", href: MODULE_ROUTES.servizi },
  { label: "Segnala", href: MODULE_ROUTES.segnalazioni },
  { label: "Comunità", href: MODULE_ROUTES.comunita },
  { label: "Salute", href: MODULE_ROUTES.salute },
  { label: "Gastronomia", href: MODULE_ROUTES.gastronomia },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("IT");

  return (
    <header className="bg-[#003366] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-[#C8A951] font-bold text-2xl tracking-tight">Torino 360°</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 overflow-x-auto">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-[#C8A951] transition-colors duration-200 whitespace-nowrap">{link.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden xl:flex items-center gap-1 text-xs">
              {SUPPORTED_LANGUAGES.map((lang, i) => (
                <span key={lang}>
                  <button onClick={() => setCurrentLang(lang)} className={`px-1 py-0.5 rounded transition-colors ${currentLang === lang ? "text-[#C8A951] font-bold" : "text-gray-300 hover:text-white"}`}>{lang}</button>
                  {i < SUPPORTED_LANGUAGES.length - 1 && <span className="text-gray-500">|</span>}
                </span>
              ))}
            </div>
            <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C8A951]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Apri menu">
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-[#004080]">
            <nav className="flex flex-col gap-2 pt-4">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="px-2 py-2 text-sm font-medium hover:text-[#C8A951] hover:bg-[#004080] rounded transition-colors" onClick={() => setMenuOpen(false)}>{link.label}</Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
