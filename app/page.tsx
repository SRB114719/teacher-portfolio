"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Award, Users, BookOpen, GraduationCap, Quote, Target, Heart, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [yearsCount, setYearsCount] = useState(0)
  const [studentsCount, setStudentsCount] = useState(0)

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && yearsCount === 0) {
            // Animate years (0 to 18)
            let currentYears = 0
            const yearsInterval = setInterval(() => {
              currentYears += 1
              setYearsCount(currentYears)
              if (currentYears >= 18) {
                clearInterval(yearsInterval)
              }
            }, 40)

            // Animate students (0 to 3000)
            let currentStudents = 0
            const studentsInterval = setInterval(() => {
              currentStudents += 150
              setStudentsCount(Math.min(currentStudents, 3000))
              if (currentStudents >= 3000) {
                clearInterval(studentsInterval)
              }
            }, 30)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [yearsCount])

  const highlights = [
    {
      icon: Award,
      title: "18+ Years Teaching Experience",
      description: "Proven track record of excellence",
    },
    {
      icon: Users,
      title: "3000+ Students Mentored",
      description: "Individual attention to each student",
    },
    {
      icon: BookOpen,
      title: "Boards & Competitive Exams",
      description: "Comprehensive exam preparation",
    },
    {
      icon: GraduationCap,
      title: "One-to-One & Small Groups",
      description: "Flexible learning environments",
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
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 pt-12 pb-8 overflow-hidden">
        {/* Aurora Background - Behind all content */}
        <div className="aurora-container">
          <div className="aurora-gradient aurora-gradient-1"></div>
          <div className="aurora-gradient aurora-gradient-2"></div>
          <div className="aurora-gradient aurora-gradient-3"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center">
              <h4 className="text-base md:text-lg text-accent font-medium mb-6 tracking-wide">Hello, I'm</h4>

              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4 leading-tight">
                Ram P. Singh
              </h1>

              <h2 className="text-2xl md:text-3xl text-secondary font-medium mb-6">
                Senior Mathematics & Physics Tutor
              </h2>

              <p className="text-lg md:text-xl text-foreground/75 leading-relaxed max-w-lg">
                Personalized teaching focused on concept clarity, confidence, and long-term academic success.
              </p>
            </div>

            {/* Right Column - Professional Image */}
<div className="flex items-center justify-center">
  <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-xl bg-white border-4 border-secondary/10">
    
    <Image
      src="/new.jpg" 
      alt="Ram P. Singh - Mathematics & Physics Tutor"
      fill
      /* Added scale-110 to zoom in by 10% and hide the edges */
      className="object-cover object-top scale-110" 
      priority
    />

  </div>
</div>
          </div>
        </div>
      </section>

      {/* Trust Stats Strip */}
      <section className="py-16 px-6 border-y border-border" ref={statsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="scroll-animate text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{yearsCount}+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="scroll-animate text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{studentsCount}+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Students Mentored</div>
            </div>
            <div className="scroll-animate text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                <Award className="w-10 h-10 mx-auto text-secondary" />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Boards & Competitive</div>
            </div>
            <div className="scroll-animate text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                <Users className="w-10 h-10 mx-auto text-accent" />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">One-to-One & Groups</div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-12 text-center scroll-animate">
            How I Teach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="scroll-animate approach-card">
              <Target className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Concept Clarity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deep understanding through systematic explanations, not rote memorization.
              </p>
            </div>
            <div className="scroll-animate approach-card">
              <Heart className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Personalized Attention</h3>
              <p className="text-muted-foreground leading-relaxed">
                Individual focus tailored to each student's learning pace and style.
              </p>
            </div>
            <div className="scroll-animate approach-card">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Result-Oriented Strategy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Regular assessments and progress tracking to ensure academic goals are met.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center scroll-animate">
          <div className="flex items-center gap-6 justify-center mb-4">
            <div className="h-px w-24 bg-border"></div>
            <Quote className="w-6 h-6 text-secondary/60" />
            <div className="h-px w-24 bg-border"></div>
          </div>
          <p className="text-lg text-muted-foreground italic font-serif">
            "Education is not the filling of a pail, but the lighting of a fire."
          </p>
        </div>
      </div>

      {/* Quick Highlights */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div key={index} className="scroll-animate card-interactive text-center">
                  <Icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Teaching Snapshot Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto scroll-animate">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-8 text-center">
            Teaching{" "}
            <span className="relative inline-block">
              Snapshot
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary"></span>
            </span>
          </h2>
          <div className="bg-card rounded-lg p-10 border border-border shadow-md">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              My teaching philosophy centers on <strong className="text-foreground">concept-based learning</strong>{" "}
              rather than rote memorization. I focus on helping students develop deep understanding through systematic
              problem-solving approaches that build confidence and analytical thinking.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              With <strong className="text-foreground">regular assessments and progress tracking</strong>, I ensure
              every student stays on course to achieve their academic goals, whether preparing for board exams or
              competitive entrance tests.
            </p>
          </div>
        </div>
      </section>

      {/* What Students Say Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-16 text-center scroll-animate">
            What Students Say
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
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
          <div className="text-center scroll-animate">
            <Link href="/results" className="btn-primary">
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
