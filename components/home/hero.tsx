"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, FlaskConical, Sparkles, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

function FloatingMolecule({
  size,
  x,
  y,
  delay,
  duration,
}: {
  size: number
  x: string
  y: string
  delay: number
  duration: number
}) {
  return (
    <motion.div
      className="absolute rounded-full border border-gold/20"
      style={{ width: size, height: size, left: x, top: y }}
      animate={{
        y: [0, -20, 0, 15, 0],
        opacity: [0.15, 0.3, 0.15],
        scale: [1, 1.05, 1, 0.95, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  )
}

function FloatingDot({
  x,
  y,
  delay,
}: {
  x: string
  y: string
  delay: number
}) {
  return (
    <motion.div
      className="absolute h-1 w-1 rounded-full bg-gold/30"
      style={{ left: x, top: y }}
      animate={{
        opacity: [0, 0.6, 0],
        scale: [0.5, 1.2, 0.5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image from development section */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/floral-bg-3.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background/70 backdrop-blur-sm" />

      {/* Floating molecules */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <FloatingMolecule size={120} x="10%" y="15%" delay={0} duration={8} />
        <FloatingMolecule size={80} x="75%" y="20%" delay={1.5} duration={10} />
        <FloatingMolecule size={60} x="60%" y="65%" delay={3} duration={7} />
        <FloatingMolecule size={100} x="85%" y="55%" delay={0.5} duration={9} />
        <FloatingMolecule size={40} x="25%" y="75%" delay={2} duration={6} />
        <FloatingDot x="20%" y="30%" delay={0} />
        <FloatingDot x="50%" y="20%" delay={1} />
        <FloatingDot x="70%" y="70%" delay={2} />
        <FloatingDot x="30%" y="60%" delay={0.5} />
        <FloatingDot x="80%" y="40%" delay={1.5} />
        <FloatingDot x="45%" y="80%" delay={2.5} />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-32 md:px-6 md:py-40">
        <div className="max-w-3xl">
          {/* Certification pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-wrap gap-2"
          >
            {["ISO 9001:2015", "IFRA Compliant", "GMP Certified"].map(
              (cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-xs font-medium text-gold"
                >
                  {cert}
                </span>
              )
            )}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl text-balance"
          >
            Custom Fragrance Development &{" "}
            <span className="text-gold-gradient">Aroma Testing</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            From GCMS analysis to bespoke perfumery, we deliver precision
            fragrance solutions for FMCG brands, perfume houses, and cosmetic
            manufacturers worldwide.
          </motion.p>

          {/* Service pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {[
              { icon: FlaskConical, label: "GCMS Analysis" },
              { icon: Sparkles, label: "Custom Fragrances" },
              { icon: ShieldCheck, label: "Quality Testing" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                <Icon className="h-3.5 w-3.5 text-gold" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium"
            >
              <Link href="/contact">
                Request Custom Fragrance
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gold/30 text-foreground hover:bg-gold/10 hover:border-gold/50"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
