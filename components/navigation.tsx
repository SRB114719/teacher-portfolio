"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // { href: "/courses", label: "Courses" },
  { href: "/results", label: "Results" },
  // { href: "/contact", label: "Contact" },
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

  // Lock body scroll when mobile menu is open
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
          background: "#ff4e1a",
          transition: "width 0.08s linear",
          boxShadow: "0 0 10px #ff4e1a88, 0 0 20px #ff4e1a44",
        }}
      />

      {/* ── Main Nav ── */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
          scrolled
            ? "py-3 bg-white/95 backdrop-blur-xl shadow-[0_1px_40px_rgba(0,0,0,0.06)]"
            : "py-5 bg-transparent"
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
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-serif font-bold text-sm shadow-md transition-transform group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)" }}
            >
              R
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif font-bold text-foreground text-[17px] tracking-tight">
                Ram P. Singh
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-bold mt-0.5">
                {/* Educator */}
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href
              const isHovered = hovered === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onMouseEnter={() => setHovered(href)}
                    onMouseLeave={() => setHovered(null)}
                    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 tracking-wide ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {/* Hover / Active pill */}
                    <span
                      className={`absolute inset-0 rounded-full transition-all duration-200 ${
                        isActive
                          ? "bg-primary/8 opacity-100"
                          : isHovered
                          ? "bg-black/5 opacity-100"
                          : "opacity-0"
                      }`}
                    />
                    <span className="relative z-10">{label}</span>

                    {/* Active dot */}
                    {isActive && (
                      <span
                        className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: "#ff4e1a" }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="group relative px-6 py-2.5 text-sm font-bold rounded-full text-white overflow-hidden shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25"
              style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Now
                {/* <span
                  className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-white transition-colors"
                  style={{ background: "#ff4e1a" }}
                /> */}
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-black/5 hover:bg-black/10 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-[998] md:hidden transition-all duration-400 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[min(320px,85vw)] bg-white shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-black/5">
            <span className="font-serif font-bold text-foreground text-lg">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-black/5 hover:bg-black/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Links */}
          <ul className="px-4 py-6 space-y-1">
            {navLinks.map(({ href, label }, i) => {
              const isActive = pathname === href
              return (
                <li
                  key={href}
                  style={{
                    transitionDelay: menuOpen ? `${i * 50 + 80}ms` : "0ms",
                    transform: menuOpen ? "translateX(0)" : "translateX(20px)",
                    opacity: menuOpen ? 1 : 0,
                    transition: "transform 0.35s ease, opacity 0.35s ease",
                  }}
                >
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl font-semibold text-sm transition-all ${
                      isActive
                        ? "bg-primary/8 text-primary"
                        : "text-foreground/70 hover:bg-black/4 hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#ff4e1a" }}
                      />
                    )}
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Panel CTA */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-black/5">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full py-4 text-center text-sm font-bold text-white rounded-2xl shadow-lg transition-all hover:opacity-90 active:scale-95"
              style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)" }}
            >
              Contact Now →
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[64px]" />
    </>
  )
}