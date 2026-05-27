"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {tag && (
        <span
          className={cn(
            "inline-block text-xs md:text-sm font-mono uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full border",
            light
              ? "text-metal-300 border-metal-700"
              : "text-brand-400 border-brand-500/30 bg-brand-500/5"
          )}
        >
          {tag}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] uppercase tracking-tight",
          light ? "text-white" : "text-metal-100"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 md:mt-6 text-base md:text-lg max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-metal-400" : "text-metal-400"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
