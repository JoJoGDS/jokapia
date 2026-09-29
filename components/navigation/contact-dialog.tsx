"use client"

import { useEffect, useState, type FormEvent, type ReactNode } from "react"
import {
  Building2,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  UserRound,
  X,
} from "lucide-react"
import {
  Dialog,
  DialogTrigger,
  Heading,
  Input,
  Label,
  Modal,
  ModalOverlay,
  TextArea,
  TextField,
} from "react-aria-components"
import { Button } from "@/components/ui/button"

const inputClassName =
  "h-11 w-full rounded-xl border border-input bg-background pl-10 pr-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/75 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/20"

function ContactField({
  label,
  name,
  placeholder,
  icon: Icon,
  type = "text",
}: {
  label: string
  name: string
  placeholder: string
  icon: typeof UserRound
  type?: string
}) {
  return (
    <TextField
      name={name}
      type={type}
      className="flex flex-col gap-1.5"
    >
      <Label className="text-sm font-medium text-foreground">
        {label}
      </Label>
      <div className="relative">
        <Icon
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          autoComplete={
            name === "name"
              ? "name"
              : name === "organization"
                ? "organization"
                : name === "email"
                  ? "email"
                  : "tel"
          }
          placeholder={placeholder}
          className={inputClassName}
        />
      </div>
    </TextField>
  )
}

export function ContactDialog({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!submitted || !isOpen) return

    const timeoutId = window.setTimeout(() => setIsOpen(false), 5000)
    return () => window.clearTimeout(timeoutId)
  }, [isOpen, submitted])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <DialogTrigger
      isOpen={isOpen}
      onOpenChange={(nextIsOpen) => {
        setIsOpen(nextIsOpen)
        if (!nextIsOpen) setSubmitted(false)
      }}
    >
      {children}
      <ModalOverlay className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/55 p-3 backdrop-blur-[3px] data-[entering]:opacity-0 data-[exiting]:opacity-0 sm:p-6">
        <Modal className="w-full max-w-xl outline-none data-[entering]:scale-[0.98] data-[entering]:opacity-0 data-[exiting]:scale-[0.98] data-[exiting]:opacity-0">
          <Dialog
            aria-labelledby="contact-dialog-title"
            className="relative max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-3xl border border-border/80 bg-background p-5 shadow-2xl shadow-slate-950/20 transition duration-200 outline-none motion-reduce:transition-none sm:max-h-[calc(100dvh-3rem)] sm:p-8"
          >
            {({ close }) => (
              <>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Fermer la fenêtre"
                  onPress={close}
                  className="absolute top-4 right-4 rounded-full text-muted-foreground sm:top-6 sm:right-6"
                >
                  <X aria-hidden="true" />
                </Button>

                <div className="mb-6 flex gap-4 pr-8">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Mail
                      aria-hidden="true"
                      className="size-6"
                      strokeWidth={1.7}
                    />
                  </div>
                  <div>
                    <Heading
                      id="contact-dialog-title"
                      slot="title"
                      className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
                    >
                      Parler à un expert
                    </Heading>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                      Décrivez votre projet et un expert vous contactera dans
                      les plus brefs délais.
                    </p>
                  </div>
                </div>

                {submitted ? (
                  <div
                    role="status"
                    className="validation-card-enter relative overflow-hidden rounded-2xl border border-emerald-600/20 bg-emerald-600/5 px-5 py-8 text-center"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 bg-emerald-600/15"
                    >
                      <div className="validation-progress h-full origin-left bg-emerald-600" />
                    </div>
                    <CheckCircle2
                      aria-hidden="true"
                      className="mx-auto mb-3 size-10 text-emerald-600"
                    />
                    <p className="font-semibold text-foreground">
                      Formulaire validé avec succès !
                    </p>
                    <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                      Tous les champs sont valides. Le formulaire n’est pas
                      encore connecté à un service d’envoi.
                    </p>
                    <Button
                      type="button"
                      className="mt-5 rounded-full px-6"
                      onPress={close}
                    >
                      Fermer
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <ContactField
                        label="Votre nom"
                        name="name"
                        placeholder="Votre nom complet"
                        icon={UserRound}
                      />
                      <ContactField
                        label="Nom de votre organisation"
                        name="organization"
                        placeholder="Nom de votre entreprise ou organisation"
                        icon={Building2}
                      />
                      <ContactField
                        label="Email"
                        name="email"
                        placeholder="votre@email.com"
                        icon={Mail}
                        type="email"
                      />
                      <ContactField
                        label="Numéro de téléphone"
                        name="phone"
                        placeholder="+243 99 999 9999"
                        icon={Phone}
                        type="tel"
                      />
                    </div>

                    <TextField
                      name="message"
                      className="flex flex-col gap-1.5"
                    >
                      <Label className="text-sm font-medium text-foreground">
                        Décrivez votre besoin
                      </Label>
                      <div className="relative">
                        <MessageCircle
                          aria-hidden="true"
                          className="pointer-events-none absolute top-3 left-3 size-4 text-muted-foreground"
                        />
                        <TextArea
                          placeholder="Ex. : Nous cherchons un partenaire pour digitaliser notre processus..."
                          rows={4}
                          className="min-h-28 w-full resize-y rounded-xl border border-input bg-background py-2.5 pr-3 pl-10 text-sm text-foreground transition outline-none placeholder:text-muted-foreground/75 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/20"
                        />
                      </div>
                    </TextField>

                    <p className="pt-1 text-center text-xs leading-5 text-muted-foreground">
                      Vos données resteront confidentielles. Un expert vous
                      contactera sous 48h.
                    </p>

                    <div className="flex flex-col-reverse gap-2 pt-1 sm:flex-row sm:justify-end">
                      <Button
                        type="button"
                        variant="outline"
                        className="rounded-full px-6"
                        onPress={close}
                      >
                        Annuler
                      </Button>
                      <Button
                        type="submit"
                        className="rounded-full bg-primary px-7 text-primary-foreground shadow-sm hover:bg-primary/85"
                      >
                        Envoyer
                      </Button>
                    </div>
                  </form>
                )}
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  )
}
