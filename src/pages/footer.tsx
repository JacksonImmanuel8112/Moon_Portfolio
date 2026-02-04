export const Footer = () => {
  return (
    <footer className="pb-12">
      <div className="container">
        <div className="footer-card">
          <div className="text-sm text-[var(--muted)]">
            Built with React, Tailwind, and a questionable amount of caffeine.
          </div>
          <div className="flex items-center gap-4 text-lg">
            <a
              href="https://github.com/JacksonImmanuel8112"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.instagram.com/jackson_immanuel.s/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/jacksonimmanuels/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
          <div className="text-xs text-[var(--muted)]">
            Copyright (c) Jackson Immanuel S
          </div>
        </div>
      </div>
    </footer>
  )
}
