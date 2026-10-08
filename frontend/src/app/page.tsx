"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { DualAudience } from "@/components/sections/DualAudience";
import { Footer } from "@/components/sections/Footer";

const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection").then((m) => m.AboutSection),
  { ssr: true },
);
const ProductModules = dynamic(
  () =>
    import("@/components/sections/ProductModules").then((m) => m.ProductModules),
  { ssr: true },
);
const IndustriesSection = dynamic(
  () =>
    import("@/components/sections/IndustriesSection").then(
      (m) => m.IndustriesSection,
    ),
  { ssr: true },
);
const ProcessSection = dynamic(
  () =>
    import("@/components/sections/ProcessSection").then((m) => m.ProcessSection),
  { ssr: true },
);
const WhyChooseUs = dynamic(
  () => import("@/components/sections/WhyChooseUs").then((m) => m.WhyChooseUs),
  { ssr: true },
);
const TestimonialsSection = dynamic(
  () =>
    import("@/components/sections/TestimonialsSection").then(
      (m) => m.TestimonialsSection,
    ),
  { ssr: true },
);
const FaqSection = dynamic(
  () => import("@/components/sections/FaqSection").then((m) => m.FaqSection),
  { ssr: true },
);
const ContactSection = dynamic(
  () =>
    import("@/components/sections/ContactSection").then((m) => m.ContactSection),
  { ssr: true },
);

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"employer" | "jobseeker">("employer");
  const [modalIndustry, setModalIndustry] = useState<string>("");

  const handleOpenModal = (tab: "employer" | "jobseeker", industry?: string) => {
    setModalTab(tab);
    if (industry) {
      setModalIndustry(industry);
    }
    setModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-premium-white text-black selection:bg-[#A71728] selection:text-white font-sans overflow-x-hidden">
      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setModalIndustry("");
        }}
        initialTab={modalTab}
        initialIndustry={modalIndustry}
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
