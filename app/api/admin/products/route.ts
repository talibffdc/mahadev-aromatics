import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

// In-memory storage for demo purposes (replace with database in production)
let products = require("@/lib/products").DEMO_PRODUCTS

function verifyAdmin(request: NextRequest): boolean {
  const cookieStore = require("next/headers").cookies()
  const session = cookieStore().get("admin_session")
  return !!session?.value
}

export async function GET(request: NextRequest) {
  return NextResponse.json(products)
}

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get("admin_session")
    
    if (!session?.value) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const body = await request.json()
    const newProduct = {
      ...body,
      id: `prod-${Date.now()}`
    }
    
    products.push(newProduct)
    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get("admin_session")
    
    if (!session?.value) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { id } = body
    
    const index = products.findIndex((p: any) => p.id === id)
    if (index === -1) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      )
    }
    
    products[index] = { ...products[index], ...body }
    return NextResponse.json(products[index])
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get("admin_session")
    
    if (!session?.value) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    
    if (!id) {
      return NextResponse.json(
        { error: "Product ID required" },
        { status: 400 }
      )
    }
    
    const index = products.findIndex((p: any) => p.id === id)
    if (index === -1) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      )
    }
    
    products.splice(index, 1)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    )
  }
}
