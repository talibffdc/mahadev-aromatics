import { cn } from "@/lib/utils"

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: {
  title: string
  subtitle?: string
  className?: string
  align?: "center" | "left"
}) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "gold-line mt-6 w-24",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  )
}
