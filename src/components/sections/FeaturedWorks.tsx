"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/mockData";
import { useInView } from "@/hooks/useScrollAnimation";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

export function FeaturedWorks() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--obsidian)]" />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-4">
              <span className="w-8 h-[1px] bg-[var(--gold)]" />
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Featured <span className="text-gradient">Works</span>
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-[var(--gold)] cursor-hover"
          >
            <span className="uppercase tracking-wider text-sm font-medium">
              View All Projects
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Projects Grid - Mixed layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative cursor-hover ${
                index === 0 || index === 3
                  ? "md:col-span-2 lg:col-span-2"
                  : ""
              }`}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Link href={`/portfolio/${project.id}`}>
                <div
                  className={`relative overflow-hidden rounded-sm ${
                    index === 0 || index === 3
                      ? "aspect-[16/9]"
                      : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* Category */}
                    <motion.span
                      className="text-xs uppercase tracking-wider text-[var(--gold)] mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                    >
                      {project.category}
                    </motion.span>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-white mb-2 group-hover:text-[var(--gold)] transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 line-clamp-2">
                      {project.description}
                    </p>

                    {/* View project button */}
                    <motion.div
                      className="mt-4 flex items-center gap-2 text-[var(--gold)] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                    >
                      <span className="text-sm uppercase tracking-wider">
                        View Project
                      </span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[var(--gold)] opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[var(--gold)] opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-10 py-4 border border-[var(--gold)] text-[var(--gold)] uppercase tracking-wider text-sm font-medium rounded-sm hover:bg-[var(--gold)] hover:text-[var(--obsidian)] transition-all duration-300 cursor-hover"
          >
            Explore Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
