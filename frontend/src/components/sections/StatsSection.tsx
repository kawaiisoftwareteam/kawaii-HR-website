"use client";

import React from "react";
import { motion } from "framer-motion";
import { KEY_METRICS, COMPANY_INFO } from "@/data/companyData";
import { JapaneseSeal } from "../ui/JapanesePattern";

export function StatsSection() {
  return (
    <section id="stats" className="relative py-24 md:py-32 bg-[#FFFFFF] text-[#111111] overflow-hidden border-b border-gray-100">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 japanese-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 md:pb-24 border-b border-gray-200">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center space-x-3">
              <JapaneseSeal text="01 — INTRODUCTION" />
              <span className="text-xs uppercase tracking-widest text-[#A71728] font-semibold">
                Strategic Bilateral Bridge
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.02]">
              A BRIDGE BETWEEN <br />
              <span className="text-[#A71728]">TALENT & ORGANIZATIONS.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4 pt-2 text-sm sm:text-base text-gray-700 leading-relaxed font-light">
            <p>
              <strong className="text-black font-semibold">Kawaii Japan Career & HR Solutions BD</strong> is a Japan-Bangladesh joint venture and a proud sister concern of <strong className="text-black font-semibold">Kawaii Group</strong>, providing premier career matching and bespoke HR solutions for employers and job seekers.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm">
              We bridge the technological and industrial rigor of Tokyo with Bangladesh's dynamic, ambitious talent pool, fostering sustainable cross-border workforce partnerships.
            </p>
          </div>
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
