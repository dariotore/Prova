import Link from "next/link";
import { MODULE_ROUTES } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#003366] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-[#C8A951] font-bold text-xl mb-2">Torino 360°</p>
            <p className="text-sm text-gray-300">Portale ufficiale del Comune di Torino. Informazioni, servizi e cultura per cittadini e visitatori.</p>
          </div>
          <div>
            <h3 className="text-[#C8A951] font-semibold text-sm uppercase mb-3">Esplora</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { label: "Turismo", href: MODULE_ROUTES.turismo },
                { label: "Mobilità", href: MODULE_ROUTES.mobilita },
                { label: "Eventi", href: MODULE_ROUTES.eventi },
                { label: "Servizi", href: MODULE_ROUTES.servizi },
                { label: "Comunità", href: MODULE_ROUTES.comunita },
              ].map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-[#C8A951] transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#C8A951] font-semibold text-sm uppercase mb-3">Informazioni</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/privacy" className="hover:text-[#C8A951] transition-colors">Privacy Policy (GDPR)</Link></li>
              <li><Link href="/accessibilita" className="hover:text-[#C8A951] transition-colors">Accessibilità (WCAG 2.1 AA)</Link></li>
              <li><Link href="/note-legali" className="hover:text-[#C8A951] transition-colors">Note Legali</Link></li>
              <li><Link href="/contatti" className="hover:text-[#C8A951] transition-colors">Contatti</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#C8A951] font-semibold text-sm uppercase mb-3">Comune di Torino</h3>
            <p className="text-sm text-gray-300">Piazza Palazzo di Città, 1<br />10122 Torino (TO)<br />Tel: 011 011 1111</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#004080] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© {year} Comune di Torino — Tutti i diritti riservati</p>
          <p>Sito conforme WCAG 2.1 AA — Dati aperti CC-BY 4.0</p>
        </div>
      </div>
    </footer>
  );
}
