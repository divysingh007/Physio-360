"use client";

import React, { useState } from "react";
import { servicesData } from "@/data/services";
import { clinicData } from "@/data/clinic";
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
} from "lucide-react";

interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  treatmentConcern: string;
  message: string;
}

export function AppointmentForm() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "Morning (10:00 AM - 1:00 PM)",
    treatmentConcern: servicesData[0].title,
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

    // Basic validation
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.preferredDate) {
      setErrorMsg("Please fill in your name, contact phone number, and preferred date.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    // Simulate mock client-side booking submission
    setTimeout(() => {
      const generatedRef = "PHY-" + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 650);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      preferredDate: "",
      preferredTime: "Morning (10:00 AM - 1:00 PM)",
      treatmentConcern: servicesData[0].title,
      message: "",
    });
    setIsSubmitted(false);
    setReferenceId("");
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-teal-200/80 p-8 sm:p-10 shadow-lg text-center animate-in zoom-in-95 duration-300 max-w-xl mx-auto">
        <div className="w-16 h-16 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto mb-5 shadow-xs">
          <CheckCircle2 className="w-9 h-9 text-teal-700" />
        </div>

        <span className="inline-block px-3 py-1 bg-teal-50 text-teal-800 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border border-teal-200">
          Booking Request Received
        </span>

        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          Thank you! Your appointment request has been received.
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Our clinic coordinator will review Dr. Sonali Baghel&apos;s schedule and reach out to you via call or WhatsApp at <strong className="text-slate-800">{formData.phone}</strong> to confirm your exact appointment slot.
        </p>

        <div className="bg-slate-50 rounded-xl p-4 text-left border border-slate-200 text-xs space-y-2 mb-6">
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Reference ID:</span>
            <span className="font-mono font-bold text-teal-700">{referenceId}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Patient Name:</span>
            <span className="font-medium text-slate-800">{formData.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Requested Date & Slot:</span>
            <span className="font-medium text-slate-800">{formData.preferredDate} ({formData.preferredTime.split(" ")[0]})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Concern / Service:</span>
            <span className="font-medium text-slate-800">{formData.treatmentConcern}</span>
          </div>
        </div>

        <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200/80 text-amber-900 text-xs text-left mb-6">
          <p className="font-medium mb-1">Appointment Confirmation Notice:</p>
          <p className="text-amber-800">
            Appointment requests are subject to clinic confirmation. For urgent evaluations or same-day inquiries, please contact us directly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/${clinicData.whatsappRaw}?text=${encodeURIComponent(`Hi, I submitted an appointment request with Ref ID: ${referenceId}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-medium text-sm hover:bg-[#20bd5a] transition-colors"
          >
            Notify via WhatsApp
          </a>
          <Button variant="outline" size="md" onClick={handleReset}>
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 md:p-10"
      noValidate
    >
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Book Your Physiotherapy Appointment
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Personalized one-to-one consultation with Dr. Sonali Baghel, PT
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200">
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span>Quick Request</span>
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
            Full Name <span className="text-rose-500">*</span>
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
              placeholder="e.g. Anjali Sharma"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 text-sm text-slate-900 transition-all outline-none"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Phone Number <span className="text-rose-500">*</span>
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
              placeholder="e.g. +91 98765 43210"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 text-sm text-slate-900 transition-all outline-none"
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Email Address (Optional)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. patient@example.com"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 text-sm text-slate-900 transition-all outline-none"
            />
          </div>
        </div>

        {/* Treatment / Concern */}
        <div>
          <label
            htmlFor="treatmentConcern"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Treatment / Concern <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <select
              id="treatmentConcern"
              name="treatmentConcern"
              value={formData.treatmentConcern}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 text-sm text-slate-900 bg-white transition-all outline-none"
            >
              {servicesData.map((svc) => (
                <option key={svc.id} value={svc.title}>
                  {svc.title}
                </option>
              ))}
              <option value="General Consultation & Assessment">
                General Consultation & Assessment
              </option>
              <option value="Other Condition">Other Condition / Inquiry</option>
            </select>
          </div>
        </div>

        {/* Preferred Date */}
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
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 text-sm text-slate-900 transition-all outline-none"
            />
          </div>
        </div>

        {/* Preferred Time Slot */}
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
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 text-sm text-slate-900 bg-white transition-all outline-none"
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

      {/* Message / Symptoms Notes */}
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
        >
          Symptoms / Notes (Optional)
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3.5 text-slate-400 pointer-events-none">
            <FileText className="w-4 h-4" />
          </div>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Briefly describe your pain, duration, or any specific mobility limitations..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 text-sm text-slate-900 transition-all outline-none resize-none"
          />
        </div>
      </div>

      {/* Disclaimer */}
      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 mb-6 text-xs text-slate-500 leading-relaxed">
        <p>
          <strong className="text-slate-700">Notice:</strong> Appointment requests are subject to clinic confirmation. Information on this website is for general informational purposes and does not replace professional medical advice.
        </p>
      </div>

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8"
        >
          {isSubmitting ? "Submitting Request..." : "Request Appointment"}
        </Button>
        <span className="text-xs text-slate-400 text-center sm:text-right">
          No advance payment required.
        </span>
      </div>
    </form>
  );
}
