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

      {/* Hero with Background Image & Sakura Petals */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-black/10">
        {/* Background Image Layer - High Visibility */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/about_hero_bg.jpg"
            alt="Kawaii Group Japan Tokyo Headquarters"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-95 contrast-105"
          />
          {/* Subtle cinematic gradient so Tokyo skyline and sakura blossoms are crisp & visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        {/* Falling Sakura Petals Animation */}
        <SakuraPetals count={40} speed="medium" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Glass Card: Eye-Catching Main Editorial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-white/95 backdrop-blur-2xl p-6 sm:p-8 md:p-10 rounded-2xl border border-white/80 shadow-[0_25px_70px_rgba(0,0,0,0.35)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-5">
                {/* Header Pills & Seal */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A71728]/10 border border-[#A71728]/30 rounded-full shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#A71728] animate-pulse" />
                    <span className="text-[#A71728] text-[11px] font-extrabold uppercase tracking-wider">
                      SISTER CONCERN OF KAWAII GROUP (JAPAN)
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-black/5 text-[#111] text-[10px] font-mono font-bold tracking-widest uppercase rounded-full border border-black/10">
                    TOKYO × DHAKA
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-[clamp(1.85rem,3.8vw,3.4rem)] font-extrabold tracking-tight uppercase leading-[1.02] text-[#111]">
                  Redefining Talent Acquisition <br />
                  with <span className="text-[#A71728] underline decoration-[#A71728]/25 underline-offset-4">Japanese Standard.</span>
                </h1>

                {/* Short, punchy description */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  Operating as the official human resources and executive search sister concern of <strong className="text-black font-semibold">Kawaii Group (Tokyo, Japan)</strong>, we bridge international corporate rigor with Bangladesh&apos;s premier talent pool.
                </p>

                {/* Eye-catching Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="p-3 bg-[#FBFBFC] rounded-xl border border-gray-200/80 hover:border-[#A71728]/40 transition-colors">
                    <div className="text-[#A71728] text-xs font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Group Backing</span>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-snug">
                      Powered by Kawaii Group Tokyo infrastructure.
                    </p>
                  </div>

                  <div className="p-3 bg-[#FBFBFC] rounded-xl border border-gray-200/80 hover:border-[#A71728]/40 transition-colors">
                    <div className="text-[#A71728] text-xs font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5" />
                      <span>Kaizen Vetting</span>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-snug">
                      Rigorous 4-tier skill & cultural evaluation.
                    </p>
                  </div>

                  <div className="p-3 bg-[#FBFBFC] rounded-xl border border-gray-200/80 hover:border-[#A71728]/40 transition-colors">
                    <div className="text-[#A71728] text-xs font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                      <HeartHandshake className="w-3.5 h-3.5" />
                      <span>100% Ethical</span>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-snug">
                      Zero candidate fee & full labor compliance.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs & Micro-Stats footer */}
              <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <RedButton
                    variant="primary"
                    size="md"
                    onClick={() => handleOpenModal("employer")}
                    className="text-xs sm:text-sm font-bold shadow-lg shadow-[#A71728]/20"
                  >
                    Partner With Us Today
                  </RedButton>
                  <RedButton
                    variant="outline"
                    size="md"
                    onClick={() => handleOpenModal("jobseeker")}
                    className="text-xs sm:text-sm font-bold bg-white/80 hover:bg-white"
                  >
                    Talk to Our HR Experts
                  </RedButton>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-[10px] font-mono uppercase text-gray-500 block">Placement Standard</span>
                  <span className="text-xs font-bold text-[#A71728]">100% Verified Talents</span>
                </div>
              </div>
            </motion.div>

            {/* Right Glass Card: Interactive Sister Concern Visual Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 bg-white/95 backdrop-blur-2xl p-6 sm:p-8 rounded-2xl border border-white/80 shadow-[0_25px_70px_rgba(0,0,0,0.35)] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#A71728]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-5">
                {/* Parent Group Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-200/80">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#A71728] block">
                      PARENT HEADQUARTERS
                    </span>
                    <h3 className="text-xl font-extrabold uppercase tracking-tight text-black">
                      Kawaii Group (Japan)
                    </h3>
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-[#A71728]/10 to-[#FFB7C5]/20 text-[#A71728] text-xs font-bold border border-[#A71728]/30 rounded-lg shadow-xs flex items-center gap-1.5">
                    <span>🇯🇵</span>
                    <span className="font-mono">可愛いグループ</span>
                  </div>
                </div>

                {/* 3 Eye-Catching Feature Rows */}
                <div className="space-y-3">
                  <div className="p-3.5 bg-gradient-to-r from-[#FFF5F5] to-white rounded-xl border border-[#A71728]/15 hover:border-[#A71728]/30 transition-all flex items-start gap-3.5 shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-[#A71728] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-black uppercase tracking-tight">
                        Official HR Sister Concern
                      </div>
                      <div className="text-xs text-gray-600 font-light mt-0.5 leading-relaxed">
                        Dedicated bilateral talent engine directly backed by Kawaii Group&apos;s corporate governance.
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200/80 hover:border-[#A71728]/30 transition-all flex items-start gap-3.5 shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <Globe className="w-4 h-4 text-[#FFB7C5]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-black uppercase tracking-tight">
                        Bilateral Tokyo × Dhaka Desk
                      </div>
                      <div className="text-xs text-gray-600 font-light mt-0.5 leading-relaxed">
                        Direct connection to Japanese multinational standards, high-tier placements, and cultural fit.
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200/80 hover:border-[#A71728]/30 transition-all flex items-start gap-3.5 shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-[#A71728]/10 text-[#A71728] flex items-center justify-center shrink-0 shadow-sm mt-0.5 border border-[#A71728]/25">
                      <CheckCircle2 className="w-4 h-4 text-[#A71728]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-black uppercase tracking-tight">
                        Kaizen Quality Assurance
                      </div>
                      <div className="text-xs text-gray-600 font-light mt-0.5 leading-relaxed">
                        Multi-phase vetting ensuring zero candidate misalignments and guaranteed retention.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Live Indicator Bar */}
              <div className="mt-5 pt-3.5 border-t border-gray-200/80 flex items-center justify-between text-[11px] font-mono text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-gray-800">Tokyo & Dhaka Live Desks</span>
                </div>
                <span className="text-[#A71728] font-bold tracking-wider">EST. 2025</span>
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

      {/* Story & Philosophy */}
      <section className="relative py-20 md:py-28 bg-premium-light border-b border-black/5 overflow-hidden">
        <SakuraPetals count={20} speed="slow" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
                Origins & Purpose
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
                {ABOUT_PAGE_DATA.story.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                {ABOUT_PAGE_DATA.story.desc}
              </p>
              <div className="p-6 bg-white border border-gray-200 space-y-2">
                <div className="text-xs uppercase font-bold text-[#A71728] tracking-wider">
                  The Formula
                </div>
                <div className="text-base sm:text-lg font-bold text-gray-900">
                  Bangladesh&apos;s Talent Market Understanding <br className="hidden sm:inline" />
                  + Japanese Standards of Precision & Discipline <br className="hidden sm:inline" />
                  = A More Reliable Approach to HR
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white text-[#111] p-8 sm:p-10 border border-black/8 space-y-6">
              <div className="text-xs font-bold text-[#A71728] uppercase tracking-widest">
                Our Core Philosophy
              </div>
              <blockquote className="text-lg sm:text-xl font-medium leading-relaxed italic border-l-2 border-[#A71728] pl-4">
                &ldquo;Japanese precision does not mean making recruitment complicated. It means making every important step intentional.&rdquo;
              </blockquote>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                We view recruitment not merely as filling vacancies, but as the beginning of a lasting relationship between an organization and the person who shapes its future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Japanese Standard of HR (5 Principles) */}
      <section className="py-24 md:py-32 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-16 space-y-3">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {ABOUT_PAGE_DATA.japaneseStandards.map((std, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#F8F9FA] border border-gray-200 hover:border-[#A71728] transition-all space-y-3 group"
              >
                <div className="text-xs font-bold text-[#A71728] tracking-widest uppercase">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight text-black group-hover:text-[#A71728] transition-colors">
                  {std.title}
                </h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-premium-light text-[#111] border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 bg-white border border-black/8 space-y-4">
              <div className="text-xs font-bold text-[#A71728] uppercase tracking-widest">
                Our Vision
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-[#111]">
                {ABOUT_PAGE_DATA.visionMission.vision}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Recognized as the benchmark for professional HR and talent acquisition in Bangladesh through reliability, talent quality, and long-term value creation.
              </p>
            </div>

            <div className="p-8 bg-white border border-black/8 space-y-4">
              <div className="text-xs font-bold text-[#A71728] uppercase tracking-widest">
                Our Mission
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-[#111]">
                {ABOUT_PAGE_DATA.visionMission.mission}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Building an ecosystem where organizations gain capable talent, professionals access credible career paths, and recruitment decisions are backed by structured evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Kawaii Advantage */}
      <section className="py-20 md:py-28 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-16 space-y-2">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Distinct Value
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              The Kawaii Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_PAGE_DATA.kawaiiAdvantages.map((adv) => (
              <div key={adv.number} className="p-7 bg-gray-50 border border-gray-200 space-y-3">
                <span className="text-2xl font-black text-[#A71728]">{adv.number}</span>
                <h4 className="text-lg font-bold uppercase text-black">
                  {adv.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
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
