export interface DoctorItem {
  id: string;
  name: string;
  role: string;
  department: string;
  qualifications: string;
  experience: string;
  availability: string;
  rating: number;
  reviews: number;
  avatarUrl: string;
  highlight: string;
}

export const doctorsData: DoctorItem[] = [
  {
    id: "dr-aryan-sharma",
    name: "Dr. Aryan Sharma",
    role: "Chief Cardiologist & Senior Consultant",
    department: "Cardiology & Vascular Sciences",
    qualifications: "MBBS, MD (Medicine), DM (Cardiology), FACC",
    experience: "15+ Years Experience",
    availability: "Mon - Sat (10:00 AM - 4:00 PM)",
    rating: 4.9,
    reviews: 142,
    avatarUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
    highlight: "Specialist in Angioplasty, Echocardiography & Preventive Heart Care",
  },
  {
    id: "dr-meera-deshmukh",
    name: "Dr. Meera Deshmukh",
    role: "Senior Consultant Gynecologist",
    department: "Obstetrics & Gynecology",
    qualifications: "MBBS, MS (OBG), DGO, Fellowship in Laparoscopy",
    experience: "14+ Years Experience",
    availability: "Mon - Fri (9:00 AM - 2:00 PM)",
    rating: 4.9,
    reviews: 168,
    avatarUrl: "https://images.unsplash.com/photo-1594824813583-f3d790382d55?auto=format&fit=crop&q=80&w=400",
    highlight: "Specialized in High-Risk Pregnancy, Infertility Care & Laparoscopic Surgery",
  },
  {
    id: "dr-rajesh-singhania",
    name: "Dr. Rajesh Singhania",
    role: "Chief Orthopedic & Joint Surgeon",
    department: "Orthopedics & Joint Replacement",
    qualifications: "MBBS, MS (Orthopedics), MCh (Ortho - UK), FIJR",
    experience: "16+ Years Experience",
    availability: "Mon - Sat (11:00 AM - 5:00 PM)",
    rating: 4.9,
    reviews: 195,
    avatarUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
    highlight: "Knee & Hip Robotic Joint Replacement, Arthroscopy & Complex Trauma",
  },
  {
    id: "dr-priya-kapoor",
    name: "Dr. Priya Kapoor",
    role: "Consultant Pediatrician & Neonatologist",
    department: "Pediatrics & Child Health",
    qualifications: "MBBS, MD (Pediatrics), Fellowship in Neonatology",
    experience: "11+ Years Experience",
    availability: "Mon - Sat (10:00 AM - 6:00 PM)",
    rating: 4.8,
    reviews: 110,
    avatarUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
    highlight: "Expert in Newborn Intensive Care (NICU), Pediatric Vaccinations & Development",
  },
  {
    id: "dr-alok-verma",
    name: "Dr. Alok Verma",
    role: "Head of Critical Care & General Medicine",
    department: "Emergency Medicine & Internal Medicine",
    qualifications: "MBBS, MD (General Medicine), IDCCM (Critical Care)",
    experience: "12+ Years Experience",
    availability: "24/7 On-Call & Emergency Coverage",
    rating: 4.9,
    reviews: 130,
    avatarUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400",
    highlight: "ICU Management, Diabetes & Hypertension Care, Acute Medical Emergencies",
  },
];
