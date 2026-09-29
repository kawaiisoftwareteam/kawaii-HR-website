"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { WHY_PARTNER_PILLARS } from "@/data/companyData";
import { RedButton } from "../ui/RedButton";

export function WhyChooseUs({
  onOpenModal,
}: {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}) {
  return (
    <section
      id="why-us"
      className="relative py-28 md:py-36 text-[#111111] overflow-hidden select-none border-b border-black/5 bg-premium-light"
    >
      <div className="absolute inset-0 japanese-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="space-y-4 max-w-3xl mb-16 md:mb-20">
          <p className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.28em] text-[#A71728] uppercase">
            <span className="block w-8 h-px bg-[#A71728]" />
            Why Partner With Kawaii HR?
          </p>

          <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-black tracking-[-0.03em] uppercase leading-[0.98] text-[#111]">
            Building Better Workplaces <br />
            Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A71728] via-[#8E1321] to-[#C92A3E]">Better Talent.</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
            The right hire is more than a filled vacancy. It is a long-term investment in your organization. At Kawaii Japan Career & HR, we take a structured, human-centric approach to domestic recruitment—understanding your business, assessing talent beyond the CV, and creating matches designed for long-term success.
          </p>
        </div>

        {/* 3 Pillars Grid - Exact System Color Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WHY_PARTNER_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white shadow-xl hover:shadow-2xl border border-white/15 hover:-translate-y-1.5 transition-all duration-300 space-y-6 flex flex-col justify-between min-h-[380px] relative overflow-hidden group"
            >
              {/* Subtle Japanese Watermark */}
              <div className="absolute -bottom-6 -right-6 text-white/5 font-mono font-black text-8xl select-none pointer-events-none group-hover:text-white/10 transition-colors">
                {pillar.number}
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/25 border border-white/20 text-xs font-mono font-bold text-[#FFEAA7] tracking-wider uppercase">
                    PILLAR 0{idx + 1}
                  </span>
                  <span className="text-3xl font-black text-[#FFEAA7] tracking-tight font-mono">
                    {pillar.number}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#FFEAA7]">
                    {pillar.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                  {pillar.description}
                </p>

                <div className="pt-3 border-t border-white/15 space-y-2.5">
                  {pillar.points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5 text-xs text-white/90 font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#FFEAA7] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 bg-black/20 -mx-8 sm:-mx-10 -mb-8 sm:-mb-10 p-6 rounded-b-2xl relative z-10">
                <div className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#FFEAA7] mb-1">
                  The Measurable Result
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {pillar.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-black/8 pt-8">
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl font-light">
            Whether you are an established corporation, MNC, technology company, manufacturing organization, or growing enterprise, our recruitment specialists help you build the workforce required for your next stage of growth.
          </p>
          <RedButton
            variant="primary"
            size="lg"
            onClick={() => onOpenModal("employer")}
            className="!py-3.5 !px-7 text-xs sm:text-sm font-bold tracking-wider shrink-0"
          >
            Request Enterprise Consultation
          </RedButton>
        </div>
      </div>
    </section>
  );
}
