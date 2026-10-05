"use client"

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
  variant: "expertise" | "methodology"
}

export function ProgressiveCardSection({
  id,
  headingId,
  eyebrow,
  heading,
  introduction,
  cards,
  variant,
}: ProgressiveCardSectionProps) {
  const isMethodology = variant === "methodology"

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`relative isolate overflow-hidden ${
        isMethodology
          ? "bg-muted/35"
          : "border-y border-border/70 bg-muted/20"
      }`}
    >
      {isMethodology && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-44 right-[-8rem] -z-10 size-[28rem] rounded-full bg-primary/[0.035] blur-3xl"
        />
      )}

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.17em] text-muted-foreground uppercase shadow-sm">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-primary/70" />
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="mt-5 font-heading text-3xl font-semibold tracking-[-0.055em] text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            {introduction}
          </p>
        </div>

        <div
          className={`relative mx-auto mt-10 grid max-w-6xl gap-4 sm:mt-12 sm:grid-cols-2 lg:mt-14 ${
            isMethodology ? "lg:grid-cols-4 lg:gap-5" : "lg:grid-cols-4 lg:gap-4"
          }`}
        >
          {isMethodology && (
            <div
              aria-hidden="true"
              className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
            />
          )}

          {cards.map((card, index) => {
            const Icon = icons[card.icon]

            return (
              <article
                key={card.title}
                className={`group relative flex min-h-[17rem] flex-col rounded-[1.35rem] border border-border/80 bg-card p-5 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_46px_rgba(15,23,42,0.09)] motion-reduce:transform-none motion-reduce:transition-none sm:p-6 ${
                  isMethodology ? "lg:min-h-[19rem] lg:p-6" : "lg:min-h-[18rem]"
                }`}
              >
                <div className="relative z-10 flex items-center justify-between gap-4">
                  {isMethodology ? (
                    <span className="flex size-10 items-center justify-center rounded-full border border-border bg-background font-heading text-xs font-medium tabular-nums text-muted-foreground shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  ) : (
                    <span className="max-w-[12rem] text-[0.6rem] leading-5 font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                      {card.label}
                    </span>
                  )}

                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-secondary/70 text-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground motion-reduce:transition-none sm:size-12">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
                  </span>
                </div>

                {isMethodology && (
                  <p className="mt-6 text-[0.6rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    {card.label}
                  </p>
                )}

                <h3 className="mt-5 font-heading text-lg font-semibold tracking-[-0.045em] text-foreground sm:text-xl">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-sm leading-6 text-muted-foreground">
                  {card.description}
                </p>

                {card.action && (
                  <Link
                    href={card.action.href}
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-semibold text-foreground transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                  >
                    {card.action.label}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                    />
                  </Link>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
