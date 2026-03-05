import Link from "next/link"
import { ArrowUpRight, FlaskConical, Sparkles, Repeat, ShieldCheck, Factory } from "lucide-react"
import { SERVICES } from "@/lib/constants"
import { GlassCard } from "@/components/shared/glass-card"
import { SectionHeading } from "@/components/shared/section-heading"
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section"

const ICON_MAP: Record<string, React.ElementType> = {
  FlaskConical,
  Sparkles,
  Repeat,
  ShieldCheck,
  Factory,
}

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Our Expertise"
          subtitle="Comprehensive fragrance services from analytical testing to industrial-scale production, powered by science and refined by artistry."
        />
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] || FlaskConical
            return (
              <StaggerItem key={service.slug}>
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <GlassCard className="flex h-full flex-col">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                        <Icon className="h-5 w-5 text-gold" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.shortDescription}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.industries.slice(0, 3).map((ind) => (
                        <span
                          key={ind}
                          className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
