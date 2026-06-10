import { useEffect, useState } from 'react'

const roles = [
  'Senior Data Engineer',
  'ETL/ELT Pipeline Architect',
  'Cloud Data Warehouse Expert',
  'Big Data & Streaming Specialist',
  'Data Lakehouse Engineer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="hero" className="hero">
      <div className="hero__content fade-up">
        <p className="hero__greeting mono">Hi, my name is</p>
        <h1 className="hero__name">Aishwarya Golla.</h1>
        <h2 className="hero__role">
          <span>{displayed}</span>
          <span className="hero__cursor">|</span>
        </h2>
        <p className="hero__summary">
          Results-driven Data Engineer with <span className="accent">4+ years</span> of experience
          designing cloud-native data solutions across AWS, Azure, and GCP. Expert in building
          scalable ETL/ELT pipelines, real-time streaming architectures, and data lakehouse platforms
          that power data-driven decision-making.
        </p>
        <div className="hero__cta">
          <a
            href="#experience"
            className="btn btn--primary"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn btn--outline"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="hero__social">
        <a
          href="https://www.linkedin.com/in/golla-ishwarya-5733053b6"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="21" height="21">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href="https://github.com/ishwaryaa2k1-de"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="21" height="21">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="mailto:ishwaryaa2k1@gmail.com" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="21" height="21">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
        <div className="hero__social-line" />
      </div>

      <div className="hero__scroll-hint">
        scroll
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
