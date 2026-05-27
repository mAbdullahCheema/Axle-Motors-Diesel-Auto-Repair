"use client";

import { businessName, address, phoneNumber, phoneLink, mapsUrl, navLinks, getWhatsAppUrl } from "@/data";
import { LogoIcon } from "@/components/ui/Logo";
import { Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-metal-800/50 bg-metal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10">
                <LogoIcon className="w-full h-full" />
              </div>
              <div>
                <p className="font-display text-lg text-white leading-none uppercase">
                  Axle Motors
                </p>
                <p className="text-[10px] text-brand-400 uppercase tracking-[0.2em] leading-none mt-0.5">
                  Diesel & Auto Repair
                </p>
              </div>
            </div>
            <p className="text-metal-400 text-sm leading-relaxed mb-4">
              Honest, high-quality diesel and auto repair in Cheyenne, WY. Open 24/7
              for emergencies, diagnostics, towing, and complete vehicle services.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-metal-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-400">
                      ›
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={phoneLink}
                  className="text-metal-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {phoneNumber}
                </a>
              </li>
              <li className="text-metal-400 text-sm flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>{address}</span>
              </li>
              <li className="text-metal-400 text-sm flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Open 24 Hours</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-metal-400">
              <li>Diesel Engine Repair</li>
              <li>Auto Repair & Maintenance</li>
              <li>Truck & Trailer Repair</li>
              <li>24/7 Towing</li>
              <li>Diagnostics & Electrical</li>
              <li>Brake & Transmission Work</li>
            </ul>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-sm text-brand-400 hover:text-brand-300 transition-colors font-medium"
            >
              Book Appointment
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-metal-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-metal-500 text-xs">
            &copy; {new Date().getFullYear()} {businessName}. All rights reserved.
          </p>
          <p className="text-metal-600 text-xs">
            {address} | {phoneNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
