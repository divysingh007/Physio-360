import React from "react";
import { clinicData } from "@/data/clinic";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  UserCheck,
  HeartHandshake,
  Target,
  Sparkles,
  CalendarCheck,
  Activity,
} from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Personalized Treatment",
      description:
        "Every patient presents unique biomechanics. We formulate custom therapy programs adapted to your specific symptoms, physical baseline, and personal daily demands.",
      icon: Target,
    },
    {
      title: "One-to-One Attention",
      description:
        "Direct individual supervision with Dr. Sonali Baghel, PT throughout your clinical consultation, ensuring proper technique execution and attentive care.",
      icon: UserCheck,
    },
    {
      title: "Patient-Centered Approach",
      description:
        "We prioritize compassionate listening, continuous patient comfort, and transparent discussions regarding your recovery milestones.",
      icon: HeartHandshake,
    },
    {
      title: "Functional Recovery",
      description:
        "Our rehabilitation is structured not only to reduce acute discomfort, but to help you regain functional strength, endurance, and everyday mobility.",
      icon: Activity,
    },
    {
      title: "Modern Rehabilitation Approach",
      description:
        "Utilizing evidence-informed active movement principles, targeted therapeutic modalities, and progressive exercises for balanced recovery.",
      icon: Sparkles,
    },
    {
      title: "Convenient Appointment Booking",
      description:
        "Flexible scheduling, streamlined online appointment requests, and direct phone/WhatsApp communication for prompt slot confirmation.",
      icon: CalendarCheck,
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Values"
          title={`Why Patients Choose ${clinicData.clinicName}`}
          subtitle="A trusted, patient-first physiotherapy environment in Allahabad focused on clinical excellence, personalized attention, and sustainable recovery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card
                key={reason.title}
                className="group relative overflow-hidden transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-700 text-teal-700 group-hover:text-white flex items-center justify-center shrink-0 border border-teal-100 transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                        {reason.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-300 font-bold">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
