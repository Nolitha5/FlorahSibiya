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

        <div className="project-links">
          {video && (
            <ProjectLink
              type="video"
              label="Watch Demo"
              onClick={() => onPlayDemo(project)}
            />
          )}
          {docs && (
            <ProjectLink
              type="docs"
              label="Docs"
              href={docs}
            />
          )}
          {links.map((link) => (
            <ProjectLink key={link.label + link.href} {...link} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
