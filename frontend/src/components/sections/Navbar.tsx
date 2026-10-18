"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";
import { useLanguage, type Locale } from "@/lib/language";
import { SERVICE_CATEGORIES } from "@/data/serviceCategories";

interface NavbarProps {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}

function isLinkActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.language}
      className="relative grid w-[108px] grid-cols-2 rounded-full bg-[#F1F2F5] p-[3px]"
    >
      <motion.span
        aria-hidden
        className="absolute top-[3px] bottom-[3px] w-[calc(50%-3px)] rounded-full bg-[#A71728] shadow-[0_4px_12px_rgba(167,23,40,0.35)]"
        animate={{ left: locale === "en" ? 3 : "calc(50%)" }}
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
      />
      {(["en", "bn"] as Locale[]).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={`relative z-10 h-8 rounded-full text-[13px] font-semibold tracking-wide transition-colors ${
              active ? "text-white" : "text-[#5B616C] hover:text-[#111]"
            }`}
            aria-pressed={active}
          >
            {code === "en" ? "EN" : "BN"}
          </button>
        );
      })}
    </div>
  );
}

export function Navbar({ onOpenModal: _onOpenModal }: NavbarProps) {
  const pathname = usePathname();
  const { employee } = useAuth();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesActive = pathname === "/services" || pathname.startsWith("/services/");

  const primaryLinks = [
    { label: t.home, href: "/" },
    { label: t.about, href: "/about" },
    { label: t.businesses, href: "/for-businesses" },
    { label: t.jobSeekers, href: "/for-job-seekers" },
    { label: t.services, href: "/services" },
    { label: t.contact, href: "/contact" },
  ];

  useEffect(() => {
    setMounted(true);
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

  const navbar = (
    <>
      <header
        data-nav
        className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-4 pointer-events-none"
      >
        <div
          className="pointer-events-auto mx-auto max-w-[1320px] relative flex items-center justify-between gap-4 h-[72px] pl-4 pr-2.5 sm:pl-5 sm:pr-3 rounded-[22px] border border-black/8 bg-white"
        >
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 shrink-0"
            aria-label="Kawaii Japan Career & HR — Home"
          >
            <Image
              src="/kawaiihrlogo.webp"
              alt="Kawaii Japan Career & HR"
              width={320}
              height={96}
              className="h-11 w-auto object-contain sm:h-12"
              priority
            />
            <span aria-hidden className="h-7 w-px bg-black/10" />
            <img
              src="/flag/flag-bd.gif"
              alt=""
              width={48}
              height={32}
              className="h-[26px] w-[39px] sm:h-[30px] sm:w-[45px] object-cover object-center"
            />
          </Link>

          <nav
            className="hidden xl:flex items-center gap-0.5"
            aria-label="Main navigation"
          >
            {primaryLinks.map((link) => {
              if (link.href === "/services") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href="/services"
                      className={`relative inline-flex items-center gap-1 px-3.5 py-2 rounded-full text-[15px] font-semibold tracking-tight whitespace-nowrap transition-colors ${
                        servicesActive
                          ? "text-[#A71728]"
                          : "text-[#2a2a2a] hover:text-[#A71728]"
                      }`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {servicesActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-[#A71728]/8"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative">{link.label}</span>
                      <ChevronDown
                        className={`relative w-3.5 h-3.5 transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.16 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[min(640px,78vw)]"
                        >
                          <div className="rounded-2xl bg-white/98 backdrop-blur-xl border border-black/8 shadow-[0_18px_50px_rgba(0,0,0,0.12)] p-3 grid grid-cols-2 gap-1">
                            {SERVICE_CATEGORIES.map((c) => {
                              const copy =
                                t.categories[c.slug as keyof typeof t.categories];
                              return (
                                <Link
                                  key={c.slug}
                                  href={`/services/${c.slug}`}
                                  className={`rounded-xl px-3.5 py-3 text-left hover:bg-[#FFF5F5] transition-colors ${
                                    pathname === `/services/${c.slug}`
                                      ? "bg-[#FFF5F5]"
                                      : ""
                                  }`}
                                >
                                  <div className="text-[15px] font-semibold text-[#111]">
                                    {copy?.label ?? c.navLabel}
                                  </div>
                                  <div className="text-[13px] text-gray-500 line-clamp-1 mt-0.5">
                                    {copy?.tagline ?? c.tagline}
                                  </div>
                                </Link>
                              );
                            })}
                            <Link
                              href="/services"
                              className="col-span-2 mt-1 rounded-xl px-3.5 py-2.5 text-[14px] font-semibold text-[#A71728] hover:bg-[#FFF5F5] inline-flex items-center gap-1.5"
                            >
                              {t.viewAll}
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
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-full text-[15px] font-semibold tracking-tight whitespace-nowrap transition-colors ${
                    active ? "text-[#A71728]" : "text-[#2a2a2a] hover:text-[#A71728]"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-[#A71728]/8"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <LanguageToggle />

            {employee ? (
              <Link
                href="/dashboard"
                className="hidden sm:inline-flex items-center gap-1.5 h-10 px-5 rounded-full text-[14px] font-semibold text-white bg-[#A71728] hover:bg-[#8e1321] transition-colors"
              >
                {t.dashboard}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <>
                <Link
                  href="/register"
                  className="hidden md:inline-flex items-center h-10 px-4 rounded-full text-[14px] font-semibold text-[#333] hover:text-[#A71728] hover:bg-black/[0.04] transition-colors"
                >
                  {t.register}
                </Link>
                <Link
                  href="/login"
                  className="hidden sm:inline-flex items-center h-10 px-5 rounded-full text-[14px] font-semibold text-white bg-[#A71728] hover:bg-[#8e1321] transition-colors shadow-[0_6px_16px_rgba(167,23,40,0.28)]"
                >
                  {t.login}
                </Link>
              </>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-[#111] hover:text-[#A71728] hover:bg-black/[0.04] transition-colors"
              aria-label={mobileMenuOpen ? t.closeMenu : t.openMenu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
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
            className="fixed inset-0 z-40 bg-[#FAF8F6] xl:hidden"
          >
            <div className="flex flex-col h-full pt-[104px] pb-8 px-6 overflow-y-auto">
              <nav className="flex flex-col">
                {primaryLinks.map((link) => (
                  <div key={link.href}>
                    {link.href === "/services" ? (
                      <div className="border-b border-black/8">
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          className={`w-full flex items-center justify-between py-3.5 text-[22px] font-semibold tracking-tight ${
                            servicesActive ? "text-[#A71728]" : "text-[#111]"
                          }`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {mobileServicesOpen && (
                          <div className="pb-3 pl-1 space-y-0.5">
                            <Link
                              href="/services"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 text-sm font-medium text-[#A71728]"
                            >
                              {t.allServices}
                            </Link>
                            {SERVICE_CATEGORIES.map((c) => {
                              const copy =
                                t.categories[c.slug as keyof typeof t.categories];
                              return (
                                <Link
                                  key={c.slug}
                                  href={`/services/${c.slug}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-2 text-sm text-gray-600 hover:text-[#A71728]"
                                >
                                  {copy?.label ?? c.navLabel}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between py-3.5 border-b border-black/8 text-[22px] font-semibold tracking-tight ${
                          isLinkActive(link.href, pathname)
                            ? "text-[#A71728]"
                            : "text-[#111]"
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
                    className="col-span-2 h-12 rounded-full text-sm font-semibold text-white bg-[#A71728] inline-flex items-center justify-center"
                  >
                    {t.dashboard}
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/register"
                      onClick={() => setMobileMenuOpen(false)}
                      className="h-12 rounded-full text-sm font-medium text-[#111] border border-black/15 inline-flex items-center justify-center"
                    >
                      {t.register}
                    </Link>
                    <Link
                      href="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="h-12 rounded-full text-sm font-semibold text-white bg-[#A71728] inline-flex items-center justify-center"
                    >
                      {t.login}
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
