"use client";

import React from "react";
import { motion } from "framer-motion";
import { KEY_METRICS, PRODUCT_VISION } from "@/data/companyData";
import { JapaneseSeal } from "../ui/JapanesePattern";
import { Target, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

export function StatsSection() {
  const objectiveIcons = [Target, Sparkles, TrendingUp, ShieldCheck];

  return (
    <section id="stats" className="relative py-24 md:py-32 bg-premium-white text-[#111111] overflow-hidden border-b border-black/5">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 japanese-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#A71728]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Editorial Statement — Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 md:pb-20 border-b border-gray-200">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center space-x-3">
              <JapaneseSeal text="01 — PRODUCT OVERVIEW" />
              <span className="text-xs uppercase tracking-widest text-[#A71728] font-bold bg-[#A71728]/10 px-3 py-1 rounded-full">
                Domestic HR & Talent Acquisition Platform
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[1.02]">
              BANGLADESH TALENT. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A71728] via-[#8E1321] to-[#C92A3E]">
                JAPANESE DISCIPLINE.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4 pt-2 text-sm sm:text-base text-gray-700 leading-relaxed font-light">
            <div className="p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-black/5 shadow-sm space-y-3">
              <p>
                <strong className="text-black font-semibold">{PRODUCT_VISION.name}</strong>{" "}
                is a premier domestic HR and executive talent acquisition platform connecting
                enterprises with pre-vetted professionals and skilled leaders.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm border-t border-black/5 pt-3">
                {PRODUCT_VISION.vision}
              </p>
            </div>
          </div>
        </div>

        {/* Core Objectives - Exact System Color Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 py-14 md:py-16 border-b border-gray-200">
          {PRODUCT_VISION.objectives.map((obj, index) => {
            const IconComponent = objectiveIcons[index % objectiveIcons.length];
            return (
              <motion.div
                key={obj.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white shadow-xl hover:shadow-2xl border border-white/15 hover:-translate-y-1.5 transition-all duration-300 space-y-4 flex flex-col justify-between min-h-[290px] relative overflow-hidden group"
              >
                {/* Subtle Japanese Watermark */}
                <div className="absolute -bottom-4 -right-4 text-white/5 font-mono font-black text-7xl select-none pointer-events-none group-hover:text-white/10 transition-colors">
                  0{index + 1}
                </div>

                <div className="space-y-3.5 relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/25 border border-white/20 text-xs font-mono font-bold text-[#FFEAA7] tracking-wider uppercase">
                    <IconComponent className="w-3.5 h-3.5 text-[#FFEAA7]" />
                    <span>OBJECTIVE 0{index + 1}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-white leading-snug">
                    {obj.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-white/90 font-light leading-relaxed">
                    {obj.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-white/15 text-[10px] font-mono text-[#FFEAA7] tracking-widest uppercase flex items-center justify-between relative z-10">
                  <span>QA STANDARD</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA7] animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Key Metrics Grid - Modernized */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-16">
          {KEY_METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-black/5 hover:border-[#A71728]/40 hover:shadow-lg transition-all duration-500 space-y-2"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black group-hover:text-[#A71728] transition-colors font-sans">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                {metric.label}
              </div>
              <div className="text-[11px] sm:text-xs text-gray-500 leading-snug">
                {metric.description}
              </div>
              <div className="h-1 w-8 bg-[#A71728]/20 group-hover:w-full group-hover:bg-[#A71728] transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
