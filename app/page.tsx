import { Navbar } from "@/components/navigation/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { ServicesSection } from "@/components/sections/services-section"
import { MethodologySection } from "@/components/sections/methodology-section"

export default function Page() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <MethodologySection />
    </main>
  )
}
