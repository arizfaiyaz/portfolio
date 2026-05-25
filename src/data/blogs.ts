export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-arcalist",
    title: "Building Arcalist",
    description:
      "Notes from building a visual bookmark manager and new tab workspace from idea to launch.",
    date: "2026-05-25",
    readingTime: "4 min read",
    tags: ["Arcalist", "Chrome Extension", "Product"],
    content: `
Arcalist started as a simple idea: bookmarks should feel visual, organized, and useful.

This is a placeholder article. I will edit this content later.
    `,
  },
  {
    slug: "debugging-notes",
    title: "Debugging Notes",
    description:
      "A collection of small lessons learned while fixing bugs, broken builds, and confusing errors.",
    date: "2026-05-25",
    readingTime: "3 min read",
    tags: ["Debugging", "Engineering", "Notes"],
    content: `
Debugging is where understanding becomes real.

This is a placeholder article. I will edit this content later.
    `,
  },
];
