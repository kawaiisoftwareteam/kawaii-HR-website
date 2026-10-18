"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Locale = "en" | "bn";

const STORAGE_KEY = "kawaii-locale";

const navCopy = {
  en: {
    home: "Home",
    about: "About us",
    businesses: "For Company",
    jobSeekers: "For Job Seekers",
    services: "Services",
    contact: "Contact",
    register: "Register",
    login: "Login",
    dashboard: "Dashboard",
    viewAll: "View all services",
    allServices: "All services",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    categories: {
      recruitment: { label: "Recruitment Services", tagline: "Sourcing, search, workforce." },
      payroll: { label: "Payroll & Workforce", tagline: "Payroll, attendance, claims." },
      "managed-service": { label: "Managed Service", tagline: "One desk. Full HR stack." },
      "peo-eor": { label: "PEO & EOR", tagline: "Hire in BD without a local entity." },
      "hr-outsourcing": { label: "HR Outsourcing", tagline: "Strategic HR and RPO." },
      "bpo-rpo": { label: "BPO & RPO", tagline: "Back office and tech pods." },
      immigration: { label: "Immigration & Visa", tagline: "Work permit and employment visa." },
      "remote-staffing": { label: "Remote Staffing", tagline: "IT talent on your stack." },
    },
  },
  bn: {
    home: "হোম",
    about: "আমাদের কথা",
    businesses: "কোম্পানির জন্য",
    jobSeekers: "চাকরিপ্রার্থী",
    services: "সেবাসমূহ",
    contact: "যোগাযোগ",
    register: "নিবন্ধন",
    login: "লগইন",
    dashboard: "ড্যাশবোর্ড",
    viewAll: "সব সেবা দেখুন",
    allServices: "সব সেবা",
    openMenu: "মেনু খুলুন",
    closeMenu: "মেনু বন্ধ করুন",
    language: "ভাষা",
    categories: {
      recruitment: { label: "নিয়োগ সেবা", tagline: "সোর্সিং, সার্চ, ওয়ার্কফোর্স।" },
      payroll: { label: "পে-রোল ও ওয়ার্কফোর্স", tagline: "পে-রোল, হাজিরা, ক্লেইম।" },
      "managed-service": { label: "ম্যানেজড সার্ভিস", tagline: "এক ডেস্ক। পুরো এইচআর স্ট্যাক।" },
      "peo-eor": { label: "PEO ও EOR", tagline: "লোকাল এন্টিটি ছাড়াই নিয়োগ।" },
      "hr-outsourcing": { label: "এইচআর আউটসোর্সিং", tagline: "স্ট্র্যাটেজিক এইচআর ও RPO।" },
      "bpo-rpo": { label: "BPO ও RPO", tagline: "ব্যাক অফিস ও টেক পড।" },
      immigration: { label: "ইমিগ্রেশন ও ভিসা", tagline: "ওয়ার্ক পারমিট ও এমপ্লয়মেন্ট ভিসা।" },
      "remote-staffing": { label: "রিমোট স্টাফিং", tagline: "আপনার স্ট্যাকে আইটি ট্যালেন্ট।" },
    },
  },
} as const;

export type NavCopy = (typeof navCopy)[Locale];

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: NavCopy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "bn") setLocaleState(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = locale;
    document.documentElement.classList.toggle("locale-bn", locale === "bn");
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, ready]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: navCopy[locale] }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
