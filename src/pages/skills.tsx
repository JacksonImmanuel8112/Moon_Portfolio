import { Chips } from '../components/chips'
import { chipSkils } from '../data'

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container space-y-8">
        <div className="space-y-4">
          <div className="eyebrow" data-reveal>
            Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-display" data-reveal>
            A stack built for performance and polish.
          </h2>
          <p className="text-[var(--muted)] max-w-2xl" data-reveal>
            I work across modern front-end frameworks, data layers, and tooling to
            build products that feel fast, reliable, and intentional.
          </p>
        </div>
        <div className="flex flex-wrap gap-3" data-reveal>
          {chipSkils.map((item) => (
            <Chips key={item.name} name={item.name} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
