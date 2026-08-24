"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_PHOTOS, GalleryPhoto } from "@/data/companyData";
import { ArrowUpRight } from "lucide-react";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Japan", "Bangladesh", "Corporate", "People", "Interviews", "Careers"];

  const filteredPhotos =
    activeCategory === "All"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <section className="relative py-28 md:py-36 bg-[#F8F9FA] text-[#111111] overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header with Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-gray-200">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.25em] text-[#A71728] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#A71728]" />
              <span>14 — VISUAL CHRONICLE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-[0.95] text-black">
              PHOTO GALLERY
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light tracking-wide">
              Documenting the people, infrastructure, and cross-border partnerships shaping our ecosystem.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-6 md:pt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase transition-all border ${
                  activeCategory === cat
                    ? "bg-[#A71728] text-white border-[#A71728]"
                    : "bg-white text-gray-600 border-gray-300 hover:border-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                data-cursor="image"
                className={`group relative overflow-hidden bg-black border border-gray-300 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${
                  photo.aspect === "portrait" ? "sm:row-span-2 aspect-[3/4]" : "aspect-[16/10]"
                }`}
              >
                {/* Image */}
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 bg-[#A71728]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/80 px-2.5 py-1 text-[9px] font-bold tracking-widest text-[#A71728] uppercase border border-white/20">
                  {photo.category}
                </div>

                {/* Title & Caption Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <div className="h-[2px] w-6 bg-[#A71728] group-hover:w-16 transition-all duration-500 mb-2" />
                  <h4 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white group-hover:translate-x-1 transition-transform">
                    {photo.title}
                  </h4>
                  <p className="text-[11px] text-white/70 font-light line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
