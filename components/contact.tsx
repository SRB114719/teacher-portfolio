"use client"

import type React from "react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-[#1E3A8A] uppercase tracking-wide mb-2">Phone</h3>
              <p className="text-xl font-medium text-[#1F2937]">+91 (98765) 43210</p>
              <p className="text-[#6B7280] mt-1">Available for calls during class timings</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#1E3A8A] uppercase tracking-wide mb-2">Email</h3>
              <p className="text-xl font-medium text-[#1F2937]">tutor@example.com</p>
              <p className="text-[#6B7280] mt-1">Response within 24 hours</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#1E3A8A] uppercase tracking-wide mb-2">WhatsApp</h3>
              <button className="btn-primary inline-block">Message on WhatsApp</button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] bg-white"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] bg-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] bg-white"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-2">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] bg-white"
              >
                <option value="">Select a subject</option>
                <option value="jee">JEE Preparation</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="math">Mathematics</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] bg-white"
                placeholder="Tell me about your learning goals..."
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              {submitted ? "Message Sent! ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
