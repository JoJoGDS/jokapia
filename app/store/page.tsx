import { ArrowLeft, ArrowRight, ArrowUpRight, Search, SlidersHorizontal } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navigation/navbar"
import { ContactDialog } from "@/components/navigation/contact-dialog"
import { SiteFooter } from "@/components/navigation/site-footer"
import { Button, LinkButton } from "@/components/ui/button"
import { productCategories, products } from "@/lib/products"

const PRODUCTS_PER_PAGE = 6
type SearchParams = Promise<Record<string, string | string[] | undefined>>

function firstParam(value: string | string[] | undefined, fallback = "") {
  return Array.isArray(value) ? value[0] ?? fallback : value ?? fallback
}

function catalogUrl({ q, categorie, page }: { q?: string; categorie?: string; page?: number }) {
  const params = new URLSearchParams()
  if (q) params.set("q", q)
  if (categorie && categorie !== productCategories[0]) params.set("categorie", categorie)
  if (page && page > 1) params.set("page", String(page))
  const query = params.toString()
  return query ? `/store?${query}` : "/store"
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price)
}

export default async function StorePage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const params = await searchParams
  const q = firstParam(params.q)
  const categorie = firstParam(params.categorie, productCategories[0])
  const pageParam = firstParam(params.page, "1")
  const activeCategory = productCategories.includes(categorie as (typeof productCategories)[number])
    ? categorie
    : productCategories[0]
  const normalizedQuery = q.trim().toLocaleLowerCase("fr")
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === productCategories[0] || product.category === activeCategory
    const searchableText = `${product.name} ${product.description} ${product.category}`.toLocaleLowerCase("fr")
    return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery))
  })
  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE))
  const requestedPage = Number.parseInt(pageParam, 10) || 1
  const currentPage = Math.min(Math.max(requestedPage, 1), pageCount)
  const visibleProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE,
  )

  return (
    <div className="min-h-svh bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Accueil</Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">Boutique</span>
        </div>

        <section aria-labelledby="catalogue-title" className="mb-10 grid gap-8 rounded-[2rem] border border-border/80 bg-card p-6 shadow-sm sm:p-9 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
              Catalogue de démonstration
            </p>
            <h1 id="catalogue-title" className="text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
              L’équipement qu’il vous faut, <span className="text-muted-foreground">au même endroit.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              Parcourez une sélection de matériel électrique, informatique et solaire proposée par Jokapia.
              Contactez-nous pour confirmer la disponibilité et obtenir un devis.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-background px-5 py-4 lg:min-w-56">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Références en vitrine</p>
            <p className="mt-2 text-3xl font-semibold">{products.length.toString().padStart(2, "0")}</p>
            <p className="mt-1 text-xs text-muted-foreground">réparties en 4 catégories</p>
          </div>
        </section>

        <section aria-label="Recherche et catégories" className="mb-8 space-y-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2 text-sm font-medium">
              <SlidersHorizontal aria-hidden="true" className="size-4 text-muted-foreground" />
              Explorer par catégorie
            </div>
            <form action="/store" method="get" role="search" className="flex w-full gap-2 lg:max-w-md">
              {activeCategory !== productCategories[0] && <input type="hidden" name="categorie" value={activeCategory} />}
              <label className="relative min-w-0 flex-1">
                <span className="sr-only">Rechercher un produit</span>
                <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  name="q"
                  defaultValue={q}
                  placeholder="Rechercher un produit…"
                  className="h-11 w-full rounded-full border border-input bg-background pr-4 pl-10 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
                />
              </label>
              <Button type="submit" className="h-11 rounded-full px-5">Rechercher</Button>
            </form>
          </div>
          <nav aria-label="Catégories de produits" className="flex gap-2 overflow-x-auto pb-2">
            {productCategories.map((category) => {
              const isActive = category === activeCategory
              return (
                <Link
                  key={category}
                  href={catalogUrl({ q, categorie: category })}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex min-h-10 shrink-0 items-center rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${isActive ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground"}`}
                >
                  {category}
                </Link>
              )
            })}
          </nav>
        </section>

        <section aria-labelledby="products-heading">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="products-heading" className="text-xl font-semibold tracking-tight sm:text-2xl">
                {activeCategory === productCategories[0] ? "Tous les produits" : activeCategory}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length > 1 ? "références" : "référence"}
                {q ? ` pour « ${q} »` : ""}
              </p>
            </div>
            <p className="text-xs text-muted-foreground">Prix indicatifs en dollars américains (USD)</p>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product) => (
                <article key={product.id} className="group overflow-hidden rounded-3xl border border-border/80 bg-card transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-md">
                  <div className="relative aspect-[1.55/1] overflow-hidden bg-muted">
                    <img src={product.image} alt={product.imageAlt} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                    {product.badge && <span className="absolute top-3 left-3 rounded-full border border-border/70 bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">{product.badge}</span>}
                    <span className="absolute right-3 bottom-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">{product.category}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold tracking-tight">{product.name}</h3>
                      <p className="shrink-0 text-base font-semibold">{formatPrice(product.price)}</p>
                    </div>
                    <p className="mt-2 min-h-10 text-sm leading-5 text-muted-foreground">{product.description}</p>
                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-border/80 pt-4">
                      <p className={`inline-flex items-center gap-2 text-xs font-medium ${product.stock > 0 ? "text-emerald-700 dark:text-emerald-400" : "text-muted-foreground"}`}>
                        <span className={`size-2 rounded-full ${product.stock > 0 ? "bg-emerald-500" : "bg-muted-foreground"}`} aria-hidden="true" />
                        {product.stock > 0 ? `Disponible · ${product.stock} en stock` : "Indisponible"}
                      </p>
                      <ContactDialog>
                        <Button variant="ghost" size="sm" className="rounded-full px-2.5">
                          Demander <ArrowUpRight aria-hidden="true" />
                        </Button>
                      </ContactDialog>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-border bg-muted/20 px-6 py-16 text-center">
              <p className="font-medium">Aucun produit trouvé</p>
              <p className="mt-2 text-sm text-muted-foreground">Essayez un autre mot-clé ou choisissez une autre catégorie.</p>
              <LinkButton href="/store" variant="outline" className="mt-5 rounded-full">Voir tout le catalogue</LinkButton>
            </div>
          )}

          {pageCount > 1 && (
            <nav aria-label="Pagination du catalogue" className="mt-9 flex items-center justify-center gap-2">
              <LinkButton
                href={catalogUrl({ q, categorie: activeCategory, page: currentPage - 1 })}
                variant="outline"
                size="icon"
                isDisabled={currentPage === 1}
                aria-label="Page précédente"
                className="rounded-full"
              >
                <ArrowLeft aria-hidden="true" />
              </LinkButton>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
                <Link
                  key={pageNumber}
                  href={catalogUrl({ q, categorie: activeCategory, page: pageNumber })}
                  aria-current={currentPage === pageNumber ? "page" : undefined}
                  className={`flex size-10 items-center justify-center rounded-full border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${currentPage === pageNumber ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-muted"}`}
                >
                  {pageNumber}
                </Link>
              ))}
              <LinkButton
                href={catalogUrl({ q, categorie: activeCategory, page: currentPage + 1 })}
                variant="outline"
                size="icon"
                isDisabled={currentPage === pageCount}
                aria-label="Page suivante"
                className="rounded-full"
              >
                <ArrowRight aria-hidden="true" />
              </LinkButton>
            </nav>
          )}
        </section>

        <aside className="mt-12 flex flex-col gap-4 rounded-3xl border border-border bg-muted/30 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="font-semibold">Vous cherchez un équipement précis ?</h2>
            <p className="mt-1 text-sm text-muted-foreground">Notre équipe peut vérifier le stock et vous conseiller.</p>
          </div>
          <ContactDialog>
            <Button className="w-fit rounded-full">Nous contacter <ArrowUpRight aria-hidden="true" /></Button>
          </ContactDialog>
        </aside>
        <p className="mt-5 text-center text-xs text-muted-foreground">Les prix et quantités affichés sont indicatifs et doivent être confirmés auprès de notre équipe.</p>
      </main>
      <SiteFooter />
    </div>
  )
}
