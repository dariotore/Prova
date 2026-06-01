import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] flex flex-col items-center justify-center px-4">
      <p className="text-[10rem] leading-none font-black text-[#003366] select-none tracking-tight">
        404
      </p>
      <h1 className="mt-2 text-2xl font-bold text-[#C8A951] uppercase tracking-widest">
        Pagina non trovata
      </h1>
      <p className="mt-4 max-w-md text-center text-gray-600 text-base">
        La pagina che stai cercando non esiste o è stata spostata.
      </p>
      <div className="my-10 flex items-end gap-[2px] opacity-20 select-none" aria-hidden="true">
        {[18, 28, 22, 48, 14, 32, 60, 20, 36, 16, 44, 24, 12, 38, 20].map((h, i) => (
          <div key={i} className="bg-[#003366] w-3 rounded-t-sm" style={{ height: `${h}px` }} />
        ))}
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="px-6 py-3 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#002244] transition-colors">
          Torna alla Home
        </Link>
        <Link href="/servizi" className="px-6 py-3 border-2 border-[#003366] text-[#003366] font-semibold rounded-lg hover:bg-[#003366] hover:text-white transition-colors">
          Vai ai Servizi
        </Link>
      </div>
    </div>
  );
}
