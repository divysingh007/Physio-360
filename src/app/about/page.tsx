import type { Metadata } from "next";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Calendar,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Target,
  UserCheck,
  Phone,
  Activity,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: `About Us | ${clinicData.clinicName} Prayagraj`,
  description: `Learn about Samriddhi Hospital, our multispeciality medical board, state-of-the-art facilities, and 24/7 emergency care in Prayagraj. Call: ${clinicData.phone}.`,
};

export default function AboutPage() {
  return (
    <main className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-700">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">About</span>
        </nav>

        <SectionHeading
          badge="Hospital Excellence"
          title={`About ${clinicData.clinicName}`}
          subtitle="Committed to patient-first care, advanced clinical infrastructure, and 24/7 multispeciality emergency response in Prayagraj."
        />

        {/* Hospital Spotlight Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-xl mb-6 border-4 border-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
                  alt="Chief Medical Director"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold tracking-wider uppercase border border-blue-200 mb-2">
                Medical Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Dr. Aryan Sharma
              </h2>
              <p className="text-sm font-semibold text-blue-700 mt-1">
                Medical Director &bull; DM Cardiology
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
                <Link href="/#appointment">
                  <button className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all">
                    Book Consultation
                  </button>
                </Link>
                <a href={`tel:${clinicData.phoneRaw}`}>
                  <button className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm transition-all">
                    Emergency: {clinicData.emergencyNumber}
                  </button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Advanced Healthcare with Compassionate Clinical Ethics
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At <strong>{clinicData.clinicName}</strong> in Prayagraj, our mission is to ensure every patient receives high quality, timely, and empathetic healthcare. Our hospital brings together senior medical specialists with decades of clinical experience in cardiology, orthopedic surgery, obstetrics, pediatrics, and critical care.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Equipped with modular operation theatres, modern intensive care units (ICU &amp; NICU), 24/7 digital diagnostics, and life-support ambulances, we ensure zero delay when it matters most.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 text-blue-800 font-bold text-sm mb-1">
                    <Award className="w-4 h-4" />
                    <span>Clinical Excellence</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    High-precision treatments complying with international healthcare benchmarks.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 text-blue-800 font-bold text-sm mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Patient Safety First</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Strict sterilization, infection control, and transparent medical billing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hospital Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="space-y-3 rounded-3xl p-6 bg-white border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To deliver accessible, high-precision, and compassionate medical care to every family in Prayagraj and surrounding regions.
            </p>
          </Card>

          <Card className="space-y-3 rounded-3xl p-6 bg-white border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">24/7 Emergency Care</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Equipped with round-the-clock emergency triage, trauma surgeons, and ICU intensivists on standby 365 days a year.
            </p>
          </Card>

          <Card className="space-y-3 rounded-3xl p-6 bg-white border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Modern Technology</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Featuring HD laparoscopic towers, digital pathology analyzers, 4D ultrasound, and computerized patient monitoring.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}
