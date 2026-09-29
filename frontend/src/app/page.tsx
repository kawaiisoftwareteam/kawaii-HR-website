"use client";

import React, { useState } from "react";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { DualAudience } from "@/components/sections/DualAudience";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProductModules } from "@/components/sections/ProductModules";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
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

  return (
    <main className="relative min-h-screen bg-premium-white text-black selection:bg-[#A71728] selection:text-white font-sans overflow-x-hidden">
      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
      />

      <Navbar onOpenModal={handleOpenModal} />

      {/* 1. Hook */}
      <HeroSection onOpenModal={handleOpenModal} />

      {/* 2. Proof */}
      <StatsSection />

      {/* 3. Pick a path → /for-businesses | /for-job-seekers */}
      <DualAudience />

      {/* 3.5. About Us Profile & Headquarters */}
      <AboutSection onOpenModal={handleOpenModal} />

      {/* 4. What we offer → /services */}
      <ProductModules onOpenModal={handleOpenModal} />

      {/* 5. Where we hire */}
      <IndustriesSection onOpenModal={handleOpenModal} />

      {/* 6. How it works */}
      <ProcessSection onOpenModal={handleOpenModal} />

      {/* 7. Why us */}
      <WhyChooseUs onOpenModal={handleOpenModal} />

      {/* 8. Social proof */}
      <TestimonialsSection />

      {/* 9. Questions */}
      <FaqSection />

      {/* 10. Act */}
      <ContactSection onOpenModal={handleOpenModal} />

      <Footer />
    </main>
  );
}
