"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { useInView } from "@/hooks/useScrollAnimation";

export function ShowreelSection() {
  const { ref, isInView } = useInView(0.2);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-[var(--obsidian)]">
      <div className="container mx-auto px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-6">
            <span className="w-12 h-[1px] bg-[var(--gold)]" />
            Showreel
            <span className="w-12 h-[1px] bg-[var(--gold)]" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            Cinematic <span className="text-[var(--gold)] italic">Vision.</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto mt-6">
            Experience the motion and emotion of our finest cinematic work, crafted with precision and passion.
          </p>
        </motion.div>

        <motion.div
          className="relative aspect-video w-full max-w-6xl mx-auto rounded-xl overflow-hidden group cursor-pointer border border-[var(--glass-border)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <Image
              src="https://images.pexels.com/photos/3014858/pexels-photo-3014858.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Cinematic Showreel"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-[var(--obsidian)]/40 group-hover:bg-[var(--obsidian)]/20 transition-colors duration-500" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-[var(--gold)] group-hover:border-[var(--gold)] group-hover:text-[var(--obsidian)] group-hover:scale-110 transition-all duration-500 shadow-xl">
              <Play className="w-8 h-8 md:w-10 md:h-10 ml-2" fill="currentColor" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
