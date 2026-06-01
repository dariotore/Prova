import type { Evento } from "@/types";

const CATEGORIE = ["Tutti", "Cultura", "Musica", "Sport", "Fiere", "Mercati", "Teatro"];
const FILTRI_DATA = ["Questa settimana", "Questo mese", "Scegli date"];
const FILTRI_PREZZO = ["Tutti", "Gratuiti", "A pagamento"];

const EVENTI: (Evento & { gratuito: boolean })[] = [
  { id: "1", titolo: "Torino Jazz Festival", data: "15 Giu 2026", luogo: "Piazza Castello", categoria: "Musica", prezzo: "Gratuito", url: "#", gratuito: true },
  { id: "2", titolo: "Salone Internazionale del Libro", data: "8–12 Mag 2026", luogo: "Lingotto Fiere", categoria: "Cultura", prezzo: "€15", url: "#", gratuito: false },
  { id: "3", titolo: "Torino Film Festival", data: "21–29 Nov 2026", luogo: "Cinema Massimo", categoria: "Cultura", prezzo: "€8", url: "#", gratuito: false },
  { id: "4", titolo: "Mercato di Porta Palazzo", data: "Ogni sabato", luogo: "Piazza della Repubblica", categoria: "Mercati", prezzo: "Gratuito", url: "#", gratuito: true },
  { id: "5", titolo: "Juventus vs Torino — Derby della Mole", data: "20 Apr 2026", luogo: "Allianz Stadium", categoria: "Sport", prezzo: "€35", url: "#", gratuito: false },
  { id: "6", titolo: "Notte dei Musei", data: "18 Mag 2026", luogo: "Musei Civici", categoria: "Cultura", prezzo: "Gratuito", url: "#", gratuito: true },
  { id: "7", titolo: "Fiera del Libro Antico", data: "3–5 Ott 2026", luogo: "Palazzo Bricherasio", categoria: "Fiere", prezzo: "Gratuito", url: "#", gratuito: true },
  { id: "8", titolo: "Torino Pride", data: "28 Giu 2026", luogo: "Corso Vittorio Emanuele", categoria: "Cultura", prezzo: "Gratuito", url: "#", gratuito: true },
  { id: "9", titolo: "Salone del Gusto", data: "22–26 Ott 2026", luogo: "Lingotto Fiere", categoria: "Fiere", prezzo: "€20", url: "#", gratuito: false },
  { id: "10", titolo: "Concerto al Valentino", data: "5 Lug 2026", luogo: "Parco del Valentino", categoria: "Musica", prezzo: "Gratuito", url: "#", gratuito: true },
  { id: "11", titolo: "Marathon Torino", data: "12 Apr 2026", luogo: "Piazza Vittorio Veneto", categoria: "Sport", prezzo: "€40", url: "#", gratuito: false },
  { id: "12", titolo: "Luci d'Artista", data: "Nov–Gen", luogo: "Vie del Centro", categoria: "Cultura", prezzo: "Gratuito", url: "#", gratuito: true },
];

const CATEGORIA_COLORS: Record<string, string> = {
  Cultura: "bg-purple-100 text-purple-800",
  Musica: "bg-blue-100 text-blue-800",
  Sport: "bg-green-100 text-green-800",
  Fiere: "bg-orange-100 text-orange-800",
  Mercati: "bg-yellow-100 text-yellow-800",
  Teatro: "bg-rose-100 text-rose-800",
};

export default function EventiPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <section className="bg-[#003366] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C8A951] font-semibold text-sm uppercase tracking-widest mb-2">Agenda della città</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Eventi a Torino</h1>
          <p className="text-xl text-gray-200">Concerti, festival, fiere, mostre e molto altro. Non perderti nulla di quello che accade in città.</p>
        </div>
      </section>

      <section className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap gap-3 items-center">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-semibold text-gray-600 self-center">Categoria:</span>
            {CATEGORIE.map((cat) => (
              <button key={cat} className="px-3 py-1.5 rounded-full text-sm border border-gray-300 hover:border-[#003366] hover:bg-[#003366] hover:text-white transition-colors first:bg-[#003366] first:text-white first:border-[#003366]">{cat}</button>
            ))}
          </div>
          <div className="flex gap-2 ml-auto flex-wrap">
            {FILTRI_DATA.map((f) => (
              <button key={f} className="px-3 py-1.5 rounded-full text-sm border border-gray-300 hover:border-[#003366] hover:text-[#003366] transition-colors">{f}</button>
            ))}
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#003366]">
              {FILTRI_PREZZO.map((f) => <option key={f}>{f}</option>)}
            </select>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">{EVENTI.length} eventi trovati</p>
          <div className="flex gap-2 text-sm">
            <a href="#" className="px-3 py-1.5 border border-gray-300 rounded-lg hover:border-[#003366] transition-colors text-gray-600">📅 iCal</a>
            <a href="#" className="px-3 py-1.5 border border-gray-300 rounded-lg hover:border-[#003366] transition-colors text-gray-600">Google Calendar</a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EVENTI.map((ev) => (
            <article key={ev.id} className="bg-white rounded-xl shadow hover:shadow-md transition-shadow border border-gray-100 p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${CATEGORIA_COLORS[ev.categoria] ?? "bg-gray-100 text-gray-700"}`}>{ev.categoria}</span>
                <button aria-label="Salva evento" className="text-gray-300 hover:text-red-500 transition-colors text-xl leading-none">♥</button>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#C8A951] uppercase tracking-wide mb-1">{ev.data}</p>
                <h2 className="text-base font-bold text-[#003366] leading-snug">{ev.titolo}</h2>
                <p className="text-sm text-gray-500 mt-1">📍 {ev.luogo}</p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                <span className={`text-sm font-bold ${ev.gratuito ? "text-green-600" : "text-[#003366]"}`}>{ev.prezzo}</span>
                <button className="text-sm font-semibold text-white bg-[#003366] hover:bg-[#004080] px-4 py-1.5 rounded-lg transition-colors">Dettagli</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <h2 className="text-xl font-bold text-[#003366] mb-4">Mappa degli Eventi</h2>
        <div className="bg-white rounded-xl border border-gray-200 h-64 flex items-center justify-center text-gray-400 shadow">
          <div className="text-center">
            <p className="text-4xl mb-2">🗺️</p>
            <p className="text-sm font-medium">Mappa eventi interattiva — prossimamente</p>
            <p className="text-xs mt-1">Integrazione Mapbox GL JS</p>
          </div>
        </div>
      </section>
    </div>
  );
}
