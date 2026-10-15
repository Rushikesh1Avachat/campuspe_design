"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, ChevronRight } from "lucide-react";

interface NavbarProps {
  onOpenWaitlist?: (type: "student" | "college" | "employer") => void;
  onOpenAuth?: (mode: "signin" | "signup") => void;
}

export function Navbar({ onOpenWaitlist, onOpenAuth }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Colleges", href: "#colleges" },
    { name: "Employers", href: "#employers" },
    { name: "Jobs", href: "#opportunity-feed" },
    { name: "Blogs", href: "#app-showcase" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Campus<span className="text-[#0070F3]">Pe</span>
            </span>
            <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-600"></span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-[#0070F3] relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0070F3] hover:after:w-full after:transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            onClick={() => onOpenAuth?.("signin")}
            className="text-[15px] font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/60"
          >
            Sign In
          </Button>
          <Button
            onClick={() => onOpenAuth?.("signup")}
            className="rounded-full bg-[#0070F3] px-6 text-[15px] font-medium text-white shadow-sm hover:bg-blue-600 hover:shadow-md hover:shadow-blue-500/20 transition-all active:scale-95"
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 pt-2 pb-6 md:hidden animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="flex flex-col space-y-3 pt-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              >
                <span>{link.name}</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <Button
              variant="outline"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth?.("signin");
              }}
              className="w-full justify-center"
            >
              Sign In
            </Button>
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth?.("signup");
              }}
              className="w-full justify-center bg-[#0070F3] hover:bg-blue-600 text-white"
            >
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
