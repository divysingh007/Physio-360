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
} from "lucide-react";

export function LocationSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Find Our Clinic"
          title="Visit PHYSIO 360 CARE"
          subtitle="Conveniently situated in Allahabad (Prayagraj), Uttar Pradesh for specialized physiotherapy and rehabilitation consultations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Clinic Contact Details & Direct Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
            <div className="space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider border border-teal-200">
                  Clinic Location
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2.5">
                  {clinicData.clinicName}
                </h3>
                <p className="text-sm font-semibold text-teal-700 mt-0.5">
                  {clinicData.doctorName} &bull; {clinicData.tagline}
                </p>
              </div>

              {/* Location Address Block */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    City &amp; Region
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    {clinicData.fullLocation}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Exact street address &amp; building directions provided on appointment confirmation.
                  </p>
                </div>
              </div>

              {/* Consultation Timings */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Consultation Hours
                  </p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    {clinicData.operatingHoursNote}
                  </p>
                </div>
              </div>

              {/* Accessibility features */}
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Prior appointment booking recommended</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Clean and sanitized treatment environment</span>
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
                <Button
                  variant="primary"
                  size="md"
                  icon={<Navigation className="w-4 h-4" />}
                  className="w-full justify-center"
                >
                  Get Directions
                </Button>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a href={`tel:${clinicData.phoneRaw}`} className="w-full">
                  <Button
                    variant="outline"
                    size="md"
                    icon={<Phone className="w-4 h-4 text-teal-700" />}
                    className="w-full justify-center text-xs sm:text-sm"
                  >
                    Call Clinic
                  </Button>
                </a>
                <a
                  href={`https://wa.me/${clinicData.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="whatsapp"
                    size="md"
                    icon={<MessageCircle className="w-4 h-4" />}
                    className="w-full justify-center text-xs sm:text-sm"
                  >
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Beautiful Visual Map Card */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden shadow-xs relative flex flex-col justify-between min-h-[380px] p-6 sm:p-8">
            {/* Map Grid Background Stylization */}
            <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#0f766e_1px,transparent_1px)] [background-size:20px_20px]" />

            {/* Top Map Card Header */}
            <div className="relative z-10 flex items-center justify-between bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-800 text-white flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-teal-200" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Clinic Location Map
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
                className="text-xs font-semibold text-teal-800 hover:text-teal-900 inline-flex items-center gap-1 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200/80"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Central Pin Simulation */}
            <div className="relative z-10 my-10 flex flex-col items-center justify-center text-center space-y-3">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 animate-ping absolute inset-0" />
                <div className="relative w-16 h-16 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xl border-2 border-white">
                  <MapPin className="w-8 h-8 text-teal-200" />
                </div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-slate-200 shadow-md">
                <p className="text-sm font-bold text-slate-900">
                  {clinicData.clinicName}
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  {clinicData.doctorName} &bull; {clinicData.city}
                </p>
              </div>
            </div>

            {/* Bottom Configurable Note */}
            <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-600 text-center sm:text-left">
                Exact clinic coordinates can be configured from <code>clinic.ts</code>.
              </span>
              <a
                href={clinicData.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-800 hover:text-teal-900 font-bold inline-flex items-center gap-1 shrink-0"
              >
                <span>Navigate via Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
