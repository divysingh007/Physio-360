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
  emergencyNumber: string;
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
  clinicName: "Samriddhi Hospital",
  tagline: "Multispeciality Hospital & 24/7 Emergency Care",
  doctorName: "Dr. Aryan Sharma & Senior Consultants",
  doctorRole: "Chief Medical Director & Specialists",
  designation: "Multispeciality Medical Board",
  city: "Prayagraj",
  state: "Uttar Pradesh",
  country: "India",
  fullLocation: "Samriddhi Hospital, Medical Enclave, Civil Lines, Prayagraj, UP 211001",
  phone: "+91 93052 57103",
  phoneRaw: "+919305257103",
  whatsapp: "+91 93052 57103",
  whatsappRaw: "919305257103",
  email: "care@samriddhihospital.com",
  emergencyNumber: "9305257103",
  rating: 4.9,
  reviewCount: 380,
  ratingSource: "Google Reviews",
  addressSummary: "Civil Lines, Prayagraj, Uttar Pradesh",
  latitude: 25.4358,
  longitude: 81.8463,
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Samriddhi+Hospital+Civil+Lines+Prayagraj",
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Samriddhi+Hospital+Civil+Lines+Prayagraj",
  operatingHoursNote: "24/7 Emergency, Trauma, ICU & Pharmacy. OPD Consultations: Mon - Sat: 9:00 AM - 8:00 PM.",
  medicalDisclaimer:
    "Information on this website is for general informational and medical awareness purposes only and does not replace professional clinical evaluation or emergency medical services. In critical emergencies, please dial our 24/7 emergency helpline 9305257103 or visit our emergency department immediately.",
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};
