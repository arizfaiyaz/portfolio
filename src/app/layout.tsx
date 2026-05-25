import type { Metadata, Viewport } from "next";
import { Inconsolata } from "next/font/google";
import type { ReactNode } from "react";
import { PageShell } from "@/components/layout/page-shell";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { defaultMetadata } from "@/lib/seo";
import "./globals.css";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

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
