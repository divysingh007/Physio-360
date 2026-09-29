"use client";

import React, { useState } from "react";
import { servicesData } from "@/data/services";
import { clinicData } from "@/data/clinic";
import { doctorsData } from "@/data/doctors";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Stethoscope,
} from "lucide-react";

interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  department: string;
  doctor: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export function AppointmentForm() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: "",
    phone: "",
    email: "",
    department: servicesData[0].title,
    doctor: doctorsData[0].name,
    preferredDate: "",
    preferredTime: "Morning (10:00 AM - 1:00 PM)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const timeSlots = [
    "Morning (10:00 AM - 1:00 PM)",
    "Afternoon (2:00 PM - 5:00 PM)",
    "Evening (5:00 PM - 8:00 PM)",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.preferredDate) {
      setErrorMsg("Please fill in your name, contact phone number, and preferred date.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    setTimeout(() => {
      const generatedRef = "SAM-" + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      department: servicesData[0].title,
      doctor: doctorsData[0].name,
      preferredDate: "",
      preferredTime: "Morning (10:00 AM - 1:00 PM)",
      message: "",
    });
    setIsSubmitted(false);
    setReferenceId("");
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl border border-blue-200/80 p-8 sm:p-10 shadow-xl text-center animate-in zoom-in-95 duration-300 max-w-xl mx-auto">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
          <CheckCircle2 className="w-9 h-9 text-emerald-600" />
        </div>

        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-bold tracking-wider uppercase mb-3 border border-blue-200">
          Request Received
        </span>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
          Thank you! Your appointment request is logged.
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Our hospital coordinator will review doctor availability and reach out to you via call or WhatsApp at <strong className="text-slate-900">{formData.phone}</strong> to confirm your exact time slot.
        </p>

        <div className="bg-slate-50 rounded-2xl p-4 text-left border border-slate-200 text-xs space-y-2 mb-6">
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Booking Reference:</span>
            <span className="font-mono font-bold text-blue-700">{referenceId}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Patient:</span>
            <span className="font-medium text-slate-800">{formData.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Department / Doctor:</span>
            <span className="font-medium text-slate-800">{formData.department} ({formData.doctor})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Hospital Helpline:</span>
            <span className="font-bold text-blue-600">{clinicData.phone}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/${clinicData.whatsappRaw}?text=${encodeURIComponent(
              `Hello Samriddhi Hospital, I submitted an appointment request with Ref ID: ${referenceId}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#20bd5a] transition-colors"
          >
            Confirm on WhatsApp
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-2.5 rounded-full border border-slate-300 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 md:p-10"
      noValidate
    >
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Book Hospital Appointment
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Consult specialist doctors at Samriddhi Hospital &bull; Call: {clinicData.emergencyNumber}
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Priority Triage</span>
        </div>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Patient Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 outline-none"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Contact Number <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 9305257103"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 outline-none"
            />
          </div>
        </div>

        {/* Department */}
        <div>
          <label
            htmlFor="department"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Medical Department <span className="text-rose-500">*</span>
          </label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 bg-white outline-none"
          >
            {servicesData.map((svc) => (
              <option key={svc.id} value={svc.title}>
                {svc.title}
              </option>
            ))}
          </select>
        </div>

        {/* Doctor */}
        <div>
          <label
            htmlFor="doctor"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Select Specialist Doctor
          </label>
          <select
            id="doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 bg-white outline-none"
          >
            {doctorsData.map((doc) => (
              <option key={doc.id} value={doc.name}>
                {doc.name} - {doc.role}
              </option>
            ))}
            <option value="Any Available Specialist">Any Available Specialist</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label
            htmlFor="preferredDate"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Preferred Date <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Calendar className="w-4 h-4" />
            </div>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              required
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 outline-none"
            />
          </div>
        </div>

        {/* Time Slot */}
        <div>
          <label
            htmlFor="preferredTime"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Preferred Time Slot
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Clock className="w-4 h-4" />
            </div>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 bg-white outline-none"
            >
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
        >
          Symptoms / Clinical History (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe symptoms, emergency concerns, or past medical reports..."
          className="w-full p-3.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 outline-none resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 active:scale-95 transition-all"
        >
          {isSubmitting ? "Submitting..." : "Confirm Appointment Request"}
        </button>
        <span className="text-xs text-slate-400">
          24/7 Emergency Line: <strong className="text-slate-700">{clinicData.emergencyNumber}</strong>
        </span>
      </div>
    </form>
  );
}
