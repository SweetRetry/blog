import { createFileRoute } from "@tanstack/react-router"
import { sitemap, textResponse } from "@/content/feeds"

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) =>
        textResponse(sitemap(new URL(request.url).origin), "application/xml"),
    },
  },
})
