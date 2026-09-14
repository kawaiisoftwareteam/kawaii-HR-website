"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, UserRound, Workflow, Wrench, Check } from "lucide-react";
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
      className="relative py-28 md:py-36 bg-premium-white text-[#111111] overflow-hidden border-b border-black/5"
    >
      <div className="absolute inset-0 japanese-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl space-y-4 mb-14 md:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#A71728]" />
            <span>05 — PRODUCT MODULES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.95] text-black">
            FOUR MODULES. <br />
            <span className="text-[#A71728]">ONE PLATFORM.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-2xl">
            A digital recruitment ecosystem for Bangladesh — employer portals,
            candidate careers, HR pipelines, and skilled workforce deployment
            under Japanese-standard discipline.
          </p>
        </div>

        {/* Module switcher */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {PRODUCT_MODULES.map((mod, idx) => {
            const Icon = MODULE_ICONS[idx];
            const isActive = mod.id === activeId;
            return (
              <button
                key={mod.id}
                type="button"
                onClick={() => setActiveId(mod.id)}
                className={`text-left p-5 border transition-all duration-300 ${
                  isActive
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-200 hover:border-black"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-bold tracking-widest uppercase ${
                      isActive ? "text-[#A71728]" : "text-gray-400"
                    }`}
                  >
                    Module {mod.number}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${isActive ? "text-[#A71728]" : "text-gray-400"}`}
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight leading-snug">
                  {mod.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active module detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start border-t border-gray-200 pt-10"
          >
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-3 text-[#A71728]">
                <ActiveIcon className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  {active.tagline}
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black leading-tight">
                {active.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                {active.description}
              </p>
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
              >
                {active.id === "candidate-portal" || active.id === "skilled-workforce"
                  ? "Join as Candidate"
                  : "Start Hiring"}
              </RedButton>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {active.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 border-b border-gray-100 pb-3"
                  >
                    <Check className="w-4 h-4 text-[#A71728] shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-800 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
