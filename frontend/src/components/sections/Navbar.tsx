"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";

interface NavbarProps {
  onOpenModal: (tab: "employer" | "jobseeker") => void;
}

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Platform", href: "/#platform" },
  { label: "Japan Jobs", href: "/japan-jobs" },
  { label: "Services", href: "/services" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/#contact" },
];

function isLinkActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  if (href === "/services") return pathname === "/services";
  if (href === "/japan-jobs") return pathname === "/japan-jobs";
  if (href === "/news") return pathname === "/news" || pathname.startsWith("/news/");
  return false;
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const pathname = usePathname();
  const { employee } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const isGlassSolid = isScrolled || pathname !== "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isGlassSolid
            ? "bg-white/50 backdrop-blur-2xl border-black/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
            : "bg-white/60 backdrop-blur-2xl border-white/50 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
        }`}
      >
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 lg:gap-6 h-20 md:h-[88px]">
            <Link
              href="/"
              className="justify-self-start flex items-center select-none shrink-0 group"
              data-cursor="action"
              aria-label="Kawaii Japan Career & HR Solutions BD — Home"
            >
              <Image
                src="/kawaiihrlogo.webp"
                alt="Kawaii Japan Career & HR Solutions BD"
                width={280}
                height={84}
                className="h-10 sm:h-12 md:h-[50px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </Link>

            <nav
              className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1"
              aria-label="Main navigation"
            >
              {primaryLinks.map((link) => {
                const active = isLinkActive(link.href, pathname);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-2.5 xl:px-3 py-2 text-[12px] xl:text-[14px] font-semibold uppercase tracking-[0.05em] transition-colors duration-200 whitespace-nowrap relative group ${
                      active
                        ? "text-[#A71728]"
                        : "text-[#1a1a1a]/80 hover:text-[#A71728]"
                    }`}
                    data-cursor="action"
                  >
                    {link.label}
                    <span
                      className={`absolute left-2.5 right-2.5 -bottom-0.5 h-[2px] bg-[#A71728] transition-transform duration-300 origin-center ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="justify-self-end flex items-center gap-2 sm:gap-3 shrink-0">
              {employee ? (
                <Link
                  href="/dashboard"
                  className="hidden sm:inline-flex items-center justify-center gap-2 h-11 px-4 xl:px-5 text-[13px] xl:text-[14px] font-semibold uppercase tracking-[0.06em] text-white bg-[#A71728] border border-[#A71728] hover:bg-[#0A0A0A] hover:border-[#0A0A0A] transition-all duration-300 whitespace-nowrap rounded-none"
                  data-cursor="action"
                >
                  Dashboard
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <>
                  <Link
                    href="/register"
                    className="hidden sm:inline-flex items-center justify-center h-11 px-4 xl:px-5 text-[13px] xl:text-[14px] font-semibold uppercase tracking-[0.06em] text-[#0A0A0A] border border-black/25 hover:border-[#A71728] hover:bg-[#A71728] hover:text-white transition-all duration-300 whitespace-nowrap rounded-none"
                    data-cursor="action"
                  >
                    Register
                  </Link>

                  <Link
                    href="/login"
                    className="hidden sm:inline-flex items-center justify-center gap-2 h-11 px-4 xl:px-5 text-[13px] xl:text-[14px] font-semibold uppercase tracking-[0.06em] text-white bg-[#A71728] border border-[#A71728] hover:bg-[#0A0A0A] hover:border-[#0A0A0A] transition-all duration-300 whitespace-nowrap rounded-none"
                    data-cursor="action"
                  >
                    Login
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </>
              )}

              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="lg:hidden inline-flex items-center justify-center w-11 h-11 border border-black/25 text-[#0A0A0A] hover:border-[#A71728] hover:text-[#A71728] transition-colors rounded-none"
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

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-6 sm:px-10 overflow-y-auto">
              <div className="mb-8">
                <Image
                  src="/kawaiihrlogo.webp"
                  alt="Kawaii Japan Career & HR Solutions BD"
                  width={220}
                  height={66}
                  className="h-10 w-auto object-contain"
                />
              </div>

              <nav className="flex flex-col flex-1">
                {primaryLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 + 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex items-center justify-between py-4 border-b border-black/10 text-xl font-semibold tracking-tight transition-colors ${
                        isLinkActive(link.href, pathname)
                          ? "text-[#A71728]"
                          : "text-[#111] hover:text-[#A71728]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-black/25 group-hover:text-[#A71728] group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="grid grid-cols-2 gap-3 mt-8">
                {employee ? (
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="col-span-2 h-14 text-sm uppercase tracking-[0.06em] font-semibold text-white bg-[#A71728] rounded-none hover:bg-[#8e1321] transition-all inline-flex items-center justify-center"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/register"
                      onClick={() => setMobileMenuOpen(false)}
                      className="h-14 text-sm uppercase tracking-[0.06em] font-semibold text-[#111] border border-black/25 rounded-none hover:border-[#A71728] transition-all inline-flex items-center justify-center"
                    >
                      Register
                    </Link>
                    <Link
                      href="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="h-14 text-sm uppercase tracking-[0.06em] font-semibold text-white bg-[#A71728] rounded-none hover:bg-[#8e1321] transition-all inline-flex items-center justify-center"
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
}
