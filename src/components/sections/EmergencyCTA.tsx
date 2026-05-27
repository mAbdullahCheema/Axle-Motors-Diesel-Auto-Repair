"use client";

import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { emergencyServices, phoneLink, getWhatsAppUrl } from "@/data";
import { motion } from "framer-motion";
import { Phone, MessageCircle, AlertTriangle, CheckCircle } from "lucide-react";

export function EmergencyCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-metal-950 to-metal-950" />

      <div className="absolute inset-0 mechanical-lines opacity-30" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl" />

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              Emergency Help
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] uppercase tracking-tight text-white mb-6">
              Need Help{" "}
              <span className="text-gradient">Right Now?</span>
            </h2>
            <p className="text-base sm:text-lg text-metal-300 mb-8 max-w-lg leading-relaxed">
              We&apos;re open 24 hours a day, 7 days a week. Whether it&apos;s a
              roadside emergency, diesel breakdown, or urgent repair — we&apos;re
              ready to help right now.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <AnimatedButton
                href={phoneLink}
                variant="primary"
                size="lg"
                glow
              >
                <Phone className="w-5 h-5" />
                Call Now
              </AnimatedButton>
              <AnimatedButton
                href={getWhatsAppUrl()}
                variant="outline"
                size="lg"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </AnimatedButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {emergencyServices.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="glass-light rounded-xl p-4 border border-metal-700/30 flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <span className="text-sm text-metal-200 font-medium">{service}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
