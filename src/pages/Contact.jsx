import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import usePageMeta from '../components/usePageMeta'
import { contactInfo, socialLinks } from '../data/site'
import { GitHubIcon, LinkedInIcon, EmailIcon, PhoneIcon } from '../components/Icons'
import './Contact.css'

const baseTypes = ['Job opportunity', 'Website package', 'Custom software or AI project', 'General question']
// Set VITE_CONTACT_ENDPOINT (e.g. a Formspree URL) at build time to send messages from the form.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (!v.type) e.type = 'Please choose an enquiry type.'
  if (v.message.trim().length < 10) e.message = 'Please write at least a short message (10+ characters).'
  return e
}

export default function Contact() {
  usePageMeta('Contact', 'Contact Florah Nolitha Sibiya about software and AI development opportunities or website projects.')
  const [params] = useSearchParams()
  const preset = params.get('type') || ''
  const types = preset && !baseTypes.includes(preset) ? [preset, ...baseTypes] : baseTypes
  const [values, setValues] = useState({ name: '', email: '', type: preset, message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ state: 'idle', text: '' })

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const onSubmit = async (ev) => {
    ev.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) {
      setStatus({ state: 'error', text: 'Please fix the highlighted fields and try again.' })
      return
    }
    const subject = `${values.type} — ${values.name.trim()}`
    if (ENDPOINT) {
      setStatus({ state: 'sending', text: 'Sending…' })
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...values, subject }),
        })
        if (!res.ok) throw new Error('bad response')
        setStatus({ state: 'success', text: 'Thanks! Your message has been sent. I’ll reply by email.' })
        setValues({ name: '', email: '', type: '', message: '' })
      } catch {
        setStatus({ state: 'error', text: `Sorry, that didn’t send. Please email me directly at ${contactInfo.email}.` })
      }
      return
    }
    // No form backend configured: open the visitor's email app with the message ready to send.
    const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus({ state: 'success', text: 'Your email app should open with the message ready. Press send there to deliver it. If nothing opens, email me directly at ' + contactInfo.email + '.' })
  }

  const cls = (n) => (errors[n] ? 'field has-error' : 'field')

  return (
    <>
      <section className="page-hero bg-glow">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className="h1">Let’s <span className="text-gradient">work together</span></h1>
          <p className="lead">Recruiters, hiring managers and clients are all welcome. Send a message or use any of the channels below.</p>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: '1.5rem' }}>
        <div className="container contact-grid">
          <div className="contact-channels">
            <a className="card hoverable channel" href={`mailto:${contactInfo.email}`}>
              <EmailIcon aria-hidden="true" /><div><strong>Email</strong><span>{contactInfo.email}</span></div>
            </a>
            <a className="card hoverable channel" href={contactInfo.whatsapp} target="_blank" rel="noreferrer">
              <PhoneIcon aria-hidden="true" /><div><strong>WhatsApp / phone</strong><span>{contactInfo.phone}</span></div>
            </a>
            <a className="card hoverable channel" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon aria-hidden="true" /><div><strong>LinkedIn</strong><span>nolitha-sibiya</span></div>
            </a>
            <a className="card hoverable channel" href={socialLinks.github} target="_blank" rel="noreferrer">
              <GitHubIcon aria-hidden="true" /><div><strong>GitHub</strong><span>Nolitha5</span></div>
            </a>
            <a className="card hoverable channel" href={contactInfo.resume} target="_blank" rel="noreferrer">
              <span className="cv-glyph" aria-hidden="true">CV</span><div><strong>Download CV</strong><span>PDF</span></div>
            </a>
          </div>

          <form className="card contact-form" onSubmit={onSubmit} noValidate>
            <h2 className="h3">Send a message</h2>
            <div className={cls('name')}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" autoComplete="name" value={values.name} onChange={onChange} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />
              {errors.name && <p id="name-err" className="err">{errors.name}</p>}
            </div>
            <div className={cls('email')}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} />
              {errors.email && <p id="email-err" className="err">{errors.email}</p>}
            </div>
            <div className={cls('type')}>
              <label htmlFor="type">Enquiry type</label>
              <select id="type" name="type" value={values.type} onChange={onChange} aria-invalid={!!errors.type} aria-describedby={errors.type ? 'type-err' : undefined}>
                <option value="">Select…</option>
                {types.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.type && <p id="type-err" className="err">{errors.type}</p>}
            </div>
            <div className={cls('message')}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={values.message} onChange={onChange} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} />
              {errors.message && <p id="message-err" className="err">{errors.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary" disabled={status.state === 'sending'}>
              {status.state === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p className={`form-status ${status.state}`} role="status" aria-live="polite">{status.text}</p>
          </form>
        </div>
      </section>
    </>
  )
}
