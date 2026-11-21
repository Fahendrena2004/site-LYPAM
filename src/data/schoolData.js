export const SCHOOL_INFO = {
  acronym: "LYPAM",
  name: "Lycée Privé Adventiste Morondava",
  denomination: "Église Adventiste du Septième Jour",
  motto: "Excellence Académique, Foi & Intégrité Morale",
  neighborhood: "Andakabe",
  city: "Morondava",
  region: "Menabe, Madagascar",
  address: "Andakabe, Morondava 619, Menabe, Madagascar",
  phone: "+261 34 00 000 00",
  altPhone: "+261 32 00 000 00",
  email: "contact@lypam-morondava.mg",
  hours: "Lundi - Jeudi : 07h30 - 17h00 | Vendredi : 07h30 - 12h00",
  cyclesCovered: "Du Préscolaire à la Terminale",
  colors: {
    garnet: "#7A1C24",
    darkGarnet: "#5A1218",
    gold: "#F4B41A",
    cream: "#FAF8F5",
  },
}

export const NAV_LINKS = [
  { name: "Accueil", path: "/" },
  { name: "À Propos", path: "/a-propos" },
  { name: "Cycles & Formations", path: "/formations" },
  { name: "Admissions", path: "/admissions" },
  { name: "Actualités", path: "/actualites" },
  { name: "Contact", path: "/contact" },
]

export const STATS = [
  { value: "98%", label: "Taux de réussite aux examens" },
  { value: "4 Cycles", label: "Préscolaire, Primaire, Collège, Lycée" },
  { value: "+30 ans", label: "D'expérience pédagogique à Andakabe" },
  { value: "100%", label: "Éducation intégrale (Tête, Cœur, Main)" },
]

export const UNIFORM_POLICY = {
  prescolaireEtSecondaire: {
    title: "Préscolaire jusqu'au Secondaire (Collège)",
    scope: "De la Maternelle (Petite Section) à la classe de 3ème",
    daily: {
      name: "Blouse Grenat à bordure blanche",
      description: "Blouse quotidienne couleur grenat officiel avec col et finitions bordées de blanc.",
      color: "#7A1C24",
      trim: "#FFFFFF",
    },
    ceremony: {
      name: "Tenue de Cérémonie Grenat & Blanc",
      description: "Pantalon ou jupe couleur grenat avec chemise blanche en haut.",
      color: "#7A1C24",
      top: "#FFFFFF",
    },
  },
  lycee: {
    title: "Cycle Lycée (Second Cycle)",
    scope: "Classes de Seconde, Première et Terminale (Séries A, S, OSE)",
    daily: {
      name: "Blouse Jaune vif à bordure chocolat",
      description: "Même coupe de blouse que le premier cycle, confectionnée en jaune pur ('jaune tanteraka') avec col et poches soulignés d'une élégante bordure chocolat.",
      color: "#FFD200",
      trim: "#5C3826",
    },
    ceremony: {
      name: "Tenue de Cérémonie Chocolat, Blanc & Cravate",
      description: "Pantalon ou jupe chocolat en bas, chemise blanche impeccable en haut avec cravate.",
      color: "#5C3826",
      top: "#FFFFFF",
    },
  },
}

export const PROGRAMS = [
  {
    id: "prescolaire",
    level: "Préscolaire & Maternelle",
    ageRange: "Dès 3 ans (Petite, Moyenne, Grande Section)",
    subtitle: "Éveil, socialisation et autonomie dans la tendresse",
    description: "Un cadre bienveillant et stimulant spécialement conçu pour les tout-petits, favorisant la curiosité, l'éveil spirituel, la motricité fine et l'initiation aux premiers apprentissages.",
    features: [
      "Activités sensorielles et psychomotrices",
      "Éveil au langage, contes et chants éducatifs",
      "Initiation aux valeurs de partage et de respect",
      "Espaces ludiques adaptés et sécurisés",
    ],
  },
  {
    id: "primaire",
    level: "Enseignement Primaire",
    ageRange: "Du CP1 au CM2 (Préparation au CEPE)",
    subtitle: "Acquisition solide des savoirs fondamentaux",
    description: "Apprentissage méthodique de la lecture, de l'écriture, du calcul et des sciences, complété par l'éducation morale, civique et les récits bibliques édifiants.",
    features: [
      "Maîtrise du français, malagasy et calcul",
      "Éveil scientifique et découverte du monde",
      "Formation du caractère et discipline positive",
      "Préparation rigoureuse à l'examen officiel du CEPE",
    ],
  },
  {
    id: "college",
    level: "Collège (6ème à 3ème)",
    ageRange: "De la 6ème à la 3ème (Préparation au BEPC)",
    subtitle: "Consolidation des compétences et autonomie",
    description: "Un encadrement attentif et rigoureux axé sur la logique scientifique, la maîtrise des langues vivantes, l'informatique et le développement du sens des responsabilités.",
    features: [
      "Programme académique renforcé",
      "Anglais, Français et Malagasy approfondis",
      "Sciences naturelles, physique-chimie et informatique",
      "Préparation intensive à l'examen du BEPC",
    ],
  },
  {
    id: "lycee",
    level: "Lycée (Seconde, Première & Terminale)",
    ageRange: "Second Cycle : Séries L / S / OSE (Préparation au Baccalauréat)",
    subtitle: "Excellence académique et orientation vers le supérieur",
    description: "Formation de pointe préparant au Baccalauréat avec un accompagnement personnalisé vers les études universitaires et les grandes écoles.",
    features: [
      "Seconde générale de détermination",
      "Série A (Littéraire & Langues)",
      "Série S / Scientifique (Maths, Physique-Chimie, SVT)",
      "Série OSE (Organisation, Société, Économie)",
    ],
  },
]
