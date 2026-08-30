"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, ArrowRight, MapPin, Briefcase } from "lucide-react";

const globalDestinations = [
  "Japan",
  "UAE",
  "Malaysia",
  "Singapore",
  "UK",
  "Europe",
  "USA",
  "Canada",
];

export function JapanBridge() {
  return (
    <section
      id="japan-bangladesh"
      className="relative py-24 md:py-32 bg-white text-[#111111] overflow-hidden border-b border-gray-200"
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 md:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#A71728]" />
            <span>03 — Global Career Pathways</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-[0.95] text-black">
            Bangladesh <span className="text-[#A71728]">→</span> The World
          </h2>

          <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto tracking-wide">
            From Bangladesh to opportunities worldwide — we connect skilled
            professionals with trusted employers across the globe.
          </p>
        </div>

        {/* Visual: Bangladesh origin → Global reach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Bangladesh — talent origin */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative group overflow-hidden border border-gray-200 bg-[#FAFAFA] shadow-sm"
            data-cursor="image"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/dhaka_skyline.jpg"
                alt="Dhaka, Bangladesh — talent hub"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-[#111] border border-gray-200 flex items-center space-x-1.5">
                <MapPin className="w-3 h-3 text-[#A71728]" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xl font-bold tracking-tight uppercase">
                  Talent From Bangladesh
                </div>
                <div className="text-xs text-white/85 font-light">
                  Engineers, technicians, managers & graduates ready for global roles
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center connector */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center space-y-4 py-4 text-center">
            <div className="w-14 h-14 rounded-full border-2 border-[#A71728] bg-[#FFF5F5] flex items-center justify-center text-[#A71728]">
              <Globe className="w-7 h-7" />
            </div>

            <div className="hidden lg:block w-full">
              <div className="relative h-[2px] bg-gradient-to-r from-[#A71728]/20 via-[#A71728] to-[#A71728]/20 w-full overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                  className="w-1/3 h-full bg-[#A71728]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-bold tracking-widest text-[#A71728] uppercase">
                Global Job Placement
              </div>
              <div className="text-[11px] text-gray-500 tracking-wider">
                Worldwide career opportunities
              </div>
            </div>
          </div>

          {/* Global destinations */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative group overflow-hidden border border-gray-200 bg-[#FAFAFA] shadow-sm"
            data-cursor="image"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/tokyo_skyline.jpg"
                alt="International career destinations worldwide"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-[#111] border border-gray-200 flex items-center space-x-1.5">
                <Globe className="w-3 h-3 text-[#A71728]" />
                <span>International Markets</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xl font-bold tracking-tight uppercase">
                  Jobs Across The Globe
                </div>
                <div className="text-xs text-white/85 font-light">
                  Verified employers · ethical placement · long-term career growth
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Destination tags */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10">
          {globalDestinations.map((country) => (
            <span
              key={country}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-700 bg-[#F8F9FA] border border-gray-200"
            >
              {country}
            </span>
          ))}
          <span className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#A71728] bg-[#FFF5F5] border border-[#F0A8AE]">
            + More
          </span>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
          <div className="p-6 bg-[#F8F9FA] border border-gray-200 space-y-2">
            <div className="text-xs font-bold text-[#A71728] uppercase tracking-widest">
              01 — Global Opportunities
            </div>
            <h4 className="text-lg font-bold uppercase text-black">
              Worldwide Job Access
            </h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              We open doors to legitimate roles in Japan, the Middle East,
              Southeast Asia, Europe, and beyond for Bangladeshi professionals.
            </p>
          </div>

          <div className="p-6 bg-[#F8F9FA] border border-gray-200 space-y-2">
            <div className="text-xs font-bold text-[#A71728] uppercase tracking-widest">
              02 — Career Support
            </div>
            <h4 className="text-lg font-bold uppercase text-black">
              End-to-End Guidance
            </h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              CV preparation, interview coaching, documentation support, and
              onboarding assistance from application to joining day.
            </p>
          </div>

          <div className="p-6 bg-[#F8F9FA] border border-gray-200 space-y-2">
            <div className="text-xs font-bold text-[#A71728] uppercase tracking-widest flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              03 — Trusted Placement
            </div>
            <h4 className="text-lg font-bold uppercase text-black">
              Ethical Recruitment
            </h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Free for job seekers. Transparent processes, verified employers,
              and full compliance with international labor standards.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/register"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#A71728] hover:text-black transition-colors"
          >
            Start Your Global Career
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
