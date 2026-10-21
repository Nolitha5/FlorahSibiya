import { useMemo, useState } from 'react'
import usePageMeta from '../components/usePageMeta'
import ProjectCard from '../components/ProjectCard'
import VideoModal from '../components/VideoModal'
import { projects, categories } from '../data/projects'
import './Projects.css'

export default function Projects() {
  usePageMeta('Projects', 'AI, automation and full-stack projects by Florah Nolitha Sibiya, with live demos, documentation and source code.')
  const [active, setActive] = useState('all')
  const [playing, setPlaying] = useState(null)
  const shown = useMemo(() => (active === 'all' ? projects : projects.filter((p) => p.category === active)), [active])

  return (
    <>
      <section className="page-hero bg-glow">
        <div className="container">
          <span className="eyebrow">Portfolio</span>
          <h1 className="h1">Projects that show <span className="text-gradient">what I can build</span></h1>
          <p className="lead">AI systems, automation and web applications. Each card lists the problem it addresses, its features and the technologies used.</p>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="filters" role="group" aria-label="Filter projects by category">
            {categories.map((c) => {
              const count = c.id === 'all' ? projects.length : projects.filter((p) => p.category === c.id).length
              return (
                <button key={c.id} className={`filter${active === c.id ? ' active' : ''}`} aria-pressed={active === c.id} onClick={() => setActive(c.id)}>
                  {c.label} <span>{count}</span>
                </button>
              )
            })}
          </div>
          <div className="grid grid-2 projects-grid" aria-live="polite">
            {shown.map((p) => <ProjectCard key={p.id} project={p} onPlayDemo={setPlaying} />)}
          </div>
        </div>
      </section>

      {playing && <VideoModal project={playing} onClose={() => setPlaying(null)} />}
    </>
  )
}
