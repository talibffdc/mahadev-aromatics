import { cn } from "@/lib/utils"
import { type ReactNode } from "react"

export function GlassCard({
  children,
  className,
  hover = true,
}: {
  children: ReactNode
  className?: string
  hover?: boolean
}) {
  return (
    <div
      className={cn(
        "glass rounded-xl p-6 transition-all duration-300",
        hover && "glass-hover",
        className
      )}
    >
      {children}
    </div>
  )
}
