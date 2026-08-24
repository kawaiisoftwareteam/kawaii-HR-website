"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { RedButton } from "../ui/RedButton";

interface NavbarProps {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}

const primaryLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Employers", href: "#employers" },
  { label: "Job Seekers", href: "#job-seekers" },
  { label: "Contact", href: "#contact" },
];

const moreLinks = [
  { label: "Japan × BD", href: "#japan-bangladesh" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
];

const allLinks = [...primaryLinks, ...moreLinks];

export function Navbar({ onOpenModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border-b border-white/15 shadow-lg shadow-black/20"
            : "bg-gradient-to-b from-black/35 via-black/10 to-transparent"
        }`}
      >
        {/* 3 equal visual zones: Logo | Nav | CTAs — no floating box, no empty middle gap */}
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 h-20 md:h-[88px]">
            {/* LEFT — Logo */}
            <a
              href="#"
              className="justify-self-start flex items-center select-none min-w-0 group"
              data-cursor="action"
              aria-label="Kawaii Japan Career & HR Solutions BD"
            >
              <Image
                src="/kawaiihrlogo-white.webp"
                alt="Kawaii Japan Career & HR Solutions BD"
                width={280}
                height={84}
                className="h-10 sm:h-12 md:h-[50px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </a>

            {/* CENTER — Nav links (no glass box) */}
            <nav
              className="hidden xl:flex items-center justify-center gap-1"
              aria-label="Primary"
            >
              {primaryLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 text-[15px] lg:text-base font-semibold uppercase tracking-[0.06em] text-white/85 hover:text-white transition-colors duration-200 whitespace-nowrap relative group"
                  data-cursor="action"
                >
                  {link.label}
                  <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] bg-[#A71728] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </a>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setMoreOpen(true)}
                onMouseLeave={() => setMoreOpen(false)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[15px] lg:text-base font-semibold uppercase tracking-[0.06em] text-white/85 hover:text-white transition-colors duration-200"
                  aria-expanded={moreOpen}
                  aria-haspopup="true"
                >
                  More
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      moreOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {moreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                    >
                      <div className="min-w-[220px] bg-[#0A0A0A] border border-white/15 shadow-2xl py-1">
                        {moreLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className="block px-5 py-3 text-[15px] font-semibold uppercase tracking-[0.05em] text-white/75 hover:text-white hover:bg-white/5 transition-colors"
                            data-cursor="action"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* RIGHT — Square CTAs */}
            <div className="justify-self-end flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenModal("employer")}
                className="hidden md:inline-flex items-center justify-center h-12 px-5 text-[15px] font-semibold uppercase tracking-[0.06em] text-white border border-white/40 hover:border-[#A71728] hover:bg-[#A71728] transition-all duration-300 whitespace-nowrap rounded-none"
                data-cursor="action"
              >
                For Employers
              </button>

              <button
                type="button"
                onClick={() => onOpenModal("jobseeker")}
                className="hidden sm:inline-flex items-center justify-center gap-2 h-12 px-5 text-[15px] font-semibold uppercase tracking-[0.06em] text-white bg-[#A71728] border border-[#A71728] hover:bg-white hover:text-[#A71728] transition-all duration-300 whitespace-nowrap rounded-none"
                data-cursor="action"
              >
                Find Jobs
                <ArrowRight className="w-4 h-4 -rotate-45" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="xl:hidden inline-flex items-center justify-center w-12 h-12 border border-white/30 text-white hover:border-[#A71728] hover:text-[#A71728] transition-colors rounded-none"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] xl:hidden"
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-6 sm:px-10 overflow-y-auto">
              <div className="mb-6 flex items-center justify-between">
                <Image
                  src="/kawaiihrlogo-white.webp"
                  alt="Kawaii Japan Career & HR Solutions BD"
                  width={220}
                  height={66}
                  className="h-10 w-auto object-contain"
                />
              </div>

              <nav className="flex flex-col flex-1">
                {allLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 + 0.05 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between py-4 border-b border-white/10 text-2xl font-semibold tracking-tight text-white/90 hover:text-[#A71728] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-5 h-5 text-white/25 group-hover:text-[#A71728] group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </nav>

              <div className="grid grid-cols-2 gap-3 mt-8">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal("employer");
                  }}
                  className="h-14 text-base uppercase tracking-[0.06em] font-semibold text-white border border-white/30 rounded-none hover:border-[#A71728] transition-all"
                >
                  For Employers
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal("jobseeker");
                  }}
                  className="h-14 text-base uppercase tracking-[0.06em] font-semibold text-white bg-[#A71728] rounded-none hover:bg-[#8e1321] transition-all"
                >
                  Find Jobs
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
