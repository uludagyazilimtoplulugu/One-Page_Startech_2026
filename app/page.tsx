import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Starfield } from "@/components/starfield"
import { HowItWorks } from "@/components/how-it-works"
import { ExperienceRooms } from "@/components/experience-rooms"
import { Gamification } from "@/components/gamification"
import { FAQ } from "@/components/faq"
import { FloatingCTA } from "@/components/floating-cta"
import { I18nProvider } from "@/lib/i18n"

export default function Home() {
  return (
    <I18nProvider>
      <div className="relative min-h-screen overflow-hidden bg-background">
        <Starfield />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <HowItWorks />
            <ExperienceRooms />
            <Gamification />
            <FAQ />
          </main>
          <FloatingCTA />
        </div>
      </div>
    </I18nProvider>
  )
}
