/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-description">
          Connect here
        </p>
        <a
          href="mailto:ttucker296@gmail.com"
          className="contact-button"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default Contact;
