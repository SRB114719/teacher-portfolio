"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Do you teach individual students?",
      answer:
        "Yes, I exclusively teach individual students. This one-on-one approach allows me to tailor every session to your specific needs, learning style, and pace. Each student receives undivided attention and personalized strategies.",
    },
    {
      question: "Do you take online classes?",
      answer:
        "I offer both online and offline sessions. Online classes are conducted through video call with interactive tools for problem-solving and explanation. You can choose the mode that works best for you.",
    },
    {
      question: "How can I enroll?",
      answer:
        "Getting started is simple. Just reach out through the contact form or call me directly. We can discuss your academic goals, current level, and expectations. I'll then prepare a customized plan for your learning journey.",
    },
    {
      question: "Do you provide study material?",
      answer:
        "Yes, I provide comprehensive study material including detailed notes, practice problems, previous year papers, and curated resources. All materials are tailored to your specific needs and learning objectives.",
    },
    {
      question: "How long does it take to see improvement?",
      answer:
        "Most students notice significant improvement within 4-6 weeks of consistent, focused learning. However, the timeline varies based on starting level and learning consistency. Dedication and regular practice are key factors.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "I understand that schedules can be unpredictable. Classes can be rescheduled with 24 hours notice. It's important to maintain consistency in learning, so I encourage students to stick to regular schedules for best results.",
    },
  ]

  return (
    <section id="faqs" className="py-20 px-6 bg-[#F8F9FB]">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 text-left"
              >
                <h3 className="text-lg font-semibold text-[#1F2937]">{faq.question}</h3>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-[#1E3A8A] transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-4 text-[#6B7280] leading-relaxed border-t border-[#E5E7EB] pt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
