"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Compass,
  CheckCircle2,
  Target,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { RedButton } from "@/components/ui/RedButton";
import { SakuraPetals } from "@/components/ui/SakuraPetals";
import { ABOUT_PAGE_DATA } from "@/data/companyData";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"employer" | "jobseeker">("employer");

  const handleOpenModal = (tab: "employer" | "jobseeker") => {
    setModalTab(tab);
    setModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-white text-[#111111] font-sans selection:bg-[#A71728] selection:text-white overflow-x-hidden">
      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
      />
      <Navbar onOpenModal={handleOpenModal} />

      {/* Hero — photo-forward, light overlay, short copy */}
      <section className="relative min-h-[72vh] flex items-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/about_hero_bg.jpg"
            alt="Kawaii Group Japan Tokyo Headquarters"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Left vignette for text only — rest of photo stays open */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0c0e]/75 via-[#1a0c0e]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0c0e]/45 via-transparent to-[#1a0c0e]/20" />
        </div>

        <SakuraPetals count={16} speed="medium" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 z-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="w-full max-w-2xl min-w-0 space-y-5 text-white"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#A71728] text-[11px] font-extrabold uppercase tracking-widest text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA7]" />
                Sister Concern · Japan
              </span>
              <span className="px-3 py-1.5 bg-white/15 backdrop-blur-sm text-[#FFEAA7] text-[10px] font-mono font-bold tracking-widest uppercase border border-white/25">
                Tokyo ⇄ Dhaka
              </span>
            </div>

            <h1 className="text-[clamp(1.65rem,7vw,3.6rem)] font-extrabold tracking-tight uppercase leading-[1.08] drop-shadow-sm">
              Redefining Talent Acquisition
              <span className="mt-1 block text-[#FFEAA7]">
                with Japanese Standard.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/90 font-light max-w-lg leading-snug">
              Official HR sister concern of Kawaii Group, Tokyo.
            </p>

            <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {[
                { Icon: ShieldCheck, label: "Group Backing" },
                { Icon: Target, label: "Kaizen Vetting" },
                { Icon: HeartHandshake, label: "100% Ethical" },
              ].map(({ Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex w-fit items-center gap-1.5 px-2.5 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide text-white"
                >
                  <Icon className="w-3.5 h-3.5 text-[#FFEAA7]" />
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <RedButton
                variant="primary"
                size="md"
                onClick={() => handleOpenModal("employer")}
                className="text-xs sm:text-sm font-bold"
              >
                Partner With Us
              </RedButton>
              <RedButton
                variant="white"
                size="md"
                onClick={() => handleOpenModal("jobseeker")}
                className="text-xs sm:text-sm font-bold bg-white text-black hover:bg-gray-100"
              >
                Talk to Our Team
              </RedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Company Headquarters Image Showcase */}
      <section className="relative py-12 md:py-16 bg-white border-b border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="relative w-full overflow-hidden shadow-2xl bg-neutral-900 border border-black/10 group">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
              <Image
                src="/kawaii.png"
                alt="Kawaii Group Japan — Japan-Bangladesh Headquarters"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-2 border border-black/10 text-[#111] flex items-center space-x-2 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A71728] animate-pulse" />
                <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#111]">
                  TOKYO × DHAKA HEADQUARTERS
                </span>
              </div>

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-5 sm:p-7 text-white">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <div className="text-[11px] tracking-widest text-[#FF8DA1] font-bold uppercase mb-1">
                      ESTABLISHED 2025 • JAPAN × BANGLADESH
                    </div>
                    <div className="text-base sm:text-lg font-bold tracking-wide">
                      Kawaii Japan Career & HR Solutions — Sister Concern of Kawaii Group
                    </div>
                  </div>
                  <div className="text-xs text-white/80 font-mono tracking-wider">
                    東京都 × ダッカ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Philosophy - Curved System Color Section */}
      <section className="relative overflow-hidden bg-white">
        {/* Top Wave Curve Transition */}
        <div className="w-full overflow-hidden leading-none pointer-events-none -mb-[1px]">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="w-full h-12 sm:h-20 md:h-24 fill-[#3D151A]"
          >
            <path d="M0,0 C320,85 880,105 1440,20 L1440,100 L0,100 Z" />
          </svg>
        </div>

        <div className="relative py-16 md:py-24 bg-[#3D151A] text-white overflow-hidden">
          {/* Ambient Lighting & Pattern Accents */}
          <div className="absolute inset-0 japanese-grid-pattern-dark opacity-15 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/30 rounded-full blur-3xl pointer-events-none" />

          {/* Falling Sakura Petals Animation */}
          <SakuraPetals count={24} speed="slow" />

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Origins & Purpose */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-white text-xs font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>Origins & Purpose</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                  {ABOUT_PAGE_DATA.story.title}
                </h2>

                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
                  {ABOUT_PAGE_DATA.story.desc}
                </p>

                {/* The Formula Frosted Glass Card */}
                <div className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl space-y-3 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-extrabold text-white/80 tracking-widest flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>The Strategic Formula</span>
                    </span>
                    <span className="text-[10px] font-mono text-white/70">公式</span>
                  </div>

                  <div className="text-sm sm:text-base font-bold text-white space-y-1.5 leading-snug">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0" />
                      <span>Bangladesh Talent Market Understanding</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0" />
                      <span>+ Japanese Standards of Precision & Discipline</span>
                    </div>
                    <div className="pt-1 text-white text-base sm:text-lg font-extrabold border-t border-white/15">
                      = A More Reliable Approach to HR
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Our Core Philosophy Glass Card */}
              <div className="lg:col-span-6 bg-white/10 backdrop-blur-2xl p-8 sm:p-10 border border-white/20 rounded-2xl space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 text-white/5 font-sans font-black text-9xl select-none pointer-events-none">
                  哲学
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 border border-white/25 rounded-full text-xs font-bold text-white uppercase tracking-widest">
                    <span>Our Core Philosophy</span>
                  </div>

                  <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed italic border-l-4 border-white/50 pl-4 text-white">
                    &ldquo;Japanese precision does not mean making recruitment complicated. It means making every important step intentional.&rdquo;
                  </blockquote>

                  <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
                    We view recruitment not merely as filling vacancies, but as the beginning of a lasting relationship between an organization and the person who shapes its future.
                  </p>

                  <div className="pt-4 border-t border-white/15 grid grid-cols-2 gap-3 text-xs text-white/90">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                      <span>Ethical Governance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                      <span>Sustainable Career Growth</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                      <span>Kaizen Methodology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                      <span>100% Transparency</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Wave Curve Transition */}
        <div className="w-full overflow-hidden leading-none pointer-events-none -mt-[1px]">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="w-full h-12 sm:h-20 md:h-24 fill-[#3D151A]"
          >
            <path d="M0,0 L1440,0 C960,85 480,85 0,0 Z" />
          </svg>
        </div>
      </section>

      {/* The Japanese Standard of HR (5 Principles) */}
      <section className="py-20 md:py-28 bg-white border-b border-black/5 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl mb-12 md:mb-14 space-y-3">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              The Standard
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              The Japanese Standard of HR
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light">
              Precision in Every Stage. Integrity in Every Interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-7">
            {ABOUT_PAGE_DATA.japaneseStandards.map((std, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-black/8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#A71728]" />
                <div className="text-xs font-mono font-bold text-[#A71728] tracking-wider">
                  0{idx + 1}
                </div>
                <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-[#111] leading-snug">
                  {std.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-gray-600 font-light leading-relaxed">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-black/8 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-black/8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#A71728]" />
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#A71728] tracking-wider uppercase">
                <Compass className="w-3.5 h-3.5" />
                Our Vision
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#111] leading-snug">
                {ABOUT_PAGE_DATA.visionMission.vision}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Recognized as the benchmark for professional HR and talent acquisition in Bangladesh through reliability, talent quality, and long-term value creation.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-black/8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#A71728]" />
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#A71728] tracking-wider uppercase">
                <Target className="w-3.5 h-3.5" />
                Our Mission
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#111] leading-snug">
                {ABOUT_PAGE_DATA.visionMission.mission}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Building an ecosystem where organizations gain capable talent, professionals access credible career paths, and recruitment decisions are backed by structured evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Kawaii Advantage */}
      <section className="py-20 md:py-28 bg-white border-b border-black/5 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl mb-12 md:mb-14 space-y-2">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Distinct Value
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              The Kawaii Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
            {ABOUT_PAGE_DATA.kawaiiAdvantages.map((adv) => (
              <div
                key={adv.number}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-black/8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-3 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#A71728]" />
                <div className="text-xs font-mono font-bold text-[#A71728] tracking-wider">
                  {adv.number}
                </div>
                <h4 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-[#111] leading-snug">
                  {adv.title}
                </h4>
                <p className="text-xs sm:text-[13px] text-gray-600 font-light leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Commitment Callout */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
            Our National Commitment
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
            Supporting Organizations. Developing People. Strengthening the Workforce.
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
            When organizations recruit better, they improve productivity. When professionals find roles aligned with their capabilities, they develop stronger careers. And when these relationships work well, they contribute to a stronger Bangladesh.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <RedButton
              variant="primary"
              size="lg"
              onClick={() => handleOpenModal("employer")}
              className="text-xs sm:text-sm font-bold"
            >
              Partner With Us Today
            </RedButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
