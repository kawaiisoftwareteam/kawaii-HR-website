"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Mail,
  Phone,
  CheckCircle2,
  Upload,
  MessageSquare,
  Building2,
  Users,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { RedButton } from "@/components/ui/RedButton";
import { COMPANY_INFO, SERVICES_FAQS } from "@/data/companyData";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"employer" | "jobseeker">("employer");
  const [activeTab, setActiveTab] = useState<"employer" | "candidate">("employer");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  // Employer Form State
  const [empForm, setEmpForm] = useState({
    companyName: "",
    contactPerson: "",
    designation: "",
    email: "",
    phone: "",
    industry: "IT & Software",
    vacancies: "",
    employmentType: "Permanent / Direct Hire",
    skills: "",
    timeline: "Within 2–4 weeks",
    message: "",
  });

  // Candidate Form State
  const [candForm, setCandForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    specialty: "",
    experienceLevel: "Mid-Level Professional",
    inquiryType: "General Career Inquiry",
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
              Connect With Us
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold tracking-tight uppercase leading-[1.02] text-[#111]"
            >
              Connect with Country&apos;s <br />
              <span className="text-[#A71728]">Premier HR & Talent Partners.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl"
            >
              Japanese-standard HR operations. Local market expertise. Dedicated support. Whether you are an enterprise looking to hire exceptional talent or a professional seeking your next career opportunity, Kawaii Japan Career & HR provides a clear, responsive path forward.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Direct Division Channels */}
      <section className="py-16 md:py-20 bg-premium-light border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border-l-4 border-[#A71728] shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A71728]">
                <Building2 className="w-4 h-4" />
                <span>Corporate Solutions Division</span>
              </div>
              <h3 className="text-xl font-bold uppercase text-black">
                B2B Sales & Enterprise Consultations
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                For organizations seeking executive search, engineering staffing, bulk technical workforce, or HR outsourcing. Response standard: within 24 business hours.
              </p>
              <div className="pt-2 text-xs font-semibold text-black space-y-1">
                <div>Email: corporate@kawaiihr.com</div>
                <div>Hours: Sun–Thu | 9:00 AM – 6:00 PM BST</div>
              </div>
            </div>

            <div className="p-8 bg-white border-l-4 border-black shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-700">
                <Users className="w-4 h-4" />
                <span>Candidate Support & Placement Helpdesk</span>
              </div>
              <h3 className="text-xl font-bold uppercase text-black">
                Career & Recruitment Assistance
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                For professionals and job seekers who need assistance with application status, interview guidance, profile updates, and verified opportunities.
              </p>
              <div className="pt-2 text-xs font-semibold text-black space-y-1">
                <div>Email: careers@kawaiihr.com</div>
                <div>Hours: Sun–Thu | 9:00 AM – 6:00 PM BST</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Form Section */}
      <section className="py-24 md:py-32 bg-white border-b border-black/5">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              Tell Us How We Can Assist You
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto font-light">
              Choose the inquiry path that best matches your needs. Our dedicated desks route your request to the appropriate specialist.
            </p>

            {/* Tab Selector */}
            <div className="flex justify-center gap-4 pt-6">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("employer");
                  setFormSubmitted(false);
                }}
                className={`px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all border ${
                  activeTab === "employer"
                    ? "bg-[#A71728] text-white border-[#A71728] shadow-md"
                    : "bg-gray-100 text-gray-700 border-gray-200 hover:border-black"
                }`}
              >
                Employer Inquiry
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("candidate");
                  setFormSubmitted(false);
                }}
                className={`px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all border ${
                  activeTab === "candidate"
                    ? "bg-[#A71728] text-white border-[#A71728] shadow-md"
                    : "bg-gray-100 text-gray-700 border-gray-200 hover:border-black"
                }`}
              >
                Candidate Inquiry
              </button>
            </div>
          </div>

          <div className="bg-[#FBFBFB] border border-gray-300 p-8 sm:p-12 shadow-lg">
            {formSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#A71728]/10 text-[#A71728] border border-[#A71728] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase text-black">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you. Your request has been routed to our dedicated {activeTab === "employer" ? "Corporate Solutions Division" : "Candidate Support Desk"}. A specialist will follow up within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold uppercase tracking-widest text-[#A71728] underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : activeTab === "employer" ? (
              /* Employer Form */
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your organization"
                      value={empForm.companyName}
                      onChange={(e) => setEmpForm({ ...empForm, companyName: e.target.value })}
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
                      placeholder="Full name"
                      value={empForm.contactPerson}
                      onChange={(e) => setEmpForm({ ...empForm, contactPerson: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Designation
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., HR Director"
                      value={empForm.designation}
                      onChange={(e) => setEmpForm({ ...empForm, designation: e.target.value })}
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
                      value={empForm.email}
                      onChange={(e) => setEmpForm({ ...empForm, email: e.target.value })}
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
                      value={empForm.phone}
                      onChange={(e) => setEmpForm({ ...empForm, phone: e.target.value })}
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
                      value={empForm.industry}
                      onChange={(e) => setEmpForm({ ...empForm, industry: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    >
                      <option value="IT & Software">IT & Software</option>
                      <option value="Engineering & Construction">Engineering & Construction</option>
                      <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                      <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                      <option value="Financial Services">Financial Services</option>
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
                      placeholder="e.g., 2 or 25+"
                      value={empForm.vacancies}
                      onChange={(e) => setEmpForm({ ...empForm, vacancies: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Timeline
                    </label>
                    <select
                      value={empForm.timeline}
                      onChange={(e) => setEmpForm({ ...empForm, timeline: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    >
                      <option value="Immediate">Immediate</option>
                      <option value="Within 2–4 weeks">Within 2–4 weeks</option>
                      <option value="Within 1–3 months">Within 1–3 months</option>
                      <option value="Planning / Future Requirement">Planning / Future Requirement</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Message / Position Specifications
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your hiring goals, role expectations, and technical needs..."
                    value={empForm.message}
                    onChange={(e) => setEmpForm({ ...empForm, message: e.target.value })}
                    className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-[11px] text-gray-500 max-w-sm">
                    Protected by NDA. Response committed within 24 business hours.
                  </p>
                  <RedButton variant="primary" size="lg" className="text-xs sm:text-sm font-bold">
                    Request Corporate Consultation
                  </RedButton>
                </div>
              </form>
            ) : (
              /* Candidate Form */
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={candForm.fullName}
                      onChange={(e) => setCandForm({ ...candForm, fullName: e.target.value })}
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
                      value={candForm.email}
                      onChange={(e) => setCandForm({ ...candForm, email: e.target.value })}
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
                      value={candForm.phone}
                      onChange={(e) => setCandForm({ ...candForm, phone: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Professional Specialty / Field *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g., Software Engineering, Civil, Finance"
                      value={candForm.specialty}
                      onChange={(e) => setCandForm({ ...candForm, specialty: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Experience Level *
                    </label>
                    <select
                      value={candForm.experienceLevel}
                      onChange={(e) => setCandForm({ ...candForm, experienceLevel: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    >
                      <option value="Entry Level / Graduate">Entry Level / Graduate</option>
                      <option value="Junior Professional">Junior Professional</option>
                      <option value="Mid-Level Professional">Mid-Level Professional</option>
                      <option value="Senior Professional">Senior Professional</option>
                      <option value="Manager / Team Lead">Manager / Team Lead</option>
                      <option value="Executive / Leadership">Executive / Leadership</option>
                      <option value="Skilled Technician / Worker">Skilled Technician / Worker</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Inquiry Type *
                    </label>
                    <select
                      value={candForm.inquiryType}
                      onChange={(e) => setCandForm({ ...candForm, inquiryType: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                    >
                      <option value="General Career Inquiry">General Career Inquiry</option>
                      <option value="Application Status">Application Status</option>
                      <option value="Interview Inquiry">Interview Inquiry</option>
                      <option value="CV / Profile Inquiry">CV / Profile Inquiry</option>
                      <option value="Job Opportunity Inquiry">Job Opportunity Inquiry</option>
                      <option value="Executive Career Inquiry">Executive Career Inquiry</option>
                      <option value="Technical / Skilled Workforce Inquiry">Technical / Skilled Workforce Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Message / Inquiry *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us how we can assist you with your career or recruitment journey..."
                    value={candForm.message}
                    onChange={(e) => setCandForm({ ...candForm, message: e.target.value })}
                    className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-[11px] text-gray-500 max-w-sm">
                    Candidate services are 100% free with zero candidate placement fees.
                  </p>
                  <RedButton variant="primary" size="lg" className="text-xs sm:text-sm font-bold">
                    Submit Candidate Inquiry
                  </RedButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Office & Operations Details */}
      <section className="py-20 bg-premium-light border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
                Visit Our Office
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
                {COMPANY_INFO.name}
              </h2>
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                {COMPANY_INFO.group} | Japan Career & HR Division
              </p>

              <div className="space-y-4 pt-2 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#A71728] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-black font-semibold">Office Address</strong>
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#A71728] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-black font-semibold">Business Hours</strong>
                    <span>{COMPANY_INFO.businessHours}</span>
                    <span className="block text-xs text-gray-500 mt-0.5">{COMPANY_INFO.weekendHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#A71728] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-black font-semibold">Communication SLA</strong>
                    <span>Response within {COMPANY_INFO.sla}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white border border-gray-300 p-8 shadow-sm space-y-4">
              <div className="aspect-video bg-gray-100 border border-gray-200 flex flex-col items-center justify-center text-center p-6 space-y-2">
                <MapPin className="w-8 h-8 text-[#A71728]" />
                <div className="text-sm font-bold uppercase text-black">
                  Dhaka Headquarters Location
                </div>
                <p className="text-xs text-gray-500 max-w-xs">
                  Banasree, Rampura, Dhaka, Bangladesh. Appointments recommended for in-person consultations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official 8 FAQs */}
      <section id="faq" className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-3 mb-16">
            <div className="text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              Questions & <span className="text-[#A71728]">Answers</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-light">
              Clear information for corporate employers and professional candidates.
            </p>
          </div>

          <div className="space-y-4">
            {SERVICES_FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-gray-200 bg-[#FBFBFB] transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-black"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A71728] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-gray-700 font-light leading-relaxed border-t border-gray-200 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
