import SkillGroup from './SkillGroup'
import { skillGroups } from '../data/skills'
import './Skills.css'

function Skills() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Technical skills</div>
          <h2 className="section-title">What I work with</h2>
          <p className="section-desc">
            A practical toolkit built through real projects — from frontend interfaces to
            backend APIs and AI systems.
          </p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillGroup key={group.id} title={group.title} skills={group.skills} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
