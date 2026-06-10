import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a className="navbar__logo" href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>
        <span className="accent">AG</span>
      </a>

      <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
        {links.map((link, i) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="navbar__link"
            >
              <span className="accent mono">0{i + 1}.</span> {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="mailto:ashwariya487@gmail.com"
            className="btn btn--outline"
          >
            Hire Me
          </a>
        </li>
      </ul>

      <button
        className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
