import { Navbar } from "@/components/navigation/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { PartnersSection } from "@/components/sections/partners-section"
import { ServicesSection } from "@/components/sections/services-section"
import { MethodologySection } from "@/components/sections/methodology-section"
import { SiteFooter } from "@/components/navigation/site-footer"

export default function Page() {
  return (
    <div id="top" className="min-h-svh bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <ServicesSection />
        <MethodologySection />
      </main>
      <SiteFooter />
    </div>
  )
}
