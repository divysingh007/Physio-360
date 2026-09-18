import type { Metadata } from "next";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { GallerySection } from "@/components/home/GallerySection";

export const metadata: Metadata = {
  title: `Clinic Gallery | ${clinicData.clinicName} Allahabad`,
  description: `View photos and spaces at PHYSIO 360 CARE in Allahabad: consultation rooms, rehabilitation studios, and physiotherapy equipment.`,
};

export default function GalleryPage() {
  return (
    <main className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-teal-700">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Gallery</span>
        </nav>
      </div>

      <GallerySection />
    </main>
  );
}
