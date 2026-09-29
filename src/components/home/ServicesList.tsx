import React from "react";
import Link from "next/link";
import { servicesData, ServiceItem } from "@/data/services";
import { clinicData } from "@/data/clinic";
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
  ArrowRight,
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

export function ServicesList() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Specialized Departments"
          title="Multispeciality Medical Departments"
          subtitle="Comprehensive, high-precision clinical care backed by advanced infrastructure, dedicated medical doctors, and round-the-clock emergency support."
        />

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service: ServiceItem, idx: number) => {
            const IconComp = iconMap[service.iconName] || Activity;
            return (
              <Card
                key={service.id}
                className="flex flex-col justify-between group hover:border-blue-400 hover:shadow-lg transition-all duration-300 rounded-3xl p-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 border border-blue-100">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-blue-500 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700 block text-[11px] uppercase tracking-wider">
                      Department Highlights:
                    </span>
                    {service.keyBenefits.slice(0, 2).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100">
                  <Link
                    href={`/#appointment?dept=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>Book Department Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-white">
          <div className="text-center sm:text-left space-y-1">
            <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-400/30">
              Immediate Help
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Need immediate medical assistance or emergency admission?
            </h4>
            <p className="text-xs sm:text-sm text-blue-200">
              Our 24/7 trauma and emergency triage team is ready with ambulance support right now.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${clinicData.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold shadow-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: {clinicData.emergencyNumber}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
