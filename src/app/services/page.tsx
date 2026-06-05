"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Camera, SlidersHorizontal, Film, Download } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { useLenis } from "@/hooks";

const steps = [
  {
    id: "01",
    duration: "1-3 days",
    icon: Calendar,
    title: "Planning",
    description: "Deep-dive consultation to understand your vision, location scouting, mood boarding, and creative brief development.",
  },
  {
    id: "02",
    duration: "Shoot day",
    icon: Camera,
    title: "Shooting",
    description: "Professional on-site or studio production with premium gear — Sony Alpha, ARRI, drone, and full lighting setup.",
  },
  {
    id: "03",
    duration: "3-7 days",
    icon: SlidersHorizontal,
    title: "Editing",
    description: "Meticulous post-production in Adobe Premiere and DaVinci Resolve — cutting, pacing, and sound design.",
  },
  {
    id: "04",
    duration: "1-2 days",
    icon: Film,
    title: "Review",
    description: "Collaborative review process to ensure the final product exceeds your expectations.",
  },
  {
    id: "05",
    duration: "Delivery day",
    icon: Download,
    title: "Delivery",
    description: "Final handover of high-resolution digital assets via a secure premium online gallery.",
  }
];

export default function ServicesPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useLenis();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light";
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      <Navigation theme={theme} toggleTheme={toggleTheme} />

      <main className="flex-1 pt-32 pb-24 min-h-screen bg-[var(--obsidian)]">
        <div className="container mx-auto px-6">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl"
            >
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-6">
                <span className="w-8 h-[1px] bg-[var(--gold)]" />
                How It Works
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                The Creative<br/>
                <span className="text-[var(--gold)] italic">Process.</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[var(--muted)] max-w-sm text-sm leading-relaxed"
            >
              Five deliberate steps from initial vision to final cinematic delivery.
            </motion.p>
          </div>

          {/* Timeline Section */}
          <div className="relative max-w-5xl mx-auto mt-20">
            {/* Center Line */}
            <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[var(--gold)] opacity-30 md:-translate-x-1/2" />

            {/* Steps */}
            <div className="space-y-16 md:space-y-24">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                const Icon = step.icon;

                return (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative flex flex-col md:flex-row ${isEven ? 'md:justify-start' : 'md:justify-end'} items-start md:items-center pl-20 md:pl-0`}
                  >
                    {/* Number Circle */}
                    <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-[var(--gold)] bg-[var(--obsidian)] flex items-center justify-center z-10 top-0 md:top-1/2 md:-translate-y-1/2">
                      <span className="text-[var(--gold)] text-sm font-medium tracking-wider">{step.id}</span>
                    </div>

                    {/* Card Container */}
                    <div className={`w-full md:w-[45%] ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className={`bg-[var(--charcoal)]/30 border border-[var(--glass-border)] rounded-xl p-8 md:p-10 backdrop-blur-sm ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                        {/* Meta */}
                        <div className={`flex items-center gap-3 text-xs uppercase tracking-widest text-[var(--muted)] mb-6 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          {isEven ? (
                            <>
                              <span>{step.duration}</span>
                              <Icon className="w-4 h-4 text-[var(--gold)]" />
                            </>
                          ) : (
                            <>
                              <Icon className="w-4 h-4 text-[var(--gold)]" />
                              <span>{step.duration}</span>
                            </>
                          )}
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-display font-bold text-white mb-4">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[var(--muted)] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
