import { Outlet, Link, useLocation } from 'react-router-dom'
import { Github, Mail, Linkedin, ArrowLeft, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Contact from './Contact'

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-ring selection:text-background flex flex-col">
      <nav className="fixed top-0 w-full glass-panel z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {!isHome ? (
              <Link to="/" className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors text-sm font-medium">
                <ArrowLeft size={16} /> Volver
              </Link>
            ) : (
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-foreground flex items-center justify-center">
                  <span className="text-background font-bold text-xs">SM</span>
                </div>
                <span className="font-semibold text-sm tracking-tight hidden sm:block">Sergio Martínez</span>
              </div>
            )}
          </div>

          {isHome && (
            <>
              <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-medium">
                <a href="#proyectos" className="hover:text-foreground transition-colors">Proyectos</a>
                <a href="#stack" className="hover:text-foreground transition-colors">Stack</a>
                <a href="#experiencia" className="hover:text-foreground transition-colors">Experiencia</a>
              </div>
              <div className="md:hidden text-foreground">
                <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </>
          )}

          <a
            href="mailto:sergiomtzs96@gmail.com"
            className="text-xs font-mono font-medium border border-border bg-secondary/50 px-4 py-1.5 hover:bg-secondary transition-colors"
          >
            Contactar
          </a>
        </div>

        {isHome && isOpen && (
          <div className="md:hidden bg-background border-t border-border absolute top-full left-0 w-full px-6 py-6 flex flex-col gap-6 shadow-xl">
             {[
               { name: "Proyectos", href: "#proyectos" },
               { name: "Stack", href: "#stack" },
               { name: "Experiencia", href: "#experiencia" }
             ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 pt-24 pb-24">
        <Outlet />
      </main>

      <Contact />
    </div>
  )
}
