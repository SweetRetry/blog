import { createFileRoute } from "@tanstack/react-router"
import { findPost } from "@/content"
import { textResponse } from "@/content/feeds"
import { postToMarkdown } from "@/content/markdown"

export const Route = createFileRoute("/posts/{$slug}.md")({
  server: {
    handlers: {
      GET: ({ params }) => {
        const post = findPost(params.slug)
        return post
          ? textResponse(postToMarkdown(post), "text/markdown")
          : new Response("Not found", { status: 404 })
      },
    },
  },
})
