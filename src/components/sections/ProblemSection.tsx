"use client";

import { painPoints } from "@/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const iconMap: Record<string, string> = {
  AlertTriangle: "⚠",
  BatteryWarning: "🔋",
  BrakeDisc: "🛑",
  Truck: "🚛",
  Clock: "🕐",
  Wrench: "🔧",
};

function PainCard({
  point,
  index,
  scrollYProgress,
}: {
  point: { icon: string; text: string };
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${-20 - index * 5}%`]);

  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-light rounded-xl p-5 md:p-6 border border-metal-700/30 hover:border-brand-500/30 transition-colors duration-300 group"
    >
      <span className="text-2xl mb-3 block">
        {iconMap[point.icon] ?? "🔧"}
      </span>
      <p className="text-metal-300 text-sm md:text-base leading-relaxed group-hover:text-metal-200 transition-colors">
        {point.text}
      </p>
    </motion.div>
  );
}

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-metal-950 via-metal-900/50 to-metal-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="inline-block text-xs md:text-sm font-mono uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/5 text-brand-400">
            The Problem
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] uppercase tracking-tight text-white">
            Breakdowns Don&apos;t Wait.{" "}
            <span className="text-gradient">Neither Do We.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {painPoints.map((point, i) => (
            <PainCard
              key={point.text}
              point={point}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
