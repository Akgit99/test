// src/components/Team.jsx
import { teamMembers } from '../data/data';

function Team() {
  return (
    <section id="team" className="container">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.name} className="team-card">
            <div style={{
              width: '150px',
              height: '150px',
              background: '#33CCFF',
              borderRadius: '50%',
              margin: '0 auto 15px'
            }}></div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;