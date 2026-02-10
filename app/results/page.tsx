"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Award, Users, BookOpen, Quote, Star, CheckCircle2 } from "lucide-react"
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
    { icon: Award, number: "18+", label: "Years of Experience", color: "text-primary" },
    { icon: Users, number: "3000+", label: "Students Taught", color: "text-secondary" },
    { icon: CheckCircle2, number: "100%", label: "Success Commitment", color: "text-accent" },
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
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Aurora Glows */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Soft Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[5%] right-[-5%] w-[35%] h-[35%] bg-secondary/5 rounded-full blur-[80px]"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-20 scroll-animate">
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-foreground mb-4">
              Results & Testimonials
            </h1>
            <div className="h-1.5 w-24 bg-secondary rounded-full"></div>
          </div>

          {/* Stats Grid - Replaced border cards with floating shadow cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {stats.map((stat, index) => (
              <div key={index} className="scroll-animate bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 text-center group">
                <stat.icon className={`w-14 h-14 ${stat.color} mx-auto mb-6 transition-transform group-hover:scale-110`} />
                <div className="text-5xl font-serif font-bold text-foreground mb-2">{stat.number}</div>
                <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-bold">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Academic Track Record - Premium "Snapshot" Style */}
          <div className="scroll-animate bg-[#f8fafc] rounded-[2.5rem] p-12 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] relative overflow-hidden mb-32">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Academic Track Record</h3>
                <p className="text-xl text-foreground/70 leading-relaxed mb-8 max-w-3xl">
                  With over <strong className="text-primary font-bold">3000+ students mentored</strong> across 18+ years, I have
                  extensive experience in preparing students for both board examinations and competitive entrance tests.
                </p>
                <div className="flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white inline-block">
                    <Star className="w-5 h-5 text-secondary fill-secondary" />
                    <p className="text-sm text-muted-foreground font-medium italic">
                      Detailed results and batch-wise achievements are updated regularly.
                    </p>
                </div>
            </div>
          </div>

          {/* Student Testimonials - Modern Masonry-style Grid */}
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-20 text-center scroll-animate">
              Student Voices
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="scroll-animate bg-white p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 relative group">
                  <Quote className="w-12 h-12 text-secondary/10 absolute top-10 right-10 group-hover:text-secondary/20 transition-colors" />
                  
                  <p className="text-xl text-foreground/80 leading-relaxed mb-10 italic font-serif relative z-10">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-5 border-t border-black/5 pt-8">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary font-bold text-xl">
                      {testimonial.student[0]}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg">{testimonial.student}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{testimonial.class}</p>
                    </div>
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