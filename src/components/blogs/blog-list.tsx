import { BlogCard } from "@/components/blogs/blog-card";
import type { BlogPost } from "@/data/blogs";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
