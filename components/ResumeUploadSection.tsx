"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import confetti from "canvas-confetti";
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  Sparkles,
  Search,
  Check,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Loader2,
} from "lucide-react";

export function ResumeUploadSection() {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "analyzed">("idle");
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileProcess = (file: File) => {
    setFileName(file.name);
    setUploadStatus("uploading");
    setAnalysisProgress(15);

    const step1 = setTimeout(() => setAnalysisProgress(50), 400);
    const step2 = setTimeout(() => setAnalysisProgress(85), 900);
    const step3 = setTimeout(() => {
      setAnalysisProgress(100);
      setUploadStatus("analyzed");
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch {
        // Fallback gracefully
      }
    }, 1400);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
    };
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileProcess(e.target.files[0]);
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-blue-50/70 blur-3xl -z-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Pill Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold text-blue-700">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>TRY IT LIVE • v2.4 AI Engine</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="mt-5 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Upload your resume. <br />
            <span className="text-[#0070F3]">Find jobs that fit.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across 1,000+ sources.
          </p>
        </div>

        {/* Upload Container with floating pills */}
        <div className="mt-12 relative max-w-3xl mx-auto">
          {/* Floating Pill Top Left: 95% Match Rate */}
          <div className="hidden sm:flex absolute -top-5 -left-4 z-20 items-center gap-2 rounded-2xl border border-blue-100 bg-white px-3.5 py-2 shadow-lg shadow-blue-500/5 animate-float-slow">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold text-xs">
              95%
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Match Rate</p>
              <p className="text-[10px] text-slate-500">AI semantic match</p>
            </div>
          </div>

          {/* Floating Pill Top Right: ATS Compliant */}
          <div className="hidden sm:flex absolute -top-5 -right-4 z-20 items-center gap-2 rounded-2xl border border-emerald-100 bg-white px-3.5 py-2 shadow-lg shadow-emerald-500/5 animate-float-delay">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">ATS Compliant</p>
              <p className="text-[10px] text-slate-500">Recruiter-level parser</p>
            </div>
          </div>

          {/* Dropzone Box */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`cursor-pointer rounded-3xl border-2 border-dashed p-8 sm:p-12 text-center transition-all duration-300 relative bg-gradient-to-b from-white to-slate-50/50 ${
              isDragging
                ? "border-[#0070F3] bg-blue-50/40 scale-[1.01]"
                : "border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5"
            }`}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleInputChange}
              accept=".pdf,.doc,.docx"
              className="hidden"
            />

            {uploadStatus === "idle" && (
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  <UploadCloud className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Upload your resume</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-md">
                  PDF, DOC, or DOCX • Up to 10MB • We&apos;ll use it to understand your skills and experience.
                </p>

                <div className="mt-5">
                  <Button
                    type="button"
                    className="rounded-full bg-[#0070F3] hover:bg-blue-600 text-white font-medium px-6 shadow-sm"
                  >
                    <span>Upload resume</span>
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Button>
                </div>

                <p className="mt-4 text-xs text-slate-400">or drag and drop your file here</p>

                <div className="mt-4 flex items-center gap-2">
                  <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                    PDF
                  </span>
                  <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                    DOC
                  </span>
                  <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                    DOCX
                  </span>
                </div>
              </div>
            )}

            {uploadStatus === "uploading" && (
              <div className="py-4 flex flex-col items-center">
                <Loader2 className="h-10 w-10 text-[#0070F3] animate-spin mb-3" />
                <h3 className="text-lg font-bold text-slate-900">Parsing & Analyzing Resume...</h3>
                <p className="text-xs text-slate-500 mt-1">{fileName}</p>

                <div className="w-full max-w-xs bg-slate-100 rounded-full h-2.5 mt-4 overflow-hidden">
                  <div
                    className="bg-[#0070F3] h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${analysisProgress}%` }}
                  />
                </div>
                <p className="text-xs text-blue-600 font-semibold mt-2">
                  Matching against 1,000+ sources...
                </p>
              </div>
            )}

            {uploadStatus === "analyzed" && (
              <div className="py-3 flex flex-col items-center animate-in zoom-in-95 duration-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Resume Analyzed Successfully!</h3>
                <p className="text-xs text-slate-600 mt-1 max-w-sm">
                  We identified <strong className="text-blue-600">14 matching skills</strong> and found{" "}
                  <strong className="text-emerald-600">28 matching jobs & internships</strong>.
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium">
                    React & Next.js
                  </span>
                  <span className="rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium">
                    TypeScript
                  </span>
                  <span className="rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium">
                    UI/UX Design
                  </span>
                  <span className="rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium">
                    REST APIs
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById("opportunity-feed")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 text-xs shadow-sm"
                  >
                    View Matched Roles →
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      setUploadStatus("idle");
                      setFileName(null);
                    }}
                    className="rounded-full text-xs"
                  >
                    Upload Another
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* 4 Feature Badges Under Upload Box */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 shadow-2xs">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shrink-0">
                <Check className="h-3.5 w-3.5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-800 leading-none">Resume analyzed</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Ready in 4s</p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 shadow-2xs">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 shrink-0">
                <Cpu className="h-3.5 w-3.5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-800 leading-none">Skills matched</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Deep Taxonomy</p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 shadow-2xs">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600 shrink-0">
                <Layers className="h-3.5 w-3.5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-800 leading-none">Experience matched</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Relevance scoring</p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 shadow-2xs">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600 shrink-0">
                <Search className="h-3.5 w-3.5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-800 leading-none">1,000+ sources</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Real-time aggregators</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
