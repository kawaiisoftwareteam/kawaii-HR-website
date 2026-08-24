"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black text-white select-none">
      {/* Background Video with Slow Initial Zoom Out */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/Create_a_premium_cinematic_bac.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Multi-layered Dark Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]" />
      </motion.div>

      {/* Subtle Japanese Minimal Grid Watermark */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none japanese-grid-pattern-dark" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10 flex flex-col justify-between h-full pt-32 pb-12">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] font-semibold"
        >
          <span className="inline-flex items-center space-x-2 bg-black/60 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-none">
            <span className="w-2 h-2 rounded-full bg-[#A71728] inline-block animate-pulse" />
            <span>JAPAN × BANGLADESH</span>
          </span>
          <span className="text-white/60 hidden sm:inline">•</span>
          <span className="text-white/80 tracking-[0.2em] hidden sm:inline">
            CAREER & HR SOLUTIONS
          </span>
        </motion.div>

        {/* Main Central Typography */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-6 my-auto"
        >
          {/* Huge Editorial Headings */}
          <div className="space-y-1 md:space-y-2 font-bold tracking-[-0.03em] uppercase leading-[0.92]">
            <motion.div variants={itemVariants} className="overflow-hidden">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-extrabold text-white">
                CONNECTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">PEOPLE.</span>
              </h1>
            </motion.div>
            <motion.div variants={itemVariants} className="overflow-hidden">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-extrabold text-white">
                BUILDING <span className="text-[#A71728]">FUTURES.</span>
              </h1>
            </motion.div>
          </div>

          {/* Supporting Brand Sub-heading */}
          <motion.div variants={itemVariants} className="space-y-3 pt-2">
            <div className="text-sm sm:text-base font-semibold tracking-widest text-white uppercase flex items-center space-x-2">
              <span className="text-[#A71728]">Kawaii Japan</span>
              <span className="text-white/50">/</span>
              <span className="text-white/80">Career & HR Solutions BD</span>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-white/75 max-w-2xl font-light leading-relaxed tracking-wide">
              Connecting organizations with the right people through Japanese-inspired ethics, discipline, efficiency and trust.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-4"
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
            >
              For Job Seekers
            </RedButton>
          </motion.div>
        </motion.div>

        {/* Bottom Bar: Scroll indicator & quick badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/60 uppercase tracking-widest"
        >
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-[#A71728]" />
              <span>Japanese Corporate Standards</span>
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:inline">Sister Concern of Kawaii Group</span>
          </div>

          {/* Animated Scroll to Explore */}
          <a
            href="#stats"
            className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors cursor-pointer group"
            data-cursor="action"
          >
            <span className="text-[10px] md:text-xs tracking-[0.2em] font-medium">
              SCROLL TO EXPLORE
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 text-[#A71728] group-hover:translate-y-1 transition-transform" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
