"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { JAPANESE_PRINCIPLES } from "@/data/companyData";
import { JapaneseSeal } from "../ui/JapanesePattern";

export function JapaneseSystem() {
  return (
    <section className="relative py-28 md:py-36 bg-[#FFFFFF] text-[#111111] overflow-hidden border-b border-gray-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 japanese-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-20">
          <div className="flex items-center space-x-2">
            <JapaneseSeal text="12 — SYSTEM & GOVERNANCE" />
            <span className="text-xs uppercase tracking-widest text-[#A71728] font-bold">
              Pioneering HR Framework
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.95] text-black">
            JAPANESE DISCIPLINE. <br />
            <span className="text-[#A71728]">BANGLADESHI TALENT.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
            Kawaii Japan Career & HR Solutions BD is the first HR organization in Bangladesh to systematically adopt Japanese technology-driven systems and institutional work culture.
          </p>
        </div>

        {/* 6 Japanese Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {JAPANESE_PRINCIPLES.map((principle, idx) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative p-8 bg-gray-50 border border-gray-200 hover:border-[#A71728] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold font-sans text-black group-hover:text-[#A71728] transition-colors">
                      {principle.kanji}
                    </span>
                    <span className="text-xs uppercase font-semibold text-gray-500 tracking-wider">
                      ({principle.romaji})
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#A71728]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-2">
                  {principle.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="h-[2px] w-0 group-hover:w-full bg-[#A71728] transition-all duration-500 mt-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
