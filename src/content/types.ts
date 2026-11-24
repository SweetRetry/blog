import type { DiagramId } from "@/components/article/diagrams"

export type TraceStep =
  | { kind: "think" | "obs" | "error" | "final"; text: string }
  | { kind: "tool"; call: string; duration: string }

export type ListItem = { lead?: string; text: string }

export type Block =
  | { type: "lead"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "p"; text: string; note?: string }
  | { type: "list"; items: ListItem[] }
  | { type: "code"; code: string }
  | { type: "quote"; text: string }
  | { type: "trace"; steps: TraceStep[] }
  | { type: "diagram"; id: DiagramId; caption: string; fallback: string }

export type PostDate = `${number}-${number}-${number}`

export type Post = {
  slug: string
  title: string
  date: PostDate
  summary: string
  blocks: Block[]
}
