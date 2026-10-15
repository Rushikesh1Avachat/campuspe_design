"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import confetti from "canvas-confetti";
import {
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  Send,
  MessageCircle,
  Building,
  GraduationCap,
  Briefcase,
  User,
  Mail,
  Phone,
} from "lucide-react";

// Waitlist Modal
export function WaitlistModal({
  isOpen,
  onClose,
  type,
}: {
  isOpen: boolean;
  onClose: () => void;
  type: "college" | "employer" | "student" | null;
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } catch {
      // Fallback
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail("");
    setName("");
    setOrganization("");
    onClose();
  };

  const titleText =
    type === "college"
      ? "Join the College Partner Network"
      : type === "employer"
      ? "Join the Employer & Recruiter Network"
      : "Join the Student Priority Access";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleReset()}>
      <DialogContent className="sm:max-w-md">
        {!isSubmitted ? (
          <div>
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  {type === "college" ? (
                    <Building className="h-4 w-4" />
                  ) : (
                    <Briefcase className="h-4 w-4" />
                  )}
                </span>
                <DialogTitle className="text-xl font-bold">{titleText}</DialogTitle>
              </div>
              <DialogDescription className="text-xs text-slate-500">
                Be the first to experience automated campus discovery, smart shortlisting, and direct candidate pipelines.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div>
                <label className="text-xs font-semibold text-slate-700">Your Full Name</label>
                <Input
                  required
                  placeholder="e.g. Dr. Ramesh Gupta"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700">Official Email</label>
                <Input
                  type="email"
                  required
                  placeholder="you@institution.edu or you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700">
                  {type === "college" ? "Institution Name" : "Company / Organization"}
                </label>
                <Input
                  required
                  placeholder={type === "college" ? "e.g. Bangalore Institute of Tech" : "e.g. Acme Tech Corp"}
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full rounded-full bg-[#0070F3] hover:bg-blue-600 text-white font-semibold py-2.5 shadow-md shadow-blue-500/20"
                >
                  <span>Request Early Access</span>
                  <Sparkles className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">You&apos;re on the priority list!</h3>
            <p className="mt-2 text-xs text-slate-600 max-w-xs mx-auto">
              Thank you, <strong>{name}</strong>! We sent a confirmation invite to{" "}
              <strong>{email}</strong>. Our partnership team will contact you shortly.
            </p>
            <div className="mt-6">
              <Button onClick={handleReset} className="rounded-full bg-slate-900 text-white px-6">
                Done
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Opportunity Detail / Application Modal
export function OpportunityDetailModal({
  isOpen,
  onClose,
  item,
}: {
  isOpen: boolean;
  onClose: () => void;
  item: any;
}) {
  const [applied, setApplied] = useState(false);

  if (!item) return null;

  const handleApply = () => {
    setApplied(true);
    try {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    } catch {
      // fallback
    }
  };

  const handleClose = () => {
    setApplied(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <DialogTitle className="text-lg font-bold">{item.title}</DialogTitle>
                <DialogDescription className="text-xs text-slate-500">
                  {item.location} • {item.mode} • {item.compensation}
                </DialogDescription>
              </div>
            </div>
            <Badge variant="pillBlue">{item.badge}</Badge>
          </div>
        </DialogHeader>

        {!applied ? (
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase text-slate-400">Overview</h4>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed">{item.description}</p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-3.5 space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Match score for your profile:</span>
                <span className="font-bold text-emerald-600">96% High Fit</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Estimated response time:</span>
                <span className="font-semibold text-slate-800">&lt; 24 Hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Requirements:</span>
                <span className="font-semibold text-slate-800">Freshers / Pre-final Year eligible</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <Button variant="outline" onClick={handleClose} className="rounded-full">
                Cancel
              </Button>
              <Button
                onClick={handleApply}
                className="rounded-full bg-[#0070F3] hover:bg-blue-600 text-white font-semibold px-6 shadow-sm"
              >
                <span>Submit 1-Click Application</span>
                <Send className="h-3.5 w-3.5 ml-2" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Application Submitted!</h4>
            <p className="mt-1 text-xs text-slate-600 max-w-xs mx-auto">
              Your application for <strong>{item.title}</strong> has been delivered. You will receive an alert on WhatsApp once shortlisted.
            </p>
            <div className="mt-5">
              <Button onClick={handleClose} className="rounded-full bg-slate-900 text-white px-6 text-xs">
                Close
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Schedule Call Modal
export function ScheduleCallModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [scheduled, setScheduled] = useState(false);

  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    setScheduled(true);
  };

  const handleClose = () => {
    setScheduled(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              <Calendar className="h-4 w-4" />
            </div>
            <DialogTitle className="text-lg font-bold">Schedule an Advisory Call</DialogTitle>
          </div>
          <DialogDescription className="text-xs text-slate-500">
            Talk directly with our campus placement and hiring specialists.
          </DialogDescription>
        </DialogHeader>

        {!scheduled ? (
          <form onSubmit={handleSchedule} className="mt-4 space-y-3">
            <div>
              <label className="text-xs font-semibold text-slate-700">Your Name</label>
              <Input required placeholder="Your full name" className="mt-1" />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700">Phone / WhatsApp Number</label>
              <Input required type="tel" placeholder="+91 98765 43210" className="mt-1" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-700">Preferred Date</label>
                <Input required type="date" defaultValue="2026-10-18" className="mt-1 text-xs" />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-700">Preferred Time</label>
                <Input required type="time" defaultValue="14:00" className="mt-1 text-xs" />
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full rounded-full bg-[#0070F3] hover:bg-blue-600 text-white font-semibold"
              >
                Confirm Call Booking
              </Button>
            </div>
          </form>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Call Scheduled!</h4>
            <p className="mt-1 text-xs text-slate-600">
              We added this appointment to our calendar. A calendar invite & reminder link have been sent to you.
            </p>
            <div className="mt-5">
              <Button onClick={handleClose} className="rounded-full bg-slate-900 text-white px-6 text-xs">
                Close
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// WhatsApp Alert Modal
export function WhatsAppModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [subscribed, setSubscribed] = useState(false);
  const [phone, setPhone] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubscribed(true);
    try {
      confetti({ particleCount: 50, spread: 50 });
    } catch {
      // fallback
    }
  };

  const handleClose = () => {
    setSubscribed(false);
    setPhone("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <DialogTitle className="text-lg font-bold">Get Instant WhatsApp Alerts</DialogTitle>
              <DialogDescription className="text-xs text-slate-500">
                Never miss admission deadlines, job matches or interview calls.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {!subscribed ? (
          <form onSubmit={handleSubscribe} className="mt-4 space-y-3">
            <div>
              <label className="text-xs font-semibold text-slate-700">Enter WhatsApp Number</label>
              <div className="mt-1 flex items-center">
                <span className="inline-flex h-10 items-center rounded-l-md border border-r-0 border-slate-300 bg-slate-100 px-3 text-xs font-semibold text-slate-600">
                  +91
                </span>
                <Input
                  required
                  type="tel"
                  placeholder="98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-l-none"
                />
              </div>
            </div>

            <div className="rounded-xl bg-emerald-50/60 p-3 text-xs text-emerald-800 space-y-1">
              <p className="font-semibold">✓ No spam guarantee</p>
              <p className="text-[11px] text-emerald-700">
                Only receive real matched jobs & updates corresponding to your preferences.
              </p>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 shadow-md shadow-emerald-500/20"
              >
                Enable WhatsApp Alerts
              </Button>
            </div>
          </form>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Alerts Activated!</h4>
            <p className="mt-1 text-xs text-slate-600">
              We just sent a verification greeting to <strong>+91 {phone}</strong>.
            </p>
            <div className="mt-5">
              <Button onClick={handleClose} className="rounded-full bg-slate-900 text-white px-6 text-xs">
                Awesome
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Auth Modal for Sign In / Sign Up
export function AuthModal({
  isOpen,
  onClose,
  mode,
}: {
  isOpen: boolean;
  onClose: () => void;
  mode: "signin" | "signup";
}) {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  const handleClose = () => {
    setSuccess(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {mode === "signup" ? "Create your CampusPe Account" : "Sign In to CampusPe"}
          </DialogTitle>
          <DialogDescription className="text-xs text-slate-500">
            {mode === "signup"
              ? "Join students, colleges, and recruiters connected 10X faster."
              : "Access your dashboard, applications, and saved opportunities."}
          </DialogDescription>
        </DialogHeader>

        {!success ? (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            {mode === "signup" && (
              <div>
                <label className="text-xs font-semibold text-slate-700">Full Name</label>
                <Input required placeholder="e.g. Rahul Verma" className="mt-1" />
              </div>
            )}
            <div>
              <label className="text-xs font-semibold text-slate-700">Email Address</label>
              <Input required type="email" placeholder="you@domain.com" className="mt-1" />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700">Password</label>
              <Input required type="password" placeholder="••••••••" className="mt-1" />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full rounded-full bg-[#0070F3] hover:bg-blue-600 text-white font-semibold py-2.5 shadow-sm"
              >
                {mode === "signup" ? "Get Started" : "Sign In"}
              </Button>
            </div>

            <div className="text-center text-[11px] text-slate-400 pt-1">
              Protected by industry standard encryption.
            </div>
          </form>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-[#0070F3] mb-3">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">
              {mode === "signup" ? "Account Created!" : "Welcome back!"}
            </h4>
            <p className="mt-1 text-xs text-slate-600">
              You are now connected to the CampusPe network.
            </p>
            <div className="mt-5">
              <Button onClick={handleClose} className="rounded-full bg-slate-900 text-white px-6 text-xs">
                Continue to Dashboard
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
