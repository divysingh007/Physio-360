import React from "react";
import { clinicData } from "@/data/clinic";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: clinicData.clinicName,
    alternateName: "Samriddhi Hospital Prayagraj",
    description: `Samriddhi Hospital is a leading multispeciality hospital providing 24/7 emergency care, cardiology, orthopedics, surgery, maternity and diagnostics in ${clinicData.city}, ${clinicData.state}.`,
    url: "https://samriddhihospital.com",
    telephone: clinicData.phoneRaw,
    medicalSpecialty: [
      "EmergencyMedicine",
      "Cardiovascular",
      "Orthopedic",
      "Gynecologic",
      "Pediatric",
      "Surgical",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Medical Enclave, Civil Lines",
      addressLocality: clinicData.city,
      addressRegion: clinicData.state,
      postalCode: "211001",
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
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
