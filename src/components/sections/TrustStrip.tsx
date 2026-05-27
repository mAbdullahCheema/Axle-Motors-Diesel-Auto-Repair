"use client";

import { motion } from "framer-motion";
import { Star, Clock, MapPin, Shield, HeadphonesIcon, ThumbsUp } from "lucide-react";

const trustItems = [
  { icon: Star, label: "4.9 Rating", sub: "Google" },
  { icon: ThumbsUp, label: "154+ Reviews", sub: "Verified" },
  { icon: Clock, label: "Open 24/7", sub: "Always Available" },
  { icon: MapPin, label: "Cheyenne, WY", sub: "Local Shop" },
  { icon: Shield, label: "Honest Work", sub: "Guaranteed" },
  { icon: HeadphonesIcon, label: "Emergency Help", sub: "Fast Response" },
];

export function TrustStrip() {
  return (
    <section className="relative py-8 md:py-10 border-y border-metal-800/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 via-transparent to-accent/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                <item.icon className="w-5 h-5 text-brand-400" />
              </div>
              <div>
                <p className="text-sm md:text-base font-semibold text-white leading-tight">
                  {item.label}
                </p>
                <p className="text-[10px] md:text-xs text-metal-500 uppercase tracking-wider">
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
