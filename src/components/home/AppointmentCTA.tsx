import React from "react";
import { AppointmentForm } from "@/components/appointment/AppointmentForm";
import { clinicData } from "@/data/clinic";
import {
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  UserCheck,
  CalendarCheck2,
} from "lucide-react";

export function AppointmentCTA() {
  return (
    <section
      id="appointment"
      className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Why Book & Quick Contact Options */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider border border-teal-200">
                Reserve Your Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Begin Your Path to Comfortable Movement
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                Take the first step toward pain relief and improved functional mobility. Fill out the appointment request form, and our clinic team will reach out promptly to confirm your consultation time with Dr. Sonali Baghel, PT.
              </p>
            </div>

            {/* Key Advantages Checklist */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Dedicated One-on-One Evaluation
                  </h4>
                  <p className="text-xs text-slate-500">
                    Undivided personal attention and clinical physical assessment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <CalendarCheck2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Flexible Slot Scheduling
                  </h4>
                  <p className="text-xs text-slate-500">
                    Morning, afternoon, and evening slots designed to fit your day.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Hygienic &amp; Private Setting
                  </h4>
                  <p className="text-xs text-slate-500">
                    Sanitized clinical equipment and peaceful therapy environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Quick Helpline Card */}
            <div className="p-5 rounded-2xl bg-teal-900 text-white shadow-md space-y-4">
              <div className="flex items-center gap-2 text-teal-300 text-xs font-semibold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Prefer to schedule directly?</span>
              </div>
              <p className="text-xs text-teal-100/90 leading-relaxed">
                You can also call our reception desk or message directly on WhatsApp for immediate scheduling inquiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <a
                  href={`tel:${clinicData.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-teal-700 hover:bg-teal-600 text-white text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: {clinicData.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${clinicData.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form Component */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
