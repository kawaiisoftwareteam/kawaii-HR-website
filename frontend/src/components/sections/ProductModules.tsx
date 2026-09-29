"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, UserRound, Workflow, Wrench, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { PRODUCT_MODULES } from "@/data/companyData";
import { RedButton } from "../ui/RedButton";

const MODULE_ICONS = [Building2, UserRound, Workflow, Wrench];

export function ProductModules({
  onOpenModal,
}: {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}) {
  const [activeId, setActiveId] = useState(PRODUCT_MODULES[0].id);
  const active = PRODUCT_MODULES.find((m) => m.id === activeId) ?? PRODUCT_MODULES[0];
  const ActiveIcon = MODULE_ICONS[PRODUCT_MODULES.findIndex((m) => m.id === activeId)] ?? Building2;

  return (
    <section
      id="platform"
      className="relative py-20 md:py-28 bg-[#FAFAFA] text-[#111111] overflow-hidden border-b border-black/5"
    >
      <div className="absolute inset-0 japanese-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 z-10">
        <div className="max-w-3xl space-y-3 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A71728]/10 border border-[#A71728]/25 rounded-full text-[#A71728] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 — Product Modules</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-[0.98] text-black">
            Four Modules. <br />
            <span className="text-[#A71728]">One Unified Platform.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-2xl">
            A digital recruitment ecosystem for Bangladesh — employer portals, candidate careers, HR pipelines, and skilled workforce deployment under Japanese-standard discipline.
          </p>
        </div>

        {/* Module Switcher Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PRODUCT_MODULES.map((mod, idx) => {
            const Icon = MODULE_ICONS[idx];
            const isActive = mod.id === activeId;
            return (
              <button
                key={mod.id}
                type="button"
                onClick={() => setActiveId(mod.id)}
                className={`text-left p-6 sm:p-7 rounded-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[160px] cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#680C17] text-white shadow-2xl shadow-[#A71728]/30 -translate-y-1.5 border border-white/20"
                    : "bg-white text-[#111] hover:bg-gray-50 border border-black/10 hover:border-[#A71728]/40 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-4 w-full">
                  <span
                    className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded-md ${
                      isActive ? "bg-black/25 text-[#FFEAA7]" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    MODULE 0{mod.number}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isActive ? "bg-white/20 text-white" : "bg-[#A71728]/10 text-[#A71728]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3
                  className={`text-base sm:text-lg font-extrabold uppercase tracking-tight leading-snug ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  {mod.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Module Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="p-8 sm:p-10 md:p-12 rounded-3xl bg-white border border-black/10 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A71728]/10 text-[#A71728] rounded-full border border-[#A71728]/25 text-xs font-bold uppercase tracking-wider">
                  <ActiveIcon className="w-4 h-4" />
                  <span>{active.tagline}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-black leading-tight">
                  {active.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                  {active.description}
                </p>
                <div className="pt-2">
                  <RedButton
                    variant="primary"
                    size="md"
                    onClick={() =>
                      onOpenModal(
                        active.id === "candidate-portal" || active.id === "skilled-workforce"
                          ? "jobseeker"
                          : "employer"
                      )
                    }
                    className="shadow-lg shadow-[#A71728]/20"
                  >
                    {active.id === "candidate-portal" || active.id === "skilled-workforce"
                      ? "Join as Candidate"
                      : "Start Hiring Now"}
                  </RedButton>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#F9FAFB] p-6 sm:p-8 rounded-2xl border border-black/5">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4 pb-2 border-b border-gray-200">
                  Core Module Capabilities
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {active.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-200/80 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#A71728] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-800 font-medium leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

