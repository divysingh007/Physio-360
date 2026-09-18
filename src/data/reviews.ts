export interface ReviewItem {
  id: string;
  authorName: string;
  rating: number;
  date: string;
  condition: string;
  text: string;
  isDemo: boolean;
}

export const reviewsSummary = {
  averageRating: 4.9,
  totalReviews: 19,
  source: "Google Reviews",
  googleMapsReviewUrl: "https://www.google.com/maps/search/?api=1&query=Physiotherapy+Clinic+Allahabad+Uttar+Pradesh",
  notice: "The reviews below are sample preview testimonials illustrating patient recovery experiences. Genuine Google reviews can be synced directly via business profile integration.",
};

export const reviewsData: ReviewItem[] = [
  {
    id: "rev-1",
    authorName: "R. Sharma",
    rating: 5,
    date: "Recent Patient",
    condition: "Neck & Upper Back Pain",
    text: "Dr. Sonali Baghel took the time to carefully assess my neck pain and posture issues. The personalized exercise therapy and gentle manual mobilization helped me regain full neck mobility in a few weeks. Very polite and attentive care.",
    isDemo: true,
  },
  {
    id: "rev-2",
    authorName: "A. Srivastava",
    rating: 5,
    date: "Recent Patient",
    condition: "Post-Knee Arthroscopy Rehab",
    text: "Received excellent post-surgical rehabilitation guidance at PHYSIO 360 CARE. Dr. Sonali explained every exercise step and ensured I performed movements safely without pain. Highly structured and reassuring approach.",
    isDemo: true,
  },
  {
    id: "rev-3",
    authorName: "M. Verma",
    rating: 5,
    date: "Recent Patient",
    condition: "Shoulder Impingement & Stiffness",
    text: "I was having intense shoulder stiffness that made sleeping and daily work difficult. With regular physiotherapy sessions and home exercises guided by Dr. Sonali, my range of motion and strength have significantly improved.",
    isDemo: true,
  },
  {
    id: "rev-4",
    authorName: "P. Mishra",
    rating: 5,
    date: "Recent Patient",
    condition: "Sports Ligament Strain",
    text: "Very knowledgeable physiotherapist who focuses on proper rehabilitation mechanics rather than temporary fixes. The clinic environment is clean, professional, and patient-centric. Definitely recommended.",
    isDemo: true,
  },
  {
    id: "rev-5",
    authorName: "S. Gupta",
    rating: 4.8,
    date: "Recent Patient",
    condition: "Lower Back Discomfort",
    text: "The one-on-one attention makes a huge difference compared to crowded clinics. Dr. Sonali listened patiently to my complaints and designed an exercise plan that fit my work schedule perfectly.",
    isDemo: true,
  },
];
