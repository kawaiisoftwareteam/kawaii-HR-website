"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  ShieldCheck,
  Briefcase,
  Users,
  Target,
  Clock,
  Send,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Globe2,
  Layers,
  Check,
  MessageSquare,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { RedButton } from "@/components/ui/RedButton";
import {
  BUSINESS_SOLUTIONS,
  WHITE_COLLAR_DATA,
  BLUE_COLLAR_DATA,
  COMPANY_INFO,
} from "@/data/companyData";

// Extended industry items with rich imagery
const INDUSTRY_CARDS = [
  {
    id: "it-software",
    title: "Information Technology & Software Engineering",
    category: "Tech & Innovation",
    image: "/images/it_industry.jpg",
    desc: "Targeted sourcing for high-demand engineering teams, from Full-Stack & DevOps to AI researchers and technical leadership.",
    roles: [
      "Full-Stack Developers",
      "Cloud & DevOps Architects",
      "QA Automation Leads",
      "Data & AI Engineers",
      "Engineering Managers",
    ],
    highlight: "Pre-screened tech coding & architecture assessment",
  },
  {
    id: "civil-infra",
    title: "Civil Engineering, Construction & Infrastructure",
    category: "Engineering",
    image: "/images/manufacturing_industry.jpg",
    desc: "Vetted civil, structural, and MEP engineers ready for mega-projects, site management, and technical supervision across Bangladesh.",
    roles: [
      "Civil & Structural Engineers",
      "MEP Specialists",
      "Planning & Estimation",
      "Site Directors",
      "Safety Officers (HSE)",
    ],
    highlight: "Strict credential and on-site readiness verification",
  },
  {
    id: "garments-manufacturing",
    title: "Garments, Textiles & Industrial Manufacturing",
    category: "Manufacturing",
    image: "/images/garments_industry.jpg",
    desc: "Industrial veterans and production specialists who drive factory compliance, lean manufacturing, and operational excellence.",
    roles: [
      "Production & Operations",
      "Industrial Engineers (IE)",
      "Merchandising Leads",
      "QA / QC Directors",
      "Factory General Managers",
    ],
    highlight: "Kaizen 5S and compliance-trained candidates",
  },
  {
    id: "corporate-finance",
    title: "Corporate Operations, Finance & Administration",
    category: "Corporate",
    image: "/images/banking_industry.jpg",
    desc: "Strategic leaders and functional professionals who bring financial discipline, corporate governance, and operational scale.",
    roles: [
      "CFOs & Finance Controllers",
      "Corporate Operations",
      "Supply Chain Directors",
      "Legal & Compliance",
      "HR Business Partners",
    ],
    highlight: "Executive leadership & strategic background checks",
  },
  {
    id: "healthcare-pharma",
    title: "Healthcare, Pharmaceuticals & BPO Services",
    category: "Healthcare & BPO",
    image: "/images/healthcare_industry.jpg",
    desc: "Qualified healthcare managers, clinical research coordinators, pharma specialists, and multilingual BPO professionals.",
    roles: [
      "Quality Assurance & Regulatory",
      "Clinical Coordinators",
      "Pharma Brand Leads",
      "Multilingual BPO Team Leads",
      "Customer Experience Heads",
    ],
    highlight: "Domain-specific regulatory and language fluency check",
  },
  {
    id: "energy-power",
    title: "Oil, Gas, Power & Renewable Energy",
    category: "Energy",
    image: "/images/japan_bangladesh_partnership.jpg",
    desc: "Technical plant specialists, power generation engineers, and HSE experts aligned with rigorous Japanese safety standards.",
    roles: [
      "Plant Operations Managers",
      "Electrical / High-Voltage",
      "Project Controls",
      "HSE Supervisors",
      "Commissioning Specialists",
    ],
    highlight: "Site discipline and international standard compliance",
  },
];

const HIRING_WORKFLOW = [
  {
    step: "01",
    title: "Requirement Diagnostic",
    subtitle: "Context & Culture Alignment",
    desc: "We conduct an in-depth intake to understand not only technical requirements, but also leadership culture, reporting structures, and KPIs.",
    icon: Target,
  },
  {
    step: "02",
    title: "Precision Kaizen Screening",
    subtitle: "Capability & Credential Vetting",
    desc: "Candidates undergo multi-tiered vetting: technical verification, work history authentication, behavioral evaluation, and cultural fit scorecards.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Curated Shortlist & Interviews",
    subtitle: "High-Relevance Profiles Only",
    desc: "You receive only top 3-5 high-match profiles with detailed candidate summary memos. We coordinate seamless interviews and feedback cycles.",
    icon: Users,
  },
  {
    step: "04",
    title: "Offer, Joining & 90-Day Assurance",
    subtitle: "Smooth Transition Guarantee",
    desc: "We support offer negotiation, notice-period tracking, joining onboarding, and provide replacement guarantees for total peace of mind.",
    icon: ShieldCheck,
  },
];

export default function ForBusinessesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"employer" | "jobseeker">("employer");
  const [activeDivision, setActiveDivision] = useState<"white-collar" | "blue-collar">("white-collar");
  const [activeIndustryFilter, setActiveIndustryFilter] = useState<string>("All");
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

  const filteredIndustries =
    activeIndustryFilter === "All"
      ? INDUSTRY_CARDS
      : INDUSTRY_CARDS.filter((item) => item.category === activeIndustryFilter);

  const categories = [
    "All",
    "Tech & Innovation",
    "Engineering",
    "Manufacturing",
    "Corporate",
    "Healthcare & BPO",
    "Energy",
  ];

  return (
    <main className="relative min-h-screen bg-white text-[#111111] font-sans selection:bg-[#A71728] selection:text-white overflow-x-hidden">
      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
      />
      <Navbar onOpenModal={handleOpenModal} />

      {/* =========================================================================
          HERO SECTION - Light Corporate Aesthetic with Curved Wave Separator
         ========================================================================= */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 text-[#111111] overflow-hidden border-b border-gray-200 bg-[#FAFAFA]">
        {/* Full Background Image Layer with clean light gradient overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.img
            initial={{ scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src="/images/japanese_office_team.jpg"
            alt="Kawaii Japan HR Corporate Team"
            className="w-full h-full object-cover object-[center_right] lg:object-right opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60 lg:from-white lg:via-white/90 lg:to-white/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#A71728]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Calls to Action */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Square Pill Tag */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#A71728]/30 text-[#A71728] text-xs font-bold uppercase tracking-widest shadow-sm rounded-none"
              >
                <span className="w-2 h-2 rounded-full bg-[#A71728] animate-pulse" />
                <span>Tokyo ⇄ Dhaka | For Businesses & Corporate Clients</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[clamp(2.2rem,4.6vw,4.3rem)] font-extrabold tracking-tight uppercase leading-[1.04] text-[#111111]"
              >
                Precision HR Solutions For Businesses <br />
                <span className="text-[#A71728]">Building Bangladesh&apos;s Future.</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-700 font-light leading-relaxed max-w-2xl"
              >
                {BUSINESS_SOLUTIONS.header.description}
              </motion.p>

              {/* CTA Buttons */}
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
                  className="text-xs sm:text-sm font-bold shadow-lg shadow-[#A71728]/25 rounded-none"
                >
                  Discuss Your Hiring Requirements
                </RedButton>
                
                <RedButton
                  variant="outline"
                  size="lg"
                  onClick={() => handleOpenModal("employer")}
                  className="text-xs sm:text-sm font-bold bg-white border-gray-300 text-gray-900 hover:border-[#A71728] hover:text-[#A71728] shadow-sm rounded-none"
                >
                  Request Corporate Consultation
                </RedButton>
              </motion.div>

              {/* Quick Trust Pillars */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-4 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-3"
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

            {/* Right Column: Square System Gradient Card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 flex justify-end"
            >
              <div className="w-full max-w-md p-7 sm:p-8 bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white border border-white/20 shadow-2xl space-y-5 rounded-none relative overflow-hidden">
                {/* Subtle Japanese Watermark */}
                <div className="absolute -bottom-6 -right-6 text-white/5 font-mono font-black text-8xl select-none pointer-events-none">
                  東京
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-white/20 relative z-10">
                  <span className="text-xs font-mono font-extrabold tracking-widest uppercase text-[#FFEAA7]">
                    TOKYO ⇄ DHAKA HUB
                  </span>
                  <div className="px-2.5 py-0.5 bg-black/25 border border-white/20 text-[10px] font-mono font-bold uppercase text-white">
                    LIVE DESK
                  </div>
                </div>

                <div className="space-y-1.5 relative z-10">
                  <div className="text-lg font-extrabold text-white uppercase tracking-tight">
                    Precision Workforce Sourcing
                  </div>
                  <p className="text-xs text-white/90 font-light leading-relaxed">
                    Connecting top Bangladeshi talent with leading multinational and Japanese enterprises under Kaizen quality governance.
                  </p>
                </div>

                {/* System Stats Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1 relative z-10">
                  <div className="p-3.5 bg-black/25 border border-white/20">
                    <div className="text-[10px] text-[#FFEAA7] font-mono uppercase tracking-wider">Retention Rate</div>
                    <div className="text-2xl font-black text-white mt-0.5">98% Avg</div>
                  </div>
                  <div className="p-3.5 bg-black/25 border border-white/20">
                    <div className="text-[10px] text-[#FFEAA7] font-mono uppercase tracking-wider">Account SLA</div>
                    <div className="text-2xl font-black text-white mt-0.5">24 Hours</div>
                  </div>
                  <div className="p-3.5 bg-black/25 border border-white/20">
                    <div className="text-[10px] text-[#FFEAA7] font-mono uppercase tracking-wider">Partner Network</div>
                    <div className="text-2xl font-black text-white mt-0.5">60+ MNCs</div>
                  </div>
                  <div className="p-3.5 bg-black/25 border border-white/20">
                    <div className="text-[10px] text-[#FFEAA7] font-mono uppercase tracking-wider">Vetting Standard</div>
                    <div className="text-2xl font-black text-white mt-0.5">100% Kaizen</div>
                  </div>
                </div>

                <div className="p-3.5 bg-black/30 border border-white/20 flex items-center justify-between text-xs text-white relative z-10">
                  <span className="font-semibold text-white">Placement Assurance</span>
                  <span className="text-[#FFEAA7] font-mono font-bold">90-Day Free Replacement</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Dynamic Curved Wave Bottom Separator */}
        <div className="w-full overflow-hidden leading-none mt-12 pointer-events-none">
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


      {/* =========================================================================
          SECTION: STRATEGIC APPROACH (System Gradient Cards + Square Shape)
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8F9FA] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Content Column */}
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

              {/* Square Image Box with System Border */}
              <div className="relative border border-gray-200 bg-white p-2 shadow-sm rounded-none">
                <img
                  src="/images/japan_bangladesh_partnership.jpg"
                  alt="Japan Bangladesh Corporate HR Partnership"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-gray-900 uppercase">Japanese Kaizen Matching</div>
                    <div className="text-[11px] text-gray-500">Zero Unvetted CVs • Dedicated Account Direction</div>
                  </div>
                  <span className="px-3 py-1 bg-[#A71728]/10 text-[#A71728] text-xs font-bold uppercase">
                    Kaizen 5S
                  </span>
                </div>
              </div>

              {/* System Formula Callout Card */}
              <div className="p-6 bg-gradient-to-br from-[#A71728] via-[#8E1321] to-[#680C17] text-white shadow-xl rounded-none border border-white/20 space-y-2">
                <div className="text-xs uppercase font-extrabold text-[#FFEAA7] tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Our Focus & Commitment</span>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-white">
                  Better Matching. Lower Hiring Risk. Greater Operational Efficiency.
                </div>
              </div>
            </div>

            {/* Right Column: Square System Focus Pillars Grid */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-tight text-black pb-3 border-b border-gray-200">
                How Our Structured Methodology Supports Your Business
              </h3>
              
              <div className="space-y-3">
                {BUSINESS_SOLUTIONS.strategicApproach.focusPillars.map((pillar, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gradient-to-r from-[#A71728] via-[#8E1321] to-[#680C17] text-white border border-white/15 shadow-md flex items-start gap-3.5 rounded-none group hover:translate-x-1 transition-transform"
                  >
                    <div className="w-6 h-6 bg-black/25 border border-white/20 text-[#FFEAA7] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="font-semibold text-xs sm:text-sm text-white/95 leading-snug">{pillar}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-gray-200">
                <span className="text-xs text-gray-500">Ready to discuss your headcount needs?</span>
                <button
                  onClick={() => {
                    const formElement = document.getElementById("inquiry-form");
                    formElement?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-xs font-bold uppercase tracking-wider text-[#A71728] hover:underline flex items-center gap-1"
                >
                  <span>Submit Requirements</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION: INDUSTRY-SPECIALIZED TALENT SOLUTIONS (About Style System Cards)
         ========================================================================= */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-3xl space-y-3">
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

            {/* Square Category Filter Tabs */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveIndustryFilter(cat)}
                  className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider border rounded-none transition-all ${
                    activeIndustryFilter === cat
                      ? "bg-[#A71728] border-[#A71728] text-white shadow-sm"
                      : "bg-[#F9FAFB] border-gray-200 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Square System Gradient Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredIndustries.map((spec, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3 }}
                  key={spec.id}
                  className="bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group rounded-none relative overflow-hidden"
                >
                  {/* Watermark Index Number */}
                  <div className="absolute -bottom-4 -right-4 text-white/5 font-mono font-black text-8xl select-none pointer-events-none group-hover:text-white/10 transition-colors">
                    0{idx + 1}
                  </div>

                  {/* Square Image Box with Dark Overlay */}
                  <div className="relative h-48 w-full border-b border-white/20 overflow-hidden bg-black/40">
                    <img
                      src={spec.image}
                      alt={spec.title}
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-95 transition-all duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm border border-white/20 text-[10px] font-mono font-bold uppercase tracking-wider text-[#FFEAA7]">
                      {spec.category}
                    </div>
                  </div>

                  {/* Card Content in System Style */}
                  <div className="p-7 flex-1 flex flex-col justify-between space-y-5 relative z-10">
                    <div className="space-y-2.5">
                      <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#FFEAA7]">
                        <span>VERTICAL SECTOR 0{idx + 1}</span>
                      </div>
                      <h3 className="text-lg font-extrabold uppercase tracking-tight text-white leading-snug">
                        {spec.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-white/90 font-light leading-relaxed">
                        {spec.desc}
                      </p>
                    </div>

                    {/* Square Role Badges in System Gold / Frosted Style */}
                    <div className="pt-3 border-t border-white/15 space-y-2">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#FFEAA7]">
                        Key Positions Recruited:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {spec.roles.map((r) => (
                          <span
                            key={r}
                            className="px-2.5 py-1 bg-black/25 border border-white/20 text-[11px] font-medium text-white/95 rounded-none"
                          >
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Link & Live Indicator */}
                    <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-[#FFEAA7]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA7] animate-pulse" />
                        <span className="uppercase tracking-widest">KAIZEN VETTED</span>
                      </div>
                      <button
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, industry: spec.title }));
                          const formElement = document.getElementById("inquiry-form");
                          formElement?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-xs font-bold text-white hover:text-[#FFEAA7] flex items-center gap-1 uppercase tracking-wider transition-colors"
                      >
                        <span>Request Profiles</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION: SPECIALIZED HR SOLUTIONS (3 System Gradient Cards)
         ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#F8F9FA] text-[#111] border-b border-gray-200">
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
                className="p-8 sm:p-9 bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between rounded-none relative overflow-hidden group min-h-[320px]"
              >
                {/* Watermark Number */}
                <div className="absolute -bottom-6 -right-6 text-white/5 font-mono font-black text-9xl select-none pointer-events-none group-hover:text-white/10 transition-colors">
                  0{idx + 1}
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-black/25 border border-white/20 text-xs font-mono font-bold text-[#FFEAA7] tracking-wider uppercase">
                    <span>SOLUTION 0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-extrabold uppercase tracking-tight text-white leading-snug">
                    {sol.title}
                  </h3>
                  <p className="text-xs font-mono font-bold text-[#FFEAA7] uppercase tracking-wider">
                    {sol.subtitle}
                  </p>
                  <p className="text-xs sm:text-[13px] text-white/90 font-light leading-relaxed">
                    {sol.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/15 text-[10px] font-mono text-[#FFEAA7] tracking-widest uppercase flex items-center justify-between relative z-10">
                  <span>ENTERPRISE SERVICE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA7] animate-pulse" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION: WHITE-COLLAR & BLUE-COLLAR DIVISION SHOWCASE
         ========================================================================= */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
                Workforce Divisions
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
                White-Collar & <span className="text-[#A71728]">Industrial Capabilities</span>
              </h2>
            </div>

            {/* Square Switcher Tabs */}
            <div className="inline-flex border border-gray-300 bg-[#F9FAFB] p-1 rounded-none">
              <button
                onClick={() => setActiveDivision("white-collar")}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-none transition-all ${
                  activeDivision === "white-collar"
                    ? "bg-[#A71728] text-white shadow-sm"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                White-Collar Division
              </button>
              <button
                onClick={() => setActiveDivision("blue-collar")}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-none transition-all ${
                  activeDivision === "blue-collar"
                    ? "bg-[#A71728] text-white shadow-sm"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                Blue-Collar Division
              </button>
            </div>
          </div>

          {activeDivision === "white-collar" ? (
            <div className="space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 bg-gradient-to-br from-[#A71728] via-[#8E1321] to-[#680C17] text-white border border-white/20 shadow-xl rounded-none relative overflow-hidden">
                <div className="lg:col-span-7 space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/25 border border-white/20 text-xs font-mono font-bold text-[#FFEAA7] tracking-wider uppercase">
                    Executive & Corporate Sourcing
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white leading-tight">
                    {WHITE_COLLAR_DATA.header.title}
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed font-light">
                    {WHITE_COLLAR_DATA.header.description}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => handleOpenModal("employer")}
                      className="px-6 py-3 bg-white hover:bg-gray-100 text-[#A71728] font-bold text-xs uppercase tracking-wider shadow-lg rounded-none transition-colors"
                    >
                      Hire White-Collar Talent
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 border-2 border-white/30 bg-black/20 p-2 rounded-none">
                  <img
                    src="/images/executive_interview.jpg"
                    alt="White Collar Executive Interview"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Square Practice Areas in System Gradient Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {WHITE_COLLAR_DATA.practiceAreas.map((area) => (
                  <div
                    key={area.title}
                    className="p-7 bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white border border-white/20 shadow-md space-y-2 rounded-none"
                  >
                    <div className="text-xs font-mono uppercase tracking-wider text-[#FFEAA7]">PRACTICE AREA</div>
                    <h4 className="text-base font-extrabold uppercase tracking-tight text-white">
                      {area.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 bg-gradient-to-br from-[#A71728] via-[#8E1321] to-[#680C17] text-white border border-white/20 shadow-xl rounded-none relative overflow-hidden">
                <div className="lg:col-span-7 space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/25 border border-white/20 text-xs font-mono font-bold text-[#FFEAA7] tracking-wider uppercase">
                    Industrial & Trade Staffing
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white leading-tight">
                    {BLUE_COLLAR_DATA.header.title}
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed font-light">
                    {BLUE_COLLAR_DATA.header.description}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => handleOpenModal("employer")}
                      className="px-6 py-3 bg-white hover:bg-gray-100 text-[#A71728] font-bold text-xs uppercase tracking-wider shadow-lg rounded-none transition-colors"
                    >
                      Request Industrial Staffing
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 border-2 border-white/30 bg-black/20 p-2 rounded-none">
                  <img
                    src="/images/manufacturing_industry.jpg"
                    alt="Blue Collar Industrial Team"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Square Disciplines in System Gradient Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BLUE_COLLAR_DATA.disciplines.map((d) => (
                  <div
                    key={d.title}
                    className="p-7 bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white border border-white/20 shadow-md space-y-3 rounded-none"
                  >
                    <div className="text-xs font-mono uppercase tracking-wider text-[#FFEAA7]">DISCIPLINE</div>
                    <h4 className="text-base font-extrabold uppercase tracking-tight text-white">
                      {d.title}
                    </h4>
                    <p className="text-xs text-white/90 font-light">{d.desc}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {d.roles.slice(0, 6).map((r) => (
                        <span
                          key={r}
                          className="px-2 py-1 bg-black/25 border border-white/20 text-[10px] uppercase font-mono tracking-wide text-white/95 rounded-none"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>


      {/* =========================================================================
          SECTION: KAIZEN HIRING ROADMAP (About Style 4 Cards)
         ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#F8F9FA] text-gray-900 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Recruitment Workflow
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              The 4-Step <span className="text-[#A71728]">Kaizen Hiring Journey</span>
            </h2>
            <p className="text-sm text-gray-600 font-light">
              How we eliminate hiring friction and deliver high-performing talent into your workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIRING_WORKFLOW.map((wf, i) => {
              const IconComp = wf.icon;
              return (
                <div
                  key={i}
                  className="p-7 bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between rounded-none relative overflow-hidden group min-h-[310px]"
                >
                  <div className="absolute -bottom-4 -right-4 text-white/5 font-mono font-black text-8xl select-none pointer-events-none group-hover:text-white/10 transition-colors">
                    {wf.step}
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between pb-3 border-b border-white/20">
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-black/25 border border-white/20 text-xs font-mono font-bold text-[#FFEAA7] uppercase">
                        STEP {wf.step}
                      </div>
                      <div className="w-9 h-9 bg-black/25 border border-white/20 flex items-center justify-center text-[#FFEAA7]">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-white uppercase tracking-tight leading-snug">
                        {wf.title}
                      </h4>
                      <p className="text-[11px] text-[#FFEAA7] font-mono font-bold uppercase mt-1">
                        {wf.subtitle}
                      </p>
                    </div>
                    <p className="text-xs text-white/90 font-light leading-relaxed">
                      {wf.desc}
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


      {/* =========================================================================
          SECTION: QUALITY MATCHING & COMPLIANCE
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-200">
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
                <div className="p-4 bg-[#F9FAFB] border border-gray-200 rounded-none">
                  <strong className="block text-black font-semibold uppercase mb-1">
                    1. We Start With Your Business Requirement
                  </strong>
                  Before sourcing candidates, we work to understand the context behind the vacancy: business objectives, team environment, seniority, reporting structure, and performance expectations.
                </div>
                <div className="p-4 bg-[#F9FAFB] border border-gray-200 rounded-none">
                  <strong className="block text-black font-semibold uppercase mb-1">
                    2. We Source With Purpose
                  </strong>
                  Fewer unsuitable profiles. More meaningful hiring conversations. Candidates are pre-screened against agreed criteria to produce a shortlist of genuine relevance.
                </div>
                <div className="p-4 bg-[#F9FAFB] border border-gray-200 rounded-none">
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
                  "Clear candidate documentation and police background checks",
                  "Structured employment contracts aligned with Bangladesh Labor Law",
                  "Support for payroll management where applicable",
                  "Strict confidential handling of recruitment assignments",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-gradient-to-r from-[#A71728] via-[#8E1321] to-[#680C17] text-white border border-white/20 flex items-center gap-3 text-xs sm:text-sm rounded-none shadow-sm"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#FFEAA7] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION: PARTNER STANDARDS (5 System Gradient Cards)
         ========================================================================= */}
      <section className="py-20 bg-[#F8F9FA] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-black">
              Your Dedicated Recruitment Partner
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-light">
              When you submit a corporate inquiry, your hiring requirement is treated as a business engagement—not simply another vacancy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
            {BUSINESS_SOLUTIONS.partnerStandards.map((std, i) => (
              <div
                key={i}
                className="p-7 bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 flex flex-col justify-between rounded-none relative overflow-hidden group min-h-[280px]"
              >
                <div className="absolute -bottom-4 -right-4 text-white/5 font-mono font-black text-7xl select-none pointer-events-none group-hover:text-white/10 transition-colors">
                  0{i + 1}
                </div>

                <div className="space-y-3 relative z-10">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-black/25 border border-white/20 text-xs font-mono font-bold text-[#FFEAA7] uppercase">
                    <span>STANDARD 0{i + 1}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold uppercase text-white leading-snug">
                    {std.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-white/90 font-light leading-relaxed">
                    {std.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/15 text-[10px] font-mono text-[#FFEAA7] tracking-widest uppercase flex items-center justify-between relative z-10">
                  <span>KAWAII QUALITY</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA7] animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION: CORPORATE HIRING INQUIRY FORM
         ========================================================================= */}
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

          {/* Square System Form Box with Full Brand Color Border */}
          <div className="bg-white border-2 border-[#A71728] p-8 sm:p-12 shadow-xl relative rounded-none">
            {formSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#A71728]/10 text-[#A71728] border-2 border-[#A71728] rounded-none flex items-center justify-center mx-auto">
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
                    className="text-xs font-bold uppercase tracking-widest text-[#A71728] underline hover:text-[#8E1321]"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Company Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter registered company name"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-white border border-gray-400 focus:border-[#A71728] focus:ring-1 focus:ring-[#A71728] px-4 py-3 text-sm text-black placeholder:text-gray-400 focus:outline-none rounded-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Contact Person *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Full name of representative"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full bg-white border border-gray-400 focus:border-[#A71728] focus:ring-1 focus:ring-[#A71728] px-4 py-3 text-sm text-black placeholder:text-gray-400 focus:outline-none rounded-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Designation / Job Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Head of HR / MD"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="w-full bg-white border border-gray-400 focus:border-[#A71728] focus:ring-1 focus:ring-[#A71728] px-4 py-3 text-sm text-black placeholder:text-gray-400 focus:outline-none rounded-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Business Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="corporate@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-400 focus:border-[#A71728] focus:ring-1 focus:ring-[#A71728] px-4 py-3 text-sm text-black placeholder:text-gray-400 focus:outline-none rounded-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+880 17..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-gray-400 focus:border-[#A71728] focus:ring-1 focus:ring-[#A71728] px-4 py-3 text-sm text-black placeholder:text-gray-400 focus:outline-none rounded-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Industry Sector *
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full bg-white border border-gray-400 focus:border-[#A71728] focus:ring-1 focus:ring-[#A71728] px-4 py-3 text-sm text-black focus:outline-none rounded-none transition-colors"
                    >
                      <option value="IT & Software">IT & Software</option>
                      <option value="Engineering & Construction">Engineering & Construction</option>
                      <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                      <option value="Garments & Textile">Garments & Textile</option>
                      <option value="Financial & Corporate">Financial & Corporate</option>
                      <option value="Healthcare & Pharma">Healthcare & Pharma</option>
                      <option value="Energy & Power">Energy & Power</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Number of Vacancies
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 1-5 or 50+"
                      value={formData.positions}
                      onChange={(e) => setFormData({ ...formData, positions: e.target.value })}
                      className="w-full bg-white border border-gray-400 focus:border-[#A71728] focus:ring-1 focus:ring-[#A71728] px-4 py-3 text-sm text-black placeholder:text-gray-400 focus:outline-none rounded-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                      Expected Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-white border border-gray-400 focus:border-[#A71728] focus:ring-1 focus:ring-[#A71728] px-4 py-3 text-sm text-black focus:outline-none rounded-none transition-colors"
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
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                    Required Experience / Technical Skills
                  </label>
                  <input
                    type="text"
                    placeholder="Key skills, certifications, degrees, or years of experience required"
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    className="w-full bg-white border border-gray-400 focus:border-[#A71728] focus:ring-1 focus:ring-[#A71728] px-4 py-3 text-sm text-black placeholder:text-gray-400 focus:outline-none rounded-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                    Hiring Project Details / Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us more about the position, location, team structure, or recruitment goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-400 focus:border-[#A71728] focus:ring-1 focus:ring-[#A71728] px-4 py-3 text-sm text-black placeholder:text-gray-400 focus:outline-none rounded-none transition-colors"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-[11px] text-gray-500 max-w-sm">
                    Your business information is strictly confidential and protected by NDA protocols.
                  </p>
                  <RedButton
                    type="submit"
                    variant="primary"
                    size="sm"
                    className="text-xs font-bold whitespace-nowrap px-6 py-2.5 rounded-none shadow-sm"
                  >
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

