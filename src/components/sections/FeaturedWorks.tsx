"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { projects, categories } from "@/data/mockData";
import { useInView } from "@/hooks/useScrollAnimation";

export function FeaturedWorks() {
  const { ref, isInView } = useInView(0.1);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const featuredCategories = ["All", "Documentary"];

  const filteredProjects =
    activeCategory === "All"
      ? projects.filter((p) => p.featured).slice(0, 6)
      : projects.filter((p) => p.category === activeCategory || p.tags?.includes(activeCategory)).slice(0, 6);

  const openLightbox = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--obsidian)]" />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-6">
            <span className="w-12 h-[1px] bg-[var(--gold)]" />
            Portfolio
            <span className="w-12 h-[1px] bg-[var(--gold)]" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Visual <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            A curated collection of my finest work, showcasing stories captured
            through the lens across various genres and occasions.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {featuredCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm uppercase tracking-wider rounded-sm transition-all cursor-hover ${
                activeCategory === category
                  ? "bg-[var(--gold)] text-[var(--obsidian)]"
                  : "bg-transparent text-[var(--muted)] hover:text-[var(--foreground)] border border-[var(--glass-border)]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid - Masonry Style */}
        <motion.div
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="break-inside-avoid group cursor-hover"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="relative overflow-hidden rounded-sm"
                  onClick={() => openLightbox(project)}
                >
                  <div
                    className={`relative ${
                      index % 3 === 0
                        ? "aspect-[4/5]"
                        : index % 3 === 1
                        ? "aspect-[3/4]"
                        : "aspect-[4/3]"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* View icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-16 h-16 rounded-full bg-[var(--gold)] flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-[var(--obsidian)]" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-xs uppercase tracking-wider text-[var(--gold)]">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-display font-bold mt-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 bg-[var(--obsidian)]/95 backdrop-blur-lg flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 w-12 h-12 rounded-full border border-[var(--glass-border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--gold)] transition-colors cursor-hover z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[var(--glass-border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--gold)] transition-colors cursor-hover z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[var(--glass-border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--gold)] transition-colors cursor-hover z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <motion.div
                className="relative w-full max-w-5xl h-[80vh] mx-24"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <Image
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* Info bottom */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[var(--gold)]">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl font-display font-bold mt-1">
                      {selectedProject.title}
                    </h2>
                    <p className="text-sm text-[var(--muted)] mt-2 max-w-md">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div className="text-sm text-[var(--muted)]">
                    <span className="text-[var(--gold)]">{currentImageIndex + 1}</span>
                    {" / "}
                    {selectedProject.images.length}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
            Explore Visual Stories
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
