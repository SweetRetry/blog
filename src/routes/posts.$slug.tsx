import { Link, createFileRoute, notFound } from "@tanstack/react-router"
import { useRef } from "react"
import { ArticleBlocks } from "@/components/article/blocks"
import { ReadingProgress } from "@/components/article/reading-progress"
import { findPost, formatFullDate, readingMinutes, site } from "@/content"

export const Route = createFileRoute("/posts/$slug")({
  loader: ({ params }) => {
    const post = findPost(params.slug)
    if (!post) throw notFound()
    return { post, minutes: readingMinutes(post) }
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {}
    const { post } = loaderData
    return {
      meta: [
        { title: `${post.title} · ${site.name}` },
        { name: "description", content: post.summary },
        { property: "og:type", content: "article" },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.summary },
        { property: "article:published_time", content: post.date },
      ],
      links: [
        {
          rel: "alternate",
          type: "text/markdown",
          href: `/posts/${params.slug}.md`,
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.summary,
            datePublished: post.date,
            inLanguage: "zh-CN",
            isPartOf: { "@type": "Blog", name: site.name },
          }),
        },
      ],
    }
  },
  component: Article,
})

function Article() {
  const { post, minutes } = Route.useLoaderData()
  const ref = useRef<HTMLElement>(null)
  return (
    <>
      <ReadingProgress target={ref} />
      <article ref={ref} className="page-grid px-8 pt-16 pb-32 wide:pt-24">
        <Link
          to="/"
          className="mb-10 justify-self-start text-xs text-muted-foreground transition-colors duration-150 ease-out hover:text-foreground"
        >
          ← 全部文章
        </Link>
        <h1 className="mb-4 text-3xl font-semibold text-balance">
          {post.title}
        </h1>
        <p className="mb-16 text-xs text-muted-foreground lining-nums tabular-nums">
          <time dateTime={post.date}>{formatFullDate(post.date)}</time> ·{" "}
          {minutes} 分钟
        </p>
        <ArticleBlocks blocks={post.blocks} />
      </article>
    </>
  )
}
