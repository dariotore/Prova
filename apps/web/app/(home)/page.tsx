import type { Metadata } from "next";
import Link from "next/link";
import { MODULE_ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home",
  description: "Scopri Torino 360°: il portale ufficiale della Città di Torino per turismo, servizi, mobilità ed eventi.",
};

const MODULES = [
  { title: "Turismo", href: MODULE_ROUTES.turismo, icon: "🏛️", description: "Musei, monumenti, attrazioni e itinerari culturali", color: "bg-amber-50 border-amber-200" },
  { title: "Mobilità", href: MODULE_ROUTES.mobilita, icon: "🚌", description: "GTT, parcheggi, bici e monopattini in tempo reale", color: "bg-blue-50 border-blue-200" },
  { title: "Eventi", href: MODULE_ROUTES.eventi, icon: "🎭", description: "Concerti, fiere, mostre ed eventi in città", color: "bg-purple-50 border-purple-200" },
  { title: "Servizi", href: MODULE_ROUTES.servizi, icon: "🏢", description: "Servizi comunali, sportelli e pratiche online", color: "bg-green-50 border-green-200" },
  { title: "Comunità", href: MODULE_ROUTES.comunita, icon: "👥", description: "Partecipazione civica e forum di quartiere", color: "bg-rose-50 border-rose-200" },
  { title: "Segnalazioni", href: MODULE_ROUTES.segnalazioni, icon: "📢", description: "Segnala problemi urbani al Comune", color: "bg-red-50 border-red-200" },
  { title: "Salute", href: MODULE_ROUTES.salute, icon: "🏥", description: "Ospedali, farmacie e prenotazioni CUP", color: "bg-teal-50 border-teal-200" },
  { title: "Gastronomia", href: MODULE_ROUTES.gastronomia, icon: "🍷", description: "Ristoranti, mercati e prodotti tipici", color: "bg-orange-50 border-orange-200" },
  { title: "Alloggi", href: MODULE_ROUTES.alloggi, icon: "🏨", description: "Hotel, B&B e appartamenti in città", color: "bg-indigo-50 border-indigo-200" },
  { title: "Istruzione & Lavoro", href: MODULE_ROUTES.istruzione, icon: "🎓", description: "Scuole, università e opportunità di lavoro", color: "bg-yellow-50 border-yellow-200" },
];

const MOCK_EVENTS = [
  { title: "Torino Jazz Festival", date: "15 Giu 2026", luogo: "Piazza Castello" },
  { title: "Salone del Gusto", date: "22 Giu 2026", luogo: "Lingotto Fiere" },
  { title: "Notte dei Musei", date: "18 Lug 2026", luogo: "Musei Civici" },
];

const MOCK_NOTIZIE = [
  { title: "Nuova linea metro: apertura prevista per settembre", date: "01 Giu 2026" },
  { title: "ZTL estesa in zona Valentino nei weekend estivi", date: "30 Mag 2026" },
  { title: "Apertura iscrizioni corsi estivi biblioteche civiche", date: "28 Mag 2026" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#003366] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="text-[#C8A951]">Torino</span> 360°
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">Scopri, esplora e vivi la città dalla A alla Z</p>
          <div className="max-w-2xl mx-auto">
            <div className="flex rounded-lg overflow-hidden shadow-xl">
              <input type="search" placeholder="Cerca musei, eventi, servizi, fermate..." className="flex-1 px-5 py-4 text-gray-900 text-base focus:outline-none" aria-label="Ricerca globale" />
              <button className="bg-[#C8A951] hover:bg-[#b8963f] text-white px-6 py-4 font-semibold transition-colors">Cerca</button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow p-5 border border-gray-100">
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">Meteo Torino</h2>
            <div className="flex items-center gap-3">
              <span className="text-5xl">☀️</span>
              <div>
                <p className="text-3xl font-bold text-[#003366]">24°C</p>
                <p className="text-sm text-gray-500">Soleggiato</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">Aggiornato: oggi, 10:00</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 border border-gray-100 sm:col-span-1 lg:col-span-2">
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">Ultime Notizie</h2>
            <ul className="space-y-3">
              {MOCK_NOTIZIE.map((n) => (
                <li key={n.title} className="border-b border-gray-100 pb-2 last:border-0">
                  <p className="text-sm font-medium text-[#003366] leading-snug">{n.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{n.date}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-5 border border-gray-100">
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">Stato Trasporti</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />Metro Linea 1 — Regolare</li>
              <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />Linea 4 — Ritardi lievi</li>
              <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />Linea 13 — Regolare</li>
            </ul>
            <Link href={MODULE_ROUTES.mobilita} className="text-xs text-[#003366] hover:text-[#C8A951] mt-3 inline-block underline">Vedi tutti →</Link>
          </div>
        </div>
        <div className="mt-6 bg-white rounded-xl shadow p-5 border border-gray-100">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">Eventi in Evidenza</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {MOCK_EVENTS.map((ev) => (
              <div key={ev.title} className="flex gap-3 items-start">
                <div className="bg-[#003366] text-white rounded-lg px-3 py-2 text-center min-w-[52px]">
                  <p className="text-xs font-semibold">{ev.date.split(" ")[1]}</p>
                  <p className="text-lg font-bold leading-none">{ev.date.split(" ")[0]}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#003366]">{ev.title}</p>
                  <p className="text-xs text-gray-500">{ev.luogo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-[#003366] mb-6">Esplora Torino</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {MODULES.map((mod) => (
            <Link key={mod.href} href={mod.href} className={`rounded-xl border-2 p-6 hover:shadow-md transition-all hover:-translate-y-0.5 ${mod.color}`}>
              <div className="text-4xl mb-3">{mod.icon}</div>
              <h3 className="font-bold text-[#003366] text-lg mb-1">{mod.title}</h3>
              <p className="text-sm text-gray-600">{mod.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
