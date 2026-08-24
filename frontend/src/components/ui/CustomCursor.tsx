"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "action" | "employer" | "jobseeker">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on mobile/touch screens
    const checkMobile = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024;
      setIsMobile(isTouch);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const employerEl = target.closest("[data-cursor='employer']");
      const jobseekerEl = target.closest("[data-cursor='jobseeker']");
      const actionEl = target.closest("[data-cursor='action']") || target.closest("button") || target.closest("a");
      const imageEl = target.closest("[data-cursor='image']");

      if (employerEl) {
        setCursorVariant("employer");
        setCursorText("EMPLOYERS");
      } else if (jobseekerEl) {
        setCursorVariant("jobseeker");
        setCursorText("JOB SEEKERS");
      } else if (imageEl) {
        setCursorVariant("hover");
        setCursorText("VIEW");
      } else if (actionEl) {
        setCursorVariant("action");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile || !isVisible) return null;

  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: "#A71728",
      border: "1px solid rgba(255, 255, 255, 0.8)",
      opacity: 0.9,
    },
    action: {
      width: 44,
      height: 44,
      backgroundColor: "rgba(167, 23, 40, 0.25)",
      border: "1.5px solid #A71728",
      opacity: 1,
    },
    hover: {
      width: 64,
      height: 64,
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      border: "1px solid #A71728",
      opacity: 1,
    },
    employer: {
      width: 110,
      height: 110,
      backgroundColor: "#A71728",
      border: "2px solid #FFFFFF",
      opacity: 1,
    },
    jobseeker: {
      width: 110,
      height: 110,
      backgroundColor: "#000000",
      border: "2px solid #A71728",
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full text-center select-none shadow-xl mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {cursorText && (
        <span className="text-[10px] tracking-widest font-bold text-white px-2 uppercase leading-tight font-sans">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
