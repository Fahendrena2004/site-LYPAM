import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import SEO from "@/components/common/SEO"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Academics from "@/pages/Academics"
import Admissions from "@/pages/Admissions"
import News from "@/pages/News"
import Contact from "@/pages/Contact"
import NotFound from "@/pages/NotFound"

// Défilement automatique vers le haut à chaque changement de page
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SEO />
      <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#7A1C24] selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/formations" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/actualites" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
