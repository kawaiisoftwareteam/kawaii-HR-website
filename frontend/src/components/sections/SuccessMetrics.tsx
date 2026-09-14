"use client";

import React from "react";
import { motion } from "framer-motion";
import { PLATFORM_KPIS } from "@/data/companyData";
import { RedButton } from "../ui/RedButton";

export function SuccessMetrics({
  onOpenModal,
}: {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}) {
  return (
    <section
      id="success-metrics"
      className="relative py-28 md:py-36 text-white overflow-hidden border-b border-white/10"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#12141A]" />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 65% 50% at 10% 20%, rgba(167,23,40,0.16), transparent 55%),
              radial-gradient(ellipse 50% 40% at 90% 80%, rgba(167,23,40,0.08), transparent 50%),
              linear-gradient(160deg, #1A1D26 0%, #12141A 45%, #0E1016 100%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#A71728]" />
              <span>14 — SUCCESS METRICS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-[0.95] text-white">
              HOW WE <br />
              <span className="text-[#A71728]">MEASURE WINNING.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
              Platform KPIs that track ecosystem health — from registered companies
              and candidates to placements, hiring speed, and satisfaction.
            </p>
          </div>
          <RedButton
            variant="primary"
            size="md"
            onClick={() => onOpenModal("employer")}
          >
            Become a Partner
          </RedButton>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {PLATFORM_KPIS.map((kpi, idx) => (
            <motion.div
              key={kpi.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="group space-y-3 border-l border-white/15 pl-6 hover:border-[#A71728] transition-colors duration-400"
            >
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#A71728] uppercase">
                KPI 0{idx + 1}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white group-hover:text-[#A71728] transition-colors">
                {kpi.label}
              </h3>
              <p className="text-xs sm:text-sm text-white/55 font-light leading-relaxed">
                {kpi.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
