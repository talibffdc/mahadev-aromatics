import type { MetadataRoute } from "next"
import { COMPANY } from "@/lib/constants"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/cart", "/checkout", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/cart", "/checkout", "/api/"],
      },
    ],
    sitemap: `${COMPANY.website}/sitemap.xml`,
    host: COMPANY.website,
  }
}
