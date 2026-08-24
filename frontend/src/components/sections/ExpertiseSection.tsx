"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { RedButton } from "../ui/RedButton";

export function ExpertiseSection({ onOpenModal }: { onOpenModal: (tab: "employer" | "jobseeker") => void }) {
  return (
    <section className="relative py-28 md:py-36 bg-[#0E0E0E] text-white overflow-hidden select-none border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#A71728]" />
            <span>08 — BILATERAL EXPERTISE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-[0.95] text-white">
            OUR EXPERTISE
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-light tracking-wide max-w-xl mx-auto">
            Deep domain knowledge tailored specifically for institutional employers and ambitious career seekers.
          </p>
        </div>

        {/* 2-Column Comparative Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Column 1: Employers */}
          <div className="bg-[#141414] border border-white/10 p-8 md:p-12 space-y-8 flex flex-col justify-between group hover:border-[#A71728] transition-colors duration-500">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-bold tracking-[0.2em] text-[#A71728] uppercase">
                  FOR ENTERPRISES
                </span>
                <span className="text-xs text-white/40 uppercase tracking-widest">
                  Talent Acquisition
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight uppercase leading-tight text-white">
                RIGHT TALENT. <br />
                RIGHT CULTURE. <br />
                <span className="text-[#A71728]">RIGHT FUTURE.</span>
              </h3>

              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Kawaii Japan deeply comprehends that organizational velocity is bound to cultural compatibility. We analyze your corporate DNA, project milestones, and leadership style to deliver high-performing professionals ready to create immediate impact.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs text-white/80 font-light">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728]" />
                  <span>Strategic Japanese headhunting & mapping</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728]" />
                  <span>Bilingual technical and executive talent pools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728]" />
                  <span>3-tier competency & cultural alignment screening</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10">
              <button
                onClick={() => onOpenModal("employer")}
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#A71728] transition-colors"
              >
                <span>Hire Through Kawaii Japan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Job Seekers */}
          <div className="bg-[#141414] border border-white/10 p-8 md:p-12 space-y-8 flex flex-col justify-between group hover:border-[#A71728] transition-colors duration-500">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-bold tracking-[0.2em] text-[#A71728] uppercase">
                  FOR PROFESSIONALS
                </span>
                <span className="text-xs text-white/40 uppercase tracking-widest">
                  Career Advancement
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight uppercase leading-tight text-white">
                RIGHT SKILLS. <br />
                RIGHT OPPORTUNITY. <br />
                <span className="text-white">RIGHT CAREER.</span>
              </h3>

              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                We believe your talent deserves international recognition. We provide end-to-end mentorship, structured interview coaching, and transparent compensation negotiations that position you directly in front of premier corporate leaders.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs text-white/80 font-light">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728]" />
                  <span>Exclusive access to unadvertised corporate positions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728]" />
                  <span>Japanese corporate etiquette & interview training</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728]" />
                  <span>Transparent contracts with zero placement fees for candidates</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10">
              <button
                onClick={() => onOpenModal("jobseeker")}
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#A71728] transition-colors"
              >
                <span>Find Your Next Opportunity</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
