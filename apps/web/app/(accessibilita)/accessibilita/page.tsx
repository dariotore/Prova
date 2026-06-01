"use client";

import { useState } from "react";

export default function AccessibilitaPage() {
  const [formData, setFormData] = useState({ nome: "", email: "", descrizione: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-[#F5F5F0] min-h-screen">
      <section className="bg-[#003366] py-16 px-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-3">Accessibilità</h1>
        <p className="text-blue-200 max-w-2xl mx-auto text-base">
          Dichiarazione di accessibilità ai sensi della Legge 4/2004 e delle Linee Guida WCAG 2.1
        </p>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 space-y-10">
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">Stato di conformità</h2>
            <span className="inline-block bg-yellow-100 text-yellow-800 font-semibold px-3 py-1 rounded-full text-sm border border-yellow-300">Parzialmente conforme</span>
            <p className="mt-3 text-gray-700 leading-relaxed">Il portale Torino 360° è <strong>parzialmente conforme</strong> agli standard di accessibilità WCAG 2.1 AA. Il Comune è impegnato nel miglioramento continuo.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">Standard di riferimento</h2>
            <p className="text-gray-700 leading-relaxed"><strong>WCAG 2.1 livello AA</strong>, Legge 9 gennaio 2004, n. 4 (Legge Stanca) e Direttiva UE 2016/2102.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">Tecnologie assistive supportate</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li>Screen reader (NVDA, JAWS, VoiceOver)</li>
              <li>Navigazione da tastiera</li>
              <li>Modalità alto contrasto</li>
              <li>Zoom del browser fino al 200% senza perdita di contenuto</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">Problemi noti</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li>Le mappe interattive non sono ancora pienamente accessibili — in sviluppo.</li>
              <li>Alcune etichette ARIA potrebbero non essere complete in alcuni componenti.</li>
              <li>Le tabelle di dati complesse richiedono miglioramenti per la navigazione da screen reader.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">Meccanismo di feedback</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Se riscontri problemi di accessibilità, inviaci una segnalazione.</p>
            {submitted ? (
              <div className="bg-green-50 border border-green-300 text-green-800 rounded-lg px-6 py-4">
                <p className="font-semibold">Segnalazione inviata con successo.</p>
                <p className="text-sm mt-1">Ti risponderemo entro 7 giorni lavorativi.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="acc-nome" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input id="acc-nome" type="text" required value={formData.nome} onChange={(e) => setFormData((d) => ({ ...d, nome: e.target.value }))} className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003366]" placeholder="Il tuo nome" />
                </div>
                <div>
                  <label htmlFor="acc-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input id="acc-email" type="email" required value={formData.email} onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))} className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003366]" placeholder="la-tua@email.it" />
                </div>
                <div>
                  <label htmlFor="acc-descrizione" className="block text-sm font-medium text-gray-700 mb-1">Descrizione del problema</label>
                  <textarea id="acc-descrizione" required rows={5} value={formData.descrizione} onChange={(e) => setFormData((d) => ({ ...d, descrizione: e.target.value }))} className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003366] resize-none" placeholder="Descrivi il problema di accessibilità riscontrato..." />
                </div>
                <button type="submit" className="px-6 py-3 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#002244] transition-colors">Invia segnalazione</button>
              </form>
            )}
          </section>
          <section className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500"><strong>Data della dichiarazione:</strong> 1 giugno 2026</p>
            <p className="text-sm text-gray-500 mt-1"><strong>Revisione:</strong> annuale</p>
          </section>
        </div>
      </div>
    </div>
  );
}
