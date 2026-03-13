"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function FloatingCTA() {
  const { t } = useI18n()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      // Show after scrolling past the hero section (~100vh)
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <a
        href="#apply"
        className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
      >
        {t("reserveYourPlace")}
        <ArrowUp className="h-4 w-4" />
      </a>
    </div>
  )
}
