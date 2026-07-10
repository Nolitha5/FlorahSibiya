import { useEffect, useRef } from 'react'
import './VideoModal.css'

function VideoModal({ project, onClose }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdrop}
      role="dialog"
      aria-modal="true"
      aria-label={`Demo video for ${project.title}`}
    >
      <div className="modal-panel">
        <div className="modal-header">
          <div>
            <span className="modal-tag">{project.tag}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close video">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="modal-video-wrap">
          <video
            ref={videoRef}
            src={project.video}
            controls
            autoPlay
            playsInline
            poster={project.image}
            className="modal-video"
          >
            Your browser does not support HTML5 video.
          </video>
        </div>

        <p className="modal-desc">{project.description}</p>

        <div className="modal-links">
          {project.docs && (
            <a href={project.docs} target="_blank" rel="noreferrer" className="btn-secondary">
              📄 Documentation ↗
            </a>
          )}
          {project.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="btn-secondary">
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VideoModal
