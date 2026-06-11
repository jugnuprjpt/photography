"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "@/hooks/useScrollAnimation";
import { MapPin, Award, Camera, Video, Sparkles } from "lucide-react";

export function ClientsSection() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section ref={ref} className="relative py-24 bg-[var(--obsidian)] overflow-hidden">
      <div className="container mx-auto px-6">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-6">
            <span className="w-12 h-[1px] bg-[var(--gold)]" />
            Why Choose Me
            <span className="w-12 h-[1px] bg-[var(--gold)]" />
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            The <span className="text-[var(--gold)] italic">Difference.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[300px] md:h-[600px] max-w-6xl mx-auto">
          
          {/* Box 1: Cinematic Approach (Span 2 cols) */}
          <motion.div 
            className="md:col-span-2 relative rounded-2xl border border-[var(--glass-border)] bg-gradient-to-br from-[var(--charcoal)] to-[var(--obsidian)] overflow-hidden group flex flex-col justify-end p-8 md:p-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Video className="w-10 h-10 text-[var(--gold)] mb-4" />
            <h3 className="text-2xl md:text-4xl font-display font-bold mb-3">Cinematic Storytelling</h3>
            <p className="text-[var(--muted)] max-w-md text-lg">Every single frame is carefully color-graded and composed to evoke pure emotion and cinematic quality.</p>
          </motion.div>

          {/* Box 2: Global Reach */}
          <motion.div 
            className="relative rounded-2xl border border-[var(--glass-border)] bg-[var(--charcoal)] overflow-hidden group flex flex-col items-center justify-center p-8 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/shared-image.jfif"
              alt="About hero"
              fill
              className="object-cover object-top opacity-30"
              priority
            />
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <MapPin className="w-16 h-16 text-[var(--gold)] mb-6 opacity-80" />
            </motion.div>
            <h3 className="text-xl font-display font-bold mb-2">Local Coverage & Flexibility</h3>
            <p className="text-[var(--muted)] text-sm">Ready to travel across the region and adapt to your project's needs.</p>
          </motion.div>

          {/* Box 3: Trusted By (Logos) */}
          <motion.div 
            className="relative rounded-2xl border border-[var(--glass-border)] bg-[var(--charcoal)] overflow-hidden group p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Award className="w-8 h-8 text-[var(--gold)] mb-4" />
            <h3 className="text-xl font-display font-bold mb-6">Trusted By The Best</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 mt-4">
              <img src="/shared-image.jpg" alt="Vogue" width="90" height="40" className="object-contain filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-hover" />
              <img src="/shared-image.jpg" alt="NatGeo" width="90" height="40" className="object-contain filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-hover" />
              <img src="/shared-image.jpg" alt="Lonely Planet" width="90" height="40" className="object-contain filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-hover" />
              <img src="/shared-image.jpg" alt="Harper" width="90" height="40" className="object-contain filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-hover" />
            </div>
          </motion.div>

          {/* Box 4: Fast Delivery (Span 2 cols) */}
          <motion.div 
            className="md:col-span-2 relative rounded-2xl border border-[var(--glass-border)] bg-gradient-to-tl from-[var(--charcoal)] to-[var(--obsidian)] overflow-hidden group flex flex-col justify-center p-8 md:p-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 p-8">
              <Sparkles className="w-32 h-32 text-[var(--gold)] opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700" />
            </div>
            <Camera className="w-10 h-10 text-[var(--gold)] mb-4" />
            <h3 className="text-2xl md:text-4xl font-display font-bold mb-3">Premium Delivery</h3>
            <p className="text-[var(--muted)] max-w-md text-lg">High-end retouching and 4K video exports delivered in a personalized luxury digital gallery.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

