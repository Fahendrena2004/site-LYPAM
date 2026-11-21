import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGraduationCap,
  faBookOpen,
  faAward,
  faHeart,
  faCompass,
  faArrowRight,
  faCheckCircle,
  faBaby,
  faLocationDot,
  faShirt,
  faStar,
  faImages,
  faFlask,
  faBasketball,
  faChurch,
} from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { STATS, PROGRAMS, SCHOOL_INFO, UNIFORM_POLICY } from "@/data/schoolData"
import logoImg from "@/assets/logo.jpg"
import blouseGrenatImg from "@/assets/students-blouse-grenat.jpg"
import ceremonieGrenatImg from "@/assets/students-ceremonie-grenat.jpg"
import lyceensJauneImg from "@/assets/lyceens-blouse-jaune.jpg"
import tenueCorrecteImg from "@/assets/students-tenue-correcte.jpg"
import scienceImg from "@/assets/activity-science.jpg"
import biblioImg from "@/assets/activity-biblio.jpg"
import sportImg from "@/assets/activity-sport.jpg"
import spirituelImg from "@/assets/activity-spirituel.jpg"
import maternelleImg from "@/assets/activity-maternelle.jpg"
import campusImg from "@/assets/campus-andakabe.jpg"
import travailGroupeImg from "@/assets/campus-travail-groupe.jpg"
import rassemblementImg from "@/assets/campus-rassemblement.jpg"

const CAMPUS_GALLERY = [
  { img: ceremonieGrenatImg, title: "Tenue de Cérémonie (Présco à 3ème)", tag: "Cérémonie", desc: "Pantalon/jupe grenat & chemise blanche" },
  { img: blouseGrenatImg, title: "Blouse Grenat Quotidienne", tag: "Uniforme", desc: "Tissu grenat à élégante bordure blanche" },
  { img: lyceensJauneImg, title: "Blouse Lycée Jaune Pur", tag: "Lycée", desc: "Jaune tanteraka à liseré chocolat" },
  { img: tenueCorrecteImg, title: "Tenue Cérémonie Lycée", tag: "Cérémonie", desc: "Pantalon/jupe chocolat, chemise blanche & cravate" },
  { img: travailGroupeImg, title: "Travail Collaboratif en Classe", tag: "Pédagogie", desc: "Émulation et entraide entre élèves" },
  { img: rassemblementImg, title: "Rassemblement dans la Cour", tag: "Cadre", desc: "Discipline et lever des couleurs au campus" },
  { img: scienceImg, title: "Laboratoire de Sciences", tag: "Pédagogie", desc: "Expérimentations pratiques SVT & Physique-Chimie" },
  { img: biblioImg, title: "Bibliothèque & Espace Numérique", tag: "Savoir", desc: "Recherche documentaire & lecture studieuse" },
  { img: sportImg, title: "Sport & Mouvements JA", tag: "Activités", desc: "Éducation physique & Éclaireurs Adventistes" },
  { img: spirituelImg, title: "Vie Spirituelle & Recueillement", tag: "Foi", desc: "Moments d'édification morale et culte" },
  { img: maternelleImg, title: "Éveil au Préscolaire", tag: "Maternelle", desc: "Ateliers sensoriels et jeux d'apprentissage" },
  { img: campusImg, title: "Campus Sécurisé d'Andakabe", tag: "Cadre", desc: "Environnement calme et propice aux études" },
]

export default function Home() {
  const [filter, setFilter] = useState("all")

  const filteredGallery = filter === "all" 
    ? CAMPUS_GALLERY 
    : CAMPUS_GALLERY.filter(item => {
        if (filter === "uniformes") return item.tag === "Cérémonie" || item.tag === "Uniforme" || item.tag === "Lycée"
        if (filter === "pedagogie") return item.tag === "Pédagogie" || item.tag === "Savoir" || item.tag === "Maternelle"
        if (filter === "activites") return item.tag === "Activités" || item.tag === "Foi" || item.tag === "Cadre"
        return true
      })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7A1C24] via-[#5A1218] to-[#3B0C10] text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-400/10 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-amber-300">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Andakabe, Morondava • Du Préscolaire à la Terminale</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Façonner l'Avenir par la{" "}
                <span className="text-[#F4B41A]">Foi</span>, le{" "}
                <span className="text-[#F4B41A]">Savoir</span> et l'
                <span className="text-[#F4B41A]">Intégrité</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl">
                Bienvenue au <strong>Lycée Privé Adventiste de Morondava (LYPAM)</strong> à <strong>Andakabe</strong>. Dès le préscolaire et jusqu'au baccalauréat, nous offrons une éducation d'excellence qui forge le caractère, l'esprit et la réussite.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#F4B41A] hover:bg-[#EAA406] text-[#5A1218] font-bold text-base px-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <Link to="/admissions" className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <span>Inscriptions 2026-2027</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold text-base px-6"
                >
                  <Link to="/formations">Nos 4 Cycles d'Études</Link>
                </Button>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-white/80">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7A1C24] border border-white" />
                  Blouse & Cérémonie Grenat (Présco à 3ème)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFD200]" />
                  Blouse Jaune pur & Cérémonie Chocolat (Lycée)
                </span>
              </div>
            </motion.div>

            {/* Right: Dual Visual of Students */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                {/* Main image: Ceremony uniform junior students (grenat ambany sy blanc ambony) */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-stone-900 aspect-[4/3] relative">
                  <img
                    src={ceremonieGrenatImg}
                    alt="Mpianatra manao Tenue de Cérémonie : grenat ambany sy chemise blanc ambony"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                    <div>
                      <Badge className="bg-[#7A1C24] text-white font-bold text-xs mb-1">
                        Tenue de Cérémonie : Présco à 3ème
                      </Badge>
                      <p className="text-white font-bold text-sm">
                        Pantalon / Jupe grenat en bas & Chemise blanche en haut
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overlapping small image: Lycée students in bright yellow blouse */}
                <div className="absolute -bottom-8 -left-6 sm:-left-8 w-44 sm:w-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <div className="aspect-square relative">
                    <img
                      src={lyceensJauneImg}
                      alt="Lycéens en blouse jaune pur bordure chocolat"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5">
                      <p className="text-white text-[11px] font-bold leading-tight">
                        Lycée : Blouse jaune pur & bordure chocolat
                      </p>
                    </div>
                  </div>
                </div>

                {/* School Seal */}
                <div className="absolute -top-6 -right-4 p-1.5 bg-white rounded-full shadow-xl border-2 border-[#F4B41A]">
                  <img
                    src={logoImg}
                    alt="LYPAM Logo"
                    className="w-16 h-16 rounded-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-white border-y border-stone-200 py-10 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-100">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#7A1C24]">{stat.value}</p>
                <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete 4 Uniforms Showcase (Blouses & Tenues de Cérémonie) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge className="bg-[#7A1C24] text-white">Règlement & Vie Scolaire</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Nos Tenues Quotidiennes & Tenues de Cérémonie
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Découvrez les tenues officielles du LYPAM Andakabe pour chaque cycle : la blouse pour les cours quotidiens et la tenue solennelle pour les cérémonies.
            </p>
          </div>

          {/* Section 1: Préscolaire jusqu'au Secondaire (Collège) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-[#7A1C24]/20 pb-3">
              <Badge className="bg-[#7A1C24] text-white text-sm px-3 py-1">Cycle 1</Badge>
              <h3 className="text-2xl font-bold text-[#7A1C24]">
                Préscolaire jusqu'au Secondaire (Collège) • De la Maternelle à la 3ème
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Card 1A: Blouse Grenat */}
              <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all">
                <div className="relative h-72 overflow-hidden bg-stone-100">
                  <img
                    src={blouseGrenatImg}
                    alt="Blouse grenat avec bordure blanche"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#7A1C24] text-white font-bold text-xs shadow">
                      Blouse Quotidienne
                    </Badge>
                  </div>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-[#7A1C24]">
                      Blouse Grenat à Bordure Blanche
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed mt-2">
                      Portée du lundi au vendredi pendant les cours. Confectionnée en tissu grenat emblématique du LYPAM avec col et poches soulignés d'une élégante bordure blanche.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold">Usage : Cours quotidiens</span>
                    <span className="text-[#7A1C24] font-bold">Maternelle à 3ème</span>
                  </div>
                </div>
              </div>

              {/* Card 1B: Tenue de Cérémonie Grenat Ambany & Blanc Ambony */}
              <div className="bg-white rounded-3xl border-2 border-[#7A1C24] shadow-md overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all">
                <div className="relative h-72 overflow-hidden bg-stone-100">
                  <img
                    src={ceremonieGrenatImg}
                    alt="Tenue de cérémonie : pantalon ou jupe grenat et chemise blanche"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#7A1C24] text-white font-bold text-xs shadow">
                      Tenue de Cérémonie Officielle
                    </Badge>
                  </div>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-[#7A1C24]">
                      Grenat en Bas & Chemise Blanche en Haut
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed mt-2">
                      <strong>Pantalon grenat</strong> pour les garçons ou <strong>jupe grenat</strong> pour les filles, avec une <strong>chemise blanche</strong> impeccable en haut (sans cravate).
                    </p>
                  </div>
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold">Usage : Cultes & Événements</span>
                    <span className="text-[#7A1C24] font-bold">Tenue solennelle</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Cycle Lycée (Second Cycle) */}
          <div className="space-y-6 pt-6">
            <div className="flex items-center gap-3 border-b-2 border-[#5C3826]/20 pb-3">
              <Badge className="bg-[#5C3826] text-white text-sm px-3 py-1">Cycle 2</Badge>
              <h3 className="text-2xl font-bold text-slate-900">
                Cycle Lycée (Second Cycle) • Seconde, Première & Terminale
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Card 2A: Blouse Jaune pur bordure chocolat */}
              <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all">
                <div className="relative h-72 overflow-hidden bg-stone-100">
                  <img
                    src={lyceensJauneImg}
                    alt="Blouse jaune pur à bordure chocolat"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#FFD200] text-[#5C3826] font-extrabold text-xs shadow">
                      Blouse Quotidienne
                    </Badge>
                  </div>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-amber-800">
                      Blouse Jaune Pur ("Jaune Tanteraka") & Bordure Chocolat
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed mt-2">
                      Même coupe que le premier cycle, confectionnée en tissu jaune vif éclatant avec col et poches bordés de chocolat.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold">Usage : Cours quotidiens</span>
                    <span className="text-amber-800 font-bold">Lycée (2nde, 1ère, Tle)</span>
                  </div>
                </div>
              </div>

              {/* Card 2B: Tenue de Cérémonie Chocolat, Blanc & Cravate */}
              <div className="bg-white rounded-3xl border-2 border-[#5C3826] shadow-md overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all">
                <div className="relative h-72 overflow-hidden bg-stone-100">
                  <img
                    src={tenueCorrecteImg}
                    alt="Tenue de cérémonie Lycée : chocolat blanc et cravate"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#5C3826] text-white font-bold text-xs shadow">
                      Tenue de Cérémonie Officielle
                    </Badge>
                  </div>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-[#5C3826]">
                      Chocolat en Bas, Chemise Blanche & Cravate
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed mt-2">
                      <strong>Pantalon ou jupe chocolat</strong> en bas, <strong>chemise blanche</strong> impeccablement repassée en haut, accompagnée d'une <strong>cravate</strong>.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold">Usage : Cultes & Événements</span>
                    <span className="text-[#5C3826] font-bold">Tenue solennelle</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Campus Photo Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <Badge className="bg-[#7A1C24] text-white mb-2">
                <FontAwesomeIcon icon={faImages} className="mr-1.5" />
                Immersion au Campus
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                La Vie Scolaire en Images à Andakabe
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Découvrez le quotidien de nos apprenants : études, sciences, activités physiques, spirituelles et vie communautaire.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
                className={filter === "all" ? "bg-[#7A1C24] text-white" : ""}
              >
                Tout voir
              </Button>
              <Button
                variant={filter === "uniformes" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("uniformes")}
                className={filter === "uniformes" ? "bg-[#7A1C24] text-white" : ""}
              >
                Tenues & Uniformes
              </Button>
              <Button
                variant={filter === "pedagogie" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("pedagogie")}
                className={filter === "pedagogie" ? "bg-[#7A1C24] text-white" : ""}
              >
                Pédagogie & Savoirs
              </Button>
              <Button
                variant={filter === "activites" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("activites")}
                className={filter === "activites" ? "bg-[#7A1C24] text-white" : ""}
              >
                Sports & Vie Spirituelle
              </Button>
            </div>
          </div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 transition-all bg-stone-900"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5">
                  <Badge className="w-fit bg-[#F4B41A] text-[#5A1218] font-bold text-[10px] mb-2">
                    {item.tag}
                  </Badge>
                  <h4 className="text-white font-bold text-base leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-white/80 text-xs mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Cycles Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <Badge className="bg-[#7A1C24] text-white">Parcours Continu</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Du Préscolaire à la Terminale à Andakabe
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Un cheminement pédagogique structuré et bienveillant adapté à chaque tranche d'âge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.map((prog) => (
              <Card key={prog.id} className="flex flex-col justify-between border-stone-200 hover:border-[#7A1C24] hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2 bg-[#FAF8F5] text-[#5A1218] border border-stone-200 text-xs">
                    {prog.ageRange}
                  </Badge>
                  <CardTitle className="text-xl font-bold text-[#7A1C24]">{prog.level}</CardTitle>
                  <p className="text-xs font-semibold text-slate-700">{prog.subtitle}</p>
                  <CardDescription className="text-slate-600 pt-2 text-xs leading-relaxed">
                    {prog.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="space-y-1.5 text-xs text-slate-600 border-t border-stone-100 pt-3">
                    {prog.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-[#7A1C24] text-[10px]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars of Adventist Education */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <Badge variant="outline" className="text-[#7A1C24] border-[#7A1C24]/30 bg-[#7A1C24]/5 uppercase font-semibold">
              Pédagogie Holistique
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              L'Éducation Adventiste : Tête, Cœur et Main
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Nous formons des citoyens instruits, équilibrés et ancrés dans des valeurs solides pour servir Dieu et leur patrie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-stone-200 hover:shadow-lg hover:border-[#7A1C24]/30 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-[#7A1C24]/10 text-[#7A1C24] flex items-center justify-center text-xl mb-3">
                  <FontAwesomeIcon icon={faBookOpen} />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Excellence Intellectuelle (Tête)</CardTitle>
                <CardDescription className="text-slate-600">
                  Rigueur académique, esprit critique, préparation aux examens officiels nationaux (CEPE, BEPC, Baccalauréat) et curiosité intellectuelle.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                Enseignants chevronnés guidant chaque élève vers son plein potentiel.
              </CardContent>
            </Card>

            <Card className="border-stone-200 hover:shadow-lg hover:border-[#7A1C24]/30 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-[#F4B41A]/20 text-[#C99008] flex items-center justify-center text-xl mb-3">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Formation Morale & Foi (Cœur)</CardTitle>
                <CardDescription className="text-slate-600">
                  Transmission des valeurs chrétiennes d'amour, de respect mutuel, d'intégrité, d'humilité et de service désintéressé.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                Moments d'édification spirituelle et épanouissement moral quotidien.
              </CardContent>
            </Card>

            <Card className="border-stone-200 hover:shadow-lg hover:border-[#7A1C24]/30 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-[#1E5AA8]/10 text-[#1E5AA8] flex items-center justify-center text-xl mb-3">
                  <FontAwesomeIcon icon={faCompass} />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Santé & Compétences (Main)</CardTitle>
                <CardDescription className="text-slate-600">
                  Éducation physique, hygiène de vie saine, respect de l'environnement et acquisition de compétences pratiques de vie.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                Participation active aux mouvements de jeunesse (Éclaireurs/JA) et sport.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-[#5A1218] text-white py-16 px-4 sm:px-6 lg:px-8 my-10 max-w-7xl mx-auto rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="relative z-10 text-center max-w-2xl mx-auto space-y-6">
          <Badge className="bg-[#F4B41A] text-[#5A1218] font-bold">Inscriptions Ouvertes à Andakabe</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Offrez à votre enfant une éducation d'avenir au LYPAM Morondava
          </h2>
          <p className="text-white/85 text-base">
            Inscriptions ouvertes pour la Maternelle/Préscolaire, le Primaire, le Collège et le Lycée.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-[#F4B41A] hover:bg-[#EAA406] text-[#5A1218] font-bold text-base px-8 shadow-lg">
              <Link to="/admissions">Formulaire de Pré-inscription</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 hover:text-white">
              <Link to="/contact">Nous contacter à Andakabe</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
