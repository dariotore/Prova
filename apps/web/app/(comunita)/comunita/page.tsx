import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comunità",
  description: "Notizie, forum e partecipazione civica a Torino",
};

export default function ComunitaPage() {
  const notizie = [
    { id: 1, titolo: "Approvato il nuovo piano urbanistico per il quartiere Aurora", fonte: "La Stampa", data: "31 mag 2026", categoria: "Politica", categoriaColor: "bg-blue-100 text-blue-800" },
    { id: 2, titolo: "Festival delle Culture: tre giorni di musica e arte al Parco Dora", fonte: "Torino Today", data: "30 mag 2026", categoria: "Cultura", categoriaColor: "bg-purple-100 text-purple-800" },
    { id: 3, titolo: "Nuova linea di bus elettrici per il collegamento Lingotto–Mirafiori", fonte: "La Stampa", data: "29 mag 2026", categoria: "Trasporti", categoriaColor: "bg-amber-100 text-amber-800" },
    { id: 4, titolo: "Qualità dell'aria in miglioramento: dati PM10 sotto la soglia critica", fonte: "Torino Today", data: "28 mag 2026", categoria: "Ambiente", categoriaColor: "bg-green-100 text-green-800" },
    { id: 5, titolo: "Juventus: grande attesa per la finale di Coppa Italia all'Allianz Stadium", fonte: "La Stampa", data: "27 mag 2026", categoria: "Sport", categoriaColor: "bg-red-100 text-red-800" },
  ];
  const quartieri = [
    { nome: "Centro", topics: 142, lastActivity: "2 ore fa" },
    { nome: "Crocetta", topics: 87, lastActivity: "5 ore fa" },
    { nome: "Lingotto", topics: 63, lastActivity: "1 giorno fa" },
    { nome: "Aurora", topics: 109, lastActivity: "3 ore fa" },
    { nome: "Mirafiori", topics: 74, lastActivity: "12 ore fa" },
    { nome: "San Salvario", topics: 128, lastActivity: "1 ora fa" },
  ];
  const proposte = [
    { id: 1, titolo: "Più piste ciclabili nel quadrante nord", descrizione: "Proposta per estendere la rete ciclabile di 15 km nei quartieri Barriera di Milano e Aurora.", voti: 78 },
    { id: 2, titolo: "Giardini condivisi nei cortili delle scuole", descrizione: "Trasformare i cortili scolastici inutilizzati nei weekend in spazi verdi aperti alla comunità.", voti: 54 },
    { id: 3, titolo: "Fontane di acqua potabile nelle piazze principali", descrizione: "Installare almeno 10 nuove fontane nelle piazze più frequentate per ridurre l'uso di plastica.", voti: 91 },
  ];
  const blogPosts = [
    { id: 1, titolo: "Come funziona il bilancio partecipativo del Comune", estratto: "Ogni anno i cittadini possono votare i progetti da finanziare con una quota del bilancio comunale. Ecco come partecipare.", data: "28 mag 2026" },
    { id: 2, titolo: "Il progetto \"Porte Aperte\" trasforma gli spazi abbandonati", estratto: "Sedici edifici dismessi restituiti alla collettività: laboratori, orti urbani e sale prove per le associazioni.", data: "22 mag 2026" },
    { id: 3, titolo: "Assemblee di quartiere: calendario giugno 2026", estratto: "Tutte le date degli incontri pubblici di giugno quartiere per quartiere, con ordine del giorno e modalità di partecipazione.", data: "15 mag 2026" },
  ];
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <section className="bg-[#003366] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C8A951] font-semibold text-sm uppercase tracking-widest mb-2">Partecipazione Civica</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Comunità</h1>
          <p className="text-xl text-gray-200">Forum di quartiere, notizie locali, proposte dei cittadini e blog istituzionale.</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Notizie Locali</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notizie.map((n) => (
              <article key={n.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${n.categoriaColor}`}>{n.categoria}</span>
                  <span className="text-xs text-gray-400 shrink-0">{n.data}</span>
                </div>
                <h3 className="font-semibold text-gray-900 leading-snug mb-2">{n.titolo}</h3>
                <p className="text-sm text-gray-500">Fonte: {n.fonte}</p>
              </article>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Forum di Quartiere</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quartieri.map((q) => (
              <div key={q.nome} className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow flex flex-col gap-3">
                <div>
                  <h3 className="font-bold text-lg text-[#003366]">{q.nome}</h3>
                  <p className="text-sm text-gray-500 mt-1">{q.topics} discussioni attive</p>
                  <p className="text-xs text-gray-400">Ultima attività: {q.lastActivity}</p>
                </div>
                <a href="#" className="text-sm font-semibold text-[#C8A951] hover:text-[#003366] transition-colors mt-auto">Partecipa →</a>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Proposte dei Cittadini</h2>
          <div className="space-y-4">
            {proposte.map((p) => (
              <div key={p.id} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{p.titolo}</h3>
                    <p className="text-sm text-gray-600">{p.descrizione}</p>
                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-500">{p.voti} / 100 voti</span>
                        <span className="text-xs font-semibold text-[#003366]">{p.voti}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#C8A951] h-2 rounded-full" style={{ width: `${Math.min(p.voti, 100)}%` }} />
                      </div>
                    </div>
                  </div>
                  <button className="shrink-0 bg-[#003366] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#004080] transition-colors">Vota</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Blog Istituzionale</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm p-6 flex flex-col">
                <span className="text-xs text-gray-400 mb-2">{post.data}</span>
                <h3 className="font-bold text-gray-900 mb-3 leading-snug">{post.titolo}</h3>
                <p className="text-sm text-gray-600 flex-1">{post.estratto}</p>
                <a href="#" className="mt-4 text-sm font-semibold text-[#C8A951] hover:text-[#003366] transition-colors">Leggi →</a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
