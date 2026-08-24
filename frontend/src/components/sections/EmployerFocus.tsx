"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ShieldAlert, Users, Award, Zap, ArrowRight } from "lucide-react";
import { RedButton } from "../ui/RedButton";

export function EmployerFocus({ onOpenModal }: { onOpenModal: (tab: "employer" | "jobseeker") => void }) {
  const capabilities = [
    "End-to-end recruitment pipelines",
    "Targeted talent acquisition",
    "Permanent staffing solutions",
    "Temporary & project-based staffing",
    "Contract staffing & payroll",
    "Executive search & board advisory",
    "HR consulting & Kaizen optimization",
    "Organizational structure design",
    "IT-enabled automated HR systems",
    "Cross-border legal & compliance",
    "Sustainable workforce planning",
  ];

  return (
    <section id="employers" className="relative py-28 md:py-36 bg-[#000000] text-white overflow-hidden select-none border-b border-white/10">
      {/* Background Japanese Watermark */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[200px] font-bold text-white/[0.02] pointer-events-none select-none">
        企業
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Manifesto */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#A71728]" />
                <span>06 — ENTERPRISE RECRUITMENT</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.92] text-white">
                FOR <br />
                <span className="text-[#A71728]">EMPLOYERS.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
              We help organizations build strong, efficient and effective teams through precision candidate vetting and Japanese management rigor.
            </p>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white/5 border border-white/10 space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#A71728]">
                  Zero Noise Sourcing
                </div>
                <p className="text-xs text-white/60 font-light">
                  Pre-screened shortlists with minimum 95% role compatibility.
                </p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#A71728]">
                  Cultural Onboarding
                </div>
                <p className="text-xs text-white/60 font-light">
                  Candidates primed for punctuality, accountability and teamwork.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <RedButton
                variant="primary"
                size="lg"
                onClick={() => onOpenModal("employer")}
              >
                Partner With Us
              </RedButton>
            </div>
          </div>

          {/* Right Column: Animated Capabilities List */}
          <div className="lg:col-span-6 bg-[#0E0E0E] border border-white/15 p-8 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#A71728]" />
            <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
              <span>Enterprise Capabilities</span>
              <span className="text-xs font-normal text-white/40 uppercase tracking-widest">
                Comprehensive HR
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {capabilities.map((cap, idx) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="flex items-start space-x-2.5 text-xs text-white/80 font-light hover:text-white transition-colors"
                >
                  <span className="w-4 h-4 rounded-full bg-[#A71728]/20 border border-[#A71728] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#A71728]" />
                  </span>
                  <span>{cap}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
              <span>Trusted by 60+ Enterprise Partners</span>
              <span className="text-[#A71728] font-bold">100% Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
