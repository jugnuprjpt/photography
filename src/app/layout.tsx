import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arjun Photography | Capturing Stories Through Light",
  description:
    "Award-winning photographer specializing in wedding, portrait, fashion, travel, and wildlife photography. 8+ years of experience capturing timeless moments.",
  keywords: [
    "photography",
    "wedding photography",
    "portrait photographer",
    "fashion photography",
    "travel photography",
    "wildlife photography",
    "professional photographer",
    "Arjun Photography",
  ],
  authors: [{ name: "Arjun Photography" }],
  openGraph: {
    title: "Arjun Photography | Capturing Stories Through Light",
    description:
      "Award-winning photographer specializing in wedding, portrait, fashion, travel, and wildlife photography.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arjun Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Photography | Capturing Stories Through Light",
    description:
      "Award-winning photographer specializing in wedding, portrait, fashion, travel, and wildlife photography.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {/* Noise overlay for texture */}
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
