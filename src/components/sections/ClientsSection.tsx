"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clients } from "@/data/mockData";
import { useInView } from "@/hooks/useScrollAnimation";

export function ClientsSection() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section ref={ref} className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--charcoal)]" />

      {/* Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[var(--border)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--border)]" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Trusted by Leading Brands
          </p>
        </motion.div>

        {/* Clients logo marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* First row */}
            <motion.div
              className="flex gap-16 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="relative w-24 h-12 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-hover flex-shrink-0"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--charcoal)] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--charcoal)] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
