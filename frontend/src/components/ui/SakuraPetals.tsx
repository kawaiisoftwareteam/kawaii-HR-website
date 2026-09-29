"use client";

import React, { useEffect, useState, useId } from "react";

interface SakuraItem {
  id: number;
  type: "single" | "blossom" | "double";
  left: number; // percentage (0 - 100)
  top: number; // initial top offset (-10 to -30)
  size: number; // px
  duration: number; // seconds (falling duration)
  delay: number; // seconds
  swayDuration: number; // seconds (horizontal sway)
  swayDistance: number; // px
  rotationDuration: number; // seconds (3D spin)
  opacity: number;
  flip: number; // initial rotate
}

interface SakuraPetalsProps {
  count?: number;
  className?: string;
  speed?: "slow" | "medium" | "fast";
  interactive?: boolean;
}

export function SakuraPetals({
  count = 28,
  className = "",
  speed = "medium",
}: SakuraPetalsProps) {
  const [petals, setPetals] = useState<SakuraItem[]>([]);
  const filterId = useId();

  useEffect(() => {
    const speedMultiplier = speed === "slow" ? 1.4 : speed === "fast" ? 0.7 : 1.0;

    const generated: SakuraItem[] = Array.from({ length: count }, (_, i) => {
      const typeRand = Math.random();
      const type: SakuraItem["type"] =
        typeRand > 0.75 ? "blossom" : typeRand > 0.45 ? "double" : "single";
      const sizeBase = type === "blossom" ? 22 : type === "double" ? 18 : 14;

      return {
        id: i,
        type,
        left: Math.random() * 98,
        top: -(Math.random() * 20 + 5),
        size: sizeBase + (Math.random() * 10 - 4),
        duration: (8 + Math.random() * 8) * speedMultiplier,
        delay: Math.random() * 10,
        swayDuration: 3 + Math.random() * 3,
        swayDistance: 30 + Math.random() * 45,
        rotationDuration: 4 + Math.random() * 6,
        opacity: 0.55 + Math.random() * 0.4,
        flip: Math.random() * 360,
      };
    });

    setPetals(generated);
  }, [count, speed]);

  if (petals.length === 0) return null;

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-10 ${className}`}
      aria-hidden="true"
    >
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <linearGradient id={`sakuraGrad-${filterId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF0F5" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#FFB7C5" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#FF8DA1" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id={`sakuraAccentGrad-${filterId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#FFC0CB" />
            <stop offset="85%" stopColor="#E63956" />
            <stop offset="100%" stopColor="#A71728" />
          </linearGradient>
          <filter id={`sakuraGlow-${filterId}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#A71728" floodOpacity="0.15" />
          </filter>
        </defs>
      </svg>

      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute transform-gpu"
          style={{
            left: `${petal.left}%`,
            top: `${petal.top}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            opacity: petal.opacity,
            animation: `sakuraFall ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              animation: `sakuraSway ${petal.swayDuration}s ease-in-out infinite alternate`,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                animation: `sakuraSpin ${petal.rotationDuration}s linear infinite`,
                transform: `rotate(${petal.flip}deg)`,
              }}
            >
              {petal.type === "blossom" ? (
                /* Full 5-petal Sakura blossom */
                <svg
                  viewBox="0 0 40 40"
                  className="w-full h-full drop-shadow-sm"
                  style={{ filter: `url(#sakuraGlow-${filterId})` }}
                >
                  <g transform="translate(20, 20)">
                    {[0, 72, 144, 216, 288].map((angle) => (
                      <path
                        key={angle}
                        d="M0 0 C-4 -8 -6 -14 0 -18 C6 -14 4 -8 0 0 Z"
                        fill={`url(#sakuraAccentGrad-${filterId})`}
                        transform={`rotate(${angle})`}
                        opacity="0.9"
                      />
                    ))}
                    <circle cx="0" cy="0" r="2.2" fill="#FFEAA7" />
                    <circle cx="0" cy="0" r="1.2" fill="#A71728" />
                  </g>
                </svg>
              ) : petal.type === "double" ? (
                /* Double floating petals */
                <svg viewBox="0 0 32 32" className="w-full h-full drop-shadow-xs">
                  <path
                    d="M12 2 C8 6 6 12 10 18 C14 14 16 8 12 2 Z"
                    fill={`url(#sakuraGrad-${filterId})`}
                    opacity="0.95"
                  />
                  <path
                    d="M18 8 C14 12 12 18 16 24 C20 20 22 14 18 8 Z"
                    fill={`url(#sakuraAccentGrad-${filterId})`}
                    opacity="0.75"
                    transform="rotate(25 18 16)"
                  />
                </svg>
              ) : (
                /* Single sakura petal with delicate notch */
                <svg viewBox="0 0 24 28" className="w-full h-full drop-shadow-xs">
                  <path
                    d="M12 1 C7 5 3 12 6 20 C9 26 12 27 12 27 C12 27 15 26 18 20 C21 12 17 5 12 1 Z"
                    fill={`url(#sakuraGrad-${filterId})`}
                  />
                  {/* Subtle petal vein highlight */}
                  <path
                    d="M12 5 Q12 14 12 22"
                    stroke="#FFD1DC"
                    strokeWidth="0.6"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
