"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { OpportunityFeedSection } from "@/components/OpportunityFeedSection";
import { ResumeUploadSection } from "@/components/ResumeUploadSection";
import { ForCollegesSection } from "@/components/ForCollegesSection";
import { ForEmployersSection } from "@/components/ForEmployersSection";
import { AppInterfaceSection } from "@/components/AppInterfaceSection";
import { SupportAndCtaSection } from "@/components/SupportAndCtaSection";
import { Footer } from "@/components/Footer";
import {
  WaitlistModal,
  OpportunityDetailModal,
  ScheduleCallModal,
  WhatsAppModal,
  AuthModal,
} from "@/components/Modals";

export default function Home() {
  // Modal states
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);
  const [waitlistCategory, setWaitlistCategory] = useState<"college" | "employer" | "student" | null>(null);

  const [selectedOpportunity, setSelectedOpportunity] = useState<any | null>(null);
  const [scheduleCallOpen, setScheduleCallOpen] = useState(false);
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup");

  // Handlers
  const handleOpenWaitlist = (category: "college" | "employer" | "student") => {
    setWaitlistCategory(category);
    setWaitlistModalOpen(true);
  };

  const handleOpenAuth = (mode: "signin" | "signup") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFCFF]">
      {/* Navigation Bar */}
      <Navbar
        onOpenWaitlist={handleOpenWaitlist}
        onOpenAuth={handleOpenAuth}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onJoinWaitlist={handleOpenWaitlist}
          onExploreJobs={() => handleScrollToSection("opportunity-feed")}
          onOpenWhatsAppModal={() => setWhatsAppModalOpen(true)}
        />

        {/* Section 01: Opportunity Discovery */}
        <OpportunityFeedSection
          onSelectOpportunity={(item) => setSelectedOpportunity(item)}
          onExploreMore={() => handleScrollToSection("opportunity-feed")}
        />

        {/* AI Resume Upload Interactive Section */}
        <ResumeUploadSection />

        {/* Section 02: For Colleges */}
        <ForCollegesSection
          onListCollege={() => handleOpenWaitlist("college")}
        />

        {/* Section 03: For Employers */}
        <ForEmployersSection
          onPostJob={() => handleOpenWaitlist("employer")}
        />

        {/* Mobile App Showcase & Download Banner */}
        <AppInterfaceSection />

        {/* Support & Final Call-To-Action bar */}
        <SupportAndCtaSection
          onContactSupport={() => setScheduleCallOpen(true)}
          onScheduleCall={() => setScheduleCallOpen(true)}
          onExploreColleges={() => handleScrollToSection("colleges")}
          onFindOpportunities={() => handleScrollToSection("opportunity-feed")}
          onListCollege={() => handleOpenWaitlist("college")}
          onPostJob={() => handleOpenWaitlist("employer")}
        />
      </main>

      {/* Multi-column Footer */}
      <Footer
        onOpenWaitlist={handleOpenWaitlist}
        onOpenAuth={handleOpenAuth}
        onOpenScheduleCall={() => setScheduleCallOpen(true)}
        onOpenWhatsApp={() => setWhatsAppModalOpen(true)}
      />

      {/* Interactive Modals */}
      <WaitlistModal
        isOpen={waitlistModalOpen}
        onClose={() => setWaitlistModalOpen(false)}
        type={waitlistCategory}
      />

      <OpportunityDetailModal
        isOpen={Boolean(selectedOpportunity)}
        onClose={() => setSelectedOpportunity(null)}
        item={selectedOpportunity}
      />

      <ScheduleCallModal
        isOpen={scheduleCallOpen}
        onClose={() => setScheduleCallOpen(false)}
      />

      <WhatsAppModal
        isOpen={whatsAppModalOpen}
        onClose={() => setWhatsAppModalOpen(false)}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
      />
    </div>
  );
}
