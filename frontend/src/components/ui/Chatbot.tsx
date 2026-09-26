"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, RotateCcw, ArrowUpRight, ChevronRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

type Role = "employer" | "candidate" | null;

type ChatMessage = {
  id: string;
  from: "bot" | "user";
  text: string;
};

type QuickQuestion = {
  id: string;
  label: string;
  answer: string;
  cta?: { label: string; href: string };
};

const EMPLOYER_QUESTIONS: QuickQuestion[] = [
  {
    id: "e1",
    label: "How fast can you source candidates?",
    answer:
      "Timelines depend on the role, skills, and urgency. For clearly defined requirements, we start targeted sourcing right after the initial briefing—often within days for common profiles.",
    cta: { label: "Request hiring support", href: "/contact" },
  },
  {
    id: "e2",
    label: "Do you handle bulk / project hiring?",
    answer:
      "Yes. We support bulk and project-based recruitment for engineering, manufacturing, logistics, construction, and operations—after we confirm headcount, skill profile, and deployment timeline.",
    cta: { label: "Talk to corporate team", href: "/for-businesses" },
  },
  {
    id: "e3",
    label: "Do you offer executive search?",
    answer:
      "Yes. Our Executive Search covers senior managers, functional heads, and high-impact specialists—with confidential sourcing and fit-focused assessment.",
    cta: { label: "Explore services", href: "/services" },
  },
  {
    id: "e4",
    label: "Can you help with urgent hiring?",
    answer:
      "Yes. Share your target start date, headcount, titles, and must-have qualifications so our corporate team can prioritize and propose a sourcing plan.",
    cta: { label: "Send urgent request", href: "/contact" },
  },
];

const CANDIDATE_QUESTIONS: QuickQuestion[] = [
  {
    id: "c1",
    label: "Do I pay fees for Bangladesh placement?",
    answer:
      "Any fees must be clearly communicated in advance. Review the terms for each opportunity, and contact Candidate Support if something is unclear before you proceed.",
    cta: { label: "Contact careers team", href: "/contact" },
  },
  {
    id: "c2",
    label: "Can I submit my CV with no open role?",
    answer:
      "Yes. Submit your profile through our candidate flow so recruiters can match you when a relevant role opens. Keep your details current for better matching.",
    cta: { label: "Apply as job seeker", href: "/for-job-seekers" },
  },
  {
    id: "c3",
    label: "How do I check my application status?",
    answer:
      "Contact our Candidate Support & Placement Helpdesk with your application details. They can confirm where your application stands in the process.",
    cta: { label: "Get support", href: "/contact" },
  },
  {
    id: "c4",
    label: "Do you recruit for Japan jobs?",
    answer:
      "Yes. We connect qualified professionals with Japan-related career opportunities through structured screening and placement support.",
    cta: { label: "See Japan opportunities", href: "/japan-jobs" },
  },
];

const WELCOME =
  "Hello — I'm the Kawaii Japan HR assistant. Are you hiring talent, or looking for a role?";

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function ChatBubbleIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path
        d="M5 6.5c0-1.4 1.1-2.5 2.5-2.5h13c1.4 0 2.5 1.1 2.5 2.5v9c0 1.4-1.1 2.5-2.5 2.5H12.2L7.8 22.2c-.55.4-1.3-.05-1.3-.72V18H7.5C6.1 18 5 16.9 5 15.5v-9z"
        fill="white"
      />
      <path
        d="M10 12.2c1.2 1.3 2.6 1.9 4 1.9s2.8-.6 4-1.9"
        stroke="#2db84c"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [promoVisible, setPromoVisible] = useState(true);
  const [role, setRole] = useState<Role>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", from: "bot", text: WELCOME },
  ]);
  const [typing, setTyping] = useState(false);
  const [lastCta, setLastCta] = useState<QuickQuestion["cta"]>();
  const bottomRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const questions = role === "employer" ? EMPLOYER_QUESTIONS : role === "candidate" ? CANDIDATE_QUESTIONS : [];
  const email = role === "employer" ? COMPANY_INFO.email : COMPANY_INFO.candidateEmail;
  const showPromo = !open && promoVisible;

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const pushBot = (text: string) => {
    setTyping(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setMessages((prev) => [...prev, { id: uid(), from: "bot", text }]);
      setTyping(false);
    }, 450);
  };

  const selectRole = (next: Exclude<Role, null>) => {
    if (role) return;
    const label = next === "employer" ? "I'm hiring / an employer" : "I'm looking for a job";
    setRole(next);
    setLastCta(undefined);
    setMessages((prev) => [...prev, { id: uid(), from: "user", text: label }]);
    pushBot(
      next === "employer"
        ? "Great. Pick a question below, or reach our corporate desk anytime."
        : "Welcome. Choose a question below, or visit our careers team for personal help."
    );
  };

  const ask = (q: QuickQuestion) => {
    setMessages((prev) => [...prev, { id: uid(), from: "user", text: q.label }]);
    setLastCta(q.cta);
    pushBot(q.answer);
  };

  const reset = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setTyping(false);
    setRole(null);
    setLastCta(undefined);
    setMessages([{ id: "welcome", from: "bot", text: WELCOME }]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-3 font-sans">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, clipPath: "inset(8% 0% 0% 0%)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-[min(580px,74vh)] w-[min(100vw-2.5rem,400px)] flex-col overflow-hidden border border-black/10 bg-[#FAFBFC] shadow-[0_28px_90px_-28px_rgba(0,0,0,0.5)]"
            role="dialog"
            aria-label="Kawaii Japan HR chatbot"
          >
            <div className="h-1 w-full shrink-0 bg-[#A71728]" />

            <div className="flex shrink-0 items-start justify-between gap-3 border-b border-black/8 bg-white px-5 py-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[#A71728]" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A71728]">
                    Desk 01
                  </p>
                </div>
                <h2 className="mt-1.5 text-xl font-extrabold uppercase tracking-tight text-black">
                  Ask Kawaii
                </h2>
                <p className="mt-0.5 text-[11px] font-light text-gray-500">
                  Guided answers · {COMPANY_INFO.sla}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-0.5">
                <button
                  type="button"
                  onClick={reset}
                  className="p-2 text-gray-400 transition hover:bg-black/[0.04] hover:text-black"
                  aria-label="Restart chat"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="p-2 text-gray-400 transition hover:bg-black/[0.04] hover:text-black"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
              {messages.map((m) =>
                m.from === "user" ? (
                  <div key={m.id} className="flex justify-end">
                    <div className="max-w-[85%] bg-[#A71728] px-3.5 py-2.5 text-sm font-medium leading-relaxed text-white">
                      {m.text}
                    </div>
                  </div>
                ) : (
                  <div key={m.id} className="border-l-2 border-[#A71728] pl-3.5">
                    <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#A71728]/80">
                      Kawaii HR
                    </p>
                    <p className="text-sm font-light leading-relaxed text-[#1a1a1a]">{m.text}</p>
                  </div>
                )
              )}

              {typing && (
                <div className="border-l-2 border-black/15 pl-3.5">
                  <div className="flex gap-1 py-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1 w-1 bg-[#A71728]"
                        animate={{ opacity: [0.25, 1, 0.25] }}
                        transition={{ duration: 0.85, repeat: Infinity, delay: i * 0.14 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="shrink-0 border-t border-black/8 bg-white">
              {!role ? (
                <div className="grid grid-cols-2 divide-x divide-black/8">
                  <button
                    type="button"
                    onClick={() => selectRole("employer")}
                    className="group flex flex-col items-start gap-1 px-4 py-4 text-left transition hover:bg-[#A71728]/[0.04]"
                  >
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A71728]">
                      01
                    </span>
                    <span className="text-sm font-semibold text-black group-hover:text-[#A71728]">
                      I&apos;m hiring
                    </span>
                    <span className="text-[11px] font-light text-gray-500">Employer desk</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => selectRole("candidate")}
                    className="group flex flex-col items-start gap-1 px-4 py-4 text-left transition hover:bg-[#A71728]/[0.04]"
                  >
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A71728]">
                      02
                    </span>
                    <span className="text-sm font-semibold text-black group-hover:text-[#A71728]">
                      Job seeker
                    </span>
                    <span className="text-[11px] font-light text-gray-500">Candidate desk</span>
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between border-b border-black/6 px-4 py-2.5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-gray-400">
                      Select a question
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="text-[10px] font-medium uppercase tracking-wider text-gray-400 hover:text-[#A71728]"
                    >
                      Change path
                    </button>
                  </div>
                  <ul>
                    {questions.map((q, i) => (
                      <li key={q.id} className="border-b border-black/6 last:border-b-0">
                        <button
                          type="button"
                          onClick={() => ask(q)}
                          disabled={typing}
                          className="group flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-[#F5F6F8] disabled:opacity-50"
                        >
                          <span className="w-5 shrink-0 text-[10px] font-bold tabular-nums text-[#A71728]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="flex-1 text-[13px] font-medium leading-snug text-[#222] group-hover:text-black">
                            {q.label}
                          </span>
                          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-[#A71728]" />
                        </button>
                      </li>
                    ))}
                  </ul>
                  {(lastCta || role) && (
                    <div className="flex items-center justify-between gap-3 border-t border-black/8 bg-[#0A0A0A] px-4 py-3">
                      {lastCta ? (
                        <Link
                          href={lastCta.href}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:text-[#A71728]"
                        >
                          {lastCta.label}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      ) : (
                        <span className="text-[11px] text-white/40">Need a human?</span>
                      )}
                      <a
                        href={`mailto:${email}`}
                        className="truncate text-[11px] text-white/45 hover:text-white"
                      >
                        {email}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <div
        className="relative"
        style={{ width: showPromo ? 156 : 68, height: showPromo ? 138 : 68 }}
      >
        <AnimatePresence>
          {showPromo && (
            <motion.div
              key="promo"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-none absolute inset-0"
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setPromoVisible(false);
                }}
                className="pointer-events-auto absolute right-0 top-0 z-30 flex h-6 w-6 items-center justify-center rounded-full text-white/75 drop-shadow transition hover:bg-black/20 hover:text-white"
                aria-label="Dismiss greeting"
              >
                <X className="h-3.5 w-3.5" strokeWidth={2.5} />
              </button>

              {/* Concentric arc around button center (122, 100) */}
              <svg
                width="156"
                height="138"
                viewBox="0 0 156 138"
                className="absolute inset-0 overflow-visible"
                aria-hidden
              >
                <defs>
                  {/* Arc concentric with button center (122, 104), r=50 */}
                  <path id="kawaii-chat-arc" d="M 76 84 A 50 50 0 0 1 154 66" fill="none" />
                </defs>
                <text
                  fontSize="14.5"
                  fontWeight="800"
                  fontFamily="var(--font-jost), Jost, system-ui, sans-serif"
                  letterSpacing="0.4"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="4.5"
                  strokeLinejoin="round"
                  paintOrder="stroke"
                >
                  <textPath href="#kawaii-chat-arc" xlinkHref="#kawaii-chat-arc" startOffset="2%">
                    We Are Here!
                  </textPath>
                </text>
                <text
                  fontSize="14.5"
                  fontWeight="800"
                  fontFamily="var(--font-jost), Jost, system-ui, sans-serif"
                  letterSpacing="0.4"
                  fill="#5ec8e8"
                >
                  <textPath href="#kawaii-chat-arc" xlinkHref="#kawaii-chat-arc" startOffset="2%">
                    We Are Here!
                  </textPath>
                </text>
              </svg>

              <motion.span
                className="absolute bottom-[22px] left-[6px] z-20 text-[28px] leading-none drop-shadow"
                animate={{ rotate: [0, 14, -8, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                style={{ transformOrigin: "75% 75%" }}
                aria-hidden
              >
                👋
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-0 right-0 z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#2db84c] shadow-[0_8px_28px_rgba(45,184,76,0.5)] ring-[3px] ring-white transition hover:bg-[#26a342]"
          aria-label={open ? "Close chat" : "Open chat"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="h-7 w-7 text-white" strokeWidth={2.5} />
              </motion.span>
            ) : (
              <motion.span
                key="bubble"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <ChatBubbleIcon />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
