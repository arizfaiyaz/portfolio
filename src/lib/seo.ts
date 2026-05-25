import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.author}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.author,
    type: "website",
    images: [
      {
        url: "/images/projects/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ariz Faiyaz developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/projects/og-image.png"],
  },
};
