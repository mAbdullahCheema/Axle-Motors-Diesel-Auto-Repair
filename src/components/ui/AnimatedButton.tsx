"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  glow?: boolean;
  className?: string;
}

export function AnimatedButton({
  children,
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  glow = false,
  className,
  ...props
}: AnimatedButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-300 cursor-pointer select-none";

  const variantClasses = {
    primary:
      "bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/25",
    secondary:
      "bg-metal-800 hover:bg-metal-700 text-metal-100 border border-metal-700",
    outline:
      "bg-transparent hover:bg-metal-800/50 text-metal-100 border border-metal-600 hover:border-brand-500",
    ghost: "bg-transparent hover:bg-metal-800/30 text-metal-300 hover:text-metal-100",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const Comp = href ? "a" : "button";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn("inline-block", glow && "animate-glow-pulse rounded-lg")}
    >
      <Comp
        href={href}
        {...(Comp === "a" ? { target, rel } : {})}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...(props as Record<string, unknown>)}
      >
        {children}
      </Comp>
    </motion.div>
  );
}
