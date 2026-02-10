"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Award, Users, BookOpen, GraduationCap, Quote, Target, Heart, TrendingUp, ArrowRight, Star } from "lucide-react"
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
            let currentYears = 0
            const yearsInterval = setInterval(() => {
              currentYears += 1
              setYearsCount(currentYears)
              if (currentYears >= 18) clearInterval(yearsInterval)
            }, 40)

            let currentStudents = 0
            const studentsInterval = setInterval(() => {
              currentStudents += 150
              setStudentsCount(Math.min(currentStudents, 3000))
              if (currentStudents >= 3000) clearInterval(studentsInterval)
            }, 30)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [yearsCount])

  const highlights = [
    { icon: Award, title: "18+ Years Experience", description: "Proven track record of excellence" },
    { icon: Users, title: "3000+ Students Mentored", description: "Individual attention to each student" },
    { icon: BookOpen, title: "Boards & Competitive", description: "Comprehensive exam preparation" },
    { icon: GraduationCap, title: "One-to-One Coaching", description: "Flexible learning environments" },
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
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* 1. Hero Section - Refined Spacing & Glows */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-12 pb-8 overflow-hidden">
        {/* Modern Background Details */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            
            {/* Left Column - Typography Upgrade */}
            <div className="flex flex-col justify-center scroll-animate">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-secondary"></span>
                <h4 className="text-xs md:text-sm text-secondary font-bold uppercase tracking-[0.3em]">Established Educator</h4>
              </div>

              <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-4 leading-tight">
                Ram P. Singh
              </h1>

              <h2 className="text-2xl md:text-3xl text-primary/80 font-medium mb-8">
                Senior Mathematics & Physics Tutor
              </h2>

              <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-lg mb-10">
                Personalized teaching focused on concept clarity, confidence, and long-term academic success.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-10 py-5 bg-primary text-white rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-primary/90 hover:-translate-y-1 transition-all flex items-center gap-3">
                  Enroll Now <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Column - Premium Layered Design */}
            <div className="flex items-center justify-center relative py-12 scroll-animate">
              <div className="relative w-full max-w-[340px] aspect-[4/5]">
                {/* Background Shadow Box */}
                <div className="absolute top-[15%] left-0 w-[85%] h-[70%] bg-primary rounded-[2rem] -z-10 shadow-2xl opacity-90"></div>
                
                {/* Main Circular Image */}
                <div className="absolute top-0 right-0 w-[85%] aspect-square rounded-full overflow-hidden border-[12px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white">
                  <Image
                    src="/thispic.png" 
                    alt="Ram P. Singh"
                    fill
                    className="object-cover object-center scale-150" 
                    priority
                  />
                </div>

                {/* Interactive Bubbles */}
                <div className="absolute top-[10%] left-[-10%] bg-secondary px-6 py-2.5 rounded-full shadow-xl transform -rotate-3 hover:rotate-0 transition-all duration-300 cursor-default z-20">
                  <p className="text-white text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">JEE Specialist</p>
                </div>

                <div className="absolute bottom-[20%] left-[5%] bg-accent px-6 py-2.5 rounded-full shadow-xl transform rotate-2 hover:rotate-0 transition-all duration-300 cursor-default z-20">
                  <p className="text-white text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">18+ Yrs Exp</p>
                </div>

                {/* Name Badge */}
                <div className="absolute bottom-0 right-[5%] w-[75%] bg-foreground p-6 rounded-2xl shadow-2xl">
                  <h3 className="text-white font-serif text-xl leading-tight mb-1">Ram P. Singh</h3>
                  <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-medium">Mumbai University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Stats - Background Shift (No lines) */}
      <section className="py-24 px-6 bg-[#f8fafc] relative overflow-hidden" ref={statsRef}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
  {[
    { val: `${yearsCount}+`, label: "Years Experience" },
    { val: `${studentsCount}+`, label: "Students Mentored" },
    { icon: Award, label: "Boards & Competitive", color: "text-secondary" },
    { icon: Users, label: "One-to-One Sessions", color: "text-accent" }
           ].map((stat, i) => {
    // Step 1: Assign the icon to a capitalized variable
    const Icon = stat.icon; 
    
    return (
      <div key={i} className="scroll-animate text-center">
        {stat.val ? (
          <div className="text-5xl md:text-6xl font-serif font-bold text-primary mb-3">
            {stat.val}
          </div>
        ) : (
          // Step 2: Render the capitalized 'Icon' component
          Icon && <Icon className={`w-14 h-14 mx-auto ${stat.color} mb-4`} />
        )}
        <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">
          {stat.label}
        </div>
      </div>
    );
  })}
</div>
        </div>
      </section>

      {/* 3. Teaching Approach - Modern Shadow Cards */}
      <section className="py-28 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-20 text-center scroll-animate">
            Teaching Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Target, color: "text-secondary", title: "Concept Clarity", desc: "Deep understanding through systematic explanations, not rote memorization." },
              { icon: Heart, color: "text-accent", title: "Personal Attention", desc: "Individual focus tailored to each student's learning pace and style." },
              { icon: TrendingUp, color: "text-primary", title: "Result Oriented", desc: "Regular assessments and progress tracking to ensure academic goals are met." }
            ].map((item, idx) => (
              <div key={idx} className="scroll-animate bg-white p-12 rounded-[2.5rem] shadow-[0_15px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(30,58,138,0.08)] hover:-translate-y-3 transition-all duration-500 group border border-slate-50">
                <div className={`w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Teaching Snapshot - Premium Layered Box */}
      <section className="py-24 px-6 bg-primary/[0.01]">
        <div className="max-w-4xl mx-auto scroll-animate">
          <div className="bg-white rounded-[3rem] p-16 shadow-[0_25px_70px_rgba(0,0,0,0.04)] relative overflow-hidden border border-slate-100">
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-full -mr-24 -mt-24"></div>
            <div className="flex items-center gap-3 mb-8">
               <Star className="w-5 h-5 text-secondary fill-secondary" />
               <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">Teaching Philosophy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-10 leading-tight">
              A commitment to <span className="text-primary italic">Excellence.</span>
            </h2>
            <div className="space-y-8">
              <p className="text-xl text-foreground/70 leading-relaxed">
                My philosophy centers on <strong className="text-foreground">concept-based learning</strong> rather than rote memorization. I focus on helping students develop deep understanding through systematic problem-solving.
              </p>
              <p className="text-xl text-foreground/70 leading-relaxed">
                With <strong className="text-foreground">regular tracking</strong>, I ensure every student stays on course to achieve their goals, whether for boards or competitive exams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials - Editorial Grid */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-24 text-center scroll-animate">
            Student Voices
          </h2>
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            {testimonials.map((t, idx) => (
              <div key={idx} className="scroll-animate bg-[#fcfdfe] p-12 rounded-[2.5rem] relative shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5">
                <Quote className="w-16 h-16 text-secondary/10 absolute top-10 right-10" />
                <p className="text-2xl text-foreground/80 leading-relaxed mb-12 italic font-serif relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-5 border-t border-black/5 pt-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-bold text-xl">{t.student[0]}</div>
                  <div>
                    <p className="font-bold text-foreground text-xl leading-none mb-2">{t.student}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{t.class}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center scroll-animate">
            <Link href="/results" className="px-12 py-6 bg-primary text-white rounded-full font-bold shadow-2xl shadow-primary/20 hover:bg-primary/90 hover:-translate-y-1 transition-all inline-block uppercase tracking-widest text-xs">
              View All Achievements
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}