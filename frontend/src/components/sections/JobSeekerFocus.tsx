"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, UserCheck, Briefcase, GraduationCap } from "lucide-react";
import { RedButton } from "../ui/RedButton";

export function JobSeekerFocus({
  onOpenModal,
}: {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}) {
  const benefits = [
    {
      title: "Career Matching",
      desc: "Direct pairing with verified multinational employers matching your true technical skill caliber.",
      icon: Briefcase,
    },
    {
      title: "CV & Portfolio Enhancement",
      desc: "Comprehensive resume restructuring aligned with Japanese and international executive standards.",
      icon: GraduationCap,
    },
    {
      title: "Rigorous Interview Preparation",
      desc: "One-on-one mock interviews, technical debriefs, and Japanese corporate etiquette coaching.",
      icon: UserCheck,
    },
    {
      title: "Continuous Post-Placement Support",
      desc: "Ongoing mentorship and career progression advocacy throughout your professional tenure.",
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="job-seekers"
      className="relative py-16 md:py-24 bg-[#F8F9FA] text-[#111111] border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-center gap-6 lg:gap-0">
          {/* Content card — whole block shifted left */}
          <div className="lg:col-span-7 lg:col-start-1 relative z-20 order-2 lg:order-1 lg:-ml-10 xl:-ml-16 2xl:-ml-20">
            <div className="bg-white/55 backdrop-blur-2xl backdrop-saturate-150 border border-white/70 shadow-[0_12px_48px_rgba(0,0,0,0.1)] p-8 sm:p-10 md:p-12 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-sm font-bold tracking-[0.22em] text-[#A71728] uppercase">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A71728]" />
                  <span>07 — CANDIDATE ADVOCACY</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[0.92] text-black">
                  FOR <br />
                  <span className="text-[#A71728]">JOB SEEKERS.</span>
                </h2>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
                We connect ambitious professionals with rewarding career milestones
                across top-tier Japanese enterprises and international institutions
                in Bangladesh.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {benefits.map((b, idx) => {
                  const Icon = b.icon;
                  return (
                    <motion.div
                      key={b.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.06 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 rounded-full bg-[#A71728]/10 text-[#A71728] flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </span>
                        <h4 className="text-sm sm:text-base font-bold uppercase text-black">
                          {b.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {b.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <RedButton
                  variant="primary"
                  size="lg"
                  onClick={() => onOpenModal("jobseeker")}
                >
                  Explore Opportunities
                </RedButton>
                <RedButton
                  variant="ghost"
                  size="md"
                  onClick={() => onOpenModal("jobseeker")}
                >
                  Submit Your CV
                </RedButton>
              </div>
            </div>
          </div>

          {/* Image — right side */}
          <div className="lg:col-span-7 lg:col-start-6 relative order-1 lg:order-2 lg:ml-10 xl:ml-16 z-10">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] w-full overflow-hidden shadow-2xl">
              <Image
                src="/for%20job%20seker/seeker.png"
                alt="Professional job seekers in modern office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[58%_center]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
