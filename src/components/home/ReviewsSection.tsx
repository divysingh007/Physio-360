import React from "react";
import { reviewsData, reviewsSummary } from "@/data/reviews";
import { clinicData } from "@/data/clinic";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, MessageSquare, ExternalLink, ShieldCheck } from "lucide-react";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Patient Trust & Stories"
          title="What Our Patients Say"
          subtitle="Real experiences from families and patients treated with care and dedication at Samriddhi Hospital."
        />

        {/* Overall Rating Box */}
        <div className="max-w-3xl mx-auto mb-12 bg-gradient-to-r from-blue-50/80 via-white to-teal-50/80 rounded-3xl border border-blue-200/80 p-6 sm:p-8 text-center shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">
                  {reviewsSummary.averageRating}
                </span>
                <span className="text-xl text-slate-400 font-semibold">/ 5</span>
              </div>
              <div className="flex justify-center text-amber-400 text-lg">
                {"★★★★★"}
              </div>
            </div>

            <div className="h-12 w-px bg-slate-200 hidden sm:block" />

            <div className="text-center sm:text-left space-y-1">
              <p className="font-bold text-slate-900 text-base sm:text-lg">
                Patient Satisfaction Rating
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Based on <strong className="text-blue-700">{reviewsSummary.totalReviews}+ Verified Patient Ratings</strong> on {reviewsSummary.source}
              </p>
            </div>

            <a
              href={reviewsSummary.googleMapsReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              <span>View On Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((review) => (
            <Card
              key={review.id}
              className="flex flex-col justify-between relative bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all rounded-3xl p-6"
            >
              <div>
                {/* Header with rating */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                    Verified Patient
                  </span>
                </div>

                {/* Specialty / Department Tag */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold">
                    {review.condition}
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-teal-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    {review.authorName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {review.authorName}
                    </h4>
                    <span className="text-[11px] text-slate-400">
                      {review.date}
                    </span>
                  </div>
                </div>
                <MessageSquare className="w-4 h-4 text-slate-300" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
