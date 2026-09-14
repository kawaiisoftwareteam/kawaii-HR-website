"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BUSINESS_REQUIREMENTS,
  QUALITY_STANDARDS,
} from "@/data/companyData";

export function PlatformCapabilities() {
  return (
    <section
      id="capabilities"
      className="relative py-28 md:py-36 bg-premium-white text-[#111111] overflow-hidden border-b border-black/5"
    >
      <div className="absolute inset-0 japanese-grid-pattern opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#A71728]" />
              <span>12 — PLATFORM REQUIREMENTS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-[0.95] text-black">
              BUILT FOR <br />
              <span className="text-[#A71728]">SERIOUS HIRING.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-xl">
              Core capabilities every professional recruitment platform needs —
              verification, secure data, analytics, and communication — delivered
              with Japanese precision and transparent process design.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gray-200 border border-gray-200 mb-16">
          {BUSINESS_REQUIREMENTS.map((req, idx) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="bg-white p-6 md:p-8 space-y-3 hover:bg-gray-50 transition-colors"
            >
              <span className="text-[10px] font-bold tracking-widest text-[#A71728] uppercase">
                0{idx + 1}
              </span>
              <h3 className="text-base font-bold uppercase tracking-tight text-black leading-snug">
                {req.title}
              </h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                {req.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400 mb-8">
            Quality Standards
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {QUALITY_STANDARDS.map((qs) => (
              <div key={qs.id} className="space-y-2 border-l-2 border-[#A71728]/40 pl-4">
                <h4 className="text-sm font-bold uppercase tracking-tight text-black">
                  {qs.title}
                </h4>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  {qs.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
