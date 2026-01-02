"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Results", href: "/results" },
    { label: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-center">
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-medium transition-all relative group pb-1 ${
                isActive(item.href) ? "text-primary" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
                  isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
