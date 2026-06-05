"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Mail, MapPin, Phone } from "lucide-react";
import { photographer } from "@/data/mockData";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#wedding", label: "Photography" },
    { href: "/services#portrait", label: "Videography" },
    { href: "/services#fashion", label: "Editing" },
    // { href: "/services#travel", label: "Travel Photography" },
    // { href: "/services#wildlife", label: "Wildlife Photography" },
  ],
  social: [
    { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
    { href: "https://www.youtube.com/", label: "You tube", icon: YoutubeIcon },
    // { href: "https://linkedin.com", label: "LinkedIn" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--charcoal)] border-t border-[var(--border)]">
      {/* Top gradient line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-50" />

      <div className="container mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="space-y-6">
            <Logo />
            <p className="text-[var(--muted)] text-sm leading-relaxed max-w-xs">
              {photographer.shortBio}
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href={`mailto:${photographer.email}`}
                className="flex items-center gap-3 text-sm text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
              >
                <Mail className="w-4 h-4" />
                {photographer.email}
              </a>
              <a
                href={`tel:${photographer.phone}`}
                className="flex items-center gap-3 text-sm text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                {photographer.phone}
              </a>
              <div className="flex items-start gap-3 text-sm text-[var(--muted)]">
                <MapPin className="w-4 h-4 mt-0.5" />
                {photographer.location}
              </div>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--gold)] transition-colors cursor-hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--gold)] transition-colors cursor-hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter column */}
          <div>
            {/* <h4 className="text-sm font-medium uppercase tracking-wider mb-6">
              Stay Updated
            </h4>
            <p className="text-sm text-[var(--muted)] mb-4">
              Subscribe to receive the latest updates, tips, and exclusive
              offers.
            </p> */}
            {/* <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-[var(--glass)] border border-[var(--glass-border)] rounded-sm text-sm placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
              />
              <motion.button
                type="submit"
                className="w-full px-4 py-3 bg-[var(--gold)] text-[var(--obsidian)] font-medium uppercase tracking-wider text-sm rounded-sm hover:bg-[var(--gold-light)] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form> */}

            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--muted)]">
            © {currentYear} {photographer.name}. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-[var(--muted)]">
            <Link
              href="/privacy"
              className="hover:text-[var(--gold)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[var(--gold)] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--obsidian)] to-transparent pointer-events-none" />
    </footer>
  );
}
