import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { navLinks, siteMeta, socialLinks, contactInfo } from '../data/site'
import { GitHubIcon, LinkedInIcon } from './Icons'
import './Layout.css'

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const btnRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus() }
    }
    const onClick = (e) => {
      if (!panelRef.current?.contains(e.target) && !btnRef.current?.contains(e.target)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label={`${siteMeta.brand} — home`}>
          <span className="brand-mark" aria-hidden="true">F</span>
          <span className="brand-text">{siteMeta.brand}</span>
        </Link>

        <button
          ref={btnRef}
          className={`menu-btn${open ? ' is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`menu-backdrop${open ? ' is-open' : ''}`} aria-hidden="true" />
      <nav
        id="site-menu"
        ref={panelRef}
        className={`menu-panel${open ? ' is-open' : ''}`}
        aria-label="Main navigation"
        {...(!open && { inert: '' })}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} className={({ isActive }) => `menu-link${isActive ? ' active' : ''}`}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand">
            <span className="brand-mark" aria-hidden="true">F</span>
            <span className="brand-text">{siteMeta.brand}</span>
          </Link>
          <p className="footer-blurb">{siteMeta.name}<br />Software Developer &amp; AI Systems Developer</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="footer-social">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub (opens in a new tab)"><GitHubIcon /></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)"><LinkedInIcon /></a>
          <a href={`mailto:${contactInfo.email}`} className="footer-mail">{contactInfo.email}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteMeta.name}. All rights reserved.</span>
      </div>
      <button
        className={`to-top${showTop ? ' visible' : ''}`}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >↑</button>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" key={pathname} className="page">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
