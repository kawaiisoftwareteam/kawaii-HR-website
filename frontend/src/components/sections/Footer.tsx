"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, MapPin, Mail, Phone, Globe, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#000000] text-white overflow-hidden border-t border-white/10 pt-20 pb-12 select-none">
      {/* Background Subtle Watermark */}
      <div className="absolute right-10 bottom-0 text-[160px] md:text-[220px] font-bold text-white/[0.02] pointer-events-none select-none">
        KAWAII
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
        {/* Top Tier: Brand Manifesto & Big Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-white/10">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/kawaiihrlogo-white.webp"
                alt="Kawaii Japan Career & HR Solutions BD"
                width={280}
                height={84}
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>

            <div className="text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
              Career & HR Solutions BD • Sister Concern of Kawaii Group
            </div>

            <p className="text-sm text-white/70 font-light leading-relaxed max-w-lg">
              Connecting organizations with the right people through Japanese-inspired ethics, discipline, efficiency and trust.
            </p>

            <div className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white/90">
              PEOPLE. OPPORTUNITY. <span className="text-[#A71728]">FUTURE.</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#A71728]">
              NAVIGATION
            </div>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-white/70 font-medium">
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white font-bold hover:text-[#A71728] transition-colors flex items-center space-x-1">
                  <span>All Services & Workflows</span>
                  <span className="text-[#A71728]">→</span>
                </Link>
              </li>
              <li>
                <Link href="/#japan-bangladesh" className="hover:text-white transition-colors">
                  Global Careers
                </Link>
              </li>
              <li>
                <Link href="/#employers" className="hover:text-white transition-colors">
                  For Employers
                </Link>
              </li>
              <li>
                <Link href="/#job-seekers" className="hover:text-white transition-colors">
                  For Job Seekers
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-white transition-colors">
                  Working Process
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional Data Column */}
          <div className="lg:col-span-3 space-y-4 text-xs text-white/70">
            <div className="text-xs font-bold uppercase tracking-widest text-[#A71728]">
              REGISTRY
            </div>
            <div className="space-y-2 font-light">
              <p>
                <strong className="text-white font-medium">Head Office:</strong> <br />
                {COMPANY_INFO.address}
              </p>
              <p>
                <strong className="text-white font-medium">Established:</strong> {COMPANY_INFO.establishedYear}
              </p>
              <p>
                <strong className="text-white font-medium">Chairman:</strong> {COMPANY_INFO.chairman}
              </p>
              <p>
                <strong className="text-white font-medium">Bank:</strong> {COMPANY_INFO.bank}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 pt-4">
          <div>
            © 2026 {COMPANY_INFO.name}. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors group cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span className="text-[10px] uppercase font-bold tracking-widest">
              Back To Top
            </span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#A71728] group-hover:bg-[#A71728] transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
