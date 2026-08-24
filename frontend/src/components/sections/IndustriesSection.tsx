"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { INDUSTRIES_LIST } from "@/data/companyData";
import { RedButton } from "../ui/RedButton";

export function IndustriesSection({ onOpenModal }: { onOpenModal: (tab: "employer" | "jobseeker") => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="industries" className="relative py-28 md:py-36 bg-[#000000] text-white overflow-hidden select-none border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header with Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/15">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#A71728]" />
              <span>09 — SECTOR SPECIALIZATION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-[0.95] text-white">
              INDUSTRIES WE SERVE
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light tracking-wide">
              Targeted workforce intelligence across 8 specialized economic pillars.
            </p>
          </div>

          <div className="flex items-center space-x-3 pt-6 md:pt-0">
            <button
              onClick={() => handleScroll("left")}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#A71728] hover:bg-[#A71728] text-white flex items-center justify-center transition-all"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#A71728] hover:bg-[#A71728] text-white flex items-center justify-center transition-all"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-6 px-6 md:px-10 max-w-[100vw] scroll-smooth pb-8"
      >
        {INDUSTRIES_LIST.map((industry) => (
          <div
            key={industry.id}
            onClick={() => onOpenModal("employer")}
            data-cursor="image"
            className="group relative flex-shrink-0 w-[300px] sm:w-[360px] md:w-[420px] aspect-[3/4] bg-[#0E0E0E] border border-white/15 overflow-hidden cursor-pointer flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Background Image with Zoom */}
            <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                sizes="420px"
                className="object-cover object-center brightness-[0.45] group-hover:brightness-90 group-hover:scale-110 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
            </div>

            {/* Top Number & Tag */}
            <div className="flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-bold font-sans text-white/40 group-hover:text-[#A71728] transition-colors">
                {industry.number}
              </span>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#A71728] group-hover:bg-[#A71728] transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="space-y-4">
              <div className="h-[2px] w-8 bg-[#A71728] group-hover:w-20 transition-all duration-500" />

              <div className="space-y-1">
                <div className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#A71728]">
                  {industry.subtitle}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white group-hover:translate-x-1 transition-transform">
                  {industry.title}
                </h3>
              </div>

              <p className="text-xs text-white/70 line-clamp-3 font-light leading-relaxed">
                {industry.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {industry.roles.slice(0, 3).map((r) => (
                  <span
                    key={r}
                    className="bg-black/70 border border-white/10 text-white/80 px-2 py-0.5 text-[9px] uppercase tracking-wider"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
