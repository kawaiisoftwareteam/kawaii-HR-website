"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { RedButton } from "../ui/RedButton";

export function EmployerFocus({
  onOpenModal,
}: {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <section
      id="employers"
      className="relative py-28 md:py-36 text-white overflow-hidden select-none border-b border-white/10"
    >
      <div className="absolute inset-0 pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source
            src="/for%20employee/for%20emploee_gwr_video_mvp.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left column — no card bg */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-sm font-bold tracking-[0.22em] text-[#A71728] uppercase drop-shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A71728]" />
                <span>06 — ENTERPRISE RECRUITMENT</span>
              </div>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight uppercase leading-[0.9] text-white drop-shadow-lg">
                FOR <br />
                <span className="text-[#A71728]">EMPLOYERS.</span>
              </h2>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold leading-relaxed max-w-xl drop-shadow-md">
              We help organizations build strong, efficient and effective teams
              through precision candidate vetting and professional HR solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#A71728] drop-shadow-md">
                  Zero Noise Sourcing
                </div>
                <p className="text-sm sm:text-base text-white font-medium drop-shadow-md">
                  Pre-screened shortlists with minimum 95% role compatibility.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#A71728] drop-shadow-md">
                  Cultural Onboarding
                </div>
                <p className="text-sm sm:text-base text-white font-medium drop-shadow-md">
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

          {/* Right column — no card bg */}
          <div className="lg:col-span-6 space-y-7">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-lg pb-5 border-b border-white/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span>Enterprise Capabilities</span>
              <span className="text-sm font-bold text-white/70 uppercase tracking-widest">
                Comprehensive HR
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {capabilities.map((cap, idx) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="flex items-start space-x-3 text-sm sm:text-base text-white font-semibold hover:text-white transition-colors drop-shadow-md"
                >
                  <span className="w-5 h-5 rounded-full border-2 border-[#A71728] bg-[#A71728]/25 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#A71728] stroke-[3]" />
                  </span>
                  <span>{cap}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm sm:text-base font-semibold text-white drop-shadow-md">
              <span>Trusted by 60+ Enterprise Partners</span>
              <span className="text-[#A71728] font-black">100% Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
