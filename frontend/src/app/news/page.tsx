"use client";

import React, { useState } from "react";
import { ArrowRight, Newspaper } from "lucide-react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const articles = [
  {
    id: "1",
    title: "Japan × Bangladesh Career Corridor: What Candidates Need to Know",
    date: "Aug 2026",
    category: "Career Tips",
    excerpt:
      "A practical guide to preparing for roles with Japanese organizations — skills, culture, and documentation.",
  },
  {
    id: "2",
    title: "How Japanese Work Ethics Shape High-Performance Teams",
    date: "Jul 2026",
    category: "HR Insights",
    excerpt:
      "Discipline, precision, and continuous improvement (Kaizen) — and how they translate into modern HR practice.",
  },
  {
    id: "3",
    title: "Permanent vs Contract Staffing: Choosing the Right Model",
    date: "Jun 2026",
    category: "Employers",
    excerpt:
      "When to hire permanently, when contract talent wins, and how contract-to-hire pathways protect both sides.",
  },
];

export default function NewsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"employer" | "jobseeker">("jobseeker");

  return (
    <main className="relative min-h-screen bg-white text-[#111] font-sans selection:bg-[#A71728] selection:text-white">
      <CustomCursor />
      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
      />
      <Navbar
        onOpenModal={(tab) => {
          setModalTab(tab);
          setModalOpen(true);
        }}
      />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-12">
          <div className="space-y-3 text-center">
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#A71728]">
              <Newspaper className="w-4 h-4" />
              Insights
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight">
              News &amp; Articles
            </h1>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Career guidance, employer insights, and Japan–Bangladesh HR updates.
            </p>
          </div>

          <div className="space-y-4">
            {articles.map((article) => (
              <article
                key={article.id}
                className="p-6 sm:p-8 border border-gray-200 hover:border-[#A71728]/40 transition-colors bg-white"
              >
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-[#A71728] mb-3">
                  <span>{article.category}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-gray-500">{article.date}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-2">
                  {article.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-[#A71728]">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
