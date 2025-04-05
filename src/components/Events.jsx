import { events } from '../data/data';

function Events() {
  const handleRegister = async (eventTitle) => {
    try {
      // Prompt for user input with validation
      const name = prompt('Enter your name:');
      if (!name) {
        alert('Name is required to register.');
        return;
      }

      const email = prompt('Enter your email:');
      if (!email) {
        alert('Email is required to register.');
        return;
      }

      // Basic email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      const phone = prompt('Enter your phone (optional):');

      // Prepare the registration data
      const registrationData = {
        event_id: eventTitle,
        name,
        email,
        phone: phone || null // Ensure phone is null if not provided
      };

      console.log('Sending registration data:', registrationData); // Log the data being sent

      // Send the registration request
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registrationData)
      });

      const data = await response.json();

      // Check if the request was successful
      if (response.ok) {
        alert(data.message); // Should show "Successfully registered!"
      } else {
        console.error('Registration failed with status:', response.status, 'Message:', data.message);
        alert(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed due to a network error. Please try again.');
    }
  };

  return (
    <section id="events" className="container">
      <h2>Events</h2>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.title} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p><strong>Duration:</strong> {event.duration}</p>
              <button
                className="event-button"
                onClick={() => event.actionText === 'Register' ? handleRegister(event.title) : null}
              >
                {event.actionText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;