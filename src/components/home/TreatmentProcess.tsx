import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ClipboardCheck,
  FileSpreadsheet,
  Activity,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export function TreatmentProcess() {
  const steps = [
    {
      stepNumber: "01",
      title: "Assessment",
      subtitle: "Thorough Clinical Evaluation",
      description:
        "Detailed examination of pain history, joint range of motion, functional postures, and biomechanical stressors by Dr. Sonali Baghel, PT.",
      icon: ClipboardCheck,
      tag: "Initial Consultation",
    },
    {
      stepNumber: "02",
      title: "Personalized Treatment Plan",
      subtitle: "Tailored Rehabilitation Strategy",
      description:
        "Formulating specific therapeutic goals matching your condition, combining targeted manual mobilization with safe corrective exercise progressions.",
      icon: FileSpreadsheet,
      tag: "Custom Roadmap",
    },
    {
      stepNumber: "03",
      title: "Guided Therapy & Exercise",
      subtitle: "Supervised Clinical Sessions",
      description:
        "Hands-on physiotherapy techniques paired with supervised corrective exercises to rebuild muscle strength, joint stability, and movement safety.",
      icon: Activity,
      tag: "One-to-One Care",
    },
    {
      stepNumber: "04",
      title: "Progress & Recovery",
      subtitle: "Sustained Long-Term Mobility",
      description:
        "Continuous evaluation of recovery milestones, posture education, and home maintenance routines to sustain your pain-free active lifestyle.",
      icon: CheckCircle2,
      tag: "Lasting Results",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-teal-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How We Work"
          title="Our 4-Step Treatment Process"
          subtitle="A clear, structured clinical progression guiding you from accurate diagnosis to functional rehabilitation and confident daily living."
        />

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.stepNumber}
                className="relative bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-teal-400 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step connector on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-teal-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black font-mono text-teal-800 tracking-tight">
                      {item.stepNumber}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold uppercase tracking-wider mb-2">
                    {item.tag}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-teal-700 mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>Step {index + 1} of 4</span>
                  <span className="w-2 h-2 rounded-full bg-teal-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
