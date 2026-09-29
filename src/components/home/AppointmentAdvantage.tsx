"use client";

import React, { useState } from "react";
import { clinicData } from "@/data/clinic";
import {
  Calendar,
  Phone,
  Clock,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Stethoscope,
  Activity,
  ArrowRight,
} from "lucide-react";

export function AppointmentAdvantage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "Cardiology & Heart Care",
    date: "",
    timeSlot: "Morning (10:00 AM - 1:00 PM)",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="appointment" className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Pill-Styled Appointment Form Card matching Image 2 */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[2rem] bg-gradient-to-b from-slate-50 to-teal-50/30 p-6 sm:p-8 shadow-xl border border-slate-200/90">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-100/70 px-2.5 py-1 rounded-full">
                    Direct Booking
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                    Appointment
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Appointment Request Received!
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our hospital coordinator will call you back on{" "}
                    <strong className="text-slate-800">{formData.phone}</strong> shortly to confirm your scheduled consultation.
                  </p>
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
                    <p>
                      <strong>Department:</strong> {formData.department}
                    </p>
                    <p>
                      <strong>Hospital Hotline:</strong> {clinicData.phone}
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-blue-600 hover:underline font-semibold"
                  >
                    Book another appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 ml-1">
                      Patient Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-full border border-slate-300 bg-white text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 ml-1">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9305257103"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-full border border-slate-300 bg-white text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                    />
                  </div>

                  {/* Department field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 ml-1">
                      Medical Specialty / Department
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({ ...formData, department: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-full border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                    >
                      <option value="Cardiology & Heart Care">
                        Cardiology &amp; Heart Care
                      </option>
                      <option value="Orthopedics & Joint Replacement">
                        Orthopedics &amp; Joint Replacement
                      </option>
                      <option value="Obstetrics & Gynecology">
                        Obstetrics &amp; Gynecology
                      </option>
                      <option value="Pediatrics & Child Health">
                        Pediatrics &amp; Child Health
                      </option>
                      <option value="General & Laparoscopic Surgery">
                        General &amp; Laparoscopic Surgery
                      </option>
                      <option value="Emergency & ICU Medicine">
                        24/7 Emergency &amp; ICU Medicine
                      </option>
                    </select>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 ml-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-full border border-slate-300 bg-white text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 ml-1">
                        Time Slot
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) =>
                          setFormData({ ...formData, timeSlot: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-full border border-slate-300 bg-white text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                      >
                        <option>Morning (10:00 AM - 1:00 PM)</option>
                        <option>Afternoon (1:00 PM - 4:00 PM)</option>
                        <option>Evening (4:00 PM - 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Pill Button matching green/mint button in Image 2 */}
                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 px-6 rounded-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold text-sm shadow-md shadow-emerald-500/20 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Book Appointment</span>
                  </button>
                </form>
              )}

              {/* Location Snippet at bottom of Form Card matching Image 2 */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="truncate max-w-[200px] sm:max-w-none">
                    {clinicData.addressSummary}
                  </span>
                </div>
                <a
                  href={`tel:${clinicData.phoneRaw}`}
                  className="font-bold text-blue-600 hover:underline shrink-0"
                >
                  Call: {clinicData.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor / Nurse Photo & Hospital Narrative matching Image 2 */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              {/* Photo matching Image 2 (female healthcare practitioner with glasses & pleasant smile) */}
              <div className="w-full sm:w-60 h-64 sm:h-72 rounded-3xl overflow-hidden shrink-0 shadow-lg border border-slate-200 bg-teal-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1594824813583-f3d790382d55?auto=format&fit=crop&q=80&w=600"
                  alt="Senior Medical Specialist at Samriddhi Hospital"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide border border-blue-200">
                  Comprehensive Healthcare
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Round-the-clock priority care tailored to your family
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  At <strong>{clinicData.clinicName}</strong>, we integrate medical expertise with modern technology. Whether it is a routine OPD consultation, emergency trauma resuscitation, or complex laparoscopic surgery, our dedicated team is at your side.
                </p>
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Certified Specialists
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Consultants with 10+ years across cardiology, surgery &amp; pediatrics.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Modern ICU &amp; Diagnostics
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Equipped with advanced monitors, ventilators, and 24/7 digital lab.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    24/7 Emergency &amp; Ambulance
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Zero-delay trauma support ready to respond anytime you call.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Transparent &amp; Ethical Care
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Patient-first ethics, clear treatment plans, and cashless TPA support.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Emergency CTA & Location Badge matching Image 2 */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a href={`tel:${clinicData.phoneRaw}`}>
                <button className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all">
                  <Phone className="w-4 h-4" />
                  <span>Call Emergency: {clinicData.emergencyNumber}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>

              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Samriddhi Hospital Campus &bull; Open 24 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
