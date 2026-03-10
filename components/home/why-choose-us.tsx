import Image from "next/image"
import { Crown, Microscope, TrendingUp, Gem } from "lucide-react"
import { USP_ITEMS } from "@/lib/constants"
import { SectionHeading } from "@/components/shared/section-heading"
import { GlassCard } from "@/components/shared/glass-card"
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section"

const ICON_MAP: Record<string, React.ElementType> = {
  Crown,
  Microscope,
  TrendingUp,
  Gem,
}

export function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background floral image */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/floral-bg-2.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          priority={false}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Why Choose Mahadev Aromatic"
          subtitle="Two decades of excellence in fragrance science, combining traditional perfumery artistry with cutting-edge analytical capabilities."
        />
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {USP_ITEMS.map((item) => {
            const Icon = ICON_MAP[item.icon] || Crown
            return (
              <StaggerItem key={item.title}>
                <GlassCard className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </GlassCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
