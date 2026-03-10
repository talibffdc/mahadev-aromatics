import {
  FileText,
  Package,
  ShoppingCart,
  Briefcase,
  TrendingUp,
  Users,
  Eye,
} from "lucide-react"
import { BLOG_POSTS, SERVICES } from "@/lib/constants"
import { DEMO_PRODUCTS } from "@/lib/products"
import { GlassCard } from "@/components/shared/glass-card"

const STATS = [
  {
    label: "Total Products",
    value: DEMO_PRODUCTS.length,
    icon: Package,
    change: "+2 this month",
  },
  {
    label: "Blog Posts",
    value: BLOG_POSTS.length,
    icon: FileText,
    change: "+1 this week",
  },
  {
    label: "Active Services",
    value: SERVICES.length,
    icon: Briefcase,
    change: "5 published",
  },
  {
    label: "Orders",
    value: 24,
    icon: ShoppingCart,
    change: "+6 this week",
  },
  {
    label: "Revenue",
    value: "Rs.1.2L",
    icon: TrendingUp,
    change: "+18% vs last month",
  },
  {
    label: "Visitors",
    value: "3,842",
    icon: Eye,
    change: "+12% this month",
  },
]

const RECENT_ORDERS = [
  { id: "MA-001", customer: "Rahul Verma", total: "Rs.4,999", status: "Delivered", date: "2025-12-28" },
  { id: "MA-002", customer: "Priya Shah", total: "Rs.2,549", status: "Shipped", date: "2025-12-27" },
  { id: "MA-003", customer: "Amit Kumar", total: "Rs.6,499", status: "Processing", date: "2025-12-26" },
  { id: "MA-004", customer: "Sneha Patil", total: "Rs.1,299", status: "Delivered", date: "2025-12-25" },
  { id: "MA-005", customer: "Vikash Singh", total: "Rs.3,999", status: "Pending", date: "2025-12-24" },
]

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Delivered: "bg-green-500/10 text-green-400 border-green-500/20",
    Shipped: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Processing: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Pending: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  }
  return (
    <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium ${colors[status] ?? "bg-secondary text-muted-foreground"}`}>
      {status}
    </span>
  )
}

export default function AdminDashboard() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">Welcome back, Admin</p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {STATS.map((stat) => (
          <GlassCard key={stat.label}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                <stat.icon className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="font-serif text-xl font-bold text-foreground">{stat.value}</p>
              </div>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{stat.change}</p>
          </GlassCard>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="mt-8">
        <GlassCard>
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg font-bold text-foreground">
              Recent Orders
            </h2>
            <Users className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Order ID
                  </th>
                  <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Customer
                  </th>
                  <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Total
                  </th>
                  <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Status
                  </th>
                  <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {RECENT_ORDERS.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-border/30 last:border-0"
                  >
                    <td className="py-3 font-medium text-gold">{order.id}</td>
                    <td className="py-3 text-foreground">{order.customer}</td>
                    <td className="py-3 text-foreground">{order.total}</td>
                    <td className="py-3">
                      <StatusBadge status={order.status} />
                    </td>
                    <td className="py-3 text-muted-foreground">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
