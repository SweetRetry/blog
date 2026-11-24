import { createFileRoute } from "@tanstack/react-router"
import { llmsTxt, textResponse } from "@/content/feeds"

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: ({ request }) =>
        textResponse(llmsTxt(new URL(request.url).origin), "text/plain"),
    },
  },
})
