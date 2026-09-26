"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  ShieldCheck,
  Briefcase,
  Users,
  Target,
  Clock,
  FileCheck,
  Send,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { RedButton } from "@/components/ui/RedButton";
import {
  BUSINESS_SOLUTIONS,
  WHITE_COLLAR_DATA,
  BLUE_COLLAR_DATA,
} from "@/data/companyData";

export default function ForBusinessesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"employer" | "jobseeker">("employer");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Corporate inquiry form state
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    designation: "",
    email: "",
    phone: "",
    industry: "IT & Software",
    positions: "",
    employmentType: "Permanent / Direct Hire",
    skills: "",
    timeline: "Within 2–4 weeks",
    message: "",
  });

  const handleOpenModal = (tab: "employer" | "jobseeker") => {
    setModalTab(tab);
    setModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="relative min-h-screen bg-white text-[#111111] font-sans selection:bg-[#A71728] selection:text-white overflow-x-hidden">
      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
      />
      <Navbar onOpenModal={handleOpenModal} />

      {/* Hero Section - Full Background Image with Light Seamless Corporate Aesthetics */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-[#111111] overflow-hidden border-b border-black/8 min-h-[78vh] flex items-center bg-[#FAFAFA]">
        {/* Full Background Image Layer */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            initial={{ scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src="/images/japanese_office_team.jpg"
            alt="Kawaii Japan HR Corporate Team"
            className="w-full h-full object-cover object-[center_right] lg:object-right"
          />
          {/* Light/White Seamless Gradient Overlay - Keeps text perfectly readable on left & lets image shine vibrantly on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30 lg:from-white lg:via-white/90 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/40" />
          <div className="absolute inset-0 japanese-grid-pattern opacity-15" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#A71728]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-[#A71728]/30 text-[#A71728] text-xs font-bold uppercase tracking-widest shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#A71728] animate-pulse" />
                For Businesses & Corporate Clients
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[clamp(2.2rem,4.8vw,4.5rem)] font-extrabold tracking-tight uppercase leading-[1.04] text-[#111111]"
              >
                Precision HR Solutions for Businesses <br />
                <span className="text-[#A71728]">Building Bangladesh&apos;s Future.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-700 font-light leading-relaxed max-w-2xl"
              >
                {BUSINESS_SOLUTIONS.header.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <RedButton
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    const formElement = document.getElementById("inquiry-form");
                    formElement?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-xs sm:text-sm font-bold shadow-lg shadow-[#A71728]/25"
                >
                  Discuss Your Hiring Requirements
                </RedButton>
                <RedButton
                  variant="outline"
                  size="lg"
                  onClick={() => handleOpenModal("employer")}
                  className="text-xs sm:text-sm font-bold bg-white/80 backdrop-blur-sm border-gray-300 text-gray-900 hover:border-[#A71728] hover:text-[#A71728] shadow-sm"
                >
                  Request Corporate Consultation
                </RedButton>
              </motion.div>

              {/* Quick Trust Pillars */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-4 border-t border-black/10 grid grid-cols-1 sm:grid-cols-3 gap-3"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>Japanese Standard Vetting</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>Zero Placement Cost</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>Executive Talent Pool</span>
                </div>
              </motion.div>
            </div>

            {/* Right Floating Ambient Glass Stats Card over the Background Image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 flex justify-end"
            >
              <div className="w-full max-w-sm p-6 bg-white/90 backdrop-blur-md border border-white/80 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#A71728]">
                    Tokyo ⇄ Dhaka Hub
                  </span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A71728] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A71728]" />
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-bold text-gray-900">
                    Precision Workforce Sourcing
                  </div>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">
                    Connecting top Bangladeshi talent with leading multinational and Japanese enterprises.
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-gray-800 bg-gray-50/80 p-3 rounded-lg border border-gray-100">
                  <span>Candidate Retention</span>
                  <span className="text-[#A71728] font-bold text-sm">98% Avg</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="py-20 md:py-28 bg-premium-light border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
                Strategic Human Resources
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black leading-tight">
                {BUSINESS_SOLUTIONS.strategicApproach.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                {BUSINESS_SOLUTIONS.strategicApproach.description}
              </p>
              <div className="p-6 bg-white border-l-4 border-[#A71728] shadow-sm">
                <div className="text-xs uppercase font-bold text-[#A71728] tracking-widest mb-1">
                  Our Focus
                </div>
                <div className="text-sm sm:text-base font-semibold text-gray-900">
                  Better Matching. Lower Hiring Risk. Greater Operational Efficiency.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="text-lg font-bold uppercase tracking-tight text-black mb-6 pb-4 border-b border-gray-100">
                How Our Structured Methodology Supports Your Business
              </h3>
              <div className="space-y-4">
                {BUSINESS_SOLUTIONS.strategicApproach.focusPillars.map((pillar, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#A71728] shrink-0 mt-0.5" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specialized Talent Solutions */}
      <section className="py-24 md:py-32 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Sector Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              Industry-Specialized <span className="text-[#A71728]">Talent Solutions</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light">
              Tailored recruitment strategies aligned with the technical and operational realities of Bangladesh&apos;s primary growth drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BUSINESS_SOLUTIONS.industrySpecializations.map((spec) => (
              <div
                key={spec.id}
                className="p-8 bg-[#F9FAFB] border border-gray-200 hover:border-[#A71728] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black group-hover:text-[#A71728] transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                    {spec.desc}
                  </p>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="text-[11px] uppercase font-bold tracking-wider text-gray-500 mb-2">
                      Key Positions Recruited:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {spec.roles.map((r) => (
                        <span
                          key={r}
                          className="px-2.5 py-1 bg-white border border-gray-200 text-xs font-medium text-gray-800"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized HR Solutions for Modern Enterprises */}
      <section className="py-24 md:py-32 bg-premium-light text-[#111] border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Enterprise Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#111]">
              Specialized HR Solutions for <span className="text-[#A71728]">Modern Enterprises</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BUSINESS_SOLUTIONS.specializedSolutions.map((sol, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border border-black/8 hover:border-[#A71728]/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-2xl font-black text-[#A71728]">0{idx + 1}</span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-[#111]">
                    {sol.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#A71728] uppercase tracking-wide">
                    {sol.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Collar */}
      <section id="white-collar" className="py-24 md:py-32 bg-white border-b border-black/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              White Collar
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              {WHITE_COLLAR_DATA.header.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              {WHITE_COLLAR_DATA.header.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {WHITE_COLLAR_DATA.practiceAreas.map((area) => (
              <div
                key={area.title}
                className="p-6 bg-[#F9FAFB] border border-gray-200 space-y-2"
              >
                <h3 className="text-base font-bold uppercase tracking-tight text-black">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {WHITE_COLLAR_DATA.valueProps.map((vp) => (
              <div key={vp.title} className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728] shrink-0" />
                  <h4 className="text-sm font-bold uppercase text-black">{vp.title}</h4>
                </div>
                <p className="text-xs text-gray-600 font-light leading-relaxed pl-6">
                  {vp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue Collar */}
      <section id="blue-collar" className="py-24 md:py-32 bg-premium-light text-[#111] border-b border-black/8 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Blue Collar
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#111]">
              {BLUE_COLLAR_DATA.header.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              {BLUE_COLLAR_DATA.header.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {BLUE_COLLAR_DATA.disciplines.map((d) => (
              <div
                key={d.title}
                className="p-6 bg-white border border-black/8 space-y-3"
              >
                <h3 className="text-base font-bold uppercase tracking-tight text-[#111]">
                  {d.title}
                </h3>
                <p className="text-xs text-gray-500 font-light">{d.desc}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {d.roles.slice(0, 6).map((r) => (
                    <span
                      key={r}
                      className="px-2 py-1 border border-black/10 text-[10px] uppercase tracking-wide text-gray-600"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {BLUE_COLLAR_DATA.models.map((m) => (
              <div key={m.title} className="space-y-2 border-t border-black/8 pt-4">
                <h4 className="text-sm font-bold uppercase text-[#111]">{m.title}</h4>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Matching & Compliance */}
      <section className="py-20 md:py-28 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
                Methodology & Rigor
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-black">
                Our Approach to Quality Matching
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed font-light">
                <div className="p-4 bg-gray-50 border border-gray-200">
                  <strong className="block text-black font-semibold uppercase mb-1">
                    1. We Start With Your Business Requirement
                  </strong>
                  Before sourcing candidates, we work to understand the context behind the vacancy: business objectives, team environment, seniority, reporting structure, and performance expectations.
                </div>
                <div className="p-4 bg-gray-50 border border-gray-200">
                  <strong className="block text-black font-semibold uppercase mb-1">
                    2. We Source With Purpose
                  </strong>
                  Fewer unsuitable profiles. More meaningful hiring conversations. Candidates are pre-screened against agreed criteria to produce a shortlist of genuine relevance.
                </div>
                <div className="p-4 bg-gray-50 border border-gray-200">
                  <strong className="block text-black font-semibold uppercase mb-1">
                    3. Structured & Professional Hiring Process
                  </strong>
                  We handle interview scheduling, feedback collection, tracking, and joining support, relieving administrative pressure on your internal HR team.
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
                Ethical Practice
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-black">
                Supporting Compliance & Responsible Employment
              </h2>
              <p className="text-sm text-gray-700 font-light leading-relaxed">
                A reliable workforce solution requires attention to process, documentation, and applicable employment requirements. Kawaii Japan Career & HR supports structured recruitment practices in alignment with applicable Bangladesh employment, contractual, and workforce requirements.
              </p>
              <div className="space-y-3">
                {[
                  "Clear candidate documentation and background checks",
                  "Structured employment and contract administration",
                  "Support for payroll management where applicable",
                  "Strict confidential handling of recruitment assignments",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-gray-800">
                    <ShieldCheck className="w-4 h-4 text-[#A71728] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Dedicated Partner Standards */}
      <section className="py-20 bg-[#F8F9FA] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-black">
              Your Dedicated Recruitment Partner
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-light">
              When you submit a corporate inquiry, your hiring requirement is treated as a business engagement—not simply another vacancy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {BUSINESS_SOLUTIONS.partnerStandards.map((std, i) => (
              <div key={i} className="p-6 bg-white border border-gray-200 shadow-sm space-y-2">
                <div className="text-xs font-bold text-[#A71728] uppercase tracking-wider">
                  0{i + 1}
                </div>
                <h4 className="text-sm font-bold uppercase text-black leading-snug">
                  {std.title}
                </h4>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Hiring Inquiry Form */}
      <section id="inquiry-form" className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-12">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Start The Conversation
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              Submit a Corporate Hiring Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto font-light">
              Share your workforce requirement with us. Our corporate solutions team will review the role and connect you with a dedicated account representative within 24 business hours.
            </p>
          </div>

          <div className="bg-[#FBFBFB] border border-gray-300 p-8 sm:p-12 shadow-lg relative">
            {formSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#A71728]/10 text-[#A71728] border border-[#A71728] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase text-black">
                  Corporate Inquiry Received
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you. Your hiring mandate has been assigned to our Corporate Solutions division. A dedicated account manager will contact you within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold uppercase tracking-widest text-[#A71728] underline"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter registered company name"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Contact Person *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Full name of representative"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Designation / Job Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Head of HR / MD"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Business Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="corporate@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+880 17..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Industry Sector *
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    >
                      <option value="IT & Software">IT & Software</option>
                      <option value="Engineering & Construction">Engineering & Construction</option>
                      <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                      <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                      <option value="Financial Services">Financial Services</option>
                      <option value="Facility Management">Facility Management</option>
                      <option value="Corporate / Professional Services">Corporate / Professional Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Number of Vacancies
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 1-5 or 50+"
                      value={formData.positions}
                      onChange={(e) => setFormData({ ...formData, positions: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Expected Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    >
                      <option value="Immediate">Immediate</option>
                      <option value="Within 2–4 weeks">Within 2–4 weeks</option>
                      <option value="Within 1–3 months">Within 1–3 months</option>
                      <option value="Ongoing Recruitment">Ongoing Recruitment</option>
                      <option value="Planning / Future Requirement">Planning / Future Requirement</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Required Experience / Technical Skills
                  </label>
                  <input
                    type="text"
                    placeholder="Key skills, certifications, degrees, or years of experience required"
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Hiring Project Details / Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us more about the position, location, team structure, or recruitment goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-[11px] text-gray-500 max-w-sm">
                    Your business information is strictly confidential and protected by NDA protocols.
                  </p>
                  <RedButton variant="primary" size="lg" className="text-xs sm:text-sm font-bold">
                    Submit Corporate Inquiry
                  </RedButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
