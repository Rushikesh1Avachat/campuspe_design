"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle2,
  BellRing,
  SlidersHorizontal,
  ExternalLink,
  GraduationCap,
  Building,
  Briefcase,
  Layers,
} from "lucide-react";

interface OpportunityItem {
  id: string;
  category: "Colleges" | "Jobs" | "Internships" | "Freelance" | "Part-time";
  title: string;
  badge: string;
  badgeVariant: "pillOrange" | "pillBlue" | "pillPurple" | "pillGreen";
  icon: "college" | "google" | "analytics" | "briefcase" | "write";
  location: string;
  mode: string;
  compensation: string;
  description: string;
  ctaText: string;
  ctaVariant: "default" | "outline";
}

const OPPORTUNITIES: OpportunityItem[] = [
  {
    id: "1",
    category: "Colleges",
    title: "IIM Bangalore",
    badge: "Top College",
    badgeVariant: "pillOrange",
    icon: "college",
    location: "Bengaluru",
    mode: "MBA",
    compensation: "₹ 3L+ Scholarships",
    description: "India's premier management institute with global exposure & executive mentorship.",
    ctaText: "View Details",
    ctaVariant: "outline",
  },
  {
    id: "2",
    category: "Internships",
    title: "Product Intern",
    badge: "Internship",
    badgeVariant: "pillBlue",
    icon: "google",
    location: "Bengaluru",
    mode: "Hybrid",
    compensation: "₹ 25k/mo",
    description: "Work on real products, learn from top engineers and build scalable solutions.",
    ctaText: "Apply Now",
    ctaVariant: "default",
  },
  {
    id: "3",
    category: "Freelance",
    title: "Marketing Gig",
    badge: "Freelance",
    badgeVariant: "pillPurple",
    icon: "analytics",
    location: "Remote",
    mode: "Freelance",
    compensation: "₹ 10K - 25K",
    description: "Create content and help with social media campaigns for rapid brand growth.",
    ctaText: "View Details",
    ctaVariant: "outline",
  },
  {
    id: "4",
    category: "Jobs",
    title: "Associate Software Engineer",
    badge: "Full-Time",
    badgeVariant: "pillGreen",
    icon: "briefcase",
    location: "Hyderabad",
    mode: "On-site",
    compensation: "₹ 8 - 12 LPA",
    description: "Build robust backend microservices with Next.js, Node.js, and cloud systems.",
    ctaText: "Apply Now",
    ctaVariant: "default",
  },
  {
    id: "5",
    category: "Part-time",
    title: "Campus Ambassador",
    badge: "Part-time",
    badgeVariant: "pillBlue",
    icon: "write",
    location: "Pan-India",
    mode: "Flexible",
    compensation: "₹ 8k/mo + Perks",
    description: "Represent CampusPe on your campus and lead workshops and tech hackathons.",
    ctaText: "Apply Now",
    ctaVariant: "default",
  },
];

interface OpportunityFeedSectionProps {
  onSelectOpportunity: (item: OpportunityItem) => void;
  onExploreMore: () => void;
}

export function OpportunityFeedSection({
  onSelectOpportunity,
  onExploreMore,
}: OpportunityFeedSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Colleges", "Jobs", "Internships", "Freelance", "Part-time"];

  const filteredOpportunities =
    activeTab === "All"
      ? OPPORTUNITIES
      : OPPORTUNITIES.filter((item) => item.category === activeTab);

  return (
    <section id="opportunity-feed" className="py-20 bg-slate-50/60 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Explanation & 3 Steps */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-xs font-semibold text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              01 • OPPORTUNITY DISCOVERY
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Stop searching. <br />
              <span className="text-[#0070F3]">Start getting matched.</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.
            </p>

            {/* 3 Step Cards */}
            <div className="space-y-4 pt-2">
              {/* Step 01 */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600">
                      01
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">Set your preferences</h3>
                  </div>
                  <Badge variant="pillBlue" className="text-[11px] font-medium">
                    Smart Profile
                  </Badge>
                </div>
                <p className="mt-2 text-xs text-slate-600 pl-8 leading-relaxed">
                  Tell us what you&apos;re looking for, from colleges and courses to jobs, internships and gigs.
                </p>
              </div>

              {/* Step 02 */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600">
                      02
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">Discover relevant opportunities</h3>
                  </div>
                  <Badge variant="pillPurple" className="text-[11px] font-medium">
                    AI-Ranked
                  </Badge>
                </div>
                <p className="mt-2 text-xs text-slate-600 pl-8 leading-relaxed">
                  Explore colleges and career opportunities matched to your profile, interests and goals.
                </p>
              </div>

              {/* Step 03 */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600">
                      03
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">Get notified when something fits</h3>
                  </div>
                  <Badge variant="pillGreen" className="text-[11px] font-medium">
                    Instant Alerts
                  </Badge>
                </div>
                <p className="mt-2 text-xs text-slate-600 pl-8 leading-relaxed">
                  Get notified when a relevant college or new opportunity is found, so you can act early.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                onClick={onExploreMore}
                className="rounded-full bg-[#0070F3] hover:bg-blue-600 text-white px-7 py-3 font-semibold shadow-sm hover:shadow transition-all group"
              >
                <span>Explore opportunities</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column: Opportunity Feed UI Component */}
          <div className="lg:col-span-7 relative">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-[0_12px_40px_rgb(0,0,0,0.06)] relative z-10">
              {/* Feed Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                      CampusPe Opportunity Feed
                    </h3>
                    <p className="text-xs text-slate-500">Colleges & opportunities matched to you</p>
                  </div>
                </div>

                <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold text-xs px-3 py-1 rounded-full">
                  + 12 New Matches Today
                </Badge>
              </div>

              {/* Tabs */}
              <div className="mt-5 flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                      activeTab === cat
                        ? "bg-slate-900 text-white shadow-xs"
                        : "bg-slate-100/80 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Opportunities List Items */}
              <div className="mt-5 space-y-3.5">
                {filteredOpportunities.map((item) => (
                  <div
                    key={item.id}
                    className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 transition-all duration-200 hover:border-blue-400 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-start gap-3.5">
                        {/* Custom icon per item */}
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-2xs group-hover:scale-105 transition-transform">
                          {item.icon === "college" && (
                            <span className="text-base font-bold text-red-600">IIM</span>
                          )}
                          {item.icon === "google" && (
                            <span className="text-lg font-bold text-blue-500">G</span>
                          )}
                          {item.icon === "analytics" && (
                            <span className="text-base font-bold text-purple-600">MG</span>
                          )}
                          {item.icon === "briefcase" && (
                            <Briefcase className="h-5 w-5 text-emerald-600" />
                          )}
                          {item.icon === "write" && (
                            <GraduationCap className="h-5 w-5 text-blue-600" />
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                            <Badge variant={item.badgeVariant} className="text-[10px] px-2 py-0.5">
                              {item.badge}
                            </Badge>
                          </div>
                          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3 text-slate-400" />
                              {item.location}
                            </span>
                            <span>•</span>
                            <span>{item.mode}</span>
                            <span>•</span>
                            <span className="font-semibold text-slate-700">{item.compensation}</span>
                          </div>
                        </div>
                      </div>

                      <Button
                        variant={item.ctaVariant}
                        size="sm"
                        onClick={() => onSelectOpportunity(item)}
                        className={`rounded-full px-4 text-xs font-semibold shrink-0 ${
                          item.ctaVariant === "default"
                            ? "bg-[#0070F3] hover:bg-blue-600 text-white"
                            : "border-slate-300 hover:border-blue-400 hover:text-blue-600"
                        }`}
                      >
                        {item.ctaText}
                      </Button>
                    </div>

                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed border-t border-slate-200/50 pt-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Feed Card Footer */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-4 text-xs">
                <button
                  onClick={onExploreMore}
                  className="font-bold text-[#0070F3] hover:text-blue-700 flex items-center gap-1 group"
                >
                  <span>View all matched opportunities</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-slate-400 font-medium">Curated for you • Updated daily</span>
              </div>
            </div>

            {/* Handwritten style annotation note with curved arrow from Figma */}
            <div className="mt-3 flex items-center justify-end gap-2 pr-6">
              <span className="text-xs italic font-medium text-indigo-600 tracking-wide font-sans">
                ✦ A mix of colleges, jobs, internships and gigs — all in one place.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
