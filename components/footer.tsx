import Link from "next/link"
import { Phone, Mail, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    /* Removed gradient, using simple primary blue background */
    <footer className="bg-primary text-white py-16 px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-white">Ram P. Singh</h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-3">M.Sc, Ph.D (Physics) - Mumbai University</p>
            <p className="text-blue-100 text-sm leading-relaxed">
              18+ years of dedicated teaching experience in Mathematics & Physics
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/results"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Results
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span>9823788328</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span>Email coming soon</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-blue-100">
          <p>© 2025 Ram P. Singh. All rights reserved. | Dedicated to academic excellence</p>
        </div>
      </div>
    </footer>
  )
}
