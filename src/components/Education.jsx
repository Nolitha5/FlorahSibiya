import { educationItems } from '../data/education'
import './Education.css'

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0

  return (
    <div className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}>
      <div className="timeline-card">
        <div className="timeline-card-header">
          <div className="timeline-icon">{item.icon}</div>
          <div>
            <span className={`timeline-badge ${
              item.type === 'experience' ? 'badge-exp'
              : item.type === 'certificate' ? 'badge-cert'
              : 'badge-edu'
            }`}>
              {item.type === 'experience' ? 'Experience'
               : item.type === 'certificate' ? 'Certificate'
               : 'Education'}
            </span>
            <div className="timeline-period">{item.period}</div>
          </div>
        </div>
        <h3 className="timeline-title">{item.title}</h3>
        <p className="timeline-institution">{item.institution}</p>
        <ul className="timeline-highlights">
          {item.highlights.map((point, i) => (
            <li key={i}>
              <span className="highlight-dot" />
              {point}
            </li>
          ))}
        </ul>
        {item.cert && (
          <a
            href={item.cert}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-link"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            View Certificate
          </a>
        )}
      </div>
      <div className="timeline-connector">
        <div className="timeline-dot" />
      </div>
    </div>
  )
}

function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Journey</div>
          <h2 className="section-title">Experience &amp; Education</h2>
          <p className="section-desc">
            My academic journey and professional experience — from the classroom to building
            real-world AI and software systems.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line" />
          {educationItems.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
