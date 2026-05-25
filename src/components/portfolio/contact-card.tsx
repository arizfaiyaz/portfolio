"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/profile";

const contactRows = [
  {
    label: "Schedule a free call",
    description:
      "30-minute strategy session to discuss work, ideas, or collaboration.",
    href: profile.calendarUrl,
    icon: MessageCircle,
    external: true,
  },
  {
    label: profile.email,
    description:
      "Best for internships, freelance work, collaborations, or project discussions.",
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Connect on X",
    description:
      "Follow my builds, updates, experiments, and random tech thoughts.",
    href: profile.xUrl,
    icon: ArrowUpRight,
    external: true,
  },
];

export function ContactCard() {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    event.currentTarget.reset();
    setStatus("success");
  }

  return (
    <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
      <Card className="flex flex-col p-5">
        <h3 className="text-lg font-semibold">Get in Touch</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Choose your preferred method to connect and let&apos;s discuss your
          project.
        </p>
        <div className="mt-5 space-y-3">
          {contactRows.map((row) => {
            const Icon = row.icon;

            return (
              <a
                key={row.label}
                href={row.href}
                target={row.external ? "_blank" : undefined}
                rel={row.external ? "noopener noreferrer" : undefined}
                className="flex min-h-24 items-center justify-between gap-4 rounded-xl border border-border p-4 text-sm transition hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-muted/40"
              >
                <span className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>
                    <span className="block font-medium text-foreground">
                      {row.label}
                    </span>
                    <span className="mt-1 block leading-5 text-muted-foreground">
                      {row.description}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </a>
            );
          })}
        </div>
        <p className="mt-auto pt-10 text-sm leading-6 text-muted-foreground">
          Replies within 24 hours. Open to remote, freelance, internships, and
          full-time roles.
        </p>
      </Card>
      <Card className="p-5">
        <h3 className="text-lg font-semibold">Send a Message</h3>
        <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <Input id="name" name="name" autoComplete="name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me a little about what you are building."
            />
          </div>
          <Button type="submit" className="w-full">
            <Send className="h-4 w-4" />
            Send Message
          </Button>
          {status === "error" && (
            <p className="text-sm text-muted-foreground">
              Please fill out all fields before sending.
            </p>
          )}
          {status === "success" && (
            <p className="text-sm text-muted-foreground">
              Thanks, I&apos;ll get back to you soon.
            </p>
          )}
        </form>
      </Card>
    </div>
  );
}
