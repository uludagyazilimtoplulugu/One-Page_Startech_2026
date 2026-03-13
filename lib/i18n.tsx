"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Locale = "tr" | "en"

const translations = {
  tr: {
    comingSoon: "Yakinda",
    headline: "StarTech2026",
    hashtag: "#hayalimdekimeslek",
    descriptionLine1:
      "Sektör profesyonelleri ile öğrencileri buluşturarak tecrübeyi ve geleceği paylaşıyoruz.",
    descriptionLine2:
      "Yerinizi ayırtmak için formu şimdi doldurun.",
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
      "StarTech, yazılım dünyasını sahneden indirip katılımcıları etkinliğin merkezine koyan gala konseptli bir teknoloji etkinliğidir. Uzun sunumlar yerine aktif etkileşim, deneyim ve networking ön plandadır.",
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
    faqPointSystemQuestion: "Puan sistemi nasıl çalışıyor?",
    faqPointSystemAnswer:
      "Etkinlikte QR kodunla diğer katılımcılar, mentorlar ve startup temsilcileriyle tanışarak puan kazanırsın. Puanların deneyim alanlarına giriş için gereklidir. Ne kadar çok kişiyle tanışırsan o kadar çok deneyim alanına erişirsin.",
    faqExperienceRoomsQuestion: "Deneyim alanları nelerdir?",
    faqExperienceRoomsAnswer:
      "Mülakat Simülasyonu: Sektör profesyonelleriyle birebir deneme görüşmesi yapıp anında geri bildirim alırsın. Kariyer Rotasyonu: Hızlı turlarla mentorlar ve katılımcılarla kısa sürede maksimum etkileşim. Case Study: Şirketlerin gerçek problemleri üzerinde beyin fırtınası ve takım çalışması.",
    faqSurpriseCodesQuestion: "Sürpriz kodlar ne?",
    faqSurpriseCodesAnswer:
      "Etkinlik alanında stantlarda ve farklı noktalarda gizli sürpriz kodlar bulunur. Bu kodları keşfedip uygulamaya girdiğinde ekstra puan kazanırsın!",
    // How It Works section
    howItWorksTitle: "Seni Neler Bekliyor?",
    howItWorksSubtitle: "Etkinlik deneyimini 4 adımda keşfet.",
    stepApplyTitle: "Başvur",
    stepApplyDesc: "Rolünü seç ve başvuru formunu doldur. Seçilen adaylara davet gönderilir.",
    stepArriveTitle: "Etkinliğe Gel & Kayıt Ol",
    stepArriveDesc: "Etkinlik günü gelip uygulamaya kayıt ol.",
    stepMeetTitle: "Tanış & Puan Kazan",
    stepMeetDesc: "Katılımcılar, mentorlar ve startup'larla tanışarak puan topla.",
    stepRoomsTitle: "Deneyim Alanlarına Gir",
    stepRoomsDesc: "Yeterli puanın varsa özel odalara gir, başarıyla tamamlarsan ekstra puan kazan.",
    // Experience Rooms section
    experienceRoomsTitle: "Deneyim Alanları",
    experienceRoomsSubtitle: "Dinleyici koltuğundan kalkıp çözüm masasına oturduğun yer.",
    roomInterviewTitle: "Mülakat Simülasyonu",
    roomInterviewDesc: "Sektör profesyonelleri ve İK uzmanlarıyla birebir deneme görüşmeleri. Anında yapıcı geri bildirim ile eksiklerini tamamla.",
    roomCareerTitle: "Kariyer Rotasyonu",
    roomCareerDesc: "Hızlı turlarla mentorlar ve katılımcılarla kısa sürede maksimum etkileşim. Gelecekteki meslek hayatına dair yeni bakış açıları.",
    roomCaseStudyTitle: "Case Study",
    roomCaseStudyDesc: "Şirketlerin gerçek hayattaki problemleri masaya yatırılır. Beyin fırtınası, strateji geliştirme ve takım çalışması.",
    // Gamification section
    gamificationTitle: "Puan Sistemi",
    gamificationSubtitle: "Etkinlikte sadece tanışmıyorsun, oyunu oynuyorsun!",
    gamifMeetTitle: "Tanış & Kazan",
    gamifMeetDesc: "Her yeni tanışma seni bir adım öne taşır. QR kodunu okut, puanını topla.",
    gamifCodesTitle: "Sürpriz Kodları Bul",
    gamifCodesDesc: "Etkinlik alanına gizlenmiş kodları keşfet ve ekstra puan kazan.",
    gamifPrizeTitle: "Sürpriz Ödüller",
    gamifPrizeDesc: "Yüksek puanlara ulaşanları sürpriz ödüller bekliyor!",
  },
  en: {
    comingSoon: "Coming Soon",
    headline: "StarTech2026",
    hashtag: "#hayalimdekimeslek",
    descriptionLine1:
      "We bring together industry professionals and students to share experience and shape the future.",
    descriptionLine2:
      "Fill out the form now to reserve your place.",
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
      "StarTech is a gala-style technology event that brings software culture off-stage and puts participants at the center of the experience. Instead of long presentations, active interaction, hands-on experience and networking take the stage.",
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
    faqPointSystemQuestion: "How does the point system work?",
    faqPointSystemAnswer:
      "At the event, you earn points by meeting other participants, mentors, and startup representatives via QR code. Your points are required to enter experience rooms. The more people you meet, the more experience rooms you can access.",
    faqExperienceRoomsQuestion: "What are the experience rooms?",
    faqExperienceRoomsAnswer:
      "Interview Simulation: One-on-one practice interviews with industry professionals and instant feedback. Career Rotation: Quick rounds of speed networking with mentors and participants. Case Study: Brainstorming and teamwork on real company problems.",
    faqSurpriseCodesQuestion: "What are surprise codes?",
    faqSurpriseCodesAnswer:
      "Hidden surprise codes are placed at booths and various spots across the event area. Discover them and enter them in the app to earn extra points!",
    // How It Works section
    howItWorksTitle: "What Awaits You?",
    howItWorksSubtitle: "Discover the event experience in 4 steps.",
    stepApplyTitle: "Apply",
    stepApplyDesc: "Choose your role and fill out the application form. Selected candidates receive an invitation.",
    stepArriveTitle: "Arrive & Register",
    stepArriveDesc: "Come on the event day and register on the app.",
    stepMeetTitle: "Meet & Earn Points",
    stepMeetDesc: "Earn points by meeting participants, mentors and startups.",
    stepRoomsTitle: "Enter Experience Rooms",
    stepRoomsDesc: "If you have enough points, enter special rooms. Complete them successfully to earn extra points.",
    // Experience Rooms section
    experienceRoomsTitle: "Experience Rooms",
    experienceRoomsSubtitle: "Where you leave the audience seat and sit at the solution table.",
    roomInterviewTitle: "Interview Simulation",
    roomInterviewDesc: "One-on-one practice interviews with industry professionals and HR experts. Instant constructive feedback to improve your skills.",
    roomCareerTitle: "Career Rotation",
    roomCareerDesc: "Quick speed networking rounds with mentors and participants for maximum interaction in minimum time. Fresh perspectives on your future career.",
    roomCaseStudyTitle: "Case Study",
    roomCaseStudyDesc: "Real-world company problems are put on the table. Brainstorming, strategy development and teamwork.",
    // Gamification section
    gamificationTitle: "Point System",
    gamificationSubtitle: "You are not just networking, you are playing the game!",
    gamifMeetTitle: "Meet & Earn",
    gamifMeetDesc: "Every new connection takes you one step ahead. Scan the QR code, collect your points.",
    gamifCodesTitle: "Find Surprise Codes",
    gamifCodesDesc: "Discover hidden codes across the event area and earn extra points.",
    gamifPrizeTitle: "Surprise Prizes",
    gamifPrizeDesc: "Surprise prizes await those who reach high scores!",
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
