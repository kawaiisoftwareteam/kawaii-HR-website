"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, MapPin, Mail, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const exploreLinks = [
  { label: "About Us", href: "/about" },
  { label: "Domestic HR Services", href: "/services" },
  { label: "Recruitment Workflow", href: "/#process" },
  { label: "Why Partner With Us", href: "/#why-us" },
  { label: "News & Articles", href: "/news" },
  { label: "Frequently Asked Questions", href: "/contact#faq" },
  { label: "Contact & Desks", href: "/contact" },
];

const audienceLinks = [
  { label: "For Businesses", href: "/for-businesses" },
  { label: "For Job Seekers", href: "/for-job-seekers" },
  { label: "White Collar Recruitment", href: "/white-collar" },
  { label: "Blue Collar Workforce", href: "/blue-collar" },
  { label: "Enterprise Consultation", href: "/for-businesses#inquiry-form" },
  { label: "Candidate Registration", href: "/for-job-seekers#register-form" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-premium-light text-[#111111] overflow-hidden border-t border-black/5 select-none">
      {/* Soft brand wash + grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 0% 0%, rgba(167,23,40,0.06), transparent 55%),
              radial-gradient(ellipse 50% 40% at 100% 100%, rgba(0,0,0,0.03), transparent 50%)
            `,
          }}
        />
        <div className="absolute inset-0 japanese-grid-pattern opacity-35" />
      </div>

      {/* Top accent rule */}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-[#A71728]/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-10">
        {/* Brand row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-14 border-b border-black/8"
        >
          <div className="space-y-4 max-w-xl">
            <Image
              src="/kawaiihrlogo.webp"
              alt="Kawaii Japan Career & HR"
              width={280}
              height={84}
              className="h-11 sm:h-12 w-auto object-contain"
            />
            <p className="text-sm text-gray-700 font-light leading-relaxed">
              The Right Talent. The Right Role. The Right Fit. Japanese-standard HR precision, built for Bangladesh.
            </p>
            <p className="text-lg sm:text-xl font-extrabold uppercase tracking-tight text-black">
              People. Precision. <span className="text-[#A71728]">Partnership.</span>
            </p>
          </div>

          <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium lg:text-right">
            <div>Sister Concern of {COMPANY_INFO.group}</div>
            <div className="mt-1 text-[#A71728] font-bold tracking-[0.25em]">
              Est. {COMPANY_INFO.establishedYear}
            </div>
            <div className="mt-1 text-[11px] text-gray-400">
              Response SLA: Within 24 Business Hours
            </div>
          </div>
        </motion.div>

        {/* Link + contact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-14 border-b border-black/8">
          <div className="lg:col-span-3 space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#A71728]">
              Explore
            </div>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-[#A71728] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#A71728]">
              Audiences
            </div>
            <ul className="space-y-2.5">
              {audienceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-[#A71728] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#A71728]">
              Head Office
            </div>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A71728] shrink-0 mt-0.5" />
                <span className="font-light leading-relaxed">{COMPANY_INFO.address}</span>
              </div>
              {!COMPANY_INFO.email.includes("[") && (
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span className="font-light">{COMPANY_INFO.email}</span>
                </div>
              )}
              {!COMPANY_INFO.phone.includes("[") && (
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#A71728] shrink-0" />
                  <span className="font-light">{COMPANY_INFO.phone}</span>
                </div>
              )}
              <div className="pt-1 text-xs text-gray-500 font-light leading-relaxed">
                Chairman: {COMPANY_INFO.chairman}
                <span className="mx-2 text-black/20">·</span>
                Banking Partner: {COMPANY_INFO.bank}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-8">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-gray-600 hover:text-black transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span className="text-[10px] uppercase font-bold tracking-[0.22em]">
              Back to top
            </span>
            <span className="w-9 h-9 rounded-full border border-black/12 bg-white flex items-center justify-center shadow-sm group-hover:border-[#A71728] group-hover:bg-[#A71728] group-hover:text-white transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>

      {/* Soft watermark */}
      <div
        className="absolute right-0 bottom-0 text-[120px] md:text-[180px] font-extrabold text-black/[0.03] leading-none pointer-events-none select-none tracking-tighter"
        aria-hidden="true"
      >
        KAWAII
      </div>
    </footer>
  );
}
