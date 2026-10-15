"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  Briefcase,
  Building2,
  Search,
  Bell,
  ArrowLeft,
  Calendar,
  Sparkles,
  MapPin,
  TrendingUp,
  FileText,
  Bookmark,
  Check,
  User,
  PlusCircle,
  Video,
  MessageCircle,
  Award,
  Zap,
  LogOut,
  LayoutDashboard,
  BriefcaseBusiness,
  UsersRound,
  BarChart3,
  Settings,
  Star,
  Building,
  Mail,
  Upload,
  SendHorizonal,
  Trophy,
  Flame,
  Radio,
  X,
  Menu,
  ArrowRight,
  BadgeCheck,
  Layers,
  Megaphone,
  PieChart,
  Activity,
  FileCheck,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
type RoleType = "student" | "college" | "recruiter";

interface ApplicationItem {
  id: string;
  role: string;
  company: string;
  type: string;
  status: "Applied" | "Shortlisted" | "Interview" | "Offered";
  appliedDate: string;
  compensation: string;
  location: string;
}

interface OpportunityItem {
  id: string;
  title: string;
  company: string;
  category: "Job" | "Internship" | "College" | "Gig";
  location: string;
  mode: string;
  stipend: string;
  matchScore: number;
  skills: string[];
  applied?: boolean;
  saved?: boolean;
  description: string;
  posted: string;
}

// ─── Confetti ─────────────────────────────────────────────────────────────────
const fireConfetti = () => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const c = require("canvas-confetti");
    c({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
  } catch { /* noop */ }
};

// ─── StatCard ─────────────────────────────────────────────────────────────────
function StatCard({
  label, value, icon: Icon, trend, color = "blue",
}: {
  label: string; value: string | number; icon: React.ElementType; trend?: string;
  color?: "blue" | "emerald" | "amber" | "purple" | "rose";
}) {
  const cm: Record<string, { bg: string; ic: string; badge: string }> = {
    blue:    { bg: "bg-blue-50",    ic: "text-blue-600",    badge: "bg-blue-100 text-blue-700" },
    emerald: { bg: "bg-emerald-50", ic: "text-emerald-600", badge: "bg-emerald-100 text-emerald-700" },
    amber:   { bg: "bg-amber-50",   ic: "text-amber-600",   badge: "bg-amber-100 text-amber-700" },
    purple:  { bg: "bg-purple-50",  ic: "text-purple-600",  badge: "bg-purple-100 text-purple-700" },
    rose:    { bg: "bg-rose-50",    ic: "text-rose-600",    badge: "bg-rose-100 text-rose-700" },
  };
  const c = cm[color];
  return (
    <div className="relative rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/30 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500">{label}</p>
          <p className="mt-1.5 text-2xl font-black text-slate-900">{value}</p>
          {trend && (
            <span className={`mt-1.5 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${c.badge}`}>
              <TrendingUp className="h-2.5 w-2.5" />{trend}
            </span>
          )}
        </div>
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.bg} ${c.ic}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

// ─── OpportunityCard ──────────────────────────────────────────────────────────
function OpportunityCard({ opp, onApply, onSave }: {
  opp: OpportunityItem;
  onApply: (o: OpportunityItem) => void;
  onSave: (id: string) => void;
}) {
  const catColors: Record<string, string> = {
    Job:        "bg-emerald-50 text-emerald-700 border-emerald-200",
    Internship: "bg-blue-50 text-blue-700 border-blue-200",
    College:    "bg-amber-50 text-amber-700 border-amber-200",
    Gig:        "bg-purple-50 text-purple-700 border-purple-200",
  };
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200">
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-blue-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border ${catColors[opp.category]}`}>{opp.category}</span>
            <span className="text-[10px] text-slate-400">• {opp.mode}</span>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[11px] font-bold text-emerald-700 shrink-0">
            <Sparkles className="h-2.5 w-2.5" />{opp.matchScore}%
          </div>
        </div>
        <h3 className="mt-3 text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{opp.title}</h3>
        <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
          <Building className="h-3 w-3" /><span>{opp.company}</span>
          <span>•</span><MapPin className="h-3 w-3" /><span>{opp.location}</span>
        </div>
        <p className="mt-2.5 text-xs text-slate-500 leading-relaxed line-clamp-2">{opp.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {opp.skills.slice(0, 4).map((skill) => (
            <span key={skill} className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">{skill}</span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between pt-3.5 border-t border-slate-100">
        <div>
          <span className="text-[10px] text-slate-400 font-medium block">Package / Stipend</span>
          <span className="text-sm font-extrabold text-blue-600">{opp.stipend}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onSave(opp.id)}
            className={`p-2 rounded-xl border transition-colors ${opp.saved ? "bg-blue-50 border-blue-200 text-blue-600" : "bg-white border-slate-200 text-slate-400 hover:text-blue-500 hover:border-blue-300"}`}
          >
            <Bookmark className="h-3.5 w-3.5" fill={opp.saved ? "currentColor" : "none"} />
          </button>
          <button
            onClick={() => onApply(opp)}
            disabled={opp.applied}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all shadow-sm ${opp.applied ? "bg-emerald-100 text-emerald-800 cursor-default" : "bg-[#0070F3] hover:bg-blue-700 text-white hover:shadow-md"}`}
          >
            {opp.applied ? <span className="flex items-center gap-1"><Check className="h-3.5 w-3.5" /> Applied</span> : "1-Click Apply"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Role Selector (Onboarding) ───────────────────────────────────────────────
function RoleSelector({ onSelect }: { onSelect: (r: RoleType) => void }) {
  const roles = [
    {
      id: "student" as RoleType, emoji: "🎓", title: "I'm a Student",
      subtitle: "Find jobs, internships & colleges",
      desc: "Get AI-matched opportunities, track applications, optimize your resume, and land your dream placement 10X faster.",
      grad: "from-blue-500 to-sky-400", border: "border-blue-200 hover:border-blue-400",
      badge: "bg-blue-50 text-blue-700",
      perks: ["AI Resume Parser", "1-Click Apply", "Interview Scheduler", "Placement Tracker"],
    },
    {
      id: "college" as RoleType, emoji: "🏛️", title: "I'm a College Admin",
      subtitle: "Manage admissions & placements",
      desc: "List your institution, connect with top recruiters, manage campus drives, and track student placement outcomes.",
      grad: "from-indigo-500 to-purple-500", border: "border-indigo-200 hover:border-indigo-400",
      badge: "bg-indigo-50 text-indigo-700",
      perks: ["Placement Analytics", "Recruiter Connect", "Student Database", "Campus Drive Manager"],
    },
    {
      id: "recruiter" as RoleType, emoji: "💼", title: "I'm a Recruiter",
      subtitle: "Hire top campus talent fast",
      desc: "Access 130+ verified colleges, post jobs instantly, get AI-ranked candidates, and cut time-to-hire by 10X.",
      grad: "from-slate-700 to-slate-900", border: "border-slate-200 hover:border-slate-400",
      badge: "bg-slate-100 text-slate-700",
      perks: ["AI Candidate Ranking", "Campus Drive Access", "1-Click Interview Invite", "Verified Profiles Only"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F7FF] via-[#FAFCFF] to-[#F5F0FF] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center mb-12 max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700 mb-5 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-blue-500" />
          Welcome to CampusPe — Setting up your experience
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          How would you like to{" "}
          <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">connect?</span>
        </h1>
        <p className="mt-4 text-base text-slate-500 max-w-lg mx-auto leading-relaxed">
          Select your role to unlock a personalized dashboard. Students, colleges, and recruiters — all connected 10X faster on CampusPe.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-4xl">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => onSelect(role.id)}
            className={`relative group rounded-3xl border-2 bg-white p-7 text-left transition-all duration-300 shadow-sm hover:shadow-2xl ${role.border}`}
          >
            <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${role.grad} opacity-60 group-hover:opacity-100 transition-opacity`} />
            <div className="text-4xl mb-4">{role.emoji}</div>
            <h3 className="text-xl font-black text-slate-900">{role.title}</h3>
            <p className={`mt-1.5 inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold ${role.badge}`}>{role.subtitle}</p>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">{role.desc}</p>
            <ul className="mt-5 space-y-2">
              {role.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <div className={`flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br ${role.grad} shrink-0`}>
                    <Check className="h-2.5 w-2.5 text-white" />
                  </div>
                  {perk}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-1.5 text-sm font-bold text-blue-600 group-hover:gap-2.5 transition-all">
              Get started <ArrowRight className="h-4 w-4" />
            </div>
          </button>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500">
        <span className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-blue-500" /> 1,00,000+ Users</span>
        <span className="h-3 w-px bg-slate-300" />
        <span className="flex items-center gap-1.5"><Building2 className="h-4 w-4 text-indigo-500" /> 130+ Partner Colleges</span>
        <span className="h-3 w-px bg-slate-300" />
        <span className="flex items-center gap-1.5"><BriefcaseBusiness className="h-4 w-4 text-emerald-500" /> 500+ Verified Recruiters</span>
        <span className="h-3 w-px bg-slate-300" />
        <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-amber-500" /> AI-Powered Matching</span>
      </div>
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
function Sidebar({ role, activeNav, onNav, collapsed, userName }: {
  role: RoleType; activeNav: string; onNav: (id: string) => void; collapsed: boolean; userName?: string;
}) {
  const navMap = {
    student:   [
      { id: "overview",    icon: LayoutDashboard, label: "Overview" },
      { id: "matches",     icon: Sparkles,        label: "Matched Jobs" },
      { id: "tracker",     icon: FileCheck,       label: "My Applications" },
      { id: "resume",      icon: FileText,        label: "AI Resume" },
      { id: "interviews",  icon: CalendarDays,    label: "Interviews" },
      { id: "saved",       icon: Bookmark,        label: "Saved" },
    ],
    college:   [
      { id: "overview",    icon: LayoutDashboard, label: "Overview" },
      { id: "inquiries",   icon: Mail,            label: "Enquiries" },
      { id: "drives",      icon: Megaphone,       label: "Campus Drives" },
      { id: "students",    icon: UsersRound,      label: "Student Database" },
      { id: "analytics",   icon: BarChart3,       label: "Analytics" },
    ],
    recruiter: [
      { id: "overview",    icon: LayoutDashboard, label: "Overview" },
      { id: "pipeline",    icon: Layers,          label: "Talent Pipeline" },
      { id: "jobs",        icon: BriefcaseBusiness, label: "Active Roles" },
      { id: "colleges",    icon: Building2,       label: "Partner Colleges" },
      { id: "analytics",   icon: PieChart,        label: "Hire Analytics" },
    ],
  };

  const gradMap = {
    student:   "from-blue-600 to-sky-500",
    college:   "from-indigo-600 to-purple-600",
    recruiter: "from-slate-800 to-slate-700",
  };

  const nameMap = {
    student:   { name: userName || "Amit Kumar", sub: "B.Tech CSE • 8.9 CGPA" },
    college:   { name: userName || "Victory College", sub: "NAAC A++ Partner" },
    recruiter: { name: userName || "Radiant Info Tech", sub: "Verified Employer" },
  };

  const items = navMap[role];
  const grad  = gradMap[role];
  const info  = nameMap[role];

  return (
    <aside className={`fixed left-0 top-16 bottom-0 z-30 flex flex-col border-r border-slate-200 bg-white transition-all duration-300 ${collapsed ? "w-16" : "w-56"}`}>
      {!collapsed && (
        <div className="px-3 py-3 border-b border-slate-100">
          <div className={`rounded-xl bg-gradient-to-r ${grad} p-3 text-white`}>
            <div className="text-[10px] font-black uppercase tracking-widest opacity-75 mb-0.5">
              {role === "student" ? "Student" : role === "college" ? "College Admin" : "Recruiter Hub"}
            </div>
            <div className="text-sm font-black leading-tight">{info.name}</div>
            <div className="text-[10px] opacity-70 mt-0.5">{info.sub}</div>
          </div>
        </div>
      )}

      <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-0.5">
        {items.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onNav(id)}
            title={collapsed ? label : undefined}
            className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold transition-all ${
              activeNav === id
                ? "bg-[#0070F3] text-white shadow-sm shadow-blue-500/30"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <Icon className={`h-4 w-4 shrink-0 ${activeNav === id ? "text-white" : "text-slate-400"}`} />
            {!collapsed && <span>{label}</span>}
          </button>
        ))}
      </nav>

      <div className="border-t border-slate-100 px-2 py-3">
        <button className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-500 hover:bg-slate-100 transition-colors">
          <Settings className="h-4 w-4 shrink-0 text-slate-400" />
          {!collapsed && <span>Settings</span>}
        </button>
      </div>
    </aside>
  );
}

// ─── Toast ────────────────────────────────────────────────────────────────────
function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-2xl bg-slate-900 px-5 py-3.5 text-sm font-medium text-white shadow-2xl shadow-slate-900/30 animate-in slide-in-from-bottom-4 max-w-sm">
      <Sparkles className="h-4 w-4 text-sky-400 shrink-0" />
      <span className="flex-1">{message}</span>
      <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors ml-1"><X className="h-3.5 w-3.5" /></button>
    </div>
  );
}

// ─── Student: Overview ────────────────────────────────────────────────────────
function StudentOverview({ applications, opportunities, onNav, userName }: {
  applications: ApplicationItem[]; opportunities: OpportunityItem[]; onNav: (id: string) => void; userName?: string;
}) {
  const statusColor: Record<string, string> = {
    Applied: "bg-slate-100 text-slate-700", Shortlisted: "bg-blue-50 text-blue-700",
    Interview: "bg-purple-50 text-purple-700", Offered: "bg-emerald-50 text-emerald-700",
  };
  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-[#0070F3] to-sky-500 p-6 sm:p-8 text-white shadow-lg shadow-blue-500/15 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-8 right-20 h-32 w-32 rounded-full bg-white/5 pointer-events-none" />
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-bold mb-3">
              <Radio className="h-3 w-3 text-amber-300 animate-pulse" />
              AI Profile Active — 12 New Matches Today
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Welcome back, {userName || "Rushikesh Avachat"} 👋</h2>
            <p className="mt-1.5 text-sm text-blue-100 max-w-lg">
              Your AI profile scored <strong>94%</strong> match with top companies. You&apos;re in the <strong>Top 5%</strong> of candidates this week.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/20 shrink-0">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-emerald-400 bg-emerald-500/20 text-xl font-black">94%</div>
            <div>
              <span className="text-[10px] uppercase font-black tracking-wider text-blue-200">Profile Score</span>
              <p className="text-sm font-black">Top 5% Candidate</p>
              <p className="text-[11px] text-emerald-300 mt-0.5">Ready for 1-Click Apply ✓</p>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/15">
          {[
            { label: "Active Applications",  val: applications.length },
            { label: "Interviews Scheduled", val: applications.filter(a => a.status === "Interview").length },
            { label: "Saved Opportunities",  val: opportunities.filter(o => o.saved).length },
            { label: "Offers Received",      val: applications.filter(a => a.status === "Offered").length },
          ].map((s) => (
            <div key={s.label}>
              <span className="text-xs text-blue-200">{s.label}</span>
              <p className={`text-2xl font-black mt-0.5 ${s.label === "Offers Received" ? "text-amber-300" : ""}`}>{s.val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Browse Jobs",       icon: Search,      nav: "matches",    bg: "bg-blue-600" },
          { label: "AI Resume",         icon: Sparkles,    nav: "resume",     bg: "bg-emerald-600" },
          { label: "My Applications",   icon: FileCheck,   nav: "tracker",    bg: "bg-purple-600" },
          { label: "Interviews",        icon: CalendarDays, nav: "interviews", bg: "bg-amber-600" },
        ].map((q) => (
          <button key={q.label} onClick={() => onNav(q.nav)}
            className={`flex items-center gap-2.5 rounded-2xl px-4 py-3.5 text-sm font-bold text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all ${q.bg}`}>
            <q.icon className="h-4 w-4" /><span>{q.label}</span>
          </button>
        ))}
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent applications */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Recent Applications</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Live status pipeline</p>
            </div>
            <button onClick={() => onNav("tracker")} className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1">
              View all <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="divide-y divide-slate-50">
            {applications.slice(0, 4).map((app) => (
              <div key={app.id} className="flex items-center justify-between px-5 py-3.5 hover:bg-slate-50/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center text-blue-600 font-black text-xs shrink-0">
                    {app.company.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{app.role}</p>
                    <p className="text-[11px] text-slate-500">{app.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${statusColor[app.status]}`}>{app.status}</span>
                  <p className="text-[10px] text-slate-400 mt-0.5">{app.appliedDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top AI matches */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Top AI Matches For You</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Ranked by profile compatibility</p>
            </div>
            <button onClick={() => onNav("matches")} className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1">
              See all <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="divide-y divide-slate-50">
            {opportunities.slice(0, 4).map((opp) => (
              <div key={opp.id} className="flex items-center justify-between px-5 py-3.5 hover:bg-slate-50/50 transition-colors">
                <div>
                  <p className="text-xs font-bold text-slate-900">{opp.title}</p>
                  <p className="text-[11px] text-slate-500">{opp.company} • {opp.location}</p>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
                    <Sparkles className="h-2.5 w-2.5" />{opp.matchScore}%
                  </span>
                  <p className="text-[10px] font-bold text-blue-600 mt-0.5">{opp.stipend}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interview alert */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
            <Video className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-emerald-900">Interview Tomorrow — Google Cloud Partner</p>
            <p className="text-xs text-emerald-700">Round 2 • Technical • 3:00 PM IST • Google Meet</p>
          </div>
        </div>
        <button onClick={() => onNav("interviews")} className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 transition-colors shadow-sm shrink-0">
          Prepare Now →
        </button>
      </div>
    </div>
  );
}

// ─── Student: Application Tracker (Kanban) ────────────────────────────────────
function ApplicationTracker({ applications }: { applications: ApplicationItem[] }) {
  const stages = ["Applied", "Shortlisted", "Interview", "Offered"] as const;
  const stageConfig = {
    Applied:     { col: "border-slate-200 bg-slate-50",        dot: "bg-slate-400",   badge: "bg-slate-100 text-slate-700" },
    Shortlisted: { col: "border-blue-200 bg-blue-50/50",       dot: "bg-blue-500",    badge: "bg-blue-100 text-blue-700" },
    Interview:   { col: "border-purple-200 bg-purple-50/50",   dot: "bg-purple-500",  badge: "bg-purple-100 text-purple-700" },
    Offered:     { col: "border-emerald-200 bg-emerald-50/50", dot: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-700" },
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900">Application Pipeline</h2>
          <p className="text-sm text-slate-500 mt-0.5">Real-time tracking across all stages</p>
        </div>
        <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700">{applications.length} Total</span>
      </div>

      {/* Progress bar */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="h-4 w-4 text-blue-600" />
          <span className="text-xs font-bold text-slate-700">Funnel Overview</span>
        </div>
        <div className="flex items-center gap-1">
          {stages.map((stage, i) => {
            const count = applications.filter(a => a.status === stage).length;
            const cfg = stageConfig[stage];
            return (
              <React.Fragment key={stage}>
                <div className="flex-1 text-center">
                  <div className={`h-2 rounded-full ${cfg.dot} ${count === 0 ? "opacity-20" : ""}`} />
                  <span className="text-[10px] text-slate-500 mt-1 block">{stage}</span>
                  <span className="text-xs font-black text-slate-800">{count}</span>
                </div>
                {i < stages.length - 1 && <ChevronRight className="h-4 w-4 text-slate-300 shrink-0" />}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Kanban */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stages.map((stage) => {
          const stageApps = applications.filter(a => a.status === stage);
          const cfg = stageConfig[stage];
          return (
            <div key={stage} className={`rounded-2xl border-2 ${cfg.col} p-4 space-y-3`}>
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                <div className="flex items-center gap-1.5">
                  <div className={`h-2 w-2 rounded-full ${cfg.dot}`} />
                  <span className="text-xs font-bold text-slate-800">{stage}</span>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${cfg.badge}`}>{stageApps.length}</span>
              </div>
              {stageApps.length === 0
                ? <div className="py-8 text-center text-xs text-slate-400">No applications yet</div>
                : stageApps.map((app) => (
                    <div key={app.id} className="rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-sm hover:border-blue-300 transition-all space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-400 font-medium">{app.appliedDate}</span>
                        <span className="text-[10px] rounded bg-slate-100 text-slate-600 px-1.5 py-0.5">{app.type}</span>
                      </div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">{app.role}</p>
                      <p className="text-[11px] text-slate-500">{app.company}</p>
                      <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-100">
                        <span className="text-slate-500">{app.location}</span>
                        <span className="font-bold text-blue-600">{app.compensation}</span>
                      </div>
                    </div>
                  ))
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Student: Interviews ───────────────────────────────────────────────────────
function InterviewsSection({ showToast }: { showToast: (m: string) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-slate-900">Upcoming Interviews & Meets</h2>
        <p className="text-sm text-slate-500 mt-0.5">All scheduled calls in one place</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { company: "Google Cloud Partner", role: "Frontend Engineer (Next.js)", round: "Round 2 — Technical", date: "Tomorrow", time: "3:00 PM IST", platform: "Google Meet", col: "border-emerald-200 bg-emerald-50/30", badge: "bg-emerald-100 text-emerald-700", btn: "bg-emerald-600 hover:bg-emerald-700" },
          { company: "Radiant Info Tech", role: "Associate Software Engineer", round: "Round 1 — HR & Culture", date: "Friday", time: "11:00 AM IST", platform: "Zoom", col: "border-blue-200 bg-blue-50/30", badge: "bg-blue-100 text-blue-700", btn: "bg-blue-600 hover:bg-blue-700" },
        ].map((iv, i) => (
          <div key={i} className={`rounded-2xl border-2 p-5 space-y-4 ${iv.col}`}>
            <div className="flex items-center justify-between">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${iv.badge}`}>{iv.round}</span>
              <span className="text-xs font-bold text-slate-500">{iv.date} • {iv.time}</span>
            </div>
            <div>
              <h4 className="text-base font-black text-slate-900">{iv.company}</h4>
              <p className="text-xs text-slate-500 mt-0.5">{iv.role}</p>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5"><Video className="h-3.5 w-3.5" />{iv.platform}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => showToast(`Opening ${iv.platform} room...`)} className={`rounded-full ${iv.btn} text-white text-xs font-bold px-4 py-2 flex items-center gap-1.5 transition-colors`}>
                <Video className="h-3.5 w-3.5" /> Join Call
              </button>
              <button onClick={() => showToast("Opening prep notes...")} className="rounded-full border border-slate-200 bg-white text-slate-700 text-xs font-bold px-4 py-2 hover:bg-slate-50 transition-colors">Prep Notes</button>
              <button onClick={() => showToast("Added to Google Calendar!")} className="rounded-full border border-slate-200 bg-white text-slate-600 text-xs font-bold px-3 py-2 hover:bg-slate-50 transition-colors"><Calendar className="h-3.5 w-3.5" /></button>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 flex items-start gap-3">
        <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0"><Sparkles className="h-5 w-5" /></div>
        <div>
          <h4 className="text-sm font-bold text-amber-900">AI Interview Coach Tip</h4>
          <p className="text-xs text-amber-800 mt-1 leading-relaxed">For your Google Cloud technical round, focus on React Suspense, Next.js App Router optimizations, and system design for high-traffic dashboards. Practice 2–3 live coding problems on arrays and DP.</p>
          <button onClick={() => showToast("Starting mock interview session...")} className="mt-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-4 py-1.5 transition-colors">Start Mock Interview →</button>
        </div>
      </div>
    </div>
  );
}

// ─── Student: AI Resume ────────────────────────────────────────────────────────
function ResumeSection({ showToast }: { showToast: (m: string) => void }) {
  const skills = ["React.js", "Next.js 15", "TypeScript", "Tailwind CSS", "REST APIs", "Node.js", "Git & GitHub", "State Management", "Responsive Design", "AI Tooling"];
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900">AI Resume Optimizer</h2>
          <p className="text-sm text-slate-500 mt-0.5">Semantic Engine v2.4 • Last scanned today</p>
        </div>
        <button onClick={() => showToast("Uploaded! Re-evaluating score...")} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-2 transition-colors">
          <Upload className="h-3.5 w-3.5" /> Upload New Version
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Score */}
        <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 text-center space-y-4 shadow-sm">
          <div className="relative mx-auto w-24 h-24">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="2" />
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#0070F3" strokeWidth="2.5"
                strokeDasharray="94 6" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-black text-slate-900">94</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">ATS Readiness: High</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">18/20 recruiter ATS checks passed. Keyword density optimal.</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[{ l: "Keywords", v: "97%" }, { l: "Format", v: "91%" }, { l: "Impact", v: "88%" }].map(m => (
              <div key={m.l} className="rounded-lg bg-white border border-slate-200 p-2 text-center">
                <p className="text-sm font-black text-blue-600">{m.v}</p>
                <p className="text-[10px] text-slate-500">{m.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & tips */}
        <div className="lg:col-span-2 space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Identified Skills & Strengths</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map(s => (
                <span key={s} className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                  <Check className="h-3 w-3 text-emerald-600" />{s}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">AI Recommendations to Reach 99%</h4>
            {[
              { icon: "⚡", title: "Add Cloud Deployment Keywords", body: "Mentions of AWS (S3, CloudFront) or Vercel edge deployment unlock 4 additional high-paying roles.", col: "border-amber-200 bg-amber-50/50 text-amber-900" },
              { icon: "📊", title: "Quantify Metric Impact", body: 'Include gains like "Reduced load time by 35% using Next.js Turbopack" to appeal to enterprise recruiters.', col: "border-blue-200 bg-blue-50/50 text-blue-900" },
              { icon: "🌟", title: "Add Open Source Contributions", body: "Top-tier recruiters value GitHub activity. Link 2–3 active repos with stars.", col: "border-purple-200 bg-purple-50/50 text-purple-900" },
            ].map((tip, i) => (
              <div key={i} className={`flex items-start gap-2.5 rounded-xl border p-3 text-xs ${tip.col}`}>
                <span className="text-base shrink-0">{tip.icon}</span>
                <div><strong>{tip.title}: </strong>{tip.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── College: Overview ────────────────────────────────────────────────────────
function CollegeOverview({ onNav, showToast }: { onNav: (s: string) => void; showToast: (m: string) => void }) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-600 p-6 sm:p-8 text-white shadow-lg shadow-indigo-500/15 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/5 pointer-events-none" />
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold mb-3">✅ Verified CampusPe Partner Institution</span>
            <h2 className="text-2xl sm:text-3xl font-black">Victory College of Engineering & Tech</h2>
            <p className="text-sm text-indigo-200 mt-1">NAAC A++ Accredited • Bengaluru • NIRF Top 50 • Est. 1998</p>
          </div>
          <button onClick={() => onNav("analytics")} className="rounded-full bg-white text-indigo-900 hover:bg-indigo-50 font-bold text-xs px-5 py-2.5 shadow-sm transition-colors shrink-0">View Analytics →</button>
        </div>
        <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/15">
          {[{ l: "Total Enquiries (YTD)", v: "1,342" }, { l: "Placement Rate", v: "88.4%" }, { l: "Active Recruiters", v: "45+" }, { l: "Highest Package", v: "₹42 LPA" }].map(s => (
            <div key={s.l}><span className="text-xs text-indigo-200">{s.l}</span><p className="text-2xl font-black mt-0.5">{s.v}</p></div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard label="New Enquiries Today" value="12" icon={Mail} trend="+34% vs yesterday" color="blue" />
        <StatCard label="Drive Applications" value="246" icon={UsersRound} trend="This week" color="purple" />
        <StatCard label="Offers Extended" value="58" icon={Award} trend="Q4 2026" color="emerald" />
        <StatCard label="Pending Documents" value="7" icon={FileText} color="amber" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">Direct Admission Enquiries</h3>
            <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[11px] font-bold text-blue-700">12 Today</span>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { name: "Pooja Reddy", course: "B.Tech AI & Data Science", city: "Bengaluru", time: "10m ago" },
              { name: "Rohan Nair", course: "MBA Tech Management", city: "Kochi", time: "25m ago" },
              { name: "Sneha Sen", course: "B.Tech Computer Science", city: "Kolkata", time: "1h ago" },
              { name: "Dev Mehta", course: "M.Tech VLSI", city: "Pune", time: "2h ago" },
            ].map((inq, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-3 hover:bg-slate-50/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-700 font-black text-xs">
                    {inq.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{inq.name}</p>
                    <p className="text-[11px] text-slate-500">{inq.course} • {inq.city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] text-slate-400">{inq.time}</span>
                  <button onClick={() => showToast(`Opening WhatsApp with ${inq.name}...`)} className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold px-3 py-1 flex items-center gap-1 transition-colors">
                    <MessageCircle className="h-3 w-3" /> Reply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">Ongoing Campus Drives</h3>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">4 Live</span>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { company: "Radiant Info Tech", role: "Software Engineer", applicants: 84, status: "Shortlisting", col: "bg-blue-50 text-blue-700" },
              { company: "Talentspotify", role: "Product Specialist", applicants: 52, status: "Interviewing", col: "bg-purple-50 text-purple-700" },
              { company: "Global Cloud Services", role: "Cloud DevOps", applicants: 110, status: "Drive Scheduled", col: "bg-amber-50 text-amber-700" },
              { company: "CampusPe Technologies", role: "Campus Lead", applicants: 30, status: "Offers Out", col: "bg-emerald-50 text-emerald-700" },
            ].map((drive, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-3 hover:bg-slate-50/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 font-black text-[10px]">
                    {drive.company.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{drive.company}</p>
                    <p className="text-[11px] text-slate-500">{drive.role} • {drive.applicants} candidates</p>
                  </div>
                </div>
                <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold shrink-0 ${drive.col}`}>{drive.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bar chart */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Monthly Placement Trend — 2026</h3>
            <p className="text-xs text-slate-500 mt-0.5">Confirmed offers per month</p>
          </div>
          <span className="text-xs text-slate-400">Target: 200 placements/yr</span>
        </div>
        <div className="flex items-end gap-2 h-28">
          {[
            { m: "Jan", v: 55 }, { m: "Feb", v: 70 }, { m: "Mar", v: 60 }, { m: "Apr", v: 90 },
            { m: "May", v: 85 }, { m: "Jun", v: 110 }, { m: "Jul", v: 95 }, { m: "Aug", v: 130 },
            { m: "Sep", v: 120 }, { m: "Oct", v: 150 }, { m: "Nov", v: 0 }, { m: "Dec", v: 0 },
          ].map(({ m, v }) => (
            <div key={m} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-t-md" style={{ height: `${v ? (v / 150) * 96 : 4}px`, background: v ? "linear-gradient(to top,#0070F3,#38bdf8)" : "#f1f5f9", minHeight: "4px" }} />
              <span className="text-[9px] text-slate-400">{m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Recruiter: Overview ──────────────────────────────────────────────────────
function RecruiterOverview({ onNav, showToast }: { onNav: (s: string) => void; showToast: (m: string) => void }) {
  const candidates = [
    { name: "Amit Kumar",   college: "Victory College",  cgpa: "8.9", score: 96, skills: ["React", "Next.js", "TypeScript"] },
    { name: "Priya Sharma", college: "IIT Bombay",        cgpa: "9.2", score: 94, skills: ["React", "Python", "Node.js"] },
    { name: "Karan Patel",  college: "BITS Pilani",       cgpa: "8.7", score: 91, skills: ["Frontend", "Redux", "Docker"] },
    { name: "Anjali Singh", college: "NIT Surathkal",     cgpa: "8.5", score: 89, skills: ["Java", "Spring", "AWS"] },
  ];
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,112,243,0.15),_transparent)] pointer-events-none" />
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="inline-block rounded-full bg-blue-500/20 text-blue-300 px-3 py-1 text-xs font-bold mb-3">Radiant Info Tech — Verified Employer</span>
            <h2 className="text-2xl sm:text-3xl font-black">Recruiter Talent Dashboard</h2>
            <p className="text-sm text-slate-300 mt-1">Access to 130+ verified partner colleges & 50,000+ pre-screened candidates.</p>
          </div>
          <button onClick={() => showToast("Opening Post Job modal...")} className="rounded-full bg-[#0070F3] hover:bg-blue-600 font-bold text-xs px-5 py-2.5 flex items-center gap-2 transition-colors shrink-0">
            <PlusCircle className="h-4 w-4" /> Post New Role
          </button>
        </div>
        <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-700">
          {[
            { l: "Active Roles", v: "4", acc: "" },
            { l: "Total Applicants", v: "186", acc: "" },
            { l: "AI-Ranked Matches", v: "24", acc: "text-blue-400" },
            { l: "Avg. Time-to-Hire", v: "< 48h", acc: "text-emerald-400" },
          ].map(s => (
            <div key={s.l}><span className="text-xs text-slate-400">{s.l}</span><p className={`text-2xl font-black mt-0.5 ${s.acc}`}>{s.v}</p></div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard label="Offers Extended" value="8" icon={SendHorizonal} trend="This month" color="emerald" />
        <StatCard label="Interviews Scheduled" value="16" icon={CalendarDays} trend="Next 7 days" color="blue" />
        <StatCard label="Shortlisted" value="24" icon={Star} color="amber" />
        <StatCard label="Response Rate" value="91%" icon={Activity} trend="+5% vs last mo." color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI-ranked candidates */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">AI-Ranked Top Candidates</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Frontend Engineer role • 90%+ match</p>
            </div>
            <button onClick={() => onNav("pipeline")} className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1">View all <ChevronRight className="h-3.5 w-3.5" /></button>
          </div>
          <div className="divide-y divide-slate-50">
            {candidates.map((cand, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-3 hover:bg-slate-50/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-100 to-sky-200 flex items-center justify-center text-blue-700 font-black text-sm">
                      {cand.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    {i === 0 && <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-amber-400 flex items-center justify-center"><Trophy className="h-2.5 w-2.5 text-white" /></div>}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{cand.name}</p>
                    <p className="text-[11px] text-slate-500">{cand.college} • {cand.cgpa} CGPA</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[11px] font-bold text-emerald-700">{cand.score}%</span>
                  <button onClick={() => showToast(`Interview invite sent to ${cand.name}!`)} className="rounded-full bg-[#0070F3] hover:bg-blue-700 text-white text-[11px] font-bold px-3 py-1 transition-colors">Invite</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active job postings */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">Active Job Postings</h3>
            <button onClick={() => onNav("jobs")} className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1">Manage <ChevronRight className="h-3.5 w-3.5" /></button>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { title: "Frontend Engineer",       applicants: 54, status: "Shortlisting", days: "8 days left",  col: "text-blue-600" },
              { title: "Backend Engineer (Node)", applicants: 38, status: "Screening",    days: "12 days left", col: "text-purple-600" },
              { title: "Product Manager Intern",  applicants: 62, status: "Interviewing", days: "3 days left",  col: "text-emerald-600" },
              { title: "DevOps Associate",        applicants: 32, status: "Open",         days: "15 days left", col: "text-amber-600" },
            ].map((job, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-3 hover:bg-slate-50/50 transition-colors">
                <div>
                  <p className="text-xs font-bold text-slate-900">{job.title}</p>
                  <p className="text-[11px] text-slate-500">{job.applicants} applicants • {job.days}</p>
                </div>
                <span className={`text-[11px] font-bold ${job.col}`}>{job.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner colleges */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900">Top Partner Colleges</h3>
          <button onClick={() => onNav("colleges")} className="text-xs font-semibold text-blue-600 hover:underline">View all 130+ →</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { name: "IIT Bombay",       students: "2,400+", tier: "Tier 1" },
            { name: "BITS Pilani",      students: "1,800+", tier: "Tier 1" },
            { name: "Victory College",  students: "3,200+", tier: "NAAC A++" },
            { name: "NIT Surathkal",    students: "2,100+", tier: "Tier 1" },
          ].map((c, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center hover:border-blue-300 transition-colors cursor-pointer">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-700 font-black text-[11px] mx-auto mb-2">
                {c.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </div>
              <p className="text-[11px] font-bold text-slate-900">{c.name}</p>
              <p className="text-[10px] text-slate-500">{c.students} students</p>
              <span className="mt-1 inline-block rounded bg-indigo-50 text-indigo-700 text-[10px] font-bold px-1.5 py-0.5">{c.tier}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────────
const SESSION_KEY = "campuspe_session";

export default function DashboardPage() {
  const [roleSelected, setRoleSelected] = useState(false);
  const [activeRole, setActiveRole] = useState<RoleType>("student");
  const [activeNav, setActiveNav] = useState("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [notifOpen, setNotifOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name: string; username?: string; email: string; role: RoleType } | null>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [applications, setApplications] = useState<ApplicationItem[]>([
    { id: "a1", role: "Frontend Engineer",  company: "Google Cloud Partner",  type: "Full-Time",  status: "Offered",     appliedDate: "3 days ago",  compensation: "₹14–18 LPA",  location: "Bengaluru" },
    { id: "a2", role: "Product Intern",     company: "Flipkart Ecosystem",    type: "Internship", status: "Interview",   appliedDate: "5 days ago",  compensation: "₹25k/mo",     location: "Bengaluru (Hybrid)" },
    { id: "a3", role: "Full Stack Dev",     company: "Radiant Info Tech",     type: "Full-Time",  status: "Shortlisted", appliedDate: "1 week ago",  compensation: "₹10–14 LPA",  location: "Hyderabad" },
    { id: "a4", role: "Campus Ambassador",  company: "CampusPe Network",      type: "Part-time",  status: "Applied",     appliedDate: "Yesterday",   compensation: "₹8k/mo",      location: "Pan-India" },
  ]);

  const [opportunities, setOpportunities] = useState<OpportunityItem[]>([
    { id: "o1", title: "Frontend Engineer (Next.js / React)",    company: "Google Cloud Partner",   category: "Job",       location: "Bengaluru",  mode: "Hybrid",          stipend: "₹14–18 LPA",       matchScore: 96, skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"], saved: true,  applied: true,  description: "Build high-speed reactive interfaces for global enterprise cloud portals.",    posted: "2 days ago" },
    { id: "o2", title: "Product Management Intern",              company: "Unacademy Ecosystem",    category: "Internship", location: "Bengaluru",  mode: "On-site",         stipend: "₹30k/mo",          matchScore: 94, skills: ["Product Analytics", "Figma", "User Research", "Agile"], saved: false, applied: false, description: "Work directly with Senior PMs on feature discovery and onboarding automation.", posted: "1 day ago" },
    { id: "o3", title: "IIM Bangalore — Executive Cohort",       company: "IIM Bangalore",          category: "College",   location: "Bengaluru",  mode: "Executive Weekend", stipend: "₹3L+ Scholarships", matchScore: 92, skills: ["Strategy", "Leadership", "Financial Modeling"], saved: true,  applied: false, description: "Exclusive fast-track executive cohort for high-potential CS graduates.",          posted: "3 days ago" },
    { id: "o4", title: "Associate Backend Engineer",             company: "Radiant Info Tech",      category: "Job",       location: "Hyderabad",  mode: "On-site",         stipend: "₹8–12 LPA",        matchScore: 91, skills: ["Node.js", "PostgreSQL", "Docker", "REST APIs"], saved: false, applied: false, description: "Scale high-throughput APIs handling millions of daily placement requests.",      posted: "4 days ago" },
    { id: "o5", title: "AI Growth & Marketing Gig",             company: "Talentspotify",          category: "Gig",       location: "Remote",     mode: "Flexible",        stipend: "₹15k–25k",         matchScore: 88, skills: ["Social Media", "SEO", "Prompt Engineering"], saved: false, applied: false, description: "Design campaigns, prompt generative content, and build student funnels.",        posted: "Today" },
    { id: "o6", title: "Campus Ambassador Lead",                 company: "CampusPe Technologies",  category: "Internship", location: "Pan-India",  mode: "Flexible",        stipend: "₹8k/mo + Certs",   matchScore: 95, skills: ["Community Mgmt", "Event Organizing", "Networking"], saved: false, applied: false, description: "Become the face of CampusPe, organizing hackathons and placement workshops.",   posted: "Today" },
  ]);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(SESSION_KEY);
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser) as { name?: string; username?: string; email?: string; role?: RoleType };
        const user = {
          name: parsedUser.name || parsedUser.username || "CampusPe User",
          username: parsedUser.username || parsedUser.name || "campuspeuser",
          email: parsedUser.email || "user@campuspe.in",
          role: parsedUser.role || "student",
        };
        setCurrentUser(user);
        setActiveRole(user.role);
        setRoleSelected(true);
      } else {
        setCurrentUser({
          name: "Amit Kumar",
          username: "amitkumar",
          email: "amit@campuspe.in",
          role: "student",
        });
      }
    } catch {
      setCurrentUser({
        name: "Amit Kumar",
        username: "amitkumar",
        email: "amit@campuspe.in",
        role: "student",
      });
    }
  }, []);

  const showToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 4000); };

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);
    setCurrentUser(null);
    router.push("/");
  };

  const handleApply = (opp: OpportunityItem) => {
    if (opp.applied) return;
    fireConfetti();
    setOpportunities(prev => prev.map(o => o.id === opp.id ? { ...o, applied: true } : o));
    setApplications(prev => [{
      id: `a${Date.now()}`, role: opp.title, company: opp.company,
      type: opp.category === "Internship" ? "Internship" : "Full-Time",
      status: "Applied", appliedDate: "Just now", compensation: opp.stipend, location: opp.location,
    }, ...prev]);
    showToast(`🎉 Applied to ${opp.title} at ${opp.company}!`);
  };

  const handleSave = (id: string) => {
    setOpportunities(prev => prev.map(o => {
      if (o.id !== id) return o;
      showToast(o.saved ? "Removed from bookmarks." : "Saved to bookmarks! 📌");
      return { ...o, saved: !o.saved };
    }));
  };

  const filteredOpps = opportunities.filter(item => {
    const matchCat =
      filterCategory === "All" ||
      (filterCategory === "Jobs" && item.category === "Job") ||
      (filterCategory === "Internships" && item.category === "Internship") ||
      (filterCategory === "Colleges" && item.category === "College") ||
      (filterCategory === "Gigs" && item.category === "Gig");
    const matchQ =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchQ;
  });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (notifRef.current && !notifRef.current.contains(target)) setNotifOpen(false);
      if (userMenuRef.current && !userMenuRef.current.contains(target)) setUserMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleRoleChange = (role: RoleType) => { setActiveRole(role); setActiveNav("overview"); };
  const handleRoleSelect = (role: RoleType) => { setActiveRole(role); setRoleSelected(true); setActiveNav("overview"); };

  if (!roleSelected) return <RoleSelector onSelect={handleRoleSelect} />;

  const sw = sidebarCollapsed ? "ml-16" : "ml-56";

  const renderContent = () => {
    if (activeRole === "student") {
      if (activeNav === "overview")    return <StudentOverview applications={applications} opportunities={opportunities} onNav={setActiveNav} userName={currentUser?.name} />;
      if (activeNav === "tracker")     return <ApplicationTracker applications={applications} />;
      if (activeNav === "resume")      return <ResumeSection showToast={showToast} />;
      if (activeNav === "interviews")  return <InterviewsSection showToast={showToast} />;
      if (activeNav === "matches")     return (
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-slate-900">Matched Opportunities</h2>
              <p className="text-sm text-slate-500 mt-0.5">AI-ranked by your profile compatibility</p>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input type="text" placeholder="Search jobs, skills, companies..." value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 text-xs rounded-full border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 w-64" />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {["All","Jobs","Internships","Colleges","Gigs"].map(cat => (
              <button key={cat} onClick={() => setFilterCategory(cat)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${filterCategory===cat ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"}`}>
                {cat}
              </button>
            ))}
            <span className="ml-2 text-xs text-slate-500"><strong>{filteredOpps.length}</strong> verified matches</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredOpps.map(opp => <OpportunityCard key={opp.id} opp={opp} onApply={handleApply} onSave={handleSave} />)}
          </div>
        </div>
      );
      if (activeNav === "saved") {
        const saved = opportunities.filter(o => o.saved);
        return (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-black text-slate-900">Saved Opportunities</h2>
              <p className="text-sm text-slate-500 mt-0.5">{saved.length} bookmarked for later</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {saved.length === 0
                ? <div className="col-span-2 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center"><Bookmark className="h-8 w-8 text-slate-300 mx-auto mb-3" /><p className="text-sm text-slate-500">No saved opportunities yet.</p></div>
                : saved.map(opp => <OpportunityCard key={opp.id} opp={opp} onApply={handleApply} onSave={handleSave} />)
              }
            </div>
          </div>
        );
      }
    }
    if (activeRole === "college")   return <CollegeOverview onNav={setActiveNav} showToast={showToast} />;
    if (activeRole === "recruiter") return <RecruiterOverview onNav={setActiveNav} showToast={showToast} />;
    return null;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-md h-16">
        <div className="flex h-full items-center justify-between px-4 gap-4">
          {/* Logo + sidebar toggle */}
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors">
              <Menu className="h-4 w-4" />
            </button>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white"><GraduationCap className="h-5 w-5" /></div>
              <span className="text-xl font-black tracking-tight text-slate-900">Campus<span className="text-[#0070F3]">Pe</span></span>
              <span className="hidden sm:block rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-black text-blue-700 uppercase tracking-wider">Dashboard</span>
            </Link>
          </div>

          {/* Role switcher */}
          <div className="hidden md:flex items-center rounded-full border border-slate-200 bg-slate-100/80 p-1 gap-0.5">
            {([
              { id: "student"   as RoleType, icon: GraduationCap, label: "Student" },
              { id: "college"   as RoleType, icon: Building2,     label: "College" },
              { id: "recruiter" as RoleType, icon: Briefcase,     label: "Recruiter" },
            ]).map(({ id, icon: Icon, label }) => (
              <button key={id} onClick={() => handleRoleChange(id)}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${activeRole === id ? "bg-white text-blue-600 shadow-sm" : "text-slate-600 hover:text-slate-900"}`}>
                <Icon className="h-3.5 w-3.5" /><span>{label}</span>
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2.5">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input type="text" placeholder="Quick search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                className="h-8 pl-9 pr-4 text-xs rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 w-48 xl:w-56 transition-all" />
            </div>

            {/* Bell */}
            <div className="relative" ref={notifRef}>
              <button onClick={() => setNotifOpen(!notifOpen)} className="relative flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                </span>
              </button>
              {notifOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl z-50">
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                    <span className="text-xs font-black text-slate-900">Notifications</span>
                    <span className="rounded-full bg-blue-50 text-blue-700 px-2 py-0.5 text-[10px] font-black">3 New</span>
                  </div>
                  <div className="mt-2.5 space-y-2">
                    {[
                      { title: "Interview Invitation! 🎉", body: "Google Cloud Partner: Round 2 — Tomorrow 3 PM.", bg: "bg-blue-50/80 border-blue-100" },
                      { title: "Resume Parsed (94% Fit)", body: "Your skills matched 6 new jobs in Bengaluru & Hyderabad.", bg: "bg-emerald-50/80 border-emerald-100" },
                      { title: "Victory College Inquiry", body: "Admissions sent you the 2026 Placement Brochure.", bg: "bg-slate-50 border-slate-100" },
                    ].map((n, i) => (
                      <div key={i} className={`rounded-xl border p-2.5 text-xs ${n.bg}`}>
                        <p className="font-bold text-slate-900">{n.title}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">{n.body}</p>
                      </div>
                    ))}
                  </div>
                  <button className="mt-3 w-full rounded-xl border border-slate-200 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors">View all notifications</button>
                </div>
              )}
            </div>

            {/* User card */}
            <div className="relative" ref={userMenuRef}>
              <button
                type="button"
                onClick={() => setUserMenuOpen((prev) => !prev)}
                className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 px-2 py-1.5 shadow-sm transition-colors hover:bg-slate-100"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 text-[10px] font-black text-white shadow-sm">
                  {currentUser ? currentUser.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase() : (activeRole === "student" ? "AK" : activeRole === "college" ? "VC" : "RD")}
                </div>
                <div className="hidden md:block text-left min-w-0">
                  <p className="text-[10px] font-black text-slate-900 leading-none truncate max-w-[120px]">
                    {currentUser?.name || (activeRole === "student" ? "Amit Kumar" : activeRole === "college" ? "Victory College" : "Radiant HR")}
                  </p>
                  <p className="text-[9px] text-slate-500 mt-0.5 truncate max-w-[120px]">
                    {currentUser?.email || (activeRole === "student" ? "amit@campuspe.in" : activeRole === "college" ? "admin@victorycollege.edu" : "hr@radiant.io")}
                  </p>
                </div>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 z-50 mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
                  <div className="border-b border-slate-100 pb-3">
                    <p className="text-sm font-black text-slate-900">
                      {currentUser?.name || (activeRole === "student" ? "Amit Kumar" : activeRole === "college" ? "Victory College" : "Radiant HR")}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500 break-all">
                      {currentUser?.email || (activeRole === "student" ? "amit@campuspe.in" : activeRole === "college" ? "admin@victorycollege.edu" : "hr@radiant.io")}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-2 text-[11px] font-bold text-red-600 transition-colors hover:bg-red-100"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    Logout
                  </button>
                </div>
              )}
            </div>

            <Link href="/" className="hidden sm:flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all">
              <ArrowLeft className="h-3.5 w-3.5" /> Home
            </Link>
          </div>
        </div>

        {/* Mobile role tabs */}
        <div className="flex md:hidden border-t border-slate-100 bg-slate-50/80 overflow-x-auto gap-1.5 px-3 py-2">
          {([
            { id: "student"   as RoleType, label: "🎓 Student" },
            { id: "college"   as RoleType, label: "🏛️ College" },
            { id: "recruiter" as RoleType, label: "💼 Recruiter" },
          ]).map(({ id, label }) => (
            <button key={id} onClick={() => handleRoleChange(id)}
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold transition-all ${activeRole === id ? "bg-blue-600 text-white" : "bg-white border border-slate-200 text-slate-700"}`}>
              {label}
            </button>
          ))}
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar role={activeRole} activeNav={activeNav} onNav={setActiveNav} collapsed={sidebarCollapsed} userName={currentUser?.name} />

      {/* Main content */}
      <main className={`transition-all duration-300 ${sw} pt-16 min-h-screen`}>
        {/* Breadcrumb */}
        <div className="sticky top-16 z-20 border-b border-slate-100 bg-white/90 backdrop-blur-sm px-6 py-2.5 flex items-center gap-2 text-xs text-slate-500">
          <GraduationCap className="h-3.5 w-3.5 text-slate-400" />
          <span>CampusPe</span>
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-slate-700 capitalize">
            {activeRole === "student" ? "Student Dashboard" : activeRole === "college" ? "College Admin" : "Recruiter Hub"}
          </span>
          <ChevronRight className="h-3 w-3" />
          <span className="font-semibold text-blue-600 capitalize">{activeNav}</span>
        </div>

        <div className="px-6 py-6 max-w-6xl mx-auto">
          <div key={`${activeRole}-${activeNav}`} className="animate-in fade-in duration-200">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}
