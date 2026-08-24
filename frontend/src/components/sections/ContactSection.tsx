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
    <section id="contact" className="relative py-28 md:py-40 bg-[#FFFFFF] text-[#111111] overflow-hidden border-b border-gray-200">
      {/* Background Japanese Grid */}
      <div className="absolute inset-0 japanese-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#A71728]" />
            <span>16 — GET IN TOUCH</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.92] text-black">
            LET&apos;S BUILD <br />
            <span className="text-[#A71728]">THE RIGHT CONNECTION.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
            Whether you are expanding your corporate engineering footprint or seeking your next executive career milestone, our bilingual team is at your disposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Official Corporate Registry & Headquarters Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-black text-white space-y-6 shadow-2xl relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#A71728]" />

              <div className="space-y-1">
                <div className="text-[10px] uppercase font-bold tracking-widest text-[#A71728]">
                  CORPORATE HEADQUARTERS
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                  {COMPANY_INFO.name}
                </h3>
                <div className="text-xs text-white/50 tracking-wider">
                  Sister Concern of {COMPANY_INFO.group}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm text-white/80">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#A71728] shrink-0 mt-0.5" />
                  <span className="font-light">{COMPANY_INFO.address}</span>
                </div>

                {/* Established */}
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>
                    Established: <strong className="text-white font-medium">{COMPANY_INFO.establishedYear}</strong>
                  </span>
                </div>

                {/* Chairman */}
                <div className="flex items-center space-x-3">
                  <User className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>
                    Chairman: <strong className="text-white font-medium">{COMPANY_INFO.chairman}</strong>
                  </span>
                </div>

                {/* Managing Director */}
                <div className="flex items-center space-x-3">
                  <User className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>
                    Managing Director: <strong className="text-white/70 font-medium">{COMPANY_INFO.managingDirector}</strong>
                  </span>
                </div>

                {/* Bank */}
                <div className="flex items-center space-x-3">
                  <Landmark className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>
                    Institutional Bank: <strong className="text-white font-medium">{COMPANY_INFO.bank}</strong>
                  </span>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-white/70">
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-[#A71728]" />
                  <span>Email: {COMPANY_INFO.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-[#A71728]" />
                  <span>Phone: {COMPANY_INFO.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-3.5 h-3.5 text-[#A71728]" />
                  <span>Website: {COMPANY_INFO.website}</span>
                </div>
              </div>
            </div>

            {/* Quick Modal Trigger Cards */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => onOpenModal("employer")}
                className="p-5 bg-gray-50 border border-gray-200 hover:border-[#A71728] text-left space-y-1 transition-all group"
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
                className="p-5 bg-gray-50 border border-gray-200 hover:border-black text-left space-y-1 transition-all group"
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
          <div className="lg:col-span-7 bg-[#F8F9FA] border border-gray-300 p-8 md:p-12 shadow-md">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 bg-[#A71728]/10 text-[#A71728] border border-[#A71728] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
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
                  <span className="text-[10px] uppercase font-bold text-[#A71728] tracking-widest">
                    Direct Channel
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                      {formType === "employer" ? "Company Name *" : "Full Name *"}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={formType === "employer" ? "Your Organization" : "Your Name"}
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="corporate@domain.com"
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+880 / +81 ..."
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                      Subject / Sector
                    </label>
                    <select
                      className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728] transition-colors"
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
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details about your talent requirements, timeline, or career ambitions..."
                    className="w-full bg-white border border-gray-300 px-4 py-3 text-sm text-black focus:outline-none focus:border-[#A71728] transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[10px] text-gray-500">
                    * Information is handled in strict compliance with data privacy.
                  </span>
                  <RedButton type="submit" variant="primary" size="md">
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
