"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Building2, MessageSquare, Briefcase, BarChart3, CheckCircle2 } from "lucide-react";

interface ForCollegesSectionProps {
  onListCollege: () => void;
}

export function ForCollegesSection({ onListCollege }: ForCollegesSectionProps) {
  const steps = [
    {
      number: "01",
      tag: "VERIFIED PROFILE",
      badges: [
        { label: "NAAC A++ Ready", variant: "pillGreen" as const },
        { label: "98% Reach", variant: "pillBlue" as const },
      ],
      title: "Build your college profile",
      description:
        "Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.",
      icon: Building2,
    },
    {
      number: "02",
      tag: "DIRECT ENROLL",
      badges: [
        { label: "Direct Enquiries", variant: "pillBlue" as const },
        { label: "⚡ WHATSAPP/CHAT", variant: "pillGreen" as const },
        { label: "Avg response <15 min", variant: "tag" as const },
      ],
      title: "Students discover and connect",
      description:
        "Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.",
      icon: MessageSquare,
    },
    {
      number: "03",
      tag: "CAMPUS RECRUITING",
      badges: [
        { label: "500+ Hiring Partners", variant: "pillPurple" as const },
        { label: "Connect Directly", variant: "pillBlue" as const },
      ],
      title: "Recruiters discover your College",
      description:
        "Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.",
      icon: Briefcase,
    },
    {
      number: "04",
      tag: "LIVE HUB",
      badges: [
        { label: "LIVE PLACEMENTS", variant: "pillOrange" as const },
        { label: "Students • Interviews • Offers", variant: "pillBlue" as const },
      ],
      title: "Track placements in real time",
      description:
        "Track students, interviews, offers and placements from one centralized dashboard.",
      icon: BarChart3,
    },
  ];

  return (
    <section id="colleges" className="py-20 bg-slate-50/70 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-xs font-semibold text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              02 • FOR COLLEGES
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Get Discovered <br />
              <span className="text-[#0070F3]">by Students and Recruiters.</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.
            </p>

            <div className="pt-2">
              <Button
                onClick={onListCollege}
                className="rounded-full bg-[#0070F3] hover:bg-blue-600 text-white px-7 py-3 font-semibold shadow-sm hover:shadow transition-all group"
              >
                <span>List Your College</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column: 4 Cards */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-600">{step.number}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {step.tag}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5">
                      {step.badges.map((b, i) => (
                        <Badge key={i} variant={b.variant} className="text-[10px] px-2 py-0.5">
                          {b.label}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
