"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import { Button, GlowButton } from "@/components/ui/Button";
import { useInView } from "@/hooks/useScrollAnimation";

export function CTASection() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--obsidian)] via-[var(--charcoal)] to-[var(--obsidian)]" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201,169,98,0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 text-center">
        {/* Icon */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Camera className="w-16 h-16 mx-auto text-[var(--gold)]" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Ready to Tell Your
          <br />
          <span className="text-gradient">Story Through Light?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let&apos;s create something extraordinary together. Book a consultation
          and begin your journey towards capturing timeless moments.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <GlowButton>
            <Link href="/contact" className="flex items-center gap-2">
              Book a Session
              <ArrowRight className="w-4 h-4" />
            </Link>
          </GlowButton>
          <Button variant="outline">
            <Link href="/portfolio">Explore Portfolio</Link>
          </Button>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute left-8 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--gold)]"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute right-8 top-1/3 w-2 h-2 rounded-full bg-[var(--gold)]"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-50" />
    </section>
  );
}
