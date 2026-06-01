"use client";

const SERVIZI = [
  { icon: "🏠", titolo: "Cambio Residenza", descrizione: "Richiedi il cambio online senza recarti allo sportello" },
  { icon: "📄", titolo: "Certificati Anagrafici", descrizione: "Scarica certificati di residenza, stato civile, nascita" },
  { icon: "💰", titolo: "Pagamento TARI", descrizione: "Paga la tassa rifiuti con carta o pagoPA" },
  { icon: "🏗️", titolo: "Pratiche Edilizie", descrizione: "Consulta lo stato delle tue pratiche urbanistiche" },
  { icon: "📅", titolo: "Prenota Appuntamento", descrizione: "Prenota uno sportello comunale online" },
  { icon: "🚗", titolo: "Pagamento Multe", descrizione: "Paga le multe con sconto entro 5 giorni" },
  { icon: "🗳️", titolo: "Bandi e Concorsi", descrizione: "Tutte le opportunità di lavoro nel Comune" },
  { icon: "📢", titolo: "Segnalazioni", descrizione: "Segnala problemi urbani con foto e posizione" },
];

const UFFICI = ["Anagrafe", "TARI", "Edilizia", "Polizia Municipale"];
const ORA_SLOTS = ["9:00", "9:30", "10:00", "10:30", "11:00", "14:00", "14:30", "15:00"];
const PAGAMENTI = [
  { icon: "€", label: "TARI" },
  { icon: "🏡", label: "IMU" },
  { icon: "🚗", label: "Multe" },
];

export default function ServiziPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <section className="bg-[#003366] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C8A951] font-semibold text-sm uppercase tracking-widest mb-2">Comune di Torino</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Servizi Comunali</h1>
          <p className="text-xl text-gray-200">Pratiche online, sportelli, modulistica e servizi digitali del Comune di Torino.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-[#003366] mb-6">Accesso ai Servizi</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center text-center gap-3 border border-gray-100">
            <span className="text-4xl">🔐</span>
            <h3 className="text-lg font-bold text-[#003366]">Accedi con SPID</h3>
            <p className="text-sm text-gray-500">Usa la tua identità digitale</p>
            <button className="mt-2 bg-[#003366] hover:bg-[#004080] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors w-full">Accedi con SPID</button>
          </div>
          <div className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center text-center gap-3 border border-[#003366]">
            <span className="text-4xl">💳</span>
            <h3 className="text-lg font-bold text-[#003366]">Accedi con CIE</h3>
            <p className="text-sm text-gray-500">Carta d&apos;Identità Elettronica</p>
            <button className="mt-2 border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white font-semibold px-6 py-2.5 rounded-lg transition-colors w-full">Accedi con CIE</button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h2 className="text-2xl font-bold text-[#003366] mb-6">I Nostri Servizi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVIZI.map((s) => (
            <article key={s.titolo} className="bg-white rounded-xl shadow hover:shadow-md transition-shadow border border-gray-100 p-5 flex flex-col gap-3">
              <span className="text-3xl">{s.icon}</span>
              <h3 className="font-bold text-[#003366] text-base leading-snug">{s.titolo}</h3>
              <p className="text-sm text-gray-500 flex-1">{s.descrizione}</p>
              <a href="#" className="text-sm font-semibold text-[#C8A951] hover:underline mt-auto">Vai al servizio →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-xl shadow border border-gray-100 p-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Prenota Appuntamento</h2>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Ufficio</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]">
                <option value="">Seleziona ufficio</option>
                {UFFICI.map((u) => <option key={u}>{u}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Data</label>
              <input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Orario</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]">
                <option value="">Seleziona orario</option>
                {ORA_SLOTS.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Motivo (opzionale)</label>
              <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] resize-none" placeholder="Descrivi brevemente il motivo dell'appuntamento..." />
            </div>
            <button type="submit" className="bg-[#003366] hover:bg-[#004080] text-white font-bold px-6 py-3 rounded-lg transition-colors">Prenota</button>
          </form>
          <p className="text-xs text-gray-400 mt-4">Servizio disponibile previa autenticazione SPID/CIE</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <h2 className="text-2xl font-bold text-[#003366] mb-6">Pagamenti Online</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          {PAGAMENTI.map((p) => (
            <div key={p.label} className="flex-1 bg-white rounded-xl shadow border border-gray-100 p-6 flex flex-col items-center gap-3 text-center">
              <span className="text-3xl">{p.icon}</span>
              <span className="font-bold text-[#003366] text-lg">{p.label}</span>
              <button className="mt-1 bg-[#C8A951] hover:bg-[#b8993e] text-white font-semibold px-5 py-2 rounded-lg transition-colors w-full">Paga ora</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
