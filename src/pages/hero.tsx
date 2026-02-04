import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import gsap from 'gsap'

export const Hero = () => {
  useGSAP(() => {
    const heroSplit = SplitText.create('.hero-title', { type: 'chars,words' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#home',
        start: 'top 80%',
        toggleActions: 'restart none none reset',
      },
    })

    tl.from(heroSplit.chars, {
      ease: 'power3.out',
      stagger: 0.05,
      duration: 0.6,
      yPercent: 120,
      opacity: 0,
    })
      .from('.hero-sub', { opacity: 0, y: 16, duration: 0.6 }, '-=0.2')
      .from('.hero-cta', { opacity: 0, y: 16, duration: 0.6 }, '-=0.2')

    return () => {
      heroSplit.revert()
      tl.kill()
    }
  }, [])

  return (
    <section id="home" className="section pt-32 sm:pt-40">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-6">
          <div className="eyebrow hero-sub">Front-End Developer</div>
          <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display leading-[1.02]">
            I build things that do not break on the first click.
          </h1>
          <p className="hero-sub text-[var(--muted)] text-lg sm:text-xl leading-relaxed max-w-2xl">
            Jackson Immanuel S. I turn caffeine into clean code and ship interfaces
            that feel expensive. Yes, it works. No, I did not copy it from Stack
            Overflow (much).
          </p>
          <div className="hero-cta flex flex-wrap gap-3">
            <a className="btn btn-primary" href="#project">
              View Projects
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-card card card-hero glow-border" data-reveal>
          <div className="card-title">Highlights</div>
          <ul className="space-y-4 text-sm text-[var(--muted)]">
            <li>
              <span className="text-[var(--text)] font-semibold">Current:</span>{' '}
              Angular Developer at Careworx Pvt Ltd.
            </li>
            <li>
              <span className="text-[var(--text)] font-semibold">Previously:</span>{' '}
              React JS Developer at Pikture Associates Pvt Ltd.
            </li>
            <li>
              <span className="text-[var(--text)] font-semibold">Studying:</span>{' '}
              MCA at the University of Madras.
            </li>
            <li>
              <span className="text-[var(--text)] font-semibold">New skill:</span>{' '}
              ASP.NET Web API + MSSQL for API development.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
