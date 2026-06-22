import { GitHubOutlineIcon, ExternalLinkIcon } from './Icons'
import './ProjectLink.css'

function ProjectLink({ label, href, type }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="project-link">
      {type === 'github' ? <GitHubOutlineIcon /> : <ExternalLinkIcon />}
      {label}
    </a>
  )
}

export default ProjectLink
