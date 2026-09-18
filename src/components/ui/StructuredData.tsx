import React from "react";
import { clinicData } from "@/data/clinic";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: clinicData.clinicName,
    alternateName: "PHYSIO 360 CARE - Dr. Sonali Baghel PT",
    description: `PHYSIO 360 CARE by Dr. Sonali Baghel, PT provides personalized physiotherapy and rehabilitation care in ${clinicData.city}, ${clinicData.state}.`,
    url: "https://physio360care.com",
    telephone: clinicData.phone,
    medicalSpecialty: [
      "Physiotherapy",
      "Physical Therapy",
      "Musculoskeletal Rehabilitation",
      "Orthopedic Physical Therapy",
      "Sports Rehabilitation"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Allahabad",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinicData.latitude,
      longitude: clinicData.longitude,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinicData.rating,
      reviewCount: clinicData.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    founder: {
      "@type": "Person",
      name: clinicData.doctorName,
      jobTitle: clinicData.designation,
    },
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
