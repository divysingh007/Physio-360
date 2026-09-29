import React from "react";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import {
  Calendar,
  Phone,
  ArrowRight,
  Plus,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  Clock,
  UserCheck,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
      {/* Soft atmospheric gradient orbs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-blue-100/50 via-teal-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtext, CTAs matching Image 1 */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Top Accent Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Samriddhi Hospital &bull; 24/7 Multi-Speciality Care</span>
            </div>

            {/* Main Headline matching Image 1 */}
            <div className="space-y-3">
              <div className="w-12 h-1.5 bg-emerald-500/80 rounded-full mb-3" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Your health is <br />
                <span className="text-blue-600">our priority</span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
              Welcome to <strong>{clinicData.clinicName}</strong>. Providing comprehensive medical excellence with compassionate care, leading multi-speciality doctors, advanced modular ICU, and round-the-clock emergency response in Prayagraj.
            </p>

            {/* CTA Buttons matching Image 1 pill design */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link href="/#appointment">
                <button className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all duration-200">
                  <Calendar className="w-4 h-4 text-blue-200" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>

              <a href={`tel:${clinicData.phoneRaw}`}>
                <button className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm sm:text-base shadow-sm hover:border-slate-400 active:scale-95 transition-all duration-200">
                  <Phone className="w-4 h-4 text-rose-500" />
                  <span>Emergency: {clinicData.emergencyNumber}</span>
                </button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                </div>
                <span>Certified Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <HeartPulse className="w-3.5 h-3.5 text-blue-700" />
                </div>
                <span>Modern ICU &amp; OT</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <span>24/7 Rapid Care</span>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Portrait with Mint Backdrop & Grid matching Image 1 */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Background Medical Subtle Grid pattern visible in Image 1 */}
            <div
              className="absolute -top-6 -right-6 w-72 h-72 opacity-25 pointer-events-none -z-10"
              style={{
                backgroundImage: `radial-gradient(#0284c7 1.5px, transparent 1.5px)`,
                backgroundSize: "20px 20px",
              }}
            />

            {/* Pastel Mint/Teal Circular Backdrop Shape matching Image 1 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full bg-gradient-to-tr from-emerald-100/70 via-teal-50 to-blue-50/50 -z-10 border border-emerald-200/50 shadow-inner" />

            {/* Subtle decorative ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border border-dashed border-teal-200/60 pointer-events-none -z-10" />

            {/* Doctor Image Container */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[400px]">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white/80 aspect-[4/5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                  alt="Senior Physician at Samriddhi Hospital"
                  className="w-full h-full object-cover object-top"
                />

                {/* Floating Status Dot visible on top right in Image 1 */}
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-emerald-500/90 text-white flex items-center justify-center shadow-lg border-2 border-white backdrop-blur-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                </div>

                {/* Overlay Badge at Bottom of Doctor Image */}
                <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">
                        Dr. Aryan Sharma
                      </p>
                      <p className="text-[10px] text-teal-700 font-semibold">
                        Chief Medical Consultant
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                    On Duty
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Bottom Showcase Cards matching Image 1 */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Card 1: Meet Chief Doctors / Specialists */}
          <div className="group relative bg-white rounded-3xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-slate-200/90 transition-all duration-300 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300"
                  alt="Doctor at Samriddhi Hospital"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold tracking-wide">
                  Top Medical Faculty
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Meet Our Chief Specialists
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 line-clamp-1">
                  Expert consultants across Cardiology, Orthopedics, Pediatrics &amp; Surgery.
                </p>
              </div>
            </div>

            <Link
              href="/#doctors"
              className="w-10 h-10 rounded-full bg-teal-50 hover:bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 border border-teal-200/80 transition-colors"
              title="View Doctors"
            >
              <Plus className="w-5 h-5" />
            </Link>
          </div>

          {/* Card 2: 24/7 Emergency & ICU Care */}
          <div className="group relative bg-white rounded-3xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-slate-200/90 transition-all duration-300 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-rose-50 to-rose-100 flex items-center justify-center shrink-0 text-rose-600 border border-rose-200/60 shadow-sm">
                <HeartPulse className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold tracking-wide">
                  24 Hours Open
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  24/7 Emergency &amp; Trauma ICU
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 line-clamp-1">
                  Rapid resuscitation bays, ventilators &amp; ambulance hotline: 9305257103
                </p>
              </div>
            </div>

            <a
              href={`tel:${clinicData.phoneRaw}`}
              className="w-10 h-10 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/80 transition-colors"
              title="Call Emergency"
            >
              <Plus className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
