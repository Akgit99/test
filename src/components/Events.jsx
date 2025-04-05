// src/components/Events.jsx
import { useState, useEffect } from 'react';
import { events } from '../data/data';

function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [countdowns, setCountdowns] = useState({}); // Store countdowns for each event

  // Update countdowns every second
  useEffect(() => {
    const interval = setInterval(() => {
      const newCountdowns = {};
      events.forEach((event) => {
        const timeLeft = calculateTimeLeft(event.startDate);
        newCountdowns[event.title] = timeLeft;
      });
      setCountdowns(newCountdowns);
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const calculateTimeLeft = (startDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const difference = start - now;

    if (difference <= 0) {
      return "Event has started!";
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const handleOpenModal = (eventTitle) => {
    setSelectedEvent(eventTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { name, email, phone } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      alert('Name is required to register.');
      return;
    }
    if (!email) {
      alert('Email is required to register.');
      return;
    }
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const registrationData = {
      event_id: selectedEvent,
      name,
      email,
      phone: phone || null,
    };

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registrationData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        handleCloseModal();
      } else {
        alert(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      alert('Registration failed due to a network error. Please try again.');
    }
  };

  return (
    <section id="events" className="container">
      <h2>Events</h2>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.title} className="event-card">
            <div className="event-image-wrapper">
              <img src={event.image} alt={event.title} className="event-image" />
            </div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-description">{event.description}</p>
              <p className="event-duration">
                <strong>Time Left:</strong> {countdowns[event.title] || 'Calculating...'}
              </p>
              <button
                className="event-button"
                onClick={() =>
                  event.actionText === 'Register' ? handleOpenModal(event.title) : null
                }
              >
                {event.actionText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Register for {selectedEvent}</h3>
            <form className="registration-form" onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone (optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="modal-buttons">
                <button type="submit" className="submit-button">
                  Register
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Events;