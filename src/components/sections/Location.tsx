"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { address, phoneNumber, phoneLink, mapsUrl, getWhatsAppUrl } from "@/data";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, MessageCircle } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="relative py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-metal-950 via-metal-900/30 to-metal-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="Location"
          title="Visit Our Shop"
          description="We're right in Cheyenne, WY — open 24 hours a day for all your diesel, auto, truck, and trailer repair needs."
        />

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-light rounded-2xl p-6 md:p-8 border border-metal-700/30 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-metal-400 text-sm leading-relaxed">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <a
                    href={phoneLink}
                    className="text-metal-400 text-sm hover:text-brand-400 transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Hours</h4>
                  <p className="text-metal-400 text-sm">
                    Open 24 hours, 7 days a week
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <AnimatedButton
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </AnimatedButton>
              <AnimatedButton
                href={getWhatsAppUrl()}
                variant="outline"
                size="md"
              >
                <MessageCircle className="w-4 h-4" />
                Message Us
              </AnimatedButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden metal-border aspect-[4/3] lg:aspect-auto"
          >
            <div className="absolute inset-0 bg-metal-800 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-brand-500 mx-auto mb-4" />
                <p className="text-white font-display text-2xl uppercase tracking-wider">
                  Axle Motors
                </p>
                <p className="text-metal-400 text-sm mt-2">{address}</p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
