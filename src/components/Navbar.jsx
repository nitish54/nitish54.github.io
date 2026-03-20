import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        nks<span>()</span>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={closeMenu}>{link.label}</a>
          </li>
        ))}
        {menuOpen && (
          <>
            <li>
              <a
                href="https://github.com/nitish54"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/54nitish/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="/resume/NITISH%20KUMAR%20SINHA.pdf"
                download="Nitish_Kumar_Sinha_Resume.pdf"
                onClick={closeMenu}
                className="navbar-resume-btn"
              >
                Resume
              </a>
            </li>
          </>
        )}
      </ul>

      <a
        href="/resume/NITISH%20KUMAR%20SINHA.pdf"
        download="Nitish_Kumar_Sinha_Resume.pdf"
        className="navbar-resume-btn"
      >
        Resume
      </a>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        role="button"
        aria-label="Toggle menu"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}

export default Navbar;
