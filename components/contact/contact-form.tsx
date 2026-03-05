"use client"

import { useState } from "react"
import { CheckCircle2, Send } from "lucide-react"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <GlassCard className="text-center py-12">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
        <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">
          Message Sent!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="mt-6 border-gold/30 text-foreground hover:bg-gold/10 hover:border-gold/50"
        >
          Send Another Message
        </Button>
      </GlassCard>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <GlassCard>
      <h2 className="font-serif text-xl font-bold text-foreground">
        Send Us a Message
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill out the form below and our team will respond promptly.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="c-name" className="text-foreground">Full Name</Label>
            <Input id="c-name" required placeholder="Your name" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="c-company" className="text-foreground">Company</Label>
            <Input id="c-company" placeholder="Company name" className="mt-1" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="c-email" className="text-foreground">Email</Label>
            <Input id="c-email" type="email" required placeholder="you@company.com" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="c-phone" className="text-foreground">Phone</Label>
            <Input id="c-phone" type="tel" placeholder="+91 98765 43210" className="mt-1" />
          </div>
        </div>
        <div>
          <Label htmlFor="c-requirement" className="text-foreground">Requirement</Label>
          <Select>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select your requirement" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="custom-fragrance">Custom Fragrance Development</SelectItem>
              <SelectItem value="gcms-analysis">GCMS / GLC Analysis</SelectItem>
              <SelectItem value="fragrance-matching">Fragrance Matching</SelectItem>
              <SelectItem value="raw-material-testing">Raw Material Testing</SelectItem>
              <SelectItem value="industrial">Industrial Fragrance Solutions</SelectItem>
              <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="c-message" className="text-foreground">Message</Label>
          <Textarea
            id="c-message"
            required
            placeholder="Tell us about your project, requirements, or any questions..."
            rows={5}
            className="mt-1"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-gold text-primary-foreground hover:bg-gold-dark font-medium"
          size="lg"
        >
          <Send className="mr-2 h-4 w-4" />
          Send Message
        </Button>
      </form>
    </GlassCard>
  )
}
