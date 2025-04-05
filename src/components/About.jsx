// About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Where Science Meets Entertainment</h2>
        <p className="about-description">
          Science Circus is an immersive event that brings together the wonder of physics and mathematics in an entertaining format. We believe that learning should be fun, interactive, and memorable.
        </p>
        <p className="about-description">
          Through carefully designed activities, games, and challenges, participants will explore scientific concepts, solve puzzles, and witness the beauty of mathematical patterns that govern our universe.
        </p>
        <div className="about-highlights">
  <div className="highlight-item">
    <span className="highlight-icon"><i className="fas fa-atom"></i></span>
    <p>Physics Exploration</p>
  </div>
  <div className="highlight-item">
    <span className="highlight-icon"><i className="fas fa-lightbulb"></i></span>
    <p>Interactive Learning</p>
  </div>
  <div className="highlight-item">
    <span className="highlight-icon"><i className="fas fa-calculator"></i></span>
    <p>Mathematical Challenges</p>
  </div>
  <div className="highlight-item">
    <span className="highlight-icon"><i className="fas fa-users"></i></span>
    <p>Team Collaboration</p>
  </div>
</div>
      </div>
    </section>
  );
};

export default About;