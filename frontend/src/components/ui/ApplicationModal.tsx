"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Building2, User, ArrowRight, Upload } from "lucide-react";
import { RedButton } from "./RedButton";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "employer" | "jobseeker";
}

export function ApplicationModal({
  isOpen,
  onClose,
  initialTab = "employer",
}: ApplicationModalProps) {
  const [activeTab, setActiveTab] = useState<"employer" | "jobseeker">(initialTab);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#0F0F0F] border border-white/15 text-white p-6 md:p-10 shadow-2xl z-10 my-auto"
          >
            {/* Red Accent Header Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#A71728]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-[#A71728]/20 border border-[#A71728] rounded-full flex items-center justify-center mx-auto text-[#A71728]">
                  <CheckCircle2 className="w-8 h-8 text-[#A71728]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
                    Inquiry Received
                  </h3>
                  <p className="text-white/70 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for connecting with Kawaii Japan Career & HR Solutions BD. Our bilingual recruitment directors will contact you within 24 hours.
                  </p>
                </div>
                <div className="pt-4">
                  <RedButton onClick={handleReset} variant="primary" size="md">
                    Return to Website
                  </RedButton>
                </div>
              </div>
            ) : (
              <div>
                {/* Header info */}
                <div className="mb-6 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#A71728] uppercase">
                    <span>Japan × Bangladesh</span>
                    <span>•</span>
                    <span>Bilingual Recruitment</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
                    {activeTab === "employer" ? "Hire Exceptional Talent" : "Discover Global Careers"}
                  </h2>
                  <p className="text-xs md:text-sm text-white/60">
                    {activeTab === "employer"
                      ? "Submit your organizational hiring requirements to access verified technical and executive talent."
                      : "Submit your profile to be matched with premier enterprises in Japan and Bangladesh."}
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-white/10 mb-6">
                  <button
                    type="button"
                    onClick={() => setActiveTab("employer")}
                    className={`flex items-center space-x-2 pb-3 px-4 text-xs md:text-sm font-semibold tracking-wider uppercase border-b-2 transition-all ${
                      activeTab === "employer"
                        ? "border-[#A71728] text-white"
                        : "border-transparent text-white/40 hover:text-white/80"
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>For Employers</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("jobseeker")}
                    className={`flex items-center space-x-2 pb-3 px-4 text-xs md:text-sm font-semibold tracking-wider uppercase border-b-2 transition-all ${
                      activeTab === "jobseeker"
                        ? "border-[#A71728] text-white"
                        : "border-transparent text-white/40 hover:text-white/80"
                    }`}
                  >
                    <User className="w-4 h-4" />
                    <span>For Job Seekers</span>
                  </button>
                </div>

                {/* Forms */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {activeTab === "employer" ? (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-semibold text-white/60 mb-1">
                            Organization Name *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="e.g., Tokyo Precision Systems"
                            className="w-full bg-white/5 border border-white/15 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#A71728] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-semibold text-white/60 mb-1">
                            Contact Person & Title *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="e.g., Takeshi Mori, HR Director"
                            className="w-full bg-white/5 border border-white/15 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#A71728] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-semibold text-white/60 mb-1">
                            Corporate Email *
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="name@company.com"
                            className="w-full bg-white/5 border border-white/15 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#A71728] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-semibold text-white/60 mb-1">
                            Industry Sector *
                          </label>
                          <select
                            required
                            className="w-full bg-[#1A1A1A] border border-white/15 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#A71728] transition-colors"
                          >
                            <option value="">Select Industry</option>
                            <option value="it">Information Technology</option>
                            <option value="manufacturing">Manufacturing & Robotics</option>
                            <option value="garments">Garments & Textiles</option>
                            <option value="pharma">Pharmaceuticals</option>
                            <option value="healthcare">Healthcare & Caregiving</option>
                            <option value="banking">Banking & Financial Services</option>
                            <option value="fmcg">FMCG & Supply Chain</option>
                            <option value="bpo">BPO & Multilingual Services</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-white/60 mb-1">
                          Key Roles Needed & Specifications
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Specify job titles, required technical skills, Japanese proficiency, or number of candidates..."
                          className="w-full bg-white/5 border border-white/15 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#A71728] transition-colors resize-none"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-semibold text-white/60 mb-1">
                            Full Name *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="e.g., Tariqul Islam"
                            className="w-full bg-white/5 border border-white/15 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#A71728] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-semibold text-white/60 mb-1">
                            Email Address *
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="name@email.com"
                            className="w-full bg-white/5 border border-white/15 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#A71728] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-semibold text-white/60 mb-1">
                            Primary Discipline / Role *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="e.g., Senior Full Stack Engineer"
                            className="w-full bg-white/5 border border-white/15 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#A71728] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider font-semibold text-white/60 mb-1">
                            Years of Experience
                          </label>
                          <select
                            className="w-full bg-[#1A1A1A] border border-white/15 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#A71728] transition-colors"
                          >
                            <option value="entry">Fresh Graduate / 0-1 Year</option>
                            <option value="mid">1 - 3 Years</option>
                            <option value="senior">3 - 6 Years</option>
                            <option value="lead">6+ Years (Lead / Principal)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-white/60 mb-1">
                          Attach CV / Portfolio Link
                        </label>
                        <div className="border border-dashed border-white/20 p-4 text-center hover:border-[#A71728] transition-colors cursor-pointer bg-white/[0.02]">
                          <Upload className="w-5 h-5 mx-auto text-white/50 mb-1" />
                          <span className="text-xs text-white/70">
                            Click to upload PDF or paste Google Drive / LinkedIn link
                          </span>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="pt-3 flex items-center justify-between">
                    <span className="text-[11px] text-white/40">
                      * Required fields. Strict confidentiality guaranteed.
                    </span>
                    <RedButton
                      type="submit"
                      variant="primary"
                      size="md"
                      className="w-auto"
                    >
                      {isSubmitting ? "Processing..." : "Submit Application"}
                    </RedButton>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
