"use client"

import { FadeIn } from "@/components/fade-in"
import { MessageSquare, RefreshCw, Brain } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const ROOMS = [
  {
    icon: MessageSquare,
    titleKey: "roomInterviewTitle" as const,
    descKey: "roomInterviewDesc" as const,
  },
  {
    icon: RefreshCw,
    titleKey: "roomCareerTitle" as const,
    descKey: "roomCareerDesc" as const,
  },
  {
    icon: Brain,
    titleKey: "roomCaseStudyTitle" as const,
    descKey: "roomCaseStudyDesc" as const,
  },
]

export function ExperienceRooms() {
  const { t } = useI18n()

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <FadeIn>
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {t("experienceRoomsTitle")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground md:text-lg">
          {t("experienceRoomsSubtitle")}
        </p>
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {ROOMS.map((room, index) => {
          const Icon = room.icon
          return (
            <FadeIn key={room.titleKey} delay={200 * (index + 1)}>
              <div className="group flex flex-col rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all hover:scale-[1.03] hover:border-accent hover:bg-accent/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {t(room.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(room.descKey)}
                </p>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
