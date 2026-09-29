"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Building2, User } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/companyData";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="relative py-28 md:py-36 bg-white text-[#111] overflow-hidden select-none border-b border-black/5">
      <div className="absolute inset-0 japanese-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-black/8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#A71728]" />
              <span>Trust & verification</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase leading-[0.95] text-[#111]">
              TRUST BUILDS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A71728] via-[#8E1321] to-[#C92A3E]">
                LONG-TERM PARTNERSHIPS.
              </span>
            </h2>
          </div>

          <div className="flex items-center space-x-3 pt-6 md:pt-0">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-black/15 hover:border-[#A71728] hover:bg-[#A71728] hover:text-white text-[#111] flex items-center justify-center transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-black/15 hover:border-[#A71728] hover:bg-[#A71728] hover:text-white text-[#111] flex items-center justify-center transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Big Editorial Testimonial Card - Modern rounded-3xl frame */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#F8F7F6] rounded-3xl border border-black/8 p-8 sm:p-12 md:p-16 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#A71728] via-[#8E1321] to-[#680C17]" />

            <div className="lg:col-span-4 relative">
              <div className="relative aspect-square w-full max-w-sm mx-auto overflow-hidden rounded-2xl bg-gray-100 border border-black/10 shadow-md">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Testimonial Quote & Info */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-[#8E1321] bg-[#FFEAA7] px-3 py-1.5 rounded-full">
                {current.type === "employer" ? (
                  <Building2 className="w-4 h-4" />
                ) : (
                  <User className="w-4 h-4" />
                )}
                <span>{current.highlight}</span>
              </div>

              <blockquote className="text-xl sm:text-2xl md:text-3xl font-light text-[#111] leading-relaxed tracking-wide">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="pt-6 border-t border-black/8 flex items-center justify-between">
                <div>
                  <div className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#111]">
                    {current.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-light mt-0.5">
                    {current.role} • <span className="text-[#A71728] font-medium">{current.company}</span>
                  </div>
                </div>

                <div className="text-xs font-bold text-gray-400 font-mono bg-white px-3 py-1.5 rounded-full border border-black/5">
                  0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
