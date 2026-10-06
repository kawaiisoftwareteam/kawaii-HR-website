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
  CheckCircle2,
  ChevronDown,
  Factory,
  FileText,
  Globe,
  GraduationCap,
  Handshake,
  Network,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  SERVICE_CATEGORIES,
  type ServiceCategory,
} from "@/data/serviceCategories";

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

      {/* Hero Header - Clean, Lightened Shade, Crisp Content */}
      <section className="relative w-full min-h-[62vh] md:min-h-[68vh] flex items-end overflow-hidden">
        <Image
          src={category.heroImage}
          alt={category.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft, lightened overlays so image remains clear and vibrant */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-28 sm:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {category.headerBrand && (
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-semibold tracking-wide text-white/95 mb-3.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#A71728] animate-pulse" />
                {category.headerBrand}
              </p>
            )}

            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white/90 mb-3">
              <span className="w-8 h-0.5 bg-[#A71728]" />
              <span>{category.headerBadge || `${category.number} — ${category.navLabel}`}</span>
            </div>

            <h1 className="text-[clamp(2.2rem,5vw,4.25rem)] font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-md">
              {category.heroHeadline || category.title}
            </h1>

            <p className="mt-4 text-base sm:text-xl text-white/95 max-w-2xl font-normal leading-relaxed drop-shadow-sm">
              {category.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-7">
              <button
                type="button"
                onClick={() => openModal(category.cta.employer ? "employer" : "jobseeker")}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-[#A71728] hover:bg-[#8e1321] transition-all shadow-[0_4px_20px_rgba(167,23,40,0.35)] rounded-none cursor-pointer"
              >
                {category.heroCtaText || category.cta.title}
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="#overview"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wider text-white border border-white/40 bg-black/20 backdrop-blur-sm hover:bg-white hover:text-black transition-all rounded-none"
              >
                Explore Details
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics & Trust Strip (Below Hero) */}
      <section className="bg-[#111111] text-white py-6 border-y border-white/10 shadow-inner">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-x-0 md:divide-x divide-white/10">
            <div className="px-3 sm:px-4 py-1">
              <div className="text-2xl sm:text-3xl font-black text-white">12,000+</div>
              <div className="text-xs text-[#F0A8AE] font-semibold uppercase tracking-wider mt-1">Vetted Talent Pool</div>
            </div>
            <div className="px-3 sm:px-4 py-1 md:pl-6">
              <div className="text-2xl sm:text-3xl font-black text-white">~30 Days</div>
              <div className="text-xs text-[#F0A8AE] font-semibold uppercase tracking-wider mt-1">Executive Search Mandate</div>
            </div>
            <div className="px-3 sm:px-4 py-1 md:pl-6">
              <div className="text-2xl sm:text-3xl font-black text-white">98.4%</div>
              <div className="text-xs text-[#F0A8AE] font-semibold uppercase tracking-wider mt-1">Placement Retention Rate</div>
            </div>
            <div className="px-3 sm:px-4 py-1 md:pl-6">
              <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
              <div className="text-xs text-[#F0A8AE] font-semibold uppercase tracking-wider mt-1">Pre-Screened &amp; Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Overview Section - Detailed Content Placed Elegantly Below */}
      <section id="overview" className="py-16 md:py-24 bg-white border-b border-gray-100 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A71728]">
              <span className="w-2 h-2 rounded-full bg-[#A71728]" />
              Strategic Overview
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight leading-snug">
              Workforce Solutions Designed for Strategic Business Expansion
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-950">
                {category.summary}
              </p>
              <p>
                {category.overview}
              </p>
              {category.body && category.body.map((p, idx) => (
                <p key={idx} className="text-gray-600">
                  {p}
                </p>
              ))}
            </div>

            <div className="pt-3 flex flex-wrap gap-4 items-center">
              <button
                type="button"
                onClick={() => openModal(category.cta.employer ? "employer" : "jobseeker")}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#A71728] hover:bg-[#8e1321] transition-all shadow-sm"
              >
                {category.heroCtaText || "Hire Top Talent Today"}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => openModal("employer")}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#A71728] hover:text-black transition-colors"
              >
                Discuss Requirements
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAFAFA] border-2 border-gray-200 p-7 space-y-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-[#A71728]">
                Core Deliverables
              </p>
              <ul className="space-y-3.5">
                {category.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm sm:text-base text-gray-800 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-[#A71728] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-2 border-[#F0A8AE] bg-[#FFF5F5]/40 p-7 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#A71728]">
                Who This Is For
              </p>
              <ul className="space-y-3">
                {category.whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-800 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A71728] mt-2 shrink-0" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Deep-Dive Sections (H2 & H3) */}
      {category.sections && category.sections.length > 0 && (
        <section id="sections" className="py-16 md:py-24 bg-[#FAFAFA] space-y-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-20">
            {category.sections.map((sec, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={sec.id}
                  id={sec.id}
                  className="bg-white border-2 border-[#F0A8AE] p-6 sm:p-10 md:p-12 shadow-sm rounded-none scroll-mt-28"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    {/* Content Column */}
                    <div className={`space-y-6 ${isEven ? "lg:col-span-7 lg:order-2" : "lg:col-span-7"}`}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF5F5] border border-[#F0A8AE] text-xs font-bold uppercase tracking-wider text-[#A71728]">
                        <Sparkles className="w-3.5 h-3.5 text-[#A71728]" />
                        {sec.badge || `Pillar ${idx + 1}`}
                      </div>

                      {/* H2 */}
                      <h2 className="text-xs sm:text-sm font-black tracking-[0.2em] uppercase text-[#A71728]">
                        {sec.h2}
                      </h2>

                      {/* H3 */}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight">
                        {sec.h3}
                      </h3>

                      {/* Paragraphs */}
                      <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                        {sec.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>

                      {/* Feature Checklist */}
                      {sec.features && sec.features.length > 0 && (
                        <div className="pt-2 space-y-2.5">
                          {sec.features.map((feat) => (
                            <div key={feat} className="flex items-start gap-3 text-sm sm:text-base text-gray-800">
                              <Check className="w-4 h-4 text-[#A71728] shrink-0 mt-1" strokeWidth={3} />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* CTA Button */}
                      <div className="pt-4 flex flex-wrap gap-4 items-center">
                        <button
                          type="button"
                          onClick={() => openModal(sec.ctaAction || "employer")}
                          className="inline-flex items-center gap-2 px-7 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-[#A71728] hover:bg-[#8e1321] transition-all shadow-[0_4px_15px_rgba(167,23,40,0.25)] cursor-pointer"
                        >
                          {sec.ctaText}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Image & Stats Column */}
                    <div className={`space-y-4 ${isEven ? "lg:col-span-5 lg:order-1" : "lg:col-span-5"}`}>
                      <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-gray-100 bg-gray-100 group">
                        <Image
                          src={sec.image}
                          alt={sec.imageAlt || sec.h3}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 border border-white/40">
                          <div className="text-xs font-bold uppercase tracking-wider text-[#A71728]">
                            Kawaii Quality Standard
                          </div>
                          <div className="text-sm font-semibold text-gray-900 mt-0.5">
                            {sec.h2} Discipline
                          </div>
                        </div>
                      </div>

                      {/* Stats row */}
                      {sec.stats && sec.stats.length > 0 && (
                        <div className="grid grid-cols-2 gap-3 pt-1">
                          {sec.stats.map((st) => (
                            <div key={st.label} className="p-4 bg-white border border-gray-200">
                              <div className="text-xl sm:text-2xl font-black text-[#A71728]">{st.value}</div>
                              <div className="text-xs text-gray-600 uppercase tracking-wide mt-1">{st.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Visual Gallery */}
      {category.gallery && category.gallery.length > 0 && (
        <section className="py-6 bg-white border-y border-gray-100">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {category.gallery.map((g) => (
              <div key={g.src} className="relative aspect-[4/3] overflow-hidden bg-gray-100 group">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] font-semibold text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 truncate">
                  {g.alt}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Offerings Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#A71728]">
              Specialized Solutions
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-950">
              Practice Areas &amp; Capabilities
            </h2>
            <p className="text-base text-gray-600">
              Comprehensive talent and workforce services configured to meet your unique commercial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {category.offerings.map((o, i) => {
              const Icon = OFFERING_ICONS[i % OFFERING_ICONS.length];
              return (
                <article
                  key={o.title}
                  className="group relative overflow-hidden rounded-2xl border-2 border-gray-100 bg-white p-8 sm:p-9 shadow-sm hover:border-[#A71728] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-[#FFF5F5] border border-[#F0A8AE] flex items-center justify-center mb-6 group-hover:bg-[#A71728] transition-colors">
                      <Icon
                        className="w-7 h-7 text-[#A71728] group-hover:text-white transition-colors"
                        strokeWidth={1.75}
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-950 group-hover:text-[#A71728] transition-colors leading-snug">
                      {o.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-600 leading-relaxed">
                      {o.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => openModal("employer")}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A71728] group-hover:text-black transition-colors"
                    >
                      Inquire on this solution
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-16 md:py-24 bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-12">
          <div className="text-center space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#A71728]">
              Methodology
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-950">
              How the Process Runs
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              A transparent, structured framework from initial intake to successful placement and follow-up.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {category.process.map((p) => (
              <div
                key={p.step}
                className="bg-white border-2 border-[#F0A8AE] flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#A71728] text-white font-black text-2xl sm:text-3xl flex items-center justify-center px-6 py-4 sm:py-0 shrink-0">
                  {p.step}
                </div>
                <div className="p-6 sm:p-7 flex-1">
                  <h3 className="font-extrabold text-[#A71728] uppercase text-lg sm:text-xl leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mt-2.5 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {category.faqs.length > 0 && (
        <section className="py-16 md:py-24 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-8">
            <div className="text-center space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#A71728]">
                Common Inquiries
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-gray-950">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3 pt-4">
              {category.faqs.map((f, i) => (
                <div key={f.q} className="border-2 border-gray-100 rounded-none bg-white transition-colors">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left text-base sm:text-lg font-bold text-gray-900 cursor-pointer"
                  >
                    <span>{f.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A71728] shrink-0 transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 sm:px-6 pb-6 text-base text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Bottom CTA Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#222222] text-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F0A8AE]">
              <span className="w-2 h-2 rounded-full bg-[#A71728]" />
              Start Sourcing
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white leading-tight">
              {category.cta.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              {category.cta.desc}
            </p>
          </div>
          <button
            type="button"
            onClick={() => openModal(category.cta.employer ? "employer" : "jobseeker")}
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold uppercase tracking-wider bg-[#A71728] hover:bg-[#8e1321] text-white transition-all shadow-[0_8px_25px_rgba(167,23,40,0.4)] shrink-0 cursor-pointer"
          >
            {category.heroCtaText || "Hire Top Talent Today"}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Other Services Navigation */}
      <section className="py-14 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#A71728]">
                Explore More Solutions
              </h2>
              <p className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-gray-950 mt-1">
                Other Practice Areas
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-bold uppercase tracking-wider text-[#A71728] hover:text-black transition-colors inline-flex items-center gap-1.5"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/services/${c.slug}`}
                className="group relative aspect-[4/3] overflow-hidden bg-gray-200 border border-gray-100 hover:border-[#A71728] transition-colors"
              >
                <Image
                  src={c.heroImage}
                  alt={c.navLabel}
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent group-hover:from-black/90 transition-colors" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#F0A8AE]">
                    {c.number}
                  </div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wide truncate">
                    {c.navLabel}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
