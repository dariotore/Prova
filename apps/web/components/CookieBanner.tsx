"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) setVisible(true);
    }
  }, []);

  function handleAccept() {
    if (typeof window !== "undefined") localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  }

  function handleReject() {
    if (typeof window !== "undefined") localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#003366] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm leading-relaxed">
          Utilizziamo cookie tecnici necessari al funzionamento del sito. Nessun cookie di profilazione.{" "}
          <Link href="/privacy" className="underline hover:text-[#C8A951] transition-colors">Informativa Privacy</Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={handleAccept} className="px-4 py-2 bg-[#C8A951] text-[#003366] font-bold rounded hover:bg-[#b8973f] transition-colors text-sm">Accetta</button>
          <button onClick={handleReject} className="px-4 py-2 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-[#003366] transition-colors text-sm">Rifiuta</button>
        </div>
      </div>
    </div>
  );
}
