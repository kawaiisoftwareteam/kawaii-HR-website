"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  ShieldCheck,
  HardHat,
  CheckCircle2,
  Truck,
  Factory,
  Cog,
  FileCheck,
  Send,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { RedButton } from "@/components/ui/RedButton";
import { BLUE_COLLAR_DATA } from "@/data/companyData";

export default function BlueCollarPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"employer" | "jobseeker">("employer");
  const [submitted, setSubmitted] = useState(false);

  const [inquiryForm, setInquiryForm] = useState({
    contactPerson: "",
    designation: "",
    email: "",
    worksite: "",
    categories: "Construction & Site Mechanics",
    workersCount: "",
    skills: "",
    duration: "Permanent",
    deploymentDate: "Immediate",
    shiftRequirements: "Day Shift",
    additionalReqs: "",
  });

  const handleOpenModal = (tab: "employer" | "jobseeker") => {
    setModalTab(tab);
    setModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0C0E12] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 japanese-grid-pattern opacity-25 pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#A71728]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#A71728]/15 border border-[#A71728]/40 text-[#A71728] text-xs font-bold uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-[#A71728]" />
              Skilled, Technical & Industrial Workforce
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold tracking-tight uppercase leading-[1.02] text-white"
            >
              Blue-Collar, Technical & <br />
              <span className="text-[#A71728]">Skilled Workforce Solutions.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl"
            >
              {BLUE_COLLAR_DATA.header.description}
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
                onClick={() => {
                  const formEl = document.getElementById("workforce-inquiry");
                  formEl?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-xs sm:text-sm font-bold"
              >
                Hire Skilled Workforce
              </RedButton>
              <RedButton
                variant="outline"
                size="lg"
                onClick={() => handleOpenModal("jobseeker")}
                className="!border-white/40 text-white hover:!bg-white/10 text-xs sm:text-sm font-bold"
              >
                Register as Skilled Worker
              </RedButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Disciplines We Supply */}
      <section className="py-24 md:py-32 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Operational Trades
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              Technical Disciplines We Supply
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light">
              Practically assessed, safety-oriented, and ready for deployment across Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLUE_COLLAR_DATA.disciplines.map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-premium-light border border-gray-200 hover:border-[#A71728] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-[#A71728]/10 text-[#A71728] font-bold flex items-center justify-center">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="text-[11px] uppercase font-bold text-gray-500 mb-2">
                      Roles & Trades:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.roles.map((r) => (
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

      {/* Practical Skill Verification & 5S Discipline */}
      <section className="py-24 md:py-32 bg-[#0C0E12] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
                Japanese Operational Quality
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
                Practical Trade Testing & <br />
                <span className="text-[#A71728]">Japanese 5S Discipline.</span>
              </h2>
              <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed">
                Industrial and infrastructure operations depend on workers who perform safely, consistently, and with discipline. A CV alone cannot demonstrate whether a technician can handle equipment on site.
              </p>
              <div className="p-6 bg-white/[0.04] border border-white/10 space-y-2">
                <div className="text-xs uppercase font-bold text-[#A71728] tracking-widest">
                  Japanese 5S Framework
                </div>
                <div className="text-sm font-semibold text-white">
                  Sort (Seiri) · Set in Order (Seiton) · Shine (Seiso) · Standardize (Seiketsu) · Sustain (Shitsuke)
                </div>
                <p className="text-xs text-white/60 font-light">
                  Supports a culture of workplace organization, safety awareness, attendance, and continuous improvement.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {BLUE_COLLAR_DATA.qaPillars.map((pillar, idx) => (
                <div key={idx} className="p-6 bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#A71728]" />
                    <h4 className="text-base font-bold uppercase text-white">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 font-light pl-8">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Workforce Models */}
      <section className="py-20 md:py-28 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-16 space-y-2">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Deployment Options
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              Flexible Workforce Models for Employers
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BLUE_COLLAR_DATA.models.map((mod, idx) => (
              <div key={idx} className="p-8 bg-premium-light border border-gray-200 space-y-3">
                <div className="text-xs font-bold text-[#A71728] uppercase tracking-wider">
                  Model 0{idx + 1}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-black">
                  {mod.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Workforce Inquiry Form */}
      <section id="workforce-inquiry" className="py-24 md:py-32 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-12">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Rapid Workforce Deployment
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              Hire a Workforce Built for Performance
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto font-light">
              Whether you need 10 technicians, 100 skilled workers, or a complete project workforce, tell us what your operation requires.
            </p>
          </div>

          <div className="bg-white border border-gray-300 p-8 sm:p-12 shadow-md">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#A71728]/10 text-[#A71728] border border-[#A71728] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase text-black">
                  Workforce Inquiry Logged
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Your workforce requirement has been routed to our Industrial & Technical Recruitment desk. We will contact you within 24 business hours with staffing availability.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Contact Person *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={inquiryForm.contactPerson}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, contactPerson: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Designation
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Plant Head / Project Manager"
                      value={inquiryForm.designation}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, designation: e.target.value })}
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
                      placeholder="corporate@domain.com"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Worksite Location *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g., Gazipur, Chattogram"
                      value={inquiryForm.worksite}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, worksite: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Job Category
                    </label>
                    <select
                      value={inquiryForm.categories}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, categories: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    >
                      <option value="Construction & Site Mechanics">Construction & Site Mechanics</option>
                      <option value="Manufacturing & Assembly Technicians">Manufacturing & Assembly Technicians</option>
                      <option value="Plant Maintenance & Heavy Machinery">Plant Maintenance & Heavy Machinery</option>
                      <option value="Logistics, Warehousing & Fleet">Logistics, Warehousing & Fleet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Number of Workers *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g., 20 or 150+"
                      value={inquiryForm.workersCount}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, workersCount: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Specific Skills / Tool Certifications Required
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g., 6G Welders, Electricians with License, Heavy Forklift Operators..."
                    value={inquiryForm.skills}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, skills: e.target.value })}
                    className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-[11px] text-gray-500 max-w-sm">
                    All recruitment conducted in compliance with Bangladesh Labor Act & safety regulations.
                  </p>
                  <RedButton variant="primary" size="lg" className="text-xs sm:text-sm font-bold">
                    Submit Workforce Requirement
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
