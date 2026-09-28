"use client"

import { useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  Code2,
  Compass,
  Monitor,
  MessagesSquare,
  Network,
  Rocket,
  ScanSearch,
  Zap,
} from "lucide-react"
import { Link } from "react-aria-components"

const icons = {
  code: Code2,
  compass: Compass,
  monitor: Monitor,
  messages: MessagesSquare,
  network: Network,
  rocket: Rocket,
  scan: ScanSearch,
  zap: Zap,
}

type ProgressiveCard = {
  label: string
  title: string
  description: string
  icon: keyof typeof icons
  action?: {
    href: string
    label: string
  }
}

type ProgressiveCardSectionProps = {
  id: string
  headingId: string
  eyebrow: string
  heading: string
  introduction: string
  cards: ProgressiveCard[]
}

export function ProgressiveCardSection({
  id,
  headingId,
  eyebrow,
  heading,
  introduction,
  cards,
}: ProgressiveCardSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const desktopQuery = window.matchMedia("(min-width: 1024px)")
    let observer: IntersectionObserver | undefined

    const syncScrollStage = () => {
      observer?.disconnect()
      observer = undefined

      if (!desktopQuery.matches) {
        setActiveIndex(0)
        return
      }

      const steps = section.querySelectorAll<HTMLElement>("[data-progressive-step]")
      observer = new IntersectionObserver(
        (entries) => {
          const visibleSteps = entries.filter((entry) => entry.isIntersecting)
          if (visibleSteps.length === 0) return

          const center = window.innerHeight / 2
          const nearestStep = visibleSteps.reduce((nearest, entry) => {
            const distance = Math.abs(
              entry.boundingClientRect.top + entry.boundingClientRect.height / 2 - center
            )
            const nearestDistance = Math.abs(
              nearest.boundingClientRect.top + nearest.boundingClientRect.height / 2 - center
            )
            return distance < nearestDistance ? entry : nearest
          })

          setActiveIndex(Number((nearestStep.target as HTMLElement).dataset.progressiveStep))
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      )

      steps.forEach((step) => observer?.observe(step))
    }

    syncScrollStage()
    desktopQuery.addEventListener("change", syncScrollStage)
    return () => {
      desktopQuery.removeEventListener("change", syncScrollStage)
      observer?.disconnect()
    }
  }, [])

  const activeCard = cards[activeIndex]

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-labelledby={headingId}
      className="relative mx-auto max-w-7xl px-4 py-14 sm:py-20 md:px-6 lg:py-24"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(15rem,0.7fr)_minmax(0,1.3fr)] lg:gap-12">
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="mt-4 max-w-md font-heading text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl lg:text-5xl"
          >
            {heading}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
            {introduction}
          </p>

          <div className="mt-8 hidden items-center gap-3 lg:flex" aria-hidden="true">
            <span className="font-heading text-xs font-medium tabular-nums text-foreground">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="flex gap-2">
              {cards.map((card, index) => (
                <span
                  key={card.title}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === activeIndex ? "w-10 bg-primary" : "w-6 bg-border"
                  }`}
                />
              ))}
            </span>
            <span className="font-heading text-xs font-medium tabular-nums text-muted-foreground">
              {String(cards.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="min-w-0">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
            {cards.map((card) => (
              <ProgressiveCard key={card.title} card={card} />
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-[18vh] z-10 flex min-h-[min(60svh,36rem)] items-center py-4">
              <ProgressiveCard key={activeCard.title} card={activeCard} animated />
            </div>

            <div aria-hidden="true">
              {cards.map((card, index) => (
                <div
                  key={card.title}
                  data-progressive-step={index}
                  className="h-[75svh]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProgressiveCard({
  card,
  animated = false,
}: {
  card: ProgressiveCard
  animated?: boolean
}) {
  const Icon = icons[card.icon]

  return (
    <article
      className={
        animated
          ? "progressive-card-enter relative isolate flex min-h-[22rem] w-full flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-gradient-to-br from-card via-card to-primary/[0.04] p-5 shadow-[0_22px_60px_rgba(15,23,42,0.12)] sm:min-h-[24rem] sm:p-8"
          : "group flex h-full min-h-72 flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card sm:p-6"
      }
    >
      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="flex items-start justify-between gap-4">
        <span className="max-w-[16rem] text-[0.65rem] leading-5 font-semibold tracking-[0.16em] text-muted-foreground uppercase">
          {card.label}
        </span>

        <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-secondary text-foreground shadow-inner shadow-white/40 sm:size-14">
          <Icon aria-hidden="true" className="size-5 sm:size-6" strokeWidth={1.7} />
        </span>
      </div>

      <h3
        className={`font-heading text-xl font-semibold tracking-[-0.04em] text-foreground ${
          animated ? "mt-8 sm:mt-10 sm:text-3xl" : "mt-7"
        }`}
      >
        {card.title}
      </h3>
      <p
        className={`text-sm leading-6 text-muted-foreground ${
          animated ? "mt-4 max-w-xl sm:text-base sm:leading-8" : "mt-3"
        }`}
      >
        {card.description}
      </p>

      {card.action && (
        <Link
          href={card.action.href}
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-2 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {card.action.label}
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      )}
    </article>
  )
}
