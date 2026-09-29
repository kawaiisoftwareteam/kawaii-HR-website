"use client";

import React from "react";
import { motion } from "framer-motion";
import { QA_RECRUITMENT_PIPELINE } from "@/data/companyData";
import { RedButton } from "../ui/RedButton";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export function ProcessSection({
  onOpenModal,
}: {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}) {
  return (
    <section id="process" className="relative overflow-hidden bg-white">
      {/* Top Wave Curve Transition */}
      <div className="w-full overflow-hidden leading-none pointer-events-none -mb-[1px]">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-20 md:h-24 fill-[#A71728]"
        >
          <path d="M0,0 C320,85 880,105 1440,20 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* Main Curved Section Body in System Brand Colors */}
      <div className="relative py-16 md:py-28 bg-gradient-to-br from-[#A71728] via-[#8E1321] to-[#3B070D] text-white overflow-hidden">
        {/* Ambient Lighting & Pattern Accents */}
        <div className="absolute inset-0 japanese-grid-pattern-dark opacity-15 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 pb-6 border-b border-white/15 space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#FFEAA7] uppercase bg-black/25 px-3 py-1 rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#FFEAA7] animate-pulse" />
              <span>Our Recruitment Process</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.98] text-white">
              A 4-Step Quality <br />
              <span className="text-[#FFEAA7]">Assurance Pipeline.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/90 font-light tracking-wide leading-relaxed">
              A structured recruitment process creates better outcomes for both employers and professionals. We bridge businesses and talent with rigor, predictability, and Japanese-standard operational discipline.
            </p>
          </div>

          {/* 4-Step Pipeline Grid - Exact System Color Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {QA_RECRUITMENT_PIPELINE.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="p-7 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[340px] relative overflow-hidden group"
              >
                {/* Subtle Japanese Watermark */}
                <div className="absolute -bottom-4 -right-4 text-white/5 font-mono font-black text-7xl select-none pointer-events-none group-hover:text-white/10 transition-colors">
                  0{idx + 1}
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between border-b border-white/15 pb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/30 border border-white/20 text-xs font-mono font-bold text-[#FFEAA7] tracking-wider uppercase">
                      STEP {step.step}
                    </span>
                    <span className="text-2xl font-black text-[#FFEAA7] font-mono">
                      0{idx + 1}/04
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-tight text-white leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#FFEAA7] font-mono tracking-wide mt-1">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-[13px] text-white/90 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3.5 mt-6 border-t border-white/15 bg-black/25 -mx-7 sm:-mx-8 -mb-7 sm:-mb-8 p-5 rounded-b-2xl relative z-10">
                  <div className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#FFEAA7] mb-0.5">
                    Deliverable:
                  </div>
                  <div className="text-xs font-semibold text-white">
                    {step.deliverable}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Bar - Modern Glass Rounded Block */}
          <div className="mt-16 p-8 sm:p-10 bg-white text-[#111] rounded-2xl border border-white/30 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#A71728] uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#A71728]" />
                <span>Ready to Hire Better Talent?</span>
              </div>
              <div className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                Start Your Quality-Assured Recruitment Search Today
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-light">
                Connect with our bilingual Tokyo & Dhaka consulting team for personalized workforce strategy.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <RedButton
                variant="primary"
                size="md"
                onClick={() => onOpenModal("employer")}
                className="text-xs sm:text-sm font-bold shadow-lg"
              >
                For Employers: Hire Top Talent
              </RedButton>
              <RedButton
                variant="dark"
                size="md"
                onClick={() => onOpenModal("jobseeker")}
                className="text-xs sm:text-sm font-bold"
              >
                Explore Local Careers
              </RedButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Curve Transition */}
      <div className="w-full overflow-hidden leading-none pointer-events-none -mt-[1px]">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-20 md:h-24 fill-[#3B070D]"
        >
          <path d="M0,0 L1440,0 C960,85 480,85 0,0 Z" />
        </svg>
      </div>
    </section>
  );
}

