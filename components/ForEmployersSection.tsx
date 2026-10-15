"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Target, Users, TrendingDown, Clock, ShieldCheck, Check } from "lucide-react";

interface ForEmployersSectionProps {
  onPostJob: () => void;
}

export function ForEmployersSection({ onPostJob }: ForEmployersSectionProps) {
  const steps = [
    {
      number: "01",
      title: "Post a role in minutes",
      tag: "INSTANT SETUP",
      badges: [
        { label: "10min Deployment", variant: "pillGreen" as const },
        { label: "500+ Campus Network", variant: "pillBlue" as const },
      ],
      description:
        "Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.",
      icon: Zap,
    },
    {
      number: "02",
      title: "Receive a matched shortlist",
      tag: "AI RANKED SETUP",
      badges: [
        { label: "Zero CV Clutter", variant: "pillOrange" as const },
        { label: "Top 5 Filter Quality", variant: "pillBlue" as const },
      ],
      description:
        "Get candidates matched to your role by skills, experience, location and hiring requirements.",
      icon: Target,
    },
    {
      number: "03",
      title: "Connect with candidates directly",
      tag: "INSTANT NOTIFY",
      badges: [
        { label: "In-App Scheduling", variant: "pillPurple" as const },
        { label: "1-Click Meet/Chat", variant: "pillGreen" as const },
      ],
      description:
        "Message, schedule interviews, and move candidates through your pipeline — all in one place.",
      icon: Users,
    },
    {
      number: "04",
      title: "Reduce your time-to-hire",
      tag: "PROVEN RESULT",
      badges: [
        { label: "< 2 DAYS", variant: "pillBlue" as const },
        { label: "57% Faster Hiring", variant: "pillGreen" as const },
      ],
      description:
        "Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.",
      icon: TrendingDown,
    },
  ];

  return (
    <section id="employers" className="py-20 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-xs font-semibold text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              03 • FOR EMPLOYERS
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Stop running <br />
              campus drives. <br />
              <span className="text-[#0070F3]">Start hiring the right people.</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.
            </p>

            <div className="pt-2">
              <Button
                onClick={onPostJob}
                className="rounded-full bg-[#0070F3] hover:bg-blue-600 text-white px-7 py-3 font-semibold shadow-sm hover:shadow transition-all group"
              >
                <span>Post a Job</span>
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
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/40 p-5 sm:p-6 shadow-xs hover:border-blue-400 hover:bg-white hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-600">{step.number}</span>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </h3>
                      <span className="rounded-full bg-slate-200/70 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
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
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100/60 text-blue-600 group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
