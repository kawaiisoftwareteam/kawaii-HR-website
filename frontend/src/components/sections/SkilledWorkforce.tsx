"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Wrench, ClipboardCheck, Award, ArrowRight } from "lucide-react";
import { TARGET_AUDIENCES } from "@/data/companyData";
import { RedButton } from "../ui/RedButton";

export function SkilledWorkforce({
  onOpenModal,
}: {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}) {
  const audience = TARGET_AUDIENCES.find((a) => a.id === "skilled-workforce");

  const pillars = [
    {
      title: "Skill Profiles",
      desc: "Trade-ready profiles capturing tools, experience level, and deployment readiness.",
      icon: Wrench,
    },
    {
      title: "Certification Records",
      desc: "Documented licenses and training history for transparent employer review.",
      icon: Award,
    },
    {
      title: "Trade Assessment",
      desc: "Structured evaluation so employers hire verified capability, not just claims.",
      icon: ClipboardCheck,
    },
  ];

  return (
    <section
      id="skilled-workforce"
      className="relative py-28 md:py-36 bg-premium-light text-[#111111] overflow-hidden border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#A71728]" />
                <span>08 — SKILLED WORKFORCE</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.95] text-black">
                FOR SKILLED <br />
                <span className="text-[#A71728]">WORKERS.</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed max-w-xl">
                Structured employment pathways for technicians, operators, factory
                and construction workers — skill-based matching with transparent
                recruitment and room to grow.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {audience?.targets.map((role) => (
                <span
                  key={role}
                  className="text-[11px] uppercase font-bold tracking-wider text-gray-700 border border-gray-300 px-3 py-1.5"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="space-y-3 border-t border-gray-300 pt-4"
                  >
                    <Icon className="w-5 h-5 text-[#A71728]" />
                    <h4 className="text-sm font-bold uppercase tracking-tight text-black">
                      {p.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
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
                Register Skills
              </RedButton>
              <button
                type="button"
                onClick={() => onOpenModal("employer")}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:text-[#A71728] transition-colors"
              >
                <span>Deploy Workforce</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/manufacturing_industry.jpg"
                alt="Skilled workforce in manufacturing and industrial roles"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/70 font-bold mb-1">
                  Needs We Serve
                </p>
                <p className="text-sm sm:text-base text-white font-medium">
                  {audience?.needs.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
