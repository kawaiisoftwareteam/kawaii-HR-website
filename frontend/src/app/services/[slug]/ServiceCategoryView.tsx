"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  Check,
  ChevronDown,
  Factory,
  FileText,
  Globe,
  GraduationCap,
  Handshake,
  Network,
  Search,
  Shield,
  Users,
  Wallet,
} from "lucide-react";

const OFFERING_ICONS = [
  Handshake,
  Shield,
  FileText,
  Globe,
  Users,
  Briefcase,
  Search,
  GraduationCap,
  Building2,
  Factory,
  Network,
  Wallet,
];
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  SERVICE_CATEGORIES,
  type ServiceCategory,
} from "@/data/serviceCategories";

export function ServiceCategoryView({ category }: { category: ServiceCategory }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"employer" | "jobseeker">("employer");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const others = SERVICE_CATEGORIES.filter((c) => c.slug !== category.slug);

  const openModal = (tab: "employer" | "jobseeker") => {
    setModalTab(tab);
    setModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-white text-[#111111] font-sans selection:bg-[#A71728] selection:text-white overflow-x-hidden">
      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
      />
      <Navbar onOpenModal={openModal} />

      <section className="relative w-full min-h-[72vh] flex items-end overflow-hidden">
        <Image
          src={category.heroImage}
          alt={category.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-white/90 mb-4">
              <span className="w-8 h-0.5 bg-[#A71728]" />
              {category.number} — {category.navLabel}
            </p>
            <h1 className="text-[clamp(2.2rem,5.5vw,4.75rem)] font-bold tracking-tight text-white leading-[1.02]">
              {category.title}
            </h1>
            <p className="mt-5 text-lg sm:text-2xl text-white/90 max-w-3xl font-light leading-relaxed">
              {category.tagline}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <button
                type="button"
                onClick={() => openModal(category.cta.employer ? "employer" : "jobseeker")}
                className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#A71728] hover:bg-[#8e1321] transition-all"
              >
                {category.cta.title}
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white border border-white/40 hover:bg-white hover:text-black transition-all"
              >
                All services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#A71728]">
              Overview
            </p>
            <p className="text-xl sm:text-2xl text-gray-900 font-medium leading-relaxed">
              {category.summary}
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {category.overview}
            </p>
            {category.body.map((p) => (
              <p key={p.slice(0, 48)} className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div className="lg:col-span-5 space-y-6">
            <ul className="space-y-4 bg-[#FAFAFA] border border-gray-100 p-7">
              {category.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-base text-gray-800 leading-relaxed">
                  <Check className="w-5 h-5 text-[#A71728] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="border-2 border-[#F0A8AE] p-7 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#A71728]">
                Who this is for
              </p>
              <ul className="space-y-3">
                {category.whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-base text-gray-800 leading-relaxed">
                    <Check className="w-5 h-5 text-[#A71728] shrink-0 mt-0.5" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-2">
          {category.gallery.map((g) => (
            <div key={g.src} className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <Image src={g.src} alt={g.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#A71728] mb-2">
              What we run
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              Offerings
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {category.offerings.map((o, i) => {
              const Icon = OFFERING_ICONS[i % OFFERING_ICONS.length];
              return (
                <article
                  key={o.title}
                  className="group relative overflow-hidden rounded-[28px] border border-[#A71728] bg-white p-8 sm:p-9 shadow-[0_10px_30px_rgba(167,23,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A71728] hover:shadow-[0_18px_40px_rgba(167,23,40,0.22)]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#A71728]/10 flex items-center justify-center mb-6 group-hover:bg-white/15 transition-colors">
                    <Icon
                      className="w-7 h-7 text-[#A71728] group-hover:text-white transition-colors"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="text-xl sm:text-[1.65rem] font-bold text-[#111] group-hover:text-white transition-colors leading-snug">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-base sm:text-lg text-gray-600 group-hover:text-white/85 transition-colors leading-relaxed">
                    {o.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-center">
            How it runs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {category.process.map((p) => (
              <div key={p.step} className="bg-white border-2 border-[#F0A8AE] flex">
                <div className="bg-[#A71728] text-white font-black text-2xl flex items-center justify-center px-5 shrink-0">
                  {p.step}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#A71728] uppercase text-lg">{p.title}</h3>
                  <p className="text-base text-gray-600 mt-2 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {category.faqs.length > 0 && (
        <section className="py-16 md:py-20 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-6">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight">FAQ</h2>
            <div className="space-y-3">
              {category.faqs.map((f, i) => (
                <div key={f.q} className="border border-gray-200">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left text-lg font-semibold"
                  >
                    {f.q}
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <p className="px-5 pb-5 text-base text-gray-600 leading-relaxed">{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-premium-light text-[#111] border-t border-black/8">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase">{category.cta.title}</h2>
            <p className="text-base text-gray-600 leading-relaxed">{category.cta.desc}</p>
          </div>
          <button
            type="button"
            onClick={() => openModal(category.cta.employer ? "employer" : "jobseeker")}
            className="inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-wider bg-[#A71728] hover:bg-[#8e1321] transition-all shrink-0"
          >
            Inquire
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#A71728]">
            Other services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/services/${c.slug}`}
                className="group relative aspect-[4/3] overflow-hidden bg-gray-200"
              >
                <Image
                  src={c.heroImage}
                  alt={c.navLabel}
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-colors" />
                <span className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold uppercase tracking-wide">
                  {c.navLabel}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
