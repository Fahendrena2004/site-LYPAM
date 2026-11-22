import { useState, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faBars,
  faXmark,
  faGraduationCap,
  faHouse,
  faSchool,
  faBookOpen,
  faNewspaper,
  faChevronRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { Badge } from "@/components/ui/badge"
import { NAV_LINKS, SCHOOL_INFO } from "@/data/schoolData"
import logoImg from "@/assets/logo.jpg"

const MOBILE_MENU_ITEMS = [
  { name: "Accueil", path: "/", icon: faHouse, subtitle: "Page d'accueil de l'école" },
  { name: "À Propos", path: "/a-propos", icon: faSchool, subtitle: "Histoire, valeurs & pédagogie" },
  { name: "Cycles & Formations", path: "/formations", icon: faBookOpen, subtitle: "Du Préscolaire à la Terminale" },
  { name: "Admissions", path: "/admissions", icon: faGraduationCap, subtitle: "Pré-inscriptions 2026-2027", highlight: true },
  { name: "Actualités", path: "/actualites", icon: faNewspaper, subtitle: "Événements, examens & vie scolaire" },
  { name: "Contact & Accès", path: "/contact", icon: faPhone, subtitle: "Andakabe, Morondava" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Fermer automatiquement le menu mobile lors d'un changement de route
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Empêcher le défilement de l'arrière-plan quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <header className="w-full sticky top-0 z-40 shadow-sm transition-all duration-300">
        {/* Top bar (Desktop & Tablet) */}
        <div className="bg-[#5A1218] text-white/90 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faLocationDot} className="text-[#F4B41A]" />
                {SCHOOL_INFO.neighborhood}, {SCHOOL_INFO.city}
              </span>
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faPhone} className="text-[#F4B41A]" />
                {SCHOOL_INFO.phone}
              </a>
              <span className="flex items-center gap-1.5 hover:text-white transition-colors hidden lg:inline-flex">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#F4B41A]" />
                {SCHOOL_INFO.email}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-amber-300 font-medium tracking-wide">
                {SCHOOL_INFO.cyclesCovered} • {SCHOOL_INFO.denomination}
              </span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook LYPAM"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Bar */}
        <nav className="bg-[#7A1C24] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              {/* Logo and school name */}
              <Link to="/" className="flex items-center gap-2.5 sm:gap-3.5 group">
                <div className="relative p-0.5 bg-white rounded-full shadow-md overflow-hidden shrink-0 border-2 border-[#F4B41A]">
                  <img
                    src={logoImg}
                    alt="Logo LYPAM"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-amber-200 transition-colors">
                      LYPAM
                    </span>
                    <Badge
                      variant="outline"
                      className="text-[9px] sm:text-[10px] bg-white/10 text-amber-300 border-amber-300/40 px-1.5 py-0 h-4"
                    >
                      Andakabe
                    </Badge>
                  </div>
                  <span className="text-[10px] sm:text-xs text-white/85 tracking-wide uppercase font-medium line-clamp-1">
                    Lycée Privé Adventiste
                  </span>
                </div>
              </Link>

              {/* Desktop Nav links */}
              <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                {NAV_LINKS.map((link) => {
                  const isActive = location.pathname === link.path
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-[#5A1218] text-white shadow-inner font-semibold border-b-2 border-[#F4B41A]"
                          : "text-white/90 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </NavLink>
                  )
                })}
              </div>

              {/* Mobile Quick Action (Direct Call to school) */}
              <div className="flex items-center lg:hidden">
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-[#F4B41A] transition-all"
                  aria-label="Appeler l'école"
                  title="Appeler l'école"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Modern Mobile Drawer Overlay (Normes Mobile UX) */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex justify-end">
          {/* Backdrop sombre avec flou */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <aside
            className="relative w-[88vw] max-w-[360px] sm:max-w-[400px] h-full bg-[#5A1218] text-white flex flex-col justify-between shadow-2xl z-10 border-l border-white/10 overflow-y-auto animate-in slide-in-from-right duration-300"
            aria-label="Navigation mobile"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-white/10 bg-[#4A0E13] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-0.5 bg-white rounded-full shrink-0 border-2 border-[#F4B41A]">
                  <img
                    src={logoImg}
                    alt="Logo LYPAM"
                    className="w-11 h-11 rounded-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-white text-base tracking-tight">LYPAM</span>
                    <span className="text-[10px] bg-[#F4B41A] text-[#5A1218] px-1.5 py-0.2 rounded font-bold">
                      Andakabe
                    </span>
                  </div>
                  <p className="text-[11px] text-white/70 line-clamp-1">
                    Lycée Privé Adventiste Morondava
                  </p>
                </div>
              </div>

              {/* Close Button (X) */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-all"
                aria-label="Fermer"
              >
                <FontAwesomeIcon icon={faXmark} className="text-lg" />
              </button>
            </div>

            {/* Vertical Full-Width Navigation List */}
            <div className="px-3 py-4 space-y-1.5 flex-1 overflow-y-auto">
              <p className="px-3 text-[11px] uppercase tracking-wider text-amber-300/80 font-bold mb-2">
                Menu Principal
              </p>

              {MOBILE_MENU_ITEMS.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-[#7A1C24] text-white shadow-md border-l-4 border-[#F4B41A]"
                        : "text-white/90 hover:bg-white/10 active:bg-white/15"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-sm ${
                          isActive
                            ? "bg-[#F4B41A] text-[#5A1218]"
                            : item.highlight
                            ? "bg-[#F4B41A]/20 text-[#F4B41A]"
                            : "bg-white/10 text-white"
                        }`}
                      >
                        <FontAwesomeIcon icon={item.icon} />
                      </div>
                      <div className="truncate text-left">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-sm font-semibold ${isActive ? "text-white font-bold" : "text-white/95"}`}>
                            {item.name}
                          </span>
                          {item.highlight && !isActive && (
                            <span className="text-[9px] bg-[#F4B41A] text-[#5A1218] px-1 rounded font-bold">
                              Nouveau
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-white/60 truncate">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className={`text-xs shrink-0 ml-2 transition-transform ${
                        isActive ? "text-[#F4B41A] translate-x-0.5" : "text-white/40"
                      }`}
                    />
                  </Link>
                )
              })}
            </div>

            {/* Bottom Actions & School Contact */}
            <div className="p-4 border-t border-white/10 bg-[#420D12] space-y-3">
              {/* Primary Pre-inscription CTA */}
              <Link
                to="/admissions"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-[#F4B41A] hover:bg-[#EAA406] active:scale-[0.98] text-[#5A1218] font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <FontAwesomeIcon icon={faGraduationCap} className="text-base" />
                <span>Pré-inscription 2026-2027</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-xs ml-1" />
              </Link>

              {/* Quick Call & WhatsApp Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-[#F4B41A]" />
                  <span>Appeler</span>
                </a>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-emerald-700/60 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-emerald-300" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Motto / Footer note */}
              <p className="text-[10px] text-white/50 text-center pt-1 italic">
                « {SCHOOL_INFO.motto} »
              </p>
            </div>
          </aside>
        </div>
      )}

      {/* Floating Bottom App Bar for Mobile Devices (Norme Mobile Moderne) */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#5A1218]/95 backdrop-blur-md border-t border-white/15 py-1.5 px-2 shadow-2xl"
        aria-label="Barre d'action rapide mobile"
      >
        <div className="max-w-md mx-auto grid grid-cols-5 items-center text-center">
          <Link
            to="/"
            className={`flex flex-col items-center py-1 transition-colors ${
              location.pathname === "/" ? "text-[#F4B41A] font-bold" : "text-white/75 hover:text-white"
            }`}
          >
            <FontAwesomeIcon icon={faHouse} className="text-base" />
            <span className="text-[10px] mt-0.5">Accueil</span>
          </Link>

          <Link
            to="/formations"
            className={`flex flex-col items-center py-1 transition-colors ${
              location.pathname === "/formations" ? "text-[#F4B41A] font-bold" : "text-white/75 hover:text-white"
            }`}
          >
            <FontAwesomeIcon icon={faBookOpen} className="text-base" />
            <span className="text-[10px] mt-0.5">Cycles</span>
          </Link>

          {/* Central Highlight Button: Inscription */}
          <Link
            to="/admissions"
            className="flex flex-col items-center -mt-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#F4B41A] text-[#5A1218] flex items-center justify-center shadow-lg border-2 border-white group-active:scale-95 transition-transform">
              <FontAwesomeIcon icon={faGraduationCap} className="text-lg" />
            </div>
            <span className="text-[10px] mt-0.5 text-amber-300 font-bold">Inscrire</span>
          </Link>

          <Link
            to="/contact"
            className={`flex flex-col items-center py-1 transition-colors ${
              location.pathname === "/contact" ? "text-[#F4B41A] font-bold" : "text-white/75 hover:text-white"
            }`}
          >
            <FontAwesomeIcon icon={faPhone} className="text-base" />
            <span className="text-[10px] mt-0.5">Contact</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex flex-col items-center py-1 text-white/75 hover:text-white"
          >
            <FontAwesomeIcon icon={faBars} className="text-base" />
            <span className="text-[10px] mt-0.5">Menu</span>
          </button>
        </div>
      </nav>
    </>
  )
}
