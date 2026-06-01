"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Camera, Users, MapPin } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Button } from "@/components/ui/Button";
import { photographer, timeline, awards, equipment } from "@/data/mockData";
import { useInView } from "@/hooks/useScrollAnimation";
import { useLenis } from "@/hooks";

const skills = [
  { name: "Wedding Photography", level: 95 },
  { name: "Portrait Photography", level: 90 },
  { name: "Fashion Photography", level: 88 },
  { name: "Travel Photography", level: 92 },
  { name: "Wildlife Photography", level: 85 },
  { name: "Photo Editing", level: 95 },
  { name: "Color Grading", level: 90 },
  { name: "Lighting Design", level: 88 },
];

export default function AboutPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const heroRef = useInView(0.2);
  const skillsRef = useInView(0.1);

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

      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={heroRef.ref}
          className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--obsidian)] via-transparent to-[var(--obsidian)] z-10" />
            <Image
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="About hero"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>

          <div className="relative z-20 container mx-auto px-6 text-center">
            <motion.span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={heroRef.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="w-12 h-[1px] bg-[var(--gold)]" />
              About Me
              <span className="w-12 h-[1px] bg-[var(--gold)]" />
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={heroRef.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              The Story Behind
              <br />
              <span className="text-gradient">The Lens</span>
            </motion.h1>

            <motion.p
              className="text-lg text-[var(--muted)] max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={heroRef.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {photographer.shortBio}
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src="https://images.pexels.com/photos/3586967/pexels-photo-3586967.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Arjun at work"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -inset-4 border border-[var(--gold)] opacity-20 rounded-sm pointer-events-none" />
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  My <span className="text-gradient">Journey</span>
                </h2>
                <div className="prose prose-lg text-[var(--muted)]">
                  <p>
                    What started as a hobby with a second-hand camera in 2015 has
                    evolved into a lifelong passion for capturing the essence of
                    human emotion and natural beauty. Every click of the shutter is
                    an opportunity to tell a story that words cannot express.
                  </p>
                  <p>
                    Over the years, I&apos;ve had the privilege of working with
                    incredible clients, from couples celebrating their most
                    important day to fashion brands pushing creative boundaries.
                    Each project has taught me something new about light,
                    composition, and the art of storytelling.
                  </p>
                  <p>
                    My philosophy is simple: photography is not just about taking
                    pictures. It&apos;s about freezing moments in time, creating memories
                    that will be cherished for generations. Whether it&apos;s the
                    authentic joy of a wedding, the raw beauty of wildlife, or the
                    creative expression of fashion, I bring the same dedication and
                    artistic vision to every shot.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-[var(--charcoal)]">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-4 block">
                Career Timeline
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                A Journey of <span className="text-gradient">Growth</span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[var(--border)] hidden md:block" />

              {/* Timeline events */}
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <div className="glass p-6 rounded-sm inline-block">
                        <span className="text-[var(--gold)] text-sm font-medium">{event.year}</span>
                        <h3 className="text-xl font-display font-bold mt-2 mb-2">{event.title}</h3>
                        <p className="text-[var(--muted)] text-sm">{event.description}</p>
                        <span className="inline-block mt-3 text-xs uppercase tracking-wider px-3 py-1 bg-[var(--gold)]/10 text-[var(--gold)] rounded-full">
                          {event.type}
                        </span>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--gold)] border-4 border-[var(--obsidian)] z-10" />

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-4 block">
                Recognition
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Awards & <span className="text-gradient">Achievements</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  className="group glass p-6 rounded-sm hover:border-[var(--gold)] transition-colors cursor-hover"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Award className="w-8 h-8 text-[var(--gold)]" />
                    <span className="text-2xl font-display font-bold text-[var(--gold)]">
                      {award.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--gold)] transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] mb-2">{award.organization}</p>
                  <p className="text-sm text-[var(--muted)]">{award.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef.ref} className="py-24 bg-[var(--charcoal)]">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-4 block">
                  Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                  Skills & <span className="text-gradient">Proficiency</span>
                </h2>

                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-[var(--gold)]">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[var(--glass)] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[var(--gold)] rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Equipment */}
                <h3 className="text-2xl font-display font-bold">Equipment</h3>
                <p className="text-[var(--muted)]">
                  I use professional-grade equipment to ensure the highest quality results for every project.
                </p>

                <div className="space-y-6">
                  {equipment.map((category) => (
                    <div key={category.category}>
                      <h4 className="text-sm uppercase tracking-wider text-[var(--gold)] mb-3">
                        {category.category}
                      </h4>
                      <div className="space-y-2">
                        {category.items.map((item) => (
                          <div
                            key={`${item.brand}-${item.model}`}
                            className="flex items-center justify-between text-sm"
                          >
                            <span className="text-[var(--foreground)]">{item.name}</span>
                            <span className="text-[var(--muted)]">
                              {item.brand} {item.model}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let&apos;s Create Something <span className="text-gradient">Beautiful</span>
            </motion.h2>
            <motion.p
              className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Ready to capture your special moments? Let&apos;s discuss your project
              and create memories that last forever.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="primary" arrow>
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
