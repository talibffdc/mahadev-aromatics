"use client"

import { useState } from "react"
import { CheckCircle2, Send, AlertCircle } from "lucide-react"
import { z } from "zod"
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

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  company: z.string().max(100, "Company name is too long").optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[\d\s+()-]*$/, "Please enter a valid phone number").optional().or(z.literal("")),
  requirement: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
})

type ContactFormData = z.infer<typeof contactSchema>
type FormErrors = Partial<Record<keyof ContactFormData, string>>

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim()
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

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
          onClick={() => {
            setSubmitted(false)
            setErrors({})
          }}
          variant="outline"
          className="mt-6 border-gold/30 text-foreground hover:bg-gold/10 hover:border-gold/50"
        >
          Send Another Message
        </Button>
      </GlassCard>
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    const formData = new FormData(e.currentTarget)
    const data: ContactFormData = {
      name: sanitizeInput(formData.get("name") as string || ""),
      company: sanitizeInput(formData.get("company") as string || ""),
      email: sanitizeInput(formData.get("email") as string || ""),
      phone: sanitizeInput(formData.get("phone") as string || ""),
      requirement: formData.get("requirement") as string || "",
      message: sanitizeInput(formData.get("message") as string || ""),
    }

    // Validate
    const result = contactSchema.safeParse(data)
    
    if (!result.success) {
      const fieldErrors: FormErrors = {}
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormData
        if (!fieldErrors[field]) {
          fieldErrors[field] = error.message
        }
      })
      setErrors(fieldErrors)
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <GlassCard>
      <h2 className="font-serif text-xl font-bold text-foreground">
        Send Us a Message
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill out the form below and our team will respond promptly.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="c-name" className="text-foreground">Full Name</Label>
            <Input 
              id="c-name" 
              name="name"
              required 
              placeholder="Your name" 
              className={`mt-1 ${errors.name ? "border-destructive" : ""}`}
              maxLength={100}
            />
            {errors.name && (
              <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
                <AlertCircle className="h-3 w-3" />
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="c-company" className="text-foreground">Company</Label>
            <Input 
              id="c-company" 
              name="company"
              placeholder="Company name" 
              className="mt-1" 
              maxLength={100}
            />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="c-email" className="text-foreground">Email</Label>
            <Input 
              id="c-email" 
              name="email"
              type="email" 
              required 
              placeholder="you@company.com" 
              className={`mt-1 ${errors.email ? "border-destructive" : ""}`}
            />
            {errors.email && (
              <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
                <AlertCircle className="h-3 w-3" />
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="c-phone" className="text-foreground">Phone</Label>
            <Input 
              id="c-phone" 
              name="phone"
              type="tel" 
              placeholder="+91 98765 43210" 
              className={`mt-1 ${errors.phone ? "border-destructive" : ""}`}
            />
            {errors.phone && (
              <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
                <AlertCircle className="h-3 w-3" />
                {errors.phone}
              </p>
            )}
          </div>
        </div>
        <div>
          <Label htmlFor="c-requirement" className="text-foreground">Requirement</Label>
          <Select name="requirement">
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
            name="message"
            required
            placeholder="Tell us about your project, requirements, or any questions..."
            rows={5}
            className={`mt-1 ${errors.message ? "border-destructive" : ""}`}
            maxLength={2000}
          />
          {errors.message && (
            <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
              <AlertCircle className="h-3 w-3" />
              {errors.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          className="w-full bg-gold text-primary-foreground hover:bg-gold-dark font-medium"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </GlassCard>
  )
}
