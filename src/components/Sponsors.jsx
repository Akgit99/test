// src/components/Sponsors.jsx
import { sponsors } from '../data/data';

function Sponsors() {
  return (
    <section id="sponsors" className="container">
      <h2>Our Sponsors</h2>
      <div className="sponsor-grid">
        {sponsors.map((sponsor) => (
          <div key={sponsor.name} style={{ padding: '20px', background: '#1A1F34', borderRadius: '5px' }}>
            <h3>{sponsor.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sponsors;