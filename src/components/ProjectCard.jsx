import ProjectLink from './ProjectLink'
import './ProjectCard.css'

function ProjectCard({ project, onPlayDemo }) {
  const { title, tag, description, image, featured, links, video, docs } = project

  return (
    <div className={`project-card${featured ? ' featured' : ''}`}>
      <div className="project-card-img">
        <img src={image} alt={title} />
      </div>
      <div className="project-card-body">
        <span className="project-tag">{tag}</span>
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="card-action-btns">
          {video && (
            <button
              className="card-btn card-btn--demo"
              onClick={() => onPlayDemo(project)}
              aria-label={`Watch demo for ${title}`}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
                <polygon points="10,8 17,12 10,16" fill="currentColor" />
              </svg>
              Watch Demo
            </button>
          )}
          {docs && (
            <a
              href={docs}
              target="_blank"
              rel="noreferrer"
              className="card-btn card-btn--docs"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              Documentation
            </a>
          )}
        </div>

        <div className="project-links">
          {links.map((link) => (
            <ProjectLink key={link.label + link.href} {...link} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
