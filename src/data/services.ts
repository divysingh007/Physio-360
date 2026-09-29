export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  keyBenefits: string[];
  recommendedFor: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "emergency-trauma",
    title: "24/7 Emergency & Trauma Care",
    shortDescription: "Immediate critical response with advanced life-support ambulances, trauma team, and emergency doctors.",
    fullDescription:
      "Round-the-clock emergency medical services equipped with state-of-the-art triage, rapid resuscitation bays, ventilator support, and a dedicated team of trauma surgeons ready 24 hours a day.",
    iconName: "ShieldAlert",
    keyBenefits: [
      "Zero-delay emergency triage response",
      "Advanced ACLS/BLS emergency ambulance service",
      "Immediate trauma surgical and critical care team",
      "Direct line helpline: 9305257103",
    ],
    recommendedFor: ["Accident & polytrauma", "Acute cardiac chest pain", "Severe breathlessness", "Stroke & emergency conditions"],
  },
  {
    id: "cardiology",
    title: "Cardiology & Heart Care",
    shortDescription: "Comprehensive diagnostic and therapeutic cardiac care for heart disease and hypertension.",
    fullDescription:
      "Led by senior cardiologists, our cardiology department provides non-invasive cardiac evaluation, ECG, 2D Echo, TMT, Holter monitoring, preventive heart checkups, and post-cardiac rehabilitation.",
    iconName: "HeartPulse",
    keyBenefits: [
      "Digital ECG, 2D Color Doppler Echocardiography",
      "Specialized preventive cardiology screening",
      "Hypertension and lipid disorder management",
      "Post-operative cardiac rehabilitation guidance",
    ],
    recommendedFor: ["Chest discomfort", "Hypertension", "Palpitations & arrhythmias", "Coronary artery disease monitoring"],
  },
  {
    id: "orthopedics-joint",
    title: "Orthopedics & Joint Replacement",
    shortDescription: "Advanced bone and joint surgeries, robotic joint replacement, fracture care, and rehabilitation.",
    fullDescription:
      "Modern orthopedic wing delivering minimally invasive arthroscopic surgeries, total knee and hip replacements, complex trauma fixation, and sports medicine supported by complete physiotherapy units.",
    iconName: "Bone",
    keyBenefits: [
      "High-precision joint replacement surgeries",
      "Minimally invasive keyhole arthroscopy",
      "Rapid-recovery post-operative protocols",
      "In-house physical therapy & gait training",
    ],
    recommendedFor: ["Severe knee/hip osteoarthritis", "Ligament & meniscus tears", "Complex fractures", "Chronic back & joint pain"],
  },
  {
    id: "obstetrics-gynecology",
    title: "Obstetrics & Gynecology",
    shortDescription: "Compassionate women's health services, prenatal care, safe deliveries, and laparoscopic surgeries.",
    fullDescription:
      "Holistic maternity and gynecological care including painless labor management, high-risk pregnancy monitoring, adolescent healthcare, menopausal wellness, and advanced gynecological laparoscopy.",
    iconName: "HeartHandshake",
    keyBenefits: [
      "24/7 dedicated labor delivery suites",
      "High-risk obstetrics and fetal monitoring",
      "Minimally invasive laparoscopic gynecological surgery",
      "Postnatal care and lactation support",
    ],
    recommendedFor: ["Pregnancy care & childbirth", "Infertility consultation", "PCOD / menstrual irregularities", "Uterine fibroids"],
  },
  {
    id: "pediatrics-nicu",
    title: "Pediatrics & Neonatal ICU",
    shortDescription: "Specialized medical care for infants, children, and adolescents, backed by level-3 NICU.",
    fullDescription:
      "Our pediatric department provides warm, gentle clinical care from birth through adolescence, including neonatal intensive care, routine vaccinations, nutritional growth tracking, and pediatric emergency care.",
    iconName: "Sparkles",
    keyBenefits: [
      "Modern Level-3 Neonatal Intensive Care Unit (NICU)",
      "Comprehensive pediatric immunization programs",
      "Child growth, nutrition, and milestone assessment",
      "Warm and child-friendly clinical atmosphere",
    ],
    recommendedFor: ["Newborn critical care & jaundice", "Childhood asthma & allergies", "Vaccination schedules", "Fever & infectious diseases"],
  },
  {
    id: "general-laparoscopic-surgery",
    title: "General & Laparoscopic Surgery",
    shortDescription: "Minimally invasive keyhole surgeries for faster healing, minimal scarring, and quick discharge.",
    fullDescription:
      "Equipped with modern modular operation theatres and HD laparoscopic imaging towers, performing laparoscopic cholecystectomy, hernia repairs, appendectomy, and gastrointestinal surgical interventions.",
    iconName: "Activity",
    keyBenefits: [
      "Minimal postoperative pain and minimal scarring",
      "Quick hospital discharge within 24 to 48 hours",
      "Laparoscopic gallbladder, hernia, and appendix surgery",
      "Strict sterility and zero-infection protocols",
    ],
    recommendedFor: ["Gallstones (Cholecystitis)", "Inguinal & umbilical hernias", "Acute appendicitis", "Abdominal surgical conditions"],
  },
  {
    id: "icu-critical-care",
    title: "ICU & Critical Care Medicine",
    shortDescription: "High-dependency multi-bed Intensive Care Unit with advanced monitors and invasive ventilators.",
    fullDescription:
      "Around-the-clock intensivist coverage, invasive and non-invasive mechanical ventilators, central hemodynamic monitoring, dialysis support, and dedicated 1:1 nursing care for critically ill patients.",
    iconName: "ShieldCheck",
    keyBenefits: [
      "24/7 on-duty intensivist and critical care physician",
      "High-end multipara monitoring & syringe pumps",
      "Advanced ventilator and arterial blood gas (ABG) support",
      "Strict barrier nursing and infection control",
    ],
    recommendedFor: ["Septic shock", "Severe respiratory failure", "Post-major surgical monitoring", "Multi-organ dysfunction"],
  },
  {
    id: "diagnostics-pharmacy",
    title: "Diagnostics, Pathology & 24/7 Pharmacy",
    shortDescription: "State-of-the-art pathology testing, digital X-Ray, ultrasonography, and 24/7 in-house pharmacy.",
    fullDescription:
      "Complete in-house diagnostic services ensuring fast, reliable test turnarounds, high-frequency digital radiography, color doppler ultrasound, automated biochemistry, and round-the-clock genuine pharmacy availability.",
    iconName: "Target",
    keyBenefits: [
      "Fully automated pathology analyzers",
      "Digital X-Ray & 4D Color Ultrasound",
      "Fast reporting for emergency decision-making",
      "24/7 fully stocked pharmacy on campus",
    ],
    recommendedFor: ["Routine & emergency blood tests", "Diagnostic imaging & scans", "Prescription medicines 24/7", "Health checkup packages"],
  },
];
