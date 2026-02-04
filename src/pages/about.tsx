export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container grid gap-10 md:grid-cols-2">
        <div className="space-y-5">
          <div className="eyebrow" data-reveal>
            About
          </div>
          <h2 className="text-3xl sm:text-4xl font-display" data-reveal>
            Front-end developer with a bias for clean, calm interfaces.
          </h2>
          <p className="text-[var(--muted)] leading-relaxed" data-reveal>
            I design and build responsive web applications with React and Angular,
            focusing on performance, accessibility, and micro-interactions that feel
            quietly premium. I turn complex requirements into interfaces that feel
            simple, predictable, and a little bit magical.
          </p>
          <p className="text-[var(--muted)] leading-relaxed" data-reveal>
            Currently an Angular Developer at Careworx Pvt Ltd and pursuing my MCA
            at the University of Madras. I have also been building ASP.NET Web APIs
            with MSSQL for reliable, production-ready data services.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="card" data-reveal>
            <div className="card-title">Focus</div>
            <p className="card-text">
              UI engineering, design systems, performance budgets, and interaction
              polish.
            </p>
          </div>
          <div className="card" data-reveal>
            <div className="card-title">Working Style</div>
            <p className="card-text">
              Collaborative, low-ego, high-ownership. I ship polished UIs without
              the drama.
            </p>
          </div>
          <div className="card" data-reveal>
            <div className="card-title">Currently</div>
            <p className="card-text">
              Shipping Angular apps, leveling up in data-driven UIs, and building
              ASP.NET Web APIs backed by MSSQL.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
