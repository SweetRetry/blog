import { useEffect, useState, type RefObject } from "react"

export function ReadingProgress({
  target,
}: {
  target: RefObject<HTMLElement | null>
}) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function update() {
      const el = target.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const scrollable = Math.max(1, r.height - innerHeight)
      setProgress(Math.min(1, Math.max(0, -r.top / scrollable)))
    }
    update()
    addEventListener("scroll", update, { passive: true })
    addEventListener("resize", update)
    return () => {
      removeEventListener("scroll", update)
      removeEventListener("resize", update)
    }
  }, [target])

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-10 h-0.5 origin-left bg-brand transition-transform duration-80 ease-linear"
      style={{ transform: `scaleX(${progress})` }}
    />
  )
}
