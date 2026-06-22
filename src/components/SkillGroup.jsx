import SkillBar from './SkillBar'
import './SkillGroup.css'

function SkillGroup({ title, skills }) {
  return (
    <div className="skill-group">
      <div className="skill-group-title">{title}</div>
      <div className="skill-list">
        {skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  )
}

export default SkillGroup
