"use client";

import React, { useState } from "react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { JapanBridge } from "@/components/sections/JapanBridge";
import { ProductModules } from "@/components/sections/ProductModules";
import { EmployerFocus } from "@/components/sections/EmployerFocus";
import { JobSeekerFocus } from "@/components/sections/JobSeekerFocus";
import { SkilledWorkforce } from "@/components/sections/SkilledWorkforce";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PlatformCapabilities } from "@/components/sections/PlatformCapabilities";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { JapaneseSystem } from "@/components/sections/JapaneseSystem";
import { SuccessMetrics } from "@/components/sections/SuccessMetrics";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
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
    <main className="relative min-h-screen bg-premium-white text-black selection:bg-[#A71728] selection:text-white font-sans overflow-x-hidden">
      <CustomCursor />

      <ApplicationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialTab={modalTab}
      />

      <Navbar onOpenModal={handleOpenModal} />

      {/* 01: Hero */}
      <HeroSection onOpenModal={handleOpenModal} />

      {/* 02: Product Overview + Core Objectives + Metrics */}
      <StatsSection />

      {/* 03: About & Company Profile */}
      <AboutSection onOpenModal={handleOpenModal} />

      {/* 04: Bangladesh to global placement */}
      <JapanBridge />

      {/* 05: Four Product Modules */}
      <ProductModules onOpenModal={handleOpenModal} />

      {/* 06: Employers */}
      <EmployerFocus onOpenModal={handleOpenModal} />

      {/* 07: Professional Candidates */}
      <JobSeekerFocus onOpenModal={handleOpenModal} />

      {/* 08: Skilled Workforce (third audience) */}
      <SkilledWorkforce onOpenModal={handleOpenModal} />

      {/* 09: Domain Expertise */}
      <ExpertiseSection onOpenModal={handleOpenModal} />

      {/* 10: Industries */}
      <IndustriesSection onOpenModal={handleOpenModal} />

      {/* 11: Recruitment Workflow */}
      <ProcessSection onOpenModal={handleOpenModal} />

      {/* 12: Core Business Requirements + Quality Standards */}
      <PlatformCapabilities />

      {/* 13: Why Choose Us */}
      <WhyChooseUs onOpenModal={handleOpenModal} />

      {/* 14: Japanese Principles */}
      <JapaneseSystem />

      {/* 15: Success Metrics / KPIs */}
      <SuccessMetrics onOpenModal={handleOpenModal} />

      {/* 16: Philosophy */}
      <PhilosophySection onOpenModal={handleOpenModal} />

      {/* 17: Gallery */}
      <GallerySection />

      {/* 18: Testimonials */}
      <TestimonialsSection />

      {/* 19: FAQ */}
      <FaqSection />

      {/* 20: Contact */}
      <ContactSection onOpenModal={handleOpenModal} />

      <Footer />
    </main>
  );
}
