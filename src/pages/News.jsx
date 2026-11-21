import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendarDays,
  faBullhorn,
  faAward,
  faUsers,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import tenueCorrecteImg from "@/assets/students-tenue-correcte.jpg"
import spirituelImg from "@/assets/activity-spirituel.jpg"
import sportImg from "@/assets/activity-sport.jpg"
import ceremonieGrenatImg from "@/assets/students-ceremonie-grenat.jpg"

const NEWS_ITEMS = [
  {
    id: 1,
    title: "Succès éclatant aux examens officiels : 98% de réussite au Baccalauréat",
    category: "Résultats Scolaires",
    date: "15 Octobre 2026",
    summary: "Félicitations chaleureuses à l'ensemble de nos bacheliers et aux enseignants du LYPAM pour ce taux exceptionnel avec de nombreuses mentions Très Bien et Bien.",
    img: tenueCorrecteImg,
    alt: "Bacheliers du LYPAM Morondava en tenue de cérémonie",
  },
  {
    id: 2,
    title: "Semaine de Prière et d'Édification Spirituelle des Jeunes",
    category: "Vie Chrétienne",
    date: "28 Novembre 2026",
    summary: "Une semaine riche en louanges, partages fraternels et méditations bibliques guidée par le thème : 'Bâtir sa jeunesse sur le Roc'.",
    img: spirituelImg,
    alt: "Moments d'édification spirituelle au LYPAM",
  },
  {
    id: 3,
    title: "Grand Rassemblement Sportif et Sortie Éclaireurs JA",
    category: "Activités & Jeunesse",
    date: "12 Décembre 2026",
    summary: "Journée sportive, civique et environnementale réunissant les élèves et les éclaireurs adventistes d'Andakabe dans la nature du Menabe.",
    img: sportImg,
    alt: "Activités sportives et jeunesse adventiste",
  },
  {
    id: 4,
    title: "Ouverture des pré-inscriptions pour l'année scolaire 2026-2027",
    category: "Admissions",
    date: "10 Janvier 2027",
    summary: "Dès le Préscolaire (3 ans) jusqu'à la Terminale, réservez la place de votre enfant en ligne ou directement au secrétariat d'Andakabe.",
    img: ceremonieGrenatImg,
    alt: "Élèves du premier cycle en tenue de cérémonie",
  },
]

export default function News() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge className="bg-[#7A1C24] text-white">Vie de l'Établissement</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            Actualités & Événements Scolaires
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Restez informés des temps forts, activités pédagogiques, sorties, célébrations spirituelles et annonces officielles du LYPAM Morondava.
          </p>
        </div>

        {/* Grid of news with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {NEWS_ITEMS.map((item) => (
            <Card key={item.id} className="border-stone-200 hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between group">
              <div className="h-60 overflow-hidden bg-stone-100">
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="p-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Badge variant="outline" className="text-[#7A1C24] border-[#7A1C24]/30 bg-[#7A1C24]/5">
                    {item.category}
                  </Badge>
                  <span className="text-xs text-slate-500 flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faCalendarDays} className="text-stone-400" />
                    {item.date}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-[#7A1C24] transition-colors leading-snug">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed pt-2 text-sm">
                  {item.summary}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
