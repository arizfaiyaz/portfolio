"use client";

import { Mail, MapPin, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTextSlider } from "@/components/portfolio/animated-text-slider";
import { HoverAvatar } from "@/components/portfolio/hover-avatar";
import { SocialLinks } from "@/components/portfolio/social-links";
import { Badge } from "@/components/ui/badge";
import { fadeUp, staggerContainer } from "@/components/variants/motion-variants";
import { heroRoles } from "@/data/hero-roles";
import { profile } from "@/data/profile";

const meta = [
  { label: profile.location, icon: MapPin },
  { label: profile.email, icon: Mail, href: `mailto:${profile.email}` },
  { label: profile.pronouns, icon: UserRound },
];

export function HeroSection() {
  return (
    <motion.section
      id="home"
      className="grid gap-8 pb-14 pt-12 md:grid-cols-[260px_1fr] md:pb-20 md:pt-16"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUp}>
        <HoverAvatar />
      </motion.div>
      <motion.div variants={fadeUp} className="flex flex-col justify-center">
        <div className="space-y-4">
          <Badge className="w-fit bg-background text-muted-foreground">
            {profile.subtitle}
          </Badge>
          <div>
            <h1 className="text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
              {profile.name}
            </h1>
            <AnimatedTextSlider items={heroRoles} />
          </div>
          <div className="flex flex-wrap gap-2">
            {meta.map((item) => {
              const Icon = item.icon;

              return (
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm text-muted-foreground transition hover:border-foreground/20 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm text-muted-foreground"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </div>
                )
              );
            })}
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            {profile.bio}
          </p>
          <p className="rounded-2xl border border-border bg-card p-4 text-sm leading-6 text-muted-foreground">
            {profile.currentlyBuilding}
          </p>
          <SocialLinks links={profile.socials} />
        </div>
      </motion.div>
    </motion.section>
  );
}
