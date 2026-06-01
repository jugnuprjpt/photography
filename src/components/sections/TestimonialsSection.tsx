"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/mockData";
import { useInView } from "@/hooks/useScrollAnimation";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isInView } = useInView(0.2);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--obsidian)] via-[var(--charcoal)] to-[var(--obsidian)]" />

      {/* Decorative quote icon */}
      <motion.div
        className="absolute top-20 left-10 opacity-5"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.05, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Quote className="w-48 h-48 text-[var(--gold)]" />
      </motion.div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-4 justify-center">
            <span className="w-8 h-[1px] bg-[var(--gold)]" />
            Testimonials
            <span className="w-8 h-[1px] bg-[var(--gold)]" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Client <span className="text-gradient">Stories</span>
          </h2>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="text-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Avatar */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover rounded-full"
                />
                <div className="absolute inset-0 rounded-full border-2 border-[var(--gold)]" />
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[var(--gold)] fill-[var(--gold)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-[var(--foreground)] leading-relaxed mb-8 italic">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              {/* Author info */}
              <div>
                <p className="text-lg font-medium mb-1">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-[var(--muted)]">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </p>
                <p className="text-xs text-[var(--gold)] mt-2 uppercase tracking-wider">
                  {testimonials[currentIndex].projectType}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-[var(--glass-border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all cursor-hover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-[var(--glass-border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all cursor-hover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-[var(--gold)]"
                    : "bg-[var(--glass-border)] hover:bg-[var(--gold)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-20 right-10 opacity-5">
        <Quote className="w-48 h-48 text-[var(--gold)] rotate-180" />
      </div>
    </section>
  );
}
