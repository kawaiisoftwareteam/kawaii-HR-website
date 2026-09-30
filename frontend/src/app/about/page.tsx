"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Compass,
  CheckCircle2,
  Users,
  Target,
  Building2,
  TrendingUp,
  HeartHandshake,
  Layers,
  Globe,
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

      {/* Hero with Background Image & Sakura Petals - Soft Cinematic Shade */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-black/20 bg-[#161618]">
        {/* Background Image Layer - Crisp Tokyo Skyline & Sakura with Subtle Black Tint */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/about_hero_bg.jpg"
            alt="Kawaii Group Japan Tokyo Headquarters"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-95 contrast-105 opacity-75"
          />
          {/* Subtle soft black gradient overlay for cinematic depth without being pitch black */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25" />
        </div>

        {/* Falling Sakura Petals Animation */}
        <SakuraPetals count={40} speed="medium" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Seamless Integrated Editorial on Soft Dark Background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-white"
            >
              {/* Header Pills & Seal */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#A71728] border border-[#A71728] shadow-sm rounded-none text-white">
                  <span className="w-2 h-2 rounded-full bg-[#FFEAA7] animate-pulse" />
                  <span className="text-[11px] font-extrabold uppercase tracking-widest">
                    SISTER CONCERN OF KAWAII GROUP (JAPAN)
                  </span>
                </div>
                <span className="px-3 py-1.5 bg-black/40 backdrop-blur-md text-[#FFEAA7] text-[10px] font-mono font-bold tracking-widest uppercase rounded-none border border-white/20">
                  TOKYO ⇄ DHAKA
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-[clamp(2.1rem,4.4vw,3.9rem)] font-extrabold tracking-tight uppercase leading-[1.04] text-white">
                Redefining Talent Acquisition <br />
                with <span className="text-[#FFEAA7] underline decoration-[#A71728] underline-offset-8">Japanese Standard.</span>
              </h1>

              {/* Punchy Narrative Description */}
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light max-w-2xl">
                Operating as the official human resources and executive search sister concern of <strong className="text-white font-semibold">Kawaii Group (Tokyo, Japan)</strong>, we bridge international corporate rigor with Bangladesh&apos;s premier talent pool.
              </p>

              {/* 3 Frosted Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 bg-black/35 backdrop-blur-md border border-white/20 hover:border-[#FFEAA7]/60 hover:bg-black/45 transition-all rounded-none shadow-sm">
                  <div className="text-[#FFEAA7] text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#FFEAA7]" />
                    <span>Group Backing</span>
                  </div>
                  <p className="text-[11px] text-white/80 leading-snug font-light">
                    Powered by Kawaii Group Tokyo infrastructure.
                  </p>
                </div>

                <div className="p-3.5 bg-black/35 backdrop-blur-md border border-white/20 hover:border-[#FFEAA7]/60 hover:bg-black/45 transition-all rounded-none shadow-sm">
                  <div className="text-[#FFEAA7] text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-[#FFEAA7]" />
                    <span>Kaizen Vetting</span>
                  </div>
                  <p className="text-[11px] text-white/80 leading-snug font-light">
                    Rigorous 4-tier skill & cultural evaluation.
                  </p>
                </div>

                <div className="p-3.5 bg-black/35 backdrop-blur-md border border-white/20 hover:border-[#FFEAA7]/60 hover:bg-black/45 transition-all rounded-none shadow-sm">
                  <div className="text-[#FFEAA7] text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <HeartHandshake className="w-4 h-4 text-[#FFEAA7]" />
                    <span>100% Ethical</span>
                  </div>
                  <p className="text-[11px] text-white/80 leading-snug font-light">
                    Zero candidate fee & full labor compliance.
                  </p>
                </div>
              </div>

              {/* CTAs & Micro-Stats footer */}
              <div className="pt-3 border-t border-white/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <RedButton
                    variant="primary"
                    size="md"
                    onClick={() => handleOpenModal("employer")}
                    className="text-xs sm:text-sm font-bold rounded-none shadow-lg shadow-[#A71728]/35"
                  >
                    Partner With Us Today
                  </RedButton>
                  <RedButton
                    variant="white"
                    size="md"
                    onClick={() => handleOpenModal("jobseeker")}
                    className="text-xs sm:text-sm font-bold rounded-none bg-white text-black hover:bg-gray-100 shadow-sm"
                  >
                    Talk to Our HR Experts
                  </RedButton>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-[10px] font-mono uppercase text-white/70 block tracking-wider">Placement Standard</span>
                  <span className="text-xs font-bold text-[#FFEAA7] font-mono">100% Verified Talents</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Tokyo System Gradient Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white p-7 sm:p-8 rounded-none border-2 border-white/20 shadow-2xl space-y-5 relative overflow-hidden"
            >
              {/* Subtle Japanese Watermark */}
              <div className="absolute -bottom-6 -right-6 text-white/5 font-mono font-black text-9xl select-none pointer-events-none">
                東京
              </div>

              {/* Parent Group Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/20 relative z-10">
                <div>
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#FFEAA7] block">
                    PARENT HEADQUARTERS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white">
                    Kawaii Group (Japan)
                  </h3>
                </div>
                <div className="px-3 py-1 bg-black/30 border border-white/20 text-[#FFEAA7] text-xs font-bold rounded-none shadow-xs flex items-center gap-1.5">
                  <span>🇯🇵</span>
                  <span className="font-mono">可愛いグループ</span>
                </div>
              </div>

              {/* 3 Eye-Catching Feature Rows */}
              <div className="space-y-3 relative z-10">
                <div className="p-3.5 bg-black/25 rounded-none border border-white/20 hover:border-[#FFEAA7]/40 transition-all flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-none bg-[#FFEAA7] text-[#A71728] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-tight">
                      Official HR Sister Concern
                    </div>
                    <div className="text-xs text-white/90 font-light mt-0.5 leading-relaxed">
                      Dedicated bilateral talent engine directly backed by Kawaii Group&apos;s corporate governance.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-black/25 rounded-none border border-white/20 hover:border-[#FFEAA7]/40 transition-all flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-none bg-black/40 border border-white/20 text-[#FFEAA7] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <Globe className="w-4 h-4 text-[#FFEAA7]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-tight">
                      Bilateral Tokyo × Dhaka Desk
                    </div>
                    <div className="text-xs text-white/90 font-light mt-0.5 leading-relaxed">
                      Direct connection to Japanese multinational standards, high-tier placements, and cultural fit.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-black/25 rounded-none border border-white/20 hover:border-[#FFEAA7]/40 transition-all flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-none bg-black/40 border border-white/20 text-[#FFEAA7] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFEAA7]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-tight">
                      Kaizen Quality Assurance
                    </div>
                    <div className="text-xs text-white/90 font-light mt-0.5 leading-relaxed">
                      Multi-phase vetting ensuring zero candidate misalignments and guaranteed retention.
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Live Indicator Bar */}
              <div className="pt-3.5 border-t border-white/20 flex items-center justify-between text-[11px] font-mono text-white/90 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFEAA7] animate-pulse" />
                  <span className="font-semibold text-white">Tokyo & Dhaka Live Desks</span>
                </div>
                <span className="text-[#FFEAA7] font-bold tracking-wider">EST. 2025</span>
              </div>
            </motion.div>

          </div>
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
            className="w-full h-12 sm:h-20 md:h-24 fill-[#A71728]"
          >
            <path d="M0,0 C320,85 880,105 1440,20 L1440,100 L0,100 Z" />
          </svg>
        </div>

        {/* Main Curved Section Body in System Brand Colors */}
        <div className="relative py-16 md:py-24 bg-gradient-to-br from-[#A71728] via-[#8E1321] to-[#3B070D] text-white overflow-hidden">
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
                    <span className="text-xs uppercase font-extrabold text-[#FFEAA7] tracking-widest flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>The Strategic Formula</span>
                    </span>
                    <span className="text-[10px] font-mono text-white/70">公式</span>
                  </div>

                  <div className="text-sm sm:text-base font-bold text-white space-y-1.5 leading-snug">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FFEAA7] shrink-0" />
                      <span>Bangladesh Talent Market Understanding</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FFEAA7] shrink-0" />
                      <span>+ Japanese Standards of Precision & Discipline</span>
                    </div>
                    <div className="pt-1 text-[#FFEAA7] text-base sm:text-lg font-extrabold border-t border-white/15">
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

                  <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed italic border-l-4 border-[#FFEAA7] pl-4 text-white">
                    &ldquo;Japanese precision does not mean making recruitment complicated. It means making every important step intentional.&rdquo;
                  </blockquote>

                  <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
                    We view recruitment not merely as filling vacancies, but as the beginning of a lasting relationship between an organization and the person who shapes its future.
                  </p>

                  <div className="pt-4 border-t border-white/15 grid grid-cols-2 gap-3 text-xs text-white/90">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA7]" />
                      <span>Ethical Governance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA7]" />
                      <span>Sustainable Career Growth</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA7]" />
                      <span>Kaizen Methodology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA7]" />
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
            className="w-full h-12 sm:h-20 md:h-24 fill-[#3B070D]"
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
                className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white shadow-xl hover:shadow-2xl border border-white/15 hover:-translate-y-1.5 transition-all duration-300 space-y-5 flex flex-col justify-between group relative overflow-hidden min-h-[310px]"
              >
                {/* Subtle Japanese Watermark on Hover */}
                <div className="absolute -bottom-4 -right-4 text-white/5 font-mono font-black text-7xl select-none pointer-events-none group-hover:text-white/10 transition-colors">
                  0{idx + 1}
                </div>

                <div className="space-y-3.5 relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/25 border border-white/20 text-xs font-mono font-bold text-[#FFEAA7] tracking-wider uppercase">
                    <span>STEP 0{idx + 1}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-white leading-snug">
                    {std.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-white/90 font-light leading-relaxed">
                    {std.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-white/15 text-[10px] font-mono text-[#FFEAA7] tracking-widest uppercase flex items-center justify-between relative z-10">
                  <span>STANDARD</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA7] animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-black/8 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#A71728] via-[#8E1321] to-[#680C17] text-white shadow-xl hover:shadow-2xl border border-white/15 hover:-translate-y-1.5 transition-all duration-300 space-y-5 relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute -bottom-6 -right-6 text-white/5 font-sans font-black text-8xl select-none pointer-events-none group-hover:text-white/10 transition-colors">
                VISION
              </div>

              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 border border-white/20 text-xs font-mono font-bold text-[#FFEAA7] tracking-wider uppercase">
                  <Compass className="w-3.5 h-3.5" />
                  <span>OUR VISION</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white leading-snug">
                  {ABOUT_PAGE_DATA.visionMission.vision}
                </h3>
                <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
                  Recognized as the benchmark for professional HR and talent acquisition in Bangladesh through reliability, talent quality, and long-term value creation.
                </p>
              </div>

              <div className="pt-4 border-t border-white/15 text-[11px] font-mono text-[#FFEAA7] tracking-widest uppercase flex items-center justify-between relative z-10">
                <span>BILATERAL STRATEGY</span>
                <span className="w-2 h-2 rounded-full bg-[#FFEAA7] animate-pulse" />
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#A71728] via-[#8E1321] to-[#680C17] text-white shadow-xl hover:shadow-2xl border border-white/15 hover:-translate-y-1.5 transition-all duration-300 space-y-5 relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute -bottom-6 -right-6 text-white/5 font-sans font-black text-8xl select-none pointer-events-none group-hover:text-white/10 transition-colors">
                MISSION
              </div>

              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 border border-white/20 text-xs font-mono font-bold text-[#FFEAA7] tracking-wider uppercase">
                  <Target className="w-3.5 h-3.5" />
                  <span>OUR MISSION</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white leading-snug">
                  {ABOUT_PAGE_DATA.visionMission.mission}
                </h3>
                <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
                  Building an ecosystem where organizations gain capable talent, professionals access credible career paths, and recruitment decisions are backed by structured evaluation.
                </p>
              </div>

              <div className="pt-4 border-t border-white/15 text-[11px] font-mono text-[#FFEAA7] tracking-widest uppercase flex items-center justify-between relative z-10">
                <span>ETHICAL ECOSYSTEM</span>
                <span className="w-2 h-2 rounded-full bg-[#FFEAA7] animate-pulse" />
              </div>
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
                className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white shadow-xl hover:shadow-2xl border border-white/15 hover:-translate-y-1.5 transition-all duration-300 space-y-4 flex flex-col justify-between min-h-[290px] relative overflow-hidden group"
              >
                {/* Subtle Japanese Watermark */}
                <div className="absolute -bottom-4 -right-4 text-white/5 font-mono font-black text-7xl select-none pointer-events-none group-hover:text-white/10 transition-colors">
                  {adv.number}
                </div>

                <div className="space-y-3.5 relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/25 border border-white/20 text-xs font-mono font-bold text-[#FFEAA7] tracking-wider uppercase">
                    <span>ADVANTAGE {adv.number}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-white leading-snug">
                    {adv.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-white/90 font-light leading-relaxed">
                    {adv.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-white/15 text-[10px] font-mono text-[#FFEAA7] tracking-widest uppercase flex items-center justify-between relative z-10">
                  <span>KAWAII QUALITY</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA7] animate-pulse" />
                </div>
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
