"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, LogIn } from "lucide-react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function LoginPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"employer" | "jobseeker">("jobseeker");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <div className="max-w-md mx-auto px-5 sm:px-8">
          <div className="text-center space-y-3 mb-10">
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#A71728]">
              <LogIn className="w-4 h-4" />
              Welcome Back
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight">
              Login
            </h1>
            <p className="text-sm text-gray-600">
              Sign in to your Kawaii Japan HR account.
            </p>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-12 px-4 border border-gray-300 focus:border-[#A71728] focus:outline-none text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-12 px-4 border border-gray-300 focus:border-[#A71728] focus:outline-none text-sm"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 mt-2 text-sm font-bold uppercase tracking-wider text-white bg-[#A71728] hover:bg-[#8e1321] transition-colors inline-flex items-center justify-center gap-2"
            >
              Login
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-semibold text-[#A71728] hover:underline">
              Register
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
