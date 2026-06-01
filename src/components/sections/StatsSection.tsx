"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { stats } from "@/data/mockData";
import { useInView } from "@/hooks/useScrollAnimation";

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  isVisible,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const incrementTime = (duration * 1000) / value;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const { ref, isInView } = useInView(0.3);

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--charcoal)] via-[var(--obsidian)] to-[var(--charcoal)]" />

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-20" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Counter */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isVisible={isInView}
                />
              </div>

              {/* Label */}
              <p className="text-sm uppercase tracking-wider text-[var(--muted)] group-hover:text-[var(--gold)] transition-colors">
                {stat.label}
              </p>

              {/* Underline on hover */}
              <motion.div
                className="h-[2px] bg-[var(--gold)] mx-auto mt-4"
                initial={{ width: 0 }}
                whileHover={{ width: "60px" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
