export default function ClassDetails() {
  const details = [
    {
      label: "Mode",
      value: "Online & Offline",
      description: "Flexible learning modes based on your preference",
    },
    {
      label: "Batch Type",
      value: "Individual Sessions",
      description: "One-on-one personalized instruction",
    },
    {
      label: "Timings",
      value: "Flexible & Scheduled",
      description: "Sessions arranged according to your availability",
    },
    {
      label: "Study Material",
      value: "Comprehensive",
      description: "Curated notes, problems, and practice sheets provided",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Class Details</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {details.map((detail, index) => (
            <div key={index} className="card">
              <div className="text-[#1E3A8A] font-serif font-semibold text-sm uppercase tracking-wide mb-2">
                {detail.label}
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#1F2937] mb-2">{detail.value}</h3>
              <p className="text-[#6B7280]">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
