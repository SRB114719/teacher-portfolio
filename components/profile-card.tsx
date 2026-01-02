"use client"

import { useEffect, useRef, useState } from "react"

export default function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return

      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -8
      const rotateY = ((x - centerX) / centerX) * 8

      setRotation({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      setRotation({ x: 0, y: 0 })
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)
    card.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
      card.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [isHovered])

  return (
    <div
      ref={cardRef}
      className="relative w-full max-w-md mx-auto perspective-1000"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      {/* Card container */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0f2e] to-[#2d1b4e]"></div>

        {/* Subtle glow on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 0.3 : 0,
            background: "radial-gradient(circle at 50% 50%, rgba(196, 92, 218, 0.4), transparent 70%)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 p-8 flex flex-col items-center text-center">
          {/* Profile Photo - supports both SVG placeholder and real images */}
          <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-white/10 shadow-xl">
            {/* Fallback gradient background for when no image is provided */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              {/* SVG placeholder - replace this entire div with <img src="/path/to/photo.jpg" alt="Ram P. Singh" className="w-full h-full object-cover" /> */}
              <svg
                className="w-32 h-32 text-white/90"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          {/* Name */}
          <h3 className="text-3xl font-serif font-bold text-white mb-2">Ram P. Singh</h3>

          {/* Separator */}
          <div className="w-24 h-1 bg-secondary mb-4"></div>

          {/* Title */}
          <p className="text-xl text-white/90 mb-3">Mathematics & Physics Tutor</p>

          {/* Experience */}
          <p className="text-sm text-white/70 tracking-wide">18+ Years Teaching Experience</p>

          {/* Accent line */}
          <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        </div>
      </div>

      {/* Shadow effect that moves with tilt */}
      <div
        className="absolute inset-0 rounded-2xl -z-10 blur-xl"
        style={{
          background: "rgba(0, 0, 0, 0.3)",
          transform: `translateX(${rotation.y * 2}px) translateY(${rotation.x * 2}px)`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      ></div>
    </div>
  )
}
