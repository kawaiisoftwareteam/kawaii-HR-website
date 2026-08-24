"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, UserCheck, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { RedButton } from "../ui/RedButton";

export function JobSeekerFocus({ onOpenModal }: { onOpenModal: (tab: "employer" | "jobseeker") => void }) {
  const benefits = [
    {
      title: "Career Matching",
      desc: "Direct pairing with verified multinational employers matching your true technical skill caliber.",
      icon: Briefcase,
    },
    {
      title: "CV & Portfolio Enhancement",
      desc: "Comprehensive resume restructuring aligned with Japanese and international executive standards.",
      icon: GraduationCap,
    },
    {
      title: "Rigorous Interview Preparation",
      desc: "One-on-one mock interviews, technical debriefs, and Japanese corporate etiquette coaching.",
      icon: UserCheck,
    },
    {
      title: "Continuous Post-Placement Support",
      desc: "Ongoing mentorship and career progression advocacy throughout your professional tenure.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="job-seekers" className="relative py-28 md:py-36 bg-[#FFFFFF] text-[#111111] overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Professional Portrait Frame (45% of width) */}
          <div className="lg:col-span-5 relative" data-cursor="image">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl bg-black">
              <Image
                src="/images/job_seeker_candidate.jpg"
                alt="Ambitious Professional in Tokyo Glass Office"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Float badge */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-[10px] tracking-widest uppercase font-bold text-[#A71728]">
                  VERIFIED CAREER PATHWAY
                </div>
                <div className="text-base font-bold uppercase tracking-tight">
                  Accelerate Your International Potential
                </div>
              </div>
            </div>

            {/* Red Border Shadow */}
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#A71728] -z-10 pointer-events-none hidden sm:block opacity-20" />
          </div>

          {/* Right Column: Structured Services & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#A71728]" />
                <span>07 — CANDIDATE ADVOCACY</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.92] text-black">
                FOR <br />
                <span className="text-[#A71728]">JOB SEEKERS.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed">
              We connect ambitious professionals with rewarding career milestones across top-tier Japanese enterprises and international institutions in Bangladesh.
            </p>

            {/* Structured 4-block capability matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="p-5 bg-gray-50 border border-gray-200 hover:border-[#A71728] transition-colors duration-300 space-y-2 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#A71728]/10 text-[#A71728] flex items-center justify-center group-hover:bg-[#A71728] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold uppercase text-black">
                      {b.title}
                    </h4>
                    <p className="text-xs text-gray-600 font-light leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <RedButton
                variant="primary"
                size="lg"
                onClick={() => onOpenModal("jobseeker")}
              >
                Explore Opportunities
              </RedButton>
              <RedButton
                variant="ghost"
                size="md"
                onClick={() => onOpenModal("jobseeker")}
              >
                Submit Your CV
              </RedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
