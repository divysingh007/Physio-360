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
    id: "pain-management",
    title: "Pain Management",
    shortDescription: "Personalized physiotherapy for common musculoskeletal pain and discomfort.",
    fullDescription:
      "A holistic, non-invasive therapeutic approach addressing acute and persistent musculoskeletal pain through manual therapy techniques, gentle joint mobilization, therapeutic modalities, and pain-relieving corrective exercises.",
    iconName: "ShieldAlert",
    keyBenefits: [
      "Targeted alleviation of joint & muscular discomfort",
      "Identification of postural and mechanical triggers",
      "Gentle therapeutic modalities and hands-on care",
      "Ergonomic guidance for sustained relief",
    ],
    recommendedFor: ["Chronic back/neck stiffness", "Tendon & muscle strain", "Myofascial pain", "Joint discomfort"],
  },
  {
    id: "orthopedic-rehabilitation",
    title: "Orthopedic Rehabilitation",
    shortDescription: "Structured rehabilitation focused on restoring movement, strength and function.",
    fullDescription:
      "Comprehensive musculoskeletal care designed to restore joint biomechanics, improve functional range of motion, build stabilizing strength, and guide patients back to day-to-day independence.",
    iconName: "Activity",
    keyBenefits: [
      "Systematic joint mobilization and soft-tissue work",
      "Progressive resistance and stabilization training",
      "Functional movement pattern retraining",
      "Long-term joint health maintenance",
    ],
    recommendedFor: ["Frozen shoulder", "Knee osteoarthritis", "Spine disc conditions", "Post-fracture stiffness"],
  },
  {
    id: "sports-injury-rehabilitation",
    title: "Sports Injury Rehabilitation",
    shortDescription: "Recovery support for sports-related injuries and return-to-activity goals.",
    fullDescription:
      "Tailored rehabilitation for athletes and active individuals recovering from ligament sprains, muscle tears, tendon overuse, and sports-related trauma with a focus on safe return to play.",
    iconName: "Flame",
    keyBenefits: [
      "Sport-specific movement retraining",
      "Neuromuscular re-education and agility drills",
      "Injury re-occurrence prevention strategies",
      "Load management and conditioning",
    ],
    recommendedFor: ["Ankle sprains", "Ligament strains (ACL/MCL)", "Tennis/Golfer elbow", "Rotator cuff issues"],
  },
  {
    id: "back-neck-pain-care",
    title: "Back & Neck Pain Care",
    shortDescription: "Assessment and exercise-based care for back and neck-related problems.",
    fullDescription:
      "Evidence-informed physical therapy focusing on spinal mechanics, core stability, cervical postural alignment, and individualized corrective exercises for acute or persistent back and neck discomfort.",
    iconName: "Bone",
    keyBenefits: [
      "In-depth spinal biomechanics assessment",
      "Core muscular stabilization training",
      "Desk posture and workplace ergonomic correction",
      "Nerve gliding and mobility routines",
    ],
    recommendedFor: ["Cervical spondylosis", "Lumbar strain", "Sciatica-like pain", "Tech neck & postural strain"],
  },
  {
    id: "post-injury-rehabilitation",
    title: "Post-Injury Rehabilitation",
    shortDescription: "Progressive rehabilitation to help restore mobility and functional ability.",
    fullDescription:
      "Structured phase-by-phase recovery following accidental falls, soft-tissue tears, or physical trauma, prioritizing safe tissue healing, edema management, and progressive return to normal functional tasks.",
    iconName: "Sparkles",
    keyBenefits: [
      "Controlled progressive loading protocols",
      "Scar tissue and swelling management",
      "Gait training and balance enhancement",
      "Confidence building in daily activities",
    ],
    recommendedFor: ["Post-fall recovery", "Soft-tissue contusions", "Whiplash strain", "Muscle tear rehabilitation"],
  },
  {
    id: "mobility-strength-training",
    title: "Mobility & Strength Training",
    shortDescription: "Targeted exercises to improve strength, flexibility, balance and movement.",
    fullDescription:
      "Physiotherapist-guided functional training tailored to enhance muscular endurance, joint suppleness, dynamic balance, and overall physical agility for individuals of all age groups.",
    iconName: "Dumbbell",
    keyBenefits: [
      "Customized flexibility and stretching regimens",
      "Age-appropriate resistance and balance drills",
      "Fall prevention and coordination exercises",
      "Improved stamina for active daily living",
    ],
    recommendedFor: ["Age-related stiffness", "Generalized muscle weakness", "Balance difficulty", "Active lifestyle readiness"],
  },
  {
    id: "post-surgical-rehabilitation",
    title: "Post-Surgical Rehabilitation",
    shortDescription: "Guided rehabilitation following appropriate surgical procedures.",
    fullDescription:
      "Carefully orchestrated physiotherapy protocols coordinated with orthopedic surgical guidelines to promote tissue recovery, prevent stiffness, regain joint motion, and rebuild functional strength post-surgery.",
    iconName: "HeartPulse",
    keyBenefits: [
      "Adherence to orthopedic recovery milestones",
      "Safe, gradual range-of-motion progression",
      "Post-operative swelling and pain management",
      "Gait, transfer, and stair-climbing training",
    ],
    recommendedFor: ["Post-knee/hip replacement", "Post-arthroscopy recovery", "Post-fracture internal fixation", "Post-spine surgery"],
  },
  {
    id: "personalized-exercise-therapy",
    title: "Personalized Exercise Therapy",
    shortDescription: "Individualized exercise programs based on patient needs and goals.",
    fullDescription:
      "One-on-one prescribed therapeutic exercise programs designed by Dr. Sonali Baghel, PT, specifically matching each individual's physical evaluation, lifestyle, personal goals, and healing rate.",
    iconName: "CheckCircle2",
    keyBenefits: [
      "One-on-one guided clinical supervision",
      "Clear home exercise regimen with step-by-step guidance",
      "Regular progression tracking and modification",
      "Sustainable habits for lifelong wellness",
    ],
    recommendedFor: ["Individual fitness restoration", "Home exercise guidance", "Long-term mobility maintenance", "Post-therapy continuation"],
  },
];
