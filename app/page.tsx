"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
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

const SESSION_KEY = "campuspe_session";

type SessionUser = {
  name: string;
  username?: string;
  email: string;
  role: "student" | "college" | "recruiter";
};

export default function Home() {
  // Modal states
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);
  const [waitlistCategory, setWaitlistCategory] = useState<"college" | "employer" | "student" | null>(null);

  const [selectedOpportunity, setSelectedOpportunity] = useState<any | null>(null);
  const [scheduleCallOpen, setScheduleCallOpen] = useState(false);
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup");
  const [currentUser, setCurrentUser] = useState<SessionUser | null>(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const layeredGlowY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const layeredGlowY2 = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const layeredGlowY3 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(SESSION_KEY);
      if (savedUser) {
        setCurrentUser(JSON.parse(savedUser) as SessionUser);
      }
    } catch {
      // no-op for localStorage access issues in restricted environments
    }
  }, []);

  // Handlers
  const handleOpenWaitlist = (category: "college" | "employer" | "student") => {
    setWaitlistCategory(category);
    setWaitlistModalOpen(true);
  };

  const handleOpenAuth = (mode: "signin" | "signup") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleAuthSuccess = (user: SessionUser) => {
    setCurrentUser(user);
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    setAuthModalOpen(false);
    router.push("/dashboard");
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFCFF] text-slate-900">
      <motion.div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-[-8%] top-[8%] h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-blue-200/60 via-cyan-100/40 to-transparent blur-3xl"
          style={{ y: layeredGlowY }}
        />
        <motion.div
          className="absolute right-[-6%] top-[18%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-violet-200/50 via-indigo-100/30 to-transparent blur-3xl"
          style={{ y: layeredGlowY2 }}
        />
        <motion.div
          className="absolute bottom-[8%] left-[20%] h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-emerald-200/40 via-teal-100/30 to-transparent blur-3xl"
          style={{ y: layeredGlowY3 }}
        />
      </motion.div>

      {/* Navigation Bar */}
      <Navbar
        onOpenWaitlist={handleOpenWaitlist}
        onOpenAuth={handleOpenAuth}
      />

      <motion.main
        className="relative flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <HeroSection
            onJoinWaitlist={handleOpenWaitlist}
            onExploreJobs={() => handleScrollToSection("opportunity-feed")}
            onOpenWhatsAppModal={() => setWhatsAppModalOpen(true)}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <OpportunityFeedSection
            onSelectOpportunity={(item) => setSelectedOpportunity(item)}
            onExploreMore={() => handleScrollToSection("opportunity-feed")}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          <ResumeUploadSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <ForCollegesSection
            onListCollege={() => handleOpenWaitlist("college")}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <ForEmployersSection
            onPostJob={() => handleOpenWaitlist("employer")}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <AppInterfaceSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <SupportAndCtaSection
            onContactSupport={() => setScheduleCallOpen(true)}
            onScheduleCall={() => setScheduleCallOpen(true)}
            onExploreColleges={() => handleScrollToSection("colleges")}
            onFindOpportunities={() => handleScrollToSection("opportunity-feed")}
            onListCollege={() => handleOpenWaitlist("college")}
            onPostJob={() => handleOpenWaitlist("employer")}
          />
        </motion.div>
      </motion.main>

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
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}
