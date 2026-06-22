import { useState } from 'react'
import { navLinks, contactInfo } from '../data/site'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav>
        <a href="#hero" className="nav-logo">
          Florah<span>.</span>
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a href={contactInfo.resume} className="nav-cta" target="_blank" rel="noreferrer">
          Download CV
        </a>
        <button
          className="hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href={contactInfo.resume} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Download CV ↗
        </a>
      </div>
    </>
  )
}

export default Navbar
