import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ArticleContent } from "@/components/blogs/article-content";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blogs";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Blog not found | Ariz Faiyaz",
    };
  }

  return {
    title: `${post.title} | Ariz Faiyaz`,
    description: post.description,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-[720px] py-16 md:py-24">
      <Link
        href="/blogs"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to blogs
      </Link>
      <header className="mt-8">
        <h1 className="text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {post.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span>{post.date}</span>
          <span aria-hidden="true">/</span>
          <span>{post.readingTime}</span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} className="bg-background text-muted-foreground">
              {tag}
            </Badge>
          ))}
        </div>
      </header>
      <div className="mt-10 border-t border-border pt-8">
        <ArticleContent content={post.content} />
      </div>
    </article>
  );
}
