import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CartProvider } from '@/lib/cart-context'
import { MiniCart } from '@/components/products/mini-cart'
import { COMPANY } from '@/lib/constants'
import { getOrganizationSchema, getWebSiteSchema, getLocalBusinessSchema } from '@/lib/seo'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.website),
  title: {
    default: `${COMPANY.name} | Custom Fragrance Development & GCMS Analysis`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    'Leading fragrance development laboratory specializing in GCMS analysis, custom fragrance creation, aroma chemistry, and industrial perfumery solutions. Based in Kannauj, India.',
  keywords: [
    'fragrance development',
    'GCMS analysis',
    'aroma chemicals',
    'custom perfume',
    'fragrance testing',
    'perfumery lab',
    'Kannauj perfume',
    'essential oil testing',
    'fragrance matching',
    'industrial fragrance',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Custom Fragrance Development & GCMS Analysis`,
    description:
      'Leading fragrance development laboratory specializing in GCMS analysis, custom fragrance creation, and industrial perfumery solutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} | Custom Fragrance Development`,
    description:
      'Leading fragrance development laboratory specializing in GCMS analysis and custom fragrance creation.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: COMPANY.website,
  },
  verification: {},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemas = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    getLocalBusinessSchema(),
  ]

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      </head>
      <body className="font-sans antialiased">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <MiniCart />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
