"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, UserPlus } from "lucide-react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function RegisterPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"employer" | "jobseeker">("jobseeker");

  const openModal = (tab: "employer" | "jobseeker") => {
    setModalTab(tab);
    setModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-white text-[#111] font-sans selection:bg-[#A71728] selection:text-white">
      <CustomCursor />
      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
      />
      <Navbar onOpenModal={openModal} />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-xl mx-auto px-5 sm:px-8">
          <div className="text-center space-y-3 mb-10">
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#A71728]">
              <UserPlus className="w-4 h-4" />
              Create Account
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight">
              Register
            </h1>
            <p className="text-sm text-gray-600">
              Choose how you want to join Kawaii Japan Career &amp; HR Solutions BD.
            </p>
          </div>

          <div className="space-y-4">
            <button
              type="button"
              onClick={() => openModal("jobseeker")}
              className="w-full p-6 border-2 border-[#F0A8AE] hover:border-[#A71728] text-left transition-colors group"
            >
              <div className="text-lg font-bold uppercase text-[#A71728] mb-1">
                Job Seeker
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Register your CV free — career matching and consultation at no cost.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-900 group-hover:text-[#A71728]">
                Register as Job Seeker
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              type="button"
              onClick={() => openModal("employer")}
              className="w-full p-6 border-2 border-gray-200 hover:border-[#A71728] text-left transition-colors group"
            >
              <div className="text-lg font-bold uppercase text-gray-950 mb-1">
                Employer
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Request staffing, recruitment, or a tailored sourcing proposal.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-900 group-hover:text-[#A71728]">
                Register as Employer
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-[#A71728] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
