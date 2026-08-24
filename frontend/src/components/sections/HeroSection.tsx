"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { RedButton } from "../ui/RedButton";
import type { Variants } from "framer-motion";

interface HeroSectionProps {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative w-full h-svh min-h-[640px] max-h-[1100px] flex items-stretch overflow-hidden bg-[#0A0A0A] text-white">
      {/* Background video */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-[center_30%]"
        >
          <source src="/Create_a_premium_cinematic_bac.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-black/25" />
      </motion.div>

      {/* Content — vertically centered, tighter spacing */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col justify-center pt-20 md:pt-24 pb-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl"
        >
          <motion.p
            variants={itemVariants}
            className="inline-flex items-center gap-3 text-sm sm:text-base md:text-lg font-semibold tracking-[0.18em] uppercase text-white/85 mb-4 sm:mb-5"
          >
            <span className="w-10 h-0.5 bg-[#A71728]" />
            Japan × Bangladesh HR Bridge
          </motion.p>

          <div className="space-y-1 sm:space-y-1.5">
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.35rem,6.2vw,5.75rem)] font-bold tracking-[-0.03em] uppercase leading-[1.02] text-white whitespace-nowrap"
            >
              Connecting People.
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.35rem,6.2vw,5.75rem)] font-bold tracking-[-0.03em] uppercase leading-[1.02] text-white whitespace-nowrap"
            >
              Building <span className="text-[#A71728]">Futures.</span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 max-w-2xl font-light leading-relaxed"
          >
            Connecting organizations with the right people through
            Japanese-inspired ethics, discipline, efficiency and trust.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mt-5 sm:mt-6"
          >
            <RedButton
              variant="primary"
              size="lg"
              onClick={() => onOpenModal("employer")}
            >
              For Employers
            </RedButton>
            <RedButton
              variant="outline"
              size="lg"
              onClick={() => onOpenModal("jobseeker")}
              className="!border-white/40 backdrop-blur-sm bg-white/5 hover:!bg-white/10"
            >
              For Job Seekers
            </RedButton>
          </motion.div>
        </motion.div>

        {/* Bottom meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-white/15 pt-4"
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-white/55">
            <span className="inline-flex items-center gap-1.5 text-white/70">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A71728] shrink-0" />
              Japanese Corporate Standards
            </span>
            <span className="hidden sm:inline text-white/25">·</span>
            <span className="hidden sm:inline">
              Sister Concern of Kawaii Group
            </span>
          </div>

          <a
            href="#stats"
            className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-medium text-white/60 hover:text-white transition-colors self-start sm:self-auto group"
            data-cursor="action"
          >
            Scroll to explore
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="inline-flex"
            >
              <ChevronDown className="w-4 h-4 text-[#A71728]" />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
