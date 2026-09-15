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
            <p className="hero-subtitle">Software Developer & AI Systems Developer Intern at 4IR Lab. I build full-stack applications and develop agentic AI systems — integrating LLMs, multi-agent workflows, and ML models into software that works in the real world.</p>
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
                <div className="stat-label">AI projects built</div>
                <div className="stat-value">
                  <span>8+</span>
                </div>
              </div>
              <div>
                <div className="stat-label">Projects shipped</div>
                <div className="stat-value">
                  <span>14+</span>
                </div>
              </div>
              <div>
                <div className="stat-label">Specialisation</div>
                <div className="stat-value">
                  <span>AI</span> · Dev
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
