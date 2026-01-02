import type React from "react"
import type { Metadata } from "next"
import { Merriweather, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400", "700", "900"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Ram P. Singh - Mathematics & Physics Tutor",
  description:
    "Experienced Mathematics & Physics tutor with 18+ years of teaching experience. Personalized teaching focused on concept clarity, confidence, and long-term results.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
