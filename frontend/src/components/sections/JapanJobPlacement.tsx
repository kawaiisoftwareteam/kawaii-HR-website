"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarClock,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";
import { JAPAN_JOB_CIRCULARS } from "@/data/companyData";
import { RedButton } from "../ui/RedButton";

const FILTERS = ["All", "SSW", "Visa Support", "Tokyo", "Osaka"] as const;

function matchesFilter(circular: (typeof JAPAN_JOB_CIRCULARS)[number], filter: string) {
  if (filter === "All") return true;
  if (filter === "SSW") {
    return (
      circular.type.toLowerCase().includes("ssw") ||
      circular.type.toLowerCase().includes("specified skilled")
    );
  }
  if (filter === "Visa Support") {
    return circular.type.toLowerCase().includes("visa");
  }
  return circular.location.toLowerCase().includes(filter.toLowerCase());
}

export function JapanJobPlacement({
  onOpenModal,
}: {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const circulars = JAPAN_JOB_CIRCULARS.filter((c) => matchesFilter(c, filter));

  return (
    <section
      id="japan-jobs"
      className="relative py-16 md:py-24 bg-premium-light text-[#111111] overflow-hidden border-b border-black/5"
    >
      <div className="absolute inset-0 japanese-grid-pattern opacity-35 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          className="max-w-3xl space-y-4 mb-10 md:mb-12"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#A71728]" />
            <span>Japan Job Placement</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-[0.95] text-black">
            Job Circulars
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-2xl">
            Latest Japan placement circulars for Bangladeshi candidates —
            vacancies, requirements, salary range, and application deadlines in
            one board.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8 pb-5 border-b border-black/10"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          <p className="text-xs sm:text-sm text-gray-600">
            Showing{" "}
            <span className="font-bold text-black">{circulars.length}</span>{" "}
            active circular{circulars.length === 1 ? "" : "s"}
          </p>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border transition-colors ${
                  filter === f
                    ? "bg-[#A71728] border-[#A71728] text-white"
                    : "bg-white border-black/10 text-gray-600 hover:border-[#A71728] hover:text-[#A71728]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {circulars.map((job, idx) => (
            <motion.article
              key={job.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.28) }}
              className="group relative flex flex-col overflow-hidden bg-[#FFFAFA] border border-[#F0D0D4] hover:border-[#A71728] hover:bg-[#FFF5F5] hover:shadow-[0_10px_28px_rgba(167,23,40,0.08)] transition-all duration-300"
            >
              <span
                className="absolute left-0 top-0 bottom-0 w-1 bg-[#E8B4B9] group-hover:bg-[#A71728] transition-colors"
                aria-hidden="true"
              />

              <div className="flex flex-col flex-1 p-5 sm:p-6 pl-6 sm:pl-7 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#A71728] truncate">
                      {job.circularNo}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400">
                      Published {job.publishedAt}
                    </p>
                  </div>
                  <span className="shrink-0 text-[9px] font-bold uppercase tracking-wider px-2 py-1 bg-white text-[#A71728] border border-[#F0A8AE] text-right max-w-[46%] leading-snug">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold uppercase tracking-tight text-black leading-snug group-hover:text-[#A71728] transition-colors">
                  {job.title}
                </h3>

                <div className="space-y-1.5 text-xs text-gray-600">
                  <p className="inline-flex items-center gap-1.5 min-w-0">
                    <Building2 className="w-3.5 h-3.5 text-[#A71728] shrink-0" />
                    <span className="truncate">{job.company}</span>
                  </p>
                  <p className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#A71728] shrink-0" />
                    {job.location}
                  </p>
                </div>

                <p className="text-sm text-gray-600 font-light leading-relaxed line-clamp-3 flex-1">
                  {job.description}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/90 border border-[#F0D0D4] p-2.5 space-y-0.5">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                      Salary
                    </p>
                    <p className="text-xs font-semibold leading-snug">{job.salary}</p>
                  </div>
                  <div className="bg-white/90 border border-[#F0D0D4] p-2.5 space-y-0.5">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 inline-flex items-center gap-1">
                      <Users className="w-3 h-3 text-[#A71728]" />
                      Vacancies
                    </p>
                    <p className="text-xs font-semibold">{job.vacancies} posts</p>
                  </div>
                  <div className="bg-white/90 border border-[#F0D0D4] p-2.5 space-y-0.5">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 inline-flex items-center gap-1">
                      <GraduationCap className="w-3 h-3 text-[#A71728]" />
                      Education
                    </p>
                    <p className="text-xs font-semibold leading-snug line-clamp-2">
                      {job.education}
                    </p>
                  </div>
                  <div className="bg-white/90 border border-[#F0D0D4] p-2.5 space-y-0.5">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 inline-flex items-center gap-1">
                      <Briefcase className="w-3 h-3 text-[#A71728]" />
                      Experience
                    </p>
                    <p className="text-xs font-semibold leading-snug line-clamp-2">
                      {job.experience}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {job.requirements.slice(0, 3).map((req) => (
                    <span
                      key={req}
                      className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-white border border-[#F0D0D4] text-gray-700"
                    >
                      {req}
                    </span>
                  ))}
                </div>

                <div className="pt-1 mt-auto space-y-3 border-t border-[#F0A8AE]/50">
                  <p className="inline-flex items-center gap-1.5 text-[11px] text-gray-500 pt-3">
                    <CalendarClock className="w-3.5 h-3.5 text-[#A71728]" />
                    Deadline {job.deadline}
                  </p>
                  <button
                    type="button"
                    onClick={() => onOpenModal("jobseeker")}
                    className="w-full h-11 inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#A71728] hover:bg-[#0A0A0A] transition-colors"
                  >
                    Apply for this circular
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {circulars.length === 0 ? (
          <div className="bg-[#FFFAFA] border border-[#F0D0D4] p-10 text-center text-sm text-gray-500">
            No circulars match this filter. Try another category.
          </div>
        ) : null}

        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-8 border-t border-black/10">
          <p className="text-sm text-gray-600 font-light max-w-xl">
            All circulars are coordinated by Kawaii Japan Career &amp; HR
            Solutions BD with verified Japanese employers.
          </p>
          <RedButton
            variant="dark"
            size="lg"
            onClick={() => onOpenModal("jobseeker")}
          >
            Submit CV for Japan
          </RedButton>
        </div>
      </div>
    </section>
  );
}
