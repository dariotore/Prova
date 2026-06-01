export default function GastronomiaPage() {
  const itinerari = [
    { emoji: "🍫", titolo: "Tour delle Cioccolaterie", descrizione: "Gobino, Peyrano, Guido Castagna: il cioccolato artigianale torinese" },
    { emoji: "🍷", titolo: "L'Aperitivo Torinese", descrizione: "Vermouth, Campari Soda e stuzzichini nelle piazze storiche" },
    { emoji: "🧀", titolo: "Prodotti del Territorio", descrizione: "Grissini, bagna cauda, tajarin: la tradizione piemontese in tavola" },
  ];

  const ristoranti = [
    { nome: "Trattoria Valenza", cucina: "Piemontese", zona: "Centro", prezzo: "€€", stelle: 4, descrizione: "Cucina casalinga piemontese con ingredienti di stagione e vini locali." },
    { nome: "Pastificio Defilippis", cucina: "Pasta Artigianale", zona: "Crocetta", prezzo: "€", stelle: 4, descrizione: "Pasta fresca artigianale dal 1872, tajarin e agnolotti del plin imperdibili." },
    { nome: "Ristorante Del Cambio", cucina: "Alta cucina", zona: "Centro", prezzo: "€€€", stelle: 5, descrizione: "Storico ristorante ottocentesco, uno dei più antichi d'Italia, con cucina d'autore." },
    { nome: "Tre Galline", cucina: "Piemontese storico", zona: "Quadrilatero Romano", prezzo: "€€", stelle: 4, descrizione: "Dal 1960 nel cuore del Quadrilatero, tradizione piemontese autentica." },
    { nome: "Combal.Zero", cucina: "Creativa", zona: "Rivoli", prezzo: "€€€", stelle: 5, descrizione: "Cucina d'avanguardia dello chef Davide Scabin, nel Castello di Rivoli." },
    { nome: "Scannabue", cucina: "Bistrot", zona: "San Salvario", prezzo: "€€", stelle: 4, descrizione: "Ambiente informale e vivace nel quartiere San Salvario, ottimo aperitivo." },
  ];

  const mercati = [
    { nome: "Porta Palazzo", note: "Il più grande mercato europeo all'aperto", orari: "Lun–Ven 7:30–13:30, Sab 7:30–14:00" },
    { nome: "Mercato di Piazza Madama Cristina", note: "Mercato rionale storico del quartiere Crocetta", orari: "Lun–Sab 7:30–13:30" },
    { nome: "Eataly Torino Lingotto", note: "Tempio del cibo italiano di qualità nell'ex Fiat Lingotto", orari: "Tutti i giorni 10:00–22:00" },
    { nome: "Mercato Coldiretti", note: "Ogni 1° sabato del mese, Piazza Palazzo di Città", orari: "1° sabato del mese, 9:00–15:00" },
  ];

  const prodotti = [
    { nome: "Grissini", emoji: "🥖" },
    { nome: "Vermouth", emoji: "🍸" },
    { nome: "Gianduiotto", emoji: "🍫" },
    { nome: "Bagna Cauda", emoji: "🫕" },
    { nome: "Tajarin", emoji: "🍝" },
    { nome: "Bicerin", emoji: "☕" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <section className="bg-[#003366] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C8A951] font-semibold text-sm uppercase tracking-widest mb-2">Sapori di Torino</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Gastronomia</h1>
          <p className="text-xl text-gray-200">Ristoranti, mercati, prodotti tipici e itinerari enogastronomici alla scoperta della cucina torinese.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Itinerari Enogastronomici</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {itinerari.map((it) => (
              <div key={it.titolo} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{it.emoji}</div>
                <h3 className="font-bold text-lg text-[#003366] mb-2">{it.titolo}</h3>
                <p className="text-sm text-gray-600">{it.descrizione}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Ristoranti in Evidenza</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ristoranti.map((r) => (
              <div key={r.nome} className="bg-white rounded-xl shadow-sm p-5 flex flex-col hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900">{r.nome}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{r.zona}</p>
                  </div>
                  <span className="shrink-0 text-sm font-bold text-[#C8A951]">{r.prezzo}</span>
                </div>
                <span className="self-start text-xs font-semibold bg-[#003366] text-white px-2 py-0.5 rounded-full mb-3">{r.cucina}</span>
                <p className="text-sm text-gray-600 flex-1 mb-4">{r.descrizione}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#C8A951] text-sm">{"★".repeat(r.stelle)}{"☆".repeat(5 - r.stelle)}</span>
                  <button className="text-xs font-semibold bg-[#C8A951] text-[#003366] px-3 py-1.5 rounded-lg hover:bg-[#b8992f] transition-colors">Prenota</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Mercati e Prodotti Tipici</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mercati.map((m) => (
              <div key={m.nome} className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-[#003366] mb-1">{m.nome}</h3>
                <p className="text-sm text-gray-600 mb-2">{m.note}</p>
                <p className="text-xs text-gray-400">{m.orari}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-6">Prodotti Tipici da non Perdere</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {prodotti.map((p) => (
              <div key={p.nome} className="bg-white rounded-xl shadow-sm p-5 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{p.emoji}</div>
                <p className="text-sm font-semibold text-[#003366]">{p.nome}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
