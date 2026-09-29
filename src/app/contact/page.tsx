import type { Metadata } from "next";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LocationSection } from "@/components/home/LocationSection";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Calendar,
  Mail,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Contact & Emergency | ${clinicData.clinicName} Prayagraj`,
  description: `Contact Samriddhi Hospital in Prayagraj. 24/7 Emergency Helpline: ${clinicData.phone}. Book appointments, get driving directions, or chat on WhatsApp.`,
};

export default function ContactPage() {
  const contactCards = [
    {
      title: "24/7 Emergency Helpline",
      detail: clinicData.phone,
      subtext: "Immediate critical triage, cardiac emergencies & trauma admission.",
      icon: ShieldAlert,
      action: (
        <a href={`tel:${clinicData.phoneRaw}`}>
          <button className="w-full py-2.5 px-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors">
            Emergency Call: {clinicData.emergencyNumber}
          </button>
        </a>
      ),
    },
    {
      title: "WhatsApp Helpdesk",
      detail: clinicData.whatsapp,
      subtext: "Quick assistance for OPD schedule, reports, and appointment status.",
      icon: MessageCircle,
      action: (
        <a
          href={`https://wa.me/${clinicData.whatsappRaw}?text=${encodeURIComponent("Hello Samriddhi Hospital, I would like to inquire about appointments.")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-colors">
            WhatsApp Message
          </button>
        </a>
      ),
    },
    {
      title: "Hospital Campus",
      detail: clinicData.fullLocation,
      subtext: "Civil Lines / Medical Enclave, Prayagraj, Uttar Pradesh.",
      icon: MapPin,
      action: (
        <a
          href={clinicData.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full py-2.5 px-4 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors">
            Driving Directions
          </button>
        </a>
      ),
    },
    {
      title: "Opening Hours",
      detail: "24 Hours / 7 Days Open",
      subtext: clinicData.operatingHoursNote,
      icon: Clock,
      action: (
        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 block text-center">
          Open 24/7 All Days
        </span>
      ),
    },
    {
      title: "OPD Appointments",
      detail: "Consult Specialist Doctors",
      subtext: "Prior booking ensures minimal waiting time at the clinic.",
      icon: Calendar,
      action: (
        <Link href="/#appointment">
          <button className="w-full py-2.5 px-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors">
            Book OPD Slot
          </button>
        </Link>
      ),
    },
    {
      title: "Email Assistance",
      detail: clinicData.email,
      subtext: "For administrative, insurance TPA, and corporate tie-up queries.",
      icon: Mail,
      action: (
        <a href={`mailto:${clinicData.email}`}>
          <button className="w-full py-2.5 px-4 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors">
            Send Email
          </button>
        </a>
      ),
    },
  ];

  return (
    <main className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-700">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Contact</span>
        </nav>

        <SectionHeading
          badge="24/7 Emergency &amp; OPD"
          title={`Contact ${clinicData.clinicName}`}
          subtitle="Reach our emergency helpline, specialist OPD desk, and administrative offices in Prayagraj."
        />

        {/* 6 Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactCards.map((card) => {
            const IconComp = card.icon;
            return (
              <Card
                key={card.title}
                className="flex flex-col justify-between p-6 bg-white border border-slate-200/90 rounded-3xl shadow-sm"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-700 mb-2">
                    {card.detail}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {card.subtext}
                  </p>
                </div>
                <div>{card.action}</div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Map & Location Section */}
      <LocationSection />
    </main>
  );
}
