"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { RedButton } from "../ui/RedButton";

export function PhilosophySection({ onOpenModal }: { onOpenModal: (tab: "employer" | "jobseeker") => void }) {
  return (
    <section className="relative w-full py-36 md:py-48 bg-black text-white overflow-hidden select-none flex items-center justify-center border-b border-white/10">
      {/* Background Cinematic Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/images/philosophy_bg.jpg"
          alt="International Corporate Vision"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.3em] text-[#A71728] uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-[#A71728] animate-pulse" />
          <span>13 — OUR PHILOSOPHY</span>
        </motion.div>

        {/* Big Impact Statements */}
        <div className="space-y-6 md:space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[1.05] text-white"
          >
            THE RIGHT PERSON <br />
            CAN CHANGE AN <span className="text-[#A71728]">ORGANIZATION.</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-[2px] bg-white/30 mx-auto"
          />

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.05] text-white/90"
          >
            THE RIGHT OPPORTUNITY <br />
            CAN CHANGE A <span className="text-white">LIFE.</span>
          </motion.h3>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-light leading-relaxed"
        >
          We stand at the intersection of human ambition and enterprise growth, unlocking transformative possibilities for companies and individuals alike.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="pt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <RedButton
            variant="primary"
            size="lg"
            onClick={() => onOpenModal("employer")}
          >
            Partner With Kawaii
          </RedButton>
          <RedButton
            variant="white"
            size="lg"
            onClick={() => onOpenModal("jobseeker")}
          >
            Advance Your Career
          </RedButton>
        </motion.div>
      </div>
    </section>
  );
}
