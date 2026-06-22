import './AboutCard.css'

function AboutCard({ icon, title, description }) {
  return (
    <div className="about-card">
      <div className="about-card-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default AboutCard
