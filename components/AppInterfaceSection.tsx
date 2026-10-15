"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Download,
  Star,
  CheckCircle,
  Search,
  Building,
  Briefcase,
  User,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export function AppInterfaceSection() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(2); // Center screen active by default

  const screens = [
    {
      id: 0,
      title: "Student Profile",
      render: (
        <div className="h-full flex flex-col justify-between bg-white p-3 text-left">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-[10px] font-bold text-slate-400">9:41</span>
            <span className="text-[10px] font-bold text-blue-600">Profile</span>
          </div>
          <div className="mt-2 text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
              AK
            </div>
            <h5 className="mt-1.5 text-xs font-bold text-slate-900">Amit Kumar</h5>
            <p className="text-[9px] text-slate-500">B.Tech Computer Science</p>
            <span className="mt-1 inline-block rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-bold text-emerald-600">
              Verified Student
            </span>
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="rounded-lg bg-slate-50 p-1.5 text-[9px]">
              <span className="text-slate-400">CGPA</span>
              <p className="font-bold text-slate-800">8.9 / 10</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-1.5 text-[9px]">
              <span className="text-slate-400">Top Skills</span>
              <p className="font-bold text-blue-600">React • TypeScript • AI</p>
            </div>
          </div>
          <div className="mt-2 rounded-lg bg-blue-600 p-2 text-center text-[10px] font-bold text-white shadow-xs">
            Edit Profile
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Opportunity View",
      render: (
        <div className="h-full flex flex-col justify-between bg-white p-3 text-left">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-[10px] font-bold text-slate-400">9:41</span>
            <span className="text-[10px] font-bold text-slate-700">Role Details</span>
          </div>
          <div className="mt-2">
            <span className="rounded-md bg-blue-50 px-1.5 py-0.5 text-[8px] font-bold text-blue-600">
              FULL-TIME
            </span>
            <h5 className="mt-1 text-xs font-bold text-slate-900">Frontend Engineer</h5>
            <p className="text-[9px] text-slate-500">Google Cloud Partner • Bengaluru</p>
            <p className="mt-1 text-[11px] font-extrabold text-blue-600">₹ 14 - 18 LPA</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-2 text-[8px] text-slate-600 space-y-1">
            <p className="font-semibold text-slate-800">Key Requirements:</p>
            <p>• Next.js, React, Tailwind CSS</p>
            <p>• 90%+ AI Match with your resume</p>
          </div>
          <div className="rounded-lg bg-[#0070F3] p-2 text-center text-[10px] font-bold text-white shadow-xs">
            1-Click Easy Apply
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Home & Feed (Center)",
      render: (
        <div className="h-full flex flex-col justify-between bg-slate-50 p-3 text-left">
          <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
            <span className="text-[10px] font-bold text-slate-400">9:41</span>
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[9px] font-bold text-slate-600">Live Feed</span>
            </div>
          </div>
          <div className="mt-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] text-slate-500">Welcome back</p>
                <h5 className="text-xs font-black text-slate-900">Hi, Amit Kumar 👋</h5>
              </div>
              <div className="h-7 w-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                AK
              </div>
            </div>
            {/* Search Input Bar */}
            <div className="mt-2 flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2 py-1 text-[9px] text-slate-400 shadow-2xs">
              <Search className="h-3 w-3 text-slate-400" />
              <span>Search colleges, jobs, gigs...</span>
            </div>
          </div>

          {/* Top Courses Pills */}
          <div className="mt-2">
            <span className="text-[9px] font-bold text-slate-700">Top Courses</span>
            <div className="mt-1 flex gap-1 overflow-hidden">
              <span className="rounded-md bg-blue-100 px-1.5 py-0.5 text-[8px] font-bold text-blue-700">
                AI & ML
              </span>
              <span className="rounded-md bg-purple-100 px-1.5 py-0.5 text-[8px] font-bold text-purple-700">
                Data Sci
              </span>
              <span className="rounded-md bg-emerald-100 px-1.5 py-0.5 text-[8px] font-bold text-emerald-700">
                FullStack
              </span>
            </div>
          </div>

          {/* Trending College Card */}
          <div className="mt-2 rounded-xl border border-slate-200 bg-white p-2 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold text-slate-900">Victory College</span>
              <span className="rounded-full bg-amber-50 px-1.5 text-[8px] font-bold text-amber-600">
                NAAC A++
              </span>
            </div>
            <p className="text-[8px] text-slate-500 mt-0.5">Top Placement • Bengaluru</p>
            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-[8px] font-bold text-blue-600">Avg ₹ 9.2 LPA</span>
              <span className="text-[8px] font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">
                Explore →
              </span>
            </div>
          </div>

          <div className="mt-2 rounded-lg bg-blue-600 p-1.5 text-center text-[9px] font-bold text-white">
            Explore 1,000+ Matches
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Applications Tracker",
      render: (
        <div className="h-full flex flex-col justify-between bg-white p-3 text-left">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-[10px] font-bold text-slate-400">9:41</span>
            <span className="text-[10px] font-bold text-slate-700">Applications</span>
          </div>
          <div className="mt-2 space-y-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-[9px]">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-900">Google Cloud Intern</span>
                <span className="rounded-full bg-emerald-100 px-1.5 text-[8px] font-bold text-emerald-700">
                  Interview
                </span>
              </div>
              <p className="text-[8px] text-slate-500 mt-1">Round 2 • Tomorrow, 3 PM</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-[9px]">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-900">Radiant Info Tech</span>
                <span className="rounded-full bg-blue-100 px-1.5 text-[8px] font-bold text-blue-700">
                  Shortlisted
                </span>
              </div>
              <p className="text-[8px] text-slate-500 mt-1">Under review by HR</p>
            </div>
          </div>
          <div className="rounded-lg bg-slate-100 p-2 text-center text-[9px] font-bold text-slate-700">
            View All 6 Applications
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Recruiter View",
      render: (
        <div className="h-full flex flex-col justify-between bg-white p-3 text-left">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-[10px] font-bold text-slate-400">9:41</span>
            <span className="text-[10px] font-bold text-purple-600">Recruiter Hub</span>
          </div>
          <div className="mt-2 text-left">
            <span className="text-[8px] font-bold text-slate-400">ACTIVE DRIVE</span>
            <h5 className="text-xs font-bold text-slate-900">Batch of 2026 Hiring</h5>
            <p className="text-[9px] text-emerald-600 font-bold mt-0.5">38 Matched Profiles</p>
          </div>
          <div className="mt-2 space-y-1.5">
            <div className="rounded-lg bg-purple-50 p-1.5 text-[8px]">
              <div className="flex justify-between font-bold text-slate-800">
                <span>Priya Sharma</span>
                <span className="text-purple-700">96% Fit</span>
              </div>
              <p className="text-slate-500">IIT Bombay • AI Specialist</p>
            </div>
          </div>
          <div className="rounded-lg bg-purple-600 p-2 text-center text-[10px] font-bold text-white shadow-xs">
            Send Offer Letter
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="app-showcase" className="py-24 bg-gradient-to-b from-white via-slate-50/70 to-blue-50/40 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight">
            Checkout Our App Interface Look
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Experience the power of a unified campus ecosystem right in your pocket. CampusPe offers a tailored interface for every user: students can explore trending courses, colleges can showcase their campus life, and companies can post job vacancies directly to a pool of qualified candidates.
          </p>
        </div>

        {/* 5 Phone Screens Row */}
        <div className="mt-14 relative flex items-center justify-center gap-3 sm:gap-5 overflow-x-auto py-8 px-4 no-scrollbar">
          {screens.map((screen, idx) => {
            const isCenter = idx === activeScreenIndex;
            return (
              <div
                key={screen.id}
                onClick={() => setActiveScreenIndex(idx)}
                className={`cursor-pointer transition-all duration-300 transform shrink-0 rounded-[32px] border-[6px] border-slate-900 bg-slate-900 p-1 shadow-2xl relative ${
                  isCenter
                    ? "w-[220px] sm:w-[250px] h-[440px] sm:h-[490px] scale-105 sm:scale-110 -translate-y-4 ring-4 ring-blue-400/40 z-20 shadow-blue-500/20"
                    : "w-[170px] sm:w-[200px] h-[360px] sm:h-[420px] opacity-75 hover:opacity-100 hover:scale-95 z-10"
                }`}
              >
                {/* Notch / Speaker */}
                <div className="mx-auto h-3 w-16 rounded-full bg-slate-900 mb-1"></div>
                {/* Screen Content */}
                <div className="h-[calc(100%-16px)] w-full overflow-hidden rounded-[24px]">
                  {screen.render}
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Indicator Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {screens.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveScreenIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                activeScreenIndex === idx ? "w-8 bg-[#0070F3]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Show screen ${idx + 1}`}
            />
          ))}
        </div>

        {/* Download App Now Banner */}
        <div className="mt-20 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/50 p-8 sm:p-12 shadow-[0_12px_40px_rgb(0,0,0,0.04)] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0070F3] tracking-tight">
                Download App Now
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Elevate your academic journey with CampusPe, the all-in-one digital ecosystem designed to bridge the gap between education and industry. Whether you&apos;re a student seeking your next big internship, a college looking to empower your cohort, or a company scouting for top-tier talent, CampusPe streamlines the connection. Your career doesn&apos;t start at graduation—it starts here.
              </p>

              {/* App Store / Play Store Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                {/* Google Play Button */}
                <a
                  href="#download"
                  className="inline-flex items-center gap-3 rounded-xl bg-slate-900 px-5 py-2.5 text-white shadow-md hover:bg-slate-800 hover:scale-105 transition-all"
                >
                  <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186c-.368-.328-.61-.83-.61-1.428V3.242c0-.598.242-1.1.609-1.428zm11.242 11.244l2.584 2.584-12.39 7.153 9.806-9.737zm2.584-2.116l-2.584 2.584L5.045 3.79l12.39 7.152zm1.055 1.058l3.155 1.821c.883.51.883 1.346 0 1.856l-3.155 1.821-2.222-2.222 2.222-2.276z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-semibold text-slate-300">GET IT ON</div>
                    <div className="text-sm font-bold leading-none">Google Play</div>
                  </div>
                </a>

                {/* App Store Button */}
                <a
                  href="#download"
                  className="inline-flex items-center gap-3 rounded-xl bg-slate-900 px-5 py-2.5 text-white shadow-md hover:bg-slate-800 hover:scale-105 transition-all"
                >
                  <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-.07 1.73.04 2.76 1.01.08 2.04-.51 2.66-1.26z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-semibold text-slate-300">Download on the</div>
                    <div className="text-sm font-bold leading-none">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Graphical Phone Showcase */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative flex items-center justify-center">
                {/* Phone 1 (Tilted back) */}
                <div className="w-48 sm:w-56 h-80 sm:h-96 rounded-[32px] border-[5px] border-slate-800 bg-slate-900 p-1.5 shadow-2xl rotate-6 translate-x-4">
                  <div className="h-full w-full rounded-[24px] bg-gradient-to-tr from-blue-600 to-indigo-700 p-4 text-white flex flex-col justify-between">
                    <div>
                      <div className="h-2 w-10 bg-white/40 rounded-full mb-3" />
                      <h6 className="font-bold text-sm">CampusPe Instant Alerts</h6>
                      <p className="text-[10px] text-blue-100 mt-1">
                        New job matched in your preferred city
                      </p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-2 text-center text-xs backdrop-blur-md">
                      Swipe to Apply →
                    </div>
                  </div>
                </div>

                {/* Phone 2 (Front overlapping) */}
                <div className="absolute w-48 sm:w-56 h-80 sm:h-96 rounded-[32px] border-[5px] border-slate-900 bg-slate-900 p-1.5 shadow-2xl -rotate-6 -translate-x-6 z-10">
                  <div className="h-full w-full rounded-[24px] bg-white p-3 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-[10px] font-bold text-blue-600">Discover</span>
                        <Badge variant="pillGreen" className="text-[9px]">
                          98% Match
                        </Badge>
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="rounded-lg bg-blue-50 p-2 text-left">
                          <p className="text-[10px] font-bold text-slate-900">Google Cloud Associate</p>
                          <p className="text-[8px] text-slate-500">₹ 25k/mo • Hybrid</p>
                        </div>
                        <div className="rounded-lg bg-amber-50 p-2 text-left">
                          <p className="text-[10px] font-bold text-slate-900">IIM Bangalore MBA</p>
                          <p className="text-[8px] text-slate-500">₹ 3L+ Scholarships</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-[#0070F3] p-2 text-center text-xs font-bold text-white shadow-md">
                      Instant Apply
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
