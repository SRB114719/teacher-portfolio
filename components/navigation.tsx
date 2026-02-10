"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const [scrollProgress, setScrollProgress] = useState(0)

  const centerNavItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Results", href: "/results" },
  ]

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    // Sleeker height (py-3) and glass effect
    <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md shadow-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        <div className="flex-1 hidden md:block"></div>

        {/* Center Links: Added hover:-translate-y-0.5 for subtle movement */}
        <div className="hidden md:flex gap-10 items-center">
          {centerNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 relative group pb-1 hover:-translate-y-0.5 ${
                isActive(item.href) 
                  ? "text-white" 
                  : "text-white/40 hover:text-white/90"
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary shadow-[0_0_10px_#3b82f6] transition-all duration-300 ${
                  isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        <div className="flex-1 flex justify-end">
          <Link
            href="/contact"
            className="px-5 py-2 bg-white text-primary rounded-full font-bold hover:bg-secondary hover:text-white hover:-translate-y-0.5 transition-all duration-300 text-[9px] uppercase tracking-[0.2em] shadow-lg shadow-black/20"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
        <div 
          className="h-full bg-secondary shadow-[0_0_10px_#3b82f6] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </nav>
  )
}