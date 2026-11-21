import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGraduationCap,
  faCheckCircle,
  faFileLines,
  faCalendarCheck,
  faPaperPlane,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { SCHOOL_INFO } from "@/data/schoolData"

const formSchema = z.object({
  studentName: z.string().min(2, { message: "Le nom complet est obligatoire" }),
  birthDate: z.string().min(1, { message: "La date de naissance est obligatoire" }),
  levelRequested: z.string().min(1, { message: "Veuillez choisir la classe" }),
  lastSchool: z.string().optional(),
  parentName: z.string().min(2, { message: "Le nom du parent ou tuteur est requis" }),
  parentPhone: z.string().min(8, { message: "Un numéro de téléphone valide est obligatoire" }),
  parentEmail: z.string().email({ message: "Adresse email invalide" }).optional().or(z.literal("")),
  notes: z.string().optional(),
})

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      birthDate: "",
      levelRequested: "Prescolaire",
      lastSchool: "",
      parentName: "",
      parentPhone: "",
      parentEmail: "",
      notes: "",
    },
  })

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.log("Dossier de pré-inscription soumis :", data)
    setSubmitted(true)
    reset()
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge className="bg-[#7A1C24] text-white">Rentrée Scolaire 2026-2027</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            Admissions & Inscriptions
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Rejoignez la communauté du {SCHOOL_INFO.name} à <strong>{SCHOOL_INFO.neighborhood}</strong>. Nous accueillons les élèves <strong>dès la section Préscolaire (3 ans) jusqu'à la Terminale</strong>.
          </p>
        </div>

        {/* Steps overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#FAF8F5] border-stone-200">
            <CardHeader>
              <div className="w-10 h-10 rounded-full bg-[#7A1C24] text-white flex items-center justify-center font-bold mb-2">
                1
              </div>
              <CardTitle className="text-lg font-bold">Pré-inscription en Ligne</CardTitle>
              <CardDescription className="text-slate-600">
                Remplissez le formulaire en ligne ou passez au secrétariat du LYPAM à Andakabe.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-[#FAF8F5] border-stone-200">
            <CardHeader>
              <div className="w-10 h-10 rounded-full bg-[#5A1218] text-white flex items-center justify-center font-bold mb-2">
                2
              </div>
              <CardTitle className="text-lg font-bold">Étude du dossier</CardTitle>
              <CardDescription className="text-slate-600">
                Vérification des pièces fournies, échange bienveillant avec les parents et orientation.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-[#FAF8F5] border-stone-200">
            <CardHeader>
              <div className="w-10 h-10 rounded-full bg-[#F4B41A] text-[#5A1218] flex items-center justify-center font-bold mb-2">
                3
              </div>
              <CardTitle className="text-lg font-bold">Validation & Inscription</CardTitle>
              <CardDescription className="text-slate-600">
                Confirmation d'admission définitive, règlement des droits et remise des fournitures.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Form and Requirements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-sm">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Formulaire de Candidature</h2>
              <p className="text-slate-600 text-sm mt-1">
                Disponible pour tous les niveaux : Préscolaire, Primaire, Collège et Lycée.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
                <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-600 text-4xl" />
                <h3 className="text-xl font-bold text-emerald-900">Dossier enregistré avec succès !</h3>
                <p className="text-emerald-700 text-sm max-w-md mx-auto">
                  Merci d'avoir choisi le LYPAM Andakabe Morondava. Notre secrétariat vous recontactera rapidement par téléphone.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="border-emerald-600 text-emerald-800 hover:bg-emerald-100"
                >
                  Inscrire un autre enfant
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[#7A1C24] uppercase tracking-wider border-b border-stone-200 pb-2">
                    Informations sur l'Élève
                  </h3>

                  <div>
                    <Label htmlFor="studentName">Nom et Prénom(s) de l'enfant *</Label>
                    <Input
                      id="studentName"
                      placeholder="Ex: RAKOTOARISOA Herilala"
                      {...register("studentName")}
                      className="mt-1"
                    />
                    {errors.studentName && (
                      <p className="text-xs text-rose-600 mt-1">{errors.studentName.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="birthDate">Date de Naissance *</Label>
                      <Input
                        id="birthDate"
                        type="date"
                        {...register("birthDate")}
                        className="mt-1"
                      />
                      {errors.birthDate && (
                        <p className="text-xs text-rose-600 mt-1">{errors.birthDate.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="levelRequested">Niveau ou Classe demandée *</Label>
                      <select
                        id="levelRequested"
                        {...register("levelRequested")}
                        className="mt-1 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        <optgroup label="1. Préscolaire & Maternelle">
                          <option value="Prescolaire-Petite">Préscolaire - Petite Section (dès 3 ans)</option>
                          <option value="Prescolaire-Moyenne">Préscolaire - Moyenne Section</option>
                          <option value="Prescolaire-Grande">Préscolaire - Grande Section</option>
                        </optgroup>
                        <optgroup label="2. Enseignement Primaire">
                          <option value="Primaire-CP1">Primaire - CP1</option>
                          <option value="Primaire-CP2">Primaire - CP2</option>
                          <option value="Primaire-CE">Primaire - CE</option>
                          <option value="Primaire-CM1">Primaire - CM1</option>
                          <option value="Primaire-CM2">Primaire - CM2 (Prépa CEPE)</option>
                        </optgroup>
                        <optgroup label="3. Collège">
                          <option value="College-6eme">Collège - 6ème</option>
                          <option value="College-5eme">Collège - 5ème</option>
                          <option value="College-4eme">Collège - 4ème</option>
                          <option value="College-3eme">Collège - 3ème (Prépa BEPC)</option>
                        </optgroup>
                        <optgroup label="4. Lycée">
                          <option value="Lycee-2nde">Lycée - Seconde Générale</option>
                          <option value="Lycee-1ere-L">Lycée - 1ère Série L (Littéraire)</option>
                          <option value="Lycee-1ere-S">Lycée - 1ère Série S (Scientifique)</option>
                          <option value="Lycee-1ere-OSE">Lycée - 1ère Série OSE</option>
                          <option value="Lycee-Tle-L">Lycée - Terminale Série L</option>
                          <option value="Lycee-Tle-S">Lycée - Terminale Série S</option>
                          <option value="Lycee-Tle-OSE">Lycée - Terminale Série OSE</option>
                        </optgroup>
                      </select>
                      {errors.levelRequested && (
                        <p className="text-xs text-rose-600 mt-1">{errors.levelRequested.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="lastSchool">Établissement ou crèche d'origine (si déjà scolarisé)</Label>
                    <Input
                      id="lastSchool"
                      placeholder="Ex: École précédente ou 'Première scolarisation'"
                      {...register("lastSchool")}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-sm font-bold text-[#7A1C24] uppercase tracking-wider border-b border-stone-200 pb-2">
                    Informations sur le Parent / Tuteur
                  </h3>

                  <div>
                    <Label htmlFor="parentName">Nom du Parent ou Responsable Légal *</Label>
                    <Input
                      id="parentName"
                      placeholder="Ex: RAKOTO Jean"
                      {...register("parentName")}
                      className="mt-1"
                    />
                    {errors.parentName && (
                      <p className="text-xs text-rose-600 mt-1">{errors.parentName.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="parentPhone">Numéro de téléphone *</Label>
                      <Input
                        id="parentPhone"
                        placeholder="Ex: 034 00 000 00"
                        {...register("parentPhone")}
                        className="mt-1"
                      />
                      {errors.parentPhone && (
                        <p className="text-xs text-rose-600 mt-1">{errors.parentPhone.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="parentEmail">Email (optionnel)</Label>
                      <Input
                        id="parentEmail"
                        type="email"
                        placeholder="Ex: parent@email.com"
                        {...register("parentEmail")}
                        className="mt-1"
                      />
                      {errors.parentEmail && (
                        <p className="text-xs text-rose-600 mt-1">{errors.parentEmail.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Remarques ou besoins particuliers (optionnel)</Label>
                    <Textarea
                      id="notes"
                      rows={3}
                      placeholder="Précisions de santé, allergies, transport ou questions..."
                      {...register("notes")}
                      className="mt-1"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#7A1C24] hover:bg-[#5A1218] text-white font-bold py-6 text-base shadow-md transition-all"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  {isSubmitting ? "Envoi en cours..." : "Soumettre la Pré-inscription"}
                </Button>
              </form>
            )}
          </div>

          {/* Pieces a fournir */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="border-stone-200 bg-[#FAF8F5]">
              <CardHeader>
                <div className="flex items-center gap-2 text-[#7A1C24] mb-1">
                  <FontAwesomeIcon icon={faFileLines} />
                  <span className="text-xs font-bold uppercase tracking-wider">Dossier Physique</span>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  Dossier à Déposer à Andakabe
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Documents requis pour finaliser l'inscription :
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24] mt-0.5" />
                  <span>Copie d'acte de naissance de l'enfant</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24] mt-0.5" />
                  <span>Bulletins de l'année précédente (pour Primaire, Collège et Lycée)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24] mt-0.5" />
                  <span>Attestation de réussite officielle (CEPE pour 6ème, BEPC pour 2nde)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24] mt-0.5" />
                  <span>4 photos d'identité récentes</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24] mt-0.5" />
                  <span>Carnet de vaccination à jour (spécialement pour le Préscolaire)</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200 bg-white">
              <CardHeader>
                <div className="flex items-center gap-2 text-[#F4B41A] mb-1">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Accueil au Secrétariat</span>
                </div>
                <CardTitle className="text-lg font-bold text-slate-900">
                  Secrétariat à Andakabe
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <p>
                  <strong>Adresse :</strong> Andakabe, Morondava 619, Menabe
                </p>
                <p>
                  <strong>Horaires :</strong> Lundi au jeudi : 07h30 - 17h00 | Vendredi : 07h30 - 12h00
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
