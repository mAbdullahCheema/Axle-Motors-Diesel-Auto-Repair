"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { howItWorksSteps, getWhatsAppUrl } from "@/data";
import { MessageCircle, ArrowRight } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-metal-900/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="How It Works"
          title="Book in 4 Easy Steps"
          description="Getting your vehicle fixed has never been simpler. We're here 24/7 when you need us."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {howItWorksSteps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.15}>
              <div className="relative">
                <div className="glass-light rounded-2xl p-6 md:p-8 text-center border border-metal-700/30 h-full">
                  <span className="font-display text-5xl md:text-6xl text-gradient opacity-40 leading-none block mb-4">
                    {step.step}
                  </span>
                  <h4 className="font-semibold text-white text-lg mb-2">
                    {step.title}
                  </h4>
                  <p className="text-metal-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {i < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-brand-500" />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <AnimatedButton
            href={getWhatsAppUrl()}
            variant="primary"
            size="lg"
            glow
          >
            <MessageCircle className="w-5 h-5" />
            Start Appointment on WhatsApp
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
