"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Play } from "lucide-react";
import { Button, GlowButton } from "@/components/ui/Button";
import { photographer } from "@/data/mockData";
import gsap from "gsap";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations handled by framer-motion
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--obsidian)] via-transparent to-[var(--obsidian)] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--obsidian)] via-transparent to-[var(--obsidian)] z-10 opacity-50" />
        <Image
          src="https://images.pexels.com/photos/1739090/pexels-photo-1739090.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Hero background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--gold)] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        {/* Small tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--gold)] font-medium">
            <span className="w-12 h-[1px] bg-[var(--gold)]" />
            Award-Winning Photography
            <span className="w-12 h-[1px] bg-[var(--gold)]" />
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block">{photographer.name.split(" ")[0]}</span>
          <span className="block text-gradient">{photographer.name.split(" ")[1]}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-[var(--muted)] max-w-2xl mx-auto mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {photographer.tagline}
        </motion.p>

        {/* Specializations */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {photographer.specializations.slice(0, 4).map((spec, index) => (
            <span
              key={spec}
              className="text-sm uppercase tracking-wider text-[var(--muted)] border border-[var(--glass-border)] px-4 py-1.5 rounded-full"
            >
              {spec}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <GlowButton>
            <Link href="/portfolio">View Portfolio</Link>
          </GlowButton>
          <Button variant="outline" arrow>
            <Link href="/contact">Book a Session</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-[var(--muted)]"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Side decorations */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className="h-20 w-[1px] bg-[var(--gold)] opacity-50" />
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
            style={{ writingMode: "vertical-rl" }}
          >
            Instagram
          </a>
          <span className="h-20 w-[1px] bg-[var(--gold)] opacity-50" />
        </motion.div>
      </div>

      {/* Right side info */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-right">
            <p className="text-xs uppercase tracking-widest text-[var(--muted)] mb-1">
              Available in
            </p>
            <p className="text-sm font-medium text-[var(--foreground)]">
              {photographer.location}
            </p>
          </div>
          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
        </motion.div>
      </div>

      {/* Play video button */}
      <motion.button
        className="absolute right-8 bottom-20 md:bottom-32 z-20 w-16 h-16 rounded-full border border-[var(--gold)] flex items-center justify-center group hover:bg-[var(--gold)] transition-all cursor-hover"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Play className="w-6 h-6 text-[var(--gold)] group-hover:text-[var(--obsidian)] transition-colors ml-1" />
      </motion.button>
    </section>
  );
}
