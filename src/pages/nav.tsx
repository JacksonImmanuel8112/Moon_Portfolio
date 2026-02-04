import { useState } from 'react'

type NavProps = {
  theme: 'dark' | 'light'
  onToggle: () => void
}

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'project', label: 'Projects' },
  { id: 'exp', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const Nav = ({ theme, onToggle }: NavProps) => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container">
        <div className="nav-shell">
          <a href="#home" className="logo">
            Jackson Immanuel S
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map((link) => (
              <a key={link.id} className="nav-link" href={`#${link.id}`}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              className="theme-toggle"
              onClick={onToggle}
              aria-label="Toggle theme"
              aria-pressed={theme === 'dark'}
            >
              <span className={`toggle-icon ${theme === 'dark' ? 'is-dark' : 'is-light'}`}>
                <i className="fa-solid fa-sun" aria-hidden="true" />
                <i className="fa-solid fa-moon" aria-hidden="true" />
              </span>
            </button>
            <button
              className="md:hidden nav-burger"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              <i className="fa-solid fa-bars" aria-hidden="true" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-3 card" data-reveal>
            <div className="flex flex-col gap-3 text-sm">
              {links.map((link) => (
                <a
                  key={link.id}
                  className="nav-link"
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
