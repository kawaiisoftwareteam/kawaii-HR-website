"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Upload,
  ArrowRight,
  FileText,
  Clock,
  Compass,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { RedButton } from "@/components/ui/RedButton";
import { JOB_SEEKER_DATA } from "@/data/companyData";

export default function ForJobSeekersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"employer" | "jobseeker">("jobseeker");
  const [registered, setRegistered] = useState(false);
  const [cvFileName, setCvFileName] = useState("");

  const [candidateForm, setCandidateForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentLocation: "",
    currentTitle: "",
    experienceYears: "",
    highestDegree: "",
    skills: "",
    domain: "Software Development & IT",
    preferredPosition: "",
    preferredLocation: "Dhaka",
    salaryExpectation: "",
    noticePeriod: "Immediate / 1 month",
    careerPreferences: "",
  });

  const handleOpenModal = (tab: "employer" | "jobseeker") => {
    setModalTab(tab);
    setModalOpen(true);
  };

  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFileName(e.target.files[0].name);
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0B0D12] text-white overflow-hidden border-b border-white/10">
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
              For Job Seekers & Professionals
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold tracking-tight uppercase leading-[1.02] text-white"
            >
              Empowering Your Career Journey Across <br />
              <span className="text-[#A71728]">Bangladeshi Leading Enterprises & MNCs.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl"
            >
              {JOB_SEEKER_DATA.header.description}
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
                  const regEl = document.getElementById("register-form");
                  regEl?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-xs sm:text-sm font-bold"
              >
                Register Candidate Profile
              </RedButton>
              <RedButton
                variant="outline"
                size="lg"
                onClick={() => {
                  const domEl = document.getElementById("domains");
                  domEl?.scrollIntoView({ behavior: "smooth" });
                }}
                className="!border-white/40 text-white hover:!bg-white/10 text-xs sm:text-sm font-bold"
              >
                Explore Local Career Domains
              </RedButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Find Opportunities That Match Your Expertise */}
      <section id="domains" className="py-24 md:py-32 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Career Verticals
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              Opportunities Matching <span className="text-[#A71728]">Your Expertise</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light">
              Your professional skills can open doors across Bangladesh&apos;s growing corporate and industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {JOB_SEEKER_DATA.domains.map((domain, i) => (
              <div
                key={i}
                className="p-8 bg-premium-light border border-gray-200 hover:border-[#A71728] transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-[#A71728]/10 text-[#A71728] flex items-center justify-center font-bold text-sm">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black group-hover:text-[#A71728] transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                    {domain.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-[#A71728] uppercase tracking-wider">
                  <span>Explore Open Roles</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Kawaii Candidate Advantage */}
      <section className="py-24 md:py-32 bg-[#0E1015] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Candidate Advocacy
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
              The Kawaii Candidate Advantage
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light">
              A Career Partner That Puts You First. No guesswork, no misleading vacancies—just structured career support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {JOB_SEEKER_DATA.advantages.map((adv) => (
              <div
                key={adv.number}
                className="p-8 bg-white/[0.03] border border-white/10 hover:border-[#A71728]/70 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-3xl font-black text-[#A71728]">{adv.number}</span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                    {adv.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A71728]">
                    {adv.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Kawaii Career Journey */}
      <section className="py-20 md:py-28 bg-premium-light border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              4 Clear Steps
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              Your Kawaii Career Journey
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-light">
              From registration to post-placement growth, we guide you through each milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {JOB_SEEKER_DATA.journey.map((j) => (
              <div key={j.step} className="p-6 bg-white border border-gray-200 shadow-sm space-y-3">
                <div className="text-2xl font-black text-[#A71728]">
                  Step {j.step}
                </div>
                <h4 className="text-lg font-bold uppercase text-black">
                  {j.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {j.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Profile Registration Form */}
      <section id="register-form" className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-12">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Candidate Profile Registration
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              Tell Us About Yourself
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto font-light">
              The more we understand about your professional background, the better we can identify opportunities aligned with your experience and ambitions.
            </p>
          </div>

          <div className="bg-[#FBFBFB] border border-gray-300 p-8 sm:p-12 shadow-lg">
            {registered ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#A71728]/10 text-[#A71728] border border-[#A71728] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase text-black">
                  Profile Registered Successfully
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Welcome to the Kawaii Talent Network. Our career advisors will review your credentials and reach out when matching opportunities arise.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setRegistered(false)}
                    className="text-xs font-bold uppercase tracking-widest text-[#A71728] underline"
                  >
                    Update or Submit Another Profile
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={candidateForm.fullName}
                      onChange={(e) => setCandidateForm({ ...candidateForm, fullName: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@domain.com"
                      value={candidateForm.email}
                      onChange={(e) => setCandidateForm({ ...candidateForm, email: e.target.value })}
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
                      value={candidateForm.phone}
                      onChange={(e) => setCandidateForm({ ...candidateForm, phone: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Current Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Dhaka, Chittagong"
                      value={candidateForm.currentLocation}
                      onChange={(e) => setCandidateForm({ ...candidateForm, currentLocation: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Current Job Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Senior Software Engineer"
                      value={candidateForm.currentTitle}
                      onChange={(e) => setCandidateForm({ ...candidateForm, currentTitle: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Years of Experience
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 5 years"
                      value={candidateForm.experienceYears}
                      onChange={(e) => setCandidateForm({ ...candidateForm, experienceYears: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Highest Qualification
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., B.Sc in CSE / EEE / BBA"
                      value={candidateForm.highestDegree}
                      onChange={(e) => setCandidateForm({ ...candidateForm, highestDegree: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Industry / Domain
                    </label>
                    <select
                      value={candidateForm.domain}
                      onChange={(e) => setCandidateForm({ ...candidateForm, domain: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    >
                      <option value="Software Development & IT">Software Development & IT</option>
                      <option value="Structural & Civil Engineering">Structural & Civil Engineering</option>
                      <option value="Project Management">Project Management</option>
                      <option value="Corporate Operations">Corporate Operations</option>
                      <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                      <option value="Finance & Accounting">Finance & Accounting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Preferred Work Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Dhaka / Hybrid"
                      value={candidateForm.preferredLocation}
                      onChange={(e) => setCandidateForm({ ...candidateForm, preferredLocation: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Preferred Job Position
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Tech Lead / Project Manager"
                      value={candidateForm.preferredPosition}
                      onChange={(e) => setCandidateForm({ ...candidateForm, preferredPosition: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Current / Expected Salary
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 80k BDT / 120k BDT"
                      value={candidateForm.salaryExpectation}
                      onChange={(e) => setCandidateForm({ ...candidateForm, salaryExpectation: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Availability / Notice Period
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Immediate / 1 month"
                      value={candidateForm.noticePeriod}
                      onChange={(e) => setCandidateForm({ ...candidateForm, noticePeriod: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Professional Skills & Tools
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., React, Node.js, AWS, AutoCAD, Primavera, Financial Modeling"
                    value={candidateForm.skills}
                    onChange={(e) => setCandidateForm({ ...candidateForm, skills: e.target.value })}
                    className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                  />
                </div>

                {/* CV Upload */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    CV / Resume Upload (PDF, DOC, DOCX) *
                  </label>
                  <div className="relative border-2 border-dashed border-gray-300 hover:border-[#A71728] p-6 text-center transition-colors bg-white">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleCvChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="space-y-2">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto" />
                      <div className="text-xs sm:text-sm text-gray-700">
                        {cvFileName ? (
                          <span className="font-bold text-[#A71728]">{cvFileName}</span>
                        ) : (
                          <>
                            <span className="font-semibold text-black">Click to upload</span> or drag and drop your CV here
                          </>
                        )}
                      </div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                        Accepted formats: PDF, DOC, or DOCX (Max 10MB)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-[11px] text-gray-500 max-w-sm">
                    Job seeker services are 100% free with zero candidate placement fees.
                  </p>
                  <RedButton variant="primary" size="lg" className="text-xs sm:text-sm font-bold">
                    Register as a Candidate
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
