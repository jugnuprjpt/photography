"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Share2, Send, Calendar, Clock, CircleCheck as CheckCircle } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Button, GlowButton } from "@/components/ui/Button";
import { photographer } from "@/data/mockData";
import { useLenis } from "@/hooks";

const serviceOptions = [
  "Wedding Photography",
  "Portrait Photography",
  "Fashion Photography",
  "Travel Photography",
  "Wildlife Photography",
  "Commercial Photography",
  "Other",
];

const budgetRanges = [
  "Under 25,000",
  "25,000 - 50,000",
  "50,000 - 100,000",
  "100,000 - 200,000",
  "200,000+",
];

export default function ContactPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    budget: "",
    message: "",
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after success animation
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        budget: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      <Navigation theme={theme} toggleTheme={toggleTheme} />

      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--obsidian)] via-transparent to-[var(--obsidian)] z-10" />
            <Image
              src="https://images.pexels.com/photos/3014858/pexels-photo-3014858.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Contact hero"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>

          <div className="relative z-20 container mx-auto px-6 text-center">
            <motion.span
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="w-12 h-[1px] bg-[var(--gold)]" />
              Contact
              <span className="w-12 h-[1px] bg-[var(--gold)]" />
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Let&apos;s Create <span className="text-gradient">Together</span>
            </motion.h1>

            <motion.p
              className="text-lg text-[var(--muted)] max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Have a project in mind? I&apos;d love to hear about it. Get in touch and
              let&apos;s bring your vision to life.
            </motion.p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-display font-bold mb-8">
                  Get in <span className="text-gradient">Touch</span>
                </h2>

                <div className="space-y-6 mb-12">
                  {/* Email */}
                  <a
                    href={`mailto:${photographer.email}`}
                    className="group flex items-start gap-4 p-6 glass rounded-sm hover:border-[var(--gold)] transition-colors cursor-hover"
                  >
                    <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)] transition-colors">
                      <Mail className="w-5 h-5 text-[var(--gold)] group-hover:text-[var(--obsidian)] transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-[var(--muted)]">{photographer.email}</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${photographer.phone}`}
                    className="group flex items-start gap-4 p-6 glass rounded-sm hover:border-[var(--gold)] transition-colors cursor-hover"
                  >
                    <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)] transition-colors">
                      <Phone className="w-5 h-5 text-[var(--gold)] group-hover:text-[var(--obsidian)] transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-[var(--muted)]">{photographer.phone}</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="group flex items-start gap-4 p-6 glass rounded-sm">
                    <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[var(--gold)]" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-[var(--muted)]">{photographer.location}</p>
                      <p className="text-sm text-[var(--muted)] mt-1">
                        Available for travel worldwide
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    {[
                      { href: "https://instagram.com", label: "Instagram" },
                      { href: "https://twitter.com", label: "Twitter" },
                      { href: "https://linkedin.com", label: "LinkedIn" },
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-[var(--glass-border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all cursor-hover"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Share2 className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Working Hours */}
                <div className="mt-12 p-6 glass rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-[var(--gold)]" />
                    <h3 className="font-medium">Working Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm text-[var(--muted)]">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>By Appointment</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="glass p-8 rounded-sm">
                  <h2 className="text-2xl font-display font-bold mb-6">
                    Book a Session
                  </h2>

                  {isSubmitted ? (
                    <motion.div
                      className="text-center py-12"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      <CheckCircle className="w-16 h-16 text-[var(--gold)] mx-auto mb-4" />
                      <h3 className="text-2xl font-display font-bold mb-2">
                        Thank You!
                      </h3>
                      <p className="text-[var(--muted)]">
                        I&apos;ll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[var(--glass)] border border-[var(--glass-border)] rounded-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                          placeholder="Your name"
                        />
                      </div>

                      {/* Email & Phone */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-[var(--glass)] border border-[var(--glass-border)] rounded-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                            placeholder="email@example.com"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium mb-2"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[var(--glass)] border border-[var(--glass-border)] rounded-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      {/* Service & Date */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="service"
                            className="block text-sm font-medium mb-2"
                          >
                            Service Type *
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-[var(--glass)] border border-[var(--glass-border)] rounded-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--gold)] transition-colors cursor-hover"
                          >
                            <option value="">Select a service</option>
                            {serviceOptions.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="date"
                            className="block text-sm font-medium mb-2"
                          >
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[var(--glass)] border border-[var(--glass-border)] rounded-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Budget */}
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium mb-2"
                        >
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[var(--glass)] border border-[var(--glass-border)] rounded-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--gold)] transition-colors cursor-hover"
                        >
                          <option value="">Select your budget</option>
                          {budgetRanges.map((budget) => (
                            <option key={budget} value={budget}>
                              ₹{budget}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2"
                        >
                          Tell Me About Your Project *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-[var(--glass)] border border-[var(--glass-border)] rounded-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
                          placeholder="Describe your project, venue, number of guests, etc."
                        />
                      </div>

                      {/* Submit */}
                      <GlowButton
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg
                              className="animate-spin h-5 w-5"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Send className="w-4 h-4" />
                            Send Message
                          </span>
                        )}
                      </GlowButton>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-[var(--charcoal)]">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold">
                Studio <span className="text-gradient">Location</span>
              </h2>
            </motion.div>

            <motion.div
              className="relative h-[400px] rounded-sm overflow-hidden glass"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {/* Map placeholder - In production, integrate Google Maps or Mapbox */}
              <div className="absolute inset-0 bg-[var(--glass)] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[var(--gold)] mx-auto mb-4" />
                  <p className="text-lg font-medium">{photographer.location}</p>
                  <p className="text-sm text-[var(--muted)] mt-2">
                    Studio visits by appointment only
                  </p>
                </div>
              </div>

              {/* Decorative grid lines */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(rgba(201,169,98,0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(201,169,98,0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px'
                }} />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
