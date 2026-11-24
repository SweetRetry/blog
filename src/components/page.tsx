import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Page({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <main className={cn("page-grid px-8 pt-16 pb-32 wide:pt-24", className)}>
      {children}
    </main>
  )
}
