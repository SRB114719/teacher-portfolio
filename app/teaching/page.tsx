"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { BookOpen, Target, Users, TrendingUp } from "lucide-react"
import SpotlightCard from "@/components/spotlight-card"
import { useEffect, useRef } from "react"

export default function TeachingPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const subjects = [
    {
      title: "Mathematics",
      description: "Classes 9-12 & Competitive Exams",
      topics: ["Algebra", "Calculus", "Trigonometry", "Coordinate Geometry", "Vectors & 3D"],
    },
    {
      title: "Physics",
      description: "Boards & Competitive Exams",
      topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"],
    },
  ]

  const teachingApproach = [
    {
      icon: BookOpen,
      title: "Concept-Based Learning",
      description: "Focus on deep understanding of fundamentals rather than superficial memorization",
    },
    {
      icon: Target,
      title: "Problem-Solving Skills",
      description: "Systematic approaches to tackle complex questions with confidence",
    },
    {
      icon: Users,
      title: "Personalized Attention",
      description: "One-to-one and small group sessions tailored to individual learning pace",
    },
    {
      icon: TrendingUp,
      title: "Regular Assessment",
      description: "Continuous tracking and feedback to ensure steady academic progress",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Subjects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4 scroll-animate">
            Subjects & Teaching
          </h1>
          <div className="h-1 w-24 bg-secondary mb-16 scroll-animate"></div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {subjects.map((subject, index) => (
              <div key={index} className="scroll-animate card-interactive">
                <h3 className="text-3xl font-serif font-semibold text-foreground mb-2">{subject.title}</h3>
                <p className="text-secondary font-semibold mb-6">{subject.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                    Key Topics Covered:
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {subject.topics.map((topic, idx) => (
                      <li key={idx} className="text-foreground/80 flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="scroll-animate bg-white rounded-xl p-10 border-2 border-secondary/20 shadow-sm">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              <strong className="text-foreground">All competitive exams supported:</strong> JEE Main, JEE Advanced, NEET
              (Physics), and other engineering/medical entrance examinations. Classes available in both{" "}
              <strong className="text-foreground">online and offline modes</strong> based on student preference.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Approach Section */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-4">Teaching Philosophy</h2>
            <div className="h-1.5 w-16 bg-secondary rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {teachingApproach.map((item, index) => (
              <div key={index} className="scroll-animate">
                <SpotlightCard icon={item.icon} title={item.title} description={item.description} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
