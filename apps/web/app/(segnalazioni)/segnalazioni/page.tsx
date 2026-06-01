"use client";

import type { Segnalazione } from "@/types";

const TIPI_SEGNALAZIONE = [
  "Buche/Manto Stradale",
  "Illuminazione",
  "Rifiuti Abbandonati",
  "Verde Pubblico",
  "Vandalismo",
  "Altro",
];

const SEGNALAZIONI_RECENTI: Segnalazione[] = [
  { id: "SGN-001", tipo: "Buche/Manto Stradale", indirizzo: "Via Roma 45, Torino", descrizione: "Buca pericolosa", stato: "in_elaborazione", data: "28/05/2026" },
  { id: "SGN-002", tipo: "Illuminazione", indirizzo: "Corso Vittorio Emanuele II 12", descrizione: "Lampione spento", stato: "risolto", data: "25/05/2026" },
  { id: "SGN-003", tipo: "Rifiuti Abbandonati", indirizzo: "Piazza della Repubblica, area mercato", descrizione: "Rifiuti ingombranti", stato: "aperto", data: "30/05/2026" },
  { id: "SGN-004", tipo: "Verde Pubblico", indirizzo: "Parco del Valentino, vialetto nord", descrizione: "Albero pericolante", stato: "in_elaborazione", data: "29/05/2026" },
  { id: "SGN-005", tipo: "Vandalismo", indirizzo: "Via Po 7, pensilina bus", descrizione: "Pensilina danneggiata", stato: "aperto", data: "31/05/2026" },
];

const STATO_STYLE: Record<Segnalazione["stato"], string> = {
  aperto: "bg-red-100 text-red-700 font-semibold",
  in_elaborazione: "bg-yellow-100 text-yellow-700 font-semibold",
  risolto: "bg-green-100 text-green-700 font-semibold",
};

const STATO_LABEL: Record<Segnalazione["stato"], string> = {
  aperto: "Aperto",
  in_elaborazione: "In elaborazione",
  risolto: "Risolto",
};

export default function SegnalazioniPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <section className="bg-[#003366] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C8A951] font-semibold text-sm uppercase tracking-widest mb-2">Partecipazione Civica</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Segnalazioni Cittadine</h1>
          <p className="text-xl text-gray-200">Segnala problemi urbani con foto e posizione. Il Comune risponde entro 48 ore.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-xl shadow border border-gray-100 p-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Nuova Segnalazione</h2>
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Tipo di segnalazione</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]">
                <option value="">Seleziona categoria</option>
                {TIPI_SEGNALAZIONE.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Indirizzo</label>
              <input type="text" placeholder="es. Via Roma 10, Torino" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Descrizione</label>
              <textarea rows={4} placeholder="Descrivi il problema nel dettaglio..." className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] resize-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Foto</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-[#003366] transition-colors relative">
                <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
                <div className="flex flex-col items-center gap-2 pointer-events-none">
                  <span className="text-3xl">📷</span>
                  <p className="text-sm font-medium text-gray-600">Trascina qui una foto o clicca per caricare</p>
                  <p className="text-xs text-gray-400">PNG, JPG fino a 10MB</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="gps" className="w-4 h-4 accent-[#003366]" />
              <label htmlFor="gps" className="text-sm text-gray-700">Condividi la mia posizione GPS</label>
            </div>
            <button type="submit" className="bg-[#003366] hover:bg-[#004080] text-white font-bold px-6 py-3 rounded-lg transition-colors">Invia Segnalazione</button>
          </form>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <h2 className="text-2xl font-bold text-[#003366] mb-6">Segnalazioni Recenti</h2>
        <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#003366] text-white text-left">
                  <th className="px-4 py-3 font-semibold">ID</th>
                  <th className="px-4 py-3 font-semibold">Tipo</th>
                  <th className="px-4 py-3 font-semibold">Indirizzo</th>
                  <th className="px-4 py-3 font-semibold">Stato</th>
                  <th className="px-4 py-3 font-semibold">Data</th>
                </tr>
              </thead>
              <tbody>
                {SEGNALAZIONI_RECENTI.map((s, i) => (
                  <tr key={s.id} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-mono text-xs text-gray-500">{s.id}</td>
                    <td className="px-4 py-3 text-gray-800">{s.tipo}</td>
                    <td className="px-4 py-3 text-gray-600 max-w-xs truncate">{s.indirizzo}</td>
                    <td className="px-4 py-3"><span className={`px-2.5 py-1 rounded-full text-xs ${STATO_STYLE[s.stato]}`}>{STATO_LABEL[s.stato]}</span></td>
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{s.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
