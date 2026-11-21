import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <p className="text-6xl font-extrabold text-[#7A1C24] mb-2">404</p>
      <h1 className="text-2xl font-bold text-slate-900 mb-3">Page non trouvée</h1>
      <p className="text-slate-600 max-w-md mb-6">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Button asChild className="bg-[#7A1C24] hover:bg-[#5A1218] text-white">
        <Link to="/" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faHouse} />
          <span>Retour à l'accueil</span>
        </Link>
      </Button>
    </div>
  )
}
