import { useState } from 'react'
import ProjectCard from './ProjectCard'
import VideoModal from './VideoModal'
import { projects } from '../data/projects'
import './Projects.css'

function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <section id="projects">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Portfolio</div>
            <h2 className="section-title">Selected projects</h2>
            <p className="section-desc">
              A range of work spanning agentic AI systems, LLM integrations, full-stack applications, and more.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onPlayDemo={setActiveProject}
              />
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <VideoModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  )
}

export default Projects
