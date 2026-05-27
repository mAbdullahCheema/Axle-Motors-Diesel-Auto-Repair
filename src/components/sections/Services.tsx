"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";
import { serviceCategories, type ServiceItem } from "@/data";
import { motion } from "framer-motion";
import {
  Search, Wrench, Gauge, ClipboardCheck, ShieldCheck, FileCheck,
  ClipboardList, Disc, RotateCw, Battery, BatteryCharging, Zap,
  Droplets, Fuel, Truck, Container, Link, Cog,
  RefreshCw, Car, ArrowUpDown, Wind, Shield, PaintBucket, SprayCan,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, LucideIcon> = {
  Search, Wrench, Gauge, ClipboardCheck, ShieldCheck, FileCheck,
  ClipboardList, Disc, RotateCw, Battery, BatteryCharging, Zap,
  Droplets, Fuel, Truck, Container, Link, Cog,
  RefreshCw, Car, ArrowUpDown, Wind, Shield, PaintBucket, SprayCan,
};

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const Icon = iconMap[service.icon] ?? Wrench;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <TiltCard>
        <div className="glass-light rounded-xl p-5 border border-metal-700/30 hover:border-brand-500/20 transition-all duration-300 group cursor-default h-full">
          <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mb-3 group-hover:bg-brand-500/20 transition-colors">
            <Icon className="w-5 h-5 text-brand-400" />
          </div>
          <h4 className="font-semibold text-white text-sm md:text-base mb-1.5">
            {service.title}
          </h4>
          <p className="text-metal-400 text-xs md:text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function Services() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="services" className="relative py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-metal-950 via-metal-900/30 to-metal-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="Our Services"
          title="What We Fix"
          description="From diesel engines to brake systems, trailers to transmissions — we handle it all with honest, professional service."
        />

        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {serviceCategories.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(i)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                activeCategory === i
                  ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                  : "bg-metal-800 text-metal-400 hover:text-white hover:bg-metal-700"
              )}
            >
              {cat.category}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {serviceCategories[activeCategory].services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
