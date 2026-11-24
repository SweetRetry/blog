import { useEffect, useRef, useState } from "react"
import { Popover } from "@base-ui/react/popover"
import type { Block, ListItem, TraceStep } from "@/content/types"
import { diagrams, type DiagramId } from "@/components/article/diagrams"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const prefersReducedMotion = () =>
  matchMedia("(prefers-reduced-motion: reduce)").matches

export function ArticleBlocks({ blocks }: { blocks: Block[] }) {
  let noteCount = 0
  return blocks.map((b, i) => {
    switch (b.type) {
      case "lead":
        return (
          <p key={i} className="mb-8 text-xl">
            {b.text}
          </p>
        )
      case "h2":
        return (
          <h2
            key={i}
            id={b.id}
            className="mt-10 mb-4 text-xl leading-normal font-semibold text-balance"
          >
            {b.text}
          </h2>
        )
      case "p":
        return b.note ? (
          <NotedParagraph key={i} text={b.text} note={b.note} n={++noteCount} />
        ) : (
          <p key={i} className="mb-6 text-lg">
            {b.text}
          </p>
        )
      case "list":
        return <ArticleList key={i} items={b.items} />
      case "code":
        return <CodeBlock key={i} code={b.code} />
      case "quote":
        return (
          <blockquote
            key={i}
            className="mt-4 mb-10 text-xl before:mb-4 before:block before:h-px before:w-6 before:bg-brand"
          >
            {b.text}
          </blockquote>
        )
      case "trace":
        return <Trace key={i} steps={b.steps} />
      case "diagram":
        return <Diagram key={i} id={b.id} caption={b.caption} />
    }
  })
}

function ArticleList({ items }: { items: ListItem[] }) {
  return (
    <ul className="mb-6 space-y-4 text-lg">
      {items.map((item, idx) => (
        <li key={idx}>
          {item.lead ? (
            <strong className="font-semibold">{item.lead}。</strong>
          ) : null}
          {item.text}
        </li>
      ))}
    </ul>
  )
}

function Diagram({ id, caption }: { id: DiagramId; caption: string }) {
  const Graphic = diagrams[id]
  return (
    <figure className="mt-2 mb-8 border-y py-5">
      <figcaption className="mb-4 text-xs text-muted-foreground">
        {caption}
      </figcaption>
      <div className="overflow-x-auto">
        <Graphic />
      </div>
    </figure>
  )
}

function NotedParagraph({
  text,
  note,
  n,
}: {
  text: string
  note: string
  n: number
}) {
  return (
    <p className="mb-6 text-lg">
      {text}
      <Popover.Root>
        <Popover.Trigger
          openOnHover
          delay={80}
          aria-label={`旁注 ${n}`}
          className="ml-0.5 cursor-pointer align-super text-xs leading-none text-brand"
        >
          {n}
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Positioner side="top" sideOffset={8} collisionPadding={16}>
            <Popover.Popup className="max-w-xs origin-(--transform-origin) rounded-md bg-foreground px-3 py-2 text-xs text-background transition-[opacity,transform] duration-150 ease-out data-ending-style:scale-95 data-ending-style:opacity-0 data-ending-style:duration-100 data-starting-style:scale-95 data-starting-style:opacity-0">
              {note}
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>
    </p>
  )
}

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])

  async function copy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 1400)
  }

  return (
    <div className="relative -mx-6 mt-2 mb-8 rounded-md bg-muted">
      <Button variant="ghost" onClick={copy} className="absolute top-4 right-5">
        {copied ? "已复制" : "复制"}
      </Button>
      <pre className="overflow-x-auto px-6 py-5 font-mono text-sm">
        <code>{code}</code>
      </pre>
    </div>
  )
}

const TRACE_STEP_INTERVAL = 420

function Trace({ steps }: { steps: TraceStep[] }) {
  const [shown, setShown] = useState(steps.length)
  const timer = useRef<number>(undefined)
  useEffect(() => () => clearInterval(timer.current), [])

  function replay() {
    clearInterval(timer.current)
    if (prefersReducedMotion()) return setShown(steps.length)
    setShown(0)
    timer.current = window.setInterval(() => {
      setShown((s) => {
        if (s + 1 >= steps.length) clearInterval(timer.current)
        return s + 1
      })
    }, TRACE_STEP_INTERVAL)
  }

  return (
    <figure className="mt-2 mb-8 grid grid-cols-[4.5rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-1 border-y py-4">
      <div className="col-span-full mb-2 flex items-baseline justify-between text-xs text-muted-foreground">
        <figcaption>运行记录，共 {steps.length} 步</figcaption>
        <Button variant="ghost" onClick={replay}>
          重放
        </Button>
      </div>
      <ol className="contents">
        {steps.map((s, j) => {
          const step = cn(
            "transition-[opacity,transform] duration-280 ease-out",
            j >= shown && "translate-y-1 opacity-0"
          )
          return (
            <li key={j} className="contents">
              <span
                className={cn(
                  step,
                  "text-xs",
                  s.kind === "error"
                    ? "text-destructive"
                    : "text-muted-foreground"
                )}
              >
                {s.kind}
              </span>
              <span
                className={cn(
                  step,
                  "flex items-baseline justify-between gap-4 text-sm"
                )}
              >
                {s.kind === "tool" ? (
                  <>
                    <code className="min-w-0 font-mono break-all">
                      {s.call}
                    </code>
                    <span className="text-xs text-muted-foreground lining-nums tabular-nums">
                      {s.duration}
                    </span>
                  </>
                ) : (
                  <span>{s.text}</span>
                )}
              </span>
            </li>
          )
        })}
      </ol>
    </figure>
  )
}
