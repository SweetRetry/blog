import { createFileRoute } from "@tanstack/react-router"
import { Page } from "@/components/page"
import { Button } from "@/components/ui/button"
import { site } from "@/content"

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: `关于 · ${site.name}` }] }),
  component: About,
})

function About() {
  return (
    <Page>
      <p className="mb-6 text-xl">
        这里记录我对 AI 与 agent 的思考，写给正在做 agent 的同行。
      </p>
      <Button
        size="sm"
        nativeButton={false}
        render={<a href="/rss.xml" />}
        className="mb-16 justify-self-start"
      >
        订阅 RSS
      </Button>
    </Page>
  )
}
