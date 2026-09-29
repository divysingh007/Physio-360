import React from "react";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import {
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Navigation,
  ExternalLink,
  Plus,
  ShieldAlert,
  Clock,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand & Hospital Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-blue-600 text-white flex items-center justify-center font-bold shadow-md">
                <Plus className="w-6 h-6 stroke-[3] text-white" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block">
                  {clinicData.clinicName}
                </span>
                <span className="text-xs font-semibold text-teal-400">
                  {clinicData.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Samriddhi Hospital is committed to delivering advanced, compassionate, and round-the-clock multispeciality medical care. Our certified doctors, high-tech ICU, and modern emergency department ensure your family is always in safe hands.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3 max-w-sm">
              <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">
                  24/7 Emergency Helpline
                </p>
                <a
                  href={`tel:${clinicData.phoneRaw}`}
                  className="text-base font-extrabold text-rose-400 hover:text-rose-300 transition-colors"
                >
                  {clinicData.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Key Hospital Departments */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#services" className="hover:text-blue-400 transition-colors">
                  24/7 Emergency &amp; Trauma
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-blue-400 transition-colors">
                  Cardiology &amp; Heart Care
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-blue-400 transition-colors">
                  Orthopedics &amp; Joint Surgery
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-blue-400 transition-colors">
                  Obstetrics &amp; Gynecology
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-blue-400 transition-colors">
                  Pediatrics &amp; Neonatology
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-blue-400 transition-colors">
                  General &amp; Laparoscopic Surgery
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-blue-400 transition-colors">
                  ICU &amp; Critical Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Actions & Consultations */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Patient Care
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#appointment"
                  className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>Book Appointment</span>
                </Link>
              </li>
              <li>
                <a
                  href={`tel:${clinicData.phoneRaw}`}
                  className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-rose-400" />
                  <span>Call Emergency: {clinicData.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${clinicData.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Helpdesk</span>
                </a>
              </li>
              <li>
                <Link
                  href="/#doctors"
                  className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <span>Our Specialist Doctors</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#reviews"
                  className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <span>Patient Testimonials</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Campus Location */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Hospital Campus
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{clinicData.fullLocation}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{clinicData.operatingHoursNote}</span>
              </div>
              <div className="pt-2">
                <a
                  href={clinicData.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-semibold"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 leading-relaxed max-w-4xl mx-auto text-center">
          <p>
            <strong className="text-slate-300">Medical Notice:</strong> {clinicData.medicalDisclaimer}
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>&copy; {new Date().getFullYear()} {clinicData.clinicName}. All rights reserved.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-slate-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>24/7 Multi-Speciality Medical Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
