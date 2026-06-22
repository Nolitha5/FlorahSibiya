import { socialLinks, siteMeta } from '../data/site'
import { LinkedInIcon, GitHubIcon } from './Icons'
import './Hero.css'

function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid-line"></div>
      <div className="hero-accent-blob"></div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-eyebrow">Available for opportunities</div>
            <h1 className="hero-title">
              Florah
              <br />
              Nolitha
              <br />
              <span className="accent">Sibiya</span>
            </h1>
            <p className="hero-subtitle">{siteMeta.role}. I build intelligent applications — from agentic AI workflows to full-stack web systems.</p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                View my work
              </a>
              <a href="#contact" className="btn-secondary">
                Get in touch
              </a>
            </div>
            <div className="hero-socials">
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="social-chip">
                <LinkedInIcon />
                LinkedIn
              </a>
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="social-chip">
                <GitHubIcon />
                GitHub
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="stat-label">Focus areas</div>
                <div className="stat-value">
                  <span>2+</span>
                </div>
              </div>
              <div>
                <div className="stat-label">Projects shipped</div>
                <div className="stat-value">
                  <span>9+</span>
                </div>
              </div>
              <div>
                <div className="stat-label">Tech stack</div>
                <div className="stat-value">
                  <span>12+</span> tools
                </div>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="/assets/proff.png" alt={siteMeta.name} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
