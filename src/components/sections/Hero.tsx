"use client";

import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { LogoIcon } from "@/components/ui/Logo";
import { phoneLink, getWhatsAppUrl } from "@/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, Star, Phone, MessageCircle } from "lucide-react";
import { useRef } from "react";

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
      <div className="absolute inset-0 bg-gradient-to-b from-metal-950/80 via-metal-950/50 to-metal-950" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-pulse" />

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
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] uppercase tracking-tight text-white text-shadow mb-6"
            >
              Diesel & Auto Repair{" "}
              <span className="text-gradient">That Keeps You Moving</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-metal-400 leading-relaxed mb-8 max-w-xl"
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
              <AnimatedButton
                href={getWhatsAppUrl()}
                variant="primary"
                size="lg"
                glow
              >
                <MessageCircle className="w-5 h-5" />
                Book Appointment
              </AnimatedButton>
              <AnimatedButton
                href={phoneLink}
                variant="outline"
                size="lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </AnimatedButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden metal-border glow-brand">
              <div className="absolute inset-0 bg-gradient-to-tl from-metal-950/80 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-metal-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <LogoIcon className="w-full h-full" />
                  </div>
                  <p className="font-display text-4xl text-white uppercase">Axle Motors</p>
                  <p className="text-brand-400 text-sm tracking-widest uppercase mt-2">
                    Diesel & Auto Repair
                  </p>
                  <p className="text-metal-400 mt-4 text-sm">
                    24/7 Honest, Reliable Service
                  </p>
                </div>
              </div>
            </div>

            {[
              { label: "Diesel Repair", top: "-5%", left: "-10%", delay: 0.8 },
              { label: "24/7 Towing", top: "10%", right: "-8%", delay: 1.0 },
              { label: "Diagnostics", bottom: "15%", left: "-6%", delay: 1.2 },
              { label: "Trailer Repair", bottom: "-3%", right: "-5%", delay: 1.4 },
            ].map((card) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: card.delay }}
                className="absolute glass-light rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg z-20"
                style={{
                  top: card.top,
                  left: card.left,
                  right: card.right,
                  bottom: card.bottom,
                }}
              >
                <CheckCircle className="w-4 h-4 text-brand-400 inline mr-2" />
                {card.label}
              </motion.div>
            ))}
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
