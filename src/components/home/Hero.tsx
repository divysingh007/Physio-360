import React from "react";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  Phone,
  Navigation,
  Star,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:py-16 lg:py-24 bg-gradient-to-b from-teal-50/40 via-white to-slate-50">
      {/* Soft ambient background circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtext, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200/80 text-teal-800 text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-teal-700" />
              <span>Trusted Physiotherapy &amp; Rehabilitation Care</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Move Better.{" "}
              <span className="text-[#0F766E]">Feel Stronger.</span>{" "}
              Live Pain-Free.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
              Personalized physiotherapy and rehabilitation care by{" "}
              <strong className="text-slate-800 font-semibold">
                {clinicData.doctorName}
              </strong>
              , focused on helping you recover, regain mobility and return to the activities you love in Allahabad.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link href="/appointment">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Calendar className="w-5 h-5" />}
                  className="w-full sm:w-auto text-base"
                >
                  Book Appointment
                </Button>
              </Link>
              <a href={`tel:${clinicData.phoneRaw}`}>
                <Button
                  variant="outline"
                  size="lg"
                  icon={<Phone className="w-4 h-4 text-teal-700" />}
                  className="w-full sm:w-auto text-base"
                >
                  Call Clinic
                </Button>
              </a>
              <a
                href={clinicData.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-800 hover:text-teal-900 underline-offset-4 hover:underline px-2 py-2"
              >
                <Navigation className="w-4 h-4 text-teal-700" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Trust checkmarks */}
            <div className="pt-4 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Individualized Therapy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Evidence-Informed Care</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Comfortable Clinic</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Graphic with Floating Trust Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main Visual Card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-teal-800 via-teal-900 to-slate-900 p-8 text-white shadow-2xl overflow-hidden border border-teal-700/40">
                {/* Decorative background vectors */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-xl" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between border-b border-teal-700/50 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-teal-700/80 flex items-center justify-center">
                        <HeartHandshake className="w-5 h-5 text-teal-200" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-teal-300 font-semibold">
                          Physiotherapy Center
                        </p>
                        <p className="text-sm font-bold text-white">
                          {clinicData.clinicName}
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-200 text-xs border border-teal-400/30">
                      Allahabad
                    </span>
                  </div>

                  {/* Physiotherapy Graphic Representation */}
                  <div className="py-4 text-center space-y-3">
                    <div className="mx-auto w-24 h-24 rounded-2xl bg-teal-800/80 border border-teal-600/40 flex items-center justify-center shadow-inner">
                      <svg
                        className="w-14 h-14 text-teal-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {/* Biomechanics / human movement rehabilitation icon */}
                        <circle cx="12" cy="5" r="2.5" />
                        <path d="m9 20 3-6 3 6" />
                        <path d="m6 12 6-3 6 3" />
                        <path d="M12 9v5" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      Comprehensive Rehabilitation
                    </h3>
                    <p className="text-xs text-teal-200/90 leading-relaxed max-w-xs mx-auto">
                      Dedicated assessment, guided exercise therapy, and functional mobility recovery tailored to your diagnosis.
                    </p>
                  </div>

                  <div className="bg-teal-950/60 rounded-xl p-3 border border-teal-700/40 flex items-center justify-between text-xs">
                    <span className="text-teal-300 font-medium">Consulting Specialist:</span>
                    <span className="text-white font-semibold">{clinicData.doctorName}</span>
                  </div>
                </div>
              </div>

              {/* Floating Trust Card 1: Google Rating */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200 flex items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-500">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-slate-900 text-sm">
                      {clinicData.rating}
                    </span>
                    <div className="flex text-amber-400 text-xs">
                      {"★★★★★"}
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {clinicData.reviewCount} {clinicData.ratingSource}
                  </p>
                </div>
              </div>

              {/* Floating Trust Card 2: Personalized Care */}
              <div className="absolute -bottom-4 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200 flex items-center gap-3 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-200">
                  <Sparkles className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm">
                    Personalized Care
                  </p>
                  <p className="text-[11px] text-slate-500">
                    One-to-one physiotherapy sessions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
