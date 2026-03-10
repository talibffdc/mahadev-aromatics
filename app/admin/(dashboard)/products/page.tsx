"use client"

import { useState, useEffect } from "react"
import { Plus, Edit, Trash2, Package } from "lucide-react"
import { Product, DEMO_PRODUCTS } from "@/lib/products"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"
import { ProductForm } from "@/components/admin/product-form"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle } from "@/components/ui/alert-dialog"

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(DEMO_PRODUCTS)
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleAddProduct = async (formData: Partial<Product>) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        const newProduct = await response.json()
        setProducts([...products, newProduct])
        setShowForm(false)
      }
    } catch (error) {
      console.error("Failed to add product:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleUpdateProduct = async (formData: Partial<Product>) => {
    if (!editingProduct) return
    
    setIsLoading(true)
    try {
      const response = await fetch("/api/admin/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, id: editingProduct.id }),
      })
      
      if (response.ok) {
        const updated = await response.json()
        setProducts(products.map(p => p.id === updated.id ? updated : p))
        setEditingProduct(null)
        setShowForm(false)
      }
    } catch (error) {
      console.error("Failed to update product:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteProduct = async (productId: string) => {
    try {
      const response = await fetch(`/api/admin/products?id=${productId}`, {
        method: "DELETE",
      })
      
      if (response.ok) {
        setProducts(products.filter(p => p.id !== productId))
        setDeleteConfirm(null)
      }
    } catch (error) {
      console.error("Failed to delete product:", error)
    }
  }

  if (showForm) {
    return (
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-2xl font-bold text-foreground">
              {editingProduct ? "Edit Product" : "Add New Product"}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {editingProduct ? "Update product details" : "Create a new product"}
            </p>
          </div>
        </div>
        
        <ProductForm
          product={editingProduct || undefined}
          onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
          onCancel={() => {
            setShowForm(false)
            setEditingProduct(null)
          }}
          isLoading={isLoading}
        />
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Products</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your product catalog
          </p>
        </div>
        <Button 
          onClick={() => setShowForm(true)}
          className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium"
        >
          <Plus className="mr-2 h-4 w-4" />
          New Product
        </Button>
      </div>

      <div className="mt-8">
        <GlassCard className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Product</th>
                <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Category</th>
                <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Price</th>
                <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Stock</th>
                <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Variants</th>
                <th className="pb-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                const totalStock = product.variants.reduce((s, v) => s + v.stock, 0)
                const minPrice = Math.min(...product.variants.map((v) => v.discountPrice ?? v.price))
                return (
                  <tr key={product.id} className="border-b border-border/30 last:border-0">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <Package className="h-4 w-4 text-gold" />
                        <div>
                          <p className="font-medium text-foreground">{product.title}</p>
                          <p className="text-xs text-muted-foreground">{product.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-muted-foreground">{product.category}</td>
                    <td className="py-3 font-medium text-gold">{formatPrice(minPrice)}</td>
                    <td className="py-3">
                      <span className={totalStock > 20 ? "text-green-400" : totalStock > 0 ? "text-yellow-400" : "text-destructive"}>
                        {totalStock} units
                      </span>
                    </td>
                    <td className="py-3 text-muted-foreground">{product.variants.length}</td>
                    <td className="py-3">
                      <div className="flex items-center justify-end gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-border/60 text-muted-foreground hover:text-foreground"
                          onClick={() => {
                            setEditingProduct(product)
                            setShowForm(true)
                          }}
                        >
                          <Edit className="h-3.5 w-3.5" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-border/60 text-muted-foreground hover:text-destructive"
                          onClick={() => setDeleteConfirm(product.id)}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </GlassCard>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogTitle>Delete Product</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this product? This action cannot be undone.
          </AlertDialogDescription>
          <div className="flex gap-4">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteConfirm && handleDeleteProduct(deleteConfirm)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
