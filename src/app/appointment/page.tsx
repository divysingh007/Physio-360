import type { Metadata } from "next";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { AppointmentForm } from "@/components/appointment/AppointmentForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Phone, MessageCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: `Book Appointment | ${clinicData.clinicName} Allahabad`,
  description: `Schedule a personalized physiotherapy appointment with Dr. Sonali Baghel, PT at PHYSIO 360 CARE in Allahabad, Uttar Pradesh.`,
};

export default function AppointmentPage() {
  return (
    <main className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-teal-700">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Appointment</span>
        </nav>

        <SectionHeading
          badge="Reserve A Slot"
          title="Schedule Your Physiotherapy Appointment"
          subtitle="One-to-one consultation and personalized rehabilitation with Dr. Sonali Baghel, PT in Allahabad."
        />

        <div className="max-w-4xl mx-auto">
          {/* Quick Notice Banner */}
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 sm:p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-teal-900 leading-snug">
                Requests are reviewed promptly. Our clinic coordinator will contact you to confirm the exact time.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`tel:${clinicData.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-teal-300 text-teal-800 text-xs font-semibold hover:bg-teal-100/50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/${clinicData.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20bd5a] transition-colors"
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
