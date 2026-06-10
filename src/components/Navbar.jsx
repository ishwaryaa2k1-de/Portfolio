import { useState, useEffect } from 'react'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
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
        AG
      </a>

      <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="navbar__link"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href="mailto:ishwaryaa2k1@gmail.com" className="btn btn--outline">
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
