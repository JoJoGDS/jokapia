import { ProgressiveCardSection } from "@/components/sections/progressive-card-section"

const steps = [
  {
    number: "01",
    title: "Écouter",
    description:
      "Nous prenons le temps de comprendre vos objectifs, vos contraintes et les besoins de vos équipes. Vous repartez avec un cadrage clair et des priorités partagées.",
    icon: "messages",
  },
  {
    number: "02",
    title: "Concevoir",
    description:
      "Nous définissons une solution adaptée à votre activité, avec un périmètre et un plan d’action concrets. Vous validez la direction avant le lancement.",
    icon: "compass",
  },
  {
    number: "03",
    title: "Réaliser",
    description:
      "Nous développons, installons ou configurons votre solution par étapes, avec des points de suivi réguliers. Vous gardez une visibilité sur l’avancement et les décisions.",
    icon: "scan",
  },
  {
    number: "04",
    title: "Accompagner",
    description:
      "Nous vous aidons à prendre en main la solution et restons disponibles après sa mise en service. Votre investissement continue de répondre à vos besoins dans la durée.",
    icon: "rocket",
  },
] as const

export function MethodologySection() {
  return (
    <ProgressiveCardSection
      id="methodologie"
      headingId="methodology-heading"
      eyebrow="Un accompagnement de bout en bout"
      heading="Notre méthodologie"
      introduction="Une démarche claire et collaborative, de la première idée au suivi de votre solution."
      variant="methodology"
      cards={steps.map(({ number, title, description, icon }) => ({
        label: `Étape ${number}`,
        title,
        description,
        icon,
      }))}
    />
  )
}
