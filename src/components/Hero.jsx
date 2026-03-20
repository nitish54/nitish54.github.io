import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, my name is</p>

        <h1 className="hero-name">Nitish Kumar Sinha.</h1>

        <h2 className="hero-title">I build scalable distributed systems.</h2>

        <p className="hero-tagline">
          Senior Software Engineer with 11+ years of experience designing and architecting
          cloud-native, distributed platforms — currently at Atlassian, Bangalore.
        </p>

        <p className="hero-location">
          <span role="img" aria-label="location">📍</span>{' '}Bangalore, Karnataka &nbsp;|&nbsp;
          <span role="img" aria-label="email">✉</span>{' '}
          <a href="mailto:54nitish@gmail.com">54nitish@gmail.com</a> &nbsp;|&nbsp;
          <span role="img" aria-label="phone">📱</span>{' '}
          <a href="tel:+919907529269">+91 9907529269</a>
        </p>

        <div className="hero-cta">
          <a href="#experience" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
        </div>
      </div>

      <div className="hero-social">
        <a href="https://github.com/nitish54" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:54nitish@gmail.com">Email</a>
      </div>

      <div className="hero-email">
        <a href="mailto:54nitish@gmail.com">54nitish@gmail.com</a>
      </div>
    </section>
  );
}

export default Hero;
