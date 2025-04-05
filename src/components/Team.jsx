// src/components/Team.jsx
import { teamMembers } from '../data/data';

function Team() {
  return (
    <section id="team" className="container">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.name} className="team-card">
            <div className="team-image-wrapper">
              <img
                src={`/assets/${member.image}`} // Uses the image property from data
                alt={member.name}
                className="team-image"
              />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;