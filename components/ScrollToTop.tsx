"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-30 rounded-full bg-blue-500 p-3 text-white shadow-lg shadow-blue-950/40 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-300 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
