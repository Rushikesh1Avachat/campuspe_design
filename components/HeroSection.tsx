"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Briefcase,
  Building2,
  Check,
  Sparkles,
  Bot,
  Bell,
  ArrowRight,
  ShieldCheck,
  Users,
  Search,
  MessageCircle,
  FileText,
  Flame,
  Globe2,
} from "lucide-react";

interface HeroSectionProps {
  onJoinWaitlist: (category: "college" | "employer") => void;
  onExploreJobs: () => void;
  onOpenWhatsAppModal: () => void;
}

export function HeroSection({
  onJoinWaitlist,
  onExploreJobs,
  onOpenWhatsAppModal,
}: HeroSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(2);
  const { scrollYProgress } = useScroll();
  const glowOneY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const glowTwoY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const floatingLeftY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const floatingRightY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <motion.section
      className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 hero-gradient-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Background radial glow accents */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          className="h-[600px] w-[600px] rounded-full bg-blue-100/40 blur-3xl"
          style={{ y: glowOneY }}
        />
        <motion.div
          className="absolute top-10 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-100/30 blur-3xl"
          style={{ y: glowTwoY }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Floating Tag Top: AI-Powered Campus Assistant */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#FFF9F3] px-4 py-1.5 shadow-xs transition-transform hover:scale-105 cursor-pointer">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-[#0070F3]">
              <Bot className="h-4 w-4" />
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#0070F3]">
              AI-Powered Campus Assistant
            </span>
          </div>
        </motion.div>

        {/* Hero Title and Subtitle */}
        <motion.div
          className="mt-6 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-[68px] lg:leading-[1.12]">
            Connect{" "}
            <span className="text-[#0070F3] drop-shadow-xs">10X</span>{" "}
            <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
              Faster.
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            One platform connecting students, colleges & employers — faster.
          </p>
        </motion.div>

        {/* Center Floating Notification Badges - Responsive grid / positioning */}
        <div className="relative mt-8">
          {/* Floating Pill: WhatsApp Alert (Left on desktop) */}
          <motion.div
            onClick={onOpenWhatsAppModal}
            style={{ y: floatingLeftY }}
            className="hidden xl:flex absolute -left-2 top-0 z-20 w-72 cursor-pointer flex-col gap-1 rounded-2xl border border-emerald-100 bg-white/95 p-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md transition-all hover:scale-105 hover:shadow-emerald-500/10 animate-float-slow"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white">
                <MessageCircle className="h-4 w-4" />
              </div>
              <span className="text-xs font-bold text-slate-800">WhatsApp Alert</span>
              <span className="ml-auto rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                Live
              </span>
            </div>
            <p className="text-[11px] leading-tight text-slate-500">
              Get notified on WhatsApp! You&apos;ll get instant alerts for colleges & jobs directly.
            </p>
          </motion.div>

          {/* Floating Pill: Matched Students (Lower Left on desktop) */}
          <motion.div
            style={{ y: floatingLeftY }}
            className="hidden xl:flex absolute -left-6 top-32 z-20 items-center gap-3 rounded-full border border-blue-100 bg-white/95 px-4 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md animate-float-delay"
          >
            <div className="flex -space-x-2 overflow-hidden">
              <span className="inline-block h-7 w-7 rounded-full bg-blue-500 ring-2 ring-white text-[11px] font-bold text-white flex items-center justify-center">
                AK
              </span>
              <span className="inline-block h-7 w-7 rounded-full bg-purple-500 ring-2 ring-white text-[11px] font-bold text-white flex items-center justify-center">
                SR
              </span>
              <span className="inline-block h-7 w-7 rounded-full bg-amber-500 ring-2 ring-white text-[11px] font-bold text-white flex items-center justify-center">
                MD
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-none">142 students matched today</p>
              <p className="text-[10px] text-slate-500 mt-0.5">IIT, BITS, VIT & 40+ more</p>
            </div>
          </motion.div>

          {/* Floating Pill: Resume Builder (Right on desktop) */}
          <motion.div
            style={{ y: floatingRightY }}
            className="hidden xl:flex absolute -right-4 top-2 z-20 w-72 flex-col gap-1 rounded-2xl border border-blue-100 bg-white/95 p-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md transition-all hover:scale-105 animate-float-slow"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white">
                <FileText className="h-4 w-4" />
              </div>
              <span className="text-xs font-bold text-slate-800">Resume Builder</span>
              <span className="ml-auto rounded-full bg-blue-50 px-1.5 py-0.5 text-[10px] font-semibold text-blue-700">
                AI Powered
              </span>
            </div>
            <p className="text-[11px] leading-tight text-slate-500">
              Build your resume. Our intuitive builder gives you curated options to get shortlisted faster.
            </p>
          </motion.div>

          {/* Floating Pill: Radiant Recruiter (Lower Right on desktop) */}
          <motion.div
            style={{ y: floatingRightY }}
            className="hidden xl:flex absolute -right-6 top-36 z-20 items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-3.5 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md animate-float-delay"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
              <Briefcase className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-900">Radiant Info</span>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <p className="text-[10px] text-slate-500">Verified recruiter • Shortlisted 3 mins ago</p>
            </div>
          </motion.div>

          {/* Center Callout: What are you looking for? */}
          <motion.div
            className="flex items-center justify-center gap-2 text-center my-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="h-5 w-5 text-[#0070F3] animate-pulse" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#0070F3] tracking-tight">
              What are you looking for?
            </h2>
            <Sparkles className="h-5 w-5 text-[#0070F3] animate-pulse" />
          </motion.div>

          {/* 3 Interactive Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {/* Card 1: College */}
            <motion.div
              onMouseEnter={() => setHoveredCard(1)}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.35 }}
              className={`relative flex flex-col justify-between rounded-3xl border bg-white/90 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 ${
                hoveredCard === 1
                  ? "border-blue-400 shadow-xl shadow-blue-500/10 scale-[1.02]"
                  : "border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <Badge variant="pillBlue" className="rounded-full px-3 py-1 font-semibold text-xs border-blue-300">
                    Coming Soon
                  </Badge>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">College</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Explore colleges, courses, fees, placements & more.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2.5 text-sm text-slate-700">
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>Search by course, location, fees</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-700">
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>Connect directly with colleges</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-700">
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>Improve student placements</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  onClick={() => onJoinWaitlist("college")}
                  className="w-full rounded-2xl bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-sm hover:shadow transition-all group"
                >
                  <span>Join Waitlist</span>
                  <Bell className="h-4 w-4 ml-1 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
            </motion.div>

            {/* Card 2: I'm Looking for a Job (Featured & Active) */}
            <motion.div
              onMouseEnter={() => setHoveredCard(2)}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.35 }}
              className={`relative flex flex-col justify-between rounded-3xl border-2 bg-white p-6 sm:p-7 transition-all duration-300 ${
                hoveredCard === 2
                  ? "border-[#0070F3] shadow-2xl shadow-blue-500/15 scale-[1.03] ring-4 ring-blue-50"
                  : "border-blue-200 shadow-md hover:border-[#0070F3]"
              }`}
            >
              {/* Highlight ribbon / tag */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-3.5 py-1 text-xs font-bold text-white shadow-md">
                  <Sparkles className="h-3 w-3" /> Popular Choice
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-[#0070F3]">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <Badge className="bg-[#0070F3] hover:bg-blue-700 text-white rounded-full px-3 py-1 font-semibold text-xs border-0">
                    Available Now
                  </Badge>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">I&apos;m Looking for a Job</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Upload your resume. We&apos;ll find jobs that fit you.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>Jobs from 1000+ sources</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>AI powered matching</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>WhatsApp & email alerts</span>
                    </div>
                  </div>

                  {/* Micro Resume Card Graphic from Figma */}
                  <div className="relative h-24 w-20 rounded-xl border border-slate-200 bg-slate-50 p-2 shadow-xs shrink-0 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="h-2 w-10 rounded-full bg-amber-300"></div>
                      <div className="h-1.5 w-full rounded-full bg-emerald-300"></div>
                      <div className="h-1.5 w-12 rounded-full bg-emerald-200"></div>
                      <div className="h-1.5 w-14 rounded-full bg-purple-300"></div>
                      <div className="h-1.5 w-10 rounded-full bg-emerald-300"></div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-amber-100 text-amber-700 shadow-xs">
                      <Search className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  onClick={onExploreJobs}
                  className="w-full rounded-2xl bg-[#0070F3] hover:bg-blue-600 text-white font-semibold py-3 text-base shadow-md shadow-blue-500/25 transition-all group"
                >
                  <span>Explore Jobs</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            {/* Card 3: I'm Hiring */}
            <motion.div
              onMouseEnter={() => setHoveredCard(3)}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.35 }}
              className={`relative flex flex-col justify-between rounded-3xl border bg-white/90 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 ${
                hoveredCard === 3
                  ? "border-blue-400 shadow-xl shadow-blue-500/10 scale-[1.02]"
                  : "border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <Badge variant="pillBlue" className="rounded-full px-3 py-1 font-semibold text-xs border-blue-300">
                    Coming Soon
                  </Badge>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">I&apos;m Hiring</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Connect with colleges and find candidates — from students to graduates.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2.5 text-sm text-slate-700">
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>Connect directly with colleges</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-700">
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>Find the right candidates</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-700">
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>Simplify your hiring</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  onClick={() => onJoinWaitlist("employer")}
                  className="w-full rounded-2xl bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-sm hover:shadow transition-all group"
                >
                  <span>Join Waitlist</span>
                  <Bell className="h-4 w-4 ml-1 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Bar Component */}
          <motion.div
            className="mt-14 max-w-5xl mx-auto rounded-3xl border border-slate-200/90 bg-white/80 p-5 sm:p-6 shadow-xs backdrop-blur-md"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {/* Stat 1 */}
              <div className="flex items-center gap-3.5 pt-2 md:pt-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">800+</div>
                  <div className="text-xs text-slate-500 font-medium">Students</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3.5 pt-2 md:pt-0 md:pl-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shrink-0">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">130+</div>
                  <div className="text-xs text-slate-500 font-medium">Colleges</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3.5 pt-2 md:pt-0 md:pl-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shrink-0">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">100+</div>
                  <div className="text-xs text-slate-500 font-medium">Jobs & internships</div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-3.5 pt-2 md:pt-0 md:pl-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Safe & Trusted</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trusted Partners Section */}
          <motion.div
            className="mt-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-400">
              Trusted by partners across India
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 grayscale hover:grayscale-0 transition-all">
              {/* Partner 1: GINSERV */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="h-7 w-7 rounded-full bg-sky-500 flex items-center justify-center text-white text-[10px] font-black">
                  G
                </div>
                <div className="text-left">
                  <span className="text-base font-extrabold tracking-tight text-slate-800 block leading-none">GINSERV</span>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400">Nurturing Ventures</span>
                </div>
              </div>

              {/* Partner 2: STARTUP KARNATAKA */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="text-[#E63946] font-bold text-lg">▲▼</div>
                <div className="text-left">
                  <span className="text-base font-black tracking-tight text-[#1D3557] block leading-none">STARTUP</span>
                  <span className="text-xs font-black tracking-tight text-[#E63946]">KARNATAKA</span>
                </div>
              </div>

              {/* Partner 3: VTU */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="h-8 w-8 rounded-full border-2 border-emerald-600 flex items-center justify-center text-[10px] font-bold text-emerald-800 bg-amber-50">
                  VTU
                </div>
                <span className="text-sm font-bold text-slate-700">Visvesvaraya TU</span>
              </div>

              {/* Partner 4: TALENTSPOTIFY */}
              <div className="flex items-center gap-1.5 group cursor-pointer">
                <div className="h-6 w-6 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold">
                  ◎
                </div>
                <span className="text-sm font-black tracking-wider text-slate-800">TALENTSPOTIFY</span>
              </div>

              {/* Partner 5: RADIANT */}
              <div className="flex items-center gap-1.5 group cursor-pointer">
                <Flame className="h-5 w-5 text-red-500" />
                <span className="text-sm font-black tracking-wider text-slate-800">RADIANT</span>
              </div>

              {/* Partner 6: DIGITAL INDIA */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <Globe2 className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-bold text-slate-800">Digital India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
