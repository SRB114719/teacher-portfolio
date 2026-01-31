"use client"
import Navigation from "@/components/navigation"
import type React from "react"

import Footer from "@/components/footer"
import { Phone, MessageCircle, Mail, Send } from "lucide-react"
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
      answer:
        "Students can enroll by calling, sending a WhatsApp message, or filling out the inquiry form on this page.",
    },
    {
      question: "Are study materials provided?",
      answer: "Yes, I provide selected notes, practice problems, and study materials tailored to each student's needs.",
    },
    {
      question: "What is the fee structure?",
      answer:
        "Fee structure is flexible and negotiable based on class type, duration, and student requirements. Please contact for details.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4 scroll-animate">
            Get in Touch
          </h1>
          <div className="h-1 w-24 bg-secondary mb-16 scroll-animate"></div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Contact Info Cards */}
            <div className="space-y-8">
              <div className="scroll-animate card-interactive group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                    <p className="text-2xl font-bold text-primary mb-1">9823788328</p>
                    <p className="text-muted-foreground text-sm">Available for calls and inquiries</p>
                  </div>
                </div>
              </div>

              <div className="scroll-animate card-interactive group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
                    <p className="text-2xl font-bold text-primary mb-1">9823788328</p>
                    <p className="text-muted-foreground text-sm">Quick responses via WhatsApp</p>
                  </div>
                </div>
              </div>

              <div className="scroll-animate card-interactive group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-destructive/10 rounded-lg group-hover:bg-destructive/20 transition-colors">
                    <Mail className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm italic">physicsrn@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="scroll-animate">
              <div className="card p-8 space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Send Inquiry</h3>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary bg-card transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Class *</label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary bg-card transition-all duration-300"
                  >
                    <option value="">Select your class</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                    <option value="competitive">Competitive Exam Preparation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary bg-card transition-all duration-300"
                  >
                    <option value="">Select subject of interest</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="physics">Physics</option>
                    <option value="both">Both Mathematics & Physics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary bg-card transition-all duration-300 resize-none"
                    placeholder="Tell me about your learning goals and requirements..."
                  />
                </div>

                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 group">
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  {submitted ? "Message Sent! ✓" : "Send Inquiry"}
                </button>
              </div>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-2 text-center scroll-animate">
              Frequently Asked
            </h2>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-8 text-center scroll-animate">
              <span className="relative inline-block">
                Questions
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary"></span>
              </span>
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="scroll-animate border-2 border-border rounded-lg px-6 hover:border-primary hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6 hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed pb-6">{faq.answer}</AccordionContent>
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
