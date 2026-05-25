export function ArticleContent({ content }: { content: string }) {
  const paragraphs = content
    .trim()
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  if (paragraphs.length === 0) {
    return (
      <p className="text-base leading-8 text-muted-foreground">
        This article is empty for now.
      </p>
    );
  }

  return (
    <div className="space-y-5">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-base leading-8 text-muted-foreground">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
