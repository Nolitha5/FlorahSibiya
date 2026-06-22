import './ContactChannel.css'

function ContactChannel({ icon, label, value, href, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="contact-channel"
    >
      <div className="contact-channel-icon">{icon}</div>
      <div>
        <div className="contact-channel-label">{label}</div>
        <div className="contact-channel-value">{value}</div>
      </div>
    </a>
  )
}

export default ContactChannel
