"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/data/mockData";
import { useLenis } from "@/hooks";

const blogCategories = ["All", "Wedding Photography", "Techniques", "Wildlife", "Business"];

export default function BlogPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

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

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

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
              Blog
              <span className="w-12 h-[1px] bg-[var(--gold)]" />
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Stories & <span className="text-gradient">Insights</span>
            </motion.h1>

            <motion.p
              className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Behind-the-scenes stories, photography tips, and creative insights
              from my journey as a professional photographer.
            </motion.p>

            {/* Search */}
            <motion.div
              className="relative max-w-md mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-3 bg-[var(--glass)] border border-[var(--glass-border)] rounded-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
              />
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="sticky top-[72px] z-30 bg-[var(--obsidian)]/95 backdrop-blur-sm border-y border-[var(--border)] py-4">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-2">
              {blogCategories.map((category, index) => (
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

        {/* Featured Post */}
        {activeCategory === "All" && searchQuery === "" && (
          <section className="py-12">
            <div className="container mx-auto px-6">
              <motion.article
                className="relative overflow-hidden rounded-sm group cursor-hover"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-video md:aspect-auto">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--obsidian)] hidden md:block" />
                  </div>

                  <div className="glass p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs uppercase tracking-wider text-[var(--gold)]">
                        {featuredPost.category}
                      </span>
                      <span className="text-xs text-[var(--muted)] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-[var(--gold)] transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-[var(--muted)] mb-6">{featuredPost.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[var(--muted)] flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>

                      <Link
                        href={`/blog/${featuredPost.id}`}
                        className="flex items-center gap-2 text-[var(--gold)] group-hover:gap-3 transition-all"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                <span className="absolute top-4 left-4 text-xs uppercase tracking-wider bg-[var(--gold)] text-[var(--obsidian)] px-3 py-1 rounded-full">
                  Featured
                </span>
              </motion.article>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[var(--muted)]">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="group cursor-hover"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="relative overflow-hidden rounded-sm mb-4">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                        </div>

                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="text-xs uppercase tracking-wider text-[var(--gold)]">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-3 text-xs text-[var(--muted)]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-display font-bold mb-2 group-hover:text-[var(--gold)] transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-sm text-[var(--muted)] line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 text-xs text-[var(--muted)] border border-[var(--glass-border)] px-2 py-1 rounded-full"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 bg-[var(--charcoal)]">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Stay <span className="text-gradient">Inspired</span>
            </motion.h2>
            <motion.p
              className="text-lg text-[var(--muted)] max-w-lg mx-auto mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Subscribe to receive the latest photography tips, behind-the-scenes
              stories, and exclusive offers directly in your inbox.
            </motion.p>
            <motion.form
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-[var(--glass)] border border-[var(--glass-border)] rounded-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
              />
              <Button variant="primary">Subscribe</Button>
            </motion.form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
