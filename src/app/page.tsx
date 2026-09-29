import { Hero } from "@/components/home/Hero";
import { AppointmentAdvantage } from "@/components/home/AppointmentAdvantage";
import { SpecialistsGrid } from "@/components/home/SpecialistsGrid";
import { ServicesList } from "@/components/home/ServicesList";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { LocationSection } from "@/components/home/LocationSection";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Hero Section matching Reference Image 1 */}
      <Hero />

      {/* 2. Interactive Appointment Booking Card & Priority Care matching Reference Image 2 */}
      <AppointmentAdvantage />

      {/* 3. Specialists Grid & Safe Hands Section matching Reference Image 3 */}
      <SpecialistsGrid />

      {/* 4. Multispeciality Hospital Departments */}
      <ServicesList />

      {/* 5. Patient Reviews & Trust Ratings */}
      <ReviewsSection />

      {/* 6. Campus Location, Directions & 24/7 Helpline */}
      <LocationSection />
    </main>
  );
}
