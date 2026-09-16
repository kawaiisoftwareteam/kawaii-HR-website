"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { INDUSTRIES_LIST } from "@/data/companyData";

export function IndustriesSection({
  onOpenModal,
}: {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}) {
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
    <section
      id="industries"
      className="relative py-28 md:py-36 bg-premium-light text-[#111111] overflow-hidden select-none border-b border-black/5"
    >
      <div className="absolute inset-0 japanese-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-black/10">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#A71728]" />
              <span>09 — SECTOR SPECIALIZATION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-[0.95] text-black">
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
              className="w-12 h-12 rounded-full border border-black/15 hover:border-[#A71728] hover:bg-[#A71728] hover:text-white text-black flex items-center justify-center transition-all"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              className="w-12 h-12 rounded-full border border-black/15 hover:border-[#A71728] hover:bg-[#A71728] hover:text-white text-black flex items-center justify-center transition-all"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="relative z-10 flex overflow-x-auto no-scrollbar gap-6 px-6 md:px-10 max-w-[100vw] scroll-smooth pb-8"
      >
        {INDUSTRIES_LIST.map((industry) => (
          <div
            key={industry.id}
            onClick={() => onOpenModal("employer")}
            data-cursor="image"
            className="group relative flex-shrink-0 w-[300px] sm:w-[360px] md:w-[400px] bg-white border border-black/10 overflow-hidden cursor-pointer flex flex-col hover:border-[#A71728] transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            {/* Image — clearly visible */}
            <div className="relative w-full aspect-[16/11] overflow-hidden bg-gray-100">
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                sizes="400px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="text-sm font-bold tracking-wider text-white bg-black/55 backdrop-blur-sm px-2.5 py-1">
                  {industry.number}
                </span>
                <div className="w-8 h-8 rounded-full border border-white/40 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-[#A71728] group-hover:border-[#A71728] transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Light content panel */}
            <div className="flex flex-col flex-1 p-6 sm:p-7 space-y-3">
              <div className="h-[2px] w-8 bg-[#A71728] group-hover:w-16 transition-all duration-500" />

              <div className="space-y-1">
                <div className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#A71728]">
                  {industry.subtitle}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-black group-hover:text-[#A71728] transition-colors">
                  {industry.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 font-light leading-relaxed flex-1">
                {industry.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {industry.roles.slice(0, 3).map((r) => (
                  <span
                    key={r}
                    className="bg-gray-100 border border-black/5 text-gray-700 px-2 py-0.5 text-[9px] uppercase tracking-wider"
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
