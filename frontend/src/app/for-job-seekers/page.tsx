"use client";

import React, { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Upload,
  ArrowRight,
  Clock,
  Compass,
  UserPlus,
  Search,
  MessageSquare,
  Award,
  Code2,
  Building2,
  Target,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { RedButton } from "@/components/ui/RedButton";
import { JOB_SEEKER_DATA } from "@/data/companyData";

const DOMAIN_ICONS = [Code2, Building2, Target, Briefcase];
const JOURNEY_ICONS = [UserPlus, Search, MessageSquare, Award];
const JOURNEY_SUBTITLES = [
  "Create Your Profile",
  "Advisor Review",
  "Employer Meetings",
  "Join & Grow",
];

const inputClass =
  "w-full bg-white border border-gray-400 focus:border-[#A71728] focus:ring-1 focus:ring-[#A71728] px-4 py-3 text-sm text-black placeholder:text-gray-400 focus:outline-none rounded-xl transition-colors";

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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-white text-[#111111] font-sans selection:bg-[#A71728] selection:text-white overflow-x-hidden">
      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
      />
      <Navbar onOpenModal={handleOpenModal} />

      {/* Hero — video + system card + curved wave */}
      <section className="relative pt-32 md:pt-40 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/for%20job%20seker/seeker.png"
            className="w-full h-full object-cover object-center"
          >
            <source src="/for%20job%20seker/jobseeker.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/45 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="max-w-3xl w-full space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-sm border border-white/25 text-white text-xs font-bold uppercase tracking-widest rounded-full max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#A71728] animate-pulse shrink-0" />
              <span className="truncate">Tokyo ⇄ Dhaka | For Job Seekers</span>
            </div>

            <h1 className="text-[1.7rem] sm:text-4xl md:text-5xl lg:text-[4.2rem] font-extrabold tracking-tight uppercase leading-[1.08] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
              Empowering Your Career Journey Across <br />
              <span className="text-[#FF8DA1]">Bangladeshi Leading Enterprises & MNCs.</span>
            </h1>

            <p className="text-base sm:text-lg text-white font-light leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
              {JOB_SEEKER_DATA.header.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <RedButton
                variant="primary"
                size="lg"
                onClick={() => scrollTo("register-form")}
                className="text-xs sm:text-sm font-bold shadow-lg shadow-[#A71728]/25"
              >
                Register Candidate Profile
              </RedButton>
              <RedButton
                variant="outline"
                size="lg"
                onClick={() => scrollTo("domains")}
                className="!border-white/50 !bg-white/10 text-white hover:!bg-white/20 text-xs sm:text-sm font-bold"
              >
                Explore Local Career Domains
              </RedButton>
            </div>

            <div className="pt-4 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                "Zero Candidate Fees",
                "Verified Employer Network",
                "Interview & CV Coaching",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#FFEAA7] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              {[
                ["0 BDT", "Candidate Fee"],
                ["60+", "Partner MNCs"],
                ["48 Hrs", "Advisor SLA"],
                ["90 Days", "Join Support"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="px-3 py-3 bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] border border-white/20 rounded-2xl"
                >
                  <div className="text-lg font-black text-white">{value}</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#FFEAA7]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden leading-none mt-14 md:mt-16 pointer-events-none relative z-10 -mb-px">
          <svg
            className="relative block w-full h-12 sm:h-16 text-[#F8F9FA]"
            viewBox="0 0 1440 80"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Career domains */}
      <section id="domains" className="py-20 md:py-28 bg-[#F8F9FA] border-b border-gray-200">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {JOB_SEEKER_DATA.domains.map((domain, i) => {
              const Icon = DOMAIN_ICONS[i] ?? Briefcase;
              return (
                <button
                  key={domain.title}
                  type="button"
                  onClick={() => scrollTo("register-form")}
                  className="text-left p-8 sm:p-9 bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between rounded-2xl relative overflow-hidden group min-h-[280px]"
                >
                  <div className="absolute -bottom-6 -right-6 text-white/5 font-mono font-black text-9xl select-none pointer-events-none group-hover:text-white/10 transition-colors">
                    0{i + 1}
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-black/25 border border-white/20 text-xs font-mono font-bold text-[#FFEAA7] tracking-wider uppercase rounded-full">
                        DOMAIN 0{i + 1}
                      </div>
                      <div className="w-10 h-10 bg-black/25 border border-white/20 flex items-center justify-center text-[#FFEAA7] rounded-xl">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-extrabold uppercase tracking-tight text-white leading-snug">
                      {domain.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-white/90 font-light leading-relaxed">
                      {domain.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/15 text-[10px] font-mono text-[#FFEAA7] tracking-widest uppercase flex items-center justify-between relative z-10">
                    <span>Explore Open Roles</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Candidate advantage */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Candidate Advocacy
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#111]">
              The Kawaii Candidate <span className="text-[#A71728]">Advantage</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light">
              A career partner that puts you first. No guesswork, no misleading vacancies—just structured career support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {JOB_SEEKER_DATA.advantages.map((adv, idx) => {
              const Icon = [ShieldCheck, GraduationCap, Compass][idx] ?? ShieldCheck;
              return (
                <div
                  key={adv.number}
                  className="p-8 sm:p-9 bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between rounded-2xl relative overflow-hidden group min-h-[320px]"
                >
                  <div className="absolute -bottom-6 -right-6 text-white/5 font-mono font-black text-9xl select-none pointer-events-none group-hover:text-white/10 transition-colors">
                    {adv.number}
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between pb-3 border-b border-white/20">
                      <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-black/25 border border-white/20 text-xs font-mono font-bold text-[#FFEAA7] tracking-wider uppercase rounded-full">
                        ADVANTAGE {adv.number}
                      </div>
                      <div className="w-9 h-9 bg-black/25 border border-white/20 flex items-center justify-center text-[#FFEAA7] rounded-xl">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-xl font-extrabold uppercase tracking-tight text-white leading-snug">
                      {adv.title}
                    </h3>
                    <p className="text-xs font-mono font-bold text-[#FFEAA7] uppercase tracking-wider">
                      {adv.subtitle}
                    </p>
                    <p className="text-xs sm:text-[13px] text-white/90 font-light leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/15 text-[10px] font-mono text-[#FFEAA7] tracking-widest uppercase flex items-center justify-between relative z-10">
                    <span>CANDIDATE FIRST</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA7] animate-pulse" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career journey */}
      <section className="py-24 md:py-32 bg-[#F8F9FA] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              4 Clear Steps
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              Your Kawaii <span className="text-[#A71728]">Career Journey</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-light">
              From registration to post-placement growth, we guide you through each milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {JOB_SEEKER_DATA.journey.map((j, i) => {
              const Icon = JOURNEY_ICONS[i] ?? Clock;
              return (
                <div
                  key={j.step}
                  className="p-7 bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between rounded-2xl relative overflow-hidden group min-h-[310px]"
                >
                  <div className="absolute -bottom-4 -right-4 text-white/5 font-mono font-black text-8xl select-none pointer-events-none group-hover:text-white/10 transition-colors">
                    {j.step}
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between pb-3 border-b border-white/20">
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-black/25 border border-white/20 text-xs font-mono font-bold text-[#FFEAA7] uppercase rounded-full">
                        STEP {j.step}
                      </div>
                      <div className="w-9 h-9 bg-black/25 border border-white/20 flex items-center justify-center text-[#FFEAA7] rounded-xl">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-white uppercase tracking-tight leading-snug">
                        {j.title}
                      </h4>
                      <p className="text-[11px] text-[#FFEAA7] font-mono font-bold uppercase mt-1">
                        {JOURNEY_SUBTITLES[i]}
                      </p>
                    </div>
                    <p className="text-xs text-white/90 font-light leading-relaxed">
                      {j.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/15 text-[10px] font-mono text-[#FFEAA7] tracking-widest uppercase flex items-center justify-between relative z-10">
                    <span>KAIZEN STAGE</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA7] animate-pulse" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration form */}
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

          <div className="bg-white border-2 border-[#A71728] p-8 sm:p-12 shadow-xl relative rounded-2xl">
            {registered ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#A71728]/10 text-[#A71728] border-2 border-[#A71728] rounded-2xl flex items-center justify-center mx-auto">
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
                    className="text-xs font-bold uppercase tracking-widest text-[#A71728] underline hover:text-[#8E1321]"
                  >
                    Update or Submit Another Profile
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={candidateForm.fullName}
                      onChange={(e) => setCandidateForm({ ...candidateForm, fullName: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@domain.com"
                      value={candidateForm.email}
                      onChange={(e) => setCandidateForm({ ...candidateForm, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+880 17..."
                      value={candidateForm.phone}
                      onChange={(e) => setCandidateForm({ ...candidateForm, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Current Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Dhaka, Chittagong"
                      value={candidateForm.currentLocation}
                      onChange={(e) => setCandidateForm({ ...candidateForm, currentLocation: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Current Job Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Senior Software Engineer"
                      value={candidateForm.currentTitle}
                      onChange={(e) => setCandidateForm({ ...candidateForm, currentTitle: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Years of Experience
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 5 years"
                      value={candidateForm.experienceYears}
                      onChange={(e) => setCandidateForm({ ...candidateForm, experienceYears: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Highest Qualification
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., B.Sc in CSE / EEE / BBA"
                      value={candidateForm.highestDegree}
                      onChange={(e) => setCandidateForm({ ...candidateForm, highestDegree: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Industry / Domain
                    </label>
                    <select
                      value={candidateForm.domain}
                      onChange={(e) => setCandidateForm({ ...candidateForm, domain: e.target.value })}
                      className={inputClass}
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
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Preferred Work Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Dhaka / Hybrid"
                      value={candidateForm.preferredLocation}
                      onChange={(e) => setCandidateForm({ ...candidateForm, preferredLocation: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Preferred Job Position
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Tech Lead / Project Manager"
                      value={candidateForm.preferredPosition}
                      onChange={(e) => setCandidateForm({ ...candidateForm, preferredPosition: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Current / Expected Salary
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 80k BDT / 120k BDT"
                      value={candidateForm.salaryExpectation}
                      onChange={(e) => setCandidateForm({ ...candidateForm, salaryExpectation: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Availability / Notice Period
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Immediate / 1 month"
                      value={candidateForm.noticePeriod}
                      onChange={(e) => setCandidateForm({ ...candidateForm, noticePeriod: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                    Professional Skills & Tools
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., React, Node.js, AWS, AutoCAD, Primavera, Financial Modeling"
                    value={candidateForm.skills}
                    onChange={(e) => setCandidateForm({ ...candidateForm, skills: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                    CV / Resume Upload (PDF, DOC, DOCX) *
                  </label>
                  <div className="relative border-2 border-dashed border-gray-300 hover:border-[#A71728] p-6 text-center transition-colors bg-[#FAFAFA] rounded-2xl">
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
                  <RedButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="text-xs sm:text-sm font-bold"
                  >
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
