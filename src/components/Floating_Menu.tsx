"use client";

import { useState } from "react";
import { ArrowUp, Facebook, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

const FloatingMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Botones con animación */}
      <div className="flex flex-col items-end gap-3">
        {/* Messenger */}
        <Link
          href="https://www.messenger.com/"
          className={`w-14 h-14 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300
            ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
          `}
          style={{ transitionDelay: open ? "260ms" : "0ms" }}
        >
          <MessageCircle size={26} />
        </Link>

        {/* Facebook */}
        <Link
          href="https://web.facebook.com/?locale=es_LA&_rdc=1&_rdr#"
          className={`w-14 h-14 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300
            ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
          `}
          style={{ transitionDelay: open ? "180ms" : "0ms" }}
        >
          <Facebook size={26} />
        </Link>

        {/* Email */}
        <Link
          href="/contactanos"
          className={`w-14 h-14 flex items-center justify-center bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300
            ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
          `}
          style={{ transitionDelay: open ? "100ms" : "0ms" }}
        >
          <Mail size={26} />
        </Link>
      </div>

      {/* Botón principal */}
      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 flex items-center justify-center bg-indigo-600 text-white rounded-full shadow-xl hover:bg-indigo-700 transition"
      >
        <ArrowUp
          size={32}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
};

export default FloatingMenu;
