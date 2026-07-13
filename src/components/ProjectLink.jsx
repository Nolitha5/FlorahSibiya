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

function ColabIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.9 4.8C14.4 2.3 10.8 1.3 7.5 2.2L9.9 4.6c2-.3 4.1.3 5.6 1.8 2.3 2.3 2.3 6.1 0 8.5l2.4 2.4c3.4-3.5 3.4-9 0-12.5zM14.1 19.4l-2.4-2.4c-2 .3-4.1-.3-5.6-1.8-2.3-2.3-2.3-6.1 0-8.5L3.7 4.3c-3.4 3.5-3.4 9 0 12.5 2.4 2.5 6.1 3.5 9.3 2.6l1.1 1.1V19.4z"/>
      <path d="M9.5 14.5c.5.5 1.1.7 1.8.7h.1l-1.9-1.9v.1c0 .5.2 1 .5 1.4l-.5-.3zm4.8-4.8l-1.4 1.4 1.9 1.9c.3-.5.3-1.1 0-1.6l-.5 1.5-1.4-1.4 1.4-1.8z"/>
    </svg>
  )
}

function ProjectLink({ label, href, type, onClick, disabled }) {
  const disabledClass = disabled ? ' project-link--disabled' : ''

  // Video — renders as button
  if (type === 'video') {
    return (
      <button
        className={`project-link${disabledClass}`}
        onClick={!disabled ? onClick : undefined}
        title={disabled ? 'Demo coming soon' : 'Watch demo'}
        disabled={disabled}
      >
        <PlayIcon />
        {label}
      </button>
    )
  }

  // Live Demo — grayed out if no href
  if (type === 'demo') {
    if (disabled || !href) {
      return (
        <span className="project-link project-link--disabled" title="Coming soon">
          <ExternalLinkIcon />
          {label}
        </span>
      )
    }
    return (
      <a href={href} target="_blank" rel="noreferrer" className="project-link">
        <ExternalLinkIcon />
        {label}
      </a>
    )
  }

  // Colab
  if (type === 'colab') {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="project-link project-link--colab">
        <ColabIcon />
        {label}
      </a>
    )
  }

  // Docs
  if (type === 'docs') {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="project-link">
        <DocsIcon />
        {label}
      </a>
    )
  }

  // GitHub and anything else
  return (
    <a href={href} target="_blank" rel="noreferrer" className="project-link">
      {type === 'github' ? <GitHubOutlineIcon /> : <ExternalLinkIcon />}
      {label}
    </a>
  )
}

export default ProjectLink
