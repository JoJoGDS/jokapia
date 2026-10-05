const partnerLogos = [
  { name: "GO SHOP", short: "GS" },
  { name: "JESUITE REFUGEE SERVICE", short: "JRS" },
  { name: "MERCY CORPS", short: "MC" },
  { name: "CONGOLESE GOVERNMENT ARMOIRIE", short: "CGA" },
  { name: "UNHCR", short: "UN" },
  { name: "CARE", short: "C" },
  { name: "WORLD VISION", short: "WV" },
] as const

export function PartnersSection() {
  const repeatedPartners = [...partnerLogos, ...partnerLogos]

  return (
    <section className="border-y border-border/80 bg-muted/25">
      <div className="mx-auto max-w-7xl px-3 py-3 md:px-6 lg:py-4">
        <div className="relative overflow-hidden rounded-full border border-border/70 bg-background/60 py-1.5">
          <div className="partner-marquee-track flex w-max items-center gap-3 sm:gap-4 md:gap-5">
            {repeatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="partner-tile flex shrink-0 items-center gap-2 rounded-full border border-border/70 bg-card/40 px-3 py-2 text-foreground sm:px-4"
              >
                <div className="flex size-7 items-center justify-center rounded-full border border-border bg-secondary text-[0.52rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase sm:size-8">
                  {partner.short}
                </div>
                <span className="whitespace-nowrap text-[0.56rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase sm:text-[0.62rem]">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
