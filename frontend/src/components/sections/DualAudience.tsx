"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, User, CheckCircle2, Sparkles } from "lucide-react";

export function DualAudience() {
  return (
    <section id="audiences" className="relative w-full bg-white py-16 md:py-24 border-b border-black/5 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A71728]/10 border border-[#A71728]/25 rounded-full text-[#A71728] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Targeted Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
            Choose Your Dedicated Gateway
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: For Businesses */}
          <Link
            href="/for-businesses"
            className="group relative rounded-3xl border border-black/10 bg-white hover:border-[#A71728] transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl flex flex-col justify-between"
          >
            {/* Image Header with Gradient Overlay */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-900">
              <Image
                src="/images/japanese_office_team.jpg"
                alt="For employers & businesses"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-5 left-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#A71728] text-xs font-extrabold tracking-wider uppercase shadow-md">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>FOR BUSINESSES & MNCS</span>
                </div>
              </div>

              {/* Floating Action Circle */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:bg-[#A71728] group-hover:border-[#A71728] transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF8DA1] font-bold block mb-1">
                  ENTERPRISE SOLUTIONS
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                  Hire With Japanese Standard Precision
                </h3>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-7 sm:p-9 space-y-5 bg-gradient-to-b from-white to-gray-50/80">
              <p className="text-sm text-gray-700 leading-relaxed font-light">
                Discover rigorously evaluated professionals and executive leaders aligned with your organizational culture, technical standards, and long-term milestones.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1 border-t border-gray-100 text-xs text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>Executive Headhunting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>Managed Payroll & EOR</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>Zero Misalignment Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>Kaizen Screening</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#A71728] group-hover:text-black transition-colors">
                <span>Explore Employer Solutions</span>
                <span className="font-mono text-[11px] text-gray-400">01 / ENTERPRISE →</span>
              </div>
            </div>
          </Link>

          {/* Card 2: For Job Seekers */}
          <Link
            href="/for-job-seekers"
            className="group relative rounded-3xl border border-black/10 bg-white hover:border-[#A71728] transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl flex flex-col justify-between"
          >
            {/* Image Header with Gradient Overlay */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-900">
              <Image
                src="/images/job_seeker_candidate.jpg"
                alt="For job seekers & candidates"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-5 left-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#A71728] text-xs font-extrabold tracking-wider uppercase shadow-md">
                  <User className="w-3.5 h-3.5" />
                  <span>FOR JOB SEEKERS & LEADERS</span>
                </div>
              </div>

              {/* Floating Action Circle */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:bg-[#A71728] group-hover:border-[#A71728] transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF8DA1] font-bold block mb-1">
                  CAREER OPPORTUNITIES
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                  Advance Your Career With Authentic Mentorship
                </h3>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-7 sm:p-9 space-y-5 bg-gradient-to-b from-white to-gray-50/80">
              <p className="text-sm text-gray-700 leading-relaxed font-light">
                Access verified career tracks across top Bangladeshi enterprises, Japanese MNCs, and global tech innovators with zero placement fee.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1 border-t border-gray-100 text-xs text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>100% Free For Candidates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>Japanese MNC Roles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>Direct HR Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span>Confidential Profiles</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#A71728] group-hover:text-black transition-colors">
                <span>Explore Candidate Pathway</span>
                <span className="font-mono text-[11px] text-gray-400">02 / CANDIDATE →</span>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}

