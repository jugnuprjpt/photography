"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import {
  HeroSection,
  AboutPreview,
  StatsSection,
  FeaturedWorks,
  TestimonialsSection,
  ClientsSection,
  CTASection,
} from "@/components/sections";
import { useLenis } from "@/hooks";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isLoading, setIsLoading] = useState(true);

  useLenis();

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light";
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    }
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Handle loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {/* Loading screen */}
      <LoadingScreen />

      {/* Custom cursor - only on desktop */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Navigation */}
      <Navigation theme={theme} toggleTheme={toggleTheme} />

      {/* Main content */}
      <main className="flex-1">
        <HeroSection />
        <AboutPreview />
        <StatsSection />
        <FeaturedWorks />
        <TestimonialsSection />
        <ClientsSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
