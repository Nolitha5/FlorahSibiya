import ContactChannel from './ContactChannel'
import { socialLinks, contactInfo } from '../data/site'
import { EmailIcon, LinkedInIcon, GitHubIcon } from './Icons'
import './Contact.css'

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="section-header">
              <div className="section-label">Contact</div>
              <h2 className="section-title">Let&apos;s build something together</h2>
              <p className="section-desc">
                Open to internship extensions, junior developer roles, and collaborative AI
                projects.
              </p>
            </div>
            <div className="contact-channels">
              <ContactChannel
                icon={<EmailIcon />}
                label="Email"
                value={contactInfo.email}
                href={`mailto:${contactInfo.email}`}
              />
              <ContactChannel
                icon={<LinkedInIcon fill="var(--accent)" />}
                label="LinkedIn"
                value="Nolitha Sibiya"
                href={socialLinks.linkedin}
                external
              />
              <ContactChannel
                icon={<GitHubIcon fill="var(--accent)" />}
                label="GitHub"
                value="github.com/Nolitha5"
                href={socialLinks.github}
                external
              />
            </div>
          </div>
          <div className="contact-card">
            <h3>Download my CV</h3>
            <p>
              Get a full overview of my experience, education, and technical skills in one
              document.
            </p>
            <div className="contact-actions">
              <a href={contactInfo.resume} target="_blank" rel="noreferrer" className="btn-primary">
                Download CV →
              </a>
              <a href={`mailto:${contactInfo.email}`} className="btn-secondary">
                Send an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
