import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DEFAULT_POLICIES } from '@/lib/policies'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Mahadev Aromatics',
  description: 'Terms and conditions for using Mahadev Aromatics website and services.',
}

export default function TermsPage() {
  const policy = DEFAULT_POLICIES.terms

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
        {/* Back button */}
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div 
            className="prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-strong:text-foreground prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-hr:border-border/30"
            dangerouslySetInnerHTML={{
              __html: convertMarkdownToHtml(policy.content),
            }}
          />

          <div className="mt-12 border-t border-border/30 pt-8">
            <p className="text-xs text-muted-foreground">
              Last updated: {new Date(policy.updatedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

// Simple markdown to HTML converter
function convertMarkdownToHtml(markdown: string): string {
  let html = markdown
  
  // Headers
  html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>')
  html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>')
  html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>')
  
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>')
  
  // Line breaks
  html = html.replace(/\n\n/g, '</p><p>')
  html = `<p>${html}</p>`
  
  return html
}
