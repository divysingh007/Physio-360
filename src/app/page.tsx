import { Hero } from "@/components/home/Hero";
import { BusinessCard } from "@/components/home/BusinessCard";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesList } from "@/components/home/ServicesList";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TreatmentProcess } from "@/components/home/TreatmentProcess";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { GallerySection } from "@/components/home/GallerySection";
import { LocationSection } from "@/components/home/LocationSection";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Compact Business Profile Card */}
      <BusinessCard />

      {/* 3. About Section & Doctor Profile */}
      <AboutPreview />

      {/* 4. Specialized Physiotherapy Services */}
      <ServicesList />

      {/* 5. Why Choose PHYSIO 360 CARE */}
      <WhyChooseUs />

      {/* 6. 4-Step Treatment & Rehabilitation Process */}
      <TreatmentProcess />

      {/* 7. Patient Reviews */}
      <ReviewsSection />

      {/* 8. Clinic Photo Gallery with Modal Lightbox */}
      <GallerySection />

      {/* 9. Location & Directions Section */}
      <LocationSection />

      {/* 10. High-Conversion Appointment Booking Section */}
      <AppointmentCTA />
    </main>
  );
}
