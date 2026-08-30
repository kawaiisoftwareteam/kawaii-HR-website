"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { INDUSTRIES_LIST } from "@/data/companyData";

const primaryServices = [
  {
    id: "permanent-staff",
    title: "PERMANENT STAFF",
    subtitle: "Permanent Staff",
    image: "/images/japanese_office_team.jpg",
    description:
      "Our professional HR consultants input the right man on the right job. No matter how specific your job requirements are, we can find suitable staff for you.",
  },
  {
    id: "contract-staff",
    title: "CONTRACT STAFF",
    subtitle: "Contract Staff",
    image: "/images/executive_interview.jpg",
    description:
      "Employing contract workers can help reduce costs for short-term projects. Additionally, contract workers who have demonstrated high performance during the contract period, can be considered for renewing the contract or hiring them as full-time employees.",
  },
  {
    id: "outsourcing",
    title: "OUTSOURCING",
    subtitle: "Temporary Staff",
    image: "/images/bpo_industry.jpg",
    description:
      "At Kawaii Japan HR, we provide temporary staffing services that allow you to utilize 'human resources with the necessary skills and experience who can work immediately' for 'the required period of time'. We will introduce you to the reliable staff.",
  },
  {
    id: "executive-search",
    title: "EXECUTIVE SEARCH",
    subtitle: "Executive Search",
    image: "/images/gallery_corporate_consultant.jpg",
    description:
      "Discreet, high-touch executive recruitment connecting top-tier corporate visionaries, managing directors, and engineering heads with pioneering international enterprises.",
  },
  {
    id: "japan-career",
    title: "JAPAN CAREER PLACEMENT",
    subtitle: "Japan Global Corridor",
    image: "/images/tokyo_skyline.jpg",
    description:
      "Direct career pathway for qualified Bangladeshi software engineers, technical professionals, and graduates to secure legitimate positions with leading Japanese corporations in Tokyo and Osaka.",
  },
  {
    id: "hr-consulting",
    title: "HR CONSULTING",
    subtitle: "Org Development & Kaizen",
    image: "/images/japan_bangladesh_partnership.jpg",
    description:
      "Architecting performance evaluation frameworks, compensation benchmarks, and organizational hierarchies based on Japanese precision, discipline, and efficiency.",
  },
];

const jobSeekerFlow = [
  {
    step: "01",
    title: "Register",
    desc: "Please register from this website",
  },
  {
    step: "02",
    title: "Consultation about changing jobs",
    desc: "A dedicated career advisor will be in charge of your career change consultations.",
  },
  {
    step: "03",
    title: "Providing job change information",
    desc: "We will introduce you to projects that match your background and wishes",
  },
  {
    step: "04",
    title: "Recommending to companies",
    desc: "We will recommend your desired company",
  },
  {
    step: "05",
    title: "Interviewing · Offering · Joining",
    desc: "We will support you from interview until joining the company",
  },
  {
    step: "06",
    title: "Support after joining",
    desc: "We provide support even after joining the company",
  },
];

const employerFlow = [
  {
    step: "01",
    title: "Requirement Briefing",
    desc: "We conduct an in-depth briefing to understand your technical requirements, team culture, and hiring timeline.",
  },
  {
    step: "02",
    title: "Talent Mapping & Sourcing",
    desc: "Using Japanese precision talent mapping, we source active candidates and discreetly engage passive top performers.",
  },
  {
    step: "03",
    title: "3-Tier Screening",
    desc: "Every candidate undergoes hands-on technical testing, linguistic proficiency checks, and behavioral evaluations.",
  },
  {
    step: "04",
    title: "Shortlist Presentation",
    desc: "We present a curated shortlist of top 3–5 candidates with structured evaluation scores within 48 to 72 hours.",
  },
  {
    step: "05",
    title: "Interview & Offer Management",
    desc: "We manage interview schedules, candidate briefings, compensation alignment, and smooth contract signing.",
  },
  {
    step: "06",
    title: "Onboarding & 90-Day Guarantee",
    desc: "We ensure smooth Day 1 integration with proactive follow-up and our 90-day free replacement guarantee.",
  },
];

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"employer" | "jobseeker">("employer");
  const [activeWorkflow, setActiveWorkflow] = useState<"jobseeker" | "employer">(
    "jobseeker"
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpenModal = (tab: "employer" | "jobseeker") => {
    setModalTab(tab);
    setModalOpen(true);
  };

  const currentFlow =
    activeWorkflow === "jobseeker" ? jobSeekerFlow : employerFlow;

  return (
    <main className="relative min-h-screen bg-white text-[#111111] font-sans selection:bg-[#A71728] selection:text-white overflow-x-hidden">
      <CustomCursor />

      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
      />

      <Navbar onOpenModal={handleOpenModal} />

      {/* ─── VIDEO HERO (soft, not heavy black) ─── */}
      <section className="relative w-full h-[92vh] min-h-[640px] max-h-[1100px] flex items-end overflow-hidden">
        <motion.div
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 pointer-events-none"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source
              src="/Create_a_premium_cinematic_cor.mp4"
              type="video/mp4"
            />
          </video>
          {/* Soft readability wash — no white bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-5xl"
          >
            <p className="inline-flex items-center gap-3 text-sm sm:text-base md:text-lg font-semibold tracking-[0.2em] uppercase text-white/95 mb-5 drop-shadow-sm">
              <span className="w-10 h-0.5 bg-[#A71728]" />
              Human Resources
            </p>
            <h1 className="text-[clamp(2.75rem,6.5vw,5.75rem)] font-bold tracking-tight text-white drop-shadow-md leading-[1.02]">
              Career &amp; HR Solutions
            </h1>
            <p className="mt-5 sm:mt-6 text-base sm:text-xl md:text-2xl text-white/95 max-w-3xl font-light leading-relaxed drop-shadow-sm">
              Enlighten your job opportunities in leading Japanese &amp; global
              companies in Bangladesh &amp; worldwide.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">
              <button
                type="button"
                onClick={() => handleOpenModal("employer")}
                className="inline-flex items-center gap-2 px-7 sm:px-8 py-4 text-sm sm:text-base font-semibold uppercase tracking-wider text-white bg-[#A71728] border border-[#A71728] hover:bg-[#8e1321] transition-all rounded-none"
              >
                For Employers
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => handleOpenModal("jobseeker")}
                className="inline-flex items-center gap-2 px-7 sm:px-8 py-4 text-sm sm:text-base font-semibold uppercase tracking-wider text-[#111] bg-white border border-white hover:bg-gray-100 transition-all rounded-none"
              >
                Find Jobs
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── INTRO (white) ─── */}
      <section className="bg-gradient-to-b from-white via-[#FAFAFA] to-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-5">
          <div className="inline-flex items-center justify-center gap-3 text-2xl sm:text-4xl font-black text-[#A71728] tracking-widest uppercase">
            <span className="font-light">/</span>
            <span>Human Resources</span>
            <span className="font-light">/</span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
            <strong className="font-bold text-gray-950">KAWAII JAPAN HR</strong>
            , we are professional human resource consultants and recruitment
            services for Japanese organizations around the world.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            We encourage and support every job seeker to find their dream career
            — from newly graduated talent to top-level management.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2 text-[11px] tracking-[0.14em] uppercase text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A71728]" />
              Japanese Corporate Standards
            </span>
            <span>Sister Concern of Kawaii Group</span>
          </div>
        </div>
      </section>

      {/* ─── SERVICE CARDS (reference style — white, red border) ─── */}
      <section className="bg-white py-8 md:py-16 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center gap-3 text-2xl sm:text-4xl md:text-5xl font-black text-[#A71728] tracking-widest uppercase">
              <span className="font-light">/</span>
              <span>Service Introduction</span>
              <span className="font-light">/</span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Professional workforce staffing and recruitment services designed
              for rapid enterprise scaling.
            </p>
          </div>

          {/* Row 1 — 3 cards matching reference */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {primaryServices.slice(0, 3).map((service) => (
              <article
                key={service.id}
                className="group flex flex-col bg-white rounded-2xl border-2 border-[#F0A8AE] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#A71728]/50 transition-all duration-300"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-1 space-y-3">
                  <h3 className="text-lg sm:text-xl font-black text-[#A71728] uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-gray-950">
                    {service.subtitle}
                  </p>
                  <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleOpenModal("employer")}
                    className="pt-3 mt-auto border-t border-gray-100 text-sm font-bold uppercase tracking-wider text-[#A71728] hover:text-black transition-colors inline-flex items-center gap-1.5 self-start"
                  >
                    Inquire Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Row 2 — remaining 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {primaryServices.slice(3, 6).map((service) => (
              <article
                key={service.id}
                className="group flex flex-col bg-white rounded-2xl border-2 border-[#F0A8AE] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#A71728]/50 transition-all duration-300"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-1 space-y-3">
                  <h3 className="text-lg sm:text-xl font-black text-[#A71728] uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-gray-950">
                    {service.subtitle}
                  </p>
                  <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleOpenModal("employer")}
                    className="pt-3 mt-auto border-t border-gray-100 text-sm font-bold uppercase tracking-wider text-[#A71728] hover:text-black transition-colors inline-flex items-center gap-1.5 self-start"
                  >
                    Inquire Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FLOW ─── */}
      <section className="bg-gradient-to-b from-[#FAFAFA] to-white py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center gap-3 text-2xl sm:text-4xl md:text-5xl font-black text-[#A71728] tracking-widest uppercase">
              <span className="font-light">/</span>
              <span>Flow of Service Usage</span>
              <span className="font-light">/</span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
              A structured 6-step roadmap for transparent matching and long-term
              success.
            </p>
            <div className="flex justify-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setActiveWorkflow("jobseeker")}
                className={`px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeWorkflow === "jobseeker"
                    ? "bg-[#A71728] text-white border-[#A71728]"
                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-500"
                }`}
              >
                For Job Seekers
              </button>
              <button
                type="button"
                onClick={() => setActiveWorkflow("employer")}
                className={`px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeWorkflow === "employer"
                    ? "bg-[#A71728] text-white border-[#A71728]"
                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-500"
                }`}
              >
                For Employers
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {currentFlow.map((step, idx) => (
              <React.Fragment key={`${activeWorkflow}-${step.step}`}>
                <div className="bg-white rounded-2xl border-2 border-[#F0A8AE] overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-[#A71728] text-white font-black text-2xl sm:text-3xl md:text-4xl flex items-center justify-center px-6 py-5 sm:w-24 shrink-0">
                    {step.step}
                  </div>
                  <div className="px-5 py-4 sm:py-5 sm:w-72 shrink-0 border-b sm:border-b-0 sm:border-r border-red-100 flex items-center">
                    <h4 className="text-[#A71728] font-black text-base sm:text-lg md:text-xl leading-snug">
                      {step.title}
                    </h4>
                  </div>
                  <div className="px-5 py-4 sm:py-5 flex items-center text-gray-700 text-sm sm:text-base flex-1 leading-relaxed">
                    {step.desc}
                  </div>
                </div>
                {idx < currentFlow.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-8 h-8 rounded-full bg-[#A71728] flex items-center justify-center">
                      <ChevronDown className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="p-8 sm:p-10 rounded-2xl border-2 border-[#F0A8AE] bg-gradient-to-br from-white to-[#FFF5F5] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-[#A71728]">
                {activeWorkflow === "jobseeker"
                  ? "Begin Your Career Journey"
                  : "Start Sourcing Talent"}
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950">
                {activeWorkflow === "jobseeker"
                  ? "Submit Your Profile — Free Consultation"
                  : "Request a Tailored Sourcing Proposal"}
              </h3>
              <p className="text-sm text-gray-600">
                {activeWorkflow === "jobseeker"
                  ? "100% free career matching and interview coaching."
                  : "Pre-screened shortlist within 48–72 hours."}
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                handleOpenModal(
                  activeWorkflow === "jobseeker" ? "jobseeker" : "employer"
                )
              }
              className="px-7 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#A71728] hover:bg-[#8e1321] transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              {activeWorkflow === "jobseeker"
                ? "Register CV"
                : "Request Proposal"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="bg-[#F9FAFB] py-16 md:py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-gray-200">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#A71728]">
                Domains of Recruitment
              </p>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-gray-900 mt-1">
                Industries We Serve
              </h2>
            </div>
            <Link
              href="/#industries"
              className="text-sm font-bold uppercase tracking-wider text-[#A71728] hover:text-black transition-colors inline-flex items-center gap-1.5"
            >
              View All Industry Sectors
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {INDUSTRIES_LIST.map((ind) => (
              <div
                key={ind.id}
                className="p-5 sm:p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#A71728] transition-colors space-y-2 shadow-sm"
              >
                <div className="text-sm font-bold text-[#A71728]">
                  {ind.number}
                </div>
                <div className="text-sm sm:text-base font-bold uppercase text-gray-900">
                  {ind.title}
                </div>
                <div className="text-xs text-gray-500 line-clamp-2">
                  {ind.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
