import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alloggi",
  description: "Hotel, B&B e appartamenti a Torino",
};

const ACCOMMODATIONS = [
  { id: 1, nome: "Grand Hotel Sitea", zona: "Centro", tipo: "Hotel", stelle: 5, prezzo: 180, descrizione: "Lusso nel cuore di Torino" },
  { id: 2, nome: "NH Torino Lingotto", zona: "Lingotto", tipo: "Hotel", stelle: 4, prezzo: 95, descrizione: "Design moderno ex fabbrica Fiat" },
  { id: 3, nome: "B&B La Maddalena", zona: "Crocetta", tipo: "B&B", stelle: 3, prezzo: 65, descrizione: "Accogliente nel quartiere Crocetta" },
  { id: 4, nome: "Ostello Torino", zona: "Centro", tipo: "Ostello", stelle: 2, prezzo: 28, descrizione: "Economico vicino alla stazione" },
  { id: 5, nome: "Aparthotel Turin Palace", zona: "Centro", tipo: "Appartamento", stelle: 4, prezzo: 120, descrizione: "Appartamenti con cucina attrezzata" },
  { id: 6, nome: "Hotel Victoria", zona: "Centro", tipo: "Hotel", stelle: 4, prezzo: 110, descrizione: "Elegante con giardino interno" },
  { id: 7, nome: "B&B Valentino", zona: "Crocetta", tipo: "B&B", stelle: 3, prezzo: 70, descrizione: "Vista sul Parco del Valentino" },
  { id: 8, nome: "Hotel Crimea", zona: "Vanchiglia", tipo: "Hotel", stelle: 3, prezzo: 75, descrizione: "Storico albergo nel quartiere Po" },
  { id: 9, nome: "Residenza Tre Stelle", zona: "Mirafiori", tipo: "Appartamento", stelle: 2, prezzo: 45, descrizione: "Ideale per soggiorni lunghi" },
];

const ZONE = ["Tutti", "Centro", "Lingotto", "Crocetta", "Vanchiglia", "Mirafiori"];

const TIPO_COLORS: Record<string, string> = {
  Hotel: "bg-blue-100 text-blue-800",
  "B&B": "bg-green-100 text-green-800",
  Appartamento: "bg-purple-100 text-purple-800",
  Ostello: "bg-orange-100 text-orange-800",
};

export default function AlloggiPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <section className="bg-[#003366] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C8A951] font-semibold text-sm uppercase tracking-widest mb-2">Dove Dormire</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Alloggi a Torino</h1>
          <p className="text-xl text-gray-200">Trova hotel, B&amp;B, appartamenti e ostelli nel cuore della città. Confronta prezzi e disponibilità per il tuo soggiorno ideale.</p>
        </div>
      </section>
      <div className="sticky top-0 z-20 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-2">
            {ZONE.map((zona) => (
              <span key={zona} className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition-colors ${zona === "Tutti" ? "bg-[#003366] text-white" : "bg-gray-100 text-gray-700 hover:bg-[#003366] hover:text-white"}`}>{zona}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-3 py-1.5 bg-gray-50">
              <span className="text-xs text-gray-500 mr-1">Stelle:</span>
              {[1, 2, 3, 4, 5].map((s) => (<span key={s} className="text-[#C8A951] cursor-pointer text-sm hover:scale-110 transition-transform">★</span>))}
            </div>
            <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#003366]">
              <option value="">Tipo struttura</option>
              <option>Hotel</option>
              <option>B&amp;B</option>
              <option>Appartamento</option>
              <option>Ostello</option>
            </select>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#003366]">Strutture Disponibili</h2>
            <span className="text-sm text-gray-500">{ACCOMMODATIONS.length} strutture trovate</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACCOMMODATIONS.map((acc) => (
              <div key={acc.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-[#003366] to-[#004080] flex items-center justify-center text-white text-5xl">🏨</div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-base leading-snug">{acc.nome}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{acc.zona}</p>
                    </div>
                    <button className="text-gray-300 hover:text-red-400 transition-colors text-xl shrink-0" aria-label="Salva nei preferiti">♡</button>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${TIPO_COLORS[acc.tipo] ?? "bg-gray-100 text-gray-700"}`}>{acc.tipo}</span>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">{acc.zona}</span>
                  </div>
                  <div className="flex items-center gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (<span key={i} className={`text-sm ${i < acc.stelle ? "text-[#C8A951]" : "text-gray-200"}`}>★</span>))}
                  </div>
                  <p className="text-sm text-gray-600 flex-1 mb-4">{acc.descrizione}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div><span className="text-xs text-gray-400">da</span><span className="text-lg font-bold text-[#003366] mx-1">€{acc.prezzo}</span><span className="text-xs text-gray-400">/notte</span></div>
                    <button className="bg-[#003366] hover:bg-[#004080] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors">Disponibilità</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-lg font-bold text-[#003366] mb-4">Prenota tramite i nostri partner</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { nome: "Booking.com", colore: "bg-blue-50 border-blue-200 text-blue-700" },
              { nome: "Airbnb", colore: "bg-pink-50 border-pink-200 text-pink-700" },
              { nome: "Expedia", colore: "bg-yellow-50 border-yellow-200 text-yellow-700" },
            ].map((partner) => (<span key={partner.nome} className={`border-2 rounded-lg px-5 py-2.5 text-sm font-bold tracking-wide ${partner.colore}`}>{partner.nome}</span>))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Mappa Alloggi</h2>
          <div className="bg-white rounded-xl shadow-sm border-2 border-dashed border-gray-200 h-80 flex flex-col items-center justify-center text-gray-400">
            <div className="text-5xl mb-4">🗺️</div>
            <p className="text-lg font-semibold text-gray-500">Mappa interattiva degli alloggi</p>
            <p className="text-sm mt-2">Integrazione Booking.com API</p>
            <p className="text-xs text-gray-300 mt-1">In sviluppo — disponibile nella prossima versione</p>
          </div>
        </section>
      </div>
    </div>
  );
}
