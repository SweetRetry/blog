import type { Block, Post } from "./types"

const modules = import.meta.glob<{ default: Post }>("./posts/*.ts", {
  eager: true,
})

export const posts: Post[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => b.date.localeCompare(a.date))

export function findPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}

export function postsByYear() {
  const groups = new Map<string, Post[]>()
  for (const p of posts) {
    const year = p.date.slice(0, 4)
    groups.set(year, [...(groups.get(year) ?? []), p])
  }
  return [...groups]
}

const CHARS_PER_MINUTE = 400

function blockText(b: Block): string {
  switch (b.type) {
    case "trace":
      return b.steps.map((s) => (s.kind === "tool" ? s.call : s.text)).join("")
    case "code":
      return b.code
    case "diagram":
      return ""
    case "list":
      return b.items.map((item) => (item.lead ?? "") + item.text).join("")
    case "p":
      return b.text + (b.note ?? "")
    default:
      return b.text
  }
}

export function readingMinutes(post: Post) {
  const chars = post.blocks.map(blockText).join("").length
  return Math.max(1, Math.round(chars / CHARS_PER_MINUTE))
}

export const formatListDate = (d: string) => d.slice(5).replace("-", ".")
export const formatFullDate = (d: string) => d.replaceAll("-", ".")

export const site = {
  name: "SweetRetry",
  intro: "记录一些突发的思考。",
  description:
    "一个关于 AI 与 agent 的个人博客，作者用中文写给正在做 agent 的同行。",
}
