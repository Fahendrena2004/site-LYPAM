import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBookOpen,
  faChurch,
  faUsers,
  faAward,
  faHeart,
  faHandHoldingHeart,
  faCheckCircle,
  faLocationDot,
  faBaby,
  faShirt,
  faStar,
} from "@fortawesome/free-solid-svg-icons"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SCHOOL_INFO, UNIFORM_POLICY } from "@/data/schoolData"
import logoImg from "@/assets/logo.jpg"
import blouseGrenatImg from "@/assets/students-blouse-grenat.jpg"
import ceremonieGrenatImg from "@/assets/students-ceremonie-grenat.jpg"
import lyceensJauneImg from "@/assets/lyceens-blouse-jaune.jpg"
import tenueCorrecteImg from "@/assets/students-tenue-correcte.jpg"
import rassemblementImg from "@/assets/campus-rassemblement.jpg"
import travailGroupeImg from "@/assets/campus-travail-groupe.jpg"

export default function About() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge className="bg-[#7A1C24] text-white">Histoire & Identité</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            À Propos du LYPAM Andakabe
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Établi dans le quartier d'<strong>Andakabe à Morondava</strong>, le {SCHOOL_INFO.name} propose un cursus éducatif complet du <strong>Préscolaire jusqu'à la Terminale</strong>, guidé par les principes d'excellence de l'Église Adventiste du Septième Jour.
          </p>
        </div>

        {/* Presentation & Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm">
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-64 h-64 p-3 bg-[#FAF8F5] rounded-full border-4 border-[#7A1C24] shadow-xl flex items-center justify-center">
              <img
                src={logoImg}
                alt="Logo LYPAM Morondava"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-[#7A1C24] border-[#7A1C24]/30">
                Notre Mission à Andakabe
              </Badge>
              <Badge className="bg-[#F4B41A] text-[#5A1218]">
                Préscolaire • Primaire • Collège • Lycée
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#7A1C24]">
              Développer l'harmonie entre le corps, l'esprit et l'âme
            </h2>
            <p className="text-slate-600 leading-relaxed">
              L'éducation adventiste embrasse l'individu dans sa totalité. De l'éveil du tout-petit en maternelle jusqu'à la maturité du lycéen préparant son baccalauréat, nous mettons un point d'honneur à offrir un enseignement de haut niveau couplé à une éducation aux vertus morales chrétiennes.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Implanté au cœur d'Andakabe, notre campus offre un cadre paisible, sécurisé et propice à l'apprentissage et à la réussite de tous les élèves.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24]" />
                <span>Accueil dès 3 ans en Maternelle</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24]" />
                <span>Corps professoral qualifié & dévoué</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24]" />
                <span>Excellents résultats aux examens officiels</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24]" />
                <span>Cadre d'Andakabe calme et accessible</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards Gallery: Both Blouses and Both Ceremony Uniforms */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <Badge className="bg-[#7A1C24] text-white">Tenues Règlementaires au LYPAM</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Le Code Vestimentaire & Cérémonies</h2>
            <p className="text-slate-600 text-sm mt-1">
              Des uniformes aux coupes précises pour le quotidien et les rassemblements solennels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Blouse Grenat */}
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow bg-white flex flex-col justify-between">
              <div className="h-56 overflow-hidden bg-stone-100">
                <img
                  src={blouseGrenatImg}
                  alt="Élèves de préscolaire au secondaire en blouse grenat bordure blanche"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <Badge variant="outline" className="text-[10px] border-[#7A1C24] text-[#7A1C24]">Présco à 3ème</Badge>
                <h3 className="font-bold text-sm text-[#7A1C24]">Blouse Quotidienne</h3>
                <p className="text-xs text-slate-600">
                  Couleur grenat avec bordure blanche sur le col et les poches.
                </p>
              </div>
            </div>

            {/* 2. Cérémonie Grenat & Blanc (Présco au Secondaire) */}
            <div className="rounded-2xl overflow-hidden border-2 border-[#7A1C24] shadow-md bg-white flex flex-col justify-between">
              <div className="h-56 overflow-hidden bg-stone-100">
                <img
                  src={ceremonieGrenatImg}
                  alt="Mpianatra manao Tenue de Cérémonie grenat ambany sy blanc ambony"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <Badge className="bg-[#7A1C24] text-white text-[10px]">Cérémonie Présco-3ème</Badge>
                <h3 className="font-bold text-sm text-[#7A1C24]">Grenat & Blanc</h3>
                <p className="text-xs text-slate-600">
                  Pantalon ou jupe grenat en bas et chemise blanche en haut.
                </p>
              </div>
            </div>

            {/* 3. Blouse Jaune pur bordure chocolat (Lycée) */}
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow bg-white flex flex-col justify-between">
              <div className="h-56 overflow-hidden bg-stone-100">
                <img
                  src={lyceensJauneImg}
                  alt="Lycéens en blouse jaune pur bordure chocolat"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <Badge variant="outline" className="text-[10px] border-amber-600 text-amber-700">Lycée (2nde à Tle)</Badge>
                <h3 className="font-bold text-sm text-amber-800">Blouse Quotidienne</h3>
                <p className="text-xs text-slate-600">
                  Même coupe, jaune pur ("jaune tanteraka") avec bordure chocolat.
                </p>
              </div>
            </div>

            {/* 4. Cérémonie Lycée (Chocolat, Blanc & Cravate) */}
            <div className="rounded-2xl overflow-hidden border-2 border-[#5C3826] shadow-md bg-white flex flex-col justify-between">
              <div className="h-56 overflow-hidden bg-stone-100">
                <img
                  src={tenueCorrecteImg}
                  alt="Tenue de cérémonie Lycée chocolat blanc et cravate"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-2">
                <Badge className="bg-[#5C3826] text-white text-[10px]">Cérémonie Lycée</Badge>
                <h3 className="font-bold text-sm text-[#5C3826]">Chocolat & Cravate</h3>
                <p className="text-xs text-slate-600">
                  Pantalon/jupe chocolat, chemise blanche impeccable et cravate.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Campus Life Immersion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
          <div className="space-y-4">
            <Badge className="bg-[#7A1C24] text-white">Discipline & Rassemblement</Badge>
            <h3 className="text-2xl font-bold text-slate-900">Le Sens du Collectif et de l'Ordre</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Dès le matin, les élèves se rassemblent dans la cour du campus pour la prière, le chant et les consignes du jour dans une atmosphère fraternelle et ordonnée.
            </p>
            <div className="rounded-2xl overflow-hidden shadow">
              <img
                src={rassemblementImg}
                alt="Rassemblement des élèves dans la cour de l'école"
                loading="lazy"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            <Badge className="bg-[#F4B41A] text-[#5A1218]">Pédagogie Active</Badge>
            <h3 className="text-2xl font-bold text-slate-900">Travail en Groupe & Émulation</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              En classe, les enfants développent l'esprit d'équipe, l'entraide et le goût de l'effort partagé sous la bienveillance attentive de leurs enseignants.
            </p>
            <div className="rounded-2xl overflow-hidden shadow">
              <img
                src={travailGroupeImg}
                alt="Élèves travaillant en groupe en classe"
                loading="lazy"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900">Nos Valeurs Pédagogiques</h2>
            <p className="text-slate-600 mt-2">Ce qui guide la vie scolaire quotidienne au LYPAM Andakabe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#FAF8F5] border-stone-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#7A1C24] text-white flex items-center justify-center text-xl mb-2">
                  <FontAwesomeIcon icon={faAward} />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Discipline & Rigueur</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm">
                Ponctualité, régularité du travail personnel et respect mutuel forgent la rigueur indispensable pour réussir les études supérieures.
              </CardContent>
            </Card>

            <Card className="bg-[#FAF8F5] border-stone-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#5A1218] text-[#F4B41A] flex items-center justify-center text-xl mb-2">
                  <FontAwesomeIcon icon={faChurch} />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Foi & Valeurs Chrétiennes</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm">
                Enseignement fondé sur l'amour du prochain, l'honnêteté, la fidélité et le respect des principes bibliques universels.
              </CardContent>
            </Card>

            <Card className="bg-[#FAF8F5] border-stone-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#1E5AA8] text-white flex items-center justify-center text-xl mb-2">
                  <FontAwesomeIcon icon={faHandHoldingHeart} />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Bienveillance & Service</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm">
                Sensibilité aux besoins de la communauté d'Andakabe et de Morondava, engagement solidaire et développement de l'esprit d'entraide.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
