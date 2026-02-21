"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/results", label: "Results" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(pct)
      setScrolled(scrollTop > 20)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      {/* ── Scroll Progress Bar ── */}
      <div
        className="fixed top-0 left-0 z-[9999] h-[3px] origin-left will-change-transform"
        style={{
          width: `${progress}%`,
          background: "#1e3a8a",
          transition: "width 0.08s linear",
          boxShadow: "0 0 10px rgba(30, 58, 138, 0.5)",
        }}
      />

      {/* ── Main Nav (Floating Center Card) ── */}
      <nav
        ref={navRef}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[999] transition-all duration-500 rounded-2xl ${
          scrolled
            ? "w-[95%] max-w-6xl py-3 bg-white/80 backdrop-blur-lg border border-white/20 shadow-lg"
            : "w-full py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 select-none"
            onClick={() => setMenuOpen(false)}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-serif font-bold text-sm shadow-md transition-transform group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)" }}
            >
              R
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif font-bold text-foreground text-[18px] tracking-tight">
                Ram P. Singh
              </span>
            </div>
          </Link>

          {/* Desktop Links (Hidden on Phone) */}
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href
              const isHovered = hovered === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onMouseEnter={() => setHovered(href)}
                    onMouseLeave={() => setHovered(null)}
                    className={`relative px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive ? "text-primary" : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    <span className="relative z-10">{label}</span>
                    <span 
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                        isHovered ? "w-1/2 opacity-100" : "w-0 opacity-0"
                      }`} 
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Right Section: CTA & Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:flex group relative px-6 py-2.5 text-sm font-bold rounded-xl text-white overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)" }}
            >
              Contact
            </Link>

            {/* Mobile Hamburger Button - Visible on Phone */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-black/5 hover:bg-black/10 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-[1000] md:hidden transition-all duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />
        <div
          className={`absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex justify-between items-center border-b">
            <span className="font-bold">Menu</span>
            <button onClick={() => setMenuOpen(false)}><X className="w-6 h-6" /></button>
          </div>
          <ul className="p-6 space-y-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-lg font-semibold ${pathname === href ? "text-primary" : "text-foreground/70"}`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-3 text-center bg-primary text-white rounded-xl font-bold"
              >
                Contact Now
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="h-[90px]" />
    </>
  )
}