"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, User, CheckCircle2, ArrowRight } from "lucide-react";
import { EMPLOYER_PROCESS, JOB_SEEKER_PROCESS } from "@/data/companyData";
import { RedButton } from "../ui/RedButton";

export function ProcessSection({ onOpenModal }: { onOpenModal: (tab: "employer" | "jobseeker") => void }) {
  const [activeWorkflow, setActiveWorkflow] = useState<"employers" | "jobseekers">("employers");

  const currentProcess = activeWorkflow === "employers" ? EMPLOYER_PROCESS : JOB_SEEKER_PROCESS;

  return (
    <section id="process" className="relative py-28 md:py-36 bg-[#F8F9FA] text-[#111111] overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-gray-200">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#A71728]" />
              <span>10 — METHODOLOGY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-[0.95] text-black">
              HOW WE WORK
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light tracking-wide">
              Structured 6-stage workflows engineered for predictability, transparency, and speed.
            </p>
          </div>

          {/* Workflow Toggle Buttons */}
          <div className="flex items-center space-x-2 pt-6 md:pt-0">
            <button
              onClick={() => setActiveWorkflow("employers")}
              className={`flex items-center space-x-2 px-5 py-3 text-xs uppercase font-bold tracking-wider transition-all border ${activeWorkflow === "employers"
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300 hover:border-black"
                }`}
            >
              <Building2 className="w-3.5 h-3.5 text-[#A71728]" />
              <span>For Employers</span>
            </button>

            <button
              onClick={() => setActiveWorkflow("jobseekers")}
              className={`flex items-center space-x-2 px-5 py-3 text-xs uppercase font-bold tracking-wider transition-all border ${activeWorkflow === "jobseekers"
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300 hover:border-black"
                }`}
            >
              <User className="w-3.5 h-3.5 text-[#A71728]" />
              <span>For Job Seekers</span>
            </button>
          </div>
        </div>

        {/* 6-Stage Timeline Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWorkflow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentProcess.map((step, idx) => (
              <div
                key={step.step}
                className="group relative bg-white border border-gray-200 p-8 flex flex-col justify-between hover:border-[#A71728] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Top Number & Tag */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <span className="text-3xl font-extrabold text-[#A71728] font-sans">
                      {step.step}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
                      STAGE {idx + 1} OF 6
                    </span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-black group-hover:text-[#A71728] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 text-[11px] text-gray-500 font-light italic">
                  {step.details}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA Bar */}
        <div className="mt-16 p-8 bg-black text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-bold text-[#A71728] uppercase tracking-widest">
              Ready to Initiate the Process?
            </div>
            <div className="text-lg sm:text-xl font-bold uppercase">
              {activeWorkflow === "employers"
                ? "Start Your Enterprise Hiring Pipeline Today"
                : "Submit Your Candidate Profile For Immediate Matching"}
            </div>
          </div>

          <RedButton
            variant="primary"
            size="md"
            onClick={() => onOpenModal(activeWorkflow === "employers" ? "employer" : "jobseeker")}
          >
            {activeWorkflow === "employers" ? "Request Consultation" : "Apply Now"}
          </RedButton>
        </div>
      </div>
    </section>
  );
}
