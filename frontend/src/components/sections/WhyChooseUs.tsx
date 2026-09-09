"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake } from "lucide-react";
import { RedButton } from "../ui/RedButton";

export function WhyChooseUs({
  onOpenModal,
}: {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}) {
  const keywords = [
    { word: "QUALITY", desc: "Strict candidate pre-qualification matching" },
    { word: "RELIABILITY", desc: "Punctual delivery and verified credentials" },
    { word: "TRANSPARENCY", desc: "Direct communication with zero hidden costs" },
    { word: "PROFESSIONALISM", desc: "Japanese business etiquette and governance" },
    { word: "TRUST", desc: "Long-standing institutional relationships" },
    {
      word: "LONG-TERM PARTNERSHIP",
      desc: "Sustainable talent pipelines that scale",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative py-28 md:py-36 text-white overflow-hidden select-none border-b border-white/[0.06]"
    >
      {/* Premium charcoal depth */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#12141A]" />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 55% at 0% 0%, rgba(167,23,40,0.18), transparent 55%),
              radial-gradient(ellipse 60% 50% at 100% 100%, rgba(167,23,40,0.1), transparent 50%),
              radial-gradient(ellipse 50% 40% at 70% 20%, rgba(255,255,255,0.04), transparent 55%),
              linear-gradient(155deg, #1A1D26 0%, #12141A 42%, #0E1016 100%)
            `,
          }}
        />
        {/* Soft vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 75% at 50% 45%, transparent 35%, rgba(0,0,0,0.45) 100%)",
          }}
        />
        {/* Fine horizontal sheen */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 48%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          {/* Left — manifesto */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] text-[#A71728] uppercase">
                <span className="block w-8 h-px bg-[#A71728]" />
                11 — Core Differentiator
              </p>

              <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold tracking-[-0.03em] uppercase leading-[0.95] text-white">
                Quality over
                <br />
                <span className="text-[#A71728]">quantity.</span>
              </h2>
            </div>

            <p className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-md border-l border-white/20 pl-5">
              We don&apos;t believe in sending a large number of candidates. We
              focus on finding the{" "}
              <span className="text-white font-medium">
                exact right candidate
              </span>
              .
            </p>

            <ul className="space-y-3.5 text-[13px] text-white/60 leading-snug">
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#A71728] shrink-0 mt-0.5" />
                <span>
                  Zero resume flooding — only 2–3 high-fidelity matches per role
                </span>
              </li>
              <li className="flex items-start gap-3">
                <HeartHandshake className="w-4 h-4 text-[#A71728] shrink-0 mt-0.5" />
                <span>
                  Backed by Kawaii Group&apos;s proven international legacy
                </span>
              </li>
            </ul>

            <div className="pt-1">
              <RedButton
                variant="primary"
                size="lg"
                onClick={() => onOpenModal("employer")}
              >
                Experience the Difference
              </RedButton>
            </div>
          </div>

          {/* Right — editorial index */}
          <div className="lg:col-span-7">
            <div className="border-t border-white/[0.1] bg-white/[0.02] backdrop-blur-[2px] px-4 sm:px-6">
              {keywords.map((item, index) => (
                <motion.div
                  key={item.word}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr_auto] gap-x-4 sm:gap-x-6 items-baseline py-6 sm:py-7 border-b border-white/[0.1] last:border-b-0 cursor-default"
                >
                  <span className="absolute left-0 top-0 bottom-0 w-px bg-[#A71728] scale-y-0 origin-center group-hover:scale-y-100 transition-transform duration-500 ease-out" />

                  <span className="text-[11px] sm:text-xs font-medium tracking-[0.2em] text-white/35 group-hover:text-[#A71728] transition-colors tabular-nums pt-1.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 space-y-1.5">
                    <h3 className="text-xl sm:text-2xl md:text-[1.65rem] font-bold uppercase tracking-[-0.02em] text-white/90 group-hover:text-white transition-colors duration-300">
                      {item.word}
                    </h3>
                    <p className="text-sm text-white/45 font-light leading-relaxed group-hover:text-white/60 transition-colors duration-300 max-w-md">
                      {item.desc}
                    </p>
                  </div>

                  <span className="hidden sm:block text-[10px] font-semibold tracking-[0.22em] uppercase text-white/25 group-hover:text-white/45 transition-colors pt-2">
                    Pillar
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
