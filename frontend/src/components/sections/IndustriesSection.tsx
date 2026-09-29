"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { INDUSTRIES_LIST } from "@/data/companyData";

export function IndustriesSection({
  onOpenModal,
}: {
  onOpenModal: (tab: "employer" | "jobseeker", industry?: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="industries"
      className="relative py-28 md:py-36 bg-premium-light text-[#111111] overflow-hidden select-none border-b border-black/5"
    >
      <div className="absolute inset-0 japanese-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-black/10">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#A71728]" />
              <span>09 — SECTOR SPECIALIZATION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase leading-[0.95] text-black">
              INDUSTRIES WE SERVE
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light tracking-wide">
              Targeted workforce intelligence across 8 specialized economic pillars.
            </p>
          </div>

          <div className="flex items-center space-x-3 pt-6 md:pt-0">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              className="w-12 h-12 rounded-full border border-black/15 hover:border-[#A71728] hover:bg-[#A71728] hover:text-white text-black flex items-center justify-center transition-all shadow-sm"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              className="w-12 h-12 rounded-full border border-black/15 hover:border-[#A71728] hover:bg-[#A71728] hover:text-white text-black flex items-center justify-center transition-all shadow-sm"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="relative z-10 flex overflow-x-auto no-scrollbar gap-6 px-4 sm:px-8 md:px-12 lg:px-16 max-w-[100vw] scroll-smooth pb-8"
      >
        {INDUSTRIES_LIST.map((industry) => (
          <div
            key={industry.id}
            onClick={() => onOpenModal("employer", industry.id)}
            data-cursor="image"
            className="group relative flex-shrink-0 w-[300px] sm:w-[360px] md:w-[400px] bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white rounded-2xl border border-white/15 hover:border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300"
          >
            {/* Image Frame with rounded top */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900">
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                sizes="400px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/40 border border-white/25 text-xs font-mono font-bold text-[#FFEAA7] tracking-wider uppercase shadow-sm">
                  SECTOR {industry.number}
                </span>
                <div className="w-9 h-9 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#8E1321] transition-all shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* System Color Content Panel */}
            <div className="flex flex-col flex-1 p-6 sm:p-7 space-y-4">
              <div className="space-y-1.5">
                <div className="text-[11px] uppercase font-mono font-bold tracking-widest text-[#FFEAA7]">
                  {industry.subtitle}
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-snug">
                  {industry.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-white/90 line-clamp-3 font-light leading-relaxed flex-1">
                {industry.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {industry.roles.slice(0, 3).map((r) => (
                  <span
                    key={r}
                    className="bg-black/30 rounded-full border border-white/20 text-white/90 px-3 py-1 text-[10px] font-mono uppercase tracking-wider"
                  >
                    {r}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-white/15 text-[10px] font-mono text-[#FFEAA7] tracking-widest uppercase flex items-center justify-between">
                <span>SECTOR PIPELINE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA7] animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
