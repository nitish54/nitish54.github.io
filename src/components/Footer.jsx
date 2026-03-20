import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Designed & built by{' '}
        <a href="https://github.com/nitish54" target="_blank" rel="noopener noreferrer">
          Nitish Kumar Sinha
        </a>
      </p>
      <div className="footer-links">
        <a href="https://github.com/nitish54" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:54nitish@gmail.com">Email</a>
        <a href="tel:+919907529269">+91 9907529269</a>
      </div>
    </footer>
  );
}

export default Footer;
