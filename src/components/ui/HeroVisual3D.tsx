"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function ScannerLine({ delay, y }: { delay: number; y: number }) {
  return (
    <motion.div
      className="absolute left-0 right-0 h-px"
      style={{
        top: `${y}%`,
        background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.6), transparent)",
        boxShadow: "0 0 6px rgba(59,130,246,0.4)",
      }}
      animate={{ top: ["0%", "100%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear", delay }}
    />
  );
}

function PulseDot({ x, y, delay, color }: { x: number; y: number; delay: number; color: string }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{ left: `${x}%`, top: `${y}%`, width: 6, height: 6, backgroundColor: color }}
      animate={{
        scale: [1, 2.5, 1],
        opacity: [0.3, 0.9, 0.3],
        boxShadow: [
          `0 0 4px ${color}`,
          `0 0 12px ${color}, 0 0 24px ${color}`,
          `0 0 4px ${color}`,
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

export function HeroVisual3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[4/3] flex items-center justify-center"
      style={{ perspective: "1200px" }}
    >
      {/* Floor shadow */}
      <div
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[85%] h-5 rounded-full opacity-25"
        style={{
          background: "radial-gradient(ellipse, rgba(249,115,22,0.25) 0%, transparent 70%)",
        }}
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-[90%] h-[90%] flex items-center justify-center"
      >
        {/* ============ TRUCK ILLUSTRATION ============ */}
        <svg viewBox="0 0 320 200" className="w-full max-w-[320px]" style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))" }}>
          <defs>
            <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="cabGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
            <linearGradient id="tireGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="rimGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1e3a5f" />
              <stop offset="100%" stopColor="#0f2744" />
            </linearGradient>
            <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Truck body - cargo bed */}
          <rect x="140" y="55" width="165" height="75" fill="url(#bodyGrad)" rx="3" />
          <rect x="140" y="55" width="165" height="3" fill="rgba(148,163,184,0.12)" />

          {/* Truck cab */}
          <rect x="80" y="45" width="70" height="85" fill="url(#cabGrad)" rx="4" />
          <rect x="80" y="45" width="70" height="3" fill="rgba(148,163,184,0.1)" rx="4" />

          {/* Windshield */}
          <rect x="130" y="52" width="8" height="40" fill="url(#glassGrad)" rx="1" />
          <rect x="90" y="52" width="8" height="50" fill="url(#glassGrad)" rx="1" />

          {/* Side window */}
          <rect x="94" y="56" width="6" height="22" fill="url(#glassGrad)" rx="1" opacity="0.7" />

          {/* Headlight */}
          <rect x="80" y="65" width="6" height="12" fill="url(#accentGrad)" rx="2" filter="url(#glow)" />
          <rect x="80" y="62" width="4" height="6" fill="#fbbf24" rx="1" opacity="0.6" />

          {/* Grill */}
          <rect x="82" y="78" width="4" height="30" fill="rgba(148,163,184,0.08)" rx="1" />
          <line x1="84" y1="80" x2="84" y2="106" stroke="rgba(148,163,184,0.15)" strokeWidth="1" />

          {/* Bumper */}
          <rect x="78" y="108" width="16" height="6" fill="rgba(100,116,139,0.4)" rx="2" />

          {/* Cargo bed rails */}
          <rect x="140" y="52" width="165" height="3" fill="rgba(148,163,184,0.15)" />
          <rect x="140" y="127" width="165" height="3" fill="rgba(148,163,184,0.1)" />

          {/* Axle Motors accent stripe */}
          <rect x="140" y="102" width="165" height="4" fill="url(#accentGrad)" opacity="0.7" />

          {/* Wheels */}
          <g transform="translate(105, 115)">
            <circle cx="0" cy="0" r="18" fill="url(#tireGrad)" />
            <circle cx="0" cy="0" r="11" fill="url(#rimGrad)" />
            <circle cx="0" cy="0" r="4" fill="#94a3b8" />
            {[0, 72, 144, 216, 288].map((angle) => (
              <line
                key={angle}
                x1="0" y1="-10"
                x2={Math.sin((angle * Math.PI) / 180) * 4}
                y2={-Math.cos((angle * Math.PI) / 180) * 4}
                stroke="rgba(148,163,184,0.4)"
                strokeWidth="1"
                transform={`rotate(${angle})`}
              />
            ))}
          </g>

          <g transform="translate(220, 115)">
            <circle cx="0" cy="0" r="20" fill="url(#tireGrad)" />
            <circle cx="0" cy="0" r="12" fill="url(#rimGrad)" />
            <circle cx="0" cy="0" r="4" fill="#94a3b8" />
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <line
                key={angle}
                x1="0" y1="-11"
                x2={Math.sin((angle * Math.PI) / 180) * 4}
                y2={-Math.cos((angle * Math.PI) / 180) * 4}
                stroke="rgba(148,163,184,0.4)"
                strokeWidth="1.2"
                transform={`rotate(${angle})`}
              />
            ))}
          </g>

          <g transform="translate(280, 115)">
            <circle cx="0" cy="0" r="18" fill="url(#tireGrad)" />
            <circle cx="0" cy="0" r="11" fill="url(#rimGrad)" />
            <circle cx="0" cy="0" r="4" fill="#94a3b8" />
            {[0, 72, 144, 216, 288].map((angle) => (
              <line
                key={angle}
                x1="0" y1="-10"
                x2={Math.sin((angle * Math.PI) / 180) * 4}
                y2={-Math.cos((angle * Math.PI) / 180) * 4}
                stroke="rgba(148,163,184,0.4)"
                strokeWidth="1"
                transform={`rotate(${angle})`}
              />
            ))}
          </g>

          {/* Hood open indicator - mechanic work in progress */}
          <rect x="82" y="44" width="62" height="1.5" fill="#f97316" opacity="0.5" rx="0.5" />
          
          {/* Exhaust pipe */}
          <rect x="300" y="122" width="14" height="3" fill="#64748b" rx="1" />
          <rect x="312" y="121" width="4" height="5" fill="#475569" rx="1" />

          {/* Roof clearance lights */}
          <circle cx="90" cy="44" r="1.5" fill="#fbbf24" opacity="0.6" />
          <circle cx="105" cy="44" r="1.5" fill="#fbbf24" opacity="0.6" />
          <circle cx="120" cy="44" r="1.5" fill="#fbbf24" opacity="0.6" />
        </svg>

        {/* Scanner/diagnostic overlay lines */}
        <div className="absolute inset-0 pointer-events-none" style={{ borderRadius: "inherit" }}>
          <ScannerLine delay={0} y={20} />
          <ScannerLine delay={1.5} y={40} />
        </div>

        {/* Diagnostic pulse dots on the vehicle */}
        <div className="absolute inset-0 pointer-events-none">
          <PulseDot x={35} y={40} delay={0} color="#f97316" />
          <PulseDot x={62} y={55} delay={0.7} color="#3b82f6" />
          <PulseDot x={78} y={65} delay={1.4} color="#f97316" />
          <PulseDot x={48} y={72} delay={0.3} color="#3b82f6" />
          <PulseDot x={85} y={48} delay={1.1} color="#f97316" />
        </div>

        {/* Ambient glow behind truck */}
        <div
          className="absolute inset-0 pointer-events-none rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, rgba(249,115,22,0.2) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      {/* SVG overlay corner brackets */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300" preserveAspectRatio="none">
        <path d="M12 35V12H35" stroke="rgba(249,115,22,0.15)" strokeWidth="1.5" fill="none" />
        <path d="M365 12H388V35" stroke="rgba(249,115,22,0.12)" strokeWidth="1.5" fill="none" />
        <path d="M12 265V288H35" stroke="rgba(59,130,246,0.1)" strokeWidth="1.5" fill="none" />
        <path d="M365 288H388V265" stroke="rgba(59,130,246,0.08)" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}
