import type { Metadata } from "next"
import { Navbar } from "@/components/navigation/navbar"
import { SiteFooter } from "@/components/navigation/site-footer"
import { AboutSection } from "@/components/sections/about-section"

export const metadata: Metadata = {
  title: "À propos | Jokapia",
  description:
    "Découvrez Jokapia, ses expertises et son approche pour concevoir, connecter et équiper votre activité.",
}

export default function AboutPage() {
  return (
    <div id="top" className="min-h-svh bg-background text-foreground">
      <Navbar />
      <main>
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  )
}
