// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Trent Tucker</div>
        <ul className="nav-links">
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
