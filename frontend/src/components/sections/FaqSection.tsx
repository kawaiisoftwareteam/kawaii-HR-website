"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaqAccordion } from "@/components/ui/faq-chat-accordion";
import { SERVICES_FAQS } from "@/data/companyData";

const faqData = SERVICES_FAQS.map((item, index) => ({
  id: index + 1,
  question: item.question,
  answer: item.answer,
}));

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative py-28 md:py-40 bg-premium-light text-[#111111] overflow-hidden border-b border-black/5"
    >
      <div className="absolute inset-0 japanese-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-5 lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#A71728]" />
              <span>16 — FAQ</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-[0.95] text-black">
              QUESTIONS,{" "}
              <span className="text-[#A71728]">ANSWERED.</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed max-w-md">
              Straight answers for employers and candidates—fees, timelines,
              Japan placements, and how our recruitment process works.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-black/8 bg-white/80 backdrop-blur-sm shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
              <FaqAccordion
                data={faqData}
                timestamp="Updated for employers & candidates"
                className="max-w-none p-5 sm:p-8"
                questionClassName="text-sm sm:text-base"
                answerClassName="max-w-lg text-sm sm:text-[15px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
