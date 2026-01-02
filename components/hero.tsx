"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#1F2937] mb-6 leading-tight">
          Private Tutor for JEE & Academic Excellence
        </h1>
        <p className="text-xl text-[#6B7280] mb-12 leading-relaxed max-w-2xl mx-auto">
          Dedicated one-on-one teaching focused on concepts, clarity, and long-term success. I help students master
          complex subjects through personalized mentoring and strategic guidance.
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
          <Link href="/results" className="btn-secondary">
            View Results
          </Link>
        </div>
      </div>
    </section>
  )
}
