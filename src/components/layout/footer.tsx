import Link from "next/link";
import { SocialLinks } from "@/components/portfolio/social-links";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/data/profile";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  const footerSocials = ["X", "Email", "GitHub", "LinkedIn"]
    .map((label) => profile.socials.find((social) => social.label === label))
    .filter((social): social is (typeof profile.socials)[number] => Boolean(social));

  return (
    <footer className="mx-auto w-full max-w-[960px] px-4 pb-10 pt-4">
      <Separator className="mb-7" />
      <div className="flex flex-col gap-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© 2026 {profile.name}</p>
        <div className="flex items-center gap-5">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <SocialLinks links={footerSocials} compact />
      </div>
    </footer>
  );
}
