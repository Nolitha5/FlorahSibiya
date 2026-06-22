import ProjectLink from './ProjectLink'
import './ProjectCard.css'

function ProjectCard({ project }) {
  const { title, tag, description, image, featured, links } = project

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
          {links.map((link) => (
            <ProjectLink key={link.label + link.href} {...link} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
