import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ROUTE_SEO = {
  "/": {
    title: "Accueil | LYPAM - Lycée Privé Adventiste Morondava (Andakabe)",
    description: "Bienvenue au Lycée Privé Adventiste Morondava (LYPAM) à Andakabe. Éducation d'excellence du Préscolaire à la Terminale. Foi, savoir et intégrité.",
  },
  "/a-propos": {
    title: "À Propos & Histoire | LYPAM Morondava",
    description: "Découvrez l'histoire, la vision éducative adventiste (Tête, Cœur, Main) et les valeurs fondatrices du LYPAM à Andakabe.",
  },
  "/formations": {
    title: "Cycles & Formations (Présco à Terminale) | LYPAM Morondava",
    description: "Découvrez nos 4 cycles scolaires à Morondava : Maternelle/Préscolaire, Primaire (CEPE), Collège (BEPC), et Lycée Séries A, S, OSE (Baccalauréat).",
  },
  "/admissions": {
    title: "Admissions & Pré-inscription en Ligne | LYPAM Morondava",
    description: "Inscrivez votre enfant pour l'année scolaire 2026-2027 au LYPAM Andakabe. Formulaire de pré-inscription en ligne simple et rapide.",
  },
  "/actualites": {
    title: "Actualités & Événements Scolaires | LYPAM Morondava",
    description: "Toutes les actualités du LYPAM : résultats aux examens officiels, semaines spirituelles, activités des éclaireurs JA et sorties pédagogiques.",
  },
  "/contact": {
    title: "Contact & Localisation à Andakabe | LYPAM Morondava",
    description: "Contactez le secrétariat du LYPAM à Andakabe, Morondava. Numéros de téléphone, adresse email et horaires d'ouverture.",
  },
}

export default function SEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    const currentSeo = ROUTE_SEO[pathname] || {
      title: "LYPAM - Lycée Privé Adventiste Morondava (Andakabe)",
      description: "Site officiel du Lycée Privé Adventiste Morondava. Éducation adventiste de référence dans le Menabe.",
    }

    document.title = currentSeo.title

    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute("content", currentSeo.description)
    }

    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute("content", currentSeo.title)
    }

    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) {
      ogDesc.setAttribute("content", currentSeo.description)
    }
  }, [pathname])

  return null
}
