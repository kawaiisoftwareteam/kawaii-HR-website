"use client";

import React, { useEffect, useRef, useState } from "react";

type LazyBackgroundVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  /** Start loading slightly before entering viewport (px). */
  rootMargin?: string;
};

/**
 * Background video that does not block first paint.
 * Loads only when near viewport (or immediately if already visible).
 */
export function LazyBackgroundVideo({
  src,
  poster,
  className = "w-full h-full object-cover object-center",
  rootMargin = "200px 0px",
}: LazyBackgroundVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Prefer idle time so hero text/CSS win the network.
    const arm = () => setShouldLoad(true);

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        if ("requestIdleCallback" in window) {
          idleId = window.requestIdleCallback(arm, { timeout: 1200 });
        } else {
          timeoutId = setTimeout(arm, 200);
        }
      },
      { rootMargin, threshold: 0.01 },
    );

    io.observe(el);

    return () => {
      io.disconnect();
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [rootMargin]);

  useEffect(() => {
    if (!shouldLoad) return;
    const el = ref.current;
    if (!el) return;
    el.load();
    const play = () => {
      void el.play().catch(() => {});
    };
    if (el.readyState >= 2) play();
    else el.addEventListener("loadeddata", play, { once: true });
  }, [shouldLoad, src]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      className={className}
    >
      {shouldLoad ? <source src={src} type="video/mp4" /> : null}
    </video>
  );
}
