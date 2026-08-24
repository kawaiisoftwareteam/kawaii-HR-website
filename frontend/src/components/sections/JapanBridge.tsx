"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plane, ArrowRight, Activity, MapPin } from "lucide-react";
import { JapaneseSeal } from "../ui/JapanesePattern";

export function JapanBridge() {
  return (
    <section id="japan-bangladesh" className="relative py-28 md:py-40 bg-[#0A0A0A] text-white overflow-hidden select-none">
      {/* Background Japanese Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[180px] md:text-[280px] font-bold text-white/[0.02] pointer-events-none select-none font-sans">
        架け橋
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-24">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#A71728] animate-pulse" />
            <span>03 — BILATERAL CORRIDOR</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.95]">
            JAPAN <span className="text-[#A71728]">×</span> BANGLADESH
          </h2>

          <p className="text-base sm:text-xl text-white/80 font-light max-w-2xl mx-auto tracking-wide">
            Bridging cultures. Connecting talent. Building organizations.
          </p>
        </div>

        {/* Skyline Visual Bridge: Tokyo (Left) <---> Route <---> Dhaka (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Tokyo Skyline Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group overflow-hidden border border-white/15 bg-black"
            data-cursor="image"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/tokyo_skyline.jpg"
                alt="Tokyo Skyline - Japanese Corporate Hub"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Tag info */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] tracking-widest uppercase font-bold text-white border border-white/20 flex items-center space-x-1.5">
                <MapPin className="w-3 h-3 text-[#A71728]" />
                <span>TOKYO, JAPAN</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xl font-bold tracking-tight uppercase">
                  Tokyo Commercial Center
                </div>
                <div className="text-xs text-white/70 font-light">
                  35.6764° N, 139.6500° E • Technology & Enterprise Capital
                </div>
              </div>
            </div>
          </motion.div>

          {/* Central Route / Animated Pulse Hub */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center space-y-4 py-4 text-center">
            <div className="w-12 h-12 rounded-full border border-[#A71728] bg-[#A71728]/20 flex items-center justify-center text-[#A71728] animate-pulse">
              <Plane className="w-6 h-6 transform rotate-45" />
            </div>

            <div className="hidden lg:block w-full">
              <div className="relative h-[2px] bg-gradient-to-r from-transparent via-[#A71728] to-transparent w-full overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
                  className="w-1/3 h-full bg-white shadow-[0_0_8px_#ffffff]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-bold tracking-widest text-[#A71728] uppercase">
                Direct HR Corridor
              </div>
              <div className="text-[11px] text-white/50 tracking-wider">
                5,800 KM Seamless Bridge
              </div>
            </div>
          </div>

          {/* Dhaka Skyline Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group overflow-hidden border border-white/15 bg-black"
            data-cursor="image"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/dhaka_skyline.jpg"
                alt="Dhaka Skyline - Bangladesh Business District"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Tag info */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] tracking-widest uppercase font-bold text-white border border-white/20 flex items-center space-x-1.5">
                <MapPin className="w-3 h-3 text-[#A71728]" />
                <span>DHAKA, BANGLADESH</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xl font-bold tracking-tight uppercase">
                  Dhaka Financial District
                </div>
                <div className="text-xs text-white/70 font-light">
                  23.8103° N, 90.4125° E • Premier Engineering & Talent Hub
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bilateral Highlights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
          <div className="p-6 bg-white/[0.03] border border-white/10 space-y-2">
            <div className="text-xs font-bold text-[#A71728] uppercase tracking-widest">
              01 — Cultural Alignment
            </div>
            <h4 className="text-lg font-bold uppercase">Japanese Work Ethics</h4>
            <p className="text-xs text-white/60 font-light leading-relaxed">
              We educate and mentor candidates in Japanese business protocols, punctuality, and Kaizen standards before placement.
            </p>
          </div>

          <div className="p-6 bg-white/[0.03] border border-white/10 space-y-2">
            <div className="text-xs font-bold text-[#A71728] uppercase tracking-widest">
              02 — Linguistic Proficiency
            </div>
            <h4 className="text-lg font-bold uppercase">Bilingual Specialists</h4>
            <p className="text-xs text-white/60 font-light leading-relaxed">
              Cultivating talent equipped with Japanese language capability (JLPT N3-N1) across engineering and management sectors.
            </p>
          </div>

          <div className="p-6 bg-white/[0.03] border border-white/10 space-y-2">
            <div className="text-xs font-bold text-[#A71728] uppercase tracking-widest">
              03 — Legal Compliance
            </div>
            <h4 className="text-lg font-bold uppercase">Cross-Border Protocols</h4>
            <p className="text-xs text-white/60 font-light leading-relaxed">
              Full statutory compliance with international labor laws, documentation, visa support, and expatriate transitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
