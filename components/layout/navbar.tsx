"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_LINKS, COMPANY } from "@/lib/constants"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { totalItems, openMiniCart } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-lg font-bold tracking-wide text-foreground md:text-xl">
            MAHADEV
          </span>
          <span className="text-gold-gradient font-serif text-lg font-bold tracking-wide md:text-xl">
            AROMATIC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-gold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Cart button */}
          <button
            onClick={openMiniCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`Open cart with ${totalItems} items`}
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-bold text-primary-foreground">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </button>
          <Button
            asChild
            className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium"
          >
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>

        {/* Mobile Cart + Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={openMiniCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`Open cart with ${totalItems} items`}
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-bold text-primary-foreground">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </button>
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background border-border">
            <SheetHeader>
              <SheetTitle className="text-left font-serif text-foreground">
                <span className="text-foreground">MAHADEV </span>
                <span className="text-gold-gradient">AROMATIC</span>
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-secondary text-gold"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="gold-line my-4" />
              <Button
                asChild
                className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium"
                onClick={() => setOpen(false)}
              >
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                {COMPANY.phone}
              </p>
            </div>
          </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
