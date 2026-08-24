"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Award, Globe, Compass, CheckCircle } from "lucide-react";
import { JapaneseSeal } from "../ui/JapanesePattern";
import { RedButton } from "../ui/RedButton";

export function AboutSection({ onOpenModal }: { onOpenModal: (tab: "employer" | "jobseeker") => void }) {
  const [activeTab, setActiveTab] = useState<"profile" | "vision" | "values">("profile");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="relative py-24 md:py-36 bg-[#F8F9FA] text-[#111111] overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Vertical Editorial Image Frame */}
          <div className="lg:col-span-5 relative" data-cursor="image">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl bg-black">
              <Image
                src="/images/japanese_office_team.jpg"
                alt="Kawaii Japan Corporate Boardroom and Management Team"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />

              {/* Floating Japanese Seal Overlay */}
              <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/20 text-white flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#A71728]" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold">
                  TOKYO × DHAKA HEADQUARTERS
                </span>
              </div>

              {/* Bottom Tagline Banner */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 text-white">
                <div className="text-[11px] tracking-widest text-[#A71728] font-bold uppercase mb-1">
                  ESTABLISHED 2025
                </div>
                <div className="text-sm font-semibold tracking-wide">
                  Joint Venture & Sister Concern of Kawaii Group
                </div>
              </div>
            </div>

            {/* Red Accent Offset Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#A71728] -z-10 pointer-events-none hidden sm:block opacity-30" />
          </div>

          {/* Right: Editorial Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
                  02 — COMPANY PROFILE
                </span>
                <span className="text-gray-300">/</span>
                <span className="text-xs font-medium tracking-wider text-gray-500 uppercase">
                  About Kawaii Japan
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
                Our Identity
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
              <button
                onClick={() => setActiveTab("values")}
                className={`pb-2 text-xs md:text-sm uppercase font-bold tracking-wider transition-colors border-b-2 ${
                  activeTab === "values"
                    ? "border-[#A71728] text-black"
                    : "border-transparent text-gray-400 hover:text-gray-700"
                }`}
              >
                Japanese Principles
              </button>
            </div>

            {/* Tabbed Content */}
            <div className="min-h-[160px]">
              {activeTab === "profile" && (
                <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                  <p>
                    In Bangladesh, <strong className="text-black font-semibold">Kawaii Japan Career & HR Solutions</strong> is a renowned career matching and HR solutions company. As a proud sister concern of the prestigious <strong className="text-black font-semibold">Kawaii Group</strong>, we are committed to revolutionizing employment ecosystems across both nations.
                  </p>
                  <p>
                    We operate with the foundational philosophy that genuine organizational growth stems from precise cultural harmony, continuous discipline, and technical excellence.
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

              {activeTab === "values" && (
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { title: "Ethics (倫理)", desc: "100% moral transparency" },
                      { title: "Discipline (規律)", desc: "Punctual structured process" },
                      { title: "Efficiency (効率)", desc: "Kaizen agile pipelines" },
                      { title: "Respect (敬意)", desc: "Human-centric partnership" },
                      { title: "Quality (品質)", desc: "Zero compromise matching" },
                      { title: "Trust (信頼)", desc: "Long-term bilateral bonds" },
                    ].map((val) => (
                      <div key={val.title} className="p-3 bg-white border border-gray-200 space-y-1">
                        <div className="text-xs font-bold text-black uppercase">{val.title}</div>
                        <div className="text-[11px] text-gray-500">{val.desc}</div>
                      </div>
                    ))}
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
