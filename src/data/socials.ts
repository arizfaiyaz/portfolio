import type { SocialLink } from "@/types/portfolio";

export function createSocials(githubUsername: string, email: string): SocialLink[] {
  return [
    ...(githubUsername.trim()
    ? [
        {
          label: "GitHub",
          href: `https://github.com/${githubUsername}`,
          icon: "github",
        },
      ]
    : []),
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ariz-faiyaz/",
      icon: "linkedin",
    },
    {
      label: "X",
      href: "https://x.com/thatnerdwalaguy",
      icon: "x",
    },
    {
      label: "Email",
      href: `mailto:${email}`,
      icon: "mail",
    },
  ];
}

export const socials = createSocials("arizfaiyaz", "arizfaiyazwork@gmail.com");
