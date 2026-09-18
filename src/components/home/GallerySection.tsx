"use client";

import React, { useState } from "react";
import { galleryData, GalleryItem } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Modal } from "@/components/ui/Modal";
import {
  Stethoscope,
  Bed,
  Dumbbell,
  Activity,
  Clock,
  Users,
  Maximize2,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Bed,
  Dumbbell,
  Activity,
  Clock,
  Users,
};

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ["All", "Clinic", "Treatment", "Equipment", "Consultation"];

  const filteredItems =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-50/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Facilities & Space"
          title="Clinic Photo Gallery"
          subtitle="Explore our dedicated physiotherapy consultation rooms, rehabilitation studio, and treatment stations in Allahabad."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200",
                selectedCategory === cat
                  ? "bg-teal-800 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:text-teal-800 hover:bg-teal-50 border border-slate-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const IconComp = iconMap[item.icon] || Activity;
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Visual Card / Placeholder Graphic */}
                <div className="relative aspect-4/3 w-full bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 flex flex-col items-center justify-center text-white p-6 overflow-hidden">
                  {/* Subtle decorative circles */}
                  <div className="absolute -top-10 -right-10 w-36 h-36 bg-teal-500/20 rounded-full blur-xl" />
                  <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-blue-500/20 rounded-full blur-xl" />

                  <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                    <div className="w-14 h-14 rounded-2xl bg-teal-700/60 border border-teal-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <IconComp className="w-7 h-7 text-teal-200" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-200 text-xs font-semibold tracking-wide border border-teal-400/30">
                      {item.badge}
                    </span>
                  </div>

                  {/* Hover Overlay with expand icon */}
                  <div className="absolute inset-0 bg-teal-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-white text-teal-800 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Card Text Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-medium text-slate-400">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-teal-700 font-semibold">
                    <span>Click to view details</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox / Modal for Expanded View */}
        <Modal
          isOpen={!!activeItem}
          onClose={() => setActiveItem(null)}
          title={activeItem?.title || "Clinic Facility"}
          maxWidth="2xl"
        >
          {activeItem && (
            <div className="space-y-5">
              {/* Modal Visual Card */}
              <div className="relative aspect-16/10 rounded-2xl bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 flex flex-col items-center justify-center text-white p-8 overflow-hidden shadow-inner">
                <div className="w-20 h-20 rounded-2xl bg-teal-700/60 border border-teal-400/30 flex items-center justify-center mb-4 shadow-lg">
                  {(() => {
                    const Comp = iconMap[activeItem.icon] || Activity;
                    return <Comp className="w-10 h-10 text-teal-200" />;
                  })()}
                </div>
                <span className="px-3.5 py-1 rounded-full bg-teal-500/30 text-teal-200 text-xs font-semibold tracking-wide border border-teal-400/40 mb-2">
                  {activeItem.badge}
                </span>
                <p className="text-sm text-teal-200 text-center max-w-sm">
                  PHYSIO 360 CARE &bull; Allahabad (Prayagraj)
                </p>
              </div>

              {/* Text Description */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md">
                    {activeItem.category} Space
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  {activeItem.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500">
                <p>
                  <strong>Note:</strong> Photos represent dedicated clinical infrastructure at PHYSIO 360 CARE. In-person assessments are conducted under sanitized, hygienic clinical standards.
                </p>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
