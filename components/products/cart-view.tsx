"use client"

import Image from "next/image"
import Link from "next/link"
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)
}

export function CartView() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <div className="mt-12 text-center">
        <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground/30" />
        <p className="mt-4 font-serif text-xl text-muted-foreground">
          Your cart is empty
        </p>
        <Button
          asChild
          className="mt-6 bg-gold text-primary-foreground hover:bg-gold-dark font-medium"
        >
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-3">
      {/* Items */}
      <div className="lg:col-span-2 space-y-4">
        {items.map((item) => {
          const price = item.variant.discountPrice ?? item.variant.price
          return (
            <GlassCard key={item.variant.id} className="flex gap-4">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={item.product.images[0]}
                  alt={item.product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between">
                  <div>
                    <Link
                      href={`/products/${item.product.slug}`}
                      className="font-serif text-sm font-semibold text-foreground hover:text-gold transition-colors"
                    >
                      {item.product.title}
                    </Link>
                    <p className="text-xs text-muted-foreground">
                      {item.variant.name}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.variant.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <div className="flex items-center rounded-md border border-border/60">
                    <button
                      onClick={() =>
                        updateQuantity(item.variant.id, item.quantity - 1)
                      }
                      className="flex h-8 w-8 items-center justify-center text-muted-foreground hover:text-foreground"
                      aria-label="Decrease"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="flex h-8 w-8 items-center justify-center text-xs font-medium text-foreground">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.variant.id, item.quantity + 1)
                      }
                      className="flex h-8 w-8 items-center justify-center text-muted-foreground hover:text-foreground"
                      aria-label="Increase"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <span className="font-serif text-sm font-bold text-gold">
                    {formatPrice(price * item.quantity)}
                  </span>
                </div>
              </div>
            </GlassCard>
          )
        })}
      </div>

      {/* Summary */}
      <div>
        <GlassCard>
          <h2 className="font-serif text-lg font-bold text-foreground">
            Order Summary
          </h2>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground">{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-foreground">
                {totalPrice >= 999 ? "Free" : formatPrice(99)}
              </span>
            </div>
            <div className="gold-line" />
            <div className="flex justify-between font-serif text-lg font-bold">
              <span className="text-foreground">Total</span>
              <span className="text-gold">
                {formatPrice(totalPrice + (totalPrice >= 999 ? 0 : 99))}
              </span>
            </div>
          </div>
          <Button
            asChild
            className="mt-6 w-full bg-gold text-primary-foreground hover:bg-gold-dark font-medium"
            size="lg"
          >
            <Link href="/checkout">Proceed to Checkout</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="mt-2 w-full border-gold/30 text-foreground hover:bg-gold/10 hover:border-gold/50"
          >
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </GlassCard>
      </div>
    </div>
  )
}
