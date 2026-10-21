import usePageMeta from '../components/usePageMeta'
import { educationItems } from '../data/education'
import './Experience.css'

const groups = [
  { type: 'experience', label: 'Experience' },
  { type: 'education', label: 'Education' },
  { type: 'certificate', label: 'Professional development' },
]

// Student number is intentionally not shown on the public site.
const hide = (line) => /student number/i.test(line)

function Item({ item }) {
  return (
    <li className="tl-item">
      <span className="tl-dot" aria-hidden="true">{item.icon}</span>
      <div className="card tl-card">
        <div className="tl-top">
          <h3 className="h3">{item.title}</h3>
          <span className="chip chip-teal">{item.period}</span>
        </div>
        <p className="tl-org">{item.institution}</p>
        <ul className="tl-points">
          {item.highlights.filter((h) => !hide(h)).map((h) => <li key={h}>{h}</li>)}
        </ul>
        {item.cert && (
          <a href={item.cert} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">View certificate ↗</a>
        )}
      </div>
    </li>
  )
}

export default function Experience() {
  usePageMeta('Experience & Education', 'Experience at 4IR TUT, a National Diploma in IT (Software Development) from TUT, and a WeThinkCode_ GenAI certificate.')

  return (
    <>
      <section className="page-hero bg-glow">
        <div className="container">
          <span className="eyebrow">Journey</span>
          <h1 className="h1">Experience &amp; <span className="text-gradient">Education</span></h1>
          <p className="lead">Hands-on experience at 4IR TUT, backed by a software development diploma and ongoing AI training.</p>
        </div>
      </section>

      {groups.map((g) => {
        const items = educationItems.filter((i) => i.type === g.type)
        if (!items.length) return null
        return (
          <section key={g.type} className="page-section" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
            <div className="container">
              <h2 className="h2 group-title">{g.label}</h2>
              <ol className="timeline">{items.map((i) => <Item key={i.id} item={i} />)}</ol>
            </div>
          </section>
        )
      })}
    </>
  )
}
