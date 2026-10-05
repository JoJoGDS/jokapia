"use client"

import { ArrowRight, Compass, Lightbulb, ShieldCheck } from "lucide-react"
import { ContactDialog } from "@/components/navigation/contact-dialog"
import { Button } from "@/components/ui/button"
import { Link } from "react-aria-components"

const principles = [
  {
    icon: Lightbulb,
    title: "Des solutions utiles",
    description:
      "Nous partons de vos besoins pour proposer des réponses concrètes, adaptées à votre activité.",
  },
  {
    icon: Compass,
    title: "Un accompagnement clair",
    description:
      "Nous avançons avec vous, du cadrage de votre besoin jusqu’à la mise en service de la solution.",
  },
  {
    icon: ShieldCheck,
    title: "La fiabilité au quotidien",
    description:
      "Nous privilégions des choix durables et des équipements pensés pour un usage professionnel.",
  },
] as const

export function AboutSection() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-14">
        <div className="grid min-w-0 items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="min-w-0 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              À propos de Jokapia
            </p>
            <h1 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.05em] text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              La technologie au service de vos projets.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base md:text-lg md:leading-8">
              Jokapia accompagne les entreprises dans leurs projets électriques,
              numériques et d’équipement. Nous réunissons plusieurs expertises pour
              vous aider à passer d’un besoin concret à une solution qui fonctionne
              dans votre quotidien.
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-5">
              <ContactDialog>
                <Button className="min-h-11 w-full rounded-full px-6 shadow-sm sm:w-auto">
                  Parlons de votre projet
                  <ArrowRight aria-hidden="true" className="ml-1 size-4" />
                </Button>
              </ContactDialog>
              <Link
                href="/#services"
                className="inline-flex min-h-11 items-center justify-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:justify-start"
              >
                Découvrir nos expertises <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-border bg-secondary shadow-sm sm:rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
                alt="Espace de travail lumineux, aménagé pour la collaboration"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-4 max-w-[17rem] rounded-2xl border border-border/80 bg-card/95 p-4 shadow-sm backdrop-blur sm:bottom-6 sm:-left-6 sm:p-5">
              <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
                Johnstoni Okapia sarl
              </p>
              <p className="mt-2 text-sm leading-6 text-foreground">
                Des solutions modernes pour concevoir, connecter et équiper votre activité.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-mission-heading"
        className="border-y border-border/80 bg-muted/20"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              Notre mission
            </p>
            <h2
              id="about-mission-heading"
              className="mt-3 max-w-md text-2xl leading-tight font-semibold tracking-[-0.04em] sm:text-3xl"
            >
              Des idées mieux outillées pour avancer.
            </h2>
          </div>
          <div className="max-w-2xl space-y-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            <p>
              Un projet peut réunir plusieurs enjeux : une installation fiable,
              des outils numériques adaptés ou du matériel bien choisi. Jokapia
              rassemble ces expertises pour vous aider à prendre les bonnes
              décisions et à les mettre en œuvre avec méthode.
            </p>
            <p>
              Notre approche est simple : comprendre votre contexte, définir une
              réponse adaptée, puis vous accompagner dans sa réalisation et sa
              prise en main.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-principles-heading"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Notre façon de travailler
          </p>
          <h2
            id="about-principles-heading"
            className="mt-3 text-2xl leading-tight font-semibold tracking-[-0.04em] sm:text-3xl"
          >
            Une équipe à vos côtés, à chaque étape.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
          {principles.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm sm:p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary text-foreground">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
