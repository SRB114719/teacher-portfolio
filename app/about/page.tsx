"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProfileCard from "@/components/profile-card"
import { CheckCircle, BookOpen, Target, Users, TrendingUp } from "lucide-react"
import SpotlightCard from "@/components/spotlight-card"
import { useEffect, useRef } from "react"

export default function AboutPage() {
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

  const philosophyPoints = [
    "Concept-first teaching - Deep understanding over memorization",
    "Structured study planning - Customized roadmaps for each student",
    "Regular doubt clearing - No question goes unanswered",
    "Continuous performance tracking - Monitor progress systematically",
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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Soft Glows */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Soft Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[5%] left-[-5%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-[80px]"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-16 scroll-animate">
             <h1 className="text-4xl md:text-7xl font-serif font-bold text-foreground mb-4">About Me</h1>
             <div className="h-1.5 w-24 bg-secondary rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-32 items-center">
            {/* Left: About Text */}
            <div className="flex flex-col justify-center scroll-animate order-2 md:order-1 text-left">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Ram P. Singh</h2>
              <p className="text-xl md:text-2xl text-secondary font-medium mb-8">
                M.Sc, Ph.D in Physics from Mumbai University
              </p>
              
              <div className="space-y-6 text-lg text-foreground/70 leading-relaxed text-justify">
                <p>
                  I am a dedicated educator with over <strong className="text-foreground">18 years of teaching experience</strong> in Mathematics and Physics. 
                  With academic depth and practical teaching expertise, I bring both knowledge and passion to every session.
                </p>
                <p>
                  Throughout my career, I have mentored <strong className="text-foreground">3000+ students</strong> across classes 9-12, 
                  helping them excel in board examinations and competitive entrance tests.
                </p>
                <p>
                  I offer both <strong className="text-foreground">online and offline classes</strong> tailored to each student's requirements, 
                  with options for one-to-one sessions and small group teaching.
                </p>
              </div>
            </div>

            {/* Right: Interactive Profile Card with extra shadow */}
            <div className="scroll-animate order-1 md:order-2 drop-shadow-2xl">
              <ProfileCard />
            </div>
          </div>

          {/* Teaching Philosophy - Replaced lines with soft floating cards */}
          <div className="max-w-4xl mx-auto mb-32">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12 text-center scroll-animate">
              Teaching Philosophy
            </h2>
            <div className="grid gap-6">
              {philosophyPoints.map((point, index) => (
                <div key={index} className="flex gap-6 items-center p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-300 scroll-animate">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-lg md:text-xl text-foreground/80 font-medium">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Subjects & Teaching - Modern Grid */}
          <div className="mb-32">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-16 text-center scroll-animate">
              Subjects & Teaching
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mb-16">
              {subjects.map((subject, index) => (
                <div key={index} className="scroll-animate bg-white p-10 rounded-[2.5rem] shadow-[0_15px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500">
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-3">{subject.title}</h3>
                  <p className="text-secondary text-lg font-bold mb-8">{subject.description}</p>
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">
                      Key Topics Covered:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {subject.topics.map((topic, idx) => (
                        <li key={idx} className="text-foreground/70 flex items-center gap-3 bg-muted/30 p-3 rounded-xl border border-black/5">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                          <span className="font-medium text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Competitive Exams Strip (Tone-on-tone background) */}
            <div className="scroll-animate bg-[#f8fafc] rounded-[2rem] p-12 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed text-center">
                <strong className="text-primary">All competitive exams supported:</strong> JEE Main, JEE Advanced,
                NEET (Physics), and other engineering/medical entrance examinations. Available in both{" "}
                <span className="text-primary font-bold">online and offline modes</span> based on student preference.
              </p>
            </div>
          </div>

          {/* How I Teach Section - Shadow Card Grid */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-16 text-center scroll-animate">
              How I Teach
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {teachingApproach.map((item, index) => (
                <div key={index} className="scroll-animate bg-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500">
                   <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                      <item.icon className="w-8 h-8 text-primary" />
                   </div>
                   <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                   <p className="text-lg text-foreground/60 leading-relaxed">{item.description}</p>
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