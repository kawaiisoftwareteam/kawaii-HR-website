"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { JapanJobPlacement } from "@/components/sections/JapanJobPlacement";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const blockVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function JapanJobsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"employer" | "jobseeker">("jobseeker");

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

      <motion.div
        className="pt-20 md:pt-[88px]"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={blockVariants}>
          <JapanJobPlacement onOpenModal={handleOpenModal} />
        </motion.div>

        <motion.div variants={blockVariants}>
          <Footer />
        </motion.div>
      </motion.div>
    </main>
  );
}
