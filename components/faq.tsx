"use client"

import { FadeIn } from "@/components/fade-in"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useI18n } from "@/lib/i18n"

const FAQ_ITEMS = [
  {
    questionKey: "faqWhatIsStartechQuestion",
    answerKey: "faqWhatIsStartechAnswer",
  },
  {
    questionKey: "faqWhoCanJoinQuestion",
    answerKey: "faqWhoCanJoinAnswer",
  },
  {
    questionKey: "faqHowToApplyQuestion",
    answerKey: "faqHowToApplyAnswer",
  },
  {
    questionKey: "faqIsItFreeQuestion",
    answerKey: "faqIsItFreeAnswer",
  },
  {
    questionKey: "faqDressCodeQuestion",
    answerKey: "faqDressCodeAnswer",
  },
  {
    questionKey: "faqPointSystemQuestion",
    answerKey: "faqPointSystemAnswer",
  },
  {
    questionKey: "faqExperienceRoomsQuestion",
    answerKey: "faqExperienceRoomsAnswer",
  },
  {
    questionKey: "faqSurpriseCodesQuestion",
    answerKey: "faqSurpriseCodesAnswer",
  },
] as const

export function FAQ() {
  const { t } = useI18n()

  return (
    <section id="faq" className="mx-auto w-full max-w-5xl px-6 py-20">
      <FadeIn>
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {t("faqTitle")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground md:text-lg">
          {t("faqSubtitle")}
        </p>
      </FadeIn>

      <FadeIn delay={150}>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.questionKey} value={item.questionKey}>
              <AccordionTrigger>{t(item.questionKey)}</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(item.answerKey)}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </section>
  )
}
