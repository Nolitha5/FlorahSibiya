import './ProjectCard.css'

const isRepo = (l) => l.type === 'github'

function ProjectCard({ project, onPlayDemo, compact = false }) {
  const { title, tag, description, problem, features, techs, image, video, docs, liveDemo, colab, architecture, links, featured } = project
  const showDocs = docs && docs !== colab

  return (
    <article className={`project-card card hoverable${featured ? ' is-featured' : ''}`}>
      <div className="project-media">
        <img src={image} alt={`${title} preview`} loading="lazy" decoding="async" />
        {video && (
          <button className="play-btn" onClick={() => onPlayDemo?.(project)} aria-label={`Watch demo video for ${title}`}>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
          </button>
        )}
        <span className="project-tag">{tag}</span>
      </div>

      <div className="project-body">
        <h3 className="h3">{title}</h3>
        <p className="project-desc">{description}</p>

        {!compact && problem && (
          <p className="project-problem"><strong>Problem:</strong> {problem}</p>
        )}
        {!compact && features.length > 0 && (
          <ul className="project-features">
            {features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        )}

        <div className="chips project-techs" aria-label="Technologies used">
          {techs.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>

        <div className="project-actions">
          {liveDemo && <a className="btn btn-primary btn-sm" href={liveDemo} target="_blank" rel="noreferrer">View Project ↗</a>}
          {video && <button className="btn btn-secondary btn-sm" onClick={() => onPlayDemo?.(project)}>Watch Demo</button>}
          {colab && <a className="btn btn-secondary btn-sm" href={colab} target="_blank" rel="noreferrer">Colab ↗</a>}
          {showDocs && <a className="btn btn-secondary btn-sm" href={docs} target="_blank" rel="noreferrer">Docs ↗</a>}
          {architecture && <a className="btn btn-secondary btn-sm" href={architecture} target="_blank" rel="noreferrer">Architecture ↗</a>}
          {links.filter(isRepo).map((l) => (
            <a key={l.href} className="btn btn-secondary btn-sm" href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
