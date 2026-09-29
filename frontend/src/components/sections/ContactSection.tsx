"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Building,
  User,
  Landmark,
  Mail,
  Phone,
  Globe,
  CheckCircle2,
  Calendar,
  Send,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";
import { RedButton } from "../ui/RedButton";

export function ContactSection({ onOpenModal }: { onOpenModal: (tab: "employer" | "jobseeker") => void }) {
  const [formType, setFormType] = useState<"employer" | "jobseeker">("employer");
  const [submitted, setSubmitted] = useState(false);

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-40 bg-premium-white text-[#111111] overflow-hidden border-b border-black/5">
      {/* Background Japanese Grid */}
      <div className="absolute inset-0 japanese-grid-pattern opacity-45 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#A71728]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#A71728]" />
            <span>17 — GET IN TOUCH</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-[0.92] text-black">
            CONNECT WITH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A71728] via-[#8E1321] to-[#C92A3E]">
              PREMIER HR PARTNERS.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
            Japanese-standard HR operations. Local market expertise. Dedicated support for enterprise hiring and ambitious career milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Official Corporate Registry & Headquarters Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-white/95 backdrop-blur-md rounded-3xl text-[#111] space-y-6 border border-black/8 relative shadow-lg overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#A71728] via-[#8E1321] to-[#680C17]" />

              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#FFEAA7] text-[#8E1321] text-[10px] font-black uppercase tracking-wider">
                  <span>CORPORATE HEADQUARTERS</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111]">
                  {COMPANY_INFO.name}
                </h3>
                <div className="text-xs text-gray-600 tracking-wider font-medium">
                  Sister Concern of {COMPANY_INFO.group}
                </div>
              </div>

              <div className="space-y-3.5 pt-4 border-t border-black/8 text-xs sm:text-sm text-gray-700">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#A71728] shrink-0 mt-0.5" />
                  <span className="font-light">{COMPANY_INFO.address}</span>
                </div>

                {/* Established */}
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>
                    Established: <strong className="text-[#111] font-semibold">{COMPANY_INFO.establishedYear}</strong>
                  </span>
                </div>

                {/* Chairman */}
                <div className="flex items-center space-x-3">
                  <User className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>
                    Chairman: <strong className="text-[#111] font-semibold">{COMPANY_INFO.chairman}</strong>
                  </span>
                </div>

                {/* Managing Director */}
                <div className="flex items-center space-x-3">
                  <User className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>
                    Managing Director: <strong className="text-gray-700 font-semibold">{COMPANY_INFO.managingDirector}</strong>
                  </span>
                </div>

                {/* Bank */}
                <div className="flex items-center space-x-3">
                  <Landmark className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>
                    Institutional Bank: <strong className="text-[#111] font-semibold">{COMPANY_INFO.bank}</strong>
                  </span>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="pt-4 border-t border-black/8 space-y-2.5 text-xs text-gray-600">
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-[#A71728]" />
                  <span>Email: <strong className="text-black font-medium">{COMPANY_INFO.email}</strong></span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-[#A71728]" />
                  <span>Phone: <strong className="text-black font-medium">{COMPANY_INFO.phone}</strong></span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Globe className="w-4 h-4 text-[#A71728]" />
                  <span>Website: <strong className="text-black font-medium">{COMPANY_INFO.website}</strong></span>
                </div>
              </div>
            </div>

            {/* Quick Modal Trigger Cards */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => onOpenModal("employer")}
                className="p-5 bg-white rounded-2xl border border-gray-200 hover:border-[#A71728] text-left space-y-1 transition-all group shadow-sm hover:shadow-md"
              >
                <div className="text-[10px] font-bold tracking-widest text-[#A71728] uppercase">
                  ENTERPRISE
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase text-black group-hover:text-[#A71728] transition-colors">
                  I&apos;m an Employer →
                </div>
              </button>

              <button
                onClick={() => onOpenModal("jobseeker")}
                className="p-5 bg-white rounded-2xl border border-gray-200 hover:border-black text-left space-y-1 transition-all group shadow-sm hover:shadow-md"
              >
                <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                  CANDIDATE
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase text-black group-hover:text-[#A71728] transition-colors">
                  I&apos;m a Job Seeker →
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-md rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#A71728]/10 text-[#A71728] border border-[#A71728] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-black">
                  Message Dispatched
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Your inquiry has been routed to our Tokyo & Dhaka management desks. A senior coordinator will reach out promptly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold uppercase tracking-widest text-[#A71728] underline underline-offset-4"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleInlineSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setFormType("employer")}
                      className={`text-xs sm:text-sm font-bold uppercase tracking-wider pb-1 border-b-2 transition-all ${
                        formType === "employer"
                          ? "border-[#A71728] text-black"
                          : "border-transparent text-gray-400 hover:text-black"
                      }`}
                    >
                      Employer Inquiry
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormType("jobseeker")}
                      className={`text-xs sm:text-sm font-bold uppercase tracking-wider pb-1 border-b-2 transition-all ${
                        formType === "jobseeker"
                          ? "border-[#A71728] text-black"
                          : "border-transparent text-gray-400 hover:text-black"
                      }`}
                    >
                      Job Seeker Inquiry
                    </button>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#A71728] tracking-widest bg-[#A71728]/10 px-2.5 py-1 rounded-full">
                    Direct Channel
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      {formType === "employer" ? "Company Name *" : "Full Name *"}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={formType === "employer" ? "Your Organization" : "Your Name"}
                      className="w-full bg-gray-50/70 border border-gray-300 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="corporate@domain.com"
                      className="w-full bg-gray-50/70 border border-gray-300 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+880 / +81 ..."
                      className="w-full bg-gray-50/70 border border-gray-300 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Subject / Sector
                    </label>
                    <select
                      className="w-full bg-gray-50/70 border border-gray-300 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728] focus:bg-white transition-all"
                    >
                      <option>General Sourcing Inquiry</option>
                      <option>Executive Headhunting</option>
                      <option>Technical Engineering Staffing</option>
                      <option>Japanese Language Candidate Placement</option>
                      <option>Career Guidance & CV Review</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details about your talent requirements, timeline, or career ambitions..."
                    className="w-full bg-gray-50/70 border border-gray-300 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728] focus:bg-white transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <span className="text-[10px] text-gray-500">
                    * Information is handled in strict compliance with data privacy.
                  </span>
                  <RedButton type="submit" variant="primary" size="md" className="rounded-xl font-bold shadow-md">
                    Send Inquiry
                  </RedButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
