import type { Block, Post } from "./types"

function blockToMarkdown(b: Block): string {
  switch (b.type) {
    case "lead":
    case "p":
      return b.type === "p" && b.note
        ? `${b.text}\n\n> 旁注：${b.note}`
        : b.text
    case "h2":
      return `## ${b.text}`
    case "list":
      return b.items
        .map((item) =>
          item.lead ? `- **${item.lead}。**${item.text}` : `- ${item.text}`
        )
        .join("\n")
    case "code":
      return "```\n" + b.code + "\n```"
    case "quote":
      return `> ${b.text}`
    case "trace":
      return b.steps
        .map((s, i) =>
          s.kind === "tool"
            ? `${i + 1}. tool: \`${s.call}\` (${s.duration})`
            : `${i + 1}. ${s.kind}: ${s.text}`
        )
        .join("\n")
    case "diagram":
      return `${b.caption}\n\n\`\`\`text\n${b.fallback}\n\`\`\``
  }
}

export function postToMarkdown(post: Post) {
  return [
    `# ${post.title}`,
    `${post.date.replaceAll("-", ".")}`,
    `> ${post.summary}`,
    ...post.blocks.map(blockToMarkdown),
  ].join("\n\n")
}
