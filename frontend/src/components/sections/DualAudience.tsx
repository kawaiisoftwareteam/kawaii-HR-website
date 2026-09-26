"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, User } from "lucide-react";

export function DualAudience() {
  return (
    <section id="audiences" className="relative w-full bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Link
            href="/for-businesses"
            className="group border border-black/8 bg-[#F8F7F6] hover:border-[#A71728]/40 transition-colors overflow-hidden"
          >
            <div className="relative h-52 sm:h-64">
              <Image
                src="/images/japanese_office_team.jpg"
                alt="For employers"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="p-7 sm:p-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-[#A71728] uppercase">
                <Building2 className="w-3.5 h-3.5" />
                For businesses
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111]">
                Hire the right team
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                Find professionals who match your requirements, culture, and long-term goals.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#A71728] pt-1">
                Explore employer solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>

          <Link
            href="/for-job-seekers"
            className="group border border-black/8 bg-[#F8F7F6] hover:border-[#A71728]/40 transition-colors overflow-hidden"
          >
            <div className="relative h-52 sm:h-64">
              <Image
                src="/images/job_seeker_candidate.jpg"
                alt="For job seekers"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="p-7 sm:p-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-[#A71728] uppercase">
                <User className="w-3.5 h-3.5" />
                For job seekers
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111]">
                Build your career
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                Discover roles that match your skills, interests, and long-term ambitions.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#A71728] pt-1">
                Explore candidate path
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
