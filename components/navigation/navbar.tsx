"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactDialog } from "@/components/navigation/contact-dialog"
import { Link } from "react-aria-components"

const navItems = ["Product", "Solutions", "Pricing", "Resources"]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsMenuOpen((open) => !open)
  }

  return (
    <header className="px-3 py-4 md:px-6 md:py-6">
      <nav
        aria-label="Navigation principale"
        className={`mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-2 border border-border/80 bg-card/80 px-3 py-2.5 shadow-sm backdrop-blur-sm sm:px-4 sm:py-3 md:flex-nowrap md:rounded-full ${isMenuOpen ? "rounded-3xl" : "rounded-full"}`}
      >
        <div className="flex items-center justify-start md:w-28">
          <div className="flex size-9 items-center justify-center rounded-full border border-border bg-secondary text-sm font-semibold text-foreground shadow-sm sm:size-10">
            J
          </div>
        </div>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex items-center justify-center gap-6 text-sm font-medium text-muted-foreground lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="transition-colors duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="ml-auto flex items-center justify-end gap-1.5 md:ml-0 md:w-28">
          <ContactDialog>
            <Button
              size="lg"
              className="rounded-full px-3 text-xs shadow-sm sm:px-4 sm:text-sm md:px-5"
            >
              Parler à un expert
            </Button>
          </ContactDialog>
          <Button
            variant="ghost"
            size="icon"
            type="button"
            className="size-10 shrink-0 md:hidden"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onPress={handleToggleMenu}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" />
            ) : (
              <Menu aria-hidden="true" />
            )}
          </Button>
        </div>

        <div
          id="mobile-navigation"
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
          className={`basis-full overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out motion-reduce:transition-none md:hidden ${
            isMenuOpen
              ? "pointer-events-auto max-h-80 opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2 flex flex-col gap-1 border-t border-border/80 pt-2">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                onPress={() => setIsMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
