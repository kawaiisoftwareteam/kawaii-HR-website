"use client";

import React from "react";
import { motion } from "framer-motion";
import { QA_RECRUITMENT_PIPELINE } from "@/data/companyData";
import { RedButton } from "../ui/RedButton";

export function ProcessSection({
  onOpenModal,
}: {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}) {
  return (
    <section
      id="process"
      className="relative py-28 md:py-36 bg-premium-light text-[#111111] overflow-hidden border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-gray-200 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#A71728]" />
            <span>Our Recruitment Process</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-[0.98] text-black">
            A 4-Step Quality <br />
            <span className="text-[#A71728]">Assurance Pipeline.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-light tracking-wide leading-relaxed">
            A structured recruitment process creates better outcomes for both employers and professionals. We bridge businesses and talent with rigor, predictability, and Japanese-standard operational discipline.
          </p>
        </div>

        {/* 4-Step Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {QA_RECRUITMENT_PIPELINE.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="group relative bg-white border border-gray-200 p-7 flex flex-col justify-between hover:border-[#A71728] transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-3xl font-black text-[#A71728]">
                    {step.step}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
                    Step {step.step} of 04
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-black group-hover:text-[#A71728] transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#A71728] font-medium tracking-wide mt-1">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-[13px] text-gray-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-100 bg-[#A71728]/5 -mx-7 -mb-7 p-4">
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#A71728] mb-0.5">
                  Deliverable:
                </div>
                <div className="text-xs font-semibold text-gray-900">
                  {step.deliverable}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 p-8 bg-black text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-bold text-[#A71728] uppercase tracking-widest">
              Ready to Hire Better Talent?
            </div>
            <div className="text-base sm:text-xl font-bold uppercase">
              Start Your Quality-Assured Recruitment Search Today
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <RedButton
              variant="primary"
              size="md"
              onClick={() => onOpenModal("employer")}
              className="text-xs sm:text-sm font-bold"
            >
              For Employers: Hire Top Talent
            </RedButton>
            <RedButton
              variant="outline"
              size="md"
              onClick={() => onOpenModal("jobseeker")}
              className="!border-white/40 text-white hover:!bg-white/10 text-xs sm:text-sm font-bold"
            >
              Explore Local Careers
            </RedButton>
          </div>
        </div>
      </div>
    </section>
  );
}

