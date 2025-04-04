// src/App.jsx
import { useEffect, useState } from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#121628'
      }}>
        <h1 style={{ fontSize: '2.5rem', animation: 'pulse 2s infinite' }}>
          Science Circus
        </h1>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Events />
      <Gallery />
      <Sponsors />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;