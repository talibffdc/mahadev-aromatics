import { Plus, Edit, Trash2, Package } from "lucide-react"
import { DEMO_PRODUCTS } from "@/lib/products"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)
}

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Products</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your product catalog
          </p>
        </div>
        <Button className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium">
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
              {DEMO_PRODUCTS.map((product) => {
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
                        <Button variant="outline" size="sm" className="border-border/60 text-muted-foreground hover:text-foreground">
                          <Edit className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="outline" size="sm" className="border-border/60 text-muted-foreground hover:text-destructive">
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
    </div>
  )
}
