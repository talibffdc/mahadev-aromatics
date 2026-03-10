import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Login | Mahadev Aromatic",
  robots: { index: false, follow: false },
}

export default function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Login page renders without AdminShell (direct children)
  return <>{children}</>
}
