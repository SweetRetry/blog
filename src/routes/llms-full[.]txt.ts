import { createFileRoute } from "@tanstack/react-router"
import { llmsFullTxt, textResponse } from "@/content/feeds"

export const Route = createFileRoute("/llms-full.txt")({
  server: {
    handlers: {
      GET: () => textResponse(llmsFullTxt(), "text/plain"),
    },
  },
})
