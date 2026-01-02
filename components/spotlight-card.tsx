"use client"

import type React from "react"

import { useRef, useState } from "react"
import type { LucideIcon } from "lucide-react"

interface SpotlightCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function SpotlightCard({ icon: Icon, title, description }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white rounded-lg p-8 border border-border/40 transition-all duration-300 overflow-hidden cursor-pointer group hover:-translate-y-1"
      style={{
        boxShadow: isHovered
          ? "0 8px 16px rgba(196, 92, 218, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06)"
          : "0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.02)",
      }}
    >
      {isHovered && (
        <div
          className="absolute w-40 h-40 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(196, 92, 218, 0.15) 0%, transparent 70%)",
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -50%)",
            filter: "blur(40px)",
            transition: "opacity 300ms ease-out",
          }}
        />
      )}

      {/* Card content with proper z-index to stay above spotlight */}
      <div className="relative z-10">
        {/* Icon with scale animation */}
        <div className="transition-all duration-300 group-hover:scale-110 mb-5">
          <Icon className="w-12 h-12 text-secondary" />
        </div>

        {/* Text content - always visible */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground leading-snug">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{description}</p>
        </div>
      </div>

      <div
        className="absolute inset-0 rounded-lg border border-secondary/0 transition-colors duration-300 pointer-events-none"
        style={{
          borderColor: isHovered ? "rgba(196, 92, 218, 0.3)" : "rgba(196, 92, 218, 0)",
        }}
      />
    </div>
  )
}
