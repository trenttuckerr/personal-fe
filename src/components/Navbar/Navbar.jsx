import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-black"
      id="mainNav"
      style={{
        background: 'var(--bs-primary-text-emphasis)',
        boxShadow: '3px 3px 19px white',
        borderStyle: 'none',
        borderColor: 'white',
      }}
      data-testid="navbar"
    >
      <div className="container">
        <picture className="mr-auto">
          <img
            src="assets/img/Trent-T-Logo.png"
            style={{ width: '50px' }}
          />
        </picture>
        <button
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          className="navbar-toggler navbar-toggler-right"
          type="button"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ background: 'transparent' }}
        >
          <i className="fa fa-bars"></i>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarResponsive"
        >
          <ul className="navbar-nav ms-auto text-uppercase">
            <li className="nav-item">
              <Link
                className="nav-link text-lowercase"
                to="hero"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                smooth={true}
                duration={500}
              >
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-lowercase"
                to="experience"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                smooth={true}
                duration={500}
              >
                experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-lowercase"
                to="fw_al_007"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                smooth={true}
                duration={500}
              >
                education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-lowercase"
                to="portfolio"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                smooth={true}
                duration={500}
              >
                various projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-lowercase"
                to="contact"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                smooth={true}
                duration={500}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
