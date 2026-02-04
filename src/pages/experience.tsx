import { myWorkAtCareworx } from '../data'

const timeline = [
  {
    role: 'Angular Developer',
    company: 'Careworx Pvt Ltd',
    period: 'Jun 2025 - Present',
    description:
      'Building scalable Angular applications with thoughtful UI architecture, performance tuning, and clean component systems.',
  },
  {
    role: 'React JS Developer',
    company: 'Pikture Associates Pvt Ltd',
    period: 'Nov 2023 - Jun 2025',
    description:
      'Delivered interactive React experiences, reusable component libraries, and reliable API integrations across multiple products.',
  },
]

export const Experience = () => {
  return (
    <section id="exp" className="section">
      <div className="container space-y-10">
        <div className="space-y-4">
          <div className="eyebrow" data-reveal>
            Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-display" data-reveal>
            Shipping real products with real deadlines.
          </h2>
        </div>
        <div className="timeline" data-reveal>
          {timeline.map((item) => (
            <div key={item.role} className="timeline-item">
              <div className="timeline-dot" />
              <div className="space-y-2">
                <div className="text-lg font-semibold">{item.role}</div>
                <div className="text-sm text-[var(--muted)]">
                  {item.company} - {item.period}
                </div>
                <p className="text-[var(--muted)] leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {myWorkAtCareworx.map((item) => (
            <div key={item.heading} className="card" data-reveal>
              <div className="flex items-center gap-3">
                <span className="icon-pill">
                  <i className={`fa-solid ${item.icon}`} aria-hidden="true" />
                </span>
                <div className="card-title">{item.heading}</div>
              </div>
              <p className="card-text">{item.brief}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
