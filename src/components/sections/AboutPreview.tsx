"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { photographer } from "@/data/mockData";
import { useInView } from "@/hooks/useScrollAnimation";

export function AboutPreview() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--obsidian)] via-[var(--charcoal)] to-[var(--obsidian)]" />

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Arjun Photography"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-transparent to-transparent opacity-60" />
            </div>

            {/* Experience badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 md:right-10 glass px-8 py-6 rounded-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-5xl font-display font-bold text-gradient">
                {photographer.experience}+
              </p>
              <p className="text-sm uppercase tracking-wider text-[var(--muted)] mt-1">
                Years Experience
              </p>
            </motion.div>

            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-[var(--gold)] opacity-20 rounded-sm pointer-events-none" />
          </motion.div>

          {/* Content side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Section label */}
            <div>
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-4">
                <span className="w-8 h-[1px] bg-[var(--gold)]" />
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
                Crafting Visual{" "}
                <span className="text-gradient">Narratives</span>
              </h2>
            </div>

            {/* Bio text */}
            <p className="text-[var(--muted)] leading-relaxed text-lg">
              {photographer.bio}
            </p>

            {/* Specializations */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-[var(--muted)]">
                Specializations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {photographer.specializations.map((spec, index) => (
                  <motion.div
                    key={spec}
                    className="flex items-center gap-3 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-[var(--gold)] rounded-full" />
                    <span className="text-sm text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors">
                      {spec}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[var(--gold)] hover:gap-4 transition-all cursor-hover group"
              >
                <span className="uppercase tracking-wider text-sm font-medium">
                  Discover My Journey
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[var(--gold)] opacity-5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--gold)] opacity-5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
