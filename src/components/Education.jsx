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
            <span className={`timeline-badge ${item.type === 'experience' ? 'badge-exp' : 'badge-edu'}`}>
              {item.type === 'experience' ? 'Experience' : 'Education'}
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
          <div className="section-label">Background</div>
          <h2 className="section-title">Education & Experience</h2>
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
