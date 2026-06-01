"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="bg-[#F5F5F0] min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 text-center px-4 max-w-md">
        <span className="text-6xl">⚠️</span>
        <h1 className="text-2xl font-bold text-[#003366]">Si è verificato un errore</h1>
        <p className="text-gray-500">
          {error.message || "Qualcosa è andato storto. Riprova o torna alla home."}
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <button
            onClick={reset}
            className="px-5 py-2 bg-[#003366] text-white font-semibold rounded hover:bg-[#002244] transition-colors"
          >
            Riprova
          </button>
          <Link
            href="/"
            className="px-5 py-2 border-2 border-[#003366] text-[#003366] font-semibold rounded hover:bg-[#003366] hover:text-white transition-colors"
          >
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
}
