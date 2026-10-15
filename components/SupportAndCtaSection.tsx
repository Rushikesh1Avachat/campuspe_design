"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Phone, ChevronDown, Sparkles, HelpCircle } from "lucide-react";

interface SupportAndCtaSectionProps {
  onContactSupport: () => void;
  onScheduleCall: () => void;
  onExploreColleges: () => void;
  onFindOpportunities: () => void;
  onListCollege: () => void;
  onPostJob: () => void;
}

export function SupportAndCtaSection({
  onContactSupport,
  onScheduleCall,
  onExploreColleges,
  onFindOpportunities,
  onListCollege,
  onPostJob,
}: SupportAndCtaSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Still Have Questions Box */}
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-sky-50/60 p-8 sm:p-12 text-center shadow-xs">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Still have questions?
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Our support team is here to help you succeed. Get in touch anytime.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button
                onClick={onContactSupport}
                className="rounded-full bg-[#0070F3] hover:bg-blue-600 text-white px-6 py-2.5 font-semibold shadow-sm hover:shadow transition-all group"
              >
                <span>Contact Support</span>
                <ArrowUpRight className="h-4 w-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>

              <Button
                variant="outline"
                onClick={onScheduleCall}
                className="rounded-full border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-6 py-2.5 font-semibold shadow-2xs group"
              >
                <span>Schedule a Call</span>
                <Phone className="h-4 w-4 ml-2 text-blue-600 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Ready for what's next Banner */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Ready for what&apos;s next?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500">
              Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Button
              onClick={onExploreColleges}
              size="sm"
              className="rounded-full bg-[#0070F3] hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2"
            >
              <span>Explore Colleges</span>
              <ChevronDown className="h-3 w-3 ml-1" />
            </Button>

            <Button
              onClick={onFindOpportunities}
              size="sm"
              className="rounded-full bg-[#0070F3] hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2"
            >
              <span>Find Opportunities</span>
              <ChevronDown className="h-3 w-3 ml-1" />
            </Button>

            <Button
              variant="outline"
              onClick={onListCollege}
              size="sm"
              className="rounded-full border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold px-4 py-2"
            >
              <span>List Your College</span>
              <ChevronDown className="h-3 w-3 ml-1" />
            </Button>

            <Button
              variant="outline"
              onClick={onPostJob}
              size="sm"
              className="rounded-full border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold px-4 py-2"
            >
              <span>Post a Job</span>
              <ChevronDown className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
