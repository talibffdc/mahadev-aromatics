"use client"

import { useState } from "react"
import { Product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { GlassCard } from "@/components/shared/glass-card"
import { PRODUCT_CATEGORIES_LIST } from "@/lib/products"
import { X } from "lucide-react"

interface ProductFormProps {
  product?: Product
  onSubmit: (product: Partial<Product>) => Promise<void>
  onCancel: () => void
  isLoading?: boolean
}

export function ProductForm({ product, onSubmit, onCancel, isLoading }: ProductFormProps) {
  const [formData, setFormData] = useState<Partial<Product>>(
    product || {
      title: "",
      slug: "",
      description: "",
      longDescription: "",
      images: [],
      category: "",
      tags: [],
      variants: [],
      featured: false,
      seo: { metaTitle: "", metaDescription: "" }
    }
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSubmit(formData)
  }

  return (
    <GlassCard>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <Label htmlFor="title">Product Title</Label>
          <Input
            id="title"
            value={formData.title || ""}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter product title"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <Label htmlFor="slug">Slug (URL friendly)</Label>
          <Input
            id="slug"
            value={formData.slug || ""}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            placeholder="Enter slug"
            required
          />
        </div>

        {/* Category */}
        <div>
          <Label htmlFor="category">Category</Label>
          <select
            id="category"
            value={formData.category || ""}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground"
            required
          >
            <option value="">Select a category</option>
            {PRODUCT_CATEGORIES_LIST.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description">Short Description</Label>
          <Textarea
            id="description"
            value={formData.description || ""}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Enter short description"
            rows={3}
            required
          />
        </div>

        {/* Long Description */}
        <div>
          <Label htmlFor="longDescription">Long Description</Label>
          <Textarea
            id="longDescription"
            value={formData.longDescription || ""}
            onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
            placeholder="Enter detailed description"
            rows={5}
            required
          />
        </div>

        {/* Meta Title */}
        <div>
          <Label htmlFor="metaTitle">SEO Meta Title</Label>
          <Input
            id="metaTitle"
            value={formData.seo?.metaTitle || ""}
            onChange={(e) => setFormData({
              ...formData,
              seo: { ...formData.seo!, metaTitle: e.target.value }
            })}
            placeholder="Enter meta title for SEO"
          />
        </div>

        {/* Meta Description */}
        <div>
          <Label htmlFor="metaDescription">SEO Meta Description</Label>
          <Textarea
            id="metaDescription"
            value={formData.seo?.metaDescription || ""}
            onChange={(e) => setFormData({
              ...formData,
              seo: { ...formData.seo!, metaDescription: e.target.value }
            })}
            placeholder="Enter meta description for SEO"
            rows={2}
          />
        </div>

        {/* Featured */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="featured"
            checked={formData.featured || false}
            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            className="rounded border-border"
          />
          <Label htmlFor="featured" className="mb-0">Mark as Featured Product</Label>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium"
          >
            {isLoading ? "Saving..." : product ? "Update Product" : "Create Product"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isLoading}
          >
            Cancel
          </Button>
        </div>
      </form>
    </GlassCard>
  )
}
