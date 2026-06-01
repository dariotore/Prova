import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Torino 360°",
  description: "Informativa sul trattamento dei dati personali ai sensi del GDPR (Reg. UE 2016/679)",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#F5F5F0] min-h-screen">
      <section className="bg-[#003366] py-16 px-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
        <p className="text-blue-200 max-w-2xl mx-auto text-base">
          Informativa sul trattamento dei dati personali ai sensi del GDPR (Reg. UE 2016/679)
        </p>
        <p className="mt-4 text-sm text-blue-300">Ultimo aggiornamento: 1 giugno 2026</p>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 space-y-10">
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">1. Titolare del Trattamento</h2>
            <p className="text-gray-700 leading-relaxed">
              Il Titolare del trattamento è il <strong>Comune di Torino</strong>, con sede in Piazza Palazzo di Città 1, 10122 Torino (TO). Il DPO è raggiungibile a: <a href="mailto:privacy@comune.torino.it" className="text-[#003366] underline hover:text-[#C8A951] transition-colors">privacy@comune.torino.it</a>.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">2. Dati Raccolti</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li><strong>Dati di navigazione</strong>: indirizzo IP, browser, sistema operativo, pagine visitate.</li>
              <li><strong>Dati forniti dall&apos;utente</strong>: nome, e-mail e testo inseriti nei form di contatto o segnalazione.</li>
              <li><strong>Dati di localizzazione</strong>: posizione GPS, raccolti solo su consenso esplicito.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">3. Finalità del Trattamento</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li>Erogazione dei servizi comunali digitali richiesti.</li>
              <li>Miglioramento della piattaforma e dell&apos;esperienza utente.</li>
              <li>Produzione di statistiche aggregate e anonimizzate.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">4. Base Giuridica</h2>
            <p className="text-gray-700 leading-relaxed">Art. 6, par. 1, lett. e) del GDPR: esecuzione di un compito di interesse pubblico.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">5. Conservazione dei Dati</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li><strong>Dati di navigazione</strong>: 30 giorni dalla raccolta.</li>
              <li><strong>Dati delle segnalazioni</strong>: 5 anni dalla chiusura della pratica.</li>
              <li><strong>Dati di contatto</strong>: 2 anni dall&apos;ultima interazione.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">6. Diritti dell&apos;Interessato</h2>
            <p className="text-gray-700 leading-relaxed mb-2">Ai sensi degli artt. 15–22 del GDPR, ogni interessato può richiedere accesso, rettifica, cancellazione, opposizione e portabilità dei propri dati.</p>
            <p className="text-gray-700">Richieste: <a href="mailto:privacy@comune.torino.it" className="text-[#003366] underline hover:text-[#C8A951] transition-colors">privacy@comune.torino.it</a>.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">7. Cookie</h2>
            <p className="text-gray-700 leading-relaxed">Il sito utilizza <strong>esclusivamente cookie tecnici necessari</strong>. Nessun cookie di profilazione di terze parti.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">8. Modifiche alla Policy</h2>
            <p className="text-gray-700 leading-relaxed">La presente informativa può essere aggiornata. La data di ultimo aggiornamento è indicata in cima alla pagina.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
