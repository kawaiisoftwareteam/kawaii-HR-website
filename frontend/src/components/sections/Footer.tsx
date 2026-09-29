"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, MapPin, Mail, Phone, ArrowUpRight, ShieldCheck, Globe, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "For Businesses", href: "/for-businesses" },
  { label: "For Job Seekers", href: "/for-job-seekers" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "News & Insights", href: "/news" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Executive Search & Talent", href: "/services/recruitment" },
  { label: "Managed Payroll & Compliance", href: "/services/payroll" },
  { label: "Managed Service Operations", href: "/services/managed-service" },
  { label: "Global PEO & EOR Solutions", href: "/services/peo-eor" },
  { label: "Strategic HR Outsourcing", href: "/services/hr-outsourcing" },
  { label: "Bilateral BPO & RPO Hub", href: "/services/bpo-rpo" },
  { label: "Immigration & Technical Visa", href: "/services/immigration" },
  { label: "Dedicated Remote Staffing", href: "/services/remote-staffing" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#A71728] via-[#8E1321] to-[#3B070D] text-white overflow-hidden select-none">
      {/* Top Wave Curve Transition in System Color */}
      <div className="w-full overflow-hidden leading-none pointer-events-none -mb-[1px] bg-transparent">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-16 md:h-20 fill-[#A71728]"
        >
          <path d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* Ambient background lighting and Japanese grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-black/30 rounded-full blur-[140px]" />
        <div className="absolute inset-0 japanese-grid-pattern-dark opacity-15" />
      </div>

      {/* Main Footer Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-8 md:pt-12 pb-10">
        
        {/* Top Highlight Banner: Sister Concern of Kawaii Group */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-black/25 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white text-[#A71728] flex items-center justify-center shrink-0 shadow-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FFEAA7]">
                  OFFICIAL SISTER CONCERN
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA7] animate-pulse" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white mt-0.5">
                Kawaii Group (Tokyo, Japan) Corporate Backing
              </h4>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1.5 rounded-full bg-black/30 border border-white/20 text-xs font-mono text-white">
              🇯🇵 Tokyo Headquarters
            </span>
            <span className="px-3 py-1.5 rounded-full bg-black/30 border border-white/20 text-xs font-mono text-white">
              🇧🇩 Dhaka Executive Hub
            </span>
            <Link
              href="/about"
              className="px-4 py-1.5 rounded-full bg-[#FFEAA7] hover:bg-white text-[#8E1321] text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors shadow-md"
            >
              <span>Our Heritage</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Brand Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-white/15">
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/kawaiihrlogo-white.webp"
                alt="Kawaii Japan Career & HR"
                width={260}
                height={78}
                className="h-10 sm:h-11 w-auto object-contain brightness-110"
              />
            </Link>
            <p className="text-sm text-white/90 font-light leading-relaxed max-w-md">
              Connecting Bangladesh&apos;s high-caliber talent with visionary enterprises through Japanese recruitment precision, Kaizen structural discipline, and absolute integrity.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-black/30 border border-white/25 text-[#FFEAA7] text-[11px] font-mono font-bold">
                可愛いグループ・公式
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-mono">
                SLA: 24h Response
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FFEAA7] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore</span>
            </div>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-white/85 hover:text-[#FFEAA7] hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FFEAA7] flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>HR Services</span>
            </div>
            <ul className="space-y-2.5">
              {serviceLinks.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-white/85 hover:text-[#FFEAA7] hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FFEAA7] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Head Office</span>
            </div>
            <div className="space-y-3.5 text-xs text-white/90 font-light leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFEAA7] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFEAA7] shrink-0" />
                <span className="text-white font-medium">{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFEAA7] shrink-0" />
                <span className="text-white font-medium">{COMPANY_INFO.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-8">
          <p className="text-xs text-white/75 text-center sm:text-left font-light">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. A proud sister concern of {COMPANY_INFO.group}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-white/85 hover:text-[#FFEAA7] transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span className="text-[10px] uppercase font-bold tracking-[0.22em]">
              Back to top
            </span>
            <span className="w-9 h-9 rounded-full border border-white/30 bg-black/30 flex items-center justify-center shadow-sm group-hover:bg-[#FFEAA7] group-hover:text-[#8E1321] transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>

      {/* Subtle Japanese Kanji Watermark */}
      <div
        className="absolute right-0 bottom-0 text-[140px] md:text-[200px] font-black text-white/[0.04] leading-none pointer-events-none select-none tracking-tighter"
        aria-hidden="true"
      >
        可愛い
      </div>
    </footer>
  );
}
