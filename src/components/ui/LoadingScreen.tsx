"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoMark } from "./Logo";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[var(--obsidian)] flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-radial opacity-50" />

          {/* Animated lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent h-[1px] opacity-30"
                style={{
                  top: `${20 + i * 15}%`,
                  left: 0,
                  right: 0,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Logo */}
          <motion.div
            className="relative z-10 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <LogoMark />
          </motion.div>

          {/* Progress text */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.p
              className="text-sm tracking-[0.3em] uppercase text-[var(--muted)] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {photographerData.name}
            </motion.p>

            {/* Progress bar */}
            <div className="w-64 h-[2px] bg-[var(--border)] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[var(--gold)]"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <motion.p
              className="mt-4 text-xs tracking-[0.2em] text-[var(--muted)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.p>
          </motion.div>

          {/* Corners */}
          <div className="absolute inset-8 pointer-events-none">
            <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-[var(--gold)] opacity-50" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-[var(--gold)] opacity-50" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-[var(--gold)] opacity-50" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-[var(--gold)] opacity-50" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const photographerData = {
  name: "ARJUN PHOTOGRAPHY",
};
