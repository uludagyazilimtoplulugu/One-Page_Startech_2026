"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Locale = "tr" | "en"

const translations = {
  tr: {
    comingSoon: "Yakinda",
    headline: "StarTech2026",
    hashtag: "#hayalimdekimeslek",
    description:
      "Sektör profesyonelleri ile öğrencileri buluşturarak tecrübeyi ve geleceği paylaşıyoruz. \nYerinizi ayırtmak için formu şimdi doldurun.",
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
    faqTitle: "Sıkça Sorulan Sorular",
    faqSubtitle: "StarTech hakkında sıkça sorulan sorular ve cevapları burada bulabilirsiniz.",
    faqWhatIsStartechQuestion: "StarTech nedir?",
    faqWhatIsStartechAnswer:
      "StarTech, yazılım dünyasını sahneden indirip katılımcıları etkinliğin merkezine koyan gala konseptli bir teknoloji etkinliğidir.",
    faqWhoCanJoinQuestion: "Kimler katılabilir?",
    faqWhoCanJoinAnswer:
      "Üniversite öğrencileri, yeni mezunlar, sektördeki profesyoneller ve startup ekoseni paydaşları etkinliğe başvurabilir.",
    faqHowToApplyQuestion: "Nasıl başvurabilirim?",
    faqHowToApplyAnswer:
      "Üyelik formunu doldurarak başvuru yapabilir, motivasyonunuz ve etkinlik yapısına uyumunuz değerlendirilir. Seçilen kişiler davet edilir.",
    faqIsItFreeQuestion: "Etkinlik ücretsiz mi?",
    faqIsItFreeAnswer:
      "Evet, StarTech ücretsizdir ancak kontenjana bağlı olarak önceden seçilen katılımcılar davet edilir.",
    faqDressCodeQuestion: "Giyim kodu nedir?",
    faqDressCodeAnswer:
      "Gala konsepti gereği resmi-şık ya da resmi-rahat kıyafetler tercih edilir.",
  },
  en: {
    comingSoon: "Coming Soon",
    headline: "StarTech2026",
    hashtag: "#hayalimdekimeslek",
    description:
      "We bring together industry professionals and students to share experience and shape the future. \nFill out the form now to reserve your place.",
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
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to common questions about StarTech.",
    faqWhatIsStartechQuestion: "What is StarTech?",
    faqWhatIsStartechAnswer:
      "StarTech is a gala-style technology event that brings software culture off-stage and puts participants at the center of the experience.",
    faqWhoCanJoinQuestion: "Who can participate?",
    faqWhoCanJoinAnswer:
      "University students, recent graduates, industry professionals, and startup ecosystem stakeholders are welcome to apply.",
    faqHowToApplyQuestion: "How do I apply?",
    faqHowToApplyAnswer:
      "Complete the sign-up form, and your motivation and fit with the event will be evaluated. Selected participants receive an invitation.",
    faqIsItFreeQuestion: "Is the event free?",
    faqIsItFreeAnswer:
      "Yes, StarTech is free but attendance is limited and participation is by invitation based on selection.",
    faqDressCodeQuestion: "What is the dress code?",
    faqDressCodeAnswer:
      "A gala-style dress code is requested — smart formal or smart casual attire is recommended.",
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
