"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES_LIST, ServiceItem } from "@/data/companyData";
import { RedButton } from "../ui/RedButton";

export function ServicesSection({ onOpenModal }: { onOpenModal: (tab: "employer" | "jobseeker") => void }) {
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES_LIST[0]);

  return (
    <section id="services" className="relative py-28 md:py-36 bg-[#FFFFFF] text-[#111111] overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-gray-200">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#A71728]" />
              <span>05 — CORE SERVICES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight uppercase leading-[0.95] text-black">
              WHAT WE DO
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light tracking-wide">
              HR SOLUTIONS DESIGNED AROUND PEOPLE & ORGANIZATIONAL INTEGRITY.
            </p>
          </div>

          <div className="pt-6 md:pt-0">
            <RedButton
              variant="outline"
              size="md"
              className="text-black border-black/30 hover:bg-[#A71728] hover:text-white hover:border-[#A71728]"
              onClick={() => onOpenModal("employer")}
            >
              Request Sourcing Proposal
            </RedButton>
          </div>
        </div>

        {/* Editorial Service Explorer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Numbered Interactive Service List (7 items) */}
          <div className="lg:col-span-7 space-y-1">
            {SERVICES_LIST.map((service) => {
              const isSelected = activeService.id === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(service)}
                  onClick={() => setActiveService(service)}
                  data-cursor="action"
                  className={`group relative p-6 border-b transition-all duration-300 cursor-pointer ${isSelected
                      ? "border-[#A71728] bg-gray-50/80"
                      : "border-gray-200 hover:border-gray-400 hover:bg-gray-50/40"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      {/* Service Number */}
                      <span
                        className={`text-lg sm:text-xl font-bold tracking-wider transition-colors duration-300 font-sans ${isSelected ? "text-[#A71728]" : "text-gray-400 group-hover:text-black"
                          }`}
                      >
                        {service.number}
                      </span>

                      {/* Service Title */}
                      <h3
                        className={`text-lg sm:text-2xl font-bold tracking-tight uppercase transition-transform duration-300 ${isSelected ? "text-black translate-x-2" : "text-gray-800 group-hover:text-black group-hover:translate-x-1"
                          }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isSelected
                          ? "bg-[#A71728] text-white"
                          : "border border-gray-300 text-gray-400 group-hover:border-black group-hover:text-black"
                        }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Mobile Preview Detail */}
                  {isSelected && (
                    <div className="lg:hidden pt-4 text-xs sm:text-sm text-gray-600 space-y-2">
                      <p>{service.shortDesc}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-black/5 text-black px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic High-Res Photo & Expanded Description Preview */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="bg-[#0A0A0A] text-white border border-gray-200 overflow-hidden shadow-2xl"
              >
                {/* Visual Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    sizes="40vw"
                    className="object-cover object-center brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-[10px] font-bold tracking-widest text-[#A71728] uppercase border border-white/20">
                    SERVICE {activeService.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <h4 className="text-xl font-bold uppercase tracking-tight text-white">
                    {activeService.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    {activeService.fullDesc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                    {activeService.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-white/10 text-white/90 text-[10px] uppercase tracking-wider px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onOpenModal("employer")}
                      className="w-full py-3 bg-[#A71728] hover:bg-white hover:text-black text-white text-xs font-bold uppercase tracking-widest transition-all text-center flex items-center justify-center space-x-2"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
