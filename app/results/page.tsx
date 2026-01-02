"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Award, Users, BookOpen, Quote } from "lucide-react"
import { useEffect, useRef } from "react"

export default function ResultsPage() {
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

  const stats = [
    {
      icon: Award,
      number: "18+",
      label: "Years of Experience",
    },
    {
      icon: Users,
      number: "3000+",
      label: "Students Taught",
    },
    {
      icon: BookOpen,
      number: "100%",
      label: "Dedication",
    },
  ]

  const testimonials = [
    {
      text: "Ram Sir's teaching approach helped me understand complex physics concepts. His guidance was instrumental in my JEE preparation.",
      student: "A.K.",
      class: "Class 12, JEE Aspirant",
    },
    {
      text: "The personalized attention and problem-solving techniques made mathematics much easier for me. Highly recommended!",
      student: "S.M.",
      class: "Class 11, CBSE",
    },
    {
      text: "Thanks to Ram Sir's structured teaching, I improved my board exam scores significantly. His doubt-clearing sessions were extremely helpful.",
      student: "R.P.",
      class: "Class 10, CBSE",
    },
    {
      text: "The concept-first approach helped me build a strong foundation. I now solve problems with much more confidence.",
      student: "M.T.",
      class: "Class 12, Competitive Exams",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4 scroll-animate">
            Results & Testimonials
          </h1>
          <div className="h-1 w-24 bg-secondary mb-16 scroll-animate"></div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="scroll-animate card-interactive text-center">
                  <Icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <div className="text-5xl font-serif font-bold text-foreground mb-2">{stat.number}</div>
                  <p className="text-muted-foreground font-semibold">{stat.label}</p>
                </div>
              )
            })}
          </div>

          <div className="scroll-animate bg-card rounded-sm p-10 border-2 border-secondary/20 shadow-sm mb-16">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Academic Track Record</h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              With over <strong className="text-foreground">3000+ students mentored</strong> across 18+ years, I have
              extensive experience in preparing students for both board examinations and competitive entrance tests.
            </p>
            <p className="text-muted-foreground italic">
              Note: Detailed results and specific achievements will be updated regularly. Current focus remains on
              delivering quality education and building strong conceptual foundations for every student.
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-16 text-center scroll-animate">
              Student Testimonials
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="scroll-animate paper-card">
                  <Quote className="w-8 h-8 text-secondary/60 mb-4" />
                  <p className="text-foreground/85 leading-relaxed mb-6 text-lg">"{testimonial.text}"</p>
                  <div className="border-t border-border/50 pt-4 mt-6">
                    <p className="font-semibold text-foreground">{testimonial.student}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.class}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
