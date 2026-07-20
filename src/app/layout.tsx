import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Root layout for the entire application.
 * Sets up fonts, metadata, and global HTML structure.
 * All pages inherit from this layout.
 */
export const metadata: Metadata = {
  title: {
    default: "Bikin.In | Jasa Pembuatan Website Profesional",
    template: "%s | Bikin.In",
  },
  description:
    "Bikin.In - Jasa pembuatan website profesional, murah, dan cepat. Tersedia paket template, semi custom, dan full system custom. Gratis hosting, domain, dan SSL.",
  keywords: [
    "jasa pembuatan website",
    "buat website murah",
    "web developer indonesia",
    "website company profile",
    "landing page",
    "e-commerce website",
    "custom web application",
    "template website",
    "jasa website profesional",
  ],
  authors: [{ name: "Bikin.In" }],
  creator: "Bikin.In",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bikin.in",
    siteName: "Bikin.In",
    title: "Bikin.In | Jasa Pembuatan Website Profesional",
    description:
      "Jasa pembuatan website profesional, murah, dan cepat. Mulai dari Rp 100.000.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bikin.In - Jasa Pembuatan Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bikin.In | Jasa Pembuatan Website Profesional",
    description:
      "Jasa pembuatan website profesional, murah, dan cepat. Mulai dari Rp 100.000.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bikin.In",
    url: "https://bikin.in",
    logo: "https://bikin.in/images/logo.png",
    description:
      "Jasa pembuatan website profesional, murah, dan cepat.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-812-3456-789",
      contactType: "customer service",
      availableLanguage: ["Indonesian", "English"],
    },
  };

  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
