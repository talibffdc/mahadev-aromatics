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

    // Validate input
    if (!password || typeof password !== "string") {
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 }
      )
    }

    // Get admin password from environment variable
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPassword) {
      console.error("ADMIN_PASSWORD environment variable is not set")
      return NextResponse.json(
        { error: "Admin password not configured" },
        { status: 500 }
      )
    }

    // Compare passwords
    if (password !== adminPassword) {
      // Add slight delay to prevent timing attacks
      await new Promise(resolve => setTimeout(resolve, 500))
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      )
    }

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
