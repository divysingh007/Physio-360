"use client";

import React, { useState } from "react";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { doctorsData, DoctorItem } from "@/data/doctors";
import {
  Phone,
  ShieldCheck,
  Check,
  Star,
  Sparkles,
  ArrowRight,
  HeartPulse,
  UserCheck,
  Clock,
  CheckCircle,
} from "lucide-react";

export function SpecialistsGrid() {
  const [selectedDoctor, setSelectedDoctor] = useState<string>(doctorsData[0].id);

  return (
    <section id="doctors" className="py-16 sm:py-24 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="px-3.5 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold tracking-wide border border-teal-200">
            Medical Faculty &amp; Clinical Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            Leading Specialists &amp; Safe Hands Care
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Consult experienced medical practitioners at Samriddhi Hospital dedicated to clinical excellence and compassionate recovery.
          </p>
        </div>

        {/* 2-Column Split Grid matching Image 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Top Narrative Card + Bottom "Safe Hands" Metric Card */}
          <div className="lg:col-span-6 space-y-6">
            {/* Top Left Card: Narrative & Department Action matching Image 3 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200/90 space-y-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Holistic Patient-First Healthcare
                </h3>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At <strong>{clinicData.clinicName}</strong>, we adhere to the highest international medical protocols, sterility standards, and patient safety guidelines. Our hospital integrates multi-disciplinary specialists who collaborate closely to create personalized, evidence-based treatment plans for every patient.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From advanced robotic joint replacements and 24/7 cardiac monitoring to high-risk obstetric deliveries and neonatal intensive care, we are equipped to support you and your loved ones at every stage of health.
              </p>

              {/* Action Buttons matching Image 3 */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link href="/#services">
                  <button className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-colors">
                    Explore Departments
                  </button>
                </Link>

                <a href={`tel:${clinicData.phoneRaw}`}>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/20 transition-all">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call: {clinicData.emergencyNumber}</span>
                  </button>
                </a>
              </div>
            </div>

            {/* Bottom Left Card: "Patients are in Safe Hands" matching Image 3 */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-100/70 via-indigo-50/50 to-teal-50/50 p-6 sm:p-8 border border-blue-200/80 shadow-md space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-blue-800 tracking-wider uppercase">
                    Trusted Benchmark
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                    Patients are in Safe Hands
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-sm">
                  <HeartPulse className="w-5 h-5" />
                </div>
              </div>

              {/* Badge Metrics matching Image 3 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="px-3 py-2 rounded-2xl bg-emerald-500 text-white text-center shadow-sm">
                  <p className="text-base sm:text-lg font-black leading-none">15K+</p>
                  <p className="text-[10px] font-semibold mt-1 opacity-90">Happy Patients</p>
                </div>

                <div className="px-3 py-2 rounded-2xl bg-blue-600 text-white text-center shadow-sm">
                  <p className="text-base sm:text-lg font-black leading-none">99.4%</p>
                  <p className="text-[10px] font-semibold mt-1 opacity-90">Recovery Rate</p>
                </div>

                <div className="px-3 py-2 rounded-2xl bg-amber-500 text-white text-center shadow-sm">
                  <p className="text-base sm:text-lg font-black leading-none">35+</p>
                  <p className="text-[10px] font-semibold mt-1 opacity-90">Doctors</p>
                </div>

                <div className="px-3 py-2 rounded-2xl bg-slate-900 text-white text-center shadow-sm">
                  <p className="text-base sm:text-lg font-black leading-none">24/7</p>
                  <p className="text-[10px] font-semibold mt-1 opacity-90">Trauma Unit</p>
                </div>
              </div>

              {/* Two Info Blocks at Bottom matching Image 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-blue-200/60 shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-semibold uppercase">Emergency Helpdesk</p>
                    <a
                      href={`tel:${clinicData.phoneRaw}`}
                      className="text-sm font-extrabold text-blue-700 hover:underline"
                    >
                      {clinicData.phone}
                    </a>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-blue-200/60 shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-semibold uppercase">Ambulance Service</p>
                    <p className="text-sm font-extrabold text-emerald-700">24 Hours Standby</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stack of Specialist Doctor Cards matching Image 3 */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="flex items-center justify-between pb-1 px-1">
              <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                Consulting Specialists
              </h4>
              <span className="text-xs text-blue-600 font-semibold">
                Click to select doctor
              </span>
            </div>

            {doctorsData.map((doctor: DoctorItem) => {
              const isSelected = selectedDoctor === doctor.id;
              return (
                <div
                  key={doctor.id}
                  onClick={() => setSelectedDoctor(doctor.id)}
                  className={`group relative rounded-2xl p-4 sm:p-5 transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 border ${
                    isSelected
                      ? "bg-teal-50/80 border-teal-300 shadow-md ring-2 ring-teal-500/20"
                      : "bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    {/* Doctor Avatar Thumbnail */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={doctor.avatarUrl}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {doctor.name}
                        </h4>
                        <div className="hidden sm:flex items-center gap-1 text-[11px] text-amber-600 font-semibold">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                          <span>{doctor.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs font-semibold text-teal-700">
                        {doctor.department}
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        {doctor.qualifications} &bull; {doctor.experience}
                      </p>
                      <p className="text-[11px] text-slate-400 hidden sm:block">
                        Timing: {doctor.availability}
                      </p>
                    </div>
                  </div>

                  {/* Radio / Selection Circle matching Image 3 right-hand circle */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 transition-all ${
                      isSelected
                        ? "bg-teal-600 border-teal-600 text-white shadow-sm"
                        : "border-slate-300 bg-white group-hover:border-teal-400"
                    }`}
                  >
                    {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                </div>
              );
            })}

            {/* Book with Selected Doctor CTA */}
            <div className="pt-3">
              <Link href="/#appointment">
                <button className="w-full py-3.5 px-6 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2">
                  <UserCheck className="w-4 h-4" />
                  <span>
                    Book Consultation With Selected Doctor &rarr;
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
