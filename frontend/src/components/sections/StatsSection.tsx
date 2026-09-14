"use client";

import React from "react";
import { motion } from "framer-motion";
import { KEY_METRICS, PRODUCT_VISION } from "@/data/companyData";
import { JapaneseSeal } from "../ui/JapanesePattern";

export function StatsSection() {
  return (
    <section id="stats" className="relative py-24 md:py-32 bg-premium-white text-[#111111] overflow-hidden border-b border-black/5">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 japanese-grid-pattern opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Editorial Statement — Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 md:pb-20 border-b border-gray-200">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center space-x-3">
              <JapaneseSeal text="01 — PRODUCT OVERVIEW" />
              <span className="text-xs uppercase tracking-widest text-[#A71728] font-semibold">
                Domestic HR Platform
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.02]">
              BANGLADESH TALENT. <br />
              <span className="text-[#A71728]">JAPANESE DISCIPLINE.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4 pt-2 text-sm sm:text-base text-gray-700 leading-relaxed font-light">
            <p>
              <strong className="text-black font-semibold">{PRODUCT_VISION.name}</strong>{" "}
              is a professional domestic HR and talent acquisition platform connecting
              employers with qualified professionals and skilled workers.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm">
              {PRODUCT_VISION.vision}
            </p>
          </div>
        </div>

        {/* Core Objectives */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 py-14 md:py-16 border-b border-gray-200">
          {PRODUCT_VISION.objectives.map((obj, index) => (
            <motion.div
              key={obj.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="space-y-2"
            >
              <span className="text-[10px] font-bold tracking-widest text-[#A71728] uppercase">
                Objective 0{index + 1}
              </span>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-black">
                {obj.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                {obj.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Animated Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pt-16">
          {KEY_METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group space-y-2 border-l-2 border-black/10 pl-6 hover:border-[#A71728] transition-colors duration-500"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black group-hover:text-[#A71728] transition-colors font-sans">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                {metric.label}
              </div>
              <div className="text-[11px] sm:text-xs text-gray-500 leading-snug">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
