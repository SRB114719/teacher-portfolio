export default function Subjects() {
  const subjects = [
    {
      title: "JEE Main & Advanced",
      description:
        "Comprehensive preparation for competitive entrance exams with strategic guidance and problem-solving techniques.",
      icon: "📚",
    },
    {
      title: "Physics",
      description: "Deep conceptual understanding of mechanics, thermodynamics, electromagnetism, and modern physics.",
      icon: "⚛️",
    },
    {
      title: "Chemistry",
      description: "Master organic, inorganic, and physical chemistry with focus on applications and problem patterns.",
      icon: "🧪",
    },
    {
      title: "Mathematics",
      description: "Excel in calculus, algebra, trigonometry, and coordinate geometry with proven strategies.",
      icon: "📐",
    },
  ]

  return (
    <section id="teaching" className="py-20 px-6 bg-[#F8F9FB]">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Subjects I Teach</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {subjects.map((subject, index) => (
            <div key={index} className="card">
              <div className="text-5xl mb-4">{subject.icon}</div>
              <h3 className="text-2xl font-serif font-semibold text-[#1F2937] mb-3">{subject.title}</h3>
              <p className="text-[#6B7280] leading-relaxed">{subject.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
