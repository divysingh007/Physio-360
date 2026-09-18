import type { Metadata } from "next";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { Button } from "@/components/ui/Button";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: `Contact & Directions | ${clinicData.clinicName} Allahabad`,
  description: `Contact PHYSIO 360 CARE (Dr. Sonali Baghel, PT) in Allahabad. Call, WhatsApp, get directions or book an appointment.`,
};

export default function ContactPage() {
  const contactCards = [
    {
      title: "Phone Consultation",
      detail: clinicData.phone,
      subtext: "Call directly for appointment inquiries or guidance.",
      icon: Phone,
      action: (
        <a href={`tel:${clinicData.phoneRaw}`}>
          <Button variant="outline" size="sm" className="w-full">
            Call: {clinicData.phone}
          </Button>
        </a>
      ),
    },
    {
      title: "WhatsApp Inquiries",
      detail: clinicData.whatsapp,
      subtext: "Send a message on WhatsApp for quick scheduling questions.",
      icon: MessageCircle,
      action: (
        <a
          href={`https://wa.me/${clinicData.whatsappRaw}?text=${encodeURIComponent("Hello PHYSIO 360 CARE, I would like to make an enquiry.")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="whatsapp" size="sm" className="w-full">
            WhatsApp Message
          </Button>
        </a>
      ),
    },
    {
      title: "Clinic Location",
      detail: clinicData.fullLocation,
      subtext: "Allahabad (Prayagraj), Uttar Pradesh, India.",
      icon: MapPin,
      action: (
        <a
          href={clinicData.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="sm" className="w-full">
            Get Directions
          </Button>
        </a>
      ),
    },
    {
      title: "Opening Hours",
      detail: "Consultation by Appointment",
      subtext: clinicData.operatingHoursNote,
      icon: Clock,
      action: (
        <span className="text-xs font-medium text-teal-800 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200 block text-center">
          Contact for Timings
        </span>
      ),
    },
    {
      title: "Appointments",
      detail: "Prior Booking Recommended",
      subtext: "Schedule your one-to-one consultation slot with Dr. Sonali Baghel, PT.",
      icon: Calendar,
      action: (
        <Link href="/appointment">
          <Button variant="primary" size="sm" className="w-full">
            Book Appointment
          </Button>
        </Link>
      ),
    },
    {
      title: "Email Assistance",
      detail: clinicData.email,
      subtext: "For general queries and documentation.",
      icon: Mail,
      action: (
        <a href={`mailto:${clinicData.email}`}>
          <Button variant="ghost" size="sm" className="w-full border border-slate-200">
            Send Email
          </Button>
        </a>
      ),
    },
  ];

  return (
    <main className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-teal-700">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Contact</span>
        </nav>

        <SectionHeading
          badge="Direct Contact"
          title={`Contact ${clinicData.clinicName}`}
          subtitle="Reach out to Dr. Sonali Baghel, PT and our clinic team for appointments, rehabilitation consultations, and directions in Allahabad."
        />

        {/* 6 Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactCards.map((card) => {
            const IconComp = card.icon;
            return (
              <Card
                key={card.title}
                className="flex flex-col justify-between p-6 bg-white border border-slate-200"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4 border border-teal-100">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm font-semibold text-teal-800 mb-2">
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
