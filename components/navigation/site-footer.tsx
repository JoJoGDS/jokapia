"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Moon, Sun } from "lucide-react"
import { Link } from "react-aria-components"
import { ContactDialog } from "@/components/navigation/contact-dialog"
import { Button } from "@/components/ui/button"

const exploreLinks = [
  { label: "À propos", href: "/about" },
  { label: "Boutique produits", href: "/store" },
  { label: "Nos expertises", href: "/#services" },
  { label: "Notre méthode", href: "/#methodologie" },
] as const

const serviceLinks = [
  "Études électriques",
  "Développement web",
  "Réseaux & IT",
  "Matériel professionnel",
] as const

const footerLinkClassName =
  "inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"

export function SiteFooter() {
  const { resolvedTheme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const isDark = isMounted && resolvedTheme === "dark"
  const themeAction = isDark ? "Passer au thème clair" : "Passer au thème sombre"

  return (
    <footer className="border-t border-border/80 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 pb-6 pt-10 sm:px-6 sm:pt-14 lg:pt-16">
        <div className="mb-10 flex flex-col gap-5 rounded-3xl border border-border/80 bg-card p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-7 lg:p-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              Un projet en tête ?
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Faisons avancer vos idées.
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Parlons de vos besoins et imaginons une solution adaptée à votre activité.
            </p>
          </div>
          <ContactDialog>
            <Button className="min-h-11 w-full shrink-0 rounded-full px-5 shadow-sm sm:w-auto">
              Démarrer un projet
              <ArrowRight aria-hidden="true" className="ml-1 size-4" />
            </Button>
          </ContactDialog>
        </div>

        <div className="grid gap-9 border-b border-border/80 pb-9 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-8">
          <div className="max-w-sm">
            <Link
              href="#top"
              aria-label="Jokapia, retour à l’accueil"
              className="inline-flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <span className="inline-flex items-center gap-0">
                <Image src="/logo-mark.svg" alt="" width={54} height={44} />
                <Image src="/logo-wordmark.svg" alt="" width={68} height={24} />
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Des solutions modernes pour concevoir, connecter et équiper votre activité.
            </p>
          </div>

          <nav aria-label="Explorer le site" className="flex flex-col items-start gap-3">
            <h3 className="mb-1 text-xs font-semibold tracking-[0.16em] text-foreground uppercase">
              Explorer
            </h3>
            {exploreLinks.map((link) => (
              <Link key={link.href} href={link.href} className={footerLinkClassName}>
                {link.label}
                <ArrowUpRight aria-hidden="true" className="size-3.5 opacity-60" />
              </Link>
            ))}
          </nav>

          <nav aria-label="Nos services" className="flex flex-col items-start gap-3">
            <h3 className="mb-1 text-xs font-semibold tracking-[0.16em] text-foreground uppercase">
              Nos services
            </h3>
            {serviceLinks.map((label) => (
              <Link key={label} href="/#services" className={footerLinkClassName}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-3">
            <h3 className="mb-1 text-xs font-semibold tracking-[0.16em] text-foreground uppercase">
              Contact
            </h3>
            <p className="text-sm font-medium text-foreground">Johnstoni Okapia sarl</p>
            <address className="max-w-[15rem] text-sm leading-6 text-muted-foreground not-italic">
              112, Avenue Maniema Q. Kyeshero
            </address>
            <a href="tel:+243902022222" className={footerLinkClassName}>
              +243902022222
            </a>
            <a href="mailto:contact@jokapia.com" className={footerLinkClassName}>
              contact@jokapia.com
            </a>
            <p className="max-w-[15rem] text-sm leading-6 text-muted-foreground">
              Une question ou un besoin précis ? Notre équipe est à votre écoute.
            </p>
            <ContactDialog>
              <Button
                variant="outline"
                className="mt-1 min-h-10 rounded-full px-4 text-sm"
              >
                Nous contacter
                <ArrowRight aria-hidden="true" className="ml-1 size-4" />
              </Button>
            </ContactDialog>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Johnstoni Okapia sarl. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <Button
              type="button"
              variant="ghost"
              isDisabled={!isMounted}
              aria-label={themeAction}
              onPress={() => setTheme(isDark ? "light" : "dark")}
              className="min-h-10 rounded-full px-3 text-xs text-muted-foreground hover:text-foreground"
            >
              {isDark ? (
                <Sun aria-hidden="true" className="size-4" />
              ) : (
                <Moon aria-hidden="true" className="size-4" />
              )}
              {themeAction}
            </Button>
            <Link
              href="#top"
              className="inline-flex min-h-10 w-fit items-center gap-2 rounded-sm text-xs transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              Retour en haut <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
