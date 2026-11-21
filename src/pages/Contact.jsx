import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faPaperPlane,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { SCHOOL_INFO } from "@/data/schoolData"

const contactSchema = z.object({
  fullName: z.string().min(2, { message: "Votre nom est obligatoire" }),
  email: z.string().email({ message: "Adresse email valide requise" }),
  phone: z.string().min(8, { message: "Numéro de téléphone requis" }),
  subject: z.string().min(3, { message: "Veuillez préciser le sujet" }),
  message: z.string().min(10, { message: "Votre message doit contenir au moins 10 caractères" }),
})

export default function Contact() {
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 600))
    console.log("Message de contact :", data)
    setSent(true)
    reset()
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge className="bg-[#7A1C24] text-white">Localisation & Contact</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            Contactez le LYPAM à Andakabe
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Notre équipe pédagogique et administrative vous accueille à Andakabe, Morondava pour vous renseigner sur la scolarité du Préscolaire à la Terminale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="bg-[#5A1218] text-white border-none shadow-xl">
              <CardHeader>
                <Badge className="w-fit bg-[#F4B41A] text-[#5A1218] font-bold">Secrétariat Général</Badge>
                <CardTitle className="text-2xl font-bold text-white pt-2">
                  Nos Coordonnées
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-sm text-white/90">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#F4B41A] shrink-0">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div>
                    <p className="font-bold text-white">Adresse Précise</p>
                    <p className="text-white/90 font-semibold">{SCHOOL_INFO.neighborhood}</p>
                    <p className="text-white/80">{SCHOOL_INFO.city} 619, {SCHOOL_INFO.region}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#F4B41A] shrink-0">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <p className="font-bold text-white">Téléphone</p>
                    <p className="text-white/80">{SCHOOL_INFO.phone}</p>
                    <p className="text-white/80">{SCHOOL_INFO.altPhone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#F4B41A] shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <p className="font-bold text-white">Email</p>
                    <p className="text-white/80">{SCHOOL_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#F4B41A] shrink-0">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div>
                    <p className="font-bold text-white">Horaires d'ouverture</p>
                    <p className="text-white/80">{SCHOOL_INFO.hours}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15 flex items-center gap-3">
                  <span className="text-xs text-white/70">Nous suivre :</span>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F4B41A] hover:text-[#5A1218] flex items-center justify-center transition-colors"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F4B41A] hover:text-[#5A1218] flex items-center justify-center transition-colors"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Envoyez-nous un Message</h2>

            {sent ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
                <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-600 text-4xl" />
                <h3 className="text-xl font-bold text-emerald-900">Message transmis avec succès !</h3>
                <p className="text-emerald-700 text-sm">
                  Merci d'avoir contacté le LYPAM Andakabe. Nous vous répondrons dans les plus brefs délais.
                </p>
                <Button
                  onClick={() => setSent(false)}
                  variant="outline"
                  className="border-emerald-600 text-emerald-800 hover:bg-emerald-100"
                >
                  Envoyer un nouveau message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Nom et Prénom *</Label>
                  <Input id="fullName" placeholder="Votre nom complet" {...register("fullName")} className="mt-1" />
                  {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="votre.email@domaine.com" {...register("email")} className="mt-1" />
                    {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input id="phone" placeholder="034 00 000 00" {...register("phone")} className="mt-1" />
                    {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Sujet *</Label>
                  <Input id="subject" placeholder="Ex: Renseignement inscription Maternelle / Lycée" {...register("subject")} className="mt-1" />
                  {errors.subject && <p className="text-xs text-rose-600 mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" rows={4} placeholder="Votre question ou demande..." {...register("message")} className="mt-1" />
                  {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#7A1C24] hover:bg-[#5A1218] text-white font-bold py-6 text-base shadow transition-all"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
