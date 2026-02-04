export const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="card card-cta" data-reveal>
          <div className="space-y-4">
            <div className="eyebrow">Contact</div>
            <h2 className="text-3xl sm:text-4xl font-display">
              Let us build something that looks expensive.
            </h2>
            <p className="text-[var(--muted)] leading-relaxed max-w-2xl">
              If you need a front-end that feels premium and behaves reliably, I am
              your person. I reply fast, ship faster, and keep the sarcasm under
              control.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="btn btn-primary"
              href="https://www.linkedin.com/in/jacksonimmanuels/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk on LinkedIn
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/JacksonImmanuel8112"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.instagram.com/jackson_immanuel.s/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
