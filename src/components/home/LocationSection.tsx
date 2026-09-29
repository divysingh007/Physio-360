import React from "react";
import { clinicData } from "@/data/clinic";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MapPin,
  Navigation,
  Phone,
  MessageCircle,
  ExternalLink,
  Clock,
  CheckCircle,
  ShieldAlert,
} from "lucide-react";

export function LocationSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Campus & Contact"
          title="Visit Samriddhi Hospital"
          subtitle="Conveniently situated in Prayagraj (Allahabad), Uttar Pradesh with 24/7 emergency driveway, ambulance bay, and multi-level clinical facilities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Hospital Contact Details & Emergency Direct Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            <div className="space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider border border-blue-200">
                  Hospital Campus
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2.5">
                  {clinicData.clinicName}
                </h3>
                <p className="text-sm font-semibold text-blue-700 mt-0.5">
                  {clinicData.tagline}
                </p>
              </div>

              {/* Location Address Block */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Full Address
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    {clinicData.fullLocation}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Emergency triage at ground entrance &bull; Ample patient parking available.
                  </p>
                </div>
              </div>

              {/* Consultation Timings */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Operational Hours
                  </p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    {clinicData.operatingHoursNote}
                  </p>
                </div>
              </div>

              {/* Accessibility features */}
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>24/7 Emergency, ICU, Trauma and Pharmacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct Emergency Helpline: {clinicData.emergencyNumber}</span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <a
                href={clinicData.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full py-3 px-6 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all">
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                </button>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a href={`tel:${clinicData.phoneRaw}`} className="w-full">
                  <button className="w-full py-2.5 px-4 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all">
                    <Phone className="w-4 h-4 text-rose-500" />
                    <span>Call Helpline</span>
                  </button>
                </a>
                <a
                  href={`https://wa.me/${clinicData.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button className="w-full py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Hospital Map Card */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden shadow-sm relative flex flex-col justify-between min-h-[380px] p-6 sm:p-8">
            {/* Map Grid Background Stylization */}
            <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:20px_20px]" />

            {/* Top Map Card Header */}
            <div className="relative z-10 flex items-center justify-between bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-200" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Hospital Campus Location
                  </h4>
                  <p className="text-xs text-slate-500">
                    {clinicData.city}, {clinicData.state}
                  </p>
                </div>
              </div>
              <a
                href={clinicData.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Central Pin Simulation */}
            <div className="relative z-10 my-10 flex flex-col items-center justify-center text-center space-y-3">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 animate-ping absolute inset-0" />
                <div className="relative w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xl border-2 border-white">
                  <MapPin className="w-8 h-8 text-blue-100" />
                </div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl border border-slate-200 shadow-lg">
                <p className="text-sm font-bold text-slate-900">
                  {clinicData.clinicName}
                </p>
                <p className="text-xs text-blue-600 font-semibold">
                  24/7 Multi-Speciality Care &bull; Call: {clinicData.emergencyNumber}
                </p>
              </div>
            </div>

            {/* Bottom Configurable Note */}
            <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-600 text-center sm:text-left">
                Emergency ambulance service available 24/7 across Prayagraj.
              </span>
              <a
                href={clinicData.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 font-bold inline-flex items-center gap-1 shrink-0"
              >
                <span>Navigate via GPS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
