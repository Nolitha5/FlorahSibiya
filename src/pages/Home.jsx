import { Link } from 'react-router-dom'
import usePageMeta from '../components/usePageMeta'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { siteMeta, contactInfo, socialLinks } from '../data/site'
import { GitHubIcon, LinkedInIcon } from '../components/Icons'
import './Home.css'

const skillPreview = ['React', 'JavaScript', 'Python', 'Node.js', 'REST APIs', 'MySQL / PostgreSQL', 'LLM Integration', 'Agentic AI']

export default function Home() {
  usePageMeta('', siteMeta.description)
  const featured = projects.filter((p) => p.featured)
  const aiCount = projects.filter((p) => p.category === 'ai' || p.category === 'intelligent').length

  return (
    <>
      <section className="hero bg-glow">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Available for opportunities</span>
            <h1 className="h1">
              Florah Nolitha <span className="text-gradient">Sibiya</span>
            </h1>
            <p className="hero-headline">{siteMeta.headline}</p>
            <p className="lead">
              I build web applications and AI-powered software — integrating LLMs, multi-agent
              workflows and automation into practical tools. Currently a Graduate Intern in AI &amp;
              Software Development at 4IR TUT.
            </p>
            <div className="btn-row hero-actions">
              <Link to="/projects" className="btn btn-primary">View My Projects</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
              <a href={contactInfo.resume} target="_blank" rel="noreferrer" className="btn btn-secondary">Download CV ↓</a>
            </div>
            <div className="hero-social">
              <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub (opens in a new tab)"><GitHubIcon /></a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)"><LinkedInIcon /></a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="false">
            <div className="orb" aria-hidden="true" />
            <div className="portrait">
              <img src="/assets/proff.png" alt={`Portrait of ${siteMeta.name}`} width="480" height="640" fetchpriority="high" />
            </div>
            <div className="code-chip" aria-hidden="true">
              <span className="dot" /> agent.run(<em>"student_risk"</em>)
            </div>
          </div>
        </div>
      </section>

      <section className="page-section stats-wrap" aria-label="At a glance">
        <div className="container stats">
          <div><strong>{projects.length}</strong><span>Projects built</span></div>
          <div><strong>{aiCount}</strong><span>AI &amp; intelligent systems</span></div>
          <div><strong>2</strong><span>Roles at 4IR TUT</span></div>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Core skills</span>
            <h2 className="h2">Software development, with AI built in</h2>
          </div>
          <div className="chips skill-preview">
            {skillPreview.map((s, i) => (
              <span key={s} className={`chip ${i > 5 ? 'chip-violet' : i > 3 ? 'chip-teal' : ''}`}>{s}</span>
            ))}
          </div>
          <Link to="/about" className="text-link">See the full skill set →</Link>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Selected work</span>
            <h2 className="h2">Featured projects</h2>
          </div>
          <div className="grid grid-2">
            {featured.map((p) => <ProjectCard key={p.id} project={p} compact />)}
          </div>
          <div className="btn-row" style={{ marginTop: '2rem' }}>
            <Link to="/projects" className="btn btn-secondary">See all {projects.length} projects →</Link>
          </div>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band card">
            <div>
              <h2 className="h2">Have a role or project in mind?</h2>
              <p className="lead" style={{ marginTop: '0.5rem' }}>I’m open to junior software and AI development opportunities, and to freelance website work.</p>
            </div>
            <div className="btn-row">
              <Link to="/contact" className="btn btn-primary">Get in touch</Link>
              <Link to="/pricing" className="btn btn-secondary">View pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
