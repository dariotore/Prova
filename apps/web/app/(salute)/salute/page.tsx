import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salute",
  description: "Ospedali, farmacie e prenotazioni sanitarie a Torino",
};

export default function SalutePage() {
  const pronto_soccorso = [
    { ospedale: "Molinette", indirizzo: "Via Genova 3", attesa: "45 min", codici: 12, stato: "Sovraffollato", statoColor: "bg-red-100 text-red-700" },
    { ospedale: "CTO", indirizzo: "Via Zuretti 29", attesa: "20 min", codici: 5, stato: "Normale", statoColor: "bg-green-100 text-green-700" },
    { ospedale: "Maria Vittoria", indirizzo: "Corso Tassoni 46", attesa: "30 min", codici: 8, stato: "Normale", statoColor: "bg-green-100 text-green-700" },
    { ospedale: "Mauriziano", indirizzo: "Largo Turati 62", attesa: "55 min", codici: 18, stato: "Sovraffollato", statoColor: "bg-red-100 text-red-700" },
    { ospedale: "Regina Margherita (pediatrico)", indirizzo: "Piazza Polonia 94", attesa: "25 min", codici: 6, stato: "Normale", statoColor: "bg-green-100 text-green-700" },
  ];

  const farmacie = [
    { nome: "Farmacia Centrale", indirizzo: "Via Roma 143", telefono: "011 5612345", orari: "Aperta 24h", aperta: true },
    { nome: "Farmacia San Carlo", indirizzo: "Corso Vittorio Emanuele II 55", telefono: "011 5478901", orari: "Aperta 24h", aperta: true },
    { nome: "Farmacia Aurora", indirizzo: "Corso Giulio Cesare 12", telefono: "011 2345678", orari: "8:30–22:00", aperta: true },
    { nome: "Farmacia Lingotto", indirizzo: "Via Nizza 280", telefono: "011 6789012", orari: "9:00–13:00 / 15:00–19:00", aperta: false },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <section className="bg-[#003366] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C8A951] font-semibold text-sm uppercase tracking-widest mb-2">Salute & Emergenze</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Salute a Torino</h1>
          <p className="text-xl text-gray-200">Pronto soccorso, farmacie di turno, prenotazioni CUP e monitoraggio qualità dell&apos;aria.</p>
        </div>
      </section>

      <section className="bg-red-700 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { emoji: "🚑", numero: "118", label: "Emergenza Medica", bg: "bg-red-800" },
              { emoji: "🚒", numero: "115", label: "Vigili del Fuoco", bg: "bg-orange-700" },
              { emoji: "🚔", numero: "112", label: "Numero Unico Emergenze", bg: "bg-red-900" },
              { emoji: "🏛️", numero: "011 0111111", label: "Comune di Torino", bg: "bg-orange-800" },
            ].map((item) => (
              <div key={item.numero} className={`${item.bg} rounded-lg p-4 text-center`}>
                <div className="text-3xl mb-1">{item.emoji}</div>
                <div className="text-2xl font-bold">{item.numero}</div>
                <div className="text-sm text-red-100 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Pronto Soccorso</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Ospedale</th>
                    <th className="text-left px-4 py-3 font-semibold">Indirizzo</th>
                    <th className="text-center px-4 py-3 font-semibold">Attesa stimata</th>
                    <th className="text-center px-4 py-3 font-semibold">Codici in attesa</th>
                    <th className="text-center px-4 py-3 font-semibold">Stato</th>
                  </tr>
                </thead>
                <tbody>
                  {pronto_soccorso.map((h, i) => (
                    <tr key={h.ospedale} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-900">{h.ospedale}</td>
                      <td className="px-4 py-3 text-gray-600">{h.indirizzo}</td>
                      <td className="px-4 py-3 text-center font-semibold text-gray-800">{h.attesa}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{h.codici}</td>
                      <td className="px-4 py-3 text-center"><span className={`text-xs font-semibold px-2 py-1 rounded-full ${h.statoColor}`}>{h.stato}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Farmacie di Turno</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {farmacie.map((f) => (
              <div key={f.nome} className="bg-white rounded-xl shadow-sm p-5 flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{f.nome}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${f.aperta ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{f.aperta ? "Aperta" : "Chiusa"}</span>
                  </div>
                  <p className="text-sm text-gray-600">{f.indirizzo}</p>
                  <p className="text-sm text-gray-500">Tel: {f.telefono}</p>
                  <p className="text-sm text-gray-500 mt-1">{f.orari}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Prenota CUP</h2>
          <div className="bg-white rounded-xl shadow-sm p-6 max-w-2xl">
            <p className="text-gray-700 mb-4">Il <strong>Centro Unico di Prenotazione (CUP)</strong> consente di prenotare visite specialistiche, esami diagnostici e prestazioni ambulatoriali presso le strutture del SSN in Piemonte.</p>
            <p className="text-gray-600 text-sm mb-6">Puoi prenotare online, per telefono al <strong>800 333 444</strong> (gratuito, lun–ven 8:00–17:00) oppure recandoti agli sportelli CUP.</p>
            <a href="#" className="inline-block bg-[#003366] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#004080] transition-colors">Prenota una visita →</a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Alert Meteo e Qualità dell&apos;Aria</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { indicatore: "PM10", valore: "28 µg/m³", stato: "Buona", color: "border-green-400 bg-green-50", statoColor: "text-green-700", icon: "🟢" },
              { indicatore: "Ozono", valore: "82 µg/m³", stato: "Moderata", color: "border-yellow-400 bg-yellow-50", statoColor: "text-yellow-700", icon: "🟡" },
              { indicatore: "Pollini", valore: "Bassa concentrazione", stato: "Buona", color: "border-green-400 bg-green-50", statoColor: "text-green-700", icon: "🟢" },
            ].map((item) => (
              <div key={item.indicatore} className={`rounded-xl border-2 p-5 ${item.color}`}>
                <div className="flex items-center gap-2 mb-2"><span>{item.icon}</span><span className="font-bold text-gray-900">{item.indicatore}</span></div>
                <p className="text-xl font-semibold text-gray-800">{item.valore}</p>
                <p className={`text-sm font-semibold mt-1 ${item.statoColor}`}>{item.stato}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
