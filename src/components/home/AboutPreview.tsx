import React from "react";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  UserCheck,
  Target,
  HeartPulse,
  Activity,
  CheckCircle,
  Calendar,
  Award,
} from "lucide-react";

export function AboutPreview() {
  const clinicalPillars = [
    {
      title: "Patient-Focused Care",
      desc: "Every therapy session is conducted with individualized attention, prioritizing your comfort, feedback, and personal recovery goals.",
      icon: UserCheck,
    },
    {
      title: "Personalized Treatment Plans",
      desc: "No generalized routines. Dr. Sonali designs systematic exercises tailored specifically to your movement assessment.",
      icon: Target,
    },
    {
      title: "Evidence-Informed Physiotherapy",
      desc: "Clinical techniques grounded in proven biomechanical principles and modern physical rehabilitation protocols.",
      icon: Activity,
    },
    {
      title: "Functional Recovery & Mobility",
      desc: "Restoring day-to-day functional independence, improving joint range, and preventing future musculoskeletal discomfort.",
      icon: HeartPulse,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Clinic"
          title={`About ${clinicData.clinicName}`}
          subtitle={`${clinicData.clinicName} is dedicated to providing personalized physiotherapy and rehabilitation services designed around each patient's individual needs.`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Doctor Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-teal-50 to-slate-100 p-6 sm:p-8 border border-teal-100 shadow-md">
              {/* Doctor Avatar / Photo Placeholder */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-teal-700 to-teal-500 p-1 shadow-lg">
                    <div className="w-full h-full rounded-xl bg-white flex flex-col items-center justify-center text-teal-800">
                      {/* Stylized Doctor portrait silhouette placeholder */}
                      <svg
                        className="w-20 h-20 text-teal-700/80"
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
                  <div className="absolute -bottom-2.5 -right-1 bg-white border border-teal-200 text-teal-800 p-1.5 rounded-lg shadow-sm">
                    <Award className="w-4 h-4 text-teal-700" />
                  </div>
                </div>

                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-semibold tracking-wide mb-2">
                  Clinical Lead
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {clinicData.doctorName}
                </h3>
                <p className="text-sm font-medium text-teal-700 mb-4">
                  {clinicData.doctorRole} &bull; {clinicData.city}
                </p>

                {/* Professional Bio */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-center mb-6">
                  Dr. Sonali Baghel, PT is a dedicated physiotherapist focusing on patient-centered rehabilitation, orthopedic recovery, and functional exercise therapy. She believes in listening closely to patients, identifying the root causes of pain, and guiding each individual through a structured, reassuring recovery journey.
                </p>

                {/* Expertise Highlights */}
                <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 text-left text-xs space-y-2 mb-6 shadow-2xs">
                  <span className="font-semibold text-slate-800 block text-xs uppercase tracking-wider text-teal-800">
                    Areas of Clinical Focus:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>Pain Alleviation</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>Post-Injury Care</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>Mobility Training</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>Joint Health</span>
                    </div>
                  </div>
                </div>

                {/* Book Consultation Button */}
                <Link href="/appointment" className="w-full">
                  <Button
                    variant="primary"
                    size="md"
                    icon={<Calendar className="w-4 h-4" />}
                    className="w-full justify-center"
                  >
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Clinic Philosophy & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Restoring Movement and Confidence Through Thoughtful Physiotherapy
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At <strong className="text-slate-800">{clinicData.clinicName}</strong>, physical therapy is not just about temporary symptom relief—it is about restoring comfortable everyday movement, retraining proper neuromuscular patterns, and empowering you with sustainable habits.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you are experiencing persistent neck stiffness from long work hours, recovering from an accidental sprain, or requiring dedicated post-operative physical rehabilitation, our clinic emphasizes clear communication, progressive exercise, and gentle guidance at every step.
              </p>
            </div>

            {/* 4 Clinical Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {clinicalPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <Card key={pillar.title} padded={false} className="p-5">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-200/60">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
