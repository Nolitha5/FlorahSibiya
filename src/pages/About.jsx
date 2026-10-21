import { Link } from 'react-router-dom'
import usePageMeta from '../components/usePageMeta'
import { aboutCards } from '../data/about'
import { skillGroups } from '../data/skills'
import { contactInfo } from '../data/site'
import './About.css'

const approach = [
  { title: 'Problem-solving', text: 'I break a problem into small pieces, build a working version, then debug and improve it.' },
  { title: 'Collaboration', text: 'I use Git and clear communication to work with teammates and keep projects moving.' },
  { title: 'Continuous learning', text: 'I keep learning new tools, most recently through hands-on AI projects and a GenAI course.' },
  { title: 'Attention to detail', text: 'I document what I build and check the details that make software reliable.' },
]

export default function About() {
  usePageMeta('About', 'Florah Nolitha Sibiya — IT: Software Development graduate building web applications, AI systems and automation.')

  return (
    <>
      <section className="page-hero bg-glow">
        <div className="container">
          <span className="eyebrow">About me</span>
          <h1 className="h1">A developer at the intersection of <span className="text-gradient">software and AI</span></h1>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: '1.5rem' }}>
        <div className="container about-grid">
          <div className="about-photo">
            <img src="/assets/subPic.jpeg" alt="Florah Sibiya at work" loading="lazy" width="480" height="640" />
          </div>
          <div className="about-copy">
            <h2 className="h2">Background</h2>
            <p>
              I hold a National Diploma in Information Technology (Software Development) from
              Tshwane University of Technology. I started in web development as a Software
              Development Intern on the WIL programme at 4IR TUT, and I’m now a Graduate Intern in
              AI &amp; Software Development there.
            </p>
            <p>
              My work spans AI-powered career tools, multi-agent research assistants, e-commerce
              platforms and biometric security systems. I enjoy building software that is useful,
              intelligent and easy to use — turning ideas into systems that actually work.
            </p>
            <h2 className="h2" style={{ marginTop: '2rem' }}>Where I’m heading</h2>
            <p>
              I want to grow as a software engineer, deepen my full-stack skills, and build
              AI-powered solutions that solve real problems.
            </p>
            <div className="btn-row" style={{ marginTop: '1.5rem' }}>
              <Link to="/experience" className="btn btn-primary">Experience &amp; Education</Link>
              <a href={contactInfo.resume} target="_blank" rel="noreferrer" className="btn btn-secondary">Download CV ↓</a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head"><span className="eyebrow">What I do</span><h2 className="h2">Focus areas</h2></div>
          <div className="grid grid-3 focus-grid">
            {aboutCards.slice(0, 3).map((c) => (
              <div key={c.id} className="card hoverable">
                <div className="focus-icon" aria-hidden="true">{c.icon}</div>
                <h3 className="h3">{c.title}</h3>
                <p className="muted">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head"><span className="eyebrow">Toolbox</span><h2 className="h2">Skills</h2></div>
          <div className="grid grid-2">
            {skillGroups.map((g) => (
              <div key={g.id} className="card">
                <h3 className="h3" style={{ marginBottom: '0.9rem' }}>{g.title}</h3>
                <div className="chips">
                  {g.skills.map((s) => <span key={s.name} className="chip chip-teal">{s.name}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head"><span className="eyebrow">How I work</span><h2 className="h2">Approach</h2></div>
          <div className="grid grid-2">
            {approach.map((a) => (
              <div key={a.title} className="card">
                <h3 className="h3">{a.title}</h3>
                <p className="muted">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
