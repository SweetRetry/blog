import { posts, site } from "."
import { postToMarkdown } from "./markdown"

const escapeXml = (s: string) =>
  s.replace(
    /[<>&'"]/g,
    (c) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
      })[c]!
  )

const postUrl = (origin: string, slug: string) => `${origin}/posts/${slug}`

export function rss(origin: string) {
  const items = posts
    .map((p) => {
      const url = postUrl(origin, p.slug)
      return `<item><title>${escapeXml(p.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${new Date(p.date).toUTCString()}</pubDate><description>${escapeXml(p.summary)}</description></item>`
    })
    .join("")
  return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${site.name}</title><link>${origin}</link><description>${escapeXml(site.intro)}</description><language>zh-CN</language>${items}</channel></rss>`
}

export function sitemap(origin: string) {
  const urls = [
    `${origin}/`,
    `${origin}/about`,
    ...posts.map((p) => postUrl(origin, p.slug)),
  ]
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((u) => `<url><loc>${u}</loc></url>`).join("")}</urlset>`
}

export function llmsTxt(origin: string) {
  const list = posts.length
    ? posts
        .map(
          (p) => `- [${p.title}](${postUrl(origin, p.slug)}.md): ${p.summary}`
        )
        .join("\n")
    : "这里还没有文章。"
  return `# ${site.name}\n\n> ${site.description}\n\n每篇文章都有 Markdown 版本，在文章地址后加 .md。全部正文见 ${origin}/llms-full.txt。\n\n## 文章\n\n${list}\n`
}

export function llmsFullTxt() {
  return [
    `# ${site.name}`,
    `> ${site.description}`,
    ...posts.map(postToMarkdown),
  ].join("\n\n---\n\n")
}

export const textResponse = (body: string, type: string) =>
  new Response(body, {
    headers: {
      "Content-Type": `${type}; charset=utf-8`,
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  })
