export interface ClinicConfig {
  clinicName: string;
  tagline: string;
  doctorName: string;
  doctorRole: string;
  designation: string;
  city: string;
  state: string;
  country: string;
  fullLocation: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  rating: number;
  reviewCount: number;
  ratingSource: string;
  addressSummary: string;
  latitude: number;
  longitude: number;
  directionsUrl: string;
  mapsSearchUrl: string;
  operatingHoursNote: string;
  medicalDisclaimer: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
}

export const clinicData: ClinicConfig = {
  clinicName: "PHYSIO 360 CARE",
  tagline: "Physiotherapy & Rehabilitation",
  doctorName: "Dr. Sonali Baghel, PT",
  doctorRole: "Physiotherapist",
  designation: "Consultant Physiotherapist",
  city: "Allahabad (Prayagraj)",
  state: "Uttar Pradesh",
  country: "India",
  fullLocation: "Allahabad, Uttar Pradesh, India",
  phone: "+91 XXXXX XXXXX",
  phoneRaw: "+910000000000",
  whatsapp: "+91 XXXXX XXXXX",
  whatsappRaw: "910000000000",
  email: "contact@physio360care.com",
  rating: 4.9,
  reviewCount: 19,
  ratingSource: "Google Reviews",
  addressSummary: "Allahabad, Uttar Pradesh, India",
  latitude: 25.4358,
  longitude: 81.8463,
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Physiotherapy+Clinic+Allahabad+Uttar+Pradesh",
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Physiotherapy+Clinic+Allahabad+Uttar+Pradesh",
  operatingHoursNote: "Please contact the clinic for current consultation timings and scheduled appointment hours.",
  medicalDisclaimer:
    "Information on this website is for general informational and educational purposes only and does not replace professional medical advice, clinical diagnosis, or individualized treatment. Always consult Dr. Sonali Baghel, PT or a qualified healthcare specialist for evaluation.",
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};
