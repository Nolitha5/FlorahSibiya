import { Link } from 'react-router-dom'
import usePageMeta from '../components/usePageMeta'
import { packages, services } from '../data/pricing'
import { contactInfo } from '../data/site'
import './Pricing.css'

const icons = {
  layout: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 20V9" /></>,
  stack: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></>,
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />,
  flow: <><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.5 6H14a3 3 0 0 1 3 3v6.5" /></>,
  plug: <path d="M9 3v5M15 3v5M7 8h10v3a5 5 0 0 1-10 0V8ZM12 16v5" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
}

const wa = (text) => `${contactInfo.whatsapp}?text=${encodeURIComponent(text)}`

export default function Pricing() {
  usePageMeta('Pricing', 'Website packages from R2500 and custom quotes for full-stack, AI integration, automation and API work.')

  return (
    <>
      <section className="page-hero bg-glow">
        <div className="container">
          <span className="eyebrow">Services &amp; pricing</span>
          <h1 className="h1">Websites and software, <span className="text-gradient">priced clearly</span></h1>
          <p className="lead">Fixed once-off packages for business and portfolio websites. Anything more custom is quoted to fit your project.</p>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          <div className="section-head"><span className="eyebrow">Website packages</span><h2 className="h2">Pick a package</h2></div>
          <div className="grid grid-3 packages">
            {packages.map((p) => (
              <div key={p.id} className={`card package${p.featured ? ' featured' : ''}`}>
                {p.featured && <span className="ribbon">Most popular</span>}
                <h3 className="plan-name">{p.name}</h3>
                <div className="plan-price">{p.price}<small>{p.note}</small></div>
                <ul className="plan-list">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a
                  className={`btn ${p.featured ? 'btn-primary' : 'btn-secondary'}`}
                  href={wa(`Hi Florah, I'm interested in the ${p.name} website package (${p.price}).`)}
                  target="_blank" rel="noreferrer"
                >Get Started on WhatsApp</a>
              </div>
            ))}
          </div>
          <p className="fine-print">Package prices are for standard websites. Final scope is confirmed with you before work starts.</p>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Custom work</span>
            <h2 className="h2">Services quoted per project</h2>
            <p className="lead">Pricing depends on requirements and complexity, so these are priced as a custom quote after we discuss your project.</p>
          </div>
          <div className="grid grid-3">
            {services.map((s) => (
              <div key={s.id} className="card hoverable service">
                <span className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icons[s.icon]}</svg>
                </span>
                <h3 className="h3">{s.title}</h3>
                <p className="muted">{s.description}</p>
                <ul className="deliverables">
                  {s.deliverables.map((d) => <li key={d}>{d}</li>)}
                </ul>
                <span className="chip chip-violet">Custom quote</span>
                <Link to={`/contact?type=${encodeURIComponent(s.title)}`} className="btn btn-secondary btn-sm">Discuss a project →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card cta-band-lite">
            <h2 className="h2">Not sure what you need?</h2>
            <p className="lead" style={{ marginTop: '0.5rem' }}>Tell me about your project and I’ll suggest the simplest way to get it done.</p>
            <div className="btn-row" style={{ marginTop: '1.25rem' }}>
              <Link to="/contact" className="btn btn-primary">Request a quote</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
