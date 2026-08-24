import React from "react";

interface JapanesePatternProps {
  className?: string;
  opacity?: number;
  type?: "grid" | "dots" | "kanji" | "lines";
}

export function JapanesePattern({
  className = "",
  opacity = 0.05,
  type = "grid",
}: JapanesePatternProps) {
  if (type === "kanji") {
    return (
      <div
        className={`select-none pointer-events-none font-sans font-bold leading-none ${className}`}
        style={{ opacity }}
        aria-hidden="true"
      >
        可愛い
      </div>
    );
  }

  if (type === "lines") {
    return (
      <div className={`pointer-events-none flex space-x-12 ${className}`} style={{ opacity }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-current" />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`pointer-events-none absolute inset-0 bg-[radial-gradient(#A71728_1px,transparent_1px)] [background-size:24px_24px] ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}

export function JapaneseSeal({ text = "可愛い", className = "" }: { text?: string; className?: string }) {
  return (
    <div
      className={`inline-flex items-center justify-center border border-[#A71728] text-[#A71728] px-2 py-0.5 text-[11px] font-bold tracking-widest uppercase rounded-xs select-none ${className}`}
    >
      <span className="mr-1.5 w-1.5 h-1.5 rounded-full bg-[#A71728] inline-block" />
      {text}
    </div>
  );
}
