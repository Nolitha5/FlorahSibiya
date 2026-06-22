import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import './Projects.css'

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Selected projects</h2>
          <p className="section-desc">
            A range of work spanning AI systems, web applications, and biometric security.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
