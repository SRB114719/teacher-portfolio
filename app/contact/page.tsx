"use client"
import Navigation from "@/components/navigation"
import type React from "react"
import Footer from "@/components/footer"
import { Phone, MessageCircle, Mail, Send, Clock } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
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

  const [formData, setFormData] = useState({
    name: "",
    class: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", class: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const faqs = [
    {
      question: "Do you teach individual students?",
      answer: "Yes, I offer both one-to-one sessions and small group classes to ensure personalized attention.",
    },
    {
      question: "Do you provide online classes?",
      answer: "Yes, I provide both online and offline classes based on student requirements and convenience.",
    },
    {
      question: "How can students enroll?",
      answer: "Students can enroll by calling, sending a WhatsApp message, or filling out the inquiry form on this page.",
    },
    {
      question: "Are study materials provided?",
      answer: "Yes, I provide selected notes, practice problems, and study materials tailored to each student's needs.",
    },
    {
      question: "What is the fee structure?",
      answer: "Fee structure is flexible and negotiable based on class type, duration, and student requirements. Please contact for details.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative py-24 px-6 overflow-hidden">
        {/* Soft Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-secondary/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-20 scroll-animate">
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <div className="h-1.5 w-24 bg-secondary rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-32">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {[
                { 
                  icon: Phone, 
                  title: "Phone", 
                  value: "9823788328", 
                  sub: "Direct calls for urgent inquiries", 
                  color: "bg-secondary/10", 
                  text: "text-secondary",
                  link: "tel:+919823788328"
                },
                { 
                  icon: MessageCircle, 
                  title: "WhatsApp", 
                  value: "9823788328", 
                  sub: "Quick responses & doubt clearing", 
                  color: "bg-accent/10", 
                  text: "text-accent",
                  link: "https://wa.me/919823788328"
                },
                { 
                  icon: Mail, 
                  title: "Email", 
                  value: "physicsrn@gmail.com", 
                  sub: "For formal inquiries & documentation", 
                  color: "bg-primary/10", 
                  text: "text-primary",
                  link: "mailto:physicsrn@gmail.com"
                }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link}
                  className="scroll-animate block bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_45px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-6">
                    <div className={`p-4 ${item.color} rounded-2xl group-hover:scale-110 transition-transform`}>
                      <item.icon className={`w-6 h-6 ${item.text}`} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">{item.title}</h3>
                      <p className="text-2xl font-bold text-foreground">{item.value}</p>
                      <p className="text-foreground/50 text-xs mt-1 font-medium">{item.sub}</p>
                    </div>
                  </div>
                </a>
              ))}

              <div className="scroll-animate bg-[#f8fafc] p-8 rounded-3xl border border-black/5 flex items-center gap-4">
                  <Clock className="w-5 h-5 text-primary/40" />
                  <p className="text-sm text-foreground/60 font-medium italic">
                    Typical response time: Within 2-4 hours
                  </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="scroll-animate">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
                
                <h3 className="text-3xl font-serif font-bold text-foreground">Send Inquiry</h3>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/80 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-[#fcfdfe] border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all shadow-sm"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground/80 ml-1">Class</label>
                      <select
                        name="class"
                        value={formData.class}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-[#fcfdfe] border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all shadow-sm appearance-none"
                      >
                        <option value="">Select Class</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                        <option value="11">Class 11</option>
                        <option value="12">Class 12</option>
                        <option value="competitive">Competitive</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground/80 ml-1">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-[#fcfdfe] border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all shadow-sm appearance-none"
                      >
                        <option value="">Select Subject</option>
                        <option value="mathematics">Maths</option>
                        <option value="physics">Physics</option>
                        <option value="both">Both</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/80 ml-1">Learning Goals</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-6 py-4 bg-[#fcfdfe] border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all shadow-sm resize-none"
                      placeholder="What are your academic requirements?"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={submitted}
                  className={`w-full py-5 rounded-full font-bold shadow-xl transition-all flex items-center justify-center gap-2 group ${
                    submitted ? "bg-emerald-500 text-white" : "bg-primary text-white hover:bg-primary/90 hover:-translate-y-1 shadow-primary/20"
                  }`}
                >
                  <Send className={`w-4 h-4 ${submitted ? "hidden" : "group-hover:translate-x-1 transition-transform"}`} />
                  {submitted ? "Message Sent! ✓" : "Send Inquiry"}
                </button>
              </div>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-16 text-center scroll-animate">
              Frequently Asked{" "}
              <span className="relative inline-block">
                Questions
                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-secondary rounded-full"></span>
              </span>
            </h2>

            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="scroll-animate border-none bg-[#f8fafc] rounded-3xl px-8 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
                >
                  <AccordionTrigger className="text-left font-bold text-lg md:text-xl text-foreground/80 hover:no-underline py-8 hover:text-primary transition-colors data-[state=open]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/60 leading-relaxed pb-8 text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}