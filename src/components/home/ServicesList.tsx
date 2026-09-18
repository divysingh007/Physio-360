import React from "react";
import Link from "next/link";
import { servicesData, ServiceItem } from "@/data/services";
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
  ArrowRight,
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

export function ServicesList() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Specialized Care"
          title="Our Physiotherapy Services"
          subtitle="Comprehensive, evidence-informed physical therapy treatments designed to reduce pain, rebuild functional strength, and restore natural movement."
        />

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service: ServiceItem, idx: number) => {
            const IconComp = iconMap[service.iconName] || Activity;
            return (
              <Card
                key={service.id}
                className="flex flex-col justify-between group hover:border-teal-400/80 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-700 text-teal-700 group-hover:text-white flex items-center justify-center transition-colors duration-300 border border-teal-100/80">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-teal-600 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700 block text-[11px] uppercase tracking-wider">
                      Key Focus:
                    </span>
                    {service.keyBenefits.slice(0, 2).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100">
                  <Link
                    href={`/appointment?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 group-hover:text-teal-900 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Request Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Not sure which physiotherapy treatment fits your condition?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Schedule an initial clinical assessment with Dr. Sonali Baghel, PT for a thorough evaluation.
            </p>
          </div>
          <Link href="/appointment" className="shrink-0">
            <span className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-teal-800 text-white text-sm font-semibold hover:bg-teal-900 transition-colors shadow-xs">
              Book Assessment
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
