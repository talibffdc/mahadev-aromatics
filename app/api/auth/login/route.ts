import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

// Simple hash function for password comparison
function simpleHash(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return hash.toString(36)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password } = body

    console.log("[v0] Login attempt with password:", password)

    // Validate input
    if (!password || typeof password !== "string") {
      console.log("[v0] Invalid password format")
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 }
      )
    }

    // Get admin password from environment variable
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPassword) {
      console.error("[v0] ADMIN_PASSWORD environment variable is not set")
      console.error("[v0] Available env vars:", Object.keys(process.env).filter(k => k.includes('ADMIN') || k.includes('admin')))
      return NextResponse.json(
        { error: "Admin password not configured. Please set ADMIN_PASSWORD in environment variables." },
        { status: 500 }
      )
    }

    console.log("[v0] Comparing passwords - provided:", password, "expected:", adminPassword)

    // Compare passwords
    if (password !== adminPassword) {
      console.log("[v0] Password mismatch!")
      // Add slight delay to prevent timing attacks
      await new Promise(resolve => setTimeout(resolve, 500))
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      )
    }

    console.log("[v0] Password matched! Creating session.")

    // Create session token
    const sessionToken = `${Date.now()}-${simpleHash(password + Date.now().toString())}`
    
    // Set HTTP-only cookie
    const cookieStore = await cookies()
    cookieStore.set("admin_session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/"
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    )
  }
}
