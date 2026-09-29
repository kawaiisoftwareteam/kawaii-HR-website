"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Globe, Compass, Sparkles } from "lucide-react";
import { RedButton } from "../ui/RedButton";
import { SakuraPetals } from "../ui/SakuraPetals";

export function AboutSection({ onOpenModal }: { onOpenModal: (tab: "employer" | "jobseeker") => void }) {
  const [activeTab, setActiveTab] = useState<"profile" | "vision">("profile");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="relative py-24 md:py-36 bg-premium-light text-[#111111] overflow-hidden border-b border-black/5">
      {/* Background Image Layer with atmospheric gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/about_hero_bg.jpg"
          alt="Kawaii Group Japan Tokyo Headquarters"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30 filter saturate-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/94 to-white/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white" />
        <div className="absolute inset-0 japanese-grid-pattern opacity-30" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#A71728]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FFB7C5]/20 rounded-full blur-3xl" />
      </div>

      {/* Falling Sakura Flower Petals Animation */}
      <SakuraPetals count={32} speed="medium" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-20">
        <div className="space-y-12 lg:space-y-14">
          {/* Horizontal company image with premium frame */}
          <div
            className="relative w-full overflow-hidden shadow-2xl bg-white border-2 border-black/10 group rounded-xs transition-all duration-500 hover:border-[#A71728]/40 hover:shadow-[0_20px_50px_rgba(167,23,40,0.12)]"
            data-cursor="image"
          >
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-neutral-900 overflow-hidden">
              <Image
                src="/kawaii.png"
                alt="Kawaii Group Japan — Japan-Bangladesh joint venture headquarters"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              {/* Japanese Decorative Corner Stamps */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-2 border border-black/10 text-[#111] flex items-center space-x-2 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A71728] animate-pulse" />
                <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#111]">
                  TOKYO × DHAKA HEADQUARTERS
                </span>
              </div>

              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/75 backdrop-blur-md px-3.5 py-1.5 border border-white/20 text-white flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB7C5]" />
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#FFB7C5]">
                  桜 SAKURA STANDARD
                </span>
              </div>

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-5 sm:p-7 text-white">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <div className="text-[11px] tracking-widest text-[#FF8DA1] font-bold uppercase mb-1">
                      ESTABLISHED 2025 • JAPAN × BANGLADESH
                    </div>
                    <div className="text-base sm:text-lg font-bold tracking-wide">
                      Kawaii Japan Career & HR Solutions — Sister Concern of Kawaii Group (Japan)
                    </div>
                  </div>
                  <div className="text-xs text-white/80 font-mono tracking-wider">
                    東京都 × ダッカ
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial content */}
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
                  02 — SISTER CONCERN PROFILE
                </span>
                <span className="text-gray-300">/</span>
                <span className="text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Kawaii Group Japan Lineage
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black uppercase leading-[0.98]">
                MORE THAN <br />
                <span className="text-[#A71728]">RECRUITMENT.</span>
              </h2>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-4 border-b border-gray-200 pb-2">
              <button
                onClick={() => setActiveTab("profile")}
                className={`pb-2 text-xs md:text-sm uppercase font-bold tracking-wider transition-colors border-b-2 ${
                  activeTab === "profile"
                    ? "border-[#A71728] text-black"
                    : "border-transparent text-gray-400 hover:text-gray-700"
                }`}
              >
                Sister Concern Lineage
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`pb-2 text-xs md:text-sm uppercase font-bold tracking-wider transition-colors border-b-2 ${
                  activeTab === "vision"
                    ? "border-[#A71728] text-black"
                    : "border-transparent text-gray-400 hover:text-gray-700"
                }`}
              >
                Vision & Mission
              </button>
            </div>

            {/* Tabbed Content */}
            <div className="min-h-[160px]">
              {activeTab === "profile" && (
                <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                  <p>
                    <strong className="text-black font-semibold">Kawaii Japan Career & HR Solutions</strong> operates as the premier human resources and talent solutions sister concern of the prestigious <strong className="text-black font-semibold">Kawaii Group (Tokyo, Japan)</strong>. Operating under the visionary ecosystem of Kawaii Group, we are committed to bridging international corporate excellence with Bangladesh&apos;s high-caliber workforce.
                  </p>
                  <p>
                    Backed by Kawaii Group&apos;s cross-border heritage, we bring Japanese precision, Kaizen-driven operational discipline, and strict bilateral compliance to every talent engagement — creating seamless synergies between top employers and exceptional professionals.
                  </p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-3 pt-2 text-gray-600 text-xs sm:text-sm border-t border-gray-200 mt-4"
                      >
                        <p>
                          Our specialized executive search and talent acquisition methodology is engineered to solve modern staffing bottlenecks. Whether matching bilingual Japanese engineers, garment supply chain directors, or pharmaceutical leaders, we guarantee unmatched fidelity in every candidate match.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold tracking-wider uppercase text-[#A71728] hover:text-black transition-colors pt-2"
                  >
                    <span>{isExpanded ? "Show Less" : "Read Full Profile"}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transform transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                  </button>
                </div>
              )}

              {activeTab === "vision" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 bg-white border border-gray-200 space-y-2">
                    <div className="text-xs font-bold tracking-widest text-[#A71728] uppercase flex items-center space-x-2">
                      <Compass className="w-4 h-4" />
                      <span>Our Vision</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                      To become the most reliable and influential bilateral HR and talent acquisition bridge between Japan and Bangladesh, admired globally for integrity and precision.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-gray-200 space-y-2">
                    <div className="text-xs font-bold tracking-widest text-[#A71728] uppercase flex items-center space-x-2">
                      <Globe className="w-4 h-4" />
                      <span>Our Mission</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                      To empower visionary organizations with exceptional human capital and guide ambitious professionals toward fulfilling global careers through ethical Japanese methodologies.
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <RedButton
                variant="primary"
                onClick={() => onOpenModal("employer")}
              >
                Partner With Us
              </RedButton>
              <RedButton
                variant="dark"
                onClick={() => onOpenModal("jobseeker")}
              >
                Explore Careers
              </RedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
