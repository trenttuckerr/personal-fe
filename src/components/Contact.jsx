/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-description">
          Feel free to reach out.
        </p>
        <a
          href="mailto:ttucker296@gmail.com"
          className="contact-button"
        >
          Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
