"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, CreditCard, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { z } from "zod"
import { useCart } from "@/lib/cart-context"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Validation schema
const checkoutSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").regex(/^[\d\s+()-]+$/, "Invalid phone number format"),
  company: z.string().max(100, "Company name is too long").optional().or(z.literal("")),
  address: z.string().min(10, "Please enter a complete address").max(500, "Address is too long"),
  city: z.string().min(2, "Please enter a valid city").max(100, "City name is too long"),
  state: z.string().min(2, "Please enter a valid state").max(100, "State name is too long"),
  pincode: z.string().regex(/^\d{6}$/, "Please enter a valid 6-digit PIN code"),
})

type CheckoutFormData = z.infer<typeof checkoutSchema>
type FormErrors = Partial<Record<keyof CheckoutFormData, string>>

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim()
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)
}

export function CheckoutForm() {
  const { items, totalPrice, clearCart } = useCart()
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    const formData = new FormData(e.currentTarget)
    const data: CheckoutFormData = {
      name: sanitizeInput(formData.get("name") as string || ""),
      email: sanitizeInput(formData.get("email") as string || ""),
      phone: sanitizeInput(formData.get("phone") as string || ""),
      company: sanitizeInput(formData.get("company") as string || ""),
      address: sanitizeInput(formData.get("address") as string || ""),
      city: sanitizeInput(formData.get("city") as string || ""),
      state: sanitizeInput(formData.get("state") as string || ""),
      pincode: sanitizeInput(formData.get("pincode") as string || ""),
    }

    // Validate
    const result = checkoutSchema.safeParse(data)
    
    if (!result.success) {
      const fieldErrors: FormErrors = {}
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof CheckoutFormData
        if (!fieldErrors[field]) {
          fieldErrors[field] = error.message
        }
      })
      setErrors(fieldErrors)
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    clearCart()
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-3" noValidate>
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
              <Input 
                id="name" 
                name="name"
                required 
                placeholder="Your full name" 
                className={`mt-1 ${errors.name ? "border-destructive" : ""}`}
                maxLength={100}
              />
              {errors.name && (
                <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
                  <AlertCircle className="h-3 w-3" />
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input 
                id="email" 
                name="email"
                type="email" 
                required 
                placeholder="you@example.com" 
                className={`mt-1 ${errors.email ? "border-destructive" : ""}`}
              />
              {errors.email && (
                <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
                  <AlertCircle className="h-3 w-3" />
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="phone" className="text-foreground">Phone</Label>
              <Input 
                id="phone" 
                name="phone"
                type="tel" 
                required 
                placeholder="+91 98765 43210" 
                className={`mt-1 ${errors.phone ? "border-destructive" : ""}`}
              />
              {errors.phone && (
                <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
                  <AlertCircle className="h-3 w-3" />
                  {errors.phone}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="company" className="text-foreground">Company (Optional)</Label>
              <Input 
                id="company" 
                name="company"
                placeholder="Company name" 
                className="mt-1" 
                maxLength={100}
              />
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
              <Textarea 
                id="address" 
                name="address"
                required 
                placeholder="Street address, building, floor..." 
                className={`mt-1 ${errors.address ? "border-destructive" : ""}`}
                maxLength={500}
              />
              {errors.address && (
                <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
                  <AlertCircle className="h-3 w-3" />
                  {errors.address}
                </p>
              )}
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <Label htmlFor="city" className="text-foreground">City</Label>
                <Input 
                  id="city" 
                  name="city"
                  required 
                  placeholder="City" 
                  className={`mt-1 ${errors.city ? "border-destructive" : ""}`}
                  maxLength={100}
                />
                {errors.city && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
                    <AlertCircle className="h-3 w-3" />
                    {errors.city}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="state" className="text-foreground">State</Label>
                <Input 
                  id="state" 
                  name="state"
                  required 
                  placeholder="State" 
                  className={`mt-1 ${errors.state ? "border-destructive" : ""}`}
                  maxLength={100}
                />
                {errors.state && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
                    <AlertCircle className="h-3 w-3" />
                    {errors.state}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="pincode" className="text-foreground">PIN Code</Label>
                <Input 
                  id="pincode" 
                  name="pincode"
                  required 
                  placeholder="110001" 
                  className={`mt-1 ${errors.pincode ? "border-destructive" : ""}`}
                  maxLength={6}
                />
                {errors.pincode && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
                    <AlertCircle className="h-3 w-3" />
                    {errors.pincode}
                  </p>
                )}
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
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Place Order"
            )}
          </Button>
        </GlassCard>
      </div>
    </form>
  )
}
