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
    <section className="relative py-28 md:py-36 bg-[#000000] text-white overflow-hidden select-none border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/15">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#A71728]" />
              <span>15 — TRUST & VERIFICATION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-[0.95] text-white">
              TRUST BUILDS <br />
              <span className="text-[#A71728]">LONG-TERM PARTNERSHIPS.</span>
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center space-x-3 pt-6 md:pt-0">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#A71728] hover:bg-[#A71728] text-white flex items-center justify-center transition-all"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#A71728] hover:bg-[#A71728] text-white flex items-center justify-center transition-all"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Big Editorial Testimonial Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#0E0E0E] border border-white/10 p-8 md:p-14"
          >
            {/* Avatar / Portrait Frame */}
            <div className="lg:col-span-4 relative">
              <div className="relative aspect-square w-full max-w-sm mx-auto overflow-hidden bg-black border-2 border-white/15 shadow-2xl">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#A71728] -z-10 opacity-30 pointer-events-none hidden sm:block" />
            </div>

            {/* Testimonial Quote & Info */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-[#A71728]">
                {current.type === "employer" ? (
                  <Building2 className="w-4 h-4" />
                ) : (
                  <User className="w-4 h-4" />
                )}
                <span>{current.highlight}</span>
              </div>

              <blockquote className="text-xl sm:text-2xl md:text-3xl font-light text-white leading-relaxed tracking-wide">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold uppercase tracking-tight text-white">
                    {current.name}
                  </div>
                  <div className="text-xs text-white/60 font-light">
                    {current.role} • <span className="text-[#A71728]">{current.company}</span>
                  </div>
                </div>

                <div className="text-xs text-white/40 font-mono">
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
