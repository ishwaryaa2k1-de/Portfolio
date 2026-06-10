import { useEffect, useState } from 'react'

const roles = [
  'Senior Salesforce Consultant',
  'AI & Agentforce Architect',
  'FSC & Health Cloud Expert',
  'MuleSoft Integration Specialist',
  'OmniStudio Developer',
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
      timeout = setTimeout(() => setDeleting(true), 2000)
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
        <p className="hero__greeting mono accent">Hi, my name is</p>
        <h1 className="hero__name">Aishwarya Golla.</h1>
        <h2 className="hero__role">
          <span>{displayed}</span>
          <span className="hero__cursor accent">|</span>
        </h2>
        <p className="hero__summary">
          Results-driven Salesforce &amp; AI Industry Cloud Consultant with{' '}
          <span className="accent">11+ years</span> of experience architecting
          and delivering innovative Salesforce solutions — from Financial Services
          Cloud to Agentforce AI automation.
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
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero__social">
        <a href="https://www.linkedin.com/in/aishwarya-naidu-golla-730302287" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="mailto:ashwariya487@gmail.com" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
        <div className="hero__social-line" />
      </div>

      <div className="hero__scroll-hint">
        <span className="mono accent" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
