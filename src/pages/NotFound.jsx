import { Link } from 'react-router-dom'
import usePageMeta from '../components/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found', 'The page you are looking for does not exist.')
  return (
    <section className="page-hero bg-glow">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 className="h1">This page <span className="text-gradient">doesn’t exist</span></h1>
        <p className="lead">The link may be broken or the page may have moved.</p>
        <div className="btn-row" style={{ marginTop: '1.5rem' }}>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <Link to="/projects" className="btn btn-secondary">See projects</Link>
        </div>
      </div>
    </section>
  )
}
