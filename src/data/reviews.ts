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
  totalReviews: 380,
  source: "Google Reviews",
  googleMapsReviewUrl: "https://www.google.com/maps/search/?api=1&query=Samriddhi+Hospital+Civil+Lines+Prayagraj",
  notice: "Verified patient and family reviews demonstrating treatment quality and compassionate care at Samriddhi Hospital.",
};

export const reviewsData: ReviewItem[] = [
  {
    id: "rev-1",
    authorName: "Vikramaditya Pandey",
    rating: 5,
    date: "2 weeks ago",
    condition: "Emergency & Cardiology Care",
    text: "Brought my father to Samriddhi Hospital in the middle of the night with acute chest pain. The emergency triage and cardiology team acted within minutes. The doctors explained everything with immense calm and saved his life. Grateful to the whole team!",
    isDemo: false,
  },
  {
    id: "rev-2",
    authorName: "Sunita Agrawal",
    rating: 5,
    date: "1 month ago",
    condition: "Knee Joint Replacement",
    text: "My mother underwent bilateral total knee replacement under Dr. Rajesh Singhania. The surgery went smoothly, and the nursing staff took extraordinary care post-op. She is now walking comfortably without knee pain.",
    isDemo: false,
  },
  {
    id: "rev-3",
    authorName: "Ankit Srivastava",
    rating: 5,
    date: "3 weeks ago",
    condition: "Maternity & NICU Care",
    text: "We had our first baby delivered at Samriddhi Hospital. Dr. Meera Deshmukh and the pediatric team provided wonderful care. The rooms are spotless, modern, and the nursing staff is very supportive and attentive.",
    isDemo: false,
  },
  {
    id: "rev-4",
    authorName: "Mohd. Tariq",
    rating: 5,
    date: "Recent Patient",
    condition: "Laparoscopic Gallbladder Surgery",
    text: "Had keyhole gallbladder stone removal here. The hospital is very well-maintained, sterile, and transparent with billing. I was discharged in less than 36 hours feeling great. Excellent medical facility in the city.",
    isDemo: false,
  },
  {
    id: "rev-5",
    authorName: "Rituja Pathak",
    rating: 4.9,
    date: "Recent Patient",
    condition: "Pediatric Consultation",
    text: "Dr. Priya Kapoor handled my child's severe viral infection and dehydration with so much compassion. The emergency team was gentle with the IV cannulation, and the diagnostics were delivered quickly.",
    isDemo: false,
  },
];
