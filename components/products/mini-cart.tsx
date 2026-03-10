"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ShoppingBag, Minus, Plus, Trash2, X } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)
}

export function MiniCart() {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    totalItems, 
    totalPrice, 
    isMiniCartOpen, 
    closeMiniCart,
    lastAddedItem 
  } = useCart()

  return (
    <Sheet open={isMiniCartOpen} onOpenChange={(open) => !open && closeMiniCart()}>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-md bg-background border-border">
        <SheetHeader className="border-b border-border/50 pb-4">
          <SheetTitle className="flex items-center gap-2 font-serif text-foreground">
            <ShoppingBag className="h-5 w-5 text-gold" />
            Your Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {/* Success message for last added item */}
        {lastAddedItem && items.length > 0 && (
          <div className="flex items-center gap-3 rounded-lg bg-gold/10 p-3 mx-4 mt-4">
            <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-foreground">Item added to cart!</p>
              <p className="truncate text-xs text-muted-foreground">
                {lastAddedItem.product.title} - {lastAddedItem.variant.name}
              </p>
            </div>
          </div>
        )}

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <ShoppingBag className="h-8 w-8 text-muted-foreground/50" />
            </div>
            <p className="font-serif text-lg text-muted-foreground">Your cart is empty</p>
            <SheetClose asChild>
              <Button asChild className="bg-gold text-primary-foreground hover:bg-gold-dark">
                <Link href="/products">Browse Products</Link>
              </Button>
            </SheetClose>
          </div>
        ) : (
          <>
            {/* Cart items */}
            <ScrollArea className="flex-1 px-4 py-4">
              <div className="space-y-4">
                {items.map((item) => {
                  const price = item.variant.discountPrice ?? item.variant.price
                  return (
                    <div 
                      key={item.variant.id} 
                      className="flex gap-3 rounded-lg border border-border/50 bg-card p-3"
                    >
                      {/* Product image */}
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Product details */}
                      <div className="flex flex-1 flex-col min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h4 className="truncate text-sm font-medium text-foreground">
                              {item.product.title}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {item.variant.name}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.variant.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                            aria-label={`Remove ${item.product.title} from cart`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-auto flex items-center justify-between pt-2">
                          {/* Quantity controls */}
                          <div className="flex items-center rounded-md border border-border/60">
                            <button
                              onClick={() => updateQuantity(item.variant.id, item.quantity - 1)}
                              className="flex h-7 w-7 items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="flex h-7 w-8 items-center justify-center text-xs font-medium text-foreground">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.variant.id, item.quantity + 1)}
                              className="flex h-7 w-7 items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          {/* Price */}
                          <span className="font-medium text-gold">
                            {formatPrice(price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </ScrollArea>

            {/* Footer with totals and actions */}
            <SheetFooter className="border-t border-border/50 p-4 flex-col gap-4">
              {/* Subtotal */}
              <div className="flex items-center justify-between w-full">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-serif text-lg font-bold text-gold">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">
                {totalPrice >= 999 
                  ? "You qualify for free shipping!" 
                  : `Add ${formatPrice(999 - totalPrice)} more for free shipping`}
              </p>

              {/* Action buttons */}
              <div className="grid gap-2 w-full">
                <SheetClose asChild>
                  <Button 
                    asChild 
                    className="w-full bg-gold text-primary-foreground hover:bg-gold-dark font-medium"
                    size="lg"
                  >
                    <Link href="/checkout">Buy Now</Link>
                  </Button>
                </SheetClose>
                
                <SheetClose asChild>
                  <Button 
                    asChild 
                    variant="outline"
                    className="w-full border-gold/30 text-foreground hover:bg-gold/10 hover:border-gold/50"
                  >
                    <Link href="/cart">Go to Cart</Link>
                  </Button>
                </SheetClose>
                
                <SheetClose asChild>
                  <Button 
                    variant="ghost"
                    className="w-full text-muted-foreground hover:text-foreground"
                  >
                    Continue Shopping
                  </Button>
                </SheetClose>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
