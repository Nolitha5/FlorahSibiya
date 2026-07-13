import ProjectLink from './ProjectLink'
import './ProjectCard.css'

function ProjectCard({ project, onPlayDemo }) {
  const { title, tag, description, image, featured, links, video, docs, liveDemo, colab } = project

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
          {/* Watch Demo — always shown, grayed out if no video yet */}
          <ProjectLink
            type="video"
            label="Watch Demo"
            onClick={video ? () => onPlayDemo(project) : null}
            disabled={!video}
          />

          {/* Live Demo — always shown, grayed out if no URL yet */}
          <ProjectLink
            type="demo"
            label="Live Demo"
            href={liveDemo}
            disabled={!liveDemo}
          />

          {/* Colab — only shown for Colab projects */}
          {colab && (
            <ProjectLink type="colab" label="Colab" href={colab} />
          )}

          {/* Docs — always shown */}
          {docs && (
            <ProjectLink type="docs" label="Docs" href={docs} />
          )}

          {/* GitHub */}
          {links.map((link) => (
            <ProjectLink key={link.label + link.href} {...link} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
