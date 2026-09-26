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
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { RedButton } from "@/components/ui/RedButton";
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

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-premium-light text-[#111111] overflow-hidden border-b border-black/8">
        <div className="absolute inset-0 japanese-grid-pattern opacity-25 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#A71728]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#A71728]/15 border border-[#A71728]/40 text-[#A71728] text-xs font-bold uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-[#A71728]" />
              About Kawaii Japan Career & HR
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold tracking-tight uppercase leading-[1.02] text-[#111]"
            >
              Redefining Talent Acquisition <br />
              with <span className="text-[#A71728]">Japanese Standard.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl"
            >
              {ABOUT_PAGE_DATA.header.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <RedButton
                variant="primary"
                size="lg"
                onClick={() => handleOpenModal("employer")}
                className="text-xs sm:text-sm font-bold"
              >
                Partner With Us Today
              </RedButton>
              <RedButton
                variant="outline"
                size="lg"
                onClick={() => handleOpenModal("jobseeker")}
                className="text-xs sm:text-sm font-bold"
              >
                Talk to Our HR Experts
              </RedButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20 md:py-28 bg-premium-light border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
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
