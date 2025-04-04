// src/components/Events.jsx
import { events } from '../data/data';

function Events() {
  const handleRegister = async (eventTitle) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_id: eventTitle,
          name: prompt('Enter your name:'),
          email: prompt('Enter your email:'),
          phone: prompt('Enter your phone (optional):')
        })
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <section id="events" className="container">
      <h2>Events</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {events.map((event) => (
          <div key={event.title} className="event-card">
            <img src={event.image} alt={event.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>Duration: {event.duration}</p>
            <button onClick={() => event.actionText === 'Register' ? handleRegister(event.title) : null}>
              {event.actionText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;