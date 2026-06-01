import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Istruzione & Lavoro",
  description: "Scuole, università e opportunità lavorative a Torino",
};

const SCUOLE = [
  { nome: "Scuola dell'Infanzia Arcobaleno", zona: "Mirafiori", tipo: "3-6 anni", tel: "011 234 5678", categoria: "Nidi e Infanzia" },
  { nome: "IC Don Milani", zona: "Barriera di Milano", tipo: "Primaria+Media", tel: "011 234 5679", categoria: "Primarie e Secondarie" },
  { nome: "Liceo Classico Cavour", zona: "Centro", tipo: "Liceo", tel: "011 234 5680", categoria: "Superiori" },
  { nome: "ITIS Avogadro", zona: "Vanchiglia", tipo: "Tecnico Industriale", tel: "011 234 5681", categoria: "Superiori" },
  { nome: "Istituto Salesiano Valsalice", zona: "Crocetta", tipo: "Liceo", tel: "011 234 5682", categoria: "Superiori" },
  { nome: "Asilo Nido Pianeta Bimbi", zona: "Lingotto", tipo: "0-3 anni", tel: "011 234 5683", categoria: "Nidi e Infanzia" },
];

const UNIVERSITA = [
  {
    nome: "Università degli Studi di Torino",
    sigla: "UniTo",
    fondata: 1404,
    descrizione: "Ateneo storico con 70+ corsi di laurea in tutte le discipline scientifiche, umanistiche e giuridiche.",
    href: "https://www.unito.it",
  },
  {
    nome: "Politecnico di Torino",
    sigla: "PoliTo",
    fondata: 1859,
    descrizione: "Eccellenza in ingegneria e architettura, tra i migliori atenei tecnici d'Europa.",
    href: "https://www.polito.it",
  },
];

const LAVORO = [
  { titolo: "Software Engineer", azienda: "TechTorino Srl", tipo: "Full-time", zona: "Vanchiglia", data: "Pubblicato 2 giorni fa" },
  { titolo: "Medico di base", azienda: "ASL TO1", tipo: "Tempo indeterminato", zona: "Centro", data: "Pubblicato 1 settimana fa" },
  { titolo: "Operatore CNC", azienda: "FCA Italy", tipo: "Full-time", zona: "Mirafiori", data: "Pubblicato 3 giorni fa" },
  { titolo: "UI/UX Designer", azienda: "Startup Torinese", tipo: "Remote", zona: "Centro", data: "Pubblicato oggi" },
  { titolo: "Insegnante di italiano", azienda: "Comune di Torino", tipo: "Part-time", zona: "Vari quartieri", data: "Pubblicato 5 giorni fa" },
  { titolo: "Cuoco", azienda: "Ristorante Del Cambio", tipo: "Full-time", zona: "Centro", data: "Pubblicato 1 giorno fa" },
];

const FORMAZIONE = [
  {
    titolo: "Corsi di italiano per stranieri",
    ente: "Biblioteche civiche",
    badge: "Gratuiti",
    badgeColor: "bg-green-100 text-green-800",
    descrizione: "Lezioni di lingua italiana per residenti stranieri, tutti i livelli, presso le biblioteche del Comune.",
  },
  {
    titolo: "Corsi professionalizzanti",
    ente: "Regione Piemonte",
    badge: "Finanziati",
    badgeColor: "bg-blue-100 text-blue-800",
    descrizione: "Percorsi formativi riconosciuti per aggiornamento professionale e inserimento lavorativo.",
  },
  {
    titolo: "Academy Torino",
    ente: "Privato",
    badge: "Bootcamp",
    badgeColor: "bg-purple-100 text-purple-800",
    descrizione: "Coding bootcamp e digital skills: sviluppo web, data science e marketing digitale.",
  },
];

const TIPO_BADGE: Record<string, string> = {
  "Full-time": "bg-green-100 text-green-800",
  "Part-time": "bg-yellow-100 text-yellow-800",
  "Tempo indeterminato": "bg-blue-100 text-blue-800",
  Remote: "bg-purple-100 text-purple-800",
};

export default function IstruzionePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <section className="bg-[#003366] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C8A951] font-semibold text-sm uppercase tracking-widest mb-2">Crescita e Opportunità</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Istruzione &amp; Lavoro</h1>
          <p className="text-xl text-gray-200">Scuole, università, opportunità di lavoro e corsi di formazione per vivere e crescere a Torino.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-6">🏫 Scuole</h2>
            <div className="flex gap-2 mb-6 flex-wrap">
              {["Nidi e Infanzia", "Primarie e Secondarie", "Superiori"].map((tab) => (
                <span
                  key={tab}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-white border-2 border-[#003366] text-[#003366]"
                >
                  {tab}
                </span>
              ))}
            </div>
            <div className="space-y-3">
              {SCUOLE.map((scuola) => (
                <div
                  key={scuola.nome}
                  className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm leading-snug">{scuola.nome}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1.5">
                        <span className="text-xs text-gray-500">{scuola.zona}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-xs font-medium bg-[#003366] text-white px-2 py-0.5 rounded-full">{scuola.tipo}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-xs text-gray-400 italic">{scuola.categoria}</span>
                      </div>
                    </div>
                    <a
                      href={`tel:${scuola.tel.replace(/ /g, "")}`}
                      className="shrink-0 text-xs text-[#003366] hover:text-[#C8A951] font-medium transition-colors whitespace-nowrap"
                    >
                      📞 {scuola.tel}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-6">🎓 Università</h2>
            <div className="space-y-4">
              {UNIVERSITA.map((uni) => (
                <div key={uni.sigla} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-[#003366] text-white flex items-center justify-center text-sm font-bold shrink-0">
                      {uni.sigla}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#003366] leading-snug">{uni.nome}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">Fondata nel {uni.fondata}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{uni.descrizione}</p>
                  <a
                    href={uni.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#003366] hover:bg-[#004080] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    Visita il sito →
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">💼 Opportunità di Lavoro</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LAVORO.map((job) => (
              <div key={`${job.titolo}-${job.azienda}`} className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{job.titolo}</h3>
                    <p className="text-xs text-[#003366] font-medium mt-0.5">{job.azienda}</p>
                  </div>
                  <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${TIPO_BADGE[job.tipo] ?? "bg-gray-100 text-gray-700"}`}>
                    {job.tipo}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <span>📍 {job.zona}</span>
                  <span className="text-gray-300">·</span>
                  <span>{job.data}</span>
                </div>
                <button className="mt-auto w-full bg-[#003366] hover:bg-[#004080] text-white text-xs font-semibold py-2 rounded-lg transition-colors">
                  Candidati
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">📚 Formazione e Corsi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FORMAZIONE.map((corso) => (
              <div key={corso.titolo} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${corso.badgeColor}`}>{corso.badge}</span>
                </div>
                <h3 className="font-bold text-[#003366] mb-1">{corso.titolo}</h3>
                <p className="text-xs text-gray-400 font-medium mb-3">{corso.ente}</p>
                <p className="text-sm text-gray-600">{corso.descrizione}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
