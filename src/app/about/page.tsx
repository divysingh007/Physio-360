import type { Metadata } from "next";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Calendar,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Target,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: `About Dr. Sonali Baghel, PT | ${clinicData.clinicName}`,
  description: `Learn about Dr. Sonali Baghel, PT and the clinical philosophy of PHYSIO 360 CARE in Allahabad. Personalized physiotherapy and structured rehabilitation.`,
};

export default function AboutPage() {
  return (
    <main className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-teal-700">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">About</span>
        </nav>

        <SectionHeading
          badge="Our Doctor & Practice"
          title={`About ${clinicData.clinicName}`}
          subtitle="Dedicated to evidence-informed physiotherapy, compassionate one-to-one patient care, and functional recovery."
        />

        {/* Doctor Spotlight Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-tr from-teal-800 to-teal-500 p-1.5 shadow-xl mb-6">
                <div className="w-full h-full rounded-2xl bg-slate-50 flex items-center justify-center text-teal-800">
                  <svg
                    className="w-28 h-28 text-teal-700/80"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <span className="px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold tracking-wider uppercase border border-teal-200 mb-2">
                Consultant Physiotherapist
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {clinicData.doctorName}
              </h2>
              <p className="text-sm font-medium text-teal-700 mt-1">
                {clinicData.doctorRole} &bull; {clinicData.city}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
                <Link href="/appointment">
                  <Button
                    variant="primary"
                    size="md"
                    icon={<Calendar className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    Book Consultation
                  </Button>
                </Link>
                <a href={`tel:${clinicData.phoneRaw}`}>
                  <Button variant="outline" size="md" className="w-full sm:w-auto">
                    Call Clinic
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                A Patient-First Philosophy in Physical Rehabilitation
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At <strong>{clinicData.clinicName}</strong> in Allahabad, Dr. Sonali Baghel, PT approaches each consultation with comprehensive attention to the patient&apos;s physical mechanics, daily habits, and pain timeline.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Rather than offering generalized cookie-cutter routines, treatments are structured around careful clinical assessment, hands-on therapeutic mobilization, and graduated functional exercises designed to build long-term joint resilience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 text-teal-800 font-bold text-sm mb-1">
                    <UserCheck className="w-4 h-4" />
                    <span>Personalized Care</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Individualized physical therapy routines adapted to your unique recovery pace.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 text-teal-800 font-bold text-sm mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Evidence-Informed</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Grounded in modern biomechanical principles and safe rehabilitation milestones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Mission & Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To empower patients across Allahabad to restore joint mobility, overcome musculoskeletal discomfort, and regain physical independence through structured, supportive rehabilitation.
            </p>
          </Card>

          <Card className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Clinical Integrity</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We focus on honest clinical assessments and realistic recovery timeframes, steering clear of unrealistic guarantees or rushed appointments.
            </p>
          </Card>

          <Card className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Holistic Recovery</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Combining therapeutic modalities, ergonomic education, and guided home exercises to prevent pain recurrence and foster sustained health.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}
