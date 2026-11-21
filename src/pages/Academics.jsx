import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGraduationCap,
  faBookOpen,
  faAtom,
  faLanguage,
  faChartLine,
  faCheckCircle,
  faArrowRight,
  faBaby,
  faAward,
  faFlask,
} from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PROGRAMS } from "@/data/schoolData"
import maternelleImg from "@/assets/activity-maternelle.jpg"
import blouseGrenatImg from "@/assets/students-blouse-grenat.jpg"
import scienceImg from "@/assets/activity-science.jpg"
import lyceensJauneImg from "@/assets/lyceens-blouse-jaune.jpg"

export default function Academics() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge className="bg-[#7A1C24] text-white">Offre Pédagogique Complète</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            Nos Cycles d'Enseignement à Andakabe
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le Lycée Privé Adventiste Morondava accompagne vos enfants dès le <strong>Préscolaire (dès 3 ans)</strong> jusqu'à la <strong>Terminale (Baccalauréat)</strong> dans un environnement sécurisant et stimulant.
          </p>
        </div>

        {/* 4 Cycles Cards with Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Préscolaire */}
          <Card className="border-t-4 border-t-[#F4B41A] shadow-sm flex flex-col justify-between overflow-hidden group">
            <div className="h-44 overflow-hidden bg-stone-100">
              <img
                src={maternelleImg}
                alt="Éveil Préscolaire LYPAM"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardHeader className="pt-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs border-[#C99008] text-[#C99008]">
                  Dès 3 ans
                </Badge>
                <span className="text-xs text-slate-400">Petite à Grande Section</span>
              </div>
              <CardTitle className="text-lg font-bold text-slate-900 mt-1">1. Préscolaire</CardTitle>
              <CardDescription className="pt-1 text-slate-600 text-xs leading-relaxed">
                Socialisation, motricité, éveil au langage et au jeu, autonomie et premières notions morales et spirituelles.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-[11px] font-semibold text-[#7A1C24]">Blouse grenat à liseré blanc</p>
            </CardContent>
          </Card>

          {/* 2. Primaire */}
          <Card className="border-t-4 border-t-[#7A1C24] shadow-sm flex flex-col justify-between overflow-hidden group">
            <div className="h-44 overflow-hidden bg-stone-100">
              <img
                src={blouseGrenatImg}
                alt="Élèves de primaire LYPAM"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardHeader className="pt-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs border-[#7A1C24] text-[#7A1C24]">
                  Examen : CEPE
                </Badge>
                <span className="text-xs text-slate-400">CP1 au CM2</span>
              </div>
              <CardTitle className="text-lg font-bold text-slate-900 mt-1">2. Primaire</CardTitle>
              <CardDescription className="pt-1 text-slate-600 text-xs leading-relaxed">
                Apprentissage fondamental de la lecture, de l'écriture, du calcul, éveil scientifique, récits bibliques et préparation au CEPE.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-[11px] font-semibold text-[#7A1C24]">Blouse grenat • Cérémonie grenat/blanc</p>
            </CardContent>
          </Card>

          {/* 3. Collège */}
          <Card className="border-t-4 border-t-[#5A1218] shadow-sm flex flex-col justify-between overflow-hidden group">
            <div className="h-44 overflow-hidden bg-stone-100">
              <img
                src={scienceImg}
                alt="Collège et Sciences LYPAM"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardHeader className="pt-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs border-[#5A1218] text-[#5A1218]">
                  Examen : BEPC
                </Badge>
                <span className="text-xs text-slate-400">6ème à 3ème</span>
              </div>
              <CardTitle className="text-lg font-bold text-slate-900 mt-1">3. Collège</CardTitle>
              <CardDescription className="pt-1 text-slate-600 text-xs leading-relaxed">
                Consolidation méthodique, approfondissement scientifique, langues (français, anglais, malagasy) et préparation au BEPC.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-[11px] font-semibold text-[#7A1C24]">Blouse grenat • Cérémonie grenat/blanc</p>
            </CardContent>
          </Card>

          {/* 4. Lycée */}
          <Card className="border-t-4 border-t-[#1E5AA8] shadow-sm flex flex-col justify-between overflow-hidden group">
            <div className="h-44 overflow-hidden bg-stone-100">
              <img
                src={lyceensJauneImg}
                alt="Lycéens en blouse jaune pur bordure chocolat"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardHeader className="pt-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs border-[#1E5AA8] text-[#1E5AA8]">
                  Baccalauréat
                </Badge>
                <span className="text-xs text-slate-400">2nde à Terminale</span>
              </div>
              <CardTitle className="text-lg font-bold text-slate-900 mt-1">4. Lycée</CardTitle>
              <CardDescription className="pt-1 text-slate-600 text-xs leading-relaxed">
                Filières d'excellence (Séries A, S, OSE), préparation intensive au Baccalauréat et accès aux grandes écoles et universités.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-[11px] font-semibold text-amber-800">Blouse jaune chocolat • Cérémonie cravate</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Series Accordion for Lycée */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-6">
          <div>
            <Badge className="bg-[#7A1C24] text-white mb-2">Second Cycle au LYPAM</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Filières du Baccalauréat (Lycée)
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Après la classe de Seconde de détermination, les élèves sont orientés vers la série correspondant à leurs talents :
            </p>
          </div>

          <Accordion type="single" collapsible defaultValue="serie-s" className="w-full">
            <AccordionItem value="serie-s">
              <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-[#7A1C24]">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faAtom} className="text-[#7A1C24]" />
                  <span>Série S / Scientifique (Mathématiques, Physique-Chimie, SVT)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 space-y-3 pt-2">
                <p>
                  Destinée aux élèves ayant un attrait prononcé pour le raisonnement logique, les sciences exactes et l'expérimentation. Préparation optimale pour les filières médicales, polytechniques, ingénierie, agronomie et informatique.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm pt-2">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24]" />
                    <span>Mathématiques approfondies & calcul algébrique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24]" />
                    <span>Physique & Chimie expérimentale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24]" />
                    <span>Sciences de la Vie et de la Terre</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24]" />
                    <span>Séances régulières de travaux dirigés & Bac blanc</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="serie-l">
              <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-[#7A1C24]">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faLanguage} className="text-[#7A1C24]" />
                  <span>Série L / Littéraire (Langues vivantes, Philosophie, Histoire-Géo)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 space-y-3 pt-2">
                <p>
                  Met l'accent sur la culture générale, l'éloquence, l'esprit de synthèse, la maîtrise rédactionnelle et les langues vivantes (Français, Anglais, Malagasy) ainsi que la Philosophie.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm pt-2">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24]" />
                    <span>Développement de l'éloquence et analyse littéraire</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24]" />
                    <span>Débouchés : Droit, Communication, Lettres, Enseignement, Diplomatie</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="serie-ose">
              <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-[#7A1C24]">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faChartLine} className="text-[#7A1C24]" />
                  <span>Série OSE (Organisation, Société, Économie)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 space-y-3 pt-2">
                <p>
                  Alliance équilibrée entre sciences économiques, gestion, sociologie et mathématiques appliquées pour comprendre les dynamiques contemporaines.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm pt-2">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24]" />
                    <span>Économie générale et gestion d'entreprise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24]" />
                    <span>Débouchés : Économie, Gestion, Finance, Commerce, Management</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA */}
        <div className="bg-[#FAF8F5] border border-stone-200 rounded-3xl p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Inscrivez votre enfant dès le Préscolaire</h3>
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            Les pré-inscriptions sont ouvertes pour tous les niveaux scolaires au LYPAM Andakabe Morondava.
          </p>
          <Button asChild className="bg-[#7A1C24] hover:bg-[#5A1218] text-white font-bold">
            <Link to="/admissions" className="flex items-center gap-2">
              <span>Effectuer la pré-inscription</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
