import { Eye, Download } from "lucide-react"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"

const ORDERS = [
  { id: "MA-001", customer: "Rahul Verma", email: "rahul@example.com", items: 2, total: "Rs.4,999", status: "Delivered", date: "2025-12-28" },
  { id: "MA-002", customer: "Priya Shah", email: "priya@example.com", items: 1, total: "Rs.2,549", status: "Shipped", date: "2025-12-27" },
  { id: "MA-003", customer: "Amit Kumar", email: "amit@example.com", items: 3, total: "Rs.6,499", status: "Processing", date: "2025-12-26" },
  { id: "MA-004", customer: "Sneha Patil", email: "sneha@example.com", items: 1, total: "Rs.1,299", status: "Delivered", date: "2025-12-25" },
  { id: "MA-005", customer: "Vikash Singh", email: "vikash@example.com", items: 2, total: "Rs.3,999", status: "Pending", date: "2025-12-24" },
  { id: "MA-006", customer: "Anjali Sharma", email: "anjali@example.com", items: 1, total: "Rs.1,999", status: "Delivered", date: "2025-12-23" },
  { id: "MA-007", customer: "Ravi Patel", email: "ravi@example.com", items: 4, total: "Rs.8,499", status: "Shipped", date: "2025-12-22" },
  { id: "MA-008", customer: "Meera Gupta", email: "meera@example.com", items: 1, total: "Rs.949", status: "Cancelled", date: "2025-12-21" },
]

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Delivered: "bg-green-500/10 text-green-400 border-green-500/20",
    Shipped: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Processing: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Pending: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    Cancelled: "bg-red-500/10 text-red-400 border-red-500/20",
  }
  return (
    <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium ${colors[status] ?? "bg-secondary text-muted-foreground"}`}>
      {status}
    </span>
  )
}

export default function AdminOrdersPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Orders</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            View and manage customer orders
          </p>
        </div>
        <Button variant="outline" className="border-border/60 text-muted-foreground hover:text-foreground">
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <div className="mt-8">
        <GlassCard className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Order</th>
                <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Customer</th>
                <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Items</th>
                <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Total</th>
                <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Status</th>
                <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Date</th>
                <th className="pb-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ORDERS.map((order) => (
                <tr key={order.id} className="border-b border-border/30 last:border-0">
                  <td className="py-3 font-medium text-gold">{order.id}</td>
                  <td className="py-3">
                    <div>
                      <p className="text-foreground">{order.customer}</p>
                      <p className="text-xs text-muted-foreground">{order.email}</p>
                    </div>
                  </td>
                  <td className="py-3 text-muted-foreground">{order.items}</td>
                  <td className="py-3 font-medium text-foreground">{order.total}</td>
                  <td className="py-3"><StatusBadge status={order.status} /></td>
                  <td className="py-3 text-muted-foreground">{order.date}</td>
                  <td className="py-3 text-right">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      <Eye className="h-3.5 w-3.5" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </GlassCard>
      </div>
    </div>
  )
}
