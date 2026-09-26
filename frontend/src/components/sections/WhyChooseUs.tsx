"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="space-y-4 max-w-3xl mb-16 md:mb-20">
          <p className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] text-[#A71728] uppercase">
            <span className="block w-8 h-px bg-[#A71728]" />
            Why Partner With Kawaii HR?
          </p>

          <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold tracking-[-0.03em] uppercase leading-[0.98] text-[#111]">
            Building Better Workplaces <br />
            Through <span className="text-[#A71728]">Better Talent.</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
            The right hire is more than a filled vacancy. It is a long-term investment in your organization. At Kawaii Japan Career & HR, we take a structured, human-centric approach to domestic recruitment—understanding your business, assessing talent beyond the CV, and creating matches designed for long-term success.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WHY_PARTNER_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col justify-between p-8 bg-white border border-black/8 hover:border-[#A71728]/50 transition-all duration-300 group hover:shadow-[0_12px_40px_rgba(167,23,40,0.08)]"
            >
              <div className="space-y-6">
                <div className="flex items-baseline justify-between border-b border-black/8 pb-4">
                  <span className="text-3xl font-black text-[#A71728] tracking-tight">
                    {pillar.number}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
                    Pillar {pillar.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#111]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A71728]">
                    {pillar.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {pillar.description}
                </p>

                <div className="pt-2 border-t border-black/5 space-y-2.5">
                  {pillar.points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A71728] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-black/8 bg-[#A71728]/5 -mx-8 -mb-8 p-6">
                <div className="text-[10px] uppercase font-bold tracking-widest text-[#A71728] mb-1">
                  The Result
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#111]">
                  {pillar.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-black/8 pt-8">
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl font-light">
            Whether you are an established corporation, MNC, technology company, manufacturing organization, or growing enterprise, our recruitment specialists help you build the workforce required for your next stage of growth.
          </p>
          <RedButton
            variant="primary"
            size="lg"
            onClick={() => onOpenModal("employer")}
            className="!py-3.5 !px-6 text-xs sm:text-sm font-bold tracking-wider"
          >
            Request an Enterprise Consultation
          </RedButton>
        </div>
      </div>
    </section>
  );
}
