"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { projects, categories } from "@/data/mockData";
import { useLenis } from "@/hooks";

export default function PortfolioPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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
    <>
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      <Navigation theme={theme} toggleTheme={toggleTheme} />

      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <motion.span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="w-12 h-[1px] bg-[var(--gold)]" />
              Portfolio
              <span className="w-12 h-[1px] bg-[var(--gold)]" />
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Visual <span className="text-gradient">Stories</span>
            </motion.h1>

            <motion.p
              className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              A curated collection of my finest work, showcasing stories captured
              through the lens across various genres and occasions.
            </motion.p>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="sticky top-[72px] z-30 bg-[var(--obsidian)]/95 backdrop-blur-sm border-y border-[var(--border)] py-4">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 text-sm uppercase tracking-wider rounded-sm transition-all cursor-hover ${
                    activeCategory === category
                      ? "bg-[var(--gold)] text-[var(--obsidian)]"
                      : "bg-transparent text-[var(--muted)] hover:text-[var(--foreground)] border border-[var(--glass-border)]"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid - Masonry Style */}
        <section className="py-12">
          <div className="container mx-auto px-6">
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
          </div>
        </section>

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
      </main>

      <Footer />
    </>
  );
}
