import { createFileRoute } from "@tanstack/react-router"
import { textResponse } from "@/content/feeds"

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: ({ request }) =>
        textResponse(
          `User-agent: *\nAllow: /\n\nSitemap: ${new URL(request.url).origin}/sitemap.xml\n`,
          "text/plain"
        ),
    },
  },
})
