"use client"

import { useState } from "react"
import { FadeIn } from "@/components/fade-in"
import { ArrowLeft, ArrowRight, Briefcase, Rocket, Users, GraduationCap } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const ROLE_FORMS = [
  {
    key: "investor" as const,
    icon: Briefcase,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf8UjMl05IBFYv4sW06BX-mO0U9_1sQUuDTCzQEIr4SdPdDyQ/viewform",
  },
  {
    key: "startup" as const,
    icon: Rocket,
    url: "https://docs.google.com/forms/d/e/1FAIpQLScqZpqxruIT4HwzAKMZnpjUp79gT6cwcZZPPiYkP8KwTjQhVw/viewform",
  },
  {
    key: "participant" as const,
    icon: Users,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdGi5YFOL1oN_5cJi3s-Cd-brs67SdO-pzarhHBlrhIjkfWSw/viewform",
  },
  {
    key: "mentor" as const,
    icon: GraduationCap,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSe5YyEQyvahh8-FlbO9y6KtHvwT3YiD7w_xEXD4_72RxQ5QlA/viewform",
  },
]

export function Hero() {
  const { t } = useI18n()
  const [showRoles, setShowRoles] = useState(false)

  return (
    <section id="apply" className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      {/* Glow effect */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "oklch(0.72 0.19 160)" }}
        aria-hidden="true"
      />

      <FadeIn delay={100} direction="none">
        <span className="mb-6 inline-block rounded-full border border-accent/50 bg-accent/10 px-5 py-2 text-sm font-semibold tracking-widest uppercase text-accent">
          {t("comingSoon")}
        </span>
      </FadeIn>

      <FadeIn delay={200}>
        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance">
          {t("headline")}
        </h1>
      </FadeIn>

      <FadeIn delay={350}>
        <p className="mt-4 text-xl font-medium tracking-wide text-accent md:text-2xl">
          {t("hashtag")}
        </p>
      </FadeIn>

      <FadeIn delay={500}>
        <div className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
          <p>{t("descriptionLine1")}</p>
          <p className="mt-2">{t("descriptionLine2")}</p>
        </div>
      </FadeIn>

      <FadeIn delay={650}>
        <div className="mt-10 flex flex-col items-center gap-4">
          {!showRoles ? (
            <button
              onClick={() => setShowRoles(true)}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background transition-all hover:scale-105 hover:opacity-90 cursor-pointer"
            >
              {t("reserveYourPlace")}
              <ArrowLeft className="h-4 w-4" />
            </button>
          ) : (
            <div className="flex flex-col items-center gap-5">
              <p className="text-lg font-semibold text-foreground">
                {t("selectRole")}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {ROLE_FORMS.map((role) => {
                  const Icon = role.icon
                  return (
                    <a
                      key={role.key}
                      href={role.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card/50 px-6 py-5 text-card-foreground backdrop-blur-sm transition-all hover:scale-105 hover:border-accent hover:bg-accent/10"
                    >
                      <Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-accent" />
                      <span className="text-sm font-semibold text-foreground">
                        {t(role.key)}
                      </span>
                    </a>
                  )
                })}
              </div>
              <button
                onClick={() => setShowRoles(false)}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              >
                <ArrowRight className="h-3.5 w-3.5" />
                {t("back")}
              </button>
            </div>
          )}
        </div>
      </FadeIn>

      <FadeIn delay={800}>
        <div className="mt-16 flex items-center gap-8 text-sm text-muted-foreground">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">2026</span>
            <span>{t("year")}</span>
          </div>
          <div className="h-8 w-px bg-border" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">4</span>
            <span>{t("tracks")}</span>
          </div>
          <div className="h-8 w-px bg-border" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">1</span>
            <span>{t("mission")}</span>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
