import { GitHubOutlineIcon, ExternalLinkIcon } from './Icons'
import './ProjectLink.css'

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="10,8 17,12 10,16" fill="currentColor" />
    </svg>
  )
}

function DocsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  )
}

function ProjectLink({ label, href, type, onClick }) {
  if (type === 'video') {
    return (
      <button className="project-link" onClick={onClick}>
        <PlayIcon />
        {label}
      </button>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className="project-link">
      {type === 'github' ? <GitHubOutlineIcon /> : type === 'docs' ? <DocsIcon /> : <ExternalLinkIcon />}
      {label}
    </a>
  )
}

export default ProjectLink
