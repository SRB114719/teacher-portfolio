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

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4 scroll-animate">About Me</h1>
          <div className="h-1 w-24 bg-secondary mb-16 scroll-animate"></div>

          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            {/* Left: About Text */}
            <div className="flex flex-col justify-center scroll-animate order-2 md:order-1 text-left">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">Ram P. Singh</h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
                M.Sc, Ph.D in Physics from Mumbai University
              </p>
              <p
                className="text-lg text-foreground/70 leading-relaxed mb-6 text-justify hyphens-auto"
                style={{ wordSpacing: "0.05em" }}
              >
                I am a dedicated educator with over{" "}
                <strong className="text-foreground">18 years of teaching experience</strong> in Mathematics and Physics.
                With academic depth and practical teaching expertise, I bring both knowledge and passion to every
                session.
              </p>
              <p
                className="text-lg text-foreground/70 leading-relaxed mb-6 text-justify hyphens-auto"
                style={{ wordSpacing: "0.05em" }}
              >
                Throughout my career, I have mentored <strong className="text-foreground">3000+ students</strong> across
                classes 9-12, helping them excel in board examinations and competitive entrance tests.
              </p>
              <p
                className="text-lg text-foreground/70 leading-relaxed text-justify hyphens-auto"
                style={{ wordSpacing: "0.05em" }}
              >
                I offer both <strong className="text-foreground">online and offline classes</strong> tailored to each
                student's requirements, with options for one-to-one sessions and small group teaching.
              </p>
            </div>

            {/* Right: Interactive Profile Card */}
            <div className="scroll-animate order-1 md:order-2">
              <ProfileCard />
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-8 text-center scroll-animate">
              Teaching Philosophy
            </h2>
            <div className="grid gap-6">
              {philosophyPoints.map((point, index) => (
                <div key={index} className="flex gap-4 items-start scroll-animate card-interactive">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p
                    className="text-lg text-foreground/80 leading-relaxed text-justify hyphens-auto"
                    style={{ wordSpacing: "0.05em" }}
                  >
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-8 text-center scroll-animate">
              Subjects & Teaching
            </h2>

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

            <div className="scroll-animate bg-white rounded-xl p-10 border-2 border-secondary/20 shadow-sm">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                <strong className="text-foreground">All competitive exams supported:</strong> JEE Main, JEE Advanced,
                NEET (Physics), and other engineering/medical entrance examinations. Classes available in both{" "}
                <strong className="text-foreground">online and offline modes</strong> based on student preference.
              </p>
            </div>
          </div>

          {/* Teaching Approach Section */}
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-8 text-center scroll-animate">
              How I Teach
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {teachingApproach.map((item, index) => (
                <div key={index} className="scroll-animate">
                  <SpotlightCard icon={item.icon} title={item.title} description={item.description} />
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
