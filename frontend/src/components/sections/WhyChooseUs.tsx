"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, HeartHandshake, Award, Sparkles } from "lucide-react";
import { RedButton } from "../ui/RedButton";

export function WhyChooseUs({ onOpenModal }: { onOpenModal: (tab: "employer" | "jobseeker") => void }) {
  const keywords = [
    { word: "QUALITY", desc: "Strict candidate pre-qualification matching" },
    { word: "RELIABILITY", desc: "Punctual delivery and verified credentials" },
    { word: "TRANSPARENCY", desc: "Direct communication with zero hidden costs" },
    { word: "PROFESSIONALISM", desc: "Japanese business etiquette and governance" },
    { word: "TRUST", desc: "Long-standing institutional relationships" },
    { word: "LONG-TERM PARTNERSHIP", desc: "Sustainable talent pipelines that scale" },
  ];

  return (
    <section id="why-us" className="relative py-28 md:py-40 bg-[#0A0A0A] text-white overflow-hidden select-none border-b border-white/10">
      {/* Subtle Japanese Watermark */}
      <div className="absolute right-6 bottom-10 text-[180px] font-bold text-white/[0.02] pointer-events-none select-none">
        品質
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Philosophy */}
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#A71728]" />
                <span>11 — CORE DIFFERENTIATOR</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.92] text-white">
                QUALITY OVER <br />
                <span className="text-[#A71728]">QUANTITY.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
              &ldquo;We don&apos;t believe in sending a large number of candidates. We focus on finding the <strong className="text-white font-semibold underline decoration-[#A71728] underline-offset-4">exact right candidate</strong>.&rdquo;
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs text-white/60 font-light">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-[#A71728] shrink-0" />
                <span>Zero Resume Flooding. Only 2-3 High-Fidelity Matches per Role.</span>
              </div>
              <div className="flex items-center space-x-3">
                <HeartHandshake className="w-5 h-5 text-[#A71728] shrink-0" />
                <span>Backed by Kawaii Group&apos;s Proven International Legacy.</span>
              </div>
            </div>

            <div className="pt-2">
              <RedButton
                variant="primary"
                size="lg"
                onClick={() => onOpenModal("employer")}
              >
                Experience the Difference
              </RedButton>
            </div>
          </div>

          {/* Right Column: Large Animated Keywords */}
          <div className="lg:col-span-7 space-y-4">
            {keywords.map((item, index) => (
              <motion.div
                key={item.word}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-6 sm:p-8 bg-[#121212] border border-white/10 hover:border-[#A71728] transition-all duration-500 overflow-hidden"
              >
                {/* Accent red indicator line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#A71728] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white/90 group-hover:text-white group-hover:translate-x-2 transition-transform duration-300">
                    {item.word}
                  </h3>
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#A71728] uppercase">
                    0{index + 1} Pillar
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-white/60 pt-2 font-light group-hover:text-white/80 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
