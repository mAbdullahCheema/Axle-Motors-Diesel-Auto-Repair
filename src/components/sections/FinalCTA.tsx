"use client";

import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { phoneLink, getWhatsAppUrl } from "@/data";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-metal-950" />
      <div className="absolute inset-0 hero-grid-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs md:text-sm font-mono uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/5 text-brand-400">
            Let&apos;s Get Started
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-7xl leading-[0.9] uppercase tracking-tight text-white mb-6">
            Ready to Get Your{" "}
            <span className="text-gradient">Vehicle Fixed?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-metal-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Honest work, fair pricing, and 24/7 availability. One call or
            message and we&apos;ll get you back on the road.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Call +1 307-529-0637
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
