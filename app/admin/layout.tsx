import type { Metadata } from "next"
import { AuthProvider } from "@/lib/auth-context"

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard | Mahadev Aromatic",
    template: "%s | Admin - Mahadev Aromatic",
  },
  robots: { index: false, follow: false },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthProvider>{children}</AuthProvider>
}
