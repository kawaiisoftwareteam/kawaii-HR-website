"use client";

import React, { useState } from "react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { JapanBridge } from "@/components/sections/JapanBridge";
import { DualAudience } from "@/components/sections/DualAudience";
import { EmployerFocus } from "@/components/sections/EmployerFocus";
import { JobSeekerFocus } from "@/components/sections/JobSeekerFocus";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { JapaneseSystem } from "@/components/sections/JapaneseSystem";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"employer" | "jobseeker">("employer");

  const handleOpenModal = (tab: "employer" | "jobseeker") => {
    setModalTab(tab);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="relative min-h-screen bg-white text-black selection:bg-[#A71728] selection:text-white font-sans overflow-x-hidden">
      {/* Desktop Custom Interactive Magnetic Cursor */}
      <CustomCursor />

      {/* Interactive Application Modal for Employers & Job Seekers */}
      <ApplicationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialTab={modalTab}
      />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* 01: Hero Section (100vh Full Viewport with Video Background) */}
      <HeroSection onOpenModal={handleOpenModal} />

      {/* 02: Introduction & Key Company Metrics */}
      <StatsSection />

      {/* 03: About & Company Profile */}
      <AboutSection onOpenModal={handleOpenModal} />

      {/* 04: Japan × Bangladesh Bilateral Corridor */}
      <JapanBridge />

      {/* 05: Dynamic 50/50 Hover-Expandable Split Row */}
      <DualAudience onOpenModal={handleOpenModal} />

      {/* 06: Dedicated Enterprise Employer Capabilities */}
      <EmployerFocus onOpenModal={handleOpenModal} />

      {/* 08: Dedicated Candidate Career Guidance */}
      <JobSeekerFocus onOpenModal={handleOpenModal} />

      {/* 09: Domain Expertise Comparison */}
      <ExpertiseSection onOpenModal={handleOpenModal} />

      {/* 10: Horizontal Industry Showcase */}
      <IndustriesSection onOpenModal={handleOpenModal} />

      {/* 11: 6-Stage Working Process Timelines */}
      <ProcessSection onOpenModal={handleOpenModal} />

      {/* 12: Why Choose Us (Quality Over Quantity) */}
      <WhyChooseUs onOpenModal={handleOpenModal} />

      {/* 13: Japanese Technology-Driven System & Principles */}
      <JapaneseSystem />

      {/* 14: Cinematic Philosophy Quote Banner */}
      <PhilosophySection onOpenModal={handleOpenModal} />

      {/* 15: Asymmetric Photo Gallery */}
      <GallerySection />

      {/* 16: Testimonials & Trust */}
      <TestimonialsSection />

      {/* 17: Contact & Corporate Registry Info */}
      <ContactSection onOpenModal={handleOpenModal} />

      {/* 18: Luxury Black Footer */}
      <Footer />
    </main>
  );
}
