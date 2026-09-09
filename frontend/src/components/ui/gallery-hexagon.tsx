"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { GALLERY_PHOTOS } from "@/data/companyData";

interface HexPhoto {
  src: string;
  alt: string;
  title: string;
  category: string;
  caption: string;
}

const PHOTOS: HexPhoto[] = GALLERY_PHOTOS.slice(0, 11).map((p) => ({
  src: p.src,
  alt: p.title,
  title: p.title,
  category: p.category,
  caption: p.caption,
}));

const CLIP =
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const ROWS: number[][] = [
  [0, 1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
];

const cellVariants: Variants = {
  hidden: { opacity: 0, scale: 0.82, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.055,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function GalleryHexagon() {
  const headingId = useId();
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const lastTrigger = useRef<number | null>(null);

  const open = useCallback((index: number) => {
    lastTrigger.current = index;
    setActive(index);
  }, []);

  const close = useCallback(() => {
    setActive(null);
    const idx = lastTrigger.current;
    if (idx != null) triggerRefs.current[idx]?.focus();
  }, []);

  const step = useCallback((dir: 1 | -1) => {
    setActive((prev) => {
      if (prev == null) return prev;
      return (prev + dir + PHOTOS.length) % PHOTOS.length;
    });
  }, []);

  useEffect(() => {
    if (active == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close, step]);

  let flatIndex = -1;

  return (
    <section
      aria-labelledby={headingId}
      className="relative w-full overflow-hidden bg-premium-light border-b border-black/5 px-5 py-24 sm:px-8 lg:py-32"
    >
      <style>{`
        @keyframes ghx-drift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(0, -22px, 0) scale(1.08); }
        }
        @keyframes ghx-drift-b {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(18px, 16px, 0) scale(1.12); }
        }
        .ghx-blob { animation: ghx-drift 16s ease-in-out infinite; }
        .ghx-blob-b { animation: ghx-drift-b 21s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ghx-blob, .ghx-blob-b { animation: none !important; }
        }
      `}</style>

      {/* Brand ambient — no purple */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="ghx-blob absolute -left-24 top-8 h-80 w-80 rounded-full bg-[#A71728]/10 blur-3xl" />
        <div className="ghx-blob-b absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-black/[0.04] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 border border-[#A71728]/25 bg-[#A71728]/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#A71728]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A71728]" />
            14 — Visual Chronicle
          </span>
          <h2
            id={headingId}
            className="mt-6 text-balance text-4xl font-extrabold uppercase tracking-tight text-black sm:text-5xl md:text-6xl"
          >
            Photo Gallery
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-gray-600 sm:text-lg font-light">
            Documenting the people, infrastructure, and cross-border partnerships
            shaping our ecosystem. Hover a cell, then open full-frame.
          </p>
        </header>

        {/* Honeycomb */}
        <div className="flex flex-col items-center [--hx-gap:0.55rem] [--hx-w:clamp(8rem,30vw,14rem)] [--hx-h:calc(var(--hx-w)*1.1547)]">
          {ROWS.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex justify-center gap-[var(--hx-gap)]"
              style={{
                marginTop: rowIdx === 0 ? 0 : "calc(var(--hx-h) * -0.245)",
                marginLeft:
                  row.length < 4
                    ? "calc((var(--hx-w) + var(--hx-gap)) * 0.5)"
                    : undefined,
              }}
            >
              {row.map((photoIdx) => {
                flatIndex += 1;
                const i = flatIndex;
                const photo = PHOTOS[photoIdx];
                return (
                  <motion.div
                    key={photoIdx}
                    custom={i}
                    variants={cellVariants}
                    initial={reduce ? false : "hidden"}
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    className="group relative"
                    style={{
                      width: "var(--hx-w)",
                      height: "var(--hx-h)",
                    }}
                  >
                    <button
                      ref={(el) => {
                        triggerRefs.current[photoIdx] = el;
                      }}
                      type="button"
                      onClick={() => open(photoIdx)}
                      aria-label={`Open ${photo.title} — ${photo.category}`}
                      data-cursor="image"
                      className="relative block h-full w-full origin-center cursor-pointer transition-[transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] outline-none will-change-transform hover:z-20 hover:scale-[1.14] focus-visible:z-20 focus-visible:scale-[1.14]"
                      style={{ clipPath: CLIP, WebkitClipPath: CLIP }}
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-white"
                        style={{ clipPath: CLIP, WebkitClipPath: CLIP }}
                      />
                      <span
                        className="absolute inset-[3px] overflow-hidden"
                        style={{ clipPath: CLIP, WebkitClipPath: CLIP }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          draggable={false}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95"
                        />
                        <span className="absolute inset-x-0 bottom-0 flex flex-col items-center px-3 pb-[18%] text-center">
                          <span className="translate-y-2 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#F0A8AE] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                            {photo.category}
                          </span>
                          <span className="mt-1 line-clamp-2 translate-y-2 text-[0.8rem] font-semibold leading-tight text-white opacity-0 transition-all delay-[60ms] duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                            {photo.title}
                          </span>
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                        style={{ clipPath: CLIP, WebkitClipPath: CLIP }}
                      >
                        <span
                          className="absolute inset-0 ring-2 ring-inset ring-[#A71728]/90"
                          style={{ clipPath: CLIP, WebkitClipPath: CLIP }}
                        />
                      </span>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-gray-500 tracking-wide">
          {PHOTOS.length} frames · Japan × Bangladesh · arrow keys navigate the
          lightbox
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active != null && (
          <motion.div
            key="ghx-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${PHOTOS[active].title}, image ${active + 1} of ${PHOTOS.length}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
            onClick={close}
          >
            <motion.figure
              initial={
                reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 16 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 }
              }
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-full w-full max-w-3xl flex-col overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl"
            >
              <div className="relative flex items-center justify-center bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PHOTOS[active].src}
                  alt={PHOTOS[active].alt}
                  loading="lazy"
                  draggable={false}
                  className="max-h-[65vh] w-full object-contain"
                />
              </div>
              <figcaption className="flex items-start justify-between gap-4 px-6 py-5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A71728]">
                    {PHOTOS[active].category}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold uppercase tracking-tight text-white">
                    {PHOTOS[active].title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/55">
                    {PHOTOS[active].caption}
                  </p>
                </div>
                <span className="shrink-0 border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tabular-nums text-white/70">
                  {active + 1} / {PHOTOS.length}
                </span>
              </figcaption>

              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white outline-none backdrop-blur transition hover:bg-[#A71728] focus-visible:ring-2 focus-visible:ring-[#A71728]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous image"
                className="absolute left-3 top-[calc(32.5vh-1.25rem)] grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white outline-none backdrop-blur transition hover:bg-[#A71728] focus-visible:ring-2 focus-visible:ring-[#A71728]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    d="M15 6l-6 6 6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next image"
                className="absolute right-3 top-[calc(32.5vh-1.25rem)] grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white outline-none backdrop-blur transition hover:bg-[#A71728] focus-visible:ring-2 focus-visible:ring-[#A71728]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    d="M9 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
