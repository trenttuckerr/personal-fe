import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-box">
        <div className="contact-content">
          <h2 className="contact-title">Contact</h2>
          <p className="contact-description">
            Feel free to reach out.
          </p>
          <div className="contact-buttons">
            <a
              href="mailto:ttucker296@gmail.com"
              className="contact-button"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/-trent-tucker"
              className="contact-button linkedin-button"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
