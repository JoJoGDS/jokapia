"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ContactDialog } from "@/components/navigation/contact-dialog"
import { Link } from "react-aria-components"

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
    alt: "Circuit électronique illustrant les solutions informatiques de Jokapia",
  },
  {
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85",
    alt: "Infrastructure énergétique au coucher du soleil",
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e73?auto=format&fit=crop&w=1400&q=85",
    alt: "Espace de travail pensé pour la collaboration",
  },
] as const

export function HeroSection() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    )

    if (prefersReducedMotion.matches) return

    const intervalId = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 pt-6 sm:pb-20 sm:pt-8 md:px-6 md:pt-10 lg:pb-28 lg:pt-16">
      <div className="grid min-w-0 items-center gap-8 md:gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="min-w-0 max-w-xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Électricité · numérique · équipements
          </p>
          <h1 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.05em] text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Des solutions concrètes pour faire avancer vos projets.
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-base md:mt-6 md:text-lg md:leading-8">
            De l’étude électrique aux outils numériques et aux équipements
            professionnels, Jokapia vous accompagne de la conception à la mise
            en service.
          </p>

          <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4 md:mt-8">
            <ContactDialog>
              <Button className="min-h-11 w-full rounded-full bg-primary px-6 text-primary-foreground shadow-[0_12px_24px_rgba(15,23,42,0.12)] hover:bg-primary/90 sm:w-auto">
                Démarrer un projet
              </Button>
            </ContactDialog>

            <Link
              href="#services"
              className="inline-flex min-h-11 items-center justify-center gap-2 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:justify-start"
            >
              Découvrir nos services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-border bg-secondary shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:rounded-[2rem]">
            {heroImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                aria-hidden={index !== activeImage}
                className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 motion-reduce:transition-none ${
                  index === activeImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-slate-950/70 via-slate-950/25 to-transparent px-5 pt-16 pb-5 text-white sm:px-7 sm:pb-7">
              <p className="text-sm font-medium sm:text-base">
                Des expertises réunies, un seul partenaire.
              </p>
              <div className="flex shrink-0 gap-1.5" aria-hidden="true">
                {heroImages.map((image, index) => (
                  <span
                    key={image.src}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeImage ? "w-5 bg-white" : "w-1.5 bg-white/55"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
