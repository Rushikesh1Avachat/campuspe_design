"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  FileText,
  ExternalLink,
  CheckCircle2,
  Lock,
  Building2,
  Users,
  Briefcase,
  AlertCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import {
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  YoutubeIcon,
  WhatsappIcon,
} from "@/components/icons/SocialIcons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export interface FooterProps {
  onOpenWaitlist?: (category: "college" | "employer" | "student") => void;
  onOpenAuth?: (mode: "signin" | "signup") => void;
  onOpenScheduleCall?: () => void;
  onOpenWhatsApp?: () => void;
}

type PolicyTab =
  | "privacy"
  | "terms"
  | "refund"
  | "cookies"
  | "grievance"
  | "disclaimer";

export function Footer({
  onOpenWaitlist,
  onOpenAuth,
  onOpenScheduleCall,
  onOpenWhatsApp,
}: FooterProps) {
  const currentYear = 2026;
  const [activePolicyModal, setActivePolicyModal] = useState<PolicyTab | null>(
    null
  );

  const policyTitles: Record<PolicyTab, string> = {
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    refund: "Refund & Cancellation Policy",
    cookies: "Cookie Policy",
    grievance: "Grievance Redressal Mechanism",
    disclaimer: "Job & Internship Disclaimer",
  };

  return (
    <footer className="border-t border-slate-200 bg-[#F9FBFE] pt-16 pb-12 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Brand Column + 5 Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-200">
          {/* Brand Info & Direct Contacts */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0070F3] text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Campus<span className="text-[#0070F3]">Pe</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              From choosing a college to finding your next opportunity. CampusPe
              connects students, colleges, and employers in one trusted ecosystem.
            </p>

            {/* Contact Box with verified badge */}
            <div className="mt-4 rounded-xl border border-slate-200/80 bg-white p-3.5 space-y-2.5 text-xs shadow-2xs max-w-sm">
              <a
                href="mailto:contactus@campuspe.com"
                className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 transition-colors group"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span className="font-medium">contactus@campuspe.com</span>
              </a>

              <a
                href="tel:+916392666464"
                className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 transition-colors group"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span className="font-medium">+91 6392666464</span>
              </a>

              {/* Status pill */}
              <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5 font-medium text-emerald-600">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  <span>All Systems Operational</span>
                </div>
                <span className="text-slate-400">HQ • India</span>
              </div>
            </div>
          </div>

          {/* Links 5-Column Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-5 gap-6">
            {/* Column 1: For Students */}
            <div>
              <div className="flex items-center gap-1.5 mb-3 text-slate-900">
                <Users className="h-3.5 w-3.5 text-blue-600" />
                <h5 className="text-xs font-bold uppercase tracking-wider">
                  For Students
                </h5>
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="#colleges"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Explore Colleges
                  </a>
                </li>
                <li>
                  <a
                    href="#opportunity-feed"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Find Opportunities
                  </a>
                </li>
                <li>
                  <a
                    href="#opportunity-feed"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Internships
                  </a>
                </li>
                <li>
                  <a
                    href="#opportunity-feed"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Full-Time Jobs
                  </a>
                </li>
                <li>
                  <a
                    href="#opportunity-feed"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Part-Time & Gig
                  </a>
                </li>
                <li>
                  <a
                    href="#app-showcase"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Application Tracker
                  </a>
                </li>
                <li>
                  <a
                    href="#resume-upload"
                    className="hover:text-blue-600 transition-colors inline-flex items-center gap-1 text-blue-600 font-medium"
                  >
                    <span>AI Resume Scan</span>
                    <Sparkles className="h-2.5 w-2.5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: For Colleges */}
            <div>
              <div className="flex items-center gap-1.5 mb-3 text-slate-900">
                <Building2 className="h-3.5 w-3.5 text-indigo-600" />
                <h5 className="text-xs font-bold uppercase tracking-wider">
                  For Colleges
                </h5>
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() =>
                      onOpenWaitlist
                        ? onOpenWaitlist("college")
                        : (window.location.hash = "colleges")
                    }
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    List Your College
                  </button>
                </li>
                <li>
                  <a
                    href="#colleges"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Admissions Suite
                  </a>
                </li>
                <li>
                  <a
                    href="#colleges"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Fee Collection
                  </a>
                </li>
                <li>
                  <a
                    href="#colleges"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Placement Portal
                  </a>
                </li>
                <li>
                  <a
                    href="#colleges"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Campus ERP
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: For Employers */}
            <div>
              <div className="flex items-center gap-1.5 mb-3 text-slate-900">
                <Briefcase className="h-3.5 w-3.5 text-sky-600" />
                <h5 className="text-xs font-bold uppercase tracking-wider">
                  For Employers
                </h5>
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() =>
                      onOpenWaitlist
                        ? onOpenWaitlist("employer")
                        : (window.location.hash = "employers")
                    }
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Post a Job
                  </button>
                </li>
                <li>
                  <a
                    href="#employers"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Find Talent
                  </a>
                </li>
                <li>
                  <a
                    href="#employers"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Campus Hiring
                  </a>
                </li>
                <li>
                  <a
                    href="#employers"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Verified Shortlists
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Company
              </h5>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="#about"
                    className="hover:text-blue-600 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <button
                    onClick={() =>
                      onOpenScheduleCall
                        ? onOpenScheduleCall()
                        : (window.location.href = "mailto:contactus@campuspe.com")
                    }
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <a
                    href="#blogs"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Blogs & News
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
                  >
                    <span>Careers</span>
                    <span className="rounded-full bg-emerald-50 px-1.5 py-0.2 text-[9px] font-semibold text-emerald-600 border border-emerald-200">
                      Hiring
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: Legal & Policies */}
            <div>
              <div className="flex items-center gap-1.5 mb-3 text-slate-900">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
                <h5 className="text-xs font-bold uppercase tracking-wider">
                  Legal & Policies
                </h5>
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => setActivePolicyModal("privacy")}
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicyModal("terms")}
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicyModal("refund")}
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Refund & Cancellation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicyModal("cookies")}
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Cookie Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicyModal("grievance")}
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Grievance Redressal
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePolicyModal("disclaimer")}
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Job Disclaimer
                  </button>
                </li>
                <li className="pt-1">
                  <button
                    onClick={() => setActivePolicyModal("privacy")}
                    className="font-bold text-[#0070F3] hover:underline flex items-center gap-1"
                  >
                    <span>View all policies</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </li>
              </ul>
              <p className="mt-3 text-[10px] text-slate-400 leading-tight">
                Separate user, institution and employer terms can live inside the
                Full Policies page.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          {/* Left copyright and quick legal links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-center sm:text-left justify-center sm:justify-start">
            <span>© {currentYear} CampusPe Technologies Pvt. Ltd.</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <button
              onClick={() => setActivePolicyModal("privacy")}
              className="hover:text-slate-900 transition-colors"
            >
              Privacy
            </button>
            <span className="text-slate-300">•</span>
            <button
              onClick={() => setActivePolicyModal("terms")}
              className="hover:text-slate-900 transition-colors"
            >
              Terms
            </button>
            <span className="text-slate-300">•</span>
            <button
              onClick={() => setActivePolicyModal("grievance")}
              className="hover:text-slate-900 transition-colors"
            >
              Grievance
            </button>
          </div>

          {/* Right section: Audience labels + Lucide Social Icons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="text-[11px] font-semibold text-slate-400 hidden lg:inline tracking-wide">
              • Students • Colleges • Employers
            </span>

            {/* Social Icons with Lucide React outline style and smooth hover states */}
            <div className="flex items-center gap-2">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-500 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/20"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedinIcon
                  size={16}
                  strokeWidth={2}
                  className="transition-transform group-hover:scale-110"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-500 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10 hover:text-[#E4405F] hover:shadow-xs focus:outline-none focus:ring-2 focus:ring-[#E4405F]/20"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon
                  size={16}
                  strokeWidth={2}
                  className="transition-transform group-hover:scale-110"
                />
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-500 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-900/40 hover:bg-slate-900/10 hover:text-slate-900 hover:shadow-xs focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                aria-label="X (Twitter)"
                title="X (Twitter)"
              >
                <TwitterIcon
                  size={16}
                  strokeWidth={2}
                  className="transition-transform group-hover:scale-110"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-500 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:shadow-xs focus:outline-none focus:ring-2 focus:ring-[#1877F2]/20"
                aria-label="Facebook"
                title="Facebook"
              >
                <FacebookIcon
                  size={16}
                  strokeWidth={2}
                  className="transition-transform group-hover:scale-110"
                />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-500 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10 hover:text-[#FF0000] hover:shadow-xs focus:outline-none focus:ring-2 focus:ring-[#FF0000]/20"
                aria-label="YouTube"
                title="YouTube"
              >
                <YoutubeIcon
                  size={16}
                  strokeWidth={2}
                  className="transition-transform group-hover:scale-110"
                />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/916392666464"
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-500 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:text-[#25D366] hover:shadow-xs focus:outline-none focus:ring-2 focus:ring-[#25D366]/20"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <WhatsappIcon
                  size={16}
                  strokeWidth={2}
                  className="transition-transform group-hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Policy Details Modal */}
      <Dialog
        open={Boolean(activePolicyModal)}
        onOpenChange={(open) => !open && setActivePolicyModal(null)}
      >
        <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-hidden flex flex-col p-0">
          <DialogHeader className="p-6 pb-4 border-b border-slate-100 bg-slate-50/70">
            <div className="flex items-center gap-2 text-blue-600 mb-1">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                CampusPe Compliance & Legal
              </span>
            </div>
            <DialogTitle className="text-xl font-bold text-slate-900">
              {activePolicyModal ? policyTitles[activePolicyModal] : "Policies"}
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              Last updated: October 2026 • Compliant with Indian IT Rules & DPDP Act
            </DialogDescription>
          </DialogHeader>

          {/* Quick tab switcher within the dialog */}
          <div className="flex items-center gap-1.5 overflow-x-auto px-6 py-2.5 bg-white border-b border-slate-100 text-xs scrollbar-none">
            {(
              [
                "privacy",
                "terms",
                "refund",
                "cookies",
                "grievance",
                "disclaimer",
              ] as PolicyTab[]
            ).map((tab) => (
              <button
                key={tab}
                onClick={() => setActivePolicyModal(tab)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors ${
                  activePolicyModal === tab
                    ? "bg-blue-50 text-blue-700 border border-blue-200/70 shadow-2xs"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {policyTitles[tab]}
              </button>
            ))}
          </div>

          {/* Scrollable Policy Body */}
          <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {activePolicyModal === "privacy" && (
              <>
                <h4 className="font-semibold text-slate-900 text-sm">
                  1. Information We Collect
                </h4>
                <p>
                  CampusPe collects information to provide better services to students,
                  higher education institutions, and verified employers. This includes
                  academic credentials, contact identifiers, placement data, and resume
                  documents uploaded for AI parsing.
                </p>
                <h4 className="font-semibold text-slate-900 text-sm">
                  2. Use of Personal Data & DPDP Compliance
                </h4>
                <p>
                  In compliance with the Digital Personal Data Protection (DPDP) Act
                  2023, student records are strictly encrypted in transit (TLS 1.3) and
                  at rest (AES-256). Data is only shared with authorized recruiters
                  upon student application or explicit consent.
                </p>
                <h4 className="font-semibold text-slate-900 text-sm">
                  3. User Control & Data Deletion
                </h4>
                <p>
                  Users may request a copy of their personal data or request permanent
                  erasure by emailing{" "}
                  <a
                    href="mailto:privacy@campuspe.com"
                    className="text-blue-600 underline font-medium"
                  >
                    privacy@campuspe.com
                  </a>
                  .
                </p>
              </>
            )}

            {activePolicyModal === "terms" && (
              <>
                <h4 className="font-semibold text-slate-900 text-sm">
                  1. Acceptance of Terms
                </h4>
                <p>
                  By accessing or registering on CampusPe, you agree to be bound by
                  these Terms and Conditions, governing interactions between
                  institutions, recruiters, and student applicants.
                </p>
                <h4 className="font-semibold text-slate-900 text-sm">
                  2. Verified Institutional & Recruiter Profiles
                </h4>
                <p>
                  Colleges and recruiters must pass identity verification before
                  posting job offers or admissions listings. CampusPe reserves the
                  right to suspend non-compliant accounts.
                </p>
                <h4 className="font-semibold text-slate-900 text-sm">
                  3. Prohibited Practices
                </h4>
                <p>
                  Misrepresentation of qualifications, scam solicitations, charging
                  unlawful application fees from students, or scraping platform data is
                  strictly prohibited.
                </p>
              </>
            )}

            {activePolicyModal === "refund" && (
              <>
                <h4 className="font-semibold text-slate-900 text-sm">
                  1. Subscription Services & Fee Collection
                </h4>
                <p>
                  Colleges using CampusPe fee collection suites or employers
                  purchasing hiring credits are eligible for refunds if services are
                  unfulfilled or technical errors occur during processing.
                </p>
                <h4 className="font-semibold text-slate-900 text-sm">
                  2. 7-Day Refund Policy
                </h4>
                <p>
                  Refund requests initiated within 7 calendar days of an erroneous
                  transaction will be evaluated and disbursed within 5–7 business
                  days via the original payment method.
                </p>
              </>
            )}

            {activePolicyModal === "cookies" && (
              <>
                <h4 className="font-semibold text-slate-900 text-sm">
                  1. Necessary & Session Cookies
                </h4>
                <p>
                  We utilize lightweight essential cookies to maintain secure
                  authentication sessions, preserve waitlist preferences, and remember
                  modal dismissals.
                </p>
                <h4 className="font-semibold text-slate-900 text-sm">
                  2. Analytics & Performance
                </h4>
                <p>
                  Anonymized performance cookies help us measure user engagement with
                  job feeds and college exploration filters to improve user experience.
                </p>
              </>
            )}

            {activePolicyModal === "grievance" && (
              <>
                <h4 className="font-semibold text-slate-900 text-sm">
                  Grievance Officer Appointment
                </h4>
                <p>
                  Pursuant to the Information Technology (Intermediary Guidelines and
                  Digital Media Ethics Code) Rules, 2021, the contact details of the
                  designated Grievance Officer are:
                </p>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 space-y-1 text-xs">
                  <p className="font-semibold text-slate-900">
                    CampusPe Grievance Redressal Cell
                  </p>
                  <p>CampusPe Technologies Pvt. Ltd.</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:grievance@campuspe.com"
                      className="text-blue-600 underline font-medium"
                    >
                      grievance@campuspe.com
                    </a>
                  </p>
                  <p>Phone: +91 6392666464</p>
                  <p>Resolution Timeline: Acknowledgment within 24h, resolution within 15 days.</p>
                </div>
              </>
            )}

            {activePolicyModal === "disclaimer" && (
              <>
                <h4 className="font-semibold text-slate-900 text-sm">
                  Job & Internship Authenticity Notice
                </h4>
                <p>
                  CampusPe conducts automated and manual verifications of employer
                  profiles. However, students are advised never to pay any sum of money
                  to any employer requesting fees for interviews, training materials,
                  or job guarantees.
                </p>
                <p>
                  If you encounter any suspicious listing, please immediately report it
                  to{" "}
                  <a
                    href="mailto:contactus@campuspe.com"
                    className="text-blue-600 underline font-medium"
                  >
                    contactus@campuspe.com
                  </a>
                  .
                </p>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
