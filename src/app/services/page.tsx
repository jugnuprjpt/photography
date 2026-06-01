"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Button, GlowButton } from "@/components/ui/Button";
import { services, faqs, photographer } from "@/data/mockData";
import { useLenis } from "@/hooks";

const pricingPlans = [
  {
    name: "Essential",
    description: "Perfect for personal projects and small events",
    price: 25000,
    popular: false,
    features: [
      "3-hour coverage",
      "1 photographer",
      "50 edited photos",
      "Online gallery",
      "2-week turnaround",
      "Digital delivery",
    ],
  },
  {
    name: "Professional",
    description: "Ideal for weddings and commercial projects",
    price: 80000,
    popular: true,
    features: [
      "8-hour coverage",
      "2 photographers",
      "200+ edited photos",
      "Premium online gallery",
      "Photo album included",
      "4-week turnaround",
      "Rush delivery option",
      "Print rights",
    ],
  },
  {
    name: "Premium",
    description: "Full-service experience with exclusive features",
    price: 200000,
    popular: false,
    features: [
      "Full day coverage (12+ hours)",
      "Lead photographer + assistant",
      "500+ edited photos",
      "Pre-event consultation",
      "Custom photo album",
      "Canvas print",
      "Same-day teaser",
      "Video highlights",
      "Commercial usage rights",
      "Priority support",
    ],
  },
];

export default function ServicesPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

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

  const toggleFAQ = (id: string) => {
    setOpenFAQ((prev) => (prev === id ? null : id));
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
              src="https://images.pexels.com/photos/1536617/pexels-photo-1536617.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Services hero"
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
              Services
              <span className="w-12 h-[1px] bg-[var(--gold)]" />
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Photography <span className="text-gradient">Services</span>
            </motion.h1>

            <motion.p
              className="text-lg text-[var(--muted)] max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              From intimate portraits to grand weddings, I offer comprehensive
              photography packages tailored to your unique vision and needs.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="group relative overflow-hidden rounded-sm glass cursor-hover"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="grid md:grid-cols-2">
                    {/* Image */}
                    <div className="relative aspect-[4/3] md:aspect-auto">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs uppercase tracking-wider text-[var(--gold)]">
                            {service.duration}
                          </span>
                          {service.popular && (
                            <span className="flex items-center gap-1 text-xs bg-[var(--gold)] text-[var(--obsidian)] px-2 py-0.5 rounded-full">
                              <Sparkles className="w-3 h-3" />
                              Popular
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-[var(--gold)] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-[var(--muted)] text-sm mb-4">
                          {service.description}
                        </p>

                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2 text-sm text-[var(--foreground)]"
                            >
                              <Check className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 4 && (
                            <li className="text-sm text-[var(--muted)]">
                              +{service.features.length - 4} more features
                            </li>
                          )}
                        </ul>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <div>
                          <span className="text-sm text-[var(--muted)]">Starting from</span>
                          <p className="text-2xl font-display font-bold text-[var(--gold)]">
                            ₹{service.price.toLocaleString()}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-24 bg-[var(--charcoal)]">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-4 block">
                Pricing
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Choose Your <span className="text-gradient">Package</span>
              </h2>
              <p className="text-[var(--muted)] mt-4 max-w-lg mx-auto">
                Transparent pricing with no hidden fees. All packages include
                professional editing and delivery.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`relative p-8 rounded-sm ${
                    plan.popular
                      ? "bg-[var(--gold)] text-[var(--obsidian)] scale-105 z-10"
                      : "glass"
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[var(--obsidian)] text-[var(--gold)] text-xs uppercase tracking-wider px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                  <p
                    className={`text-sm mb-6 ${
                      plan.popular
                        ? "text-[var(--obsidian)]/70"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-display font-bold">
                      ₹{plan.price.toLocaleString()}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.popular
                          ? "text-[var(--obsidian)]/70"
                          : "text-[var(--muted)]"
                      }`}
                    >
                      {" "}
                      onwards
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 ${
                            plan.popular
                              ? "text-[var(--obsidian)]"
                              : "text-[var(--gold)]"
                          }`}
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <GlowButton
                      className={`w-full ${
                        plan.popular
                          ? "bg-[var(--obsidian)] text-[var(--gold)]"
                          : ""
                      }`}
                    >
                      Get Started
                    </GlowButton>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-4 block">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  className="glass rounded-sm overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between cursor-hover"
                  >
                    <span className="text-left font-medium">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-[var(--gold)]" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-4 text-[var(--muted)]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[var(--charcoal)]">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to <span className="text-gradient">Get Started?</span>
            </motion.h2>
            <motion.p
              className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Let&apos;s discuss your project and create a custom package that fits
              your needs perfectly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <GlowButton>
                <Link href="/contact" className="flex items-center gap-2">
                  Book a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </GlowButton>
              <Button variant="outline">
                <a href={`mailto:${photographer.email}`}>Email Me</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
