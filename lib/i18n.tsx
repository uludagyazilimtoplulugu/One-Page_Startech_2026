"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Locale = "tr" | "en"

const translations = {
  tr: {
    comingSoon: "Yakinda",
    headline: "StarTech2026",
    hashtag: "#hayalimdekimeslek",
    description:
      "Heyecan verici bir şey üzerinde çalışıyoruz. Yerinizi ayırtmak için formu şimdi doldurun.",
    reserveYourPlace: "Yerinizi Ayırtın",
    selectRole: "Rolünüzü Seçin",
    investor: "Yatırımcı",
    startup: "Startup",
    participant: "Katılımcı",
    mentor: "Mentör",
    back: "Geri",
    year: "Yıl",
    tracks: "Alan",
    mission: "Misyon",
  },
  en: {
    comingSoon: "Coming Soon",
    headline: "StarTech2026",
    hashtag: "#hayalimdekimeslek",
    description:
      "We are currently working on something exciting. Fill out the form now to reserve your place.",
    reserveYourPlace: "Reserve Your Place",
    selectRole: "Select Your Role",
    investor: "Investor",
    startup: "Startup",
    participant: "Participant",
    mentor: "Mentor",
    back: "Back",
    year: "Year",
    tracks: "Tracks",
    mission: "Mission",
  },
} as const

type TranslationKey = keyof (typeof translations)["en"]

interface I18nContextType {
  locale: Locale
  t: (key: TranslationKey) => string
  toggleLocale: () => void
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("tr")

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "tr" ? "en" : "tr"))
  }, [])

  const t = useCallback(
    (key: TranslationKey) => translations[locale][key],
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
