import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = "https://lekanokelola.com";
const title = "Lekan Okelola | Backend & Full-Stack Engineer";
const description =
  "Backend and Full-Stack Engineer specializing in Node.js, NestJS, TypeScript, FastAPI, PostgreSQL, React, AWS and Docker. View projects, experience and contact information.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Lekan Okelola",
  },
  description,
  applicationName: "Lekan Okelola Portfolio",
  authors: [{ name: "Lekan Okelola", url: siteUrl }],
  creator: "Lekan Okelola",
  publisher: "Lekan Okelola",
  keywords: [
    "Lekan Okelola",
    "Backend Engineer",
    "Full-Stack Engineer",
    "Node.js",
    "NestJS",
    "TypeScript",
    "FastAPI",
    "PostgreSQL",
    "React",
    "Next.js",
    "React Native",
    "AWS",
    "Docker",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title,
    description,
    siteName: "Lekan Okelola Portfolio",
    images: [
      {
        url: "/images/my-pix.png",
        width: 1200,
        height: 1600,
        alt: "Lekan Okelola, Backend and Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/my-pix.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lekan Okelola",
  url: siteUrl,
  image: `${siteUrl}/images/my-pix.png`,
  email: "mailto:okelolalekan2019@gmail.com",
  jobTitle: "Backend & Full-Stack Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  knowsAbout: [
    "Node.js",
    "NestJS",
    "TypeScript",
    "FastAPI",
    "PostgreSQL",
    "React",
    "Next.js",
    "React Native",
    "AWS",
    "Docker",
  ],
  sameAs: [
    "https://github.com/lasmor2",
    "https://www.linkedin.com/in/lekan-okelola-17b828285/",
  ],
};

const themeScript = `
  (function () {
    try {
      var key = "portfolio-theme";
      var saved = localStorage.getItem(key);
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var theme = saved === "light" || saved === "dark" ? saved : (prefersDark ? "dark" : "light");
      document.documentElement.dataset.theme = theme;
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch (error) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
