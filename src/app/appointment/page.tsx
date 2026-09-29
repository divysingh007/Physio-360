import type { Metadata } from "next";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { AppointmentForm } from "@/components/appointment/AppointmentForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Phone, MessageCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: `Book Appointment | ${clinicData.clinicName} Prayagraj`,
  description: `Schedule a consultation with our specialist doctors at Samriddhi Hospital in Prayagraj. Call emergency: ${clinicData.phone}.`,
};

export default function AppointmentPage() {
  return (
    <main className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-700">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Appointment</span>
        </nav>

        <SectionHeading
          badge="OPD & Consultation"
          title="Schedule Your Hospital Appointment"
          subtitle="Consult top specialist doctors across cardiology, orthopedics, surgery, gynecology, and pediatrics at Samriddhi Hospital."
        />

        <div className="max-w-4xl mx-auto">
          {/* Quick Notice Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-blue-900 leading-snug">
                For urgent emergencies, trauma, or immediate ICU admissions, call our emergency hotline directly: <strong>{clinicData.emergencyNumber}</strong>.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`tel:${clinicData.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-blue-300 text-blue-800 text-xs font-bold hover:bg-blue-100/50 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-rose-500" />
                <span>Call {clinicData.emergencyNumber}</span>
              </a>
              <a
                href={`https://wa.me/${clinicData.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20bd5a] transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <AppointmentForm />

          {/* Medical Disclaimer */}
          <div className="mt-8 text-center text-xs text-slate-400 max-w-2xl mx-auto">
            <p>{clinicData.medicalDisclaimer}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
