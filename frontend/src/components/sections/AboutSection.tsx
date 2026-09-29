"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Globe, Compass, Sparkles } from "lucide-react";
import { RedButton } from "../ui/RedButton";

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
          className="object-cover object-center opacity-25 filter saturate-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/94 to-white/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white" />
        <div className="absolute inset-0 japanese-grid-pattern opacity-30" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#A71728]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FFB7C5]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Horizontal company image with premium rounded-2xl frame */}
          <div className="lg:col-span-7">
            <div
              className="relative w-full overflow-hidden shadow-2xl bg-white border border-black/10 group rounded-2xl transition-all duration-500 hover:border-[#A71728]/40 hover:shadow-[0_24px_60px_rgba(167,23,40,0.14)]"
              data-cursor="image"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-neutral-900 overflow-hidden">
                <Image
                  src="/kawaii.png"
                  alt="Kawaii Group Japan — Japan-Bangladesh joint venture headquarters"
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 800px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Japanese Decorative Badges */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 text-[#111] flex items-center space-x-2 shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A71728] animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-bold text-[#111]">
                    TOKYO × DHAKA HEADQUARTERS
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 sm:p-8 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/40 border border-white/20 text-[#FFEAA7] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                        <span>ESTABLISHED 2025</span>
                        <span>•</span>
                        <span>JAPAN × BANGLADESH</span>
                      </div>
                      <div className="text-lg sm:text-xl font-bold tracking-wide">
                        Kawaii Japan Career & HR Solutions
                      </div>
                      <div className="text-xs text-gray-300 font-light mt-0.5">
                        Sister Concern of Kawaii Group (Tokyo, Japan)
                      </div>
                    </div>
                    <div className="text-xs text-white/80 font-mono tracking-wider bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 self-start sm:self-auto">
                      東京都 × ダッカ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial content */}
          <div className="lg:col-span-5 space-y-6">
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

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black uppercase leading-[0.98]">
                MORE THAN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A71728] via-[#8E1321] to-[#C92A3E]">
                  RECRUITMENT.
                </span>
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
                    <strong className="text-black font-semibold">Kawaii Japan Career & HR Solutions</strong> operates as the premier human resources and executive talent solutions sister concern of the prestigious <strong className="text-black font-semibold">Kawaii Group (Tokyo, Japan)</strong>. Operating under the visionary ecosystem of Kawaii Group, we bridge international corporate excellence with Bangladesh&apos;s top-tier talent.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Backed by Kawaii Group&apos;s cross-border heritage, we bring Japanese precision, Kaizen-driven operational discipline, and strict bilateral compliance to every talent engagement.
                  </p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-3 pt-3 text-gray-600 text-xs sm:text-sm border-t border-gray-200 mt-3"
                      >
                        <p>
                          Our specialized executive search and talent acquisition methodology solves modern staffing bottlenecks. Whether placing bilingual Japanese engineers, garment supply chain directors, or pharmaceutical leaders, we guarantee unmatched fidelity in every candidate match.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold tracking-wider uppercase text-[#A71728] hover:text-black transition-colors pt-1"
                  >
                    <span>{isExpanded ? "Show Less" : "Read Full Profile"}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transform transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                  </button>
                </div>
              )}

              {activeTab === "vision" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {/* System Color Vision Card */}
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white shadow-xl border border-white/15 space-y-3 relative overflow-hidden group">
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/25 border border-white/20 text-[11px] font-mono font-bold text-[#FFEAA7] tracking-wider uppercase">
                      <Compass className="w-3 h-3" />
                      <span>Our Vision</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                      To become the benchmark for professional HR and talent acquisition in Bangladesh, admired globally for integrity and Japanese precision.
                    </p>
                    <div className="pt-3 border-t border-white/15 text-[10px] font-mono text-[#FFEAA7] tracking-widest uppercase flex items-center justify-between">
                      <span>STANDARD</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA7] animate-pulse" />
                    </div>
                  </div>

                  {/* System Color Mission Card */}
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white shadow-xl border border-white/15 space-y-3 relative overflow-hidden group">
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/25 border border-white/20 text-[11px] font-mono font-bold text-[#FFEAA7] tracking-wider uppercase">
                      <Globe className="w-3 h-3" />
                      <span>Our Mission</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                      To empower organizations with capable talent and guide professionals toward fulfilling global careers through ethical Japanese methodologies.
                    </p>
                    <div className="pt-3 border-t border-white/15 text-[10px] font-mono text-[#FFEAA7] tracking-widest uppercase flex items-center justify-between">
                      <span>ETHICAL ECOSYSTEM</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA7] animate-pulse" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
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
