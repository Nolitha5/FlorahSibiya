import { navLinks, siteMeta } from '../data/site'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <span className="footer-copy">
            © {new Date().getFullYear()} {siteMeta.name}. All rights reserved.
          </span>
          <nav className="footer-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
