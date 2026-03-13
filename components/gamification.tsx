"use client"

import { FadeIn } from "@/components/fade-in"
import { QrCode, Search, Gift } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const FEATURES = [
  {
    icon: QrCode,
    titleKey: "gamifMeetTitle" as const,
    descKey: "gamifMeetDesc" as const,
  },
  {
    icon: Search,
    titleKey: "gamifCodesTitle" as const,
    descKey: "gamifCodesDesc" as const,
  },
  {
    icon: Gift,
    titleKey: "gamifPrizeTitle" as const,
    descKey: "gamifPrizeDesc" as const,
  },
]

export function Gamification() {
  const { t } = useI18n()

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <FadeIn>
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {t("gamificationTitle")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground md:text-lg">
          {t("gamificationSubtitle")}
        </p>
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {FEATURES.map((feature, index) => {
          const Icon = feature.icon
          return (
            <FadeIn key={feature.titleKey} delay={200 * (index + 1)}>
              <div className="group flex flex-col items-center rounded-2xl border border-border bg-card/50 p-8 text-center backdrop-blur-sm transition-all hover:border-accent hover:bg-accent/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {t(feature.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(feature.descKey)}
                </p>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
