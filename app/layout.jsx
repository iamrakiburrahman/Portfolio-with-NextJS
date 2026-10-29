import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import CommandPalette from "@/components/CommandPalette";
import DeveloperTerminal from "@/components/DeveloperTerminal";
import GsapCursor from "@/components/gsap/GsapCursor";
import GsapBackground from "@/components/gsap/GsapBackground";
import SmoothScrollProvider from "@/components/gsap/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
  display: "swap",
});

const siteUrl = "https://iamrakiburrahman.netlify.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Md. Rakibur Rahman | Backend & Full Stack Software Engineer",
  description:
    "Explore the portfolio of Md. Rakibur Rahman, a Backend & Full Stack Software Engineer specializing in Node.js, NestJS, TypeScript, PostgreSQL, Prisma, Redis, Docker, and Next.js.",
  keywords: [
    "Md. Rakibur Rahman",
    "Rakibur Rahman",
    "Backend Developer",
    "Full Stack Engineer",
    "Node.js Developer",
    "NestJS Developer",
    "TypeScript Architect",
    "PostgreSQL",
    "Prisma ORM",
    "Redis",
    "Docker",
    "Next.js Portfolio",
    "Software Engineer Bangladesh",
  ],
  authors: [{ name: "Md. Rakibur Rahman", url: siteUrl }],
  creator: "Md. Rakibur Rahman",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Md. Rakibur Rahman | Backend & Full Stack Software Engineer",
    description:
      "Specialized in high-concurrency backend services, clean architecture, REST/GraphQL APIs, relational and NoSQL databases, and modern full-stack web applications.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "Md. Rakibur Rahman Portfolio",
    images: [
      {
        url: `${siteUrl}/profile.webp`,
        width: 1200,
        height: 630,
        alt: "Md. Rakibur Rahman - Backend & Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Rakibur Rahman | Backend & Full Stack Software Engineer",
    description:
      "Architecting scalable backend microservices, REST/GraphQL APIs, and modern full-stack applications with Node.js, NestJS, PostgreSQL & Redis.",
    images: [`${siteUrl}/profile.webp`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md. Rakibur Rahman",
    url: siteUrl,
    jobTitle: "Backend & Full Stack Software Engineer",
    email: "mailto:rakiburrahman307@gmail.com",
    telephone: "+8801749183977",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    sameAs: [
      "https://github.com/iamrakiburrahman",
      "https://linkedin.com/in/iamrakiburrahman",
      "https://www.facebook.com/iamrakiburrahman",
    ],
    knowsAbout: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "Docker",
      "Next.js",
      "React",
      "GraphQL",
      "RESTful APIs",
      "Microservices",
    ],
  };

  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#1c1c22' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} font-primary min-h-screen flex flex-col justify-between selection:bg-accent selection:text-primary relative overflow-x-hidden`}
      >
        <SmoothScrollProvider>
          {/* GSAP Ambient Background & Spotlight Cursor */}
          <GsapBackground />
          <GsapCursor />

          <div className='relative z-10 flex flex-col min-h-screen justify-between'>
            <Header />
            <StairTransition />
            <PageTransition>{children}</PageTransition>
            <Footer />

            {/* Global Interactive Tools */}
            <CommandPalette />
            <DeveloperTerminal />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
