import type { Metadata, Viewport } from "next";
import { Inconsolata } from "next/font/google";
import type { ReactNode } from "react";
import { PageShell } from "@/components/layout/page-shell";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "./globals.css";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ariz Faiyaz | Backend & Full Stack Developer",
  verification: {
    google: "k6_pejfpA1-IRL-TXSnnUTFzK8K5lXYOl3hM5ofuE0M",
  },
  description:
    "Portfolio of Ariz Faiyaz, a backend and full-stack developer building scalable APIs, MERN stack apps, PostgreSQL systems, Docker-based workflows, and real-world web products.",
  keywords: [
    "Ariz Faiyaz",
    "arizfaiyaz",
    "arizFaiyaz",
    "Nishu",
    "NishuFaiyaz",
    "arizfaiyaz web dev",
    "Ariz Faiyaz portfolio",
    "Backend Developer",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Node.js Developer",
    "PostgreSQL Developer",
  ],
  authors: [{ name: "Ariz Faiyaz" }],
  creator: "Ariz Faiyaz",
  openGraph: {
    title: "Ariz Faiyaz | Backend & Full Stack Developer",
    description:
      "Backend and full-stack developer focused on scalable APIs, MERN apps, PostgreSQL, Docker, and product engineering.",
    url: "https://arizfaiyaz.vercel.app/",
    siteName: "Ariz Faiyaz Portfolio",
    type: "website",
    images: [
      {
        url: "https://arizfaiyaz.vercel.app/",
        width: 1200,
        height: 630,
        alt: "Ariz Faiyaz Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ariz Faiyaz | Backend & Full Stack Developer",
    description:
      "Portfolio of Ariz Faiyaz, backend and full-stack developer.",
    images: ["https://arizfaiyaz.vercel.app/"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inconsolata.variable} font-sans antialiased`}>
        <ThemeProvider>
          <PageShell>{children}</PageShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
