import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Note Legali — Torino 360°",
  description: "Note legali, licenze dei contenuti e responsabilità del portale Torino 360°.",
};

export default function NoteLegaliPage() {
  return (
    <div className="bg-[#F5F5F0] min-h-screen">
      <section className="bg-[#003366] py-16 px-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-3">Note Legali</h1>
        <p className="text-blue-200 max-w-2xl mx-auto text-base">
          Informazioni legali relative al portale Torino 360° e ai suoi contenuti
        </p>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 space-y-10">
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">Proprietà del sito</h2>
            <p className="text-gray-700 leading-relaxed">Il portale Torino 360° è di proprietà del <strong>Comune di Torino</strong>, sede in Piazza Palazzo di Città 1, 10122 Torino. P.IVA: <strong>00514490010</strong>.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">Licenza dei contenuti</h2>
            <p className="text-gray-700 leading-relaxed">Salvo diversa indicazione, i contenuti sono rilasciati sotto licenza <strong>Creative Commons CC-BY 4.0 Internazionale</strong>. È consentito riutilizzare e adattare il materiale citando la fonte.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">Dati aperti</h2>
            <p className="text-gray-700 leading-relaxed">I dataset pubblicati sono disponibili sul portale <strong>Open Data del Comune di Torino</strong> sotto licenza <strong>CC-BY 4.0</strong>.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">Limitazione di responsabilità</h2>
            <p className="text-gray-700 leading-relaxed">Il Comune non può essere ritenuto responsabile di danni derivanti dall&apos;utilizzo delle informazioni presenti sul portale né da interruzioni di servizio.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">Link a siti esterni</h2>
            <p className="text-gray-700 leading-relaxed">I link a siti di terze parti sono forniti a titolo informativo. Il Comune non è responsabile dei loro contenuti né delle loro politiche sulla privacy.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">Proprietà intellettuale</h2>
            <p className="text-gray-700 leading-relaxed">Il marchio <strong>&ldquo;Torino 360°&rdquo;</strong> è di proprietà del Comune di Torino. È vietato l&apos;uso senza previa autorizzazione scritta.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003366] mb-3">Foro competente</h2>
            <p className="text-gray-700 leading-relaxed">Per qualsiasi controversia è competente il <strong>Tribunale di Torino</strong>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
