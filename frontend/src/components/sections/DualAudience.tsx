"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, User, CheckCircle2 } from "lucide-react";
import { RedButton } from "../ui/RedButton";

interface DualAudienceProps {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}

export function DualAudience({ onOpenModal }: DualAudienceProps) {
  const [hoveredPanel, setHoveredPanel] = useState<"employer" | "jobseeker" | null>(null);

  return (
    <section className="relative w-full bg-black text-white overflow-hidden select-none border-y border-white/10">
      <div className="flex flex-col lg:flex-row w-full min-h-[600px] lg:h-[750px]">
        {/* LEFT PANEL: FOR EMPLOYERS */}
        <div
          onMouseEnter={() => setHoveredPanel("employer")}
          onMouseLeave={() => setHoveredPanel(null)}
          onClick={() => onOpenModal("employer")}
          data-cursor="employer"
          className={`relative flex-1 group overflow-hidden cursor-pointer transition-all duration-700 ease-out border-b lg:border-b-0 lg:border-r border-white/15 p-8 sm:p-12 lg:p-16 flex flex-col justify-between ${hoveredPanel === "employer"
              ? "lg:flex-[1.4]"
              : hoveredPanel === "jobseeker"
                ? "lg:flex-[0.7]"
                : "lg:flex-1"
            }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full -z-20 overflow-hidden">
            <Image
              src="/images/japanese_office_team.jpg"
              alt="For Employers - Executive Corporate Team"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className={`object-cover object-center transition-all duration-1000 ease-out ${hoveredPanel === "employer" ? "scale-110 brightness-95" : "scale-100 brightness-50"
                }`}
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
            <div
              className={`absolute inset-0 bg-[#A71728]/15 transition-opacity duration-700 ${hoveredPanel === "employer" ? "opacity-100" : "opacity-0"
                }`}
            />
          </div>

          {/* Top Label */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              <Building2 className="w-4 h-4" />
              <span>04A — ENTERPRISE CLIENTS</span>
            </div>

            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#A71728] group-hover:bg-[#A71728] transition-all duration-500">
              <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Bottom Content Area */}
          <div className="relative z-10 space-y-6 pt-16 lg:pt-0">
            {/* Expanding Red Accent Line */}
            <div
              className={`h-[2px] bg-[#A71728] transition-all duration-700 ${hoveredPanel === "employer" ? "w-24" : "w-10"
                }`}
            />

            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-white/60 uppercase">
                FOR EMPLOYERS
              </span>
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[0.95] text-white group-hover:text-white">
                BUILD YOUR <br />
                <span className="text-[#A71728]">TEAM.</span>
              </h3>
            </div>

            <p className="text-sm sm:text-base text-white/80 max-w-md font-light leading-relaxed">
              Find reliable professionals who match your organization&apos;s requirements, culture and long-term goals.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-white group-hover:text-[#A71728] transition-colors">
                <span>Find Talent</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: FOR JOB SEEKERS */}
        <div
          onMouseEnter={() => setHoveredPanel("jobseeker")}
          onMouseLeave={() => setHoveredPanel(null)}
          onClick={() => onOpenModal("jobseeker")}
          data-cursor="jobseeker"
          className={`relative flex-1 group overflow-hidden cursor-pointer transition-all duration-700 ease-out p-8 sm:p-12 lg:p-16 flex flex-col justify-between ${hoveredPanel === "jobseeker"
              ? "lg:flex-[1.4]"
              : hoveredPanel === "employer"
                ? "lg:flex-[0.7]"
                : "lg:flex-1"
            }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full -z-20 overflow-hidden">
            <Image
              src="/images/job_seeker_candidate.jpg"
              alt="For Job Seekers - Candidate Career Growth"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className={`object-cover object-center transition-all duration-1000 ease-out ${hoveredPanel === "jobseeker" ? "scale-110 brightness-95" : "scale-100 brightness-50"
                }`}
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
            <div
              className={`absolute inset-0 bg-black/40 transition-opacity duration-700 ${hoveredPanel === "jobseeker" ? "opacity-100" : "opacity-0"
                }`}
            />
          </div>

          {/* Top Label */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              <User className="w-4 h-4" />
              <span>04B — CAREER ASPIRANTS</span>
            </div>

            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#A71728] group-hover:bg-[#A71728] transition-all duration-500">
              <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Bottom Content Area */}
          <div className="relative z-10 space-y-6 pt-16 lg:pt-0">
            {/* Expanding Red Accent Line */}
            <div
              className={`h-[2px] bg-[#A71728] transition-all duration-700 ${hoveredPanel === "jobseeker" ? "w-24" : "w-10"
                }`}
            />

            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-white/60 uppercase">
                FOR JOB SEEKERS
              </span>
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[0.95] text-white group-hover:text-white">
                BUILD YOUR <br />
                <span className="text-white">FUTURE.</span>
              </h3>
            </div>

            <p className="text-sm sm:text-base text-white/80 max-w-md font-light leading-relaxed">
              Discover meaningful opportunities that match your skills, interests and long-term career aspirations.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-white group-hover:text-[#A71728] transition-colors">
                <span>Find Your Career</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
