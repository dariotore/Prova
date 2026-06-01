"use client";

import { useState } from "react";

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    oggetto: "",
    messaggio: "",
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-[#F5F5F0] min-h-screen">
      <section className="bg-[#003366] py-16 px-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-3">Contatti</h1>
        <p className="text-blue-200 max-w-2xl mx-auto text-base">
          Siamo a tua disposizione. Contattaci per informazioni, segnalazioni o assistenza sui servizi comunali.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#003366] mb-6">Informazioni di contatto</h2>
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-[#003366]">
              <h3 className="font-bold text-[#003366] text-lg mb-2">Sede principale</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Piazza Palazzo di Città 1, 10122 Torino</p>
              <p className="text-gray-700 text-sm mt-1">
                <span className="mr-1">📞</span>
                <a href="tel:011011111" className="hover:text-[#003366] transition-colors">011 011 1111</a>
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-[#C8A951]">
              <h3 className="font-bold text-[#003366] text-lg mb-2">URP — Ufficio Relazioni con il Pubblico</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Via della Consolata 23, Torino</p>
              <p className="text-gray-700 text-sm mt-1">
                <span className="mr-1">📞</span>
                <a href="tel:0110113111" className="hover:text-[#003366] transition-colors">011 011 3111</a>
              </p>
              <p className="text-gray-500 text-xs mt-1">Lun–Ven 8:30–17:00</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-[#003366]">
              <h3 className="font-bold text-[#003366] text-lg mb-2">Posta elettronica</h3>
              <p className="text-gray-700 text-sm">
                <span className="font-medium">Email: </span>
                <a href="mailto:info@comune.torino.it" className="text-[#003366] underline hover:text-[#C8A951] transition-colors">info@comune.torino.it</a>
              </p>
              <p className="text-gray-700 text-sm mt-1">
                <span className="font-medium">PEC: </span>
                <a href="mailto:protocollo@pec.comune.torino.it" className="text-[#003366] underline hover:text-[#C8A951] transition-colors">protocollo@pec.comune.torino.it</a>
              </p>
            </div>
            <div className="bg-[#003366] rounded-xl p-6 text-white">
              <h3 className="font-bold text-[#C8A951] text-lg mb-2">Segnalazioni urgenti</h3>
              <p className="text-blue-100 text-sm mb-1">Numero verde gratuito</p>
              <p className="text-2xl font-bold"><span className="mr-2">📞</span>800 011 0110</p>
              <p className="text-blue-200 text-xs mt-2">Gratuito da rete fissa e mobile</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-6">Invia un messaggio</h2>
            {submitted ? (
              <div className="bg-green-50 border border-green-300 text-green-800 rounded-lg px-6 py-6 text-center">
                <p className="font-semibold text-lg">Messaggio inviato!</p>
                <p className="text-sm mt-2">Grazie per averci contattato. Ti risponderemo entro 3 giorni lavorativi.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="ct-nome" className="block text-sm font-medium text-gray-700 mb-1">Nome e cognome <span className="text-red-500">*</span></label>
                  <input id="ct-nome" type="text" required value={formData.nome} onChange={(e) => setFormData((d) => ({ ...d, nome: e.target.value }))} className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003366]" placeholder="Mario Rossi" />
                </div>
                <div>
                  <label htmlFor="ct-email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                  <input id="ct-email" type="email" required value={formData.email} onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))} className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003366]" placeholder="mario.rossi@email.it" />
                </div>
                <div>
                  <label htmlFor="ct-oggetto" className="block text-sm font-medium text-gray-700 mb-1">Oggetto <span className="text-red-500">*</span></label>
                  <select id="ct-oggetto" required value={formData.oggetto} onChange={(e) => setFormData((d) => ({ ...d, oggetto: e.target.value }))} className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003366] bg-white">
                    <option value="">Seleziona un oggetto</option>
                    <option value="informazioni">Informazioni generali</option>
                    <option value="segnalazione-tecnica">Segnalazione tecnica</option>
                    <option value="servizi-comunali">Servizi comunali</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="ct-messaggio" className="block text-sm font-medium text-gray-700 mb-1">Messaggio <span className="text-red-500">*</span></label>
                  <textarea id="ct-messaggio" required rows={5} value={formData.messaggio} onChange={(e) => setFormData((d) => ({ ...d, messaggio: e.target.value }))} className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003366] resize-none" placeholder="Scrivi qui il tuo messaggio..." />
                </div>
                <div className="flex items-start gap-3">
                  <input id="ct-privacy" type="checkbox" required checked={formData.privacy} onChange={(e) => setFormData((d) => ({ ...d, privacy: e.target.checked }))} className="mt-1 h-4 w-4 rounded border-gray-300 text-[#003366] focus:ring-[#003366]" />
                  <label htmlFor="ct-privacy" className="text-sm text-gray-600 leading-relaxed">
                    Ho letto e accetto la{" "}
                    <a href="/privacy" className="text-[#003366] underline hover:text-[#C8A951] transition-colors">Privacy Policy</a>{" "}
                    del Comune di Torino. <span className="text-red-500">*</span>
                  </label>
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#002244] transition-colors">Invia messaggio</button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Uffici comunali</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#003366] rounded-lg flex items-center justify-center mb-4"><span className="text-white text-lg">🏛️</span></div>
              <h3 className="font-bold text-[#003366] text-lg mb-2">Anagrafe</h3>
              <p className="text-gray-600 text-sm">Via della Consolata 23, Torino</p>
              <p className="text-gray-500 text-xs mt-2 font-medium uppercase tracking-wide">Lun–Ven 8:30–12:30</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#003366] rounded-lg flex items-center justify-center mb-4"><span className="text-white text-lg">💶</span></div>
              <h3 className="font-bold text-[#003366] text-lg mb-2">Tributi</h3>
              <p className="text-gray-600 text-sm">Via XX Settembre 31, Torino</p>
              <p className="text-gray-500 text-xs mt-2 font-medium uppercase tracking-wide">Lun–Ven 9:00–13:00</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#003366] rounded-lg flex items-center justify-center mb-4"><span className="text-white text-lg">📋</span></div>
              <h3 className="font-bold text-[#003366] text-lg mb-2">SUAP</h3>
              <p className="text-gray-600 text-sm">Piazza San Giovanni 5, Torino</p>
              <p className="text-gray-500 text-xs mt-2 font-medium uppercase tracking-wide">Mar–Gio 9:00–12:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
