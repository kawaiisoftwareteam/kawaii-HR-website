"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";
import { SERVICE_CATEGORIES } from "@/data/serviceCategories";

interface NavbarProps {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "For Businesses", href: "/for-businesses" },
  { label: "For Job Seekers", href: "/for-job-seekers" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

function isLinkActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Navbar({ onOpenModal: _onOpenModal }: NavbarProps) {
  const pathname = usePathname();
  const { employee } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesActive = pathname === "/services" || pathname.startsWith("/services/");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const linkClass = (active: boolean) =>
    `relative px-2.5 py-2 text-[14px] font-medium tracking-tight whitespace-nowrap transition-colors ${
      active ? "text-[#A71728]" : "text-[#2a2a2a] hover:text-[#A71728]"
    }`;

  const navbar = (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b transition-shadow duration-300 ${
          isScrolled ? "border-black/8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]" : "border-black/6"
        }`}
      >
        <div className="h-[2px] w-full bg-[#A71728]" />
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
          <div className="flex items-center justify-between gap-6 h-16">
            <Link
              href="/"
              className="flex items-center shrink-0"
              aria-label="Kawaii Japan Career & HR — Home"
            >
              <Image
                src="/kawaiihrlogo.webp"
                alt="Kawaii Japan Career & HR"
                width={220}
                height={66}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {primaryLinks.map((link) => {
                if (link.href === "/services") {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <Link
                        href="/services"
                        className={`${linkClass(servicesActive)} inline-flex items-center gap-1`}
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                      >
                        {link.label}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                        {servicesActive && (
                          <span className="absolute left-2.5 right-2.5 -bottom-0.5 h-[2px] bg-[#A71728]" />
                        )}
                      </Link>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[min(560px,70vw)]"
                          >
                            <div className="bg-white border border-black/8 shadow-[0_12px_40px_rgba(0,0,0,0.1)] p-2 grid grid-cols-2 gap-0.5">
                              {SERVICE_CATEGORIES.map((c) => (
                                <Link
                                  key={c.slug}
                                  href={`/services/${c.slug}`}
                                  className={`px-3 py-2.5 text-left hover:bg-[#FFF5F5] transition-colors ${
                                    pathname === `/services/${c.slug}` ? "bg-[#FFF5F5]" : ""
                                  }`}
                                >
                                  <div className="text-[12px] font-semibold text-[#111]">
                                    {c.navLabel}
                                  </div>
                                  <div className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                                    {c.tagline}
                                  </div>
                                </Link>
                              ))}
                              <Link
                                href="/services"
                                className="col-span-2 mt-1 px-3 py-2 text-[12px] font-semibold text-[#A71728] hover:bg-[#FFF5F5] inline-flex items-center gap-1.5"
                              >
                                View all services
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                const active = isLinkActive(link.href, pathname);
                return (
                  <Link key={link.label} href={link.href} className={linkClass(active)}>
                    {link.label}
                    {active && (
                      <span className="absolute left-2.5 right-2.5 -bottom-0.5 h-[2px] bg-[#A71728]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              {employee ? (
                <Link
                  href="/dashboard"
                  className="hidden sm:inline-flex items-center gap-1.5 h-9 px-4 text-[13px] font-semibold text-white bg-[#A71728] hover:bg-[#8e1321] transition-colors"
                >
                  Dashboard
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <>
                  <Link
                    href="/register"
                    className="hidden sm:inline-flex items-center h-9 px-3 text-[13px] font-medium text-[#333] hover:text-[#A71728] transition-colors"
                  >
                    Register
                  </Link>
                  <Link
                    href="/login"
                    className="hidden sm:inline-flex items-center h-9 px-4 text-[13px] font-semibold text-white bg-[#A71728] hover:bg-[#8e1321] transition-colors"
                  >
                    Login
                  </Link>
                </>
              )}

              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-[#111] hover:text-[#A71728] transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex flex-col h-full pt-20 pb-8 px-6 overflow-y-auto">
              <nav className="flex flex-col">
                {primaryLinks.map((link) => (
                  <div key={link.label}>
                    {link.href === "/services" ? (
                      <div className="border-b border-black/8">
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          className={`w-full flex items-center justify-between py-3.5 text-[17px] font-medium ${
                            servicesActive ? "text-[#A71728]" : "text-[#111]"
                          }`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                        </button>
                        {mobileServicesOpen && (
                          <div className="pb-3 pl-1 space-y-0.5">
                            <Link
                              href="/services"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 text-sm font-medium text-[#A71728]"
                            >
                              All services
                            </Link>
                            {SERVICE_CATEGORIES.map((c) => (
                              <Link
                                key={c.slug}
                                href={`/services/${c.slug}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-2 text-sm text-gray-600 hover:text-[#A71728]"
                              >
                                {c.navLabel}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between py-3.5 border-b border-black/8 text-[17px] font-medium ${
                          isLinkActive(link.href, pathname) ? "text-[#A71728]" : "text-[#111]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="grid grid-cols-2 gap-3 mt-8">
                {employee ? (
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="col-span-2 h-12 text-sm font-semibold text-white bg-[#A71728] inline-flex items-center justify-center"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/register"
                      onClick={() => setMobileMenuOpen(false)}
                      className="h-12 text-sm font-medium text-[#111] border border-black/15 inline-flex items-center justify-center"
                    >
                      Register
                    </Link>
                    <Link
                      href="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="h-12 text-sm font-semibold text-white bg-[#A71728] inline-flex items-center justify-center"
                    >
                      Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  if (mounted) return createPortal(navbar, document.body);
  return navbar;
}
