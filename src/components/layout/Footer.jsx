import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faGraduationCap,
  faBookOpen,
  faBaby,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { SCHOOL_INFO, NAV_LINKS } from "@/data/schoolData"
import logoImg from "@/assets/logo.jpg"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#5A1218] text-white border-t-4 border-[#F4B41A] pb-16 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Identity & Motto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded-full shadow shrink-0">
                <img
                  src={logoImg}
                  alt="LYPAM"
                  className="w-12 h-12 object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-xl tracking-tight text-white">LYPAM</h3>
                <p className="text-xs text-amber-300 font-medium">{SCHOOL_INFO.neighborhood}, {SCHOOL_INFO.city}</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Le {SCHOOL_INFO.name} accueille vos enfants <strong>du Préscolaire jusqu'à la classe de Terminale</strong> pour une éducation holistique d'excellence : physique, intellectuelle et spirituelle.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F4B41A] hover:text-[#5A1218] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F4B41A] hover:text-[#5A1218] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation rapide */}
          <div>
            <h4 className="font-bold text-base text-amber-300 mb-4 tracking-wider uppercase text-xs">
              Liens Rapides
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-amber-300 hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Cycles Scolaires */}
          <div>
            <h4 className="font-bold text-base text-amber-300 mb-4 tracking-wider uppercase text-xs">
              Nos Cycles Scolaires
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faBaby} className="text-amber-400 text-xs" />
                <span>Préscolaire & Maternelle</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faBookOpen} className="text-amber-400 text-xs" />
                <span>Primaire (CP1 au CM2 / CEPE)</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faBookOpen} className="text-amber-400 text-xs" />
                <span>Collège (6ème à 3ème / BEPC)</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faGraduationCap} className="text-amber-400 text-xs" />
                <span>Lycée : Seconde Générale</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faGraduationCap} className="text-amber-400 text-xs" />
                <span>Séries Baccalauréat : A, S, OSE</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Horaires */}
          <div>
            <h4 className="font-bold text-base text-amber-300 mb-4 tracking-wider uppercase text-xs">
              Adresse & Horaires
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <FontAwesomeIcon icon={faLocationDot} className="text-[#F4B41A] mt-1 shrink-0" />
                <span><strong>{SCHOOL_INFO.neighborhood}</strong>, {SCHOOL_INFO.city} 619, Menabe</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FontAwesomeIcon icon={faPhone} className="text-[#F4B41A] shrink-0" />
                <span>{SCHOOL_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#F4B41A] shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FontAwesomeIcon icon={faClock} className="text-[#F4B41A] mt-1 shrink-0" />
                <span className="text-xs">{SCHOOL_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>© {currentYear} {SCHOOL_INFO.name} ({SCHOOL_INFO.acronym}) - Andakabe, Morondava.</p>
          <p className="flex items-center gap-1">
            Du Préscolaire à la Terminale : Former pour cette vie et pour l'éternité.
          </p>
        </div>
      </div>
    </footer>
  )
}
