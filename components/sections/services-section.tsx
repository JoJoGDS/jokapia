import { ProgressiveCardSection } from "@/components/sections/progressive-card-section"

const services = [
  {
    category: "DEVIS ÉLECTRIQUE",
    title: "Études électriques",
    description:
      "Nous concevons des installations électriques fiables, adaptées aux exigences de votre bâtiment. Vous recevez un devis détaillé et des recommandations claires pour maîtriser votre budget.",
    icon: "zap",
  },
  {
    category: "SOLUTIONS SUR-MESURE",
    title: "Développement web",
    description:
      "Nous transformons vos besoins métier en applications et plateformes pensées pour vos équipes. De la conception au déploiement, vous obtenez un outil évolutif qui simplifie vos opérations.",
    icon: "code",
  },
  {
    category: "INTERNET ET SOLUTIONS IT",
    title: "Réseaux & IT",
    description:
      "Nous mettons en place une connectivité stable et une infrastructure informatique sécurisée. Votre organisation gagne en continuité, en collaboration et en sérénité au quotidien.",
    icon: "network",
  },
  {
    category: "ÉQUIPEMENTS ÉLECTRONIQUES",
    title: "Matériel pro",
    description:
      "Nous sélectionnons les équipements adaptés à vos usages et à votre environnement de travail. Vous bénéficiez de conseils à l’achat et de solutions prêtes à être intégrées.",
    icon: "monitor",
  },
] as const

export function ServicesSection() {
  return (
    <ProgressiveCardSection
      id="services"
      headingId="services-heading"
      eyebrow="Jokapia · Nos expertises"
      heading="Nos expertises clés"
      introduction="Des solutions concrètes pour concevoir, connecter et équiper votre activité."
      cards={services.map(({ category, title, description, icon }) => ({
        label: category,
        title,
        description,
        icon,
        action: { href: "#contact", label: "En savoir plus" },
      }))}
    />
  )
}
