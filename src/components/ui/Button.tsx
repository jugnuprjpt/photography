"use client";

import { ReactNode, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  arrow?: boolean;
}

export function MagneticButton({
  children,
  className,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.button
      ref={ref}
      className={cn("relative", className)}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon = false,
  arrow = false,
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[var(--gold)] text-[var(--obsidian)] hover:bg-[var(--gold-light)] glow-hover",
    secondary:
      "bg-[var(--card)] text-[var(--foreground)] border border-[var(--glass-border)] hover:bg-[var(--glass)]",
    outline:
      "bg-transparent text-[var(--foreground)] border border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--obsidian)]",
    ghost:
      "bg-transparent text-[var(--foreground)] hover:bg-[var(--glass)]",
    link:
      "bg-transparent text-[var(--gold)] underline-offset-4 hover:underline p-0 h-auto",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm gap-1.5",
    md: "h-11 px-6 text-base gap-2",
    lg: "h-14 px-8 text-lg gap-2.5",
  };

  return (
    <motion.button
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-sm tracking-wide uppercase transition-all duration-300 cursor-hover",
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span>{children}</span>
      {arrow && (
        <motion.span
          className="ml-1"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowUpRight className="w-4 h-4" />
        </motion.span>
      )}
      {icon && (
        <span>
          <ArrowRight className="w-4 h-4" />
        </span>
      )}
    </motion.button>
  );
}

interface GlowButtonProps extends ButtonProps {
  glowColor?: string;
}

export function GlowButton({
  children,
  glowColor = "rgba(201, 169, 98, 0.4)",
  className,
  ...props
}: GlowButtonProps) {
  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-4 font-medium uppercase tracking-wider text-[var(--obsidian)] bg-[var(--gold)] rounded-sm overflow-hidden group cursor-hover",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        boxShadow: `0 0 0 0 ${glowColor}`,
      }}
      {...props}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-[var(--gold-light)] opacity-0 group-hover:opacity-30 transition-opacity duration-300"
      />

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
