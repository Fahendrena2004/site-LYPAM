import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faBars,
  faXmark,
  faGraduationCap,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { NAV_LINKS, SCHOOL_INFO } from "@/data/schoolData"
import logoImg from "@/assets/logo.jpg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm transition-all duration-300">
      {/* Top bar with garnet dark tint and essential school info */}
      <div className="bg-[#5A1218] text-white/90 text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faLocationDot} className="text-[#F4B41A]" />
              {SCHOOL_INFO.neighborhood}, {SCHOOL_INFO.city}
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faPhone} className="text-[#F4B41A]" />
              {SCHOOL_INFO.phone}
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors hidden md:inline-flex">
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

      {/* Main navigation with school brand garnet */}
      <nav className="bg-[#7A1C24] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and school name */}
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="relative p-0.5 bg-white rounded-full shadow-md overflow-hidden shrink-0 border-2 border-[#F4B41A]">
                <img
                  src={logoImg}
                  alt="Logo LYPAM"
                  className="w-12 h-12 object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-amber-200 transition-colors">
                    LYPAM
                  </span>
                  <Badge variant="outline" className="text-[10px] bg-white/10 text-amber-300 border-amber-300/40 px-1.5 py-0 h-4">
                    Andakabe
                  </Badge>
                </div>
                <span className="text-xs text-white/85 tracking-wide uppercase font-medium line-clamp-1">
                  Lycée Privé Adventiste Morondava
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

            {/* CTA Pre-inscription & Mobile Trigger */}
            <div className="flex items-center gap-3">
              <Button
                asChild
                className="hidden sm:inline-flex bg-[#F4B41A] hover:bg-[#EAA406] text-[#5A1218] font-bold shadow-md hover:shadow-lg transition-all"
              >
                <Link to="/admissions" className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <span>Pré-inscription</span>
                </Link>
              </Button>

              {/* Mobile Drawer */}
              <div className="lg:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/10 h-10 w-10"
                      aria-label="Menu"
                    >
                      <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="text-lg" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="bg-[#5A1218] text-white border-white/10 w-80 p-0 flex flex-col justify-between">
                    <div>
                      <SheetHeader className="p-6 border-b border-white/10 text-left">
                        <div className="flex items-center gap-3">
                          <img
                            src={logoImg}
                            alt="Logo LYPAM"
                            className="w-10 h-10 rounded-full bg-white p-0.5 object-contain"
                          />
                          <div>
                            <SheetTitle className="text-white font-bold text-lg">LYPAM</SheetTitle>
                            <p className="text-xs text-amber-300">Andakabe, Morondava</p>
                            <p className="text-[11px] text-white/70">Du Préscolaire à la Terminale</p>
                          </div>
                        </div>
                      </SheetHeader>

                      <div className="px-4 py-6 space-y-1">
                        {NAV_LINKS.map((link) => {
                          const isActive = location.pathname === link.path
                          return (
                            <SheetClose asChild key={link.path}>
                              <Link
                                to={link.path}
                                className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                                  isActive
                                    ? "bg-[#7A1C24] text-white font-bold border-l-4 border-[#F4B41A]"
                                    : "text-white/85 hover:bg-white/10 hover:text-white"
                                }`}
                              >
                                {link.name}
                                <FontAwesomeIcon icon={faArrowRight} className="text-xs opacity-60" />
                              </Link>
                            </SheetClose>
                          )
                        })}
                      </div>
                    </div>

                    <div className="p-6 border-t border-white/10 bg-[#420D12]">
                      <SheetClose asChild>
                        <Button asChild className="w-full bg-[#F4B41A] hover:bg-[#EAA406] text-[#5A1218] font-bold">
                          <Link to="/admissions" className="flex items-center justify-center gap-2">
                            <FontAwesomeIcon icon={faGraduationCap} />
                            Pré-inscription en ligne
                          </Link>
                        </Button>
                      </SheetClose>
                      <p className="text-[11px] text-white/60 text-center mt-3">
                        {SCHOOL_INFO.motto}
                      </p>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
