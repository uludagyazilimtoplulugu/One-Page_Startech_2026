"use client"

import { FadeIn } from "@/components/fade-in"
import { ClipboardCheck, Smartphone, Users, DoorOpen } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const STEPS = [
  {
    icon: ClipboardCheck,
    titleKey: "stepApplyTitle" as const,
    descKey: "stepApplyDesc" as const,
    href: "#apply",
  },
  {
    icon: Smartphone,
    titleKey: "stepArriveTitle" as const,
    descKey: "stepArriveDesc" as const,
  },
  {
    icon: Users,
    titleKey: "stepMeetTitle" as const,
    descKey: "stepMeetDesc" as const,
  },
  {
    icon: DoorOpen,
    titleKey: "stepRoomsTitle" as const,
    descKey: "stepRoomsDesc" as const,
  },
]

export function HowItWorks() {
  const { t } = useI18n()

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <FadeIn>
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {t("howItWorksTitle")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground md:text-lg">
          {t("howItWorksSubtitle")}
        </p>
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, index) => {
          const Icon = step.icon
          const Wrapper = step.href ? "a" : "div"
          const wrapperProps = step.href ? { href: step.href } : {}
          return (
            <FadeIn key={step.titleKey} delay={150 * (index + 1)} className="h-full">
              <Wrapper
                {...wrapperProps}
                className={`group relative flex h-full flex-col items-center rounded-2xl border border-border bg-card/50 p-6 text-center backdrop-blur-sm transition-all hover:border-accent hover:bg-accent/5 ${step.href ? "cursor-pointer hover:scale-[1.03]" : ""}`}
              >
                {/* Step number */}
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  {index + 1}
                </span>
                <Icon className="mt-2 h-8 w-8 text-muted-foreground transition-colors group-hover:text-accent" />
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {t(step.titleKey)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(step.descKey)}
                </p>
              </Wrapper>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
