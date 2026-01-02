export default function Results() {
  const stats = [
    {
      number: "10+",
      label: "Years of Experience",
    },
    {
      number: "300+",
      label: "Students Mentored",
    },
    {
      number: "95%",
      label: "Student Improvement Rate",
    },
    {
      number: "50+",
      label: "Top JEE Ranks",
    },
  ]

  return (
    <section id="results" className="py-20 px-6 bg-[#F8F9FB]">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Results & Experience</h2>
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="card text-center">
              <div className="text-4xl font-serif font-bold text-[#1E3A8A] mb-2">{stat.number}</div>
              <p className="text-[#6B7280] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg p-12 border border-[#E5E7EB]">
          <h3 className="text-2xl font-serif font-semibold text-[#1F2937] mb-6">Student Success Stories</h3>
          <ul className="space-y-4 text-[#6B7280] leading-relaxed">
            <li className="flex gap-3">
              <span className="text-[#D97706] font-bold">•</span>
              <span>Consistent academic improvement with average score increase of 45% in the first 3 months</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D97706] font-bold">•</span>
              <span>Students securing top percentile scores in JEE Main & Advanced</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D97706] font-bold">•</span>
              <span>Strong conceptual foundation helping students excel in class exams</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#D97706] font-bold">•</span>
              <span>Personalized guidance leading to improved confidence and reduced exam anxiety</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
