import type { Metadata } from "next";
import { BlogList } from "@/components/blogs/blog-list";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blogs | Ariz Faiyaz",
  description: "Writing, notes, and build logs by Ariz Faiyaz.",
};

export default function BlogsPage() {
  return (
    <section className="py-16 md:py-24">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        BLOGS
      </p>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
          Writing, notes, and build logs
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          A collection of things I learn, build, debug, and think about while
          working on software.
        </p>
      </div>
      <div className="mt-10">
        <BlogList posts={blogPosts} />
      </div>
    </section>
  );
}
