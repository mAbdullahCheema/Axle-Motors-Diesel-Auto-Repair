"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { testimonials, getWhatsAppUrl } from "@/data";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";

export function Reviews() {
  return (
    <section id="reviews" className="relative py-20 md:py-32">
      <div className="absolute inset-0 bg-metal-900/50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="Reviews"
          title="See Why Drivers Trust Axle Motors"
          description="Honest work, fair pricing, and 24/7 availability — that's why we're rated 4.9★ by 154+ drivers."
        />

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div
                className={`glass-light rounded-2xl p-6 md:p-8 border h-full ${
                  testimonial.highlight
                    ? "border-brand-500/20"
                    : "border-metal-700/30"
                }`}
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-brand-400 text-brand-400"
                    />
                  ))}
                </div>
                <p className="text-metal-200 text-sm md:text-base leading-relaxed mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="text-metal-500 text-xs md:text-sm font-medium uppercase tracking-wider">
                  — {testimonial.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <AnimatedButton
            href={getWhatsAppUrl()}
            variant="outline"
            size="lg"
          >
            <MessageCircle className="w-5 h-5" />
            Join 154+ Happy Drivers
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
