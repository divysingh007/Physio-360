import React from "react";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { Button } from "@/components/ui/Button";
import {
  Star,
  Phone,
  MessageCircle,
  Navigation,
  Calendar,
  MapPin,
  Stethoscope,
} from "lucide-react";

export function BusinessCard() {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl p-5 sm:p-7 md:p-8 backdrop-blur-md">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left: Doctor & Clinic Highlights */}
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold tracking-wide border border-teal-200">
                Clinic Profile
              </span>
              <div className="flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-teal-700" />
                <span>{clinicData.city}, {clinicData.state}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                {clinicData.clinicName}
              </h2>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-teal-800 font-semibold text-sm sm:text-base">
                <Stethoscope className="w-4 h-4 text-teal-700" />
                <span>{clinicData.doctorName}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              {clinicData.doctorRole} &bull; Individualized Physiotherapy &amp; Rehabilitation in Allahabad
            </p>

            {/* Rating summary */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-1.5 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                <span className="text-xs font-bold text-slate-900">
                  {clinicData.rating} / 5
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                ({clinicData.reviewCount} Verified {clinicData.ratingSource})
              </span>
            </div>
          </div>

          {/* Right: 4 Direct Action Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex items-center gap-2.5 sm:gap-3">
            <Link href="/appointment" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                icon={<Calendar className="w-4 h-4" />}
                className="w-full text-xs sm:text-sm py-2.5 px-4"
              >
                Book Online
              </Button>
            </Link>

            <a href={`tel:${clinicData.phoneRaw}`} className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="md"
                icon={<Phone className="w-4 h-4 text-teal-700" />}
                className="w-full text-xs sm:text-sm py-2.5 px-4 text-slate-800"
              >
                Call
              </Button>
            </a>

            <a
              href={`https://wa.me/${clinicData.whatsappRaw}?text=${encodeURIComponent("Hello PHYSIO 360 CARE, I would like to book a physiotherapy consultation.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="whatsapp"
                size="md"
                icon={<MessageCircle className="w-4 h-4" />}
                className="w-full text-xs sm:text-sm py-2.5 px-4"
              >
                WhatsApp
              </Button>
            </a>

            <a
              href={clinicData.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="md"
                icon={<Navigation className="w-4 h-4 text-teal-700" />}
                className="w-full text-xs sm:text-sm py-2.5 px-4"
              >
                Directions
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
