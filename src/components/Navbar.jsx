import React from 'react';

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
            src="assets/img/image(1).png"
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
              <a
                className="nav-link text-lowercase"
                href="#heroParallax"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-lowercase"
                href="#experience"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-lowercase"
                href="#education"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                education
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-lowercase"
                href="#variousProjects"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                various projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-lowercase"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
