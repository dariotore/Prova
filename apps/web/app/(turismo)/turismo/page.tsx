import type { Attrazione } from "@/types";

const CATEGORIE = ["Tutti", "Musei", "Monumenti", "Natura", "Chiese", "Palazzi"];
const ZONE = ["Tutte le zone", "Centro", "Crocetta", "Lingotto", "Barriera di Milano", "Mirafiori", "Collina"];

const ATTRAZIONI: Attrazione[] = [
  { id: "mole", nome: "Mole Antonelliana", categoria: "Monumenti", descrizione: "Simbolo di Torino e sede del Museo Nazionale del Cinema, la Mole svetta sul panorama cittadino con i suoi 167 metri di altezza.", orari: "Lun–Ven 9:00–20:00, Sab–Dom 9:00–21:00", prezzi: "Museo: €15 adulti, €8 ridotti. Panoramica: €9", coordinate: { lat: 45.0683, lng: 7.6927 }, immagini: [], accessibile: true },
  { id: "palazzo-reale", nome: "Palazzo Reale", categoria: "Palazzi", descrizione: "Residenza dei Savoia per tre secoli, oggi parte dei Musei Reali di Torino e Patrimonio UNESCO.", orari: "Mar–Dom 9:00–19:00, chiuso lunedì", prezzi: "€15 adulti (comprensivo di altri musei reali)", coordinate: { lat: 45.0743, lng: 7.6851 }, immagini: [], accessibile: true },
  { id: "museo-egizio", nome: "Museo Egizio", categoria: "Musei", descrizione: "Il più importante museo egizio al mondo dopo quello del Cairo, con oltre 30.000 manufatti e la celebre collezione di papiri.", orari: "Mar–Dom 9:00–18:30", prezzi: "€18 adulti, €13 ridotti, gratuito under 6", coordinate: { lat: 45.0681, lng: 7.6823 }, immagini: [], accessibile: true },
  { id: "venaria", nome: "Reggia di Venaria", categoria: "Palazzi", descrizione: "Straordinaria reggia barocca Patrimonio UNESCO, con giardini reali e mostre temporanee di richiamo internazionale.", orari: "Mar–Ven 10:00–17:00, Sab–Dom 10:00–18:30", prezzi: "€20 adulti, gratuito residenti Venaria", coordinate: { lat: 45.1256, lng: 7.6119 }, immagini: [], accessibile: true },
  { id: "valentino", nome: "Parco del Valentino", categoria: "Natura", descrizione: "Il grande parco sul Po con il Castello del Valentino (UNESCO), l'Orto Botanico e il Borgo Medievale.", orari: "Sempre aperto", prezzi: "Gratuito", coordinate: { lat: 45.0528, lng: 7.6911 }, immagini: [], accessibile: true },
  { id: "gam", nome: "GAM – Galleria Civica d'Arte Moderna", categoria: "Musei", descrizione: "Il più antico museo d'arte moderna d'Italia, con una collezione permanente di oltre 47.000 opere dal XIX secolo a oggi.", orari: "Mar–Dom 10:00–18:00", prezzi: "€10 adulti, €8 ridotti", coordinate: { lat: 45.0684, lng: 7.6773 }, immagini: [], accessibile: true },
];

const CATEGORIA_COLORS: Record<string, string> = {
  Musei: "bg-amber-100 text-amber-800",
  Monumenti: "bg-blue-100 text-blue-800",
  Natura: "bg-green-100 text-green-800",
  Chiese: "bg-purple-100 text-purple-800",
  Palazzi: "bg-rose-100 text-rose-800",
};

export default function TurismoPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#003366] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C8A951] font-semibold text-sm uppercase tracking-widest mb-2">Scopri la città</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Turismo a Torino</h1>
          <p className="text-xl text-gray-200">Musei di fama mondiale, residenze reali barocche, parchi e una vivace scena gastronomica.</p>
        </div>
      </section>

      <section className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-4 items-center">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-semibold text-gray-600 self-center mr-1">Categoria:</span>
            {CATEGORIE.map((cat) => (
              <button key={cat} className="px-3 py-1.5 rounded-full text-sm border border-gray-300 hover:border-[#003366] hover:bg-[#003366] hover:text-white transition-colors first:bg-[#003366] first:text-white first:border-[#003366]">{cat}</button>
            ))}
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-sm font-semibold text-gray-600">Zona:</span>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#003366]">
              {ZONE.map((z) => <option key={z}>{z}</option>)}
            </select>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-sm text-gray-500 mb-6">{ATTRAZIONI.length} attrazioni trovate</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ATTRAZIONI.map((attr) => (
            <article key={attr.id} className="bg-white rounded-xl shadow hover:shadow-md transition-shadow border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-48 bg-gradient-to-br from-[#003366] to-[#004080] flex items-center justify-center">
                <span className="text-5xl opacity-50">🏛️</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h2 className="text-lg font-bold text-[#003366] leading-snug">{attr.nome}</h2>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${CATEGORIA_COLORS[attr.categoria] ?? "bg-gray-100 text-gray-700"}`}>{attr.categoria}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4 flex-1 line-clamp-3">{attr.descrizione}</p>
                <div className="text-xs text-gray-500 space-y-1 mb-4">
                  <p><span className="font-semibold">Orari:</span> {attr.orari}</p>
                  <p><span className="font-semibold">Prezzi:</span> {attr.prezzi}</p>
                  {attr.accessibile && <p className="text-green-700 font-medium">♿ Accessibile</p>}
                </div>
                <button className="w-full bg-[#003366] hover:bg-[#004080] text-white rounded-lg py-2 text-sm font-semibold transition-colors">Scopri →</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
