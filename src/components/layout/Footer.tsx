import React from "react";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import {
  Activity,
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Navigation,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand & Doctor Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold">
                <Activity className="w-5 h-5 text-teal-200" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block">
                  {clinicData.clinicName}
                </span>
                <span className="text-xs font-medium text-teal-400">
                  {clinicData.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Led by <strong className="text-slate-200">{clinicData.doctorName}</strong>, our clinic provides individualized physiotherapy and progressive rehabilitation in Allahabad, focused on long-term mobility and pain-free living.
            </p>

            {/* Social Icons with inline crisp SVGs */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={clinicData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-teal-700 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={clinicData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-teal-700 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={clinicData.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-teal-700 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors">
                  About Clinic
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-400 transition-colors">
                  Physiotherapy Services
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="hover:text-teal-400 transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-teal-400 transition-colors">
                  Patient Reviews
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-teal-400 transition-colors">
                  Clinic Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Patient Actions */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Actions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-2 hover:text-teal-400 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span>Book Appointment</span>
                </Link>
              </li>
              <li>
                <a
                  href={`tel:${clinicData.phoneRaw}`}
                  className="inline-flex items-center gap-2 hover:text-teal-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>Call: {clinicData.phone}</span>
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
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href={clinicData.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-teal-400 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-teal-400" />
                  <span>Get Directions</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact Summary */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Clinic Location
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{clinicData.fullLocation}</span>
              </div>
              <p className="text-xs text-slate-400 border-t border-slate-800 pt-3">
                {clinicData.operatingHoursNote}
              </p>
              <div className="pt-1">
                <a
                  href={clinicData.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 leading-relaxed max-w-4xl mx-auto text-center">
          <p>
            <strong className="text-slate-300">Medical Disclaimer:</strong> {clinicData.medicalDisclaimer}
          </p>
        </div>

        {/* Copyright & Demo watermark */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© 2026 {clinicData.clinicName}. All rights reserved.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 text-slate-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span>
            <span>Professional Clinic Website Demo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
