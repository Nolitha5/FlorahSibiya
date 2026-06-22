import './SkillBar.css'

function SkillBar({ name, level, value }) {
  return (
    <div className="skill-item">
      <div className="skill-row">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

export default SkillBar
