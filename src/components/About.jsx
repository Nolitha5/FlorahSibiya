import AboutCard from './AboutCard'
import { aboutCards } from '../data/about'
import './About.css'

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-stack">
            <img src="/assets/subPic.jpeg" alt="Florah at work" className="about-img" />
            <div className="about-badge">
              <div className="about-badge-label">Current role</div>
              <div className="about-badge-value">
                AI Systems
                <br />
                <span>Intern</span>
              </div>
            </div>
          </div>
          <div className="about-content">
            <div className="section-header">
              <div className="section-label">About me</div>
              <h2 className="section-title">Developer at the intersection of software and AI</h2>
            </div>
            <p className="about-text">
              I&apos;m a Software Developer and AI Systems Developer Intern at 4IR Lab, where I
              build intelligent workflows and full-stack applications. I bring a hands-on
              approach to agentic AI, automation, and web development — turning ideas into
              systems that actually work.
            </p>
            <p className="about-text">
              My work spans biometric security systems, AI-powered career tools, e-commerce
              platforms, and multi-agent research assistants. I&apos;m drawn to problems at the
              edge of what&apos;s possible with today&apos;s technology.
            </p>
            <div className="about-cards">
              {aboutCards.map((card) => (
                <AboutCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
