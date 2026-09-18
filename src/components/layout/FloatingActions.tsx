"use client";

import React, { useState } from "react";
import { clinicData } from "@/data/clinic";
import { Phone, MessageCircle, X } from "lucide-react";

export function FloatingActions() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Floating Speed Dial Wrapper */}
      <div className="flex flex-col items-end gap-2.5">
        {/* Call Speed Button */}
        <a
          href={`tel:${clinicData.phoneRaw}`}
          className="group flex items-center gap-2.5 bg-white text-slate-800 hover:text-teal-800 p-2 sm:px-4 sm:py-2.5 rounded-full shadow-lg border border-slate-200 hover:border-teal-400 transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label={`Call clinic at ${clinicData.phone}`}
        >
          <span className="hidden sm:inline-block text-xs font-semibold text-slate-700 group-hover:text-teal-800">
            Call Clinic
          </span>
          <div className="w-10 h-10 rounded-full bg-teal-800 text-white flex items-center justify-center shadow-md group-hover:bg-teal-900 transition-colors">
            <Phone className="w-4 h-4" />
          </div>
        </a>

        {/* WhatsApp Speed Button */}
        <a
          href={`https://wa.me/${clinicData.whatsappRaw}?text=${encodeURIComponent("Hello PHYSIO 360 CARE, I would like to enquire about an appointment.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-white text-slate-800 hover:text-emerald-700 p-2 sm:px-4 sm:py-2.5 rounded-full shadow-xl border border-slate-200 hover:border-emerald-400 transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <span className="hidden sm:inline-block text-xs font-semibold text-slate-700 group-hover:text-emerald-700">
            WhatsApp Us
          </span>
          <div className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md hover:bg-[#20bd5a] transition-colors relative">
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-emerald-300 rounded-full ring-2 ring-white animate-ping" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-emerald-400 rounded-full ring-2 ring-white" />
          </div>
        </a>
      </div>

      {/* Tiny dismiss button on very small screens if user wants to collapse */}
      <button
        onClick={() => setIsDismissed(true)}
        className="p-1 rounded-full text-slate-400 hover:text-slate-600 bg-white/80 border border-slate-200 text-[10px] sm:hidden"
        title="Hide buttons"
        aria-label="Hide floating buttons"
      >
        <X className="w-3 h-3" />
      </button>
    </aside>
  );
}
