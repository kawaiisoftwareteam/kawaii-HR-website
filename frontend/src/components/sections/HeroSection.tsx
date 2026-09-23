"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
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

        {/* Light left + bottom wash only — keep video readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </motion.div>

      <div className="relative z-10 h-full w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col justify-center pt-20 md:pt-24 pb-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p
            variants={itemVariants}
            className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-white/85 mb-3 sm:mb-4"
          >
            <span className="w-8 sm:w-10 h-0.5 bg-[#A71728]" />
            Kawaii Japan Career &amp; HR
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.2rem,5.5vw,5.2rem)] font-black tracking-[-0.03em] uppercase leading-[1.02] text-white"
          >
            The Right Talent. <br className="hidden sm:inline" />
            The Right <span className="text-[#A71728]">Fit.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-3 sm:mt-4 text-base sm:text-xl text-white/85 max-w-xl font-light leading-relaxed"
          >
            Japanese-standard HR precision, built for Bangladesh.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8"
          >
            <RedButton
              variant="primary"
              size="lg"
              onClick={() => onOpenModal("employer")}
              className="!py-4 !px-6 text-xs sm:text-sm font-bold tracking-wider"
            >
              Hire Top Talent
            </RedButton>
            <RedButton
              variant="outline"
              size="lg"
              onClick={() => onOpenModal("jobseeker")}
              className="!border-white/50 backdrop-blur-md bg-white/10 hover:!bg-white/20 !py-4 !px-6 text-xs sm:text-sm font-bold tracking-wider text-white"
            >
              Explore Careers
            </RedButton>
          </motion.div>
        </motion.div>

        <motion.a
          href="#stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-medium text-white/55 hover:text-white transition-colors"
          data-cursor="action"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="inline-flex"
          >
            <ChevronDown className="w-4 h-4 text-[#A71728]" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
