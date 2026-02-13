// import foodproject from '../assets/foodproject.jpg'
import urlshort from '../assets/urlshort.png'
import comingsoon from '../assets/comingsoon.jpg'

const projects = [
  {
    title: 'URL Shortener',
    description:
      'A simple and efficient URL shortening service built with Angular and .Net API with PostgreSQL.',
    image: urlshort,
    // link: 'https://famous-raindrop-db0b2f.netlify.app/',
    link: 'https://url-shorteners-asp.netlify.app/',
    status: 'Live',
    cta: 'View case',
  },
  {
    title: 'Next Project',
    description:
      'In progress. The pixels are behaving, the API is cooperating, and the coffee is working.',
    image: comingsoon,
    link: '',
    status: 'Coming soon',
    cta: 'Preview soon',
  },
]

export const Projects = () => {
  return (
    <section id="project" className="section">
      <div className="container space-y-8">
        <div className="space-y-4">
          <div className="eyebrow" data-reveal>
            Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-display" data-reveal>
            High-contrast work with calm, confident motion.
          </h2>
          <p className="text-[var(--muted)] max-w-2xl" data-reveal>
            A few builds that prove I do not just talk about quality. I ship it.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const card = (
              <div className="project-card">
                <div className="project-media">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay" />
                </div>
                <div className="project-body">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    <span>{project.status}</span>
                    <span>Featured</span>
                  </div>
                  <h3 className="text-xl font-display">{project.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <span className="project-link">{project.cta}</span>
                </div>
              </div>
            )

            if (project.link) {
              return (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-wrap"
                  data-reveal
                >
                  {card}
                </a>
              )
            }

            return (
              <div key={project.title} className="project-wrap" data-reveal>
                {card}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
