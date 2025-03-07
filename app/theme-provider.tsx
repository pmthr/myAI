"use client"
import { ReactNode, useEffect, useState } from "react"

export default function ClientThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light")
      document.documentElement.classList.remove("dark")
    } else {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }

  return (
    <div>
      <div className="p-2 flex justify-end">
        <button
          onClick={toggleTheme}
          className="border border-border px-4 py-2 rounded text-sm"
        >
          Toggle Theme
        </button>
      </div>
      {children}
    </div>
  )
}
