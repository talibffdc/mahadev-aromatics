import Image from "next/image"
import {
  Droplets,
  Wind,
  Sparkle,
  Bath,
  Shirt,
  Leaf,
  Flame,
  Palette,
} from "lucide-react"
import { SectionHeading } from "@/components/shared/section-heading"
import { GlassCard } from "@/components/shared/glass-card"
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section"

const ICON_MAP: Record<string, React.ElementType> = {
  Droplets,
  Wind,
  Sparkle,
  Bath,
  Shirt,
  Leaf,
  Flame,
  Palette,
}

const CATEGORIES = [
  { name: "Perfumes & Attars", icon: "Droplets" },
  { name: "Body Sprays", icon: "Wind" },
  { name: "Shampoo & Hair Care", icon: "Sparkle" },
  { name: "Soaps & Body Wash", icon: "Bath" },
  { name: "Detergents", icon: "Shirt" },
  { name: "Air Fresheners", icon: "Leaf" },
  { name: "Candles & Diffusers", icon: "Flame" },
  { name: "Cosmetics", icon: "Palette" },
]

export function ProductCategories() {
  return (
    <section className="relative bg-secondary/30 py-20 md:py-28 overflow-hidden">
      {/* Background floral image */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/floral-bg-1.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          priority={false}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Products We Create Fragrances For"
          subtitle="From luxury perfumes to everyday essentials, we develop fragrances optimized for every product category."
        />
        <StaggerContainer className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.icon] || Droplets
            return (
              <StaggerItem key={cat.name}>
                <GlassCard className="flex flex-col items-center py-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground">
                    {cat.name}
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
