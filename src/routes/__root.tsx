import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router"
import type { ReactNode } from "react"
import { Page } from "@/components/page"
import { site } from "@/content"
import appCss from "../styles.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: site.name },
      { name: "description", content: site.intro },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: site.name,
        href: "/rss.xml",
      },
      {
        rel: "alternate",
        type: "text/plain",
        title: "llms.txt",
        href: "/llms.txt",
      },
    ],
  }),
  notFoundComponent: NotFound,
  errorComponent: LoadError,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-svh">
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <Page>
      <p className="text-lg">
        这页不存在。可能是链接写错了，
        <Link to="/" className="link-draw">
          回到文章列表
        </Link>
        。
      </p>
    </Page>
  )
}

function LoadError() {
  return (
    <Page>
      <p className="text-xs text-destructive">
        文章没有加载出来。刷新一下试试。
      </p>
    </Page>
  )
}
