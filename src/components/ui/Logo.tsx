"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes: Record<string, string> = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  };

  return (
    <motion.a
      href="/"
      className={`inline-flex items-center gap-2 font-display font-bold tracking-wider ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-[var(--foreground)]">Arjun</span>
      <span className="text-gradient">Photography</span>
    </motion.a>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="w-24 h-24 relative"
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-[var(--gold)] opacity-50"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner ring */}
        <motion.div
          className="absolute inset-2 rounded-full border border-[var(--gold)] opacity-30"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* A letter */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-4xl font-display text-gradient"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            A
          </motion.span>
        </div>

        {/* Decorative dots */}
        {[0, 90, 180, 270].map((rotation, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[var(--gold)] rounded-full"
            style={{
              top: "50%",
              left: "50%",
              marginTop: "-4px",
              marginLeft: "-4px",
              transformOrigin: "0 48px",
              transform: `rotate(${rotation}deg) translateY(-48px)`,
            }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
