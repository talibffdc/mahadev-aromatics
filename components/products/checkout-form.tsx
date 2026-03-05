"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ShoppingBag, CreditCard, CheckCircle2 } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)
}

export function CheckoutForm() {
  const { items, totalPrice, clearCart } = useCart()
  const router = useRouter()
  const [submitted, setSubmitted] = useState(false)

  if (items.length === 0 && !submitted) {
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

  if (submitted) {
    return (
      <div className="mt-12 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold/10">
          <CheckCircle2 className="h-10 w-10 text-gold" />
        </div>
        <h2 className="mt-6 font-serif text-2xl font-bold text-foreground">
          Order Confirmed!
        </h2>
        <p className="mt-2 text-muted-foreground">
          Thank you for your order. A confirmation email has been sent to your email address.
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Order ID: MA-{Date.now().toString(36).toUpperCase()}
        </p>
        <Button
          asChild
          className="mt-8 bg-gold text-primary-foreground hover:bg-gold-dark font-medium"
        >
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  const shipping = totalPrice >= 999 ? 0 : 99
  const grandTotal = totalPrice + shipping

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    clearCart()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-3">
      {/* Form */}
      <div className="lg:col-span-2 space-y-8">
        {/* Customer Info */}
        <GlassCard>
          <h2 className="font-serif text-lg font-bold text-foreground">
            Customer Information
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name" className="text-foreground">Full Name</Label>
              <Input id="name" required placeholder="Your full name" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input id="email" type="email" required placeholder="you@example.com" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="phone" className="text-foreground">Phone</Label>
              <Input id="phone" type="tel" required placeholder="+91 98765 43210" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="company" className="text-foreground">Company (Optional)</Label>
              <Input id="company" placeholder="Company name" className="mt-1" />
            </div>
          </div>
        </GlassCard>

        {/* Shipping */}
        <GlassCard>
          <h2 className="font-serif text-lg font-bold text-foreground">
            Shipping Address
          </h2>
          <div className="mt-4 grid gap-4">
            <div>
              <Label htmlFor="address" className="text-foreground">Address</Label>
              <Textarea id="address" required placeholder="Street address, building, floor..." className="mt-1" />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <Label htmlFor="city" className="text-foreground">City</Label>
                <Input id="city" required placeholder="City" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="state" className="text-foreground">State</Label>
                <Input id="state" required placeholder="State" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="pincode" className="text-foreground">PIN Code</Label>
                <Input id="pincode" required placeholder="110001" className="mt-1" />
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Payment */}
        <GlassCard>
          <h2 className="font-serif text-lg font-bold text-foreground">
            Payment Method
          </h2>
          <div className="mt-4 flex items-center gap-3 rounded-lg border border-gold/20 bg-gold/5 p-4">
            <CreditCard className="h-5 w-5 text-gold" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Cash on Delivery / Bank Transfer
              </p>
              <p className="text-xs text-muted-foreground">
                Online payment gateway integration coming soon. Currently accepting COD and direct bank transfers.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Order Summary */}
      <div>
        <GlassCard className="sticky top-28">
          <h2 className="font-serif text-lg font-bold text-foreground">
            Order Summary
          </h2>
          <div className="mt-4 space-y-3">
            {items.map((item) => {
              const price = item.variant.discountPrice ?? item.variant.price
              return (
                <div key={item.variant.id} className="flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-xs font-medium text-foreground">
                      {item.product.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.variant.name} x {item.quantity}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-foreground">
                    {formatPrice(price * item.quantity)}
                  </span>
                </div>
              )
            })}
          </div>
          <div className="gold-line my-4" />
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground">{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-foreground">
                {shipping === 0 ? "Free" : formatPrice(shipping)}
              </span>
            </div>
            <div className="gold-line" />
            <div className="flex justify-between font-serif text-lg font-bold">
              <span className="text-foreground">Total</span>
              <span className="text-gold">{formatPrice(grandTotal)}</span>
            </div>
          </div>
          <Button
            type="submit"
            className="mt-6 w-full bg-gold text-primary-foreground hover:bg-gold-dark font-medium"
            size="lg"
          >
            Place Order
          </Button>
        </GlassCard>
      </div>
    </form>
  )
}
