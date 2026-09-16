"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [label, setLabel] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const x = useSpring(mouseX, { damping: 32, stiffness: 450, mass: 0.35 });
  const y = useSpring(mouseY, { damping: 32, stiffness: 450, mass: 0.35 });

  useEffect(() => {
    const checkMobile = () => {
      const isTouch =
        window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024;
      setIsMobile(isTouch);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) {
        setLabel("");
        return;
      }

      if (target.closest("[data-cursor='employer']")) {
        setLabel("EMPLOYERS");
      } else if (target.closest("[data-cursor='jobseeker']")) {
        setLabel("JOB SEEKERS");
      } else if (target.closest("[data-cursor='image']")) {
        setLabel("VIEW");
      } else {
        setLabel("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (isMobile) return;
    document.documentElement.classList.add("custom-cursor-active");
    return () => document.documentElement.classList.remove("custom-cursor-active");
  }, [isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none select-none"
      style={{ x, y }}
    >
      {/* Fixed-size dot — no scale / width animation on click or hover */}
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <div
          className="rounded-full bg-[#A71728]"
          style={{
            width: 12,
            height: 12,
            border: "1px solid rgba(255,255,255,0.85)",
          }}
        />
        {label ? (
          <div className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#A71728] text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1">
            {label}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}
