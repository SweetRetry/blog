import { createFileRoute } from "@tanstack/react-router"
import { rss, textResponse } from "@/content/feeds"

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: ({ request }) =>
        textResponse(rss(new URL(request.url).origin), "application/rss+xml"),
    },
  },
})
