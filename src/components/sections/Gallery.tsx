"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { galleryImages } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function Gallery() {
  return (
    <section id="gallery" className="relative py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-metal-950 via-metal-900/30 to-metal-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="Work Gallery"
          title="Real Work. Real Repairs. Real Results."
          description="See the quality and attention to detail we bring to every job — from diesel engines to complete trailer repairs."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, i) => (
            <GalleryCard key={image.src} image={image} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({
  image,
  index,
}: {
  image: { src: string; alt: string; label: string };
  index: number;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <ScrollReveal delay={index * 0.08}>
      <TiltCard>
        <div className="relative group overflow-hidden rounded-2xl metal-border aspect-[4/3]">
          <div className="absolute inset-0 bg-metal-800 animate-pulse" />
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-all duration-700 group-hover:scale-110 ${loaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-metal-950/90 via-metal-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand-500/20 text-brand-300 border border-brand-500/30 mb-2">
              {image.label}
            </span>
            <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Professional repair by Axle Motors
            </p>
          </div>

          <motion.div
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-brand-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
              <path d="M11 8v6" />
              <path d="M8 11h6" />
            </svg>
          </motion.div>
        </div>
      </TiltCard>
    </ScrollReveal>
  );
}
