import Link from "next/link";
import { MODULE_ROUTES } from "@/lib/constants";

const PROSSIME_PARTENZE = [
  { linea: "4", direzione: "Albertina", minuti: 2, tipo: "bus" },
  { linea: "13", direzione: "Rebaudengo", minuti: 5, tipo: "bus" },
  { linea: "M1", direzione: "Fermi", minuti: 3, tipo: "metro" },
  { linea: "57", direzione: "Vallette", minuti: 8, tipo: "bus" },
  { linea: "4", direzione: "Grugliasco", minuti: 12, tipo: "bus" },
];

const PARCHEGGI = [
  { nome: "Parcheggio Vittorio", posti: 320, liberi: 87, zona: "Centro" },
  { nome: "P. Porta Nuova", posti: 450, liberi: 212, zona: "Crocetta" },
  { nome: "P. Lingotto", posti: 1200, liberi: 543, zona: "Lingotto" },
  { nome: "P. Palazzo di Città", posti: 180, liberi: 12, zona: "Centro" },
];

function getDisponibilitaColor(liberi: number, totali: number): string {
  const perc = liberi / totali;
  if (perc > 0.5) return "text-green-600";
  if (perc > 0.2) return "text-yellow-600";
  return "text-red-600";
}

export default function MobilitaPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#003366] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C8A951] font-semibold text-sm uppercase tracking-widest mb-2">Muoviti in città</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Mobilità</h1>
          <p className="text-xl text-gray-200">Pianifica i tuoi spostamenti con i trasporti pubblici GTT, trova parcheggio e scopri le alternative sostenibili.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <section className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-[#003366] mb-5">Pianifica il percorso</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-1">
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase">Partenza</label>
              <input type="text" placeholder="Es. Via Roma, 1" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]" />
            </div>
            <div className="lg:col-span-1">
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase">Destinazione</label>
              <input type="text" placeholder="Es. Mole Antonelliana" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase">Data</label>
              <input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase">Ora partenza</label>
              <input type="time" defaultValue="08:00" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]" />
            </div>
          </div>
          <button className="mt-5 bg-[#003366] hover:bg-[#004080] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors">Calcola percorso</button>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-[#003366] mb-5">Prossime partenze — Porta Nuova</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase">
                  <th className="text-left pb-2 font-semibold">Linea</th>
                  <th className="text-left pb-2 font-semibold">Direzione</th>
                  <th className="text-right pb-2 font-semibold">In arrivo</th>
                </tr>
              </thead>
              <tbody>
                {PROSSIME_PARTENZE.map((dep, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="py-3">
                      <span className={`inline-flex items-center justify-center w-9 h-9 rounded-lg font-bold text-white text-sm ${dep.tipo === "metro" ? "bg-red-600" : "bg-[#003366]"}`}>
                        {dep.tipo === "metro" ? "M" : dep.linea}
                      </span>
                    </td>
                    <td className="py-3 text-gray-700">{dep.direzione}</td>
                    <td className="py-3 text-right font-semibold text-[#003366]">{dep.minuti === 1 ? "1 min" : `${dep.minuti} min`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-400 mt-3">Dati in tempo reale GTT — aggiornato ora</p>
          </section>

          <section className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-[#003366] mb-5">Disponibilità Parcheggi</h2>
            <ul className="space-y-4">
              {PARCHEGGI.map((p) => (
                <li key={p.nome} className="flex items-center gap-4">
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-gray-800">{p.nome}</p>
                    <p className="text-xs text-gray-500">{p.zona}</p>
                    <div className="mt-1.5 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#003366] rounded-full" style={{ width: `${((p.posti - p.liberi) / p.posti) * 100}%` }} />
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-bold ${getDisponibilitaColor(p.liberi, p.posti)}`}>{p.liberi}</p>
                    <p className="text-xs text-gray-400">/ {p.posti}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section>
          <h2 className="text-xl font-bold text-[#003366] mb-5">Mobilità Sostenibile</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "TO Bike", icon: "🚲", desc: "Biciclette comunali in condivisione. 150+ stazioni in città.", cta: "Vai a TO Bike" },
              { title: "Monopattini", icon: "🛴", desc: "Noleggio monopattini elettrici con Tier, Bird e Voi.", cta: "Trova un monopattino" },
              { title: "Car Sharing", icon: "🚗", desc: "Enjoy e Share'NGo per gli spostamenti in auto senza possederla.", cta: "Scopri il car sharing" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-100 shadow p-5 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#003366] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                <button className="text-sm font-semibold text-[#003366] hover:text-[#C8A951] underline transition-colors">{item.cta} →</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
