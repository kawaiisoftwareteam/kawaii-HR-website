"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface RedButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "white" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: boolean;
  type?: "button" | "submit" | "reset";
}

export function RedButton({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  icon = true,
  type = "button",
}: RedButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const baseClasses =
    "group relative inline-flex items-center justify-center font-medium tracking-wider uppercase transition-all duration-500 overflow-hidden cursor-pointer select-none rounded-none";

  const variantClasses = {
    primary:
      "bg-[#A71728] text-white hover:bg-black border border-[#A71728] hover:border-black shadow-lg hover:shadow-red-950/20",
    outline:
      "bg-transparent text-white border border-white/30 hover:border-[#A71728] hover:text-white",
    white:
      "bg-white text-black hover:bg-[#A71728] hover:text-white border border-white hover:border-[#A71728]",
    dark:
      "bg-[#0A0A0A] text-white hover:bg-[#A71728] border border-white/10 hover:border-[#A71728]",
    ghost:
      "bg-transparent text-black hover:text-[#A71728] border-b border-black/20 hover:border-[#A71728] px-0 py-1",
  };

  const content = (
    <>
      {/* Background slide animation on hover */}
      <span className="absolute inset-0 w-full h-full bg-[#A71728] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10" />

      <span className="relative z-10 flex items-center space-x-2 tracking-widest font-semibold">
        <span>{children}</span>
        {icon && (
          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        data-cursor="action"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      data-cursor="action"
    >
      {content}
    </button>
  );
}
