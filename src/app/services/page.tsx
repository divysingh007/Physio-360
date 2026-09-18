import type { Metadata } from "next";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { servicesData, ServiceItem } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ShieldAlert,
  Activity,
  Flame,
  Bone,
  Sparkles,
  Dumbbell,
  HeartPulse,
  CheckCircle2,
  Calendar,
  Check,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ShieldAlert,
  Activity,
  Flame,
  Bone,
  Sparkles,
  Dumbbell,
  HeartPulse,
  CheckCircle2,
};

export const metadata: Metadata = {
  title: `Physiotherapy Services in Allahabad | ${clinicData.clinicName}`,
  description: `Explore personalized physiotherapy services by Dr. Sonali Baghel, PT: Pain Management, Orthopedic Rehab, Sports Injuries, Spine Care, and Exercise Therapy.`,
};

export default function ServicesPage() {
  return (
    <main className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-teal-700">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Services</span>
        </nav>

        <SectionHeading
          badge="Clinical Offerings"
          title="Our Physiotherapy & Rehabilitation Services"
          subtitle="All treatments are conducted with personalized care by Dr. Sonali Baghel, PT, tailored to your diagnosis, recovery pace, and lifestyle goals."
        />

        {/* Full Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {servicesData.map((service: ServiceItem, idx: number) => {
            const IconComp = iconMap[service.iconName] || Activity;
            return (
              <Card
                key={service.id}
                className="flex flex-col justify-between p-6 sm:p-8 hover:border-teal-400/80 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Service 0{idx + 1}
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
                      <span className="font-semibold text-teal-800 uppercase tracking-wider block mb-2">
                        Key Benefits:
                      </span>
                      <ul className="space-y-1.5 text-slate-600">
                        {service.keyBenefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                        Recommended For:
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
                  <Link href={`/appointment?service=${encodeURIComponent(service.title)}`}>
                    <Button
                      variant="primary"
                      size="sm"
                      icon={<Calendar className="w-4 h-4" />}
                    >
                      Book for this Service
                    </Button>
                  </Link>
                  <span className="text-xs text-slate-400">
                    One-on-one session
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-teal-800 to-teal-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Require a Specific Rehabilitation Plan?
            </h3>
            <p className="text-xs sm:text-sm text-teal-100/90 max-w-xl">
              Consult Dr. Sonali Baghel, PT for a tailored assessment to diagnose your musculoskeletal concern and determine the right clinical roadmap.
            </p>
          </div>
          <Link href="/appointment" className="shrink-0">
            <Button variant="outline" size="lg" className="bg-white text-teal-900 font-bold hover:bg-teal-50 border-white">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
