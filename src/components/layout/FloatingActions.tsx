"use client";

import React, { useState } from "react";
import { clinicData } from "@/data/clinic";
import { Phone, MessageCircle, X, ShieldAlert } from "lucide-react";

export function FloatingActions() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <aside
      aria-label="Quick emergency and contact actions"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto"
    >
      <div className="flex flex-col items-end gap-2.5">
        {/* 24/7 Emergency Call Button */}
        <a
          href={`tel:${clinicData.phoneRaw}`}
          className="group flex items-center gap-2.5 bg-white text-slate-800 hover:text-blue-600 p-2 sm:px-4 sm:py-2.5 rounded-full shadow-xl border border-slate-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label={`Call Samriddhi Hospital emergency helpline at ${clinicData.phone}`}
        >
          <span className="hidden sm:inline-block text-xs font-bold text-slate-800 group-hover:text-blue-600">
            Emergency: {clinicData.phone}
          </span>
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md group-hover:bg-blue-700 transition-colors relative">
            <Phone className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full ring-2 ring-white animate-ping" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full ring-2 ring-white" />
          </div>
        </a>

        {/* WhatsApp Direct Chat Button */}
        <a
          href={`https://wa.me/${clinicData.whatsappRaw}?text=${encodeURIComponent(
            "Hello Samriddhi Hospital, I would like to inquire about OPD consultation / emergency admission."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-white text-slate-800 hover:text-emerald-700 p-2 sm:px-4 sm:py-2.5 rounded-full shadow-xl border border-slate-200 hover:border-emerald-400 transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Chat on WhatsApp with Samriddhi Hospital"
        >
          <span className="hidden sm:inline-block text-xs font-bold text-slate-700 group-hover:text-emerald-700">
            WhatsApp Helpdesk
          </span>
          <div className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md hover:bg-[#20bd5a] transition-colors relative">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
        </a>
      </div>

      {/* Tiny dismiss button on very small screens */}
      <button
        onClick={() => setIsDismissed(true)}
        className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 bg-white/90 border border-slate-200 text-[10px] sm:hidden shadow-sm"
        title="Hide buttons"
        aria-label="Hide floating buttons"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
