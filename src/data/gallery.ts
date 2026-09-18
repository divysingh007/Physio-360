export interface GalleryItem {
  id: string;
  title: string;
  category: "Clinic" | "Treatment" | "Equipment" | "Consultation";
  description: string;
  badge: string;
  aspectRatio: string;
  icon: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Dedicated Consultation Area",
    category: "Consultation",
    description: "Private, quiet space for comprehensive patient history intake, posture checks, and clinical physical evaluation.",
    badge: "Consultation Room",
    aspectRatio: "aspect-4/3",
    icon: "Stethoscope",
  },
  {
    id: "gal-2",
    title: "Therapeutic Treatment Station",
    category: "Treatment",
    description: "Ergonomic treatment plinths equipped for manual therapy, passive mobilization, and targeted soft-tissue techniques.",
    badge: "Treatment Area",
    aspectRatio: "aspect-4/3",
    icon: "Bed",
  },
  {
    id: "gal-3",
    title: "Modern Physiotherapy Equipment",
    category: "Equipment",
    description: "Therapeutic modalities, resistance bands, exercise stability balls, and neuromuscular rehabilitation equipment.",
    badge: "Rehabilitation Tools",
    aspectRatio: "aspect-4/3",
    icon: "Dumbbell",
  },
  {
    id: "gal-4",
    title: "Active Exercise & Gait Studio",
    category: "Treatment",
    description: "Spacious area dedicated to balance training, functional movement retraining, and guided exercise therapy.",
    badge: "Exercise Studio",
    aspectRatio: "aspect-4/3",
    icon: "Activity",
  },
  {
    id: "gal-5",
    title: "Welcoming Reception & Waiting Space",
    category: "Clinic",
    description: "Comfortable, sanitized patient waiting lounge designed for relaxed arrivals and seamless appointment scheduling.",
    badge: "Reception Lounge",
    aspectRatio: "aspect-4/3",
    icon: "Clock",
  },
  {
    id: "gal-6",
    title: "One-on-One Guided Therapy Session",
    category: "Treatment",
    description: "Direct supervised physical therapy where exercises are demonstrated, monitored, and adjusted in real time.",
    badge: "Supervised Therapy",
    aspectRatio: "aspect-4/3",
    icon: "Users",
  },
];
