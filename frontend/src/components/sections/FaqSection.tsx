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

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
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

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.95] text-black">
              QUESTIONS, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A71728] via-[#8E1321] to-[#C92A3E]">
                ANSWERED.
              </span>
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
            <div className="rounded-3xl border-2 border-[#A71728] bg-white shadow-[0_20px_50px_rgba(167,23,40,0.12)] p-3 sm:p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A71728]/5 rounded-full blur-2xl pointer-events-none" />
              <FaqAccordion
                data={faqData}
                timestamp="Updated for employers & candidates • Kawaii HR"
                className="max-w-none p-4 sm:p-6"
                questionClassName="text-sm sm:text-base"
                answerClassName="max-w-xl text-sm sm:text-[15px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
