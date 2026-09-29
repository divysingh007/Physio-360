import type { Metadata } from "next";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { servicesData, ServiceItem } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ShieldAlert,
  Activity,
  Bone,
  Sparkles,
  HeartPulse,
  HeartHandshake,
  ShieldCheck,
  Target,
  Calendar,
  Check,
  Phone,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ShieldAlert,
  Activity,
  Bone,
  Sparkles,
  HeartPulse,
  HeartHandshake,
  ShieldCheck,
  Target,
};

export const metadata: Metadata = {
  title: `Specialised Medical Departments | ${clinicData.clinicName} Prayagraj`,
  description: `Explore multispeciality healthcare services at Samriddhi Hospital: 24/7 Emergency, Cardiology, Orthopedics, Maternity, Pediatrics, Surgery, ICU & Diagnostics. Call: ${clinicData.phone}.`,
};

export default function ServicesPage() {
  return (
    <main className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-700">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Departments</span>
        </nav>

        <SectionHeading
          badge="Multispeciality Offerings"
          title="Clinical Specialties &amp; Services"
          subtitle="All medical departments are headed by experienced senior consultants and backed by 24/7 diagnostic labs, ICU, and emergency support."
        />

        {/* Full Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {servicesData.map((service: ServiceItem, idx: number) => {
            const IconComp = iconMap[service.iconName] || Activity;
            return (
              <Card
                key={service.id}
                className="flex flex-col justify-between p-6 sm:p-8 bg-white hover:border-blue-300 hover:shadow-lg transition-all rounded-3xl border border-slate-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Dept 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 mb-6 text-xs">
                    <div>
                      <span className="font-semibold text-blue-800 uppercase tracking-wider block mb-2">
                        Key Features:
                      </span>
                      <ul className="space-y-1.5 text-slate-600">
                        {service.keyBenefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                        Conditions Treated:
                      </span>
                      <ul className="space-y-1.5 text-slate-500">
                        {service.recommendedFor.map((rec, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link href={`/#appointment?service=${encodeURIComponent(service.title)}`}>
                    <button className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Consultation</span>
                    </button>
                  </Link>
                  <span className="text-xs text-slate-400">
                    24/7 Helpline: {clinicData.emergencyNumber}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Require Emergency Medical Evaluation?
            </h3>
            <p className="text-xs sm:text-sm text-blue-200 max-w-xl">
              Our 24/7 trauma and emergency care team is ready on standby. Dial our direct hospital emergency hotline or visit our campus in Civil Lines, Prayagraj.
            </p>
          </div>
          <a href={`tel:${clinicData.phoneRaw}`} className="shrink-0">
            <button className="px-6 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-lg flex items-center gap-2 transition-all">
              <Phone className="w-4 h-4" />
              <span>Emergency: {clinicData.emergencyNumber}</span>
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
