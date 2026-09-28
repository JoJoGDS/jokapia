"use client"

import { Button } from "@/components/ui/button"
import { Link } from "react-aria-components"

const heroImage = {
  src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  alt: "Électronique, informatique et technologies modernes",
}

export function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 pt-6 sm:pb-20 sm:pt-8 md:px-6 md:pt-10 lg:pb-28 lg:pt-16">
      <div className="grid min-w-0 items-center gap-8 md:gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="min-w-0 max-w-xl">
          <h1 className="text-3xl leading-tight font-semibold tracking-[-0.05em] text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Jokapia est une agence spécialisée dans la création de produits modernes.
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-base md:mt-6 md:text-lg md:leading-8">
            Nous aidons nos clients à transformer leurs idées en produits fiables, performants
            et centrés sur l’utilisateur avec un accompagnement de bout en bout.
          </p>

          <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4 md:mt-8">
            <Button className="min-h-11 w-full rounded-full bg-primary px-6 text-primary-foreground shadow-[0_12px_24px_rgba(15,23,42,0.12)] hover:bg-primary/90 sm:w-auto">
              Démarrer un projet
            </Button>

            <Link
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Découvrir nos services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-border bg-secondary shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:rounded-[2rem]">
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
