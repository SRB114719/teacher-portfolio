export default function TeachingApproach() {
  const features = [
    "Conceptual clarity before problem solving",
    "One-on-one focused mentoring",
    "Personalized study plans",
    "Doubt-clearing focused sessions",
    "Regular assessments and progress tracking",
    "Strategic time management guidance",
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">My Teaching Approach</h2>
        <p className="text-lg text-[#6B7280] mb-12 max-w-3xl">
          I follow a structured yet flexible approach that adapts to each student's learning pace and style. Here's what
          you can expect from my mentorship:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center font-semibold">
                ✓
              </div>
              <h3 className="text-lg font-semibold text-[#1F2937] pt-1">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
