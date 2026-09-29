export interface GalleryItem {
  id: string;
  title: string;
  category: "Hospital" | "ICU & OT" | "Diagnostics" | "Patient Care";
  description: string;
  badge: string;
  aspectRatio: string;
  icon: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Modern Modular Operation Theatre",
    category: "ICU & OT",
    description: "HEPA-filtered laminar airflow operation theatres equipped for laparoscopic, orthopedic, and general surgical procedures.",
    badge: "Modular OT",
    aspectRatio: "aspect-4/3",
    icon: "Activity",
  },
  {
    id: "gal-2",
    title: "Advanced Intensive Care Unit (ICU)",
    category: "ICU & OT",
    description: "High-dependency multi-bed critical care unit with invasive ventilators, cardiac telemetry, and round-the-clock intensivist coverage.",
    badge: "24/7 ICU",
    aspectRatio: "aspect-4/3",
    icon: "HeartPulse",
  },
  {
    id: "gal-3",
    title: "Specialist OPD Consultation Suites",
    category: "Patient Care",
    description: "Private doctor consultation chambers for cardiology, gynecology, orthopedics, pediatrics, and general medicine.",
    badge: "OPD Chambers",
    aspectRatio: "aspect-4/3",
    icon: "Stethoscope",
  },
  {
    id: "gal-4",
    title: "24/7 Emergency Triage & Trauma Bays",
    category: "Hospital",
    description: "Direct ambulance bay entrance with rapid resuscitation equipment, defibrillators, and immediate clinical evaluation.",
    badge: "Emergency Bay",
    aspectRatio: "aspect-4/3",
    icon: "ShieldAlert",
  },
  {
    id: "gal-5",
    title: "High-Resolution Diagnostic Imaging & Pathology",
    category: "Diagnostics",
    description: "Fully automated biochemistry analyzers, 4D ultrasound Doppler, and low-dose digital radiography.",
    badge: "Diagnostics Lab",
    aspectRatio: "aspect-4/3",
    icon: "Target",
  },
  {
    id: "gal-6",
    title: "Comfortable Patient Recovery Rooms",
    category: "Patient Care",
    description: "Spacious private and semi-private rooms equipped with motorized hospital beds, nurse call systems, and family amenities.",
    badge: "Inpatient Rooms",
    aspectRatio: "aspect-4/3",
    icon: "Users",
  },
];
