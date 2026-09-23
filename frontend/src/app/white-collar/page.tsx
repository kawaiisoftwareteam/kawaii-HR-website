"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Lock,
  FileCheck,
  CheckCircle2,
  Upload,
  ArrowRight,
  TrendingUp,
  UserCheck,
  Building,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { RedButton } from "@/components/ui/RedButton";
import { WHITE_COLLAR_DATA } from "@/data/companyData";

export default function WhiteCollarPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"employer" | "jobseeker">("employer");
  const [submitted, setSubmitted] = useState(false);
  const [resumeFile, setResumeFile] = useState("");

  const [seniorForm, setSeniorForm] = useState({
    name: "",
    email: "",
    phone: "",
    currentPosition: "",
    yearsExperience: "",
    coreExpertise: "",
    degree: "",
    preferredPosition: "",
    preferredIndustry: "IT, Software & Tech Leadership",
    salary: "",
    noticePeriod: "1-2 months",
    objectives: "",
  });

  const handleOpenModal = (tab: "employer" | "jobseeker") => {
    setModalTab(tab);
    setModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#090A0E] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 japanese-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#A71728]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#A71728]/15 border border-[#A71728]/40 text-[#A71728] text-xs font-bold uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-[#A71728]" />
              Executive Search & Professional Placement
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold tracking-tight uppercase leading-[1.02] text-white"
            >
              White-Collar & <br />
              <span className="text-[#A71728]">Professional Recruitment.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl"
            >
              Connecting exceptional professionals with high-impact career opportunities. Executive search, specialist recruitment, and rigorous professional vetting for Bangladesh&apos;s most ambitious organizations.
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
                Request Executive Search
              </RedButton>
              <RedButton
                variant="outline"
                size="lg"
                onClick={() => {
                  const resumeEl = document.getElementById("senior-resume");
                  resumeEl?.scrollIntoView({ behavior: "smooth" });
                }}
                className="!border-white/40 text-white hover:!bg-white/10 text-xs sm:text-sm font-bold"
              >
                Submit Professional Resume
              </RedButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When the Role Is Critical, Precision Matters */}
      <section className="py-20 md:py-28 bg-premium-light border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
                High-Value Talent Strategy
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
                When the Role Is Critical, <br />
                <span className="text-[#A71728]">Precision Matters.</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                Critical positions require more than a database search. A senior appointment influences team performance, project delivery, organizational culture, and long-term business growth. That is why our white-collar recruitment begins by deeply understanding the business objective behind the position.
              </p>
            </div>

            <div className="lg:col-span-6 bg-white border border-gray-200 p-8 shadow-sm space-y-3">
              <div className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">
                Evaluation Criteria for Senior Mandates:
              </div>
              {[
                "Role responsibilities & measurable performance expectations",
                "Technical & functional architectural capabilities",
                "Demonstrated leadership, communication & team governance",
                "Sector depth, commercial awareness & market reputation",
                "Organizational & cultural compatibility",
                "Career trajectory, personal motivation & compensation parameters",
              ].map((crit, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>{crit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 md:py-32 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Specialized Divisions
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              Industry Practice Areas
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light">
              Tailored search practices for mid-to-senior level talent across Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHITE_COLLAR_DATA.practiceAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#F8F9FA] border border-gray-200 hover:border-[#A71728] transition-all group"
              >
                <div className="w-10 h-10 bg-[#A71728]/10 text-[#A71728] font-bold flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-black group-hover:text-[#A71728] transition-colors mb-2">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Search & Vetting Process */}
      <section className="py-24 md:py-32 bg-[#0E1015] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Executive Search Pipeline
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
              Executive Search & Vetting Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHITE_COLLAR_DATA.searchProcess.map((proc) => (
              <div
                key={proc.step}
                className="p-7 bg-white/[0.03] border border-white/10 hover:border-[#A71728] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-3xl font-black text-[#A71728]">{proc.step}</span>
                  <h4 className="text-base font-bold uppercase text-white leading-snug">
                    {proc.title}
                  </h4>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 md:py-28 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-16 space-y-2">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Enterprise Value
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              The Kawaii Value Proposition for Enterprises
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {WHITE_COLLAR_DATA.valueProps.map((vp, idx) => (
              <div key={idx} className="p-8 bg-gray-50 border border-gray-200 space-y-3">
                <div className="text-xs font-bold text-[#A71728] uppercase tracking-wider">
                  Assurance 0{idx + 1}
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight text-black">
                  {vp.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                  {vp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Senior Resume Form */}
      <section id="senior-resume" className="py-24 md:py-32 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-12">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Confidential Career Advisory
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              Submit Your Professional Resume
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto font-light">
              Whether you are actively searching or discreetly open to strategic executive mandates, submit your credentials in strict confidence.
            </p>
          </div>

          <div className="bg-white border border-gray-300 p-8 sm:p-12 shadow-md">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#A71728]/10 text-[#A71728] border border-[#A71728] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase text-black">
                  Profile Received Confidentially
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Your executive profile has been received. Our senior search partners handle all mandates with discretion and will connect when relevant positions match.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={seniorForm.name}
                      onChange={(e) => setSeniorForm({ ...seniorForm, name: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Professional Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@executive.com"
                      value={seniorForm.email}
                      onChange={(e) => setSeniorForm({ ...seniorForm, email: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+880 17..."
                      value={seniorForm.phone}
                      onChange={(e) => setSeniorForm({ ...seniorForm, phone: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Current Position
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., General Manager / VP"
                      value={seniorForm.currentPosition}
                      onChange={(e) => setSeniorForm({ ...seniorForm, currentPosition: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Years of Experience
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 12+ years"
                      value={seniorForm.yearsExperience}
                      onChange={(e) => setSeniorForm({ ...seniorForm, yearsExperience: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Preferred Industry
                    </label>
                    <select
                      value={seniorForm.preferredIndustry}
                      onChange={(e) => setSeniorForm({ ...seniorForm, preferredIndustry: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    >
                      <option value="IT, Software & Tech Leadership">IT, Software & Tech Leadership</option>
                      <option value="Engineering, Construction & Infra">Engineering, Construction & Infra</option>
                      <option value="Corporate Finance, Legal & Banking">Corporate Finance, Legal & Banking</option>
                      <option value="Operations, Supply Chain & Manufacturing">Operations, Supply Chain & Manufacturing</option>
                      <option value="C-Suite / Executive Board">C-Suite / Executive Board</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Upload Resume / Executive Profile *
                  </label>
                  <div className="relative border-2 border-dashed border-gray-300 p-6 text-center hover:border-[#A71728] transition-colors bg-gray-50">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setResumeFile(e.target.files[0].name);
                        }
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <div className="text-xs sm:text-sm text-gray-700">
                      {resumeFile ? (
                        <span className="font-bold text-[#A71728]">{resumeFile}</span>
                      ) : (
                        "Click or drag file here (PDF, DOCX up to 10MB)"
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Lock className="w-3.5 h-3.5 text-[#A71728]" />
                    <span>Protected under strict executive non-disclosure protocols.</span>
                  </div>
                  <RedButton variant="primary" size="lg" className="text-xs sm:text-sm font-bold">
                    Submit Professional Resume
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
