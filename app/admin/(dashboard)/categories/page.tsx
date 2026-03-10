import { Plus, Edit, Trash2, FolderTree } from "lucide-react"
import { BLOG_CATEGORIES } from "@/lib/constants"
import { PRODUCT_CATEGORIES_LIST } from "@/lib/products"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"

export default function AdminCategoriesPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Categories</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage blog and product categories
          </p>
        </div>
        <Button className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium">
          <Plus className="mr-2 h-4 w-4" />
          New Category
        </Button>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {/* Blog Categories */}
        <GlassCard>
          <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground">
            <FolderTree className="h-5 w-5 text-gold" />
            Blog Categories
          </h2>
          <div className="mt-4 space-y-2">
            {BLOG_CATEGORIES.map((cat) => (
              <div key={cat} className="flex items-center justify-between rounded-lg border border-border/40 px-4 py-3">
                <span className="text-sm text-foreground">{cat}</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground">
                    <Edit className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Product Categories */}
        <GlassCard>
          <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground">
            <FolderTree className="h-5 w-5 text-gold" />
            Product Categories
          </h2>
          <div className="mt-4 space-y-2">
            {PRODUCT_CATEGORIES_LIST.map((cat) => (
              <div key={cat} className="flex items-center justify-between rounded-lg border border-border/40 px-4 py-3">
                <span className="text-sm text-foreground">{cat}</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground">
                    <Edit className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
