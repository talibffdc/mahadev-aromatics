import Link from "next/link"
import { Plus, Edit, Trash2, Calendar } from "lucide-react"
import { BLOG_POSTS } from "@/lib/constants"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"

export default function AdminBlogPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Blog Posts</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your blog content
          </p>
        </div>
        <Button className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium">
          <Plus className="mr-2 h-4 w-4" />
          New Post
        </Button>
      </div>

      <div className="mt-8 space-y-4">
        {BLOG_POSTS.map((post) => (
          <GlassCard key={post.slug} className="flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-sm font-semibold text-foreground truncate">
                {post.title}
              </h3>
              <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-gold/10 px-2 py-0.5 text-gold">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
                <span>{post.author}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="border-border/60 text-muted-foreground hover:text-foreground">
                <Edit className="h-3.5 w-3.5" />
                <span className="sr-only">Edit</span>
              </Button>
              <Button variant="outline" size="sm" className="border-border/60 text-muted-foreground hover:text-destructive">
                <Trash2 className="h-3.5 w-3.5" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
