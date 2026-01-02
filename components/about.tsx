export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-[#1F2937] mb-4">Experience & Expertise</h3>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              With over a decade of dedicated teaching experience, I have guided hundreds of students through their most
              critical academic phases. My journey in education began with a passion for making complex concepts
              accessible and understandable.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              I specialize in JEE Main & Advanced preparation, helping students develop a deep understanding of Physics,
              Chemistry, and Mathematics. Every student is unique, and I tailor my approach to their individual learning
              style and pace.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-semibold text-[#1F2937] mb-4">Teaching Philosophy</h3>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              I believe that true learning comes from understanding, not memorization. My teaching approach focuses on
              building strong conceptual foundations that help students solve problems independently.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              I chose teaching because I love the moment when a difficult concept finally clicks for a student. That
              transformation is what drives my commitment to personalized, high-quality education. Success, for me,
              means seeing my students achieve their dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
