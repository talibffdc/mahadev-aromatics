"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  login: (password: string) => Promise<boolean>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/check", { 
        method: "GET",
        credentials: "include"
      })
      setIsAuthenticated(res.ok)
    } catch {
      setIsAuthenticated(false)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  const login = useCallback(async (password: string): Promise<boolean> => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
        credentials: "include"
      })
      
      const data = await res.json()
      console.log("[v0] Login response:", { status: res.status, data })
      
      if (res.ok) {
        setIsAuthenticated(true)
        return true
      }
      console.log("[v0] Login failed:", data.error)
      return false
    } catch (error) {
      console.log("[v0] Login error:", error)
      return false
    }
  }, [])

  const logout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", { 
        method: "POST",
        credentials: "include"
      })
    } finally {
      setIsAuthenticated(false)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within AuthProvider")
  return context
}
