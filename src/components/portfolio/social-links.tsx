import { ExternalLink, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import type { SocialLink } from "@/types/portfolio";
import { cn } from "@/lib/utils";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  mail: Mail,
};

export function SocialLinks({
  links,
  compact = false,
}: {
  links: SocialLink[];
  compact?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-3", compact && "gap-2")}>
      {links.map((link) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap] ?? ExternalLink;

        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
            aria-label={`Open ${link.label}`}
            className={cn(
              "inline-flex items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:text-foreground",
              compact ? "h-9 w-9" : "h-10 w-10",
            )}
          >
            <Icon className={compact ? "h-4 w-4" : "h-[18px] w-[18px]"} />
          </a>
        );
      })}
    </div>
  );
}
