"use client";

import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { HeroVisual3D } from "@/components/ui/HeroVisual3D";
import { phoneLink, getWhatsAppUrl } from "@/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, Star, Phone, MessageCircle, Wrench, Settings, Gauge, Shield } from "lucide-react";
import { useRef } from "react";

const floatingCards = [
  { icon: Wrench, label: "Diesel Repair", pos: "top-[3%] -left-[2%]", delay: 0.8 },
  { icon: Gauge, label: "Diagnostics", pos: "top-[8%] -right-[2%]", delay: 1.0 },
  { icon: Shield, label: "24/7 Service", pos: "bottom-[14%] -left-[2%]", delay: 1.2 },
  { icon: Settings, label: "Full Service", pos: "bottom-[16%] -right-[2%]", delay: 1.4 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 hero-grid-bg mechanical-lines"
        style={{ y: bgY }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-metal-950/90 via-metal-950/60 to-metal-950" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/6 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/6 rounded-full blur-3xl animate-float-delayed" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-pulse" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-48"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {[
                { icon: Star, text: "4.9★ Google Rating" },
                { icon: CheckCircle, text: "154 Reviews" },
                { icon: CheckCircle, text: "Open 24 Hours" },
                { icon: CheckCircle, text: "Diesel + Auto + Heavy Duty" },
              ].map((badge, i) => (
                <motion.span
                  key={badge.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-metal-800/80 border border-metal-700/50 text-metal-200"
                >
                  <badge.icon className="w-3.5 h-3.5 text-brand-400" />
                  {badge.text}
                </motion.span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-8xl leading-[0.9] uppercase tracking-tight text-white text-shadow mb-6"
            >
              Diesel & Auto Repair{" "}
              <span className="text-gradient">That Keeps You Moving</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-metal-400 leading-relaxed mb-8 max-w-xl"
            >
              24/7 mechanic, towing, diagnostics, truck repair, trailer repair,
              and full-service vehicle maintenance in Cheyenne, WY.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <AnimatedButton href={getWhatsAppUrl()} variant="primary" size="lg" glow>
                <MessageCircle className="w-5 h-5" />
                Book Appointment
              </AnimatedButton>
              <AnimatedButton href={phoneLink} variant="outline" size="lg">
                <Phone className="w-5 h-5" />
                Call Now
              </AnimatedButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative hidden md:block p-4"
          >
            {/* Main card with truck visual */}
            <div className="relative rounded-2xl border border-metal-700/30 bg-metal-900/40 overflow-hidden shadow-2xl shadow-brand-500/5">
              <HeroVisual3D />

              {/* Status bar — inside the card, bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-10 px-4 py-3 bg-gradient-to-t from-metal-950/90 via-metal-950/60 to-transparent flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
                    <span className="text-[11px] font-semibold text-green-400 uppercase tracking-wider">
                      Open 24/7
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-brand-400 text-brand-400" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">4.9</span>
                </div>
              </div>
            </div>

            {/* Floating service cards — positioned outside with breathing room (desktop only) */}
            <div className="hidden lg:block">
            {floatingCards.map((card) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, delay: card.delay, ease: "easeOut" }}
                className={`absolute z-20 flex items-center gap-2 px-3 py-2.5 rounded-lg bg-metal-900/90 border border-metal-700/40 shadow-lg ${card.pos}`}
              >
                <div className="w-7 h-7 rounded-md bg-brand-500/15 flex items-center justify-center text-brand-400">
                  <card.icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-white whitespace-nowrap">
                  {card.label}
                </span>
                </motion.div>
            ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-metal-950 to-transparent pointer-events-none" />

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 border-2 border-metal-600 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-brand-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
