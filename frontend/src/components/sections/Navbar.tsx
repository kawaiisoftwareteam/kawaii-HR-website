"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { RedButton } from "../ui/RedButton";

interface NavbarProps {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Japan × BD", href: "#japan-bangladesh" },
    { label: "Employers", href: "#employers" },
    { label: "Job Seekers", href: "#job-seekers" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex flex-col items-start select-none"
            data-cursor="action"
          >
            <div className="flex items-center space-x-2">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white font-sans uppercase">
                KAWAII <span className="text-[#A71728]">JAPAN</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#A71728] animate-pulse" />
            </div>
            <span className="text-[9px] tracking-[0.22em] text-white/60 uppercase font-medium">
              Career & HR Solutions BD
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs tracking-wider uppercase font-medium text-white/80 hover:text-white transition-colors duration-300 relative py-1 group"
                data-cursor="action"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#A71728] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <button
                onClick={() => onOpenModal("employer")}
                className="text-xs uppercase tracking-wider font-semibold text-white/90 hover:text-white px-3 py-2 border border-white/20 hover:border-[#A71728] transition-all"
                data-cursor="action"
              >
                For Employers
              </button>
              <RedButton
                size="sm"
                variant="primary"
                onClick={() => onOpenModal("jobseeker")}
              >
                Find Jobs
              </RedButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#A71728] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] text-white flex flex-col justify-between p-8 pt-28 overflow-y-auto lg:hidden"
          >
            {/* Background Japanese Watermark */}
            <div className="absolute right-4 bottom-12 text-[120px] font-bold text-white/[0.03] select-none pointer-events-none">
              可愛い
            </div>

            <div className="space-y-6">
              <div className="text-[11px] font-bold tracking-widest text-[#A71728] uppercase">
                Navigation
              </div>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl md:text-3xl font-bold tracking-tight text-white/90 hover:text-[#A71728] transition-colors flex items-center justify-between border-b border-white/10 pb-3"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-5 h-5 text-white/30" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/15 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal("employer");
                  }}
                  className="w-full py-3 text-xs uppercase tracking-wider font-semibold text-white bg-white/10 hover:bg-[#A71728] border border-white/20 transition-all text-center"
                >
                  For Employers
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal("jobseeker");
                  }}
                  className="w-full py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#A71728] hover:bg-black border border-[#A71728] transition-all text-center"
                >
                  For Job Seekers
                </button>
              </div>

              <div className="text-xs text-white/50 text-center tracking-wider">
                Japan × Bangladesh Corporate HR Solutions
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
